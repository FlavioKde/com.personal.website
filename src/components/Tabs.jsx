import { useState } from 'react';
import About from './About';
import Projects from './Projects';
import CV from './CV';
import Contact from './Contact';
import ReadmeViewer from './ReadmeViewer';
import { FaReact } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { MdInfoOutline } from 'react-icons/md';
import { vscodeStyles, cn } from '../utils/vscodeStyles';
import logo from '../assets/logo_main.png';

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
        return (
        <div className="flex flex-col items-center justify-center h-full text-gray-400">
          <img
            src={logo}
            alt="Logo"
            className="w-72 h-72 mb-4"
          />
          <p className="text-sm">Select a file from the sidebar or refer to the README.md file to navigate....</p>
        </div>
        )
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Tabs bar - style VSCode */}
      <div className={cn('flex border-b border-[#3c3c3c] bg-[#2d2d30]')}>
        {tabs.map((tab) => {
          const isActive = tab === activeTab;
          const isReadme = tab === 'ReadmeViewer.js';

          return (
            <div
              key={tab}
              className={cn(
                vscodeStyles.components.tab.base,
                isActive ? vscodeStyles.components.tab.active : vscodeStyles.components.tab.inactive
              )}
              onClick={() => setActiveTab(tab)}
            >
              {/* Icon: Info for README, React for the rest */}
              {isReadme ? (
                <MdInfoOutline className={cn('text-xs flex-shrink-0', isActive ? 'text-blue-400' : 'text-neutral-500')} />
              ) : (
                <FaReact className={cn('text-xs flex-shrink-0', isActive ? 'text-cyan-400' : 'text-neutral-500')} />
              )}

              {/* File name */}
              <span className="whitespace-nowrap text-[13px]">{tab}</span>

              {/* Close button - only visible on hover */}
              <RxCross2
                className={cn(
                  'text-[12px] flex-shrink-0',
                  vscodeStyles.components.tab.closeButton,
                  isActive ? 'text-neutral-400 hover:text-white' : 'text-neutral-500 hover:text-neutral-300'
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  closeTab(tab);
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Content area - VSCode editor background */}
        <div className={cn('p-4 flex-1 overflow-y-auto bg-[#1e1e1e]')}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Tabs;