
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Plus } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Web Development', 'UI/UX Design', 'Mobile App'];

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Our Portfolio</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
            Explore our collection of successful projects and digital transformation stories.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-8 py-3 rounded-full font-bold transition-all ${
                  activeFilter === filter 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-white text-slate-600 hover:bg-slate-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden h-80">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-blue-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-blue-600 p-4 rounded-full shadow-xl hover:scale-110 transition-transform">
                      <Plus size={32} />
                    </button>
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-blue-600 font-bold text-sm uppercase tracking-wider block mb-2">{project.category}</span>
                      <h3 className="text-3xl font-bold text-slate-900">{project.title}</h3>
                    </div>
                    <a href="#" className="p-3 bg-slate-50 rounded-full hover:bg-blue-50 text-slate-400 hover:text-blue-600 transition-colors">
                      <ExternalLink size={24} />
                    </a>
                  </div>
                  <p className="text-slate-600 text-lg mb-8">
                    Implementing a scalable digital solution that improved user engagement by 45% and streamlined business operations.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'Tailwind', 'PostgreSQL'].map(tech => (
                      <span key={tech} className="bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Feature */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 text-blue-200">
               <svg className="w-16 h-16 mx-auto fill-current" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V12C6.017 12.5523 5.56929 13 5.017 13H3.017V21H5.017Z" /></svg>
            </div>
            <p className="text-3xl md:text-4xl font-medium mb-10 leading-relaxed italic">
              "Their team didn't just build a website; they built a revenue machine. The integration of AI features and the speed of the interface exceeded our expectations."
            </p>
            <div>
              <img src="https://picsum.photos/seed/ceo/100/100" className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-blue-500 shadow-xl" alt="Testimonial" />
              <div className="text-xl font-bold">Jason Rivera</div>
              <div className="text-blue-200 uppercase tracking-widest text-sm">Founder, InnovateHQ</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
