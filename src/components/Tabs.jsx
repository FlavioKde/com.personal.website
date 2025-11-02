import { useState } from 'react';
import About from './About';
import Projects from './Projects';
import CV from './CV';
import Contact from './Contact';
import ReadmeViewer from './ReadmeViewer';
import { FaReact } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { MdInfoOutline } from 'react-icons/md';

const Tabs = ({ tabs, activeTab, setActiveTab, closeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'About.js':
        return <About />;
      case 'Projects.js':
        return <Projects />;
      case 'CV.js':
        return <CV />;
      case 'Contact.js':
        return <Contact />;
      case 'ReadmeViewer.js':
        return <ReadmeViewer />;
      default:
        return <div className="text-neutral-500">Select File in project or open README.md</div>;
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex border-b border-neutral-700 bg-neutral-900">
        {tabs.map((tab) => {
          const isActive = tab === activeTab;
          const isReadme = tab === 'ReadmeViewer.js';

          return (
            <div
              key={tab}
              className={`flex items-center gap-2 px-4 py-1 text-xs font-mono cursor-pointer border-r border-neutral-700 relative
                ${isActive ? 'bg-neutral-800 text-white border-t-[4px] border-double border-t-blue-500' : 'text-purple-400 hover:text-green-400'}
              `}
              onClick={() => setActiveTab(tab)}
            >
              {/* Ícono: Info para README, React para el resto */}
              {isReadme ? (
                <MdInfoOutline className="text-blue-400 text-sm" />
              ) : (
                <FaReact className="text-cyan-400 text-sm" />
              )}

              {/* Nombre del archivo */}
              <span className="whitespace-nowrap">{tab}</span>

              {/* Botón de cierre */}
              <RxCross2
                className="text-sm text-white ml-2 hover:text-red-500"
                onClick={(e) => {
                  e.stopPropagation();
                  closeTab(tab);
                }}
              />
            </div>
          );
        })}
      </div>

      <div className="p-4 bg-neutral-950 flex-1 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default Tabs;