/**
 * AYSH LUX HAVEN - AVAILABILITY ENQUIRY LOGIC
 * Direct WhatsApp Enquiry Integration (+91 92072 86470)
 * Real Accommodation Types: AC Room, Non-AC Room, 2 BHK, Dormitory
 */

document.addEventListener('DOMContentLoaded', () => {
  // Official Hotel WhatsApp Booking Desk Number
  const HOTEL_WHATSAPP_NUMBER = '919207286470';

  // 1. Helper to format date for input (YYYY-MM-DD)
  const toISODate = (date) => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  // Helper to format date cleanly as "20 August 2026"
  const formatEnquiryDate = (isoString) => {
    if (!isoString) return 'Flexible';
    const parts = isoString.split('-');
    if (parts.length === 3) {
      const d = new Date(parts[0], parts[1] - 1, parts[2]);
      if (!isNaN(d.getTime())) {
        return d.toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        });
      }
    }
    return isoString;
  };

  // Helper to clean guest string to pure number (e.g. "2 Guests" -> "2")
  const cleanGuestsValue = (val) => {
    if (!val) return '2';
    const match = val.match(/\d+(\+)?/);
    return match ? match[0] : val;
  };

  // 2. Initialize Date Defaults
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const dayAfterTomorrow = new Date(today);
  dayAfterTomorrow.setDate(today.getDate() + 3);

  const heroCheckin = document.getElementById('heroCheckin');
  const heroCheckout = document.getElementById('heroCheckout');
  const modalCheckin = document.getElementById('modalCheckin');
  const modalCheckout = document.getElementById('modalCheckout');

  // Set default dates and min constraints for hero bar
  if (heroCheckin && heroCheckout) {
    heroCheckin.value = toISODate(tomorrow);
    heroCheckout.value = toISODate(dayAfterTomorrow);
    heroCheckin.min = toISODate(today);
    heroCheckout.min = toISODate(tomorrow);

    heroCheckin.addEventListener('change', () => {
      if (heroCheckin.value) {
        const selectedCheckin = new Date(heroCheckin.value);
        const minCheckout = new Date(selectedCheckin);
        minCheckout.setDate(minCheckout.getDate() + 1);

        heroCheckout.min = toISODate(minCheckout);

        if (!heroCheckout.value || new Date(heroCheckout.value) <= selectedCheckin) {
          heroCheckout.value = toISODate(minCheckout);
        }
      }
    });
  }

  // Set default dates and min constraints for modal
  if (modalCheckin && modalCheckout) {
    modalCheckin.value = toISODate(tomorrow);
    modalCheckout.value = toISODate(dayAfterTomorrow);
    modalCheckin.min = toISODate(today);
    modalCheckout.min = toISODate(tomorrow);

    modalCheckin.addEventListener('change', () => {
      if (modalCheckin.value) {
        const selectedCheckin = new Date(modalCheckin.value);
        const minCheckout = new Date(selectedCheckin);
        minCheckout.setDate(minCheckout.getDate() + 1);

        modalCheckout.min = toISODate(minCheckout);

        if (!modalCheckout.value || new Date(modalCheckout.value) <= selectedCheckin) {
          modalCheckout.value = toISODate(minCheckout);
        }
      }
    });
  }

  // 3. Helper to format exact message and open WhatsApp
  const triggerWhatsAppEnquiry = ({ checkin, checkout, guests, accommodation }) => {
    const formattedCheckin = formatEnquiryDate(checkin);
    const formattedCheckout = formatEnquiryDate(checkout);
    const formattedGuests = cleanGuestsValue(guests);

    // Exact required message structure
    const messageLines = [
      'Hello Aysh Lux Haven,',
      '',
      'I would like to enquire about availability.',
      '',
      `Check-in: ${formattedCheckin}`,
      `Check-out: ${formattedCheckout}`,
      `Guests: ${formattedGuests}`,
      `Accommodation: ${accommodation}`,
      '',
      'Please let me know the availability and tariff.',
      '',
      'Thank you.'
    ];

    const message = messageLines.join('\n');
    const encodedMsg = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${HOTEL_WHATSAPP_NUMBER}?text=${encodedMsg}`;

    if (typeof showToast === 'function') {
      showToast('Opening WhatsApp to send your availability enquiry...');
    }

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  // 4. Hero Quick Bar Submit Handler ("CHECK AVAILABILITY")
  const heroBookingBar = document.getElementById('heroBookingBar');
  heroBookingBar?.addEventListener('submit', (e) => {
    e.preventDefault();

    const checkin = heroCheckin?.value;
    const checkout = heroCheckout?.value;
    const guests = document.getElementById('heroGuests')?.value || '2';
    const accommodation = document.getElementById('heroRoomType')?.value || 'AC Room';

    // Validation
    if (!checkin || !checkout) {
      if (typeof showToast === 'function') {
        showToast('Please select both Check-In and Check-Out dates.');
      }
      return;
    }

    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);

    if (checkoutDate <= checkinDate) {
      if (typeof showToast === 'function') {
        showToast('Check-out date must be after Check-in date.');
      }
      return;
    }

    triggerWhatsAppEnquiry({
      checkin,
      checkout,
      guests,
      accommodation
    });
  });

  // 5. Enquiry Modal Logic
  const bookingModal = document.getElementById('bookingModal');
  const openModalBtns = document.querySelectorAll('.open-booking-modal');
  const closeModalBtns = document.querySelectorAll('.close-booking-modal');
  const bookingForm = document.getElementById('bookingForm');
  const modalRoomSelect = document.getElementById('modalRoom');

  const openEnquiryModal = (roomName = null) => {
    if (roomName && modalRoomSelect) {
      modalRoomSelect.value = roomName;
    }

    // Sync dates from hero bar if available
    if (heroCheckin && modalCheckin && heroCheckin.value) {
      modalCheckin.value = heroCheckin.value;
    }
    if (heroCheckout && modalCheckout && heroCheckout.value) {
      modalCheckout.value = heroCheckout.value;
    }

    bookingModal?.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeEnquiryModal = () => {
    bookingModal?.classList.remove('open');
    document.body.style.overflow = '';
  };

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const room = btn.getAttribute('data-room') || null;
      openEnquiryModal(room);
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', closeEnquiryModal);
  });

  bookingModal?.addEventListener('click', (e) => {
    if (e.target === bookingModal) {
      closeEnquiryModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && bookingModal?.classList.contains('open')) {
      closeEnquiryModal();
    }
  });

  // 6. Modal Form Submit
  bookingForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const checkin = modalCheckin?.value;
    const checkout = modalCheckout?.value;
    const accommodation = modalRoomSelect?.value || 'AC Room';
    const guests = document.getElementById('modalGuests')?.value || '2';

    // Validation
    if (!checkin || !checkout) {
      if (typeof showToast === 'function') {
        showToast('Please select both Check-In and Check-Out dates.');
      }
      return;
    }

    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);

    if (checkoutDate <= checkinDate) {
      if (typeof showToast === 'function') {
        showToast('Check-out date must be after Check-in date.');
      }
      return;
    }

    triggerWhatsAppEnquiry({
      checkin,
      checkout,
      guests,
      accommodation
    });

    closeEnquiryModal();
  });

  // 7. Contact Section Form Handler
  const contactForm = document.getElementById('contactForm');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName')?.value || 'Guest';
    const phone = document.getElementById('contactPhone')?.value || '';
    const msg = document.getElementById('contactMessage')?.value || '';

    let waMsg = `Hello Aysh Lux Haven,\n\n`;
    waMsg += `I would like to enquire about accommodation in Wayanad.\n\n`;
    waMsg += `Name: ${name}\n`;
    if (phone) waMsg += `Phone: ${phone}\n`;
    if (msg) waMsg += `Message: ${msg}\n\n`;
    waMsg += `Please let me know further details.\n\nThank you.`;

    const waUrl = `https://wa.me/${HOTEL_WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`;
    window.open(waUrl, '_blank');

    if (typeof showToast === 'function') {
      showToast('Opening WhatsApp to send your message to our desk...');
    }
    contactForm.reset();
  });
});
