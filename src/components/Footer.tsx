import { Mail, MapPin, Phone, ArrowUp, Rocket, ChevronRight } from 'lucide-react';
import logo from '../logo.jpg';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Innovation', href: '/innovation' },
    { name: 'Careers', href: '/jobs-interns' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    'IT Consulting',
    'Cloud Solutions',
    'Software Development',
    'Data Analytics',
    'AI & ML Solutions',
  ];

  return (
    <footer className="bg-brand-dark text-white mt-auto relative">
      {/* Top Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-brand-green via-brand-accent to-brand-green" />
      
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-brand-green rounded-full flex items-center justify-center shadow-lg hover:bg-brand-green-hover hover:scale-110 transition-all duration-300"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-block mb-4">
              <img src={logo} alt="Aadhav Infotech" className="h-12 rounded-lg" />
            </a>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              Pioneering technology solutions for next-generation businesses. We transform ideas into digital reality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 flex items-center">
              <ChevronRight size={18} className="text-brand-green mr-1" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-brand-green hover:translate-x-1 transition-all duration-300 inline-block text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4 flex items-center">
              <ChevronRight size={18} className="text-brand-green mr-1" />
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-white/70 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4 flex items-center">
              <ChevronRight size={18} className="text-brand-green mr-1" />
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-green flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  5th Floor, Maruthi Concorde Business Park, Konappana Agrahara, <br />
                  Electronic City, Bengaluru, Karnataka 560100, INDIA
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-green flex-shrink-0" />
                <a
                  href="mailto:services@aadhavinfotech.in"
                  className="text-white/70 hover:text-brand-green transition-colors text-sm"
                >
                  services@aadhavinfotech.in
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-green flex-shrink-0" />
                <a href="tel:+919092552525" className="text-white/70 hover:text-brand-green transition-colors text-sm">+91 9092552525</a>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-brand-mid to-brand-dark border border-white/10 rounded-2xl p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h4 className="font-bold text-white mb-1">Ready to Start Your Project?</h4>
              <p className="text-white/70 text-sm">Let's discuss how we can help transform your business.</p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-brand-green text-white rounded-full font-semibold hover:bg-brand-green-hover hover:shadow-lg hover:shadow-brand-green/25 transition-all duration-300 whitespace-nowrap"
            >
              <Rocket size={18} className="mr-2" />
              Get Started
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/60">
              © 2025 Aadhav Infotech. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <a href="#" className="hover:text-brand-green transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-brand-green transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
