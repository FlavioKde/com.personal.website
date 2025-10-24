import { FaChevronDown } from 'react-icons/fa';

const Sidebar = ({ openTab }) => {
  return (
    <aside className="bg-black text-white w-64 fixed top-10 left-0 shadow-lg z-40 h-[calc(100vh-2.5rem)] overflow-y-auto">
      <nav className="flex flex-col justify-between h-full p-4 font-mono text-sm">
        <div className="flex flex-col items-start gap-1">
          <div className="text-green-600 text-xs pl-1 mb-2">EXPLORER</div>
          <div className="flex items-center gap-1">
            <FaChevronDown className="text-white text-sm" />
            <span className="text-sm">COM.FLAVIOKDE.WEBSITE</span>
          </div>
          <ul className="flex flex-col items-start gap-1 pl-4">
            <li
              className="text-purple-400 hover:text-green-400 transition-colors duration-200 cursor-pointer"
              onClick={() => openTab('About.js')}
            >
              &gt; About.js
            </li>
            <li
              className="text-purple-400 hover:text-green-400 transition-colors duration-200 cursor-pointer"
              onClick={() => openTab('Projects.js')}
            >
              &gt; Projects.js
            </li>
            <li
              className="text-purple-400 hover:text-green-400 transition-colors duration-200 cursor-pointer"
              onClick={() => openTab('CV.js')}
            >
              &gt; CV.js
            </li>
            <li
              className="text-purple-400 hover:text-green-400 transition-colors duration-200 cursor-pointer"
              onClick={() => openTab('Contact.js')}
            >
              &gt; Contact.js
            </li>
          </ul>
        </div>
        <div className="mt-4 pl-4 text-purple-400 text-xs">
          <div className="text-purple-400 hover:text-green-400 transition-colors duration-200 cursor-pointer">
            &gt; Dev
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;