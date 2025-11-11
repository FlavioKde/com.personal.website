/**
 * Utilidades de estilos para mantener consistencia con el tema VSCode
 * Este archivo centraliza las clases comunes para facilitar el mantenimiento
 * Usa los colores originales de Tailwind (black, neutral-900, neutral-800, etc.)
 */

export const vscodeStyles = {
  // Backgrounds - usando los colores originales (black, neutral-900, neutral-800, etc.)
  bg: {
    primary: 'bg-black',              // #000000 - Main background
    secondary: 'bg-neutral-900',      // #171717 - Editor background (tabs)
    tertiary: 'bg-neutral-800',       // #262626 - Sidebar, inputs
    hover: 'bg-neutral-700',          // #404040 - Hover state
    active: 'bg-neutral-800',         // #262626 - Active state
    content: 'bg-neutral-950',        // #0a0a0a - Content area
  },
  
  // Text colors - manteniendo los originales
  text: {
    primary: 'text-white',            // Main text
    secondary: 'text-neutral-300',   // Secondary text
    muted: 'text-neutral-400',        // Muted text
    disabled: 'text-neutral-500',     // Disabled text
  },
  
  // UI colors - usando los colores exactos de Tailwind que tenías originalmente
  ui: {
    purple: 'text-purple-400',         // File names, links
    green: 'text-green-400',           // Hover states, success
    cyan: 'text-cyan-400',             // React icons, info
    blue: 'text-blue-400',             // Info icons
    blue500: 'text-blue-500',          // Primary actions (border de tabs activas)
    yellow: 'text-yellow-400',         // Warnings
    red: 'text-red-400',               // Errors, close buttons
    orange: 'text-orange-400',         // Secondary actions
  },
  
  // UI hover colors (for hover: prefix)
  uiHover: {
    green: 'hover:text-green-400',
    red: 'hover:text-red-400',
    purple: 'hover:text-purple-400',
  },
  
  // Borders - usando los colores originales
  border: {
    default: 'border-neutral-700',     // #404040
    light: 'border-white/20',
  },
  
  // Common component styles
  components: {
    // Tab styles - estilo VSCode
    tab: {
      base: 'flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono cursor-pointer border-r border-[#3c3c3c] relative group',
      inactive: 'bg-[#2d2d30] text-neutral-400 hover:bg-[#37373d] hover:text-neutral-300 transition-colors duration-150',
      active: 'bg-[#1e1e1e] text-white border-t-[2px] border-t-blue-500',
      closeButton: 'ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-150 hover:bg-[#3c3c3c] rounded p-0.5',
    },
    
    // Button styles
    button: {
      base: 'px-4 py-2 font-mono rounded transition-all duration-300',
      primary: 'bg-neutral-800 text-purple-400 hover:bg-neutral-700 hover:text-purple-300',
      secondary: 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700',
    },
    
    // Input styles
    input: {
      base: 'w-full px-3 py-2 bg-neutral-800 text-white rounded outline-none',
      focus: 'focus:ring-2 focus:ring-green-600',
    },
    
    // Sidebar item styles - estilo VSCode
    sidebarItem: {
      base: 'flex items-center gap-1.5 text-white px-2 py-0.5 rounded hover:bg-[#2a2d2e] hover:text-white transition-colors duration-150 cursor-pointer text-sm',
      folder: 'flex items-center gap-1.5 text-white px-2 py-0.5 rounded hover:bg-[#2a2d2e] transition-colors duration-150 cursor-pointer text-sm',
      active: 'text-green-400',
    },
    // Sidebar styles
    sidebar: {
      container: 'bg-[#252526] text-white',
      header: 'px-3 py-1.5 text-[11px] font-semibold text-neutral-300 uppercase tracking-wider',
      chevron: 'text-neutral-500 text-xs',
    },
    
    // Topbar menu item - estilo VSCode
    topbarItem: {
      base: 'text-neutral-300 hover:text-white hover:bg-[#2a2d2e] px-2 py-1 rounded cursor-pointer transition-colors duration-150',
    },
    // Topbar styles
    topbar: {
      container: 'bg-[#3c3c3c] text-white border-b border-[#454545]',
      dropdown: 'bg-[#252526] border border-[#454545] shadow-xl',
      windowButton: 'w-[46px] h-full flex items-center justify-center border-0 outline-none bg-transparent hover:bg-[#505050] transition-colors duration-150 cursor-pointer text-neutral-300 p-0 m-0',
      windowButtonClose: 'w-[46px] h-full flex items-center justify-center border-0 outline-none bg-transparent hover:bg-[#e81123] transition-colors duration-150 cursor-pointer text-white p-0 m-0',
    },
    
    // Code viewer - estilo VSCode
    codeViewer: {
      container: 'flex bg-[#1e1e1e] text-white font-mono text-sm rounded overflow-hidden',
      lineNumbers: 'bg-[#1e1e1e] text-neutral-600 text-right pr-4 pl-4 py-4 select-none border-r border-neutral-800 min-w-[50px]',
      content: 'px-4 py-4',
    },
  },
};

/**
 * Combina múltiples clases de estilo
 * @param {...string} classes - Clases a combinar
 * @returns {string} Clases combinadas
 */
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};
