
import React, { useState, useMemo, useEffect } from 'react';
import { 
  Users, Calculator, Ruler, Shield, Share2, LayoutGrid, 
  Search, ArrowUp, Heart, Home, Sun, Moon, Menu, X, ChevronDown
} from 'lucide-react';

import AdPlaceholder from './AdPlaceholder';
import CategorySection from './CategorySection';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import Header from './Header';
import MobileMenu from './MobileMenu';
import Footer from './Footer';
import BackToTopButton from './BackToTopButton';
import allToolCategories from './toolsData';

const ToolsHomepage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Array<{title: string, category: string, href: string}>>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true' ||
        (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  const handleCategoryClick = (categoryName: string) => {
    setIsMenuOpen(false);
    setActiveCategory(null);
    
    const targetId = categoryName.startsWith('#') 
      ? categoryName.substring(1) 
      : categoryName.toLowerCase().replace(/[&\s]+/g, '-');

    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const allTools = useMemo(() => {
    return allToolCategories.flatMap(category => 
      category.tools.map(tool => ({
        ...tool,
        category: category.name
      }))
    );
  }, []);

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return allToolCategories;

    const query = searchQuery.toLowerCase().trim();
    return allToolCategories.map(category => ({
      ...category,
      tools: category.tools.filter(tool => 
        tool.title.toLowerCase().includes(query) ||
        tool.desc.toLowerCase().includes(query)
      )
    })).filter(category => category.tools.length > 0);
  }, [searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    const matchingTools = allTools
      .filter(tool => 
        tool.title.toLowerCase().includes(query.toLowerCase()) ||
        tool.desc.toLowerCase().includes(query.toLowerCase()) ||
        tool.category.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 3) // Changed from 5 to 3 suggestions
      .map(tool => ({
        title: tool.title,
        category: tool.category,
        href: tool.href
      }));

    setSuggestions(matchingTools);
    setShowSuggestions(true);
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Header 
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        scrollToAbout={scrollToAbout}
        handleCategoryClick={handleCategoryClick}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        allToolCategories={allToolCategories}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <MobileMenu 
        isMenuOpen={isMenuOpen}
        isDarkMode={isDarkMode}
        scrollToAbout={scrollToAbout}
        setIsMenuOpen={setIsMenuOpen}
      />

      <div className="pt-16">
        <HeroSection 
          isDarkMode={isDarkMode}
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
          showSuggestions={showSuggestions}
          setShowSuggestions={setShowSuggestions}
          suggestions={suggestions}
        />

        <div className="max-w-6xl mx-auto px-4 py-4">
          <AdPlaceholder id="top-ad" className="h-[90px] md:h-[120px]" />
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12">
              <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                No tools found matching your search.
              </p>
            </div>
          ) : (
            filteredCategories.map((category, categoryIndex) => (
              <CategorySection 
                key={categoryIndex}
                category={category}
                categoryIndex={categoryIndex}
                isDarkMode={isDarkMode}
              />
            ))
          )}
        </div>

        <AboutSection isDarkMode={isDarkMode} />

        <div className="max-w-6xl mx-auto px-4 py-4">
          <AdPlaceholder id="bottom-ad" className="h-[90px] md:h-[120px]" />
        </div>

        <Footer isDarkMode={isDarkMode} />
      </div>

      <BackToTopButton showBackToTop={showBackToTop} scrollToTop={scrollToTop} />
    </div>
  );
};

export default ToolsHomepage;
