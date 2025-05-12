
import React from 'react';
import ToolCard from './ToolCard';
import AdPlaceholder from './AdPlaceholder';

interface Tool {
  icon: React.ReactNode;
  title: string;
  desc: string;
  href: string;
  isNew?: boolean;
}

interface CategorySectionProps {
  category: {
    name: string;
    tools: Tool[];
  };
  categoryIndex: number;
  isDarkMode: boolean;
}

const CategorySection: React.FC<CategorySectionProps> = ({ 
  category, 
  categoryIndex, 
  isDarkMode 
}) => {
  return (
    <div 
      id={category.name.toLowerCase().replace(/[&\s]+/g, '-')}
      className="mb-8 md:mb-16 scroll-mt-24"
    >
      <h2 className={`text-2xl md:text-3xl font-bold mb-4 md:mb-8 ${
        isDarkMode ? 'text-white' : 'text-gray-700'
      }`}>
        {category.name}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {category.tools.map((tool, toolIndex) => (
          <ToolCard 
            key={toolIndex}
            title={tool.title}
            description={tool.desc}
            href={tool.href}
            icon={tool.icon}
            isNew={tool.isNew}
            isDarkMode={isDarkMode}
          />
        ))}
      </div>
      
      {categoryIndex % 2 === 1 && (
        <div className="mt-8">
          <AdPlaceholder id={`category-ad-${categoryIndex}`} className="h-[90px] md:h-[120px]" />
        </div>
      )}
    </div>
  );
};

export default CategorySection;
