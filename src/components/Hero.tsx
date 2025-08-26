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
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-200 rounded-full opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-200 rounded-full opacity-10 animate-pulse delay-500"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-float`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${4 + i}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className={`${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="mb-6">
            <span className="text-lg font-semibold text-blue-600 mb-4 block tracking-wider">HELLO, MY NAME IS</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-4">
              Sahil{' '}
              <span className="text-blue-600 relative">
                Alamgir
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-600 transform scale-x-0 animate-expand"></div>
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-gray-700">Building the future with data &amp; AI</h2>
          </div>
        </div>
        
        <div className={`${mounted ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-4 font-light">
              Passionate about <span className="text-blue-600 font-semibold">artificial intelligence</span>, 
              <span className="text-blue-600 font-semibold"> machine learning</span>, and 
              <span className="text-blue-600 font-semibold"> data science</span>
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              I transform complex data into intelligent solutions that solve real-world problems. 
              From winning hackathons to building production AI systems, I love turning ideas into impact.
            </p>
          </div>
        </div>

        <div className={`${mounted ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
          <div className="flex items-center justify-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10">Explore My Work</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        <div className={`${mounted ? 'animate-fade-in-up stagger-3' : 'opacity-0'}`}>
          <div className="flex items-center justify-center space-x-6">
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
              aria-label="X (Twitter)"
            >
              <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`${mounted ? 'animate-fade-in-up stagger-4' : 'opacity-0'}`}>
          <div className="mt-16 flex flex-col items-center">
            <p className="text-sm text-gray-500 mb-2">Scroll to explore</p>
            <div className="w-0.5 h-8 bg-blue-600 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}