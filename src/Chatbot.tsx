/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Bot, User as UserIcon } from 'lucide-react';

interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

// Smart API key rotation
const getApiKeys = (): string[] => {
  const keys = import.meta.env.VITE_GROQ_API_KEYS || '';
  return keys.split(',').filter((key: string) => key.trim());
};

let currentKeyIndex = 0;
const apiKeys = getApiKeys();

const getNextApiKey = (): string => {
  if (apiKeys.length === 0) {
    throw new Error('No API keys configured');
  }
  const key = apiKeys[currentKeyIndex];
  currentKeyIndex = (currentKeyIndex + 1) % apiKeys.length;
  return key;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: 'assistant',
      content: "Hey! I'm here to help you with Idyll Productions. I can humanize your messages, answer questions about our studio, or help you communicate better with clients. What can I do for you?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    // Check internet connection first
    if (!navigator.onLine) {
      const offlineMessage: Message = {
        id: Date.now() + 1,
        role: 'assistant',
        content: "⚠️ No internet connection. Please check your mobile data or WiFi and try again.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, offlineMessage]);
      return;
    }

    const userMessage: Message = {
      id: Date.now(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const apiKey = getNextApiKey();
      
      console.log('Attempting to connect to Groq API...');
      console.log('Online status:', navigator.onLine);
      
      // Add timeout to detect connection issues
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout
      
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            {
              role: 'system',
              content: `You are an assistant for Idyll Productions. Your job is to humanize messages, make them sound natural, simple, and professional, and help communicate clearly with clients, creators, and businesses. Always rewrite messages so they sound like a real human speaking, not robotic or corporate. Keep the tone clear, honest, and friendly. Avoid fancy words, complicated language, or marketing buzzwords. The goal is to make messages feel genuine and easy to understand.

When the user gives you a message, rewrite or improve it so it sounds natural and professional while keeping the original meaning. Make sure the message feels like it is coming from a real creative studio talking to a real client.

If someone asks about Idyll Productions, respond with a clear explanation using this information:

Idyll Productions is a creative studio focused on video editing and storytelling. We work with creators, brands, and businesses to produce videos that connect with audiences and actually perform. Our philosophy is simple: no complicated processes, no fancy marketing language, just honest work and strong results.

We specialize in YouTube video editing, short-form social media content, SaaS product demos, gaming content, ads, and cinematic storytelling. Our team focuses on strong pacing, clean storytelling, and edits that are optimized for each platform.

We believe in transparency and long-term partnerships. Our process is straightforward: understand what the client needs, communicate clearly, deliver high-quality edits on time, and help them grow their audience.

Idyll Productions operates with a real team of professionals and over 20 skilled editors. Our company production value is around 5–10 million rupees, giving us the resources to handle projects of different scales while still staying flexible and creator-focused.

Projects are managed through clear workflows and organized systems, ensuring smooth collaboration from start to finish. Clients always know what stage their project is in, and communication stays simple and transparent.

If someone asks about the team, explain that the studio is led by:
- Harsh Pawar – CEO, founder and creative lead guiding the vision of the studio.
- Rohit Gaikwad – COO, responsible for operations and project coordination.
- Snow – Chief Editing Manager, overseeing the editing team and production quality.
- Smita – Chief Sales Officer, managing client relationships and partnerships.
- Void – Chief Commercial Officer, handling commercial strategy and business development.
- Vishal – Chief Information Officer, managing technical systems and internal data.
- Mansi – Chief Financial Officer, handling payments and financial operations.
- Parth – Chief Data Officer, managing internal software systems and databases.

The editing department includes 20+ skilled editors working daily to produce high-quality content for clients.

Always keep responses clear, natural, and human sounding. Avoid sounding like an AI or a corporate script. The tone should reflect a real creative studio that values honesty, quality work, and long-term collaboration.`
            },
            ...messages.map(msg => ({
              role: msg.role,
              content: msg.content
            })),
            {
              role: 'user',
              content: input.trim()
            }
          ],
          temperature: 0.7,
          max_tokens: 1000
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      console.log('Response status:', response.status);

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      
      console.log('API response received successfully');
      
      if (data.error) {
        throw new Error(data.error.message || 'Failed to get response');
      }

      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: 'assistant',
        content: data.choices[0].message.content,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error: any) {
      console.error('Chatbot error:', error);
      
      let errorContent = "Sorry, I'm having trouble connecting to the AI service right now. Please try again in a moment.";
      
      // Check specific error types
      if (error.name === 'AbortError') {
        errorContent = "⚠️ Request timed out. Your internet connection might be slow. Please check your connection and try again.";
      } else if (error.message?.includes('Failed to fetch') || error.message?.includes('NetworkError')) {
        errorContent = "⚠️ Cannot reach the AI service. Please check your internet connection (WiFi or mobile data) and try again.";
      } else if (error.message?.includes('API Error: 429')) {
        errorContent = "⚠️ Too many requests. Please wait a moment and try again.";
      } else if (error.message?.includes('API Error: 401')) {
        errorContent = "⚠️ Authentication error. Please contact support.";
      } else if (!navigator.onLine) {
        errorContent = "⚠️ No internet connection detected. Please check your WiFi or mobile data.";
      }
      
      const errorMessage: Message = {
        id: Date.now() + 1,
        role: 'assistant',
        content: errorContent,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-4 right-4 md:right-6 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-brand-yellow to-brand-yellow-hover text-text-dark rounded-full shadow-2xl hover:shadow-brand-yellow/50 transition-all flex items-center justify-center z-50 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-0 md:bottom-6 right-0 md:right-6 w-full md:w-96 h-[100dvh] md:h-[600px] md:rounded-3xl bg-white shadow-2xl border-0 md:border border-black/10 flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-yellow to-brand-yellow-hover text-text-dark px-4 md:px-6 pt-8 pb-4 md:pt-8 md:pb-5 flex items-center justify-between">
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                  <Bot className="w-8 h-8 md:w-10 md:h-10 text-text-dark" />
                </div>
                <div>
                  <h3 className="font-bold text-base md:text-lg">Idyll Assistant</h3>
                  <p className="text-[10px] md:text-xs text-text-dark/70">Message Humanizer & Helper</p>
                </div>
              </div>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="p-1.5 md:p-2 hover:bg-text-dark/10 rounded-xl transition-all"
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-3 md:space-y-4 bg-bg-beige/30">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 md:space-x-3 max-w-[85%] ${message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.role === 'user' ? 'bg-text-dark' : 'bg-gradient-to-br from-brand-yellow to-brand-yellow-hover'
                    }`}>
                      {message.role === 'user' ? (
                        <UserIcon className="w-4 h-4 md:w-5 md:h-5 text-brand-yellow" />
                      ) : (
                        <Bot className="w-4 h-4 md:w-5 md:h-5 text-text-dark" />
                      )}
                    </div>
                    <div>
                      <div className={`rounded-2xl px-3 py-2.5 md:px-4 md:py-3 ${
                        message.role === 'user' 
                          ? 'bg-text-dark text-white' 
                          : 'bg-white border border-black/5 text-text-dark'
                      }`}>
                        <p className="text-sm md:text-[15px] leading-relaxed whitespace-pre-wrap">{message.content}</p>
                      </div>
                      <p className="text-[10px] text-text-muted/50 mt-1.5 px-2">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-2 md:space-x-3 max-w-[85%]">
                    <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-br from-brand-yellow to-brand-yellow-hover flex items-center justify-center">
                      <Bot className="w-4 h-4 md:w-5 md:h-5 text-text-dark" />
                    </div>
                    <div className="bg-white border border-black/5 rounded-2xl px-3 py-2.5 md:px-4 md:py-3">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-text-muted/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 bg-text-muted/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 bg-text-muted/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 md:p-4 bg-white border-t border-black/5 safe-bottom space-y-2.5 md:space-y-3">
              {/* Connection Status */}
              {!isOnline && (
                <div className="px-2 py-1.5 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-[10px] text-red-700 text-center font-medium">
                    ⚠️ No internet connection - Please connect to WiFi or mobile data
                  </p>
                </div>
              )}
              
              {/* Warning Note */}
              <div className="px-2">
                <p className="text-[9px] md:text-[10px] text-yellow-700 text-center leading-tight">
                  Emergency AI Only - Max 20 messages/day. If not working, check your internet connection.
                </p>
              </div>
              
              <div className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1 px-3 md:px-4 py-2.5 md:py-3 bg-bg-beige/50 border border-black/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow transition-all text-sm disabled:opacity-50"
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  className="px-3 md:px-4 py-2.5 md:py-3 bg-text-dark text-white rounded-xl hover:bg-text-dark/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center"
                >
                  <Send className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
              <p className="text-[9px] md:text-[10px] text-text-muted/50 mt-2 text-center">
                Powered by Idyll.1.3 Services
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
