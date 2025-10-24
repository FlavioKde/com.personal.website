import { useState } from 'react';
import About from './About';
import Projects from './Projects';
import CV from './CV';
import Contact from './Contact';

const Tabs = ({ tabs, activeTab, setActiveTab, closeTab }) => {

  const renderContent = () => {
    switch (activeTab) {
      case 'About.js':
        return <About/>
      case 'Projects.js':
        return <Projects/>
      case 'CV.js':
        return <CV/>
      case 'Contact.js':
        return <Contact/>;
      default:
        return <div className="text-neutral-500">Select File in project</div>;
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex border-b border-neutral-700 bg-neutral-900">
        {tabs.map(tab => (
          <div
            key={tab}
            className={`px-4 py-1 text-xs font-mono cursor-pointer border-r border-neutral-700 ${
              tab === activeTab ? 'bg-neutral-800 text-green-400' : 'text-purple-400 hover:text-green-400'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
            <span
              className="ml-2 text-red-500 hover:text-red-400"
              onClick={(e) => {
                e.stopPropagation();
                closeTab(tab);
              }}
            >
              ×
            </span>
          </div>
        ))}
      </div>
      <div className="p-4 bg-neutral-950 flex-1 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default Tabs;