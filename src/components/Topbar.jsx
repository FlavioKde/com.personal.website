import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { vscodeStyles, cn } from '../utils/vscodeStyles';

const Topbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(prev => !prev);
  const closeDropdown = () => setShowDropdown(false);

  const handleMinimize = () => {
    // Función para minimizar (puede ser implementada con Electron o similar)
    console.log('Minimize window');
  };

  const handleMaximize = () => {
    // Función para maximizar
    console.log('Maximize window');
  };

  const handleClose = () => {
    // Función para cerrar
    console.log('Close window');
  };

  return (
    <div className={cn(
      'fixed top-0 left-0 w-full h-10 px-0 font-mono text-xs z-50 flex items-center justify-between',
      vscodeStyles.components.topbar.container
    )}>
      {/* Menú de navegación - se oculta en móviles */}
      <div className="flex gap-1 items-center flex-shrink-0 md:flex hidden pl-3">
        <div className={cn(vscodeStyles.components.topbarItem.base, 'relative')} onClick={toggleDropdown}>
          File
          {showDropdown && (
            <div
              className={cn(
                'absolute top-full left-0 mt-0.5 z-10 flex flex-col min-w-[180px]',
                vscodeStyles.components.topbar.dropdown
              )}
              onClick={closeDropdown}
            >
              <a href="#resume" className={cn('px-3 py-1.5 cursor-pointer whitespace-nowrap text-sm text-neutral-300 hover:bg-[#2a2d2e] hover:text-white transition-colors')}>
                &gt; About.js
              </a>
              <a href="#projects" className={cn('px-3 py-1.5 cursor-pointer whitespace-nowrap text-sm text-neutral-300 hover:bg-[#2a2d2e] hover:text-white transition-colors')}>
                &gt; Projects.js
              </a>
              <a href="#contact" className={cn('px-3 py-1.5 cursor-pointer whitespace-nowrap text-sm text-neutral-300 hover:bg-[#2a2d2e] hover:text-white transition-colors')}>
                &gt; CV.js
              </a>
              <a href="#contact" className={cn('px-3 py-1.5 cursor-pointer whitespace-nowrap text-sm text-neutral-300 hover:bg-[#2a2d2e] hover:text-white transition-colors')}>
                &gt; Contact.js
              </a>
            </div>
          )}
        </div>
        <span className={vscodeStyles.components.topbarItem.base}>Edit</span>
        <span className={vscodeStyles.components.topbarItem.base}>Selection</span>
        <span className={vscodeStyles.components.topbarItem.base}>View</span>
        <span className={vscodeStyles.components.topbarItem.base}>Go</span>
      </div>

      {/* Buscador responsive - centrado y adaptable */}
      <div className="flex-1 flex justify-center max-w-2xl mx-4">
        <div className={cn(
          'flex items-center gap-2 px-3 py-1 rounded h-6 border w-full min-w-[200px] max-w-[320px]',
          'bg-[#252526] border-[#454545]'
        )}>
          <FiSearch className="text-xs flex-shrink-0 text-neutral-400" />
          <input
            type="text"
            value="com.flaviokde.website"
            readOnly
            className="bg-transparent outline-none text-xs w-full text-center text-purple-400 placeholder:text-neutral-500"
          />
        </div>
      </div>

      {/* Botones de ventana - estilo VSCode Windows con SVG inline */}
      <div className="flex-shrink-0 md:flex hidden items-center h-full">
        <button
          type="button"
          onClick={handleMinimize}
          className={cn(vscodeStyles.components.topbar.windowButton, 'appearance-none')}
          style={{ backgroundColor: 'transparent', border: 'none', padding: 0, margin: 0 }}
          title="Minimizar"
          aria-label="Minimizar"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
            <line x1="2" y1="6" x2="10" y2="6" stroke="#cccccc" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
        <button
          type="button"
          onClick={handleMaximize}
          className={cn(vscodeStyles.components.topbar.windowButton, 'appearance-none')}
          style={{ backgroundColor: 'transparent', border: 'none', padding: 0, margin: 0 }}
          title="Maximizar"
          aria-label="Maximizar"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
            <rect x="1" y="1" width="8" height="8" stroke="#cccccc" strokeWidth="1.2" fill="none"/>
          </svg>
        </button>
        <button
          type="button"
          onClick={handleClose}
          className={cn(vscodeStyles.components.topbar.windowButtonClose, 'appearance-none')}
          style={{ backgroundColor: 'transparent', border: 'none', padding: 0, margin: 0 }}
          title="Cerrar"
          aria-label="Cerrar"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
            <line x1="2" y1="2" x2="10" y2="10" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="10" y1="2" x2="2" y2="10" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Topbar;