
import React from 'react';
import { ArrowUp } from 'lucide-react';

interface BackToTopButtonProps {
  showBackToTop: boolean;
  scrollToTop: () => void;
}

const BackToTopButton: React.FC<BackToTopButtonProps> = ({ showBackToTop, scrollToTop }) => {
  if (!showBackToTop) return null;
  
  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-[#e7513b] text-white p-3 rounded-full shadow-lg hover:bg-[#d4402b] transition-colors z-50"
      aria-label="Back to top"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

export default BackToTopButton;
