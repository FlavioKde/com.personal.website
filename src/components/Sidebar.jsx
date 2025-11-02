import { FaChevronDown } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { MdInfoOutline } from 'react-icons/md';

const Sidebar = ({ openTab }) => {
  return (
    <aside className="bg-black text-white w-64 fixed top-10 left-0 shadow-lg z-40 h-[calc(100vh-2.5rem)] overflow-y-auto border-r border-white/20">
      <nav className="flex flex-col justify-between h-full p-4 font-mono text-sm">
      <div className="flex flex-col items-start gap-1 w-full">
  <div className="flex justify-between items-center w-full text-xs text-white-600 pl-1 mb-2">
    <span>EXPLORER</span>
    <span className="pr-2 text-white-600">...</span>
  </div>

          <div className="flex items-center gap-1">
            <FaChevronDown className="text-white text-sm" />
            <span className="text-sm">COM.FLAVIOKDE.WEBSITE</span>
          </div>
          <ul className="flex flex-col items-start gap-1 pl-4">
            <li className="flex items-center gap-1 text-white text-sm">
              <FaChevronDown className="text-white text-sm" />
              <span>public</span>
            </li>
            <li className="flex items-center gap-1 text-white text-sm">
              <FaChevronDown className="text-white text-sm" />
              <span>src</span>
            </li>
            <li className="flex items-center gap-1 text-white text-sm">
              <FaChevronDown className="text-white text-sm" />
              <span>components</span>
            </li>
            <li
              className="flex items-center gap-1 text-white-400 hover:text-green-400 transition-colors duration-200 cursor-pointer"
              onClick={() => openTab('About.js')}
            >
              <FaReact className="text-cyan-400 text-sm" />
              <span>About.js</span>
            </li>

            <li
              className="flex items-center gap-1 text-white-400 hover:text-green-400 transition-colors duration-200 cursor-pointer"
              onClick={() => openTab('Projects.js')}
            >
              <FaReact className="text-cyan-400 text-sm" />
              <span>Projects.js</span>
            </li>
            <li
              className="flex items-center gap-1 text-white-400 hover:text-green-400 transition-colors duration-200 cursor-pointer"
              onClick={() => openTab('CV.js')}
            >
              <FaReact className="text-cyan-400 text-sm" />
              <span>CV.js</span>
            </li>
            <li
              className="flex items-center gap-1 text-white-400 hover:text-green-400 transition-colors duration-200 cursor-pointer"
              onClick={() => openTab('Contact.js')}
            >
              <FaReact className="text-cyan-400 text-sm" />
              <span>Contact.js</span> 
            </li>
            <li
              className="flex items-center gap-1 text-white-400 hover:text-green-400 transition-colors duration-200 cursor-pointer"
              onClick={() => openTab('ReadmeViewer.js')}
            >
              <MdInfoOutline className="text-blue-400 text-sm" />
              <span>README.md</span>
            </li>
          </ul>
        </div>
        
        <div className="mt-4 pl-4 text-white-400 text-xs">
          <div className='flex border-b border-neutral-700 '>

        </div>
          <div className="text-white-600 hover:text-green-600 transition-colors duration-200 cursor-pointer flex border-b border-neutral-700 ">
            &gt; OUTLINE
          </div>
          <div className="text-white-600 hover:text-green-600 transition-colors duration-200 cursor-pointer <div className='flex border-b border-neutral-700 '>

        </div>">
            &gt; TIMELINE
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
