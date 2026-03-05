/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Shield, AlertCircle } from 'lucide-react';

interface AdminPanelProps {
  onClose: () => void;
}

interface Announcement {
  title: string;
  description: string;
  enabled: boolean;
}

export default function AdminPanel({ onClose }: AdminPanelProps) {
  const [step, setStep] = useState<'verify' | 'authenticated'>('verify');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [announcement, setAnnouncement] = useState<Announcement>(() => {
    const saved = localStorage.getItem('adminAnnouncement');
    return saved ? JSON.parse(saved) : {
      title: 'Major Update: New Features Released!',
      description: 'We\'ve added Prompt Master for AI-powered email generation, Admin Panel for managing announcements, and replaced the chatbot with direct ChatGPT access. Plus 100+ email templates, favorites system, and mobile-optimized design!',
      enabled: true
    };
  });

  const handleVerify = () => {
    if (code === '1177') {
      setShowSuccess(true);
      setTimeout(() => {
        setStep('authenticated');
        setShowSuccess(false);
      }, 1500);
    } else {
      setError('Invalid code. Please try again.');
      setTimeout(() => setError(''), 2000);
    }
  };

  const handleSave = () => {
    localStorage.setItem('adminAnnouncement', JSON.stringify(announcement));
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
      // Reload to show updated announcement
      window.location.reload();
    }, 1500);
  };

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this announcement? This action cannot be undone.')) {
      localStorage.removeItem('adminAnnouncement');
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
        // Reload to remove announcement
        window.location.reload();
      }, 1500);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-black/5 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-brand-yellow-hover" />
            <h2 className="text-lg font-bold text-text-dark">Admin Panel</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-black/5 rounded-lg transition-all"
          >
            <X className="w-5 h-5 text-text-dark" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <AnimatePresence mode="wait">
            {step === 'verify' ? (
              <motion.div
                key="verify"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-brand-yellow-hover" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark mb-2">Enter Admin Code</h3>
                  <p className="text-sm text-text-muted">
                    Please enter the 4-digit admin code to access the panel
                  </p>
                </div>

                <div>
                  <input
                    type="password"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleVerify()}
                    placeholder="Enter code"
                    maxLength={4}
                    className="w-full px-4 py-3 bg-bg-beige border border-black/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow transition-all text-center text-2xl font-mono tracking-widest"
                  />
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 flex items-center space-x-2 text-red-600 text-sm"
                    >
                      <AlertCircle className="w-4 h-4" />
                      <span>{error}</span>
                    </motion.div>
                  )}
                </div>

                <button
                  onClick={handleVerify}
                  disabled={code.length !== 4}
                  className="w-full px-4 py-3 bg-text-dark text-white rounded-xl font-semibold hover:bg-text-dark/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Verify
                </button>

                {showSuccess && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", duration: 0.6 }}
                      className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center shadow-2xl"
                    >
                      <Check className="w-12 h-12 text-white" strokeWidth={3} />
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="authenticated"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center space-x-3">
                  <Check className="w-5 h-5 text-emerald-600" />
                  <p className="text-sm text-emerald-800 font-medium">
                    Access granted! You can now manage announcements.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Announcement Title
                  </label>
                  <input
                    type="text"
                    value={announcement.title}
                    onChange={(e) => setAnnouncement({ ...announcement, title: e.target.value })}
                    placeholder="e.g., New Feature Released!"
                    className="w-full px-4 py-3 bg-bg-beige border border-black/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Announcement Description
                  </label>
                  <textarea
                    value={announcement.description}
                    onChange={(e) => setAnnouncement({ ...announcement, description: e.target.value })}
                    placeholder="e.g., Check out our new Prompt Master feature for generating custom cold emails!"
                    rows={4}
                    className="w-full px-4 py-3 bg-bg-beige border border-black/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow transition-all resize-none"
                  />
                </div>

                <div className="flex items-center justify-between bg-bg-beige rounded-xl p-4">
                  <div>
                    <p className="text-sm font-medium text-text-dark">Show Announcement</p>
                    <p className="text-xs text-text-muted">Display on welcome page</p>
                  </div>
                  <button
                    onClick={() => setAnnouncement({ ...announcement, enabled: !announcement.enabled })}
                    className={`relative w-12 h-6 rounded-full transition-all ${
                      announcement.enabled ? 'bg-emerald-500' : 'bg-gray-300'
                    }`}
                  >
                    <motion.div
                      animate={{ x: announcement.enabled ? 24 : 0 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md"
                    />
                  </button>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={handleDelete}
                    className="flex-1 px-4 py-3 bg-red-50 border border-red-200 text-red-600 rounded-xl font-semibold hover:bg-red-100 transition-all"
                  >
                    Delete
                  </button>
                  <button
                    onClick={handleSave}
                    className="flex-1 px-4 py-3 bg-text-dark text-white rounded-xl font-semibold hover:bg-text-dark/90 transition-all"
                  >
                    Save
                  </button>
                </div>

                {showSuccess && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", duration: 0.6 }}
                      className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center shadow-2xl"
                    >
                      <Check className="w-12 h-12 text-white" strokeWidth={3} />
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}
