
import React from 'react';
import { ShieldCheck, Sparkles, Clock3, CheckCircle2, Users } from 'lucide-react';

interface AboutSectionProps {
  isDarkMode: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ isDarkMode }) => {
  return (
    <section id="about-section" className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} py-16 md:py-24 scroll-mt-16`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
            Why Choose TechToolsPro?
          </h2>
          <p className={`text-lg md:text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Trusted by thousands of professionals worldwide
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
            <div className="text-[#e7513b] mb-4">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
              100% Secure
            </h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Enterprise-grade security with automatic file deletion and encrypted processing
            </p>
          </div>
          <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
            <div className="text-[#e7513b] mb-4">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
              Premium Quality
            </h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Professional-grade tools with high-quality output and precision
            </p>
          </div>
          <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
            <div className="text-[#e7513b] mb-4">
              <Clock3 className="w-8 h-8" />
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
              Lightning Fast
            </h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Optimized for speed with cloud processing and instant results
            </p>
          </div>
          <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
            <div className="text-[#e7513b] mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
              Always Free
            </h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              No hidden fees or subscriptions - all tools are completely free
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className={`inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full ${
            isDarkMode ? 'bg-gray-700' : 'bg-white'
          } shadow-lg`}>
            <Users className="w-5 h-5 text-[#e7513b]" />
            <span className={`${isDarkMode ? 'text-white' : 'text-gray-700'} font-semibold`}>
              Trusted by over 1 million users worldwide
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
