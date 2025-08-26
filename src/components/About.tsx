'use client';

import { useEffect, useRef, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
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

  const languages = [
    { name: 'Python', icon: '🐍' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Go', icon: '🐹' },
    { name: 'C/C++', icon: '⚙️' },
    { name: 'C#', icon: '🔧' },
    { name: 'Java', icon: '☕' },
    { name: 'R', icon: '📊' },
    { name: 'MATLAB', icon: '📈' },
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'Bash', icon: '💻' }
  ];

  const frameworks = [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express.js', icon: '🚀' },
    { name: 'Flask', icon: '🌶️' },
    { name: 'PySpark', icon: '⚡' },
    { name: 'LangChain', icon: '🔗' },
    { name: 'Pandas', icon: '🐼' },
    { name: 'Matplotlib', icon: '📊' },
    { name: 'TensorFlow', icon: '🧠' }
  ];

  const tools = [
    { name: 'Supabase', icon: '🗃️' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Azure', icon: '🔵' },
    { name: 'GCP', icon: '🌩️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Tailwind', icon: '💨' },
    { name: 'Bootstrap', icon: '🅱️' },
    { name: 'Figma', icon: '🎯' },
    { name: 'Git', icon: '🌿' }
  ];

  const SkillBar = ({ items, title }: { items: { name: string, icon: string }[], title: string }) => (
    <div className="mb-8">
      <h4 className="text-lg font-semibold text-gray-800 mb-4">{title}</h4>
      <div className="relative overflow-hidden bg-white rounded-lg shadow-sm p-4">
        <div className="flex animate-scroll-infinite space-x-8">
          {[...items, ...items].map((item, index) => (
            <div key={`${item.name}-${index}`} className="flex-shrink-0 flex items-center space-x-3 px-4 py-2 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-lg">
                  {item.icon}
                </span>
              </div>
              <span className="text-gray-700 font-medium whitespace-nowrap">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6"></div>
            </div>

            <div className={`${isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                I'm a passionate Full Stack Developer with over 3 years of experience building 
                modern web applications. I love turning complex problems into simple, beautiful, 
                and intuitive solutions.
              </p>
            </div>

            <div className={`${isVisible ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or enjoying a good cup of coffee while brainstorming the 
                next big idea.
              </p>
            </div>

            <div className={`${isVisible ? 'animate-fade-in-up stagger-3' : 'opacity-0'}`}>
              <div className="flex flex-wrap gap-4">
                {['Problem Solver', 'Team Player', 'Fast Learner', 'Detail Oriented'].map((trait, index) => (
                  <span 
                    key={trait}
                    className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-soft text-sm font-medium"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className={`${isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'} flex justify-center`}>
            <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1">
              <img 
                src="/sahil_headshot.png" 
                alt="Sahil Alamgir" 
                className="w-full h-full rounded-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-16">
          <div className={`${isVisible ? 'animate-fade-in-up stagger-4' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Skills & Technologies</h3>
          </div>

          <div className={`${isVisible ? 'animate-fade-in-up stagger-5' : 'opacity-0'}`}>
            <SkillBar items={languages} title="Programming Languages" />
            <SkillBar items={frameworks} title="Libraries & Frameworks" />
            <SkillBar items={tools} title="Tools & Technologies" />
          </div>
        </div>
      </div>
    </section>
  );
}