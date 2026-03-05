/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Copy, Check, Sparkles } from 'lucide-react';

export default function PromptMaster() {
  const [formData, setFormData] = useState({
    recipientName: '',
    companyName: '',
    companyService: '',
    observation: '',
    websiteLink: '',
    numberOfOptions: '3'
  });
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedPrompt, setEditedPrompt] = useState('');
  const [customRules, setCustomRules] = useState<string[]>([]);
  const [newRule, setNewRule] = useState('');

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const generatedPrompt = useMemo(() => {
    const { recipientName, companyName, companyService, observation, websiteLink, numberOfOptions } = formData;
    const numOptions = parseInt(numberOfOptions) || 3;
    
    // Generate output format based on number of options
    let outputFormat = '';
    for (let i = 1; i <= numOptions; i++) {
      outputFormat += `\nSubject Line ${i}:\nEmail Option ${i}:\n`;
    }
    
    // Build rules list
    const defaultRules = [
      'Create a curiosity-based subject line so the email gets opened.',
      'Use very simple English (easy for a 5th grade student to understand).',
      'Start the email by mentioning the recipient\'s company.',
      'Clearly explain the purpose of the email within the first 2–3 lines.',
      'Show that research was done about the company.',
      'Connect our video editing services to their business situation.',
      'Do NOT write long praise or compliments.',
      'Keep each email short (60–90 words).',
      'Make the email sound human and friendly, not corporate or salesy.',
      'End with a small ask: a quick WhatsApp chat or quick chat only.',
      `Always generate ${numOptions} subject lines and ${numOptions} email options.`,
      'Always write using "we" (not "I").'
    ];
    
    const allRules = [...defaultRules, ...customRules];
    const rulesText = allRules.map((rule, index) => `${index + 1}. ${rule}`).join('\n');
    
    const prompt = `Write ${numOptions} personalized cold email options.

Follow these rules strictly:

${rulesText}

Recipient Information:
Name: ${recipientName || '[Recipient Name]'}
Company Name: ${companyName || '[Company Name]'}
Company Service: ${companyService || '[What the company does]'}
Observation About Company: ${observation || '[Something specific noticed about their company, content, or product]'}

Sender Information:
Company: Idyll Productions
Description: We are Idyll Productions, a creative studio focused on video editing and storytelling for creators and brands.
Services: YouTube editing, short form content editing, SaaS product demos, gaming content editing
Workflow: Projects are managed transparently using Notion.
Website: ${websiteLink || '[Website Link]'}

Goal:
Introduce our video editing services and ask if they are open to a quick WhatsApp chat or quick chat.

Output format:${outputFormat}`;

    if (!isEditing) {
      setEditedPrompt(prompt);
    }
    return prompt;
  }, [formData, isEditing, customRules]);

  return (
    <div className="min-h-screen bg-bg-beige px-3 md:px-4 pb-4 md:pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4 md:mb-6">
          <div className="flex items-center justify-center space-x-2 mb-2 md:mb-3">
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-brand-yellow-hover" />
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-text-dark">Prompt Master</h1>
          </div>
          <p className="text-xs md:text-sm lg:text-base text-text-muted mb-3 md:mb-4 px-2">
            Fill in the details to generate your personalized cold email prompt
          </p>
          <button
            onClick={() => {
              setFormData({
                recipientName: '',
                companyName: '',
                companyService: '',
                observation: '',
                websiteLink: '',
                numberOfOptions: '3'
              });
              setEditedPrompt('');
              setIsEditing(false);
              setCustomRules([]);
              setNewRule('');
            }}
            className="px-3 py-1.5 md:px-4 md:py-2 bg-white border border-black/10 rounded-xl text-xs md:text-sm font-medium text-text-dark hover:bg-black/5 transition-all"
          >
            Reset All Fields
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {/* Left Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl md:rounded-3xl border border-black/5 shadow-sm p-4 md:p-6 lg:p-8"
          >
            <h2 className="text-base md:text-lg font-semibold text-text-dark mb-4 md:mb-6">Fill in the Details</h2>
            
            <div className="space-y-4 md:space-y-5">
              <div>
                <label className="block text-xs md:text-sm font-medium text-text-dark mb-1.5 md:mb-2">
                  Number of Email Options
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={formData.numberOfOptions}
                  onChange={(e) => setFormData({ ...formData, numberOfOptions: e.target.value })}
                  placeholder="3"
                  className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-bg-beige border border-black/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow transition-all text-sm"
                />
                <p className="text-[10px] md:text-xs text-text-muted mt-1">How many email variations to generate (1-10)</p>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-text-dark mb-1.5 md:mb-2">
                  Recipient Name
                </label>
                <input
                  type="text"
                  value={formData.recipientName}
                  onChange={(e) => setFormData({ ...formData, recipientName: e.target.value })}
                  placeholder="e.g., John Smith"
                  className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-bg-beige border border-black/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-text-dark mb-1.5 md:mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="e.g., TechCorp Inc."
                  className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-bg-beige border border-black/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-text-dark mb-1.5 md:mb-2">
                  Company Service
                </label>
                <input
                  type="text"
                  value={formData.companyService}
                  onChange={(e) => setFormData({ ...formData, companyService: e.target.value })}
                  placeholder="e.g., SaaS platform for project management"
                  className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-bg-beige border border-black/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-text-dark mb-1.5 md:mb-2">
                  Observation About Company
                </label>
                <textarea
                  value={formData.observation}
                  onChange={(e) => setFormData({ ...formData, observation: e.target.value })}
                  placeholder="e.g., Noticed your recent product launch video has great potential"
                  rows={3}
                  className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-bg-beige border border-black/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow transition-all text-sm resize-none"
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-text-dark mb-1.5 md:mb-2">
                  Website Link
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={formData.websiteLink}
                    onChange={(e) => setFormData({ ...formData, websiteLink: e.target.value })}
                    placeholder="e.g., https://idyllproductions.com"
                    className="flex-1 px-3 py-2.5 md:px-4 md:py-3 bg-bg-beige border border-black/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow transition-all text-sm"
                  />
                  <button
                    onClick={() => setFormData({ ...formData, websiteLink: 'https://idyllproductions.com' })}
                    className="px-3 py-2.5 md:px-4 md:py-3 bg-brand-yellow text-text-dark rounded-xl font-medium text-xs md:text-sm hover:bg-brand-yellow-hover transition-all whitespace-nowrap"
                  >
                    Use Idyll
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-text-dark mb-1.5 md:mb-2">
                  Custom Rules (Optional)
                </label>
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    <input
                      type="text"
                      value={newRule}
                      onChange={(e) => setNewRule(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && newRule.trim()) {
                          setCustomRules([...customRules, newRule.trim()]);
                          setNewRule('');
                        }
                      }}
                      placeholder="Add a custom rule and press Enter"
                      className="flex-1 px-3 py-2.5 md:px-4 md:py-3 bg-bg-beige border border-black/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow transition-all text-sm"
                    />
                    <button
                      onClick={() => {
                        if (newRule.trim()) {
                          setCustomRules([...customRules, newRule.trim()]);
                          setNewRule('');
                        }
                      }}
                      className="w-full sm:w-auto px-3 py-2.5 md:px-4 md:py-3 bg-brand-yellow text-text-dark rounded-xl font-medium text-xs md:text-sm hover:bg-brand-yellow-hover transition-all whitespace-nowrap"
                    >
                      Add Rule
                    </button>
                  </div>
                  
                  {customRules.length > 0 && (
                    <div className="bg-bg-beige rounded-xl p-2.5 md:p-3 space-y-2">
                      <p className="text-[10px] md:text-xs font-medium text-text-dark">Your Custom Rules:</p>
                      {customRules.map((rule, index) => (
                        <div key={index} className="flex items-start justify-between space-x-2 bg-white rounded-lg p-2">
                          <span className="text-[10px] md:text-xs text-text-dark flex-1 leading-relaxed">{index + 13}. {rule}</span>
                          <button
                            onClick={() => setCustomRules(customRules.filter((_, i) => i !== index))}
                            className="text-red-600 hover:text-red-700 text-[10px] md:text-xs font-medium flex-shrink-0"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Live Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl md:rounded-3xl border border-black/5 shadow-sm p-4 md:p-6 lg:p-8 flex flex-col"
          >
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h2 className="text-base md:text-lg font-semibold text-text-dark">Live Preview</h2>
              <div className="flex space-x-1.5 md:space-x-2">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className={`px-2.5 py-1.5 md:px-3 md:py-2 rounded-xl font-medium text-[10px] md:text-xs transition-all ${
                    isEditing
                      ? 'bg-text-dark text-white'
                      : 'bg-white border border-black/10 text-text-dark hover:bg-black/5'
                  }`}
                >
                  {isEditing ? 'View' : 'Edit'}
                </button>
                <button
                  onClick={() => handleCopy('prompt', isEditing ? editedPrompt : generatedPrompt)}
                  className={`px-3 py-1.5 md:px-4 md:py-2 rounded-xl font-semibold text-[10px] md:text-sm flex items-center space-x-1.5 md:space-x-2 transition-all ${
                    copiedId === 'prompt'
                      ? 'bg-emerald-500 text-white'
                      : 'bg-brand-yellow text-text-dark hover:bg-brand-yellow-hover'
                  }`}
                >
                  {copiedId === 'prompt' ? (
                    <>
                      <Check className="w-3 h-3 md:w-4 md:h-4" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 md:w-4 md:h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="flex-1 bg-bg-beige rounded-2xl p-3 md:p-4 overflow-y-auto max-h-[400px] md:max-h-[600px]">
              {isEditing ? (
                <textarea
                  value={editedPrompt}
                  onChange={(e) => setEditedPrompt(e.target.value)}
                  className="w-full h-full min-h-[350px] md:min-h-[400px] text-[10px] md:text-xs lg:text-sm text-text-dark leading-relaxed font-mono bg-transparent border-none focus:outline-none resize-none"
                />
              ) : (
                <pre className="text-[10px] md:text-xs lg:text-sm text-text-dark leading-relaxed whitespace-pre-wrap font-mono">
                  {generatedPrompt}
                </pre>
              )}
            </div>

            <div className="mt-3 md:mt-4 p-3 md:p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
              <p className="text-[10px] md:text-xs text-yellow-800">
                <strong>Tip:</strong> Copy this prompt and paste it into ChatGPT or any AI tool to generate your personalized cold emails!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
