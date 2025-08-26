'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className={`${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="heading-responsive font-bold text-gray-900 mb-6">
            Hi, I'm{' '}
            <span className="text-blue-600">Sahil Alamgir</span>
          </h1>
        </div>
        
        <div className={`${mounted ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>
          <p className="text-responsive text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            A passionate Full Stack Developer who loves creating modern, scalable web applications.
            I specialize in React, Node.js, and cloud technologies, turning ideas into digital experiences.
          </p>
        </div>

        <div className={`${mounted ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
          <div className="flex items-center justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn btn-primary text-lg px-8 py-3"
            >
              View My Work
            </button>
          </div>
        </div>

        <div className={`${mounted ? 'animate-fade-in-up stagger-3' : 'opacity-0'}`}>
          <div className="mt-12 flex items-center justify-center space-x-6">
            <a
              href="https://github.com/sahilalamgir"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-soft hover:shadow-soft-lg transition-all duration-200 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/sahil-alamgir"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-soft hover:shadow-soft-lg transition-all duration-200 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://x.com/sahilalamgir"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-soft hover:shadow-soft-lg transition-all duration-200 hover:-translate-y-1"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`${mounted ? 'animate-fade-in-up stagger-4' : 'opacity-0'}`}>
          <div className="mt-16 flex flex-col items-center">
            <p className="text-sm text-gray-500 mb-2">Scroll to explore</p>
            <div className="w-0.5 h-8 bg-gradient-to-b from-blue-600 to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}