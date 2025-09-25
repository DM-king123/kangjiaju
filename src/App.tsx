import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Heart, 
  Mail, 
  User,
  Briefcase,
  BookOpen,
  Calendar,
  FileText
} from 'lucide-react';
import AboutPage from './components/AboutPage';
import ResearchPage from './components/ResearchPage';
import CatPage from './components/CatPage';
import CompanyPage from './components/CompanyPage';
import ContactPage from './components/ContactPage';
import SchedulePage from './components/SchedulePage';
import BlogPage from './components/BlogPage';

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [typedText, setTypedText] = useState('');
  const fullText = "Researcher · Tech Leader · Cat Dad";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'research', label: 'Research', icon: BookOpen },
    { id: 'company', label: 'My Company', icon: Briefcase },
    { id: 'blog', label: 'Blog', icon: FileText },
    { id: 'cat', label: 'My Cat', icon: Heart },
    { id: 'contact', label: 'Contact', icon: Mail },
    { id: 'schedule', label: 'Schedule', icon: Calendar }
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'about':
        return <AboutPage typedText={typedText} />;
      case 'research':
        return <ResearchPage />;
      case 'cat':
        return <CatPage />;
      case 'company':
        return <CompanyPage />;
      case 'blog':
        return <BlogPage />;
      case 'contact':
        return <ContactPage />;
      case 'schedule':
        return <SchedulePage />;
      default:
        return <AboutPage typedText={typedText} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center space-x-2">
              <span className="text-gray-300 font-medium text-sm">Jiaju Kang</span>
            </div>
            
            <div className="flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-1 px-3 py-1.5 rounded text-xs font-medium transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-gray-800/50 text-gray-300 border border-gray-700/50'
                      : 'text-gray-500 hover:text-gray-300 hover:bg-gray-800/30'
                  }`}
                >
                  <item.icon className="w-3 h-3" />
                  <span className="hidden sm:inline">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 py-4">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-600 text-xs">
            © 2024 Jiaju Kang. Made with <Heart className="inline w-2 h-2" /> and React.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;