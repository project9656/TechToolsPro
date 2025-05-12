
import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ToolCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  isNew?: boolean;
  isDarkMode: boolean;
}

const ToolCard: React.FC<ToolCardProps> = ({ 
  title, 
  description, 
  href, 
  icon, 
  isNew = false,
  isDarkMode 
}) => {
  return (
    <a 
      href={href}
      className={`border rounded-lg p-4 md:p-6 hover:shadow-lg transition-shadow cursor-pointer group no-underline relative ${
        isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      }`}
    >
      {isNew && (
        <span className="absolute top-2 right-2 bg-[#e7513b] text-white text-xs px-2 py-1 rounded-full">
          New!
        </span>
      )}
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#e7513b] rounded-lg flex items-center justify-center text-white">
          {icon}
        </div>
        <ChevronRight className={`${
          isDarkMode ? 'text-gray-500' : 'text-gray-400'
        } group-hover:text-[#e7513b] transition-colors`} />
      </div>
      <h3 className={`text-lg md:text-xl font-semibold mb-2 ${
        isDarkMode ? 'text-white' : 'text-gray-700'
      }`}>
        {title}
      </h3>
      <p className={`text-sm md:text-base ${
        isDarkMode ? 'text-gray-400' : 'text-gray-600'
      }`}>
        {description}
      </p>
    </a>
  );
};

export default ToolCard;
