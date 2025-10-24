import { useState } from 'react';

const Topbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(prev => !prev);
  const closeDropdown = () => setShowDropdown(false);

  return (
    <div className="fixed top-0 left-0 w-full h-10 bg-neutral-900 text-white px-4 font-mono text-xs border-b border-neutral-700 z-50 flex items-center">
      <div className="flex gap-4 items-center">
        <div className="text-neutral-300 hover:text-white cursor-pointer relative" onClick={toggleDropdown}>
          File
          {showDropdown && (
            <div
              className="absolute top-full left-0 mt-1 bg-neutral-800 border border-neutral-700 rounded shadow-lg z-10 flex flex-col"
              onClick={closeDropdown}
            >
              <a href="#resume" className="px-4 py-1 text-purple-400 hover:text-green-400 cursor-pointer whitespace-nowrap">
                &gt; About.js
              </a>
              <a href="#projects" className="px-4 py-1 text-purple-400 hover:text-green-400 cursor-pointer whitespace-nowrap">
                &gt; Projects.js
              </a>
              <a href="#contact" className="px-4 py-1 text-purple-400 hover:text-green-400 cursor-pointer whitespace-nowrap">
                &gt; CV.js
              </a>
              <a href="#contact" className="px-4 py-1 text-purple-400 hover:text-green-400 cursor-pointer whitespace-nowrap">
                &gt; Contact.js
              </a>
            </div>
          )}
        </div>
        <span className="text-neutral-300 hover:text-white cursor-pointer">Edit</span>
        <span className="text-neutral-300 hover:text-white cursor-pointer">Selection</span>
        <span className="text-neutral-300 hover:text-white cursor-pointer">View</span>
        <span className="text-neutral-300 hover:text-white cursor-pointer">Go</span>
      </div>

      <div className="flex items-center justify-center gap-2 bg-neutral-800 px-3 py-1 rounded h-7 flex-1 mx-4">
        <span className="text-white">🔍</span>
        <input
          type="text"
          value="com.flaviokde.website"
          readOnly
          className="bg-transparent text-purple-400 outline-none text-xs w-full text-center"
        />
      </div>
    </div>
  );
};

export default Topbar;