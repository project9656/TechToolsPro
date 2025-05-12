
import React, { useState } from 'react';
import { Sun, Moon, Menu, X, Home, ChevronDown, Calculator, Ruler, Shield, Share2, LayoutGrid } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  scrollToAbout: () => void;
  handleCategoryClick: (category: string) => void;
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
  allToolCategories: any[];
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  isDarkMode, 
  toggleDarkMode, 
  scrollToAbout, 
  handleCategoryClick,
  activeCategory,
  setActiveCategory,
  allToolCategories,
  isMenuOpen,
  setIsMenuOpen
}) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#e7513b] to-[#ff6b6b] bg-clip-text text-transparent">
                TechToolsPro
              </span>
            </a>
            
            <nav className="hidden md:flex space-x-6">
              {[...allToolCategories.slice(0, 5), {
                name: "All Tools",
                tools: [
                  { icon: <Calculator />, title: 'Math & Calculators', desc: 'Mathematical tools and calculators', href: '#math-calculators' },
                  { icon: <Ruler />, title: 'Unit Converters', desc: 'Convert between different units', href: '#unit-converters' },
                  { icon: <Shield />, title: 'Security Tools', desc: 'Security and encryption tools', href: '#security-tools' },
                  { icon: <Share2 />, title: 'Social Media Tools', desc: 'Social media utilities', href: '#social-media-tools' },
                  { icon: <LayoutGrid />, title: 'Miscellaneous', desc: 'Other useful tools', href: '#miscellaneous' }
                ]
              }].map((category) => (
                <div
                  key={category.name}
                  className="relative group"
                  onMouseEnter={() => setActiveCategory(category.name)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <button 
                    onClick={() => handleCategoryClick(category.name)}
                    className={`flex items-center space-x-1 py-6 font-medium tracking-wide ${
                      isDarkMode ? 'text-white' : 'text-gray-700'
                    } hover:text-[#e7513b] transition-colors`}
                  >
                    <span>{category.name}</span>
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                  </button>
                  
                  {activeCategory === category.name && (
                    <div 
                      className={`absolute top-full left-0 w-72 ${
                        isDarkMode ? 'bg-gray-700' : 'bg-white'
                      } shadow-xl rounded-lg py-3 -ml-4 border ${
                        isDarkMode ? 'border-gray-600' : 'border-gray-100'
                      }`}
                    >
                      {category.tools.slice(0, 5).map((tool) => (
                        <a
                          key={tool.title}
                          href={tool.href}
                          onClick={(e) => {
                            if (tool.href.startsWith('#')) {
                              e.preventDefault();
                              handleCategoryClick(tool.href.substring(1));
                            }
                          }}
                          className={`flex items-center space-x-3 px-4 py-2.5 ${
                            isDarkMode 
                              ? 'hover:bg-gray-600 text-white' 
                              : 'hover:bg-gray-50 text-gray-700'
                          } transition-colors group`}
                        >
                          <span className="text-[#e7513b] transform transition-transform group-hover:scale-110">
                            {tool.icon}
                          </span>
                          <span className="font-medium">{tool.title}</span>
                        </a>
                      ))}
                      <div className="px-4 py-3 border-t border-gray-200 mt-2">
                        <button
                          onClick={() => handleCategoryClick(category.name)}
                          className="flex items-center space-x-2 text-[#e7513b] hover:text-[#d4402b] font-medium group w-full"
                        >
                          <span>View All {category.name}</span>
                          <ChevronDown className="w-4 h-4 transform transition-transform group-hover:translate-y-0.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="/"
              className={`p-2 rounded-full hover:bg-gray-100 ${isDarkMode ? 'hover:bg-gray-700' : ''}`}
              aria-label="Home"
            >
              <Home className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-gray-700'}`} />
            </a>
            <button
              onClick={toggleDarkMode}
              className={`p-2  rounded-full hover:bg-gray-100 ${isDarkMode ? 'hover:bg-gray-700' : ''}`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-gray-700" />}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-gray-700'}`} />
              ) : (
                <Menu className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-gray-700'}`} />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
