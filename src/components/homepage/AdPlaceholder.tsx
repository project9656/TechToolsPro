
import React from 'react';

interface AdPlaceholderProps {
  id: string;
  className: string;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ id, className }) => (
  <div id={id} className={`bg-gray-100 rounded-lg ${className} flex items-center justify-center`}>
    <span className="text-gray-400">Advertisement</span>
  </div>
);

export default AdPlaceholder;
