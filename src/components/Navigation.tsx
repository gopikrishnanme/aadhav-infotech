import { Menu, X, Rocket } from 'lucide-react';
import { useState } from 'react';
import logo from '../logo.jpg';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'jobs', label: 'Jobs & Interns' },
    { id: 'innovation', label: 'Innovation & Research' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-brand-dark/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => handleNavigate('home')} 
              className="flex items-center space-x-3 group"
            >
              <img
                src={logo}
                alt="Aadhav Infotech"
                className="h-10 w-auto rounded-lg shadow-sm group-hover:shadow-md transition-shadow"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentPage === item.id
                    ? 'text-brand-green bg-brand-green/10'
                    : 'text-brand-dark/80 hover:text-brand-green hover:bg-brand-green/5'
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-brand-green rounded-full" />
                )}
              </button>
            ))}
            
            {/* CTA Button */}
            <button
              onClick={() => handleNavigate('jobs')}
              className="ml-4 px-5 py-2.5 rounded-full text-sm font-semibold bg-brand-green text-white hover:bg-brand-green-hover hover:shadow-lg hover:shadow-brand-green/25 transition-all duration-200 flex items-center space-x-2"
            >
              <Rocket size={16} />
              <span>APPLY NOW</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-brand-dark/80 hover:text-brand-green hover:bg-brand-green/10 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md-hidden bg-white/95 backdrop-blur-md border-t border-brand-dark/5">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all ${
                  currentPage === item.id
                    ? 'text-brand-green bg-brand-green/10 border-l-4 border-brand-green'
                    : 'text-brand-dark/80 hover:text-brand-green hover:bg-brand-green/5'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavigate('jobs')}
              className="w-full mt-3 px-4 py-3 rounded-full text-base font-semibold bg-brand-green text-white hover:bg-brand-green-hover transition-colors flex items-center justify-center space-x-2"
            >
              <Rocket size={18} />
              <span>APPLY NOW</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
