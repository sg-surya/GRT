import { Link, Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { text: 'Home', path: '/' },
    { text: 'About Us', path: '/about' },
    { text: 'Admissions', path: '/admissions' },
    { text: 'Academics', path: '/academics' },
    { text: 'Facilities', path: '/facilities' },
    { text: 'News & Events', path: '/news' },
    { text: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar Contacts */}
      <div className="bg-brand-navy text-white text-sm py-2 px-4 shadow-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center z-50 relative">
          <div className="flex gap-6">
            <div className="flex items-center gap-2"><Phone size={16} className="text-brand-gold"/> <span>+91 70789 26940 / +91 99976 91031</span></div>
            <div className="flex items-center gap-2"><MapPin size={16} className="text-brand-gold"/> <span>Rohta Road, Meerut</span></div>
          </div>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <a href="#" className="hover:text-brand-gold transition-colors" aria-label="Facebook"><Facebook size={16} /></a>
            <a href="#" className="hover:text-brand-gold transition-colors" aria-label="Instagram"><Instagram size={16} /></a>
            <a href="#" className="hover:text-brand-gold transition-colors" aria-label="Twitter"><Twitter size={16} /></a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="flex flex-col">
            <span className="text-2xl font-heading font-bold text-brand-navy leading-none">GRT Public School</span>
            <span className="text-xs font-semibold text-brand-gold tracking-widest uppercase mt-1">Poothkhas, Meerut</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-semibold text-sm uppercase tracking-wide transition-colors ${
                  isActive(link.path) ? 'text-brand-gold' : 'text-brand-navy hover:text-brand-gold'
                }`}
              >
                {link.text}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-brand-navy p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-white shadow-xl border-t border-gray-100 flex flex-col py-4 px-6 z-50">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-3 font-semibold uppercase tracking-wide border-b border-gray-100 last:border-0 ${
                  isActive(link.path) ? 'text-brand-gold' : 'text-brand-navy hover:text-brand-gold'
                }`}
              >
                {link.text}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-brand-navy text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div>
            <h3 className="text-2xl font-bold font-heading text-white mb-4">GRT Public School</h3>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Excellence in education, empowering students to learn, lead, and succeed since our inception on Rohta Road.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 hover:bg-brand-gold hover:text-brand-navy w-10 h-10 rounded-full flex items-center justify-center transition-all" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" className="bg-white/10 hover:bg-brand-gold hover:text-brand-navy w-10 h-10 rounded-full flex items-center justify-center transition-all" aria-label="Instagram"><Instagram size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold font-heading text-white mb-6 uppercase tracking-wider relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-brand-gold">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-brand-gold transition-colors text-sm">About Us</Link></li>
              <li><Link to="/admissions" className="text-gray-300 hover:text-brand-gold transition-colors text-sm">Admissions</Link></li>
              <li><Link to="/academics" className="text-gray-300 hover:text-brand-gold transition-colors text-sm">Academics</Link></li>
              <li><Link to="/facilities" className="text-gray-300 hover:text-brand-gold transition-colors text-sm">Facilities</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="text-lg font-bold font-heading text-white mb-6 uppercase tracking-wider relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-brand-gold">Contact Info</h4>
             <ul className="space-y-4">
               <li className="flex gap-3 text-gray-300 text-sm items-start">
                 <MapPin className="text-brand-gold shrink-0 mt-0.5" size={18} />
                 <span>Rajwaha Marg, Near Jain Bhatta,<br/>Rohta Road, Salahpur,<br/>Meerut – 250502, UP</span>
               </li>
               <li className="flex gap-3 text-gray-300 text-sm items-center">
                 <Phone className="text-brand-gold shrink-0" size={18} />
                 <span>+91 70789 26940<br/>+91 99976 91031</span>
               </li>
               <li className="flex gap-3 text-gray-300 text-sm items-center">
                 <Mail className="text-brand-gold shrink-0" size={18} />
                 <span>info@grtpublicschool.edu.in</span>
               </li>
             </ul>
          </div>

          <div>
             <h4 className="text-lg font-bold font-heading text-white mb-6 uppercase tracking-wider relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-brand-gold">Admissions Open</h4>
             <p className="text-gray-300 text-sm mb-4">Enroll your child for the upcoming academic session. Admissions open from Pre-Nursery to Class X.</p>
             <Link to="/admissions" className="inline-block bg-brand-gold text-brand-navy font-bold py-2 px-6 rounded-md hover:bg-white transition-colors">Apply Now</Link>
          </div>

        </div>
        
        <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <p>&copy; {new Date().getFullYear()} GRT Public School, Meerut. All Rights Reserved.</p>
            <span className="hidden md:inline">•</span>
            <p>
              Built by <a href="https://vasudev.online" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-white transition-colors underline underline-offset-2">Vasudev AI</a>
            </p>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Sitemap</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
