import { useState } from 'react';
import { icons } from '../constants';

const Sidebar = ({ onLanguageChange }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('C'); // Initialize selectedLanguage state with 'C'

  const handleLanguageClick = (language, filename, template) => {
    setSelectedLanguage(language);
    onLanguageChange(language, filename, template);
  };

  return (
    <div className="h-full px-1.5 w-16 flex flex-col bg-gray-900 text-white shadow-lg">
      <div className="flex flex-col items-center mt-2">
        {icons.map(item => (
          <a
            key={item.id}
            className={`p-3 mt-2 hover:bg-gray-700 rounded-lg ${selectedLanguage === item.language ? 'bg-gray-700' : ''}`}
            aria-label={item.title}
            onClick={() => handleLanguageClick(item.language, item.filename, item.template)}
          >
            <img src={item.icon} alt={item.title} width={item.width} height={item.height} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
