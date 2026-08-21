/**
 * AYSH LUX HAVEN - MAIN JAVASCRIPT
 * Subtle interactions, scroll effects, mobile navigation, photo gallery, 8-Destination Explorer & Detail Modal
 */

// 8 Verified Wayanad Destinations Dataset (Using actual photography from destinations/)
const WAYANAD_DESTINATIONS = {
  'banasura-sagar-dam': {
    name: 'Banasura Sagar Dam',
    category: 'SCENIC LANDMARK',
    imageSlot: './destinations/ChatGPT Image Aug 21, 2026 at 03_09_25 PM.png',
    intro: 'A spectacular reservoir surrounded by the Banasura hills, known for panoramic mountain views and boating.',
    distance: '19 km',
    driveTime: 'Approximately 40 min',
    whyVisit: 'India’s largest earthen dam reservoir, framed by misty Banasura peaks and expansive serene blue waters.',
    experiences: [
      'Speedboat and pedal boating across the reservoir',
      'Panoramic mountain and island viewpoint vistas',
      'Picturesque walking paths along the dam embankment',
      'Landscape photography and garden strolls'
    ],
    bestFor: 'Families · Couples · Nature Lovers',
    duration: '2 – 3 Hours',
    bestTime: 'September to March (Post-monsoon & winter)',
    openingHours: '—',
    entryFee: '—',
    goodToKnow: 'Boating ticket counters can experience wait times during peak weekends; morning or early afternoon visits are ideal.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Banasura+Sagar+Dam+Wayanad'
  },
  'pookode-lake': {
    name: 'Pookode Lake',
    category: 'NATURE & LEISURE',
    imageSlot: './destinations/ChatGPT Image Aug 21, 2026 at 03_13_06 PM.png',
    intro: 'A serene freshwater lake surrounded by lush greenery, offering a peaceful escape in the hills.',
    distance: '20 km',
    driveTime: 'Approximately 40 min',
    whyVisit: 'A tranquil mountain lake surrounded by dense evergreen canopies, blooming water lilies, and shady tree-lined walkways.',
    experiences: [
      'Pedal boating and kayaking on calm waters',
      'Paved walking trail encircling the entire lake',
      'Freshwater aquarium and fish pond',
      'Local spice and handicraft stalls'
    ],
    bestFor: 'Families · Leisure Travellers · Nature Lovers',
    duration: '1.5 – 2 Hours',
    bestTime: 'Year-round; mornings for peaceful atmosphere',
    openingHours: '—',
    entryFee: '—',
    goodToKnow: 'Gentle, level walking paths make this destination comfortable for travellers of all age groups.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Pookode+Lake+Wayanad'
  },
  'lakkidi-view-point': {
    name: 'Lakkidi View Point',
    category: 'SCENIC VIEWPOINT',
    imageSlot: './destinations/ChatGPT Image Aug 21, 2026 at 03_12_42 PM.png',
    intro: 'A famous mountain viewpoint overlooking the misty valleys of Wayanad and the Thamarassery Ghat.',
    distance: '24 km',
    driveTime: 'Approximately 45 min',
    whyVisit: 'Known as the Gateway of Wayanad atop Thamarassery Ghat pass, offering dramatic valley views and rolling mountain mist.',
    experiences: [
      'Panoramic sweeping views of 9 winding hairpin bends below',
      'Evening mist, cool breezes, and sunset photography',
      'Scenic mountain drive along NH 766',
      'Historic Chain Tree landmark nearby'
    ],
    bestFor: 'Sightseers · Photographers · Road Trippers',
    duration: '30 – 45 Minutes',
    bestTime: 'Late afternoon to sunset for mist and twilight skies',
    openingHours: 'Open all day',
    entryFee: 'Free entry',
    goodToKnow: 'Located on the highway ridge; parking is available along designated roadside viewpoints.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Lakkidi+View+Point+Wayanad'
  },
  'chembra-peak': {
    name: 'Chembra Peak',
    category: 'TREKKING & MOUNTAINS',
    imageSlot: './destinations/ChatGPT Image Aug 21, 2026 at 03_13_59 PM.png',
    intro: 'Wayanad’s highest peak, famous for its mountain trails and the iconic heart-shaped lake.',
    distance: '30 km',
    driveTime: 'Approximately 1 hour',
    whyVisit: 'The premier highland summit in Wayanad (2,100m) featuring the legendary natural heart-shaped lake (Hridaya Saras).',
    experiences: [
      'Guided mountain trekking through tea estates and grasslands',
      'Heart-shaped natural lake viewpoint at high altitude',
      'Sweeping 360-degree vistas across Western Ghats',
      'Highland mountain biodiversity and clean air'
    ],
    bestFor: 'Trekkers · Adventure Seekers · Active Travellers',
    duration: '4 – 5 Hours (Round-trip trek)',
    bestTime: 'September to February (Early morning start)',
    openingHours: '—',
    entryFee: '—',
    goodToKnow: 'Trekking is regulated by the Forest Department; daily visitor passes are issued at the VSS base office on a first-come basis.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Chembra+Peak+Wayanad'
  },
  'soochipara-waterfalls': {
    name: 'Soochipara Waterfalls',
    category: 'WATERFALL & NATURE',
    imageSlot: './destinations/ChatGPT Image Aug 21, 2026 at 03_15_49 PM.png',
    intro: 'A dramatic three-tiered waterfall surrounded by dense forest and scenic mountain landscapes.',
    distance: '31 km',
    driveTime: 'Approximately 1 hour',
    whyVisit: 'A roaring 3-tiered waterfall (Sentinel Rock) plunging down cliff faces into natural mountain rock pools.',
    experiences: [
      'Scenic forest walk through tea plantation slopes',
      'Viewing the thunderous multi-tiered cascade',
      'Natural rock formations and cliff landscapes',
      'Deep evergreen valley atmosphere'
    ],
    bestFor: 'Nature Lovers · Photographers · Adventure Seekers',
    duration: '2 – 3 Hours',
    bestTime: 'Post-monsoon (September to January)',
    openingHours: '—',
    entryFee: '—',
    goodToKnow: 'Involves a downhill walking trail of approx. 1.5 km from the parking gate to the waterfall basin.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Soochipara+Waterfalls+Wayanad'
  },
  'edakkal-caves': {
    name: 'Edakkal Caves',
    category: 'HERITAGE & HISTORY',
    imageSlot: './destinations/ChatGPT Image Aug 19, 2026 at 04_00_48 PM.png',
    intro: 'A prehistoric rock shelter known for ancient engravings and remarkable archaeological significance.',
    distance: '29 km',
    driveTime: 'Approximately 55 min',
    whyVisit: 'One of the rare prehistoric rock art sites in South India, with ancient Neolithic and Mesolithic petroglyphs.',
    experiences: [
      'Ancient pictorial rock carvings and inscriptions',
      'Natural split-rock prehistoric mountain shelter',
      'Scenic hillside climb with wide valley panoramas',
      'Archaeological insights into Stone Age heritage'
    ],
    bestFor: 'History Buffs · Heritage Explorers · Cultural Travellers',
    duration: '2 – 2.5 Hours',
    bestTime: 'Morning hours to avoid midday hillside sun',
    openingHours: '—',
    entryFee: '—',
    goodToKnow: 'The ascent requires climbing stone steps and ramps up Ambukuthi Mala; comfortable walking shoes are recommended.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Edakkal+Caves+Wayanad'
  },
  'kuruva-island': {
    name: 'Kuruva Island',
    category: 'NATURE & ECO TOURISM',
    imageSlot: './destinations/ChatGPT Image Aug 21, 2026 at 03_16_38 PM.png',
    intro: 'A peaceful river-island ecosystem surrounded by greenery, bamboo groves and streams.',
    distance: '28 km',
    driveTime: 'Approximately 45 min',
    whyVisit: 'A protected 950-acre delta of uninhabited river islands on the Kabini River, rich in evergreen flora and serene waterways.',
    experiences: [
      'Traditional Kerala bamboo rafting across forest streams',
      'Canopy trails and wooden footbridges beneath ancient trees',
      'Birdwatching for rare and migratory river species',
      'Peaceful riverfront nature walks and quiet relaxation'
    ],
    bestFor: 'Nature Lovers · Families · Eco-Travellers',
    duration: '2 – 3 Hours',
    bestTime: 'October to May (Closed during peak monsoon flood seasons)',
    openingHours: '—',
    entryFee: '—',
    goodToKnow: 'Daily visitor entries are regulated by Forest Department tourism authorities to preserve the delicate river delta ecosystem.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kuruva+Island+Wayanad'
  },
  'phantom-rock': {
    name: 'Phantom Rock',
    category: 'NATURAL LANDMARK',
    imageSlot: './destinations/ChatGPT Image Aug 21, 2026 at 03_17_36 PM.png',
    intro: 'A distinctive rock formation with a striking silhouette, popular with photographers and nature lovers.',
    distance: '23 km',
    driveTime: 'Approximately 35 min',
    whyVisit: 'A skull-shaped natural metamorphic rock formation (Cheengeri Mala) offering panoramic views of Wayanad’s green valleys.',
    experiences: [
      'Viewing the distinctive natural skull-rock silhouette',
      'Panoramic vistas of rolling agricultural hills and valleys',
      'Short accessible walking path for all ages',
      'Convenient scenic stopover near Ambalavayal'
    ],
    bestFor: 'Sightseers · Quick Photo Stops · Families',
    duration: '30 – 45 Minutes',
    bestTime: 'Early morning or late afternoon for golden hour photography',
    openingHours: 'Open during daylight hours',
    entryFee: 'Free / Minimal parking',
    goodToKnow: 'Easily combinable in a day itinerary with nearby Edakkal Caves or heritage sites.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Phantom+Rock+Ambalavayal+Wayanad'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // 0. Suppress Pinterest Browser Extension Overlays
  const disablePinterestHover = () => {
    document.querySelectorAll('img').forEach(img => {
      img.setAttribute('nopin', 'nopin');
      img.setAttribute('data-pin-nopin', 'true');
      img.setAttribute('data-pin-no-hover', 'true');
    });
  };
  disablePinterestHover();

  // 1. Header scroll effect
  const siteHeader = document.querySelector('.site-header');
  const backToTopBtn = document.getElementById('backToTop');

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 60) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }

    if (scrollY > 500) {
      backToTopBtn?.classList.add('visible');
    } else {
      backToTopBtn?.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 2. Back to top button
  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // 3. Mobile Navigation Drawer
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  const toggleMenu = (open) => {
    const isOpen = open !== undefined ? open : !mobileDrawer?.classList.contains('open');
    mobileToggle?.classList.toggle('open', isOpen);
    mobileDrawer?.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  mobileToggle?.addEventListener('click', () => toggleMenu());

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // 4. Scroll Reveal Animations (Intersection Observer)
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.12
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('active'));
  }

  // 5. Navigation Active State on Scroll (ScrollSpy)
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const highlightNav = () => {
    const scrollPos = window.scrollY + 180;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNav, { passive: true });

  // 6. Accommodation Category Filter
  const roomFilterBtns = document.querySelectorAll('.rooms-filter-bar .filter-btn');
  const roomCards = document.querySelectorAll('.room-card');

  roomFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      roomFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      roomCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // 7. High-Resolution Lightbox Modal
  const lightboxModal = document.getElementById('imageLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  const openLightbox = (src, caption = '') => {
    if (lightboxImg && lightboxCaption && lightboxModal) {
      lightboxImg.src = src;
      lightboxCaption.innerHTML = caption;
      lightboxModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeLightbox = () => {
    if (lightboxModal) {
      lightboxModal.classList.remove('open');
      document.body.style.overflow = '';
      if (lightboxImg) lightboxImg.src = '';
    }
  };

  lightboxClose?.addEventListener('click', closeLightbox);
  lightboxModal?.addEventListener('click', (e) => {
    if (e.target === lightboxModal) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal?.classList.contains('open')) {
      closeLightbox();
    }
  });

  // Lightbox click handlers for gallery items and property exterior
  const lightboxTriggers = document.querySelectorAll('.gallery-item, [data-lightbox]');
  lightboxTriggers.forEach(item => {
    item.addEventListener('click', () => {
      const lightboxSrc = item.getAttribute('data-lightbox');
      const caption = item.getAttribute('data-caption');

      if (lightboxSrc) {
        openLightbox(lightboxSrc, caption);
      } else {
        const title = item.querySelector('.placeholder-title')?.textContent || 'Gallery View';
        const tag = item.querySelector('.placeholder-tag')?.textContent || 'Aysh Lux Haven';
        showToast(`${title} (${tag}) — High-res photograph will be showcased here.`);
      }
    });
  });

  // 8. Interactive Room Photo Thumbnail Switcher (Modular for all accommodation cards)
  const allRoomCards = document.querySelectorAll('.room-card');
  allRoomCards.forEach(card => {
    const mainImg = card.querySelector('.room-card-img');
    const thumbBtns = card.querySelectorAll('.room-thumb-btn');
    const mediaContainer = card.querySelector('.room-media-container');

    thumbBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        thumbBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const newSrc = btn.getAttribute('data-img');
        if (mainImg && newSrc) {
          mainImg.style.opacity = '0.35';
          setTimeout(() => {
            mainImg.src = newSrc;
            mainImg.style.opacity = '1';
          }, 120);
        }
      });
    });

    // Clicking main room media opens full-screen lightbox
    mediaContainer?.addEventListener('click', () => {
      if (mainImg && mainImg.src) {
        const roomTitle = card.querySelector('.room-title')?.textContent || 'Room View';
        openLightbox(mainImg.src, `Aysh Lux Haven &bull; ${roomTitle} Photography`);
      }
    });
  });

  // 9. Destination Explorer Detail Modal
  const destModal = document.getElementById('destinationModal');
  const destModalClose = document.getElementById('destModalClose');
  const destModalBackBtn = document.getElementById('destModalBackBtn');
  const destModalImg = document.getElementById('destModalImg');
  const destModalPlaceholderName = document.getElementById('destModalPlaceholderName');
  const destModalCatBadge = document.getElementById('destModalCatBadge');
  const destModalCategory = document.getElementById('destModalCategory');
  const destModalTitle = document.getElementById('destModalTitle');
  const destModalIntro = document.getElementById('destModalIntro');
  const destModalDistance = document.getElementById('destModalDistance');
  const destModalDriveTime = document.getElementById('destModalDriveTime');
  const destModalWhyVisit = document.getElementById('destModalWhyVisit');
  const destModalExperiences = document.getElementById('destModalExperiences');
  const destModalBestFor = document.getElementById('destModalBestFor');
  const destModalDuration = document.getElementById('destModalDuration');
  const destModalBestTime = document.getElementById('destModalBestTime');
  const destModalOpeningHours = document.getElementById('destModalOpeningHours');
  const destModalEntryFee = document.getElementById('destModalEntryFee');
  const destModalGoodToKnow = document.getElementById('destModalGoodToKnow');
  const destModalDirectionsBtn = document.getElementById('destModalDirectionsBtn');

  const openDestModal = (destId) => {
    if (!destModal || !destId) return;
    const data = WAYANAD_DESTINATIONS[destId];
    if (!data) return;

    if (destModalImg) {
      destModalImg.classList.remove('img-pending');
      destModalImg.src = data.imageSlot;
      destModalImg.alt = data.name;
    }
    if (destModalPlaceholderName) destModalPlaceholderName.textContent = data.name;
    if (destModalCatBadge) destModalCatBadge.textContent = data.category;
    if (destModalCategory) destModalCategory.textContent = data.category;
    if (destModalTitle) destModalTitle.textContent = data.name;
    if (destModalIntro) destModalIntro.textContent = data.intro;
    if (destModalDistance) destModalDistance.textContent = data.distance;
    if (destModalDriveTime) destModalDriveTime.textContent = data.driveTime;
    if (destModalWhyVisit) destModalWhyVisit.textContent = data.whyVisit;
    if (destModalBestFor) destModalBestFor.textContent = data.bestFor;
    if (destModalDuration) destModalDuration.textContent = data.duration;
    if (destModalBestTime) destModalBestTime.textContent = data.bestTime;
    if (destModalOpeningHours) destModalOpeningHours.textContent = data.openingHours;
    if (destModalEntryFee) destModalEntryFee.textContent = data.entryFee;
    if (destModalGoodToKnow) destModalGoodToKnow.textContent = data.goodToKnow;

    if (destModalExperiences) {
      destModalExperiences.innerHTML = data.experiences.map(e => `<li>${e}</li>`).join('');
    }

    if (destModalDirectionsBtn) {
      destModalDirectionsBtn.href = data.mapsUrl;
    }

    destModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeDestModal = () => {
    if (!destModal) return;
    destModal.classList.remove('open');
    document.body.style.overflow = '';
  };

  const destCards = document.querySelectorAll('.dest-card');
  destCards.forEach(card => {
    card.addEventListener('click', () => {
      const destId = card.getAttribute('data-dest-id');
      openDestModal(destId);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const destId = card.getAttribute('data-dest-id');
        openDestModal(destId);
      }
    });
  });

  destModalClose?.addEventListener('click', closeDestModal);
  destModalBackBtn?.addEventListener('click', closeDestModal);
  destModal?.querySelector('.open-booking-modal')?.addEventListener('click', closeDestModal);

  destModal?.addEventListener('click', (e) => {
    if (e.target === destModal) {
      closeDestModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && destModal?.classList.contains('open')) {
      closeDestModal();
    }
  });
});

/**
 * Global Toast Helper
 */
function showToast(message, duration = 4000) {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--gold-primary); flex-shrink: 0;">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}
