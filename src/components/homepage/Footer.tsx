
import React from 'react';
import { Heart } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  return (
    <footer className={`${isDarkMode ? 'bg-gray-800' : 'bg-[#11263c]'} text-white py-8 md:py-12`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div>
            <h4 className="font-semibold text-base md:text-lg mb-3 md:mb-4">Popular Tools</h4>
            <ul className="space-y-2">
              <li><a href="/tools/pdf-merge" className="text-sm md:text-base hover:text-[#e7513b]">PDF Merger</a></li>
              <li><a href="/tools/image-converter" className="text-sm md:text-base hover:text-[#e7513b]">Image Converter</a></li>
              <li><a href="/tools/text-tools" className="text-sm md:text-base hover:text-[#e7513b]">Text Tools</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-base md:text-lg mb-3 md:mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-sm md:text-base hover:text-[#e7513b]">About</a></li>
              <li><a href="/features" className="text-sm md:text-base hover:text-[#e7513b]">Features</a></li>
              <li><a href="/contact" className="text-sm md:text-base hover:text-[#e7513b]">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-base md:text-lg mb-3 md:mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-sm md:text-base hover:text-[#e7513b]">Privacy Policy</a></li>
              <li><a href="/terms" className="text-sm md:text-base hover:text-[#e7513b]">Terms of Service</a></li>
              <li><a href="/cookies" className="text-sm md:text-base hover:text-[#e7513b]">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-base md:text-lg mb-3 md:mb-4">Follow Us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm md:text-base hover:text-[#e7513b]">Twitter</a></li>
              <li><a href="#" className="text-sm md:text-base hover:text-[#e7513b]">Facebook</a></li>
              <li><a href="#" className="text-sm md:text-base hover:text-[#e7513b]">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 md:mt-8 pt-6 md:pt-8 text-center">
          <p className="text-sm md:text-base mb-2">
            Made with <Heart className="inline-block w-4 h-4 text-red-500 mx-1" fill="currentColor" /> by TechToolsPro Team
          </p>
          <p className="text-sm md:text-base">&copy; 2024 TechToolsPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
