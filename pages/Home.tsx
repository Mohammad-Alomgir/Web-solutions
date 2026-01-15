
import React from 'react';
import { Link } from 'react-router-dom';
// Added missing icons: Layout, Search, Megaphone, Smartphone
import { ChevronRight, Star, CheckCircle, Users, Globe, Award, Layout, Search, Megaphone, Smartphone } from 'lucide-react';
import { SERVICES, PROJECTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-52 overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-blue-600 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-indigo-600 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 animate-bounce">
              <Star size={16} fill="currentColor" />
              <span>Rated #1 Web Agency in 2024</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
              Elevate Your <span className="gradient-text">Digital Presence</span> with Innovation
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              We craft high-end web solutions that blend cutting-edge technology with creative strategy to scale your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2 group">
                <span>Start Your Project</span>
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/portfolio" className="w-full sm:w-auto bg-slate-100 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-200 transition-all">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-slate-400">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-slate-400">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">12+</div>
              <div className="text-slate-400">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-slate-400">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Services Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-blue-600 font-bold uppercase tracking-wider mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900">Solutions for Growth</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-3xl border border-slate-100 card-hover">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  {/* Correctly render icons based on the string ID in constants */}
                  {service.icon === 'Layout' && <Layout size={28} />}
                  {service.icon === 'Search' && <Search size={28} />}
                  {service.icon === 'Megaphone' && <Megaphone size={28} />}
                  {service.icon === 'Smartphone' && <Smartphone size={28} />}
                </div>
                <h4 className="text-xl font-bold mb-4 text-slate-900">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                <Link to="/services" className="text-blue-600 font-semibold flex items-center group">
                  Learn more <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Portfolio Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
            <div className="max-w-xl">
              <h2 className="text-blue-600 font-bold uppercase tracking-wider mb-4">Portfolio</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900">Showcasing Our Excellence</h3>
            </div>
            <Link to="/portfolio" className="bg-slate-900 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-600 transition-colors">
              Explore All Projects
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.slice(0, 2).map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-3xl h-[400px]">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="text-blue-400 font-semibold mb-2 block">{project.category}</span>
                  <h4 className="text-3xl font-bold text-white mb-4">{project.title}</h4>
                  <Link to={`/portfolio`} className="text-white bg-white/20 backdrop-blur-md px-6 py-2 rounded-full font-medium hover:bg-white/40 transition-all inline-block">
                    View Case Study
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-blue-600 font-bold uppercase tracking-wider mb-4">Why Choose Us</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Driving Success Through Digital Innovation
              </h3>
              <div className="space-y-6">
                {[
                  'User-Centric Design Philosophy',
                  'Agile Development Methodology',
                  'Advanced Technical Stack',
                  'Data-Driven Marketing Results',
                  'Transparent Communication',
                  'Long-Term Growth Support'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle size={18} className="text-green-600" />
                    </div>
                    <span className="text-lg font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[40px] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <img src="https://picsum.photos/seed/team/800/1000" alt="Our Team" className="w-full object-cover aspect-[4/5]" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl hidden md:block border border-slate-100">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <img key={i} src={`https://picsum.photos/seed/face${i}/50/50`} className="w-12 h-12 rounded-full border-4 border-white" />
                    ))}
                  </div>
                  <div className="font-bold text-slate-900">Join 150+ Clients</div>
                </div>
                <div className="flex items-center text-yellow-500">
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <span className="ml-2 text-slate-900 font-bold">5.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to transform your business?</h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve your digital goals. Schedule a free consultation today.
              </p>
              <Link to="/contact" className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all shadow-xl inline-block">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
