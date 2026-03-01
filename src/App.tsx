/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Copy, Edit2, RotateCcw, Check, Search, User, Mail, Video, Rocket, Briefcase, Building2, Star, MoreVertical, LogOut, Info } from 'lucide-react';
import { TEMPLATES, EmailTemplate } from './templates';
import LoginPage from './LoginPage';
import WelcomePage from './WelcomePage';
import Chatbot from './Chatbot';
import AboutPage from './AboutPage';
import OfflinePage from './OfflinePage';
import { isAuthenticated, logout, initSecurityMeasures } from './auth';

type Category = 'All' | 'Favorites' | 'Creators' | 'SaaS' | 'Agencies' | 'Business';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [username, setUsername] = useState('');
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Monitor online/offline status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Check authentication on mount
  useEffect(() => {
    const authenticated = isAuthenticated();
    setIsLoggedIn(authenticated);
    setShowWelcome(authenticated);
    setIsInitialized(true);
    
    if (authenticated) {
      initSecurityMeasures();
    }
  }, []);

  // Prevent URL manipulation
  useEffect(() => {
    if (isInitialized && !isLoggedIn) {
      // Clear any attempt to access the app without authentication
      window.history.replaceState(null, '', '/');
    }
  }, [isLoggedIn, isInitialized]);

  const handleLogin = (user: string) => {
    setUsername(user);
    setIsLoggedIn(true);
    setShowWelcome(true);
    initSecurityMeasures();
  };

  const handleWelcomeContinue = () => {
    setShowWelcome(false);
  };

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
    setShowWelcome(false);
    setUsername('');
    window.location.reload();
  };

  // Show login page if not authenticated
  if (!isInitialized) {
    return null; // Prevent flash of content
  }

  // Show offline page if no internet
  if (!isOnline) {
    return <OfflinePage />;
  }

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  if (showWelcome) {
    return <WelcomePage onContinue={handleWelcomeContinue} onLogout={handleLogout} username={username} />;
  }

  return <MainApp onLogout={handleLogout} />;
}

function MainApp({ onLogout }: { onLogout: () => void }) {
  const [clientName, setClientName] = useState('');
  const [templates, setTemplates] = useState<EmailTemplate[]>(TEMPLATES);
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [favorites, setFavorites] = useState<number[]>(() => {
    const saved = localStorage.getItem('favoriteTemplates');
    return saved ? JSON.parse(saved) : [];
  });

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('favoriteTemplates', JSON.stringify(favorites));
  }, [favorites]);

  // Toggle favorite
  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  // Handle template text changes
  const handleTemplateEdit = (id: number, newText: string) => {
    setTemplates(prev => prev.map(t => t.id === id ? { ...t, defaultText: newText } : t));
  };

  // Reset a specific template
  const handleReset = (id: number) => {
    const original = TEMPLATES.find(t => t.id === id);
    if (original) {
      setTemplates(prev => prev.map(t => t.id === id ? { ...t, defaultText: original.defaultText } : t));
      setEditingId(null);
    }
  };

  // Copy to clipboard
  const handleCopy = (id: number, text: string) => {
    const processedText = text.replaceAll('[NAME]', clientName || '[NAME]');
    navigator.clipboard.writeText(processedText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredTemplates = useMemo(() => {
    let filtered = templates;
    
    // Filter by category
    if (activeCategory === 'Favorites') {
      filtered = filtered.filter(t => favorites.includes(t.id));
    } else if (activeCategory !== 'All') {
      filtered = filtered.filter(t => t.category === activeCategory);
    }
    
    // Filter by search query (title, content, or ID number)
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(t => 
        t.title.toLowerCase().includes(query) || 
        t.defaultText.toLowerCase().includes(query) ||
        t.id.toString().includes(query)
      );
    }
    return filtered;
  }, [templates, activeCategory, searchQuery, favorites]);

  const categories: { name: Category; icon: React.ReactNode }[] = [
    { name: 'All', icon: <Mail className="w-4 h-4" /> },
    { name: 'Favorites', icon: <Star className="w-4 h-4" /> },
    { name: 'Creators', icon: <Video className="w-4 h-4" /> },
    { name: 'SaaS', icon: <Rocket className="w-4 h-4" /> },
    { name: 'Agencies', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'Business', icon: <Building2 className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-brand-yellow/30 relative">
      {/* Menu Button - Top Right */}
      <div className="fixed top-4 right-4 z-40">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="p-2.5 bg-white border border-black/10 rounded-xl shadow-lg hover:shadow-xl transition-all"
        >
          <MoreVertical className="w-5 h-5 text-text-dark" />
        </button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {showMenu && (
            <>
              {/* Backdrop */}
              <div 
                className="fixed inset-0 z-30"
                onClick={() => setShowMenu(false)}
              />
              
              {/* Menu */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-48 bg-white border border-black/10 rounded-2xl shadow-xl overflow-hidden z-40"
              >
                <button
                  onClick={() => {
                    setShowAbout(true);
                    setShowMenu(false);
                  }}
                  className="w-full px-4 py-3 flex items-center space-x-3 hover:bg-bg-beige transition-all text-left"
                >
                  <Info className="w-4 h-4 text-text-muted" />
                  <span className="text-sm font-medium text-text-dark">About</span>
                </button>
                <div className="border-t border-black/5" />
                <button
                  onClick={() => {
                    onLogout();
                    setShowMenu(false);
                  }}
                  className="w-full px-4 py-3 flex items-center space-x-3 hover:bg-red-50 transition-all text-left"
                >
                  <LogOut className="w-4 h-4 text-red-600" />
                  <span className="text-sm font-medium text-red-600">Logout</span>
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Header Section */}
      <header className="pt-8 md:pt-16 pb-6 md:pb-12 px-4 md:px-6 text-center max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src="https://res.cloudinary.com/dxd79mrse/image/upload/v1772161578/Idyll_Productions_Black_ty3r3d.png" 
            alt="Idyll Productions Logo" 
            className="h-12 md:h-24 mx-auto mb-3 md:mb-6"
          />
          <h1 className="text-xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-dark mb-2 md:mb-4 px-2">
            Idyll Productions – <span className="text-text-muted font-light italic">Cold Email Generator</span>
          </h1>
          <p className="text-xs md:text-lg text-text-muted max-w-2xl mx-auto leading-relaxed px-2">
            Generate high-impact, hook-based cold emails for video editing outreach. 
            Personalize, edit, and copy instantly.
          </p>
        </motion.div>
      </header>

      {/* Input Section */}
      <section className="max-w-4xl mx-auto px-4 md:px-6 mb-8 md:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-text-muted group-focus-within:text-brand-yellow-hover transition-colors">
              <User className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Client Name (e.g. Alex)"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full pl-12 pr-4 py-3 md:py-4 bg-white border border-black/5 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow transition-all text-sm md:text-lg placeholder:text-text-muted/40"
            />
            {clientName && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-brand-yellow-hover uppercase tracking-widest">
                Dynamic
              </div>
            )}
          </motion.div>

          <motion.div 
            className="relative group"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-text-muted group-focus-within:text-brand-yellow-hover transition-colors">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 md:py-4 bg-white border border-black/5 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow transition-all text-sm md:text-lg placeholder:text-text-muted/40"
            />
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <nav className="max-w-6xl mx-auto px-4 md:px-6 mb-6 md:mb-12 overflow-x-auto no-scrollbar">
        <div className="flex justify-start md:justify-center space-x-2 min-w-max pb-2">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`flex items-center space-x-1.5 md:space-x-2 px-3 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium transition-all whitespace-nowrap ${
                activeCategory === cat.name
                  ? 'bg-text-dark text-white shadow-lg'
                  : 'bg-white text-text-muted hover:bg-black/5 border border-black/5'
              }`}
            >
              {cat.icon}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Templates Grid */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 pb-20 md:pb-32">
        {filteredTemplates.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredTemplates.map((template, index) => (
                <motion.div
                  key={template.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full"
                >
                  {/* Card Header */}
                  <div className="px-4 md:px-8 py-3 md:py-6 border-b border-black/5 flex justify-between items-center bg-white">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-text-muted/50">
                          {template.category}
                        </span>
                        <span className="text-[9px] md:text-[10px] font-bold text-brand-yellow-hover bg-brand-yellow/20 px-1.5 md:px-2 py-0.5 rounded">
                          #{template.id}
                        </span>
                      </div>
                      <h3 className="text-base md:text-xl font-semibold text-text-dark truncate">{template.title}</h3>
                    </div>
                    <div className="flex space-x-1 md:space-x-2 ml-2">
                      <button
                        onClick={() => toggleFavorite(template.id)}
                        className={`p-1.5 md:p-2 rounded-xl transition-all ${
                          favorites.includes(template.id)
                            ? 'text-brand-yellow-hover bg-brand-yellow/20'
                            : 'text-text-muted hover:text-brand-yellow-hover hover:bg-brand-yellow/10'
                        }`}
                        title={favorites.includes(template.id) ? "Remove from favorites" : "Add to favorites"}
                      >
                        <Star className={`w-3.5 h-3.5 md:w-4 md:h-4 ${favorites.includes(template.id) ? 'fill-current' : ''}`} />
                      </button>
                      <button
                        onClick={() => handleReset(template.id)}
                        className="p-1.5 md:p-2 text-text-muted hover:text-text-dark hover:bg-black/5 rounded-xl transition-all"
                        title="Reset to default"
                      >
                        <RotateCcw className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      </button>
                      <button
                        onClick={() => setEditingId(editingId === template.id ? null : template.id)}
                        className={`p-1.5 md:p-2 rounded-xl transition-all ${
                          editingId === template.id 
                            ? 'bg-brand-yellow text-text-dark' 
                            : 'text-text-muted hover:text-text-dark hover:bg-black/5'
                        }`}
                        title="Edit template"
                      >
                        <Edit2 className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 md:p-8 flex-grow flex flex-col">
                    {editingId === template.id ? (
                      <textarea
                        value={template.defaultText}
                        onChange={(e) => handleTemplateEdit(template.id, e.target.value)}
                        className="w-full h-48 md:h-64 p-3 md:p-4 bg-bg-beige border border-black/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-yellow/30 font-mono text-xs md:text-sm leading-relaxed resize-none"
                      />
                    ) : (
                      <div className="whitespace-pre-wrap text-text-dark leading-relaxed text-xs md:text-[15px] flex-grow">
                        {template.defaultText.split(/(\[NAME\])/g).map((part, i) => 
                          part === '[NAME]' ? (
                            <span key={i} className={clientName ? "text-text-dark font-bold bg-brand-yellow/20 px-1 rounded" : "text-text-muted/40 font-medium italic"}>
                              {clientName || '[NAME]'}
                            </span>
                          ) : part
                        )}
                      </div>
                    )}
                  </div>

                  {/* Card Footer */}
                  <div className="px-4 md:px-8 py-3 md:py-6 bg-bg-beige/50 border-t border-black/5">
                    <button
                      onClick={() => handleCopy(template.id, template.defaultText)}
                      className={`w-full py-3 md:py-4 rounded-2xl font-semibold text-xs md:text-sm flex items-center justify-center space-x-2 transition-all ${
                        copiedId === template.id
                          ? 'bg-emerald-500 text-white shadow-emerald-200 shadow-lg'
                          : 'bg-brand-yellow text-text-dark hover:bg-brand-yellow-hover shadow-brand-yellow/20 shadow-lg active:scale-[0.98]'
                      }`}
                    >
                      <AnimatePresence mode="wait">
                        {copiedId === template.id ? (
                          <motion.div
                            key="check"
                            className="flex items-center space-x-2"
                          >
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: [0, 1.2, 1] }}
                              transition={{ 
                                duration: 0.5,
                                times: [0, 0.6, 1],
                                ease: "easeOut"
                              }}
                            >
                              <Check className="w-5 h-5" strokeWidth={3} />
                            </motion.div>
                            <span>Copied</span>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="copy"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-center space-x-2"
                          >
                            <Copy className="w-4 h-4" />
                            <span>Copy Email Text</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 bg-white rounded-3xl border border-dashed border-black/10"
          >
            <div className="bg-bg-beige w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-6 h-6 text-text-muted/40" />
            </div>
            <h3 className="text-lg font-medium text-text-dark">No templates found</h3>
            <p className="text-text-muted">Try adjusting your search or category filter.</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="mt-6 text-sm font-semibold text-text-dark underline underline-offset-4 hover:text-text-muted transition-colors"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-8 md:py-12 text-center border-t border-black/5 bg-white">
        <p className="text-xs md:text-sm text-text-muted px-4">
          &copy; {new Date().getFullYear()} Idyll Productions. Built for internal outreach.
        </p>
      </footer>

      {/* Custom Styles for scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Chatbot */}
      <Chatbot />

      {/* About Page Modal */}
      <AnimatePresence>
        {showAbout && <AboutPage onClose={() => setShowAbout(false)} />}
      </AnimatePresence>
    </div>
  );
}
