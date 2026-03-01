/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Video, Mail, Zap, LogOut } from 'lucide-react';

interface WelcomePageProps {
  onContinue: () => void;
  onLogout: () => void;
  username: string;
}

export default function WelcomePage({ onContinue, onLogout, username }: WelcomePageProps) {
  const [progress, setProgress] = useState(0);

  // Get greeting based on time of day
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  const greeting = getGreeting();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: <Video className="w-6 h-6" />,
      title: "100+ Templates",
      description: "Pre-built cold emails for Creators, SaaS, Agencies & Business"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI Generation",
      description: "Generate custom emails with own idyll models"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Copy",
      description: "One-click copy with dynamic name personalization"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-yellow/20 via-white to-bg-beige flex items-center justify-center px-4 md:px-6 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl"
      >
        {/* Logo and Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <img 
            src="https://res.cloudinary.com/dxd79mrse/image/upload/v1772161578/Idyll_Productions_Black_ty3r3d.png" 
            alt="Idyll Productions Logo" 
            className="h-12 md:h-16 mx-auto mb-6 md:mb-12"
          />
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-text-dark mb-3 md:mb-6">
            {greeting}, <span className="text-brand-yellow-hover capitalize">{username}</span>!
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-text-muted/70 max-w-2xl mx-auto mb-2">
            Welcome to Idyll Productions
          </p>
          <p className="text-sm md:text-base lg:text-lg text-text-muted/60 max-w-2xl mx-auto">
            Your powerful cold email generator for video editing outreach
          </p>
        </motion.div>

        {/* Features Grid - 2 cards on mobile, 3 on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-12 px-2 md:px-0"
        >
          {features.slice(0, 2).map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              className="bg-white rounded-xl md:rounded-2xl border border-black/5 p-3 md:p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="bg-brand-yellow/10 w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center mb-2 md:mb-4 text-text-dark mx-auto md:mx-0">
                {React.cloneElement(feature.icon as React.ReactElement, { 
                  className: "w-4 h-4 md:w-6 md:h-6" 
                })}
              </div>
              <h3 className="text-xs md:text-lg font-bold text-text-dark mb-1 md:mb-2 text-center md:text-left">{feature.title}</h3>
              <p className="text-[10px] md:text-sm text-text-muted hidden md:block">{feature.description}</p>
            </motion.div>
          ))}
          {/* Third card only on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="hidden md:block bg-white rounded-2xl border border-black/5 p-6 shadow-sm hover:shadow-md transition-all"
          >
            <div className="bg-brand-yellow/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-text-dark">
              {features[2].icon}
            </div>
            <h3 className="text-lg font-bold text-text-dark mb-2">{features[2].title}</h3>
            <p className="text-sm text-text-muted">{features[2].description}</p>
          </motion.div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-6 md:mb-8"
        >
          <div className="bg-white rounded-full h-3 overflow-hidden border border-black/5 shadow-inner">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
              className="h-full bg-gradient-to-r from-brand-yellow to-brand-yellow-hover"
            />
          </div>
          <p className="text-center text-sm text-text-muted mt-3">
            {progress < 100 ? 'Loading your workspace...' : 'Ready to go!'}
          </p>
        </motion.div>

        {/* Continue Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: progress >= 100 ? 1 : 0.5, scale: progress >= 100 ? 1 : 0.95 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <button
            onClick={onContinue}
            disabled={progress < 100}
            className="inline-flex items-center space-x-2 px-6 py-2.5 bg-text-dark text-white rounded-lg font-semibold text-sm hover:bg-text-dark/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:scale-105 active:scale-95"
          >
            <Mail className="w-4 h-4" />
            <span>Start Creating Emails</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          {/* Logout Button - Below Continue Button */}
          <div className="mt-4">
            <button
              onClick={onLogout}
              className="inline-flex items-center space-x-2 px-6 py-2.5 bg-text-dark text-white rounded-lg font-semibold text-sm hover:bg-text-dark/90 transition-all shadow-lg hover:scale-105 active:scale-95"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center text-xs md:text-sm text-text-muted mt-6 md:mt-8"
        >
          Built exclusively for Idyll Productions team members
        </motion.p>
      </motion.div>
    </div>
  );
}
