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
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Go', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
    { name: 'C/C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'C#', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'R', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg' },
    { name: 'MATLAB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg' },
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Bash', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' }
  ];

  const frameworks = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
    { name: 'PySpark', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg' },
    { name: 'LangChain', logo: 'https://python.langchain.com/img/brand/wordmark.png' },
    { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
    { name: 'Matplotlib', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Created_with_Matplotlib-logo.svg' },
    { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' }
  ];

  const tools = [
    { name: 'Supabase', logo: 'https://supabase.com/brand-assets/supabase-logo-icon.png' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
    { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    { name: 'GCP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
    { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
  ];

  const SkillBar = ({ items, title }: { items: { name: string, logo: string }[], title: string }) => (
    <div className="mb-8">
      <h4 className="text-lg font-semibold text-gray-800 mb-4">{title}</h4>
      <div className="relative overflow-hidden bg-white rounded-lg shadow-sm p-4">
        <div className="flex animate-scroll-infinite space-x-8">
          {[...items, ...items].map((item, index) => (
            <div key={`${item.name}-${index}`} className="flex-shrink-0 flex items-center space-x-3 px-4 py-2 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 flex items-center justify-center">
                <img 
                  src={item.logo} 
                  alt={item.name} 
                  className="w-6 h-6 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
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
              <div className="w-20 h-1 bg-blue-600 rounded-full mb-6"></div>
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
            <div className="w-64 h-64 rounded-full bg-blue-600 p-1">
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