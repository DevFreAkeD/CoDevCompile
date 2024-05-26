import { useState } from 'react';
import { logo } from '../assets';
import { githubicon, author, issue } from '../assets';

const Header = ({ onRun }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg p-3 flex justify-between items-center">
      {/* Logo and Title */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" width={40} height={40} className="mr-2" />
        <h1 className="text-lg font-bold">CoDevCompile</h1>
        {/* Vertical Line */}
        <div className="h-8 border-l-2 border-gray-500 mx-5"></div>
        <button
          onClick={onRun} // Call the onRun function passed as a prop
          className="flex bg-blue-500 hover:bg-blue-700 text-white h-10 w-16 font-bold ml-4 py-2 px-4 rounded"
        >
          Run
        </button>
      </div>

      {/* Hamburger Menu */}
      <div className="relative">
        <button onClick={toggleDropdown} className="flex items-center p-2">
          {isOpen ? (
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-5 w-56 bg-gray-200 shadow-lg z-50">
            <a href="#" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-300">
              <img src={githubicon} alt="GitHub" className="w-4 h-4 mr-3" />
              <span className="text-xs">View Source Code</span>
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-300">
              <img src={issue} alt="Issue" className="w-4 h-4 mr-3" />
              <span className="text-xs">Report An Issue</span>
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-300">
              <img src={author} alt="Author" className="w-4 h-4 mr-3" />
              <span className="text-xs">Contact Author</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;