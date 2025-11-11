import { FaChevronDown } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { MdInfoOutline } from 'react-icons/md';
import { vscodeStyles, cn } from '../utils/vscodeStyles';

const Sidebar = ({ openTab }) => {
  return (
    <aside className={cn(
      'w-64 fixed top-10 left-0 shadow-lg z-40 h-[calc(100vh-2.5rem)] overflow-y-auto border-r border-neutral-800',
      vscodeStyles.components.sidebar.container
    )}>
      <nav className="flex flex-col justify-between h-full p-2 font-mono">
        <div className="flex flex-col items-start w-full">
          {/* Encabezado EXPLORER - estilo VSCode */}
          <div className={cn(
            'flex justify-between items-center w-full mb-1',
            vscodeStyles.components.sidebar.header
          )}>
            <span>EXPLORER</span>
            <span className="pr-2 text-neutral-500 hover:text-white cursor-pointer">⋯</span>
          </div>

          {/* Carpeta raíz */}
          <div className={cn('flex items-center gap-1.5 w-full', vscodeStyles.components.sidebarItem.folder)}>
            <FaChevronDown className={cn('text-xs', vscodeStyles.components.sidebar.chevron)} />
            <span className="text-sm">COM.FLAVIOKDE.WEBSITE</span>
          </div>

          {/* Subcarpetas y archivos */}
          <ul className="flex flex-col items-start w-full pl-6 mt-0.5 gap-0.5">
            {/* Carpeta public */}
            <li className={cn('flex items-center gap-1.5 w-full', vscodeStyles.components.sidebarItem.folder)}>
              <FaChevronDown className={cn('text-xs', vscodeStyles.components.sidebar.chevron)} />
              <span className="text-sm">public</span>
            </li>

            {/* Carpeta src */}
            <li className={cn('flex items-center gap-1.5 w-full', vscodeStyles.components.sidebarItem.folder)}>
              <FaChevronDown className={cn('text-xs', vscodeStyles.components.sidebar.chevron)} />
              <span className="text-sm">src</span>
            </li>

            {/* Carpeta components */}
            <li className={cn('flex items-center gap-1.5 w-full', vscodeStyles.components.sidebarItem.folder)}>
              <FaChevronDown className={cn('text-xs', vscodeStyles.components.sidebar.chevron)} />
              <span className="text-sm">components</span>
            </li>

            {/* Archivos */}
            <li
              className={cn('w-full', vscodeStyles.components.sidebarItem.base)}
              onClick={() => openTab('About.js')}
            >
              <FaReact className={cn('text-sm', vscodeStyles.ui.cyan)} />
              <span>About.js</span>
            </li>

            <li
              className={cn('w-full', vscodeStyles.components.sidebarItem.base)}
              onClick={() => openTab('Projects.js')}
            >
              <FaReact className={cn('text-sm', vscodeStyles.ui.cyan)} />
              <span>Projects.js</span>
            </li>

            <li
              className={cn('w-full', vscodeStyles.components.sidebarItem.base)}
              onClick={() => openTab('CV.js')}
            >
              <FaReact className={cn('text-sm', vscodeStyles.ui.cyan)} />
              <span>CV.js</span>
            </li>

            <li
              className={cn('w-full', vscodeStyles.components.sidebarItem.base)}
              onClick={() => openTab('Contact.js')}
            >
              <FaReact className={cn('text-sm', vscodeStyles.ui.cyan)} />
              <span>Contact.js</span> 
            </li>

            <li
              className={cn('w-full', vscodeStyles.components.sidebarItem.base)}
              onClick={() => openTab('ReadmeViewer.js')}
            >
              <MdInfoOutline className={cn('text-sm', vscodeStyles.ui.blue)} />
              <span>README.md</span>
            </li>
          </ul>
        </div>
        
        {/* Sección inferior - OUTLINE y TIMELINE */}
        <div className={cn('mt-auto pt-2 border-t border-neutral-800')}>
          <div className={cn(
            'px-3 py-1.5 text-[11px] text-neutral-500 hover:text-neutral-300 hover:bg-[#2a2d2e] rounded cursor-pointer transition-colors duration-150'
          )}>
            &gt; OUTLINE
          </div>
          <div className={cn(
            'px-3 py-1.5 text-[11px] text-neutral-500 hover:text-neutral-300 hover:bg-[#2a2d2e] rounded cursor-pointer transition-colors duration-150'
          )}>
            &gt; TIMELINE
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
