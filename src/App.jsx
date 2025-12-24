import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Tabs from './components/Tabs';
import { vscodeStyles, cn } from './utils/vscodeStyles';
import './App.css';

function App() {
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const openTab = (name) => {
    if (!tabs.includes(name)) {
      setTabs([...tabs, name]);
    }
    setActiveTab(name);
    // Close sidebar on mobile when a tab is opened
    if (window.innerWidth < 768) {
      closeSidebar();
    }
  };

  const closeTab = (name) => {
    const newTabs = tabs.filter(tab => tab !== name);
    setTabs(newTabs);
    if (activeTab === name) {
      setActiveTab(newTabs.at(-1) || null);
    }
  };

  return (
    <div className={cn('min-h-screen font-mono', vscodeStyles.bg.primary, vscodeStyles.text.primary)}>
      <Topbar toggleSidebar={toggleSidebar} />
      <div className="flex" style={{ marginTop: '2.5rem' }}>
        <Sidebar openTab={openTab} isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
        <main className={cn(
          'w-full h-[calc(100vh-2.5rem)] overflow-y-auto transition-all duration-300',
          'md:ml-64', // Margin left only on desktop
          vscodeStyles.bg.primary
        )}>
          <Tabs
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            closeTab={closeTab}
          />
        </main>
      </div>
    </div>
  );
}

export default App;