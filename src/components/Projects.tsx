'use client';

import { useEffect, useRef, useState } from 'react';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: 'GenSheets',
      subtitle: 'Data Science Tool',
      description: 'AI spreadsheet tool using Next.js and Supabase that enables 100+ users to query and edit data with natural language.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      tech: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'Danfo.js', 'Recharts'],
      category: 'AI/ML',
      github: 'https://github.com/sahilalamgir/gensheets',
      live: 'https://gensheets.vercel.app',
      date: 'Jul. 2025',
      details: {
        problem: 'Data analysis requires technical expertise, limiting non-technical users from accessing insights from their data',
        solution: 'Built an AI-powered spreadsheet tool that allows users to query and manipulate data using natural language',
        existing: 'Unlike traditional spreadsheet tools, GenSheets combines AI with intuitive data visualization',
        feedback: 'Users appreciated the natural language interface, with 85% finding it easier than traditional formulas',
        challenges: 'Handling large datasets (100k+ rows) required optimizing data processing pipelines',
        features: 'Real-time collaboration, advanced charting, and automated data insights',
        success: 'Measured by user retention (70%+) and query completion rate (90%+)'
      }
    },
    {
      id: 2,
      title: 'ShelfSmart',
      subtitle: 'Youth Impact Challenge Winner',
      description: 'Won $1k prize by creating platform that reduces restaurant food waste using Next.js and Supabase.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      tech: ['Next.js', 'Supabase', 'Python', 'OpenCV'],
      category: 'Full Stack',
      github: 'https://github.com/sahilalamgir/shelfsmart',
      live: 'https://shelfsmart.vercel.app',
      date: 'Aug. 2025',
      details: {
        problem: 'Restaurants waste billions of dollars in food annually due to poor inventory management and spoilage tracking',
        solution: 'Created a computer vision system that automatically tracks food freshness and predicts spoilage',
        existing: 'Current solutions require manual tracking; ShelfSmart automates the entire process',
        feedback: 'Restaurant owners wanted better integration with POS systems for seamless workflow',
        challenges: 'Training the CV model with diverse food types and lighting conditions was complex',
        features: 'Automated alerts, waste analytics dashboard, and supplier integration',
        success: 'Winning top 10/150 teams and achieving 82.5% accuracy in spoilage prediction'
      }
    },
    {
      id: 3,
      title: 'AlzGuard',
      subtitle: 'Youth Impact Challenge Winner',
      description: 'Won $1k award by leading team of 3 to build full stack AI Alzheimer\'s detection application.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      tech: ['TensorFlow', 'Scikit-Learn', 'React', 'Flask'],
      category: 'AI/ML',
      github: 'https://github.com/sahilalamgir/alzguard',
      live: 'https://alzguard.vercel.app',
      date: 'Aug. 2024',
      details: {
        problem: 'Early Alzheimer\'s detection is crucial but expensive and requires specialist appointments',
        solution: 'Developed a CNN model that analyzes MRI scans to detect early signs of Alzheimer\'s disease',
        existing: 'Our solution provides accessible pre-screening compared to expensive clinical tests',
        feedback: 'Medical professionals wanted more detailed probability scores and confidence intervals',
        challenges: 'Ensuring model accuracy while handling sensitive medical data and privacy concerns',
        features: 'Secure upload, detailed analysis reports, and physician referral system',
        success: 'Achieved 85.3% accuracy and won $1k award for healthcare innovation'
      }
    },
    {
      id: 4,
      title: 'EchoDoc',
      subtitle: 'AI Patient Care Manager',
      description: 'Built AI healthcare platform using Next.js and ElevenLabs to automate patient calls and scheduling.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      tech: ['Next.js', 'TypeScript', 'Express.js', 'Node.js', 'PostgreSQL'],
      category: 'Full Stack',
      github: 'https://github.com/sahilalamgir/echodoc',
      live: 'https://echodoc.vercel.app',
      date: 'Feb. 2025',
      details: {
        problem: 'Family doctors spend hours on administrative calls, reducing time for patient care',
        solution: 'Created AI voice agents that handle appointment scheduling and patient follow-ups automatically',
        existing: 'Unlike basic chatbots, EchoDoc uses natural voice AI for complex medical conversations',
        feedback: 'Doctors wanted better integration with existing EMR systems and more customizable scripts',
        challenges: 'Ensuring HIPAA compliance while maintaining natural conversation flow',
        features: 'Multi-language support, appointment reminders, and prescription refill automation',
        success: 'Saved doctors 7 hours per week with 95% patient satisfaction rate'
      }
    },
    {
      id: 5,
      title: 'LearnETF',
      subtitle: 'Sun Life Case @ GeeseHacks Winner',
      description: 'Created fintech education tool with 15 modules using Next.js and Plotly to visualize stock returns.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      tech: ['Next.js', 'TypeScript', 'Pandas', 'Plotly', 'Flask'],
      category: 'Fintech',
      github: 'https://github.com/sahilalamgir/learnetf',
      live: 'https://learnetf.vercel.app',
      date: 'Jan. 2025',
      details: {
        problem: 'Young adults lack financial literacy and find investment education intimidating and complex',
        solution: 'Built an interactive learning platform with gamified lessons and real-time market simulations',
        existing: 'Unlike static financial education sites, LearnETF provides hands-on investment simulation',
        feedback: 'Users wanted more advanced topics and social features for peer learning',
        challenges: 'Integrating real-time market data while maintaining fast load times for 100k+ stocks',
        features: 'Portfolio simulator, risk assessment tools, and progress tracking',
        success: 'Won $400 award as 1 of 2 Sun Life winners out of 300+ participants'
      }
    }
  ];

  const categories = ['All', 'AI/ML', 'Full Stack', 'Fintech'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section ref={sectionRef} id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here are some of the projects I've worked on recently. Each one represents 
              a unique challenge and learning experience.
            </p>
          </div>
        </div>

        {/* Filter buttons */}
        <div className={`${isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  filter === category
                    ? 'bg-blue-600 text-white shadow-soft-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-soft'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`${isVisible ? `animate-fade-in-up stagger-${index + 2}` : 'opacity-0'} 
                card overflow-hidden hover-lift cursor-pointer`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                  {project.date}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <p className="text-sm text-blue-600 font-medium">{project.subtitle}</p>
                  </div>
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs font-medium text-gray-500 px-2 py-1">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium"
                  >
                    Learn More →
                  </button>
                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                      aria-label="View on GitHub"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                      aria-label="View live demo"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] w-full overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-90 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedProject.title}</h2>
                    <p className="text-lg text-blue-600 font-medium">{selectedProject.subtitle}</p>
                    <p className="text-gray-600">{selectedProject.date}</p>
                  </div>
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {selectedProject.category}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((tech: string) => (
                    <span
                      key={tech}
                      className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Problem Statement</h3>
                    <p className="text-gray-700">{selectedProject.details.problem}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Solution</h3>
                    <p className="text-gray-700">{selectedProject.details.solution}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Advantage</h3>
                    <p className="text-gray-700">{selectedProject.details.existing}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">User Feedback & Iteration</h3>
                    <p className="text-gray-700">{selectedProject.details.feedback}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Technical Challenges</h3>
                    <p className="text-gray-700">{selectedProject.details.challenges}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Future Features</h3>
                    <p className="text-gray-700">{selectedProject.details.features}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Success Metrics</h3>
                    <p className="text-gray-700">{selectedProject.details.success}</p>
                  </div>
                </div>

                <div className="flex space-x-4 mt-8 pt-6 border-t border-gray-200">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary flex items-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <span>View Code</span>
                  </a>
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary flex items-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}