/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { WifiOff, RefreshCw } from 'lucide-react';

export default function OfflinePage() {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-bg-beige flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
        >
          <WifiOff className="w-12 h-12 text-text-muted" />
        </motion.div>

        {/* Logo */}
        <img 
          src="https://res.cloudinary.com/dxd79mrse/image/upload/v1772161578/Idyll_Productions_Black_ty3r3d.png" 
          alt="Idyll Productions Logo" 
          className="h-16 mx-auto mb-4"
        />

        {/* Message */}
        <h1 className="text-2xl md:text-3xl font-bold text-text-dark mb-3">
          No Internet Connection
        </h1>
        <p className="text-text-muted mb-6 leading-relaxed">
          Please check your mobile data or WiFi connection and try again.
        </p>

        {/* Retry Button */}
        <button
          onClick={handleRetry}
          className="inline-flex items-center space-x-2 px-6 py-3 bg-brand-yellow text-text-dark rounded-2xl font-semibold hover:bg-brand-yellow-hover transition-all shadow-lg"
        >
          <RefreshCw className="w-5 h-5" />
          <span>Try Again</span>
        </button>

        {/* Tips */}
        <div className="mt-8 bg-white rounded-2xl p-6 text-left">
          <h3 className="font-semibold text-text-dark mb-3 text-sm">Connection Tips:</h3>
          <ul className="space-y-2 text-xs text-text-muted">
            <li className="flex items-start space-x-2">
              <span className="text-brand-yellow-hover mt-0.5">•</span>
              <span>Check if mobile data or WiFi is enabled</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-brand-yellow-hover mt-0.5">•</span>
              <span>Try turning airplane mode on and off</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-brand-yellow-hover mt-0.5">•</span>
              <span>Move to an area with better signal</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-brand-yellow-hover mt-0.5">•</span>
              <span>Restart your device if the problem persists</span>
            </li>
          </ul>
        </div>

        {/* Footer */}
        <p className="text-xs text-text-muted mt-6">
          Idyll Inbox requires an active internet connection
        </p>
      </motion.div>
    </div>
  );
}
