
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <span className="text-white text-2xl font-bold tracking-tight">WebSolutions</span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              We build digital experiences that help brands thrive in the modern web era. Innovation, strategy, and execution at its best.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Github size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-blue-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">UI/UX Design</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">SEO Optimization</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Digital Marketing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-500" />
                <span>hello@websolutions.tech</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-500 mt-1" />
                <span>123 Innovation Drive, Silicon Valley, CA 94043</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} WebSolutions Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
