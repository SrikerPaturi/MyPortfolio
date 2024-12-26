'use client';

import React, { useState } from 'react';
import { Shield, Lock, FileText, User, Code, ExternalLink, Mail, BookOpen, Server, Search, Menu, X, Calendar, Eye, Clock, ArrowRight, Book, Monitor, Hash } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

const IronGuardPlatform = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentBlogSeries, setCurrentBlogSeries] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const profile = {
    name: "Sriker Paturi",
    title: "Cybersecurity Professional",
    summary: "Cybersecurity enthusiast specializing in Vulnerability Management, Network Security, and Linux Environments. Join me for weekly security deep-dives and practical insights.",
    links: {
      linkedin: "https://www.linkedin.com/in/sriker-paturi-a044a2146/",
      github: "https://github.com/SrikerPaturi",
      email: "srikerpaturi28@gmail.com",
    },
  };

  const blogSeries = {
    'security-saturdays': {
      title: 'Security Saturdays',
      description: 'Deep dives into cybersecurity concepts and best practices.',
      color: '#9b5de5',
      logo: '/SS_Sriker_1.png',
    },
    'malware-mondays': {
      title: 'Malware Mondays',
      description: 'Exploring malware analysis techniques and threat mitigation strategies.',
      color: '#ff6f61',
      logo: '/MM_Logo.png',
    },
    'threatpost-thursdays': {
      title: 'Threatpost Thursdays',
      description: 'Weekly updates on the latest cybersecurity threats and trends.',
      color: '#4caf50',
      logo: '/TT_Logo.png',
    },
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="text-center p-4">
            <h1 className="text-4xl font-bold text-purple-600">Welcome to IronGuard Security</h1>
            <p className="text-lg text-gray-600 mt-2">
              Your trusted resource for cybersecurity insights, tools, and knowledge.
            </p>
          </div>
        );
      case 'blog':
        return (
          <div className="p-4">
            <h2 className="text-3xl font-semibold text-purple-600">{blogSeries['security-saturdays'].title}</h2>
            <img src={blogSeries['security-saturdays'].logo} alt="Security Saturdays Logo" className="w-32 mx-auto mt-4" />
            <p className="text-gray-600 mt-2">
              {blogSeries['security-saturdays'].description}
            </p>
            <h2 className="text-3xl font-semibold text-red-600 mt-8">{blogSeries['malware-mondays'].title}</h2>
            <img src={blogSeries['malware-mondays'].logo} alt="Malware Mondays Logo" className="w-32 mx-auto mt-4" />
            <p className="text-gray-600 mt-2">
              {blogSeries['malware-mondays'].description}
            </p>
            <h2 className="text-3xl font-semibold text-green-600 mt-8">{blogSeries['threatpost-thursdays'].title}</h2>
            <img src={blogSeries['threatpost-thursdays'].logo} alt="Threatpost Thursdays Logo" className="w-32 mx-auto mt-4" />
            <p className="text-gray-600 mt-2">
              {blogSeries['threatpost-thursdays'].description}
            </p>
          </div>
        );
      case 'about':
        return (
          <div className="p-4">
            <h2 className="text-3xl font-semibold text-purple-600">About {profile.name}</h2>
            <p className="text-gray-600 mt-2">{profile.summary}</p>
          </div>
        );
      case 'contact':
        return (
          <div className="p-4">
            <h2 className="text-3xl font-semibold text-purple-600">Contact</h2>
            <p className="text-gray-600 mt-2">Email: <a href={`mailto:${profile.links.email}`} className="text-purple-600">{profile.links.email}</a></p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-purple-600 text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">IronGuard Security</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><button onClick={() => setCurrentPage('home')} className="hover:underline">Home</button></li>
              <li><button onClick={() => setCurrentPage('blog')} className="hover:underline">Blog</button></li>
              <li><button onClick={() => setCurrentPage('about')} className="hover:underline">About</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="hover:underline">Contact</button></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="p-8">
        {renderPage()}
      </main>
      <footer className="bg-purple-600 text-white text-center p-4 mt-auto">
        <p>&copy; 2024 IronGuard Security. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default IronGuardPlatform;
