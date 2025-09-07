import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white mb-2">
                Durga Construction & Architect
              </h3>
              <p className="text-gray-300 mb-4">
                Building dreams with precision, quality, and excellence. Your trusted partner for all construction and architectural needs.
              </p>
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <span className="w-4 h-4 mr-3">📍</span>
                <span>123 Construction Avenue, Builder City, BC 12345</span>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 mr-3">📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 mr-3">✉️</span>
                <span>info@durgaconstruction.com</span>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 mr-3">🕒</span>
                <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Residential Construction</li>
              <li>Commercial Building</li>
              <li>Architectural Design</li>
              <li>Interior Design</li>
              <li>Project Management</li>
              <li>Renovation & Remodeling</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-300 mb-4 md:mb-0">
              © 2024 Durga Construction & Architect. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-300">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-6">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            <span className="sr-only">Facebook</span>
            <div className="w-6 h-6 bg-blue-600 rounded"></div>
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            <span className="sr-only">Instagram</span>
            <div className="w-6 h-6 bg-pink-600 rounded"></div>
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            <span className="sr-only">LinkedIn</span>
            <div className="w-6 h-6 bg-blue-800 rounded"></div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;