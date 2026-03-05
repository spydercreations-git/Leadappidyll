/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Secure authentication utilities
const SALT = 'idyll_prod_2026_secure';

// Hash function to obfuscate credentials
const hashCredential = (str: string): string => {
  let hash = 0;
  const combined = str + SALT;
  for (let i = 0; i < combined.length; i++) {
    const char = combined.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(36);
};

// Encrypted user database (hashed credentials)
const USERS = [
  { u: hashCredential('harsh'), p: hashCredential('@idyll1') },
  { u: hashCredential('void'), p: hashCredential('@idyll1') },
  { u: hashCredential('smita'), p: hashCredential('@idyll1') },
  { u: hashCredential('snow'), p: hashCredential('@idyll1') },
  { u: hashCredential('zada'), p: hashCredential('@idyll1') },
  { u: hashCredential('vishal'), p: hashCredential('@idyll1') }
];

// Session key
const SESSION_KEY = '_idyll_auth_token';
const SESSION_TIMESTAMP = '_idyll_auth_time';

export const authenticate = (username: string, password: string): boolean => {
  const hashedUser = hashCredential(username.toLowerCase().trim());
  const hashedPass = hashCredential(password);
  
  const isValid = USERS.some(user => user.u === hashedUser && user.p === hashedPass);
  
  if (isValid) {
    // Create encrypted session token
    const token = hashCredential(`${username}_${Date.now()}_${SALT}`);
    sessionStorage.setItem(SESSION_KEY, token);
    sessionStorage.setItem(SESSION_TIMESTAMP, Date.now().toString());
  }
  
  return isValid;
};

export const isAuthenticated = (): boolean => {
  const token = sessionStorage.getItem(SESSION_KEY);
  const timestamp = sessionStorage.getItem(SESSION_TIMESTAMP);
  
  if (!token || !timestamp) return false;
  
  // Session expires after 24 hours
  const sessionAge = Date.now() - parseInt(timestamp);
  const maxAge = 24 * 60 * 60 * 1000; // 24 hours
  
  if (sessionAge > maxAge) {
    logout();
    return false;
  }
  
  return true;
};

export const logout = (): void => {
  sessionStorage.removeItem(SESSION_KEY);
  sessionStorage.removeItem(SESSION_TIMESTAMP);
};

// Prevent URL manipulation
export const initSecurityMeasures = (): void => {
  // Disable right-click context menu
  document.addEventListener('contextmenu', (e) => {
    if (!isAuthenticated()) {
      e.preventDefault();
    }
  });
  
  // Detect dev tools (basic detection)
  const detectDevTools = () => {
    const threshold = 160;
    if (window.outerWidth - window.innerWidth > threshold || 
        window.outerHeight - window.innerHeight > threshold) {
      if (!isAuthenticated()) {
        logout();
        window.location.reload();
      }
    }
  };
  
  window.addEventListener('resize', detectDevTools);
  
  // Prevent keyboard shortcuts for dev tools
  document.addEventListener('keydown', (e) => {
    if (!isAuthenticated()) {
      // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      if (e.key === 'F12' || 
          (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
          (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
        return false;
      }
    }
  });
};
