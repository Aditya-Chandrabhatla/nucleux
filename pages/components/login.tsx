/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { ChevronLeft, X, Info } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPrivacySettings, setShowPrivacySettings] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      {/* Header */}
      <div className="flex items-center justify-between p-4 text-white">
        <div className="flex items-center">
          <ChevronLeft className="w-5 h-5" />
          <span className="ml-2">Search</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>11:25 PM</span>
          <span>Sun 24 Nov</span>
          <div className="flex items-center space-x-2">
            <span>37%</span>
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M7 7h10v10H7z" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-4 pt-20">
        {/* Logo */}
        <div className="mb-8">
          <div className="text-4xl font-bold text-white flex items-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">NUCLEUX</span>
          </div>
        </div>

        {/* Tagline */}
        <h2 className="text-white text-xl mb-20">Medical knowledge for on the go.</h2>

        {/* Login Form */}
        <div className="w-full max-w-md space-y-4">
          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full px-4 py-3 bg-gray-900/50 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {email && (
              <button 
                onClick={() => setEmail('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Password Input */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-3 bg-gray-900/50 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Login Button */}
          <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors">
            LOGIN
          </button>

          {/* Forgot Password Link */}
          <div className="text-center">
            <button className="text-gray-300 hover:text-white text-sm">
              Forgot password?
            </button>
          </div>

          {/* Info Section */}
          <div className="flex items-start space-x-2 text-sm text-gray-300 mt-8">
            <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <div>
              <p>Signed up using Google, Facebook or your Institution?</p>
              <button className="text-purple-400 hover:text-purple-300 underline">
                You'll need to set a password first
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Settings Modal */}
      {showPrivacySettings && (
        <div className="fixed inset-0 bg-black/90 flex items-end">
          <div className="w-full p-6 space-y-4">
            <h3 className="text-lg font-semibold text-white">Your privacy settings</h3>
            <p className="text-gray-300 text-sm">
              You're entitled to know which data storage and access technologies we use, which data we and our partners collect using them, and what we or our partners do with this data. Your consent includes not only the processing of data on your devices, but also the processing of your data based on usage.
            </p>
            <p className="text-gray-300 text-sm">
              You can consent by opting in to specific purposes, or by choosing "Accept all". You can update your settings or revoke consent any time by following the "Privacy Settings" button in the app settings.
            </p>
            <div className="flex space-x-4 text-sm text-purple-400">
              <button className="hover:text-purple-300">Privacy Policy</button>
              <button className="hover:text-purple-300">Legal Notice</button>
              <button className="hover:text-purple-300">Customize</button>
            </div>
            <div className="flex space-x-4 pt-4">
              <button 
                onClick={() => setShowPrivacySettings(false)}
                className="flex-1 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
              >
                Deny
              </button>
              <button 
                onClick={() => setShowPrivacySettings(false)}
                className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700"
              >
                Continue
              </button>
            </div>
            <div className="text-center text-xs text-gray-500">
              Powered by Usercentrics Consent Management
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;

