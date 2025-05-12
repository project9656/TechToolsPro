
import React from 'react';

interface MobileMenuProps {
  isMenuOpen: boolean;
  isDarkMode: boolean;
  scrollToAbout: () => void;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ 
  isMenuOpen, 
  isDarkMode, 
  scrollToAbout, 
  setIsMenuOpen 
}) => {
  if (!isMenuOpen) return null;
  
  return (
    <div className={`fixed inset-0 z-40 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} md:hidden`} style={{ top: '64px' }}>
      <div className="p-4">
        <nav className="space-y-4">
          <button 
            onClick={() => {
              scrollToAbout();
              setIsMenuOpen(false);
            }}
            className={`block w-full text-left ${isDarkMode ? 'text-white' : 'text-gray-700'} hover:text-[#e7513b]`}
          >
            About
          </button>
          <a href="/features" className={`block ${isDarkMode ? 'text-white' : 'text-gray-700'} hover:text-[#e7513b]`}>Features</a>
          <a href="/contact" className={`block ${isDarkMode ? 'text-white' : 'text-gray-700'} hover:text-[#e7513b]`}>Contact</a>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
