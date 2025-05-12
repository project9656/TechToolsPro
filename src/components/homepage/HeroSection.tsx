
import React from 'react';
import { Search } from 'lucide-react';

interface HeroSectionProps {
  isDarkMode: boolean;
  searchQuery: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showSuggestions: boolean;
  setShowSuggestions: (show: boolean) => void;
  suggestions: Array<{ title: string; category: string; href: string }>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  isDarkMode, 
  searchQuery, 
  handleSearchChange,
  showSuggestions,
  setShowSuggestions,
  suggestions
}) => {
  return (
    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-[#11263c]'} text-white relative`}>
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
          Every tool you need in one place
        </h1>
        <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-300">
          100+ free online tools for content creators, developers, and professionals
        </p>
        <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg p-4 md:p-8 max-w-2xl mx-auto shadow-lg relative`}>
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-4">
            <Search className={`w-6 h-6 md:w-8 md:h-8 ${isDarkMode ? 'text-white' : 'text-gray-700'}`} />
            <span className={`${isDarkMode ? 'text-white' : 'text-gray-700'} text-lg md:text-xl font-semibold`}>
              Search for tools
            </span>
          </div>
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              placeholder="Search tools..."
              className={`w-full px-4 py-3 rounded-lg border ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                  : 'border-gray-200 text-gray-700'
              } focus:outline-none focus:ring-2 focus:ring-[#e7513b]`}
            />
            {showSuggestions && suggestions.length > 0 && (
              <div className={`absolute z-10 w-full mt-1 rounded-lg shadow-lg ${
                isDarkMode ? 'bg-gray-700' : 'bg-white'
              } border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                {suggestions.map((suggestion, index) => (
                  <a
                    key={index}
                    href={suggestion.href}
                    className={`block px-4 py-3 ${
                      isDarkMode 
                        ? 'text-white hover:bg-gray-600' 
                        : 'text-gray-700 hover:bg-gray-100'
                    } first:rounded-t-lg last:rounded-b-lg`}
                  >
                    <div className="font-medium">{suggestion.title}</div>
                    <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {suggestion.category}
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
