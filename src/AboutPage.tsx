/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { X, Info } from 'lucide-react';

interface AboutPageProps {
  onClose: () => void;
}

export default function AboutPage({ onClose }: AboutPageProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-brand-yellow to-brand-yellow-hover px-6 py-4 flex items-center justify-between border-b border-black/5">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-text-dark rounded-full flex items-center justify-center">
              <Info className="w-5 h-5 text-brand-yellow" />
            </div>
            <h2 className="text-xl font-bold text-text-dark">About This App</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-text-dark/10 rounded-xl transition-all"
          >
            <X className="w-5 h-5 text-text-dark" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Logo */}
          <div className="text-center">
            <img 
              src="https://res.cloudinary.com/dxd79mrse/image/upload/v1772161578/Idyll_Productions_Black_ty3r3d.png" 
              alt="Idyll Productions Logo" 
              className="h-20 mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-text-dark mb-2">Idyll Inbox</h3>
            <p className="text-sm text-text-muted">Cold Email Generator</p>
          </div>

          {/* Description */}
          <div className="bg-bg-beige rounded-2xl p-6 space-y-4">
            <p className="text-sm text-text-dark leading-relaxed">
              This application was developed by <span className="font-semibold">Harsh Pawar</span> exclusively for internal use at Idyll Productions. The platform connects with the company's database to provide real-time updates and centralized information management.
            </p>
            
            <p className="text-sm text-text-dark leading-relaxed">
              It is designed for efficient creation and management of cold email templates, helping the team maintain consistent and organized outreach. The system features a clean interface, simple navigation, and structured template workflows that allow users to quickly generate, edit, and manage professional email drafts while keeping all outreach resources in one secure workspace.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <h4 className="font-semibold text-text-dark">Key Features:</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li className="flex items-start space-x-2">
                <span className="text-brand-yellow-hover mt-0.5">•</span>
                <span>100+ pre-built cold email templates</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-brand-yellow-hover mt-0.5">•</span>
                <span>Real-time template editing and customization</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-brand-yellow-hover mt-0.5">•</span>
                <span>Favorites system for quick access</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-brand-yellow-hover mt-0.5">•</span>
                <span>AI-powered message humanizer (emergency use)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-brand-yellow-hover mt-0.5">•</span>
                <span>Auto-updates without reinstallation</span>
              </li>
            </ul>
          </div>

          {/* Team */}
          <div className="bg-white border border-black/5 rounded-2xl p-6">
            <h4 className="font-semibold text-text-dark mb-3">Idyll Productions Team:</h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-text-muted">
              <div><span className="font-medium text-text-dark">Harsh Pawar</span> - CEO</div>
              <div><span className="font-medium text-text-dark">Rohit Gaikwad</span> - COO</div>
              <div><span className="font-medium text-text-dark">Snow</span> - Chief Editing Manager</div>
              <div><span className="font-medium text-text-dark">Smita</span> - Chief Sales Officer</div>
              <div><span className="font-medium text-text-dark">Void</span> - Chief Commercial Officer</div>
              <div><span className="font-medium text-text-dark">Vishal</span> - CIO</div>
              <div><span className="font-medium text-text-dark">Mansi</span> - CFO</div>
              <div><span className="font-medium text-text-dark">Parth</span> - Chief Data Officer</div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-4 border-t border-black/5">
            <p className="text-xs text-text-muted">
              Copyright © 2026 Idyll Productions
            </p>
            <p className="text-xs text-text-muted mt-1">
              All rights reserved. For internal use only.
            </p>
          </div>
        </div>

        {/* Footer Button */}
        <div className="sticky bottom-0 bg-white border-t border-black/5 px-6 py-4">
          <button
            onClick={onClose}
            className="w-full py-3 bg-text-dark text-white rounded-2xl font-semibold hover:bg-text-dark/90 transition-all"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
}
