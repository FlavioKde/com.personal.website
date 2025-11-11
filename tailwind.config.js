/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // VSCode Dark Theme Colors - usando los colores originales de Tailwind
        vscode: {
          // Backgrounds - usando los neutral de Tailwind que tenías originalmente
          bg: {
            primary: '#000000',      // black - Main background
            secondary: '#171717',   // neutral-900 - Editor background (tabs)
            tertiary: '#262626',    // neutral-800 - Sidebar, inputs
            hover: '#404040',       // neutral-700 - Hover state
            active: '#262626',      // neutral-800 - Active state
            border: '#404040',      // neutral-700 - Border color
            content: '#0a0a0a',     // neutral-950 - Content area
          },
          // Text colors - manteniendo los originales
          text: {
            primary: '#ffffff',     // white - Main text
            secondary: '#d4d4d4',   // neutral-300 - Secondary text
            muted: '#a3a3a3',        // neutral-400 - Muted text
            disabled: '#737373',    // neutral-500 - Disabled text
          },
          // UI element colors - usando los colores exactos de Tailwind que tenías
          ui: {
            purple: '#c084fc',       // purple-400 - File names, links
            green: '#4ade80',        // green-400 - Hover states, success
            cyan: '#22d3ee',         // cyan-400 - React icons, info
            blue: '#60a5fa',         // blue-400 - Info icons
            blue500: '#3b82f6',       // blue-500 - Primary actions
            yellow: '#facc15',       // yellow-400 - Warnings
            red: '#f87171',          // red-400 - Errors, close buttons
            orange: '#fb923c',       // orange-400 - Secondary actions
          },
        },
      },
      fontFamily: {
        mono: ['Consolas', 'Monaco', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}