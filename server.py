from http.server import HTTPServer, SimpleHTTPRequestHandler
import sys

class NoCacheHTTPRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 3456
    server_address = ('', port)
    httpd = HTTPServer(server_address, NoCacheHTTPRequestHandler)
    print(f"Dev server running at http://localhost:{port} (Cache-Control: no-store)")
    httpd.serve_forever()
