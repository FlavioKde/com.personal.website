import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Tabs from './components/Tabs';
import './App.css';

function App() {
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(null);

  const openTab = (name) => {
    if (!tabs.includes(name)) {
      setTabs([...tabs, name]);
    }
    setActiveTab(name);
  };

  const closeTab = (name) => {
    const newTabs = tabs.filter(tab => tab !== name);
    setTabs(newTabs);
    if (activeTab === name) {
      setActiveTab(newTabs[newTabs.length - 1] || null);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Topbar />
      <div className="flex" style={{ marginTop: '2.5rem' }}>
        <Sidebar openTab={openTab} />
        <main className="ml-64 w-full h-[calc(100vh-2.5rem)] bg-black overflow-y-auto">
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