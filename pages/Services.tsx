
import React from 'react';
import { Layout, Search, Megaphone, Smartphone, Code, Globe, Shield, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const serviceItems = [
    {
      title: 'Custom Web Development',
      desc: 'High-performance, scalable web applications built with React, Node.js, and modern frameworks.',
      icon: <Code />,
      features: ['Single Page Applications', 'PWA Support', 'E-commerce Solutions', 'Custom APIs']
    },
    {
      title: 'UI/UX Design',
      desc: 'Intuitive user interfaces and engaging experiences that focus on conversion and user satisfaction.',
      icon: <Layout />,
      features: ['Wireframing', 'Prototyping', 'User Research', 'Visual Identity']
    },
    {
      title: 'SEO & Content Strategy',
      desc: 'Comprehensive search engine optimization to boost your rankings and organic visibility.',
      icon: <Search />,
      features: ['Keyword Research', 'On-page SEO', 'Backlink Building', 'Content Audits']
    },
    {
      title: 'Mobile App Development',
      desc: 'Native and cross-platform mobile apps for iOS and Android that provide seamless performance.',
      icon: <Smartphone />,
      features: ['iOS Apps', 'Android Apps', 'React Native', 'Flutter']
    },
    {
      title: 'Digital Marketing',
      desc: 'Full-funnel marketing strategies to acquire, engage, and retain customers across all channels.',
      icon: <Megaphone />,
      features: ['Social Media Ads', 'Google Ads', 'Email Marketing', 'Brand Strategy']
    },
    {
      title: 'Cloud & DevOps',
      desc: 'Robust infrastructure setup and automation for reliable and secure application deployment.',
      icon: <Shield />,
      features: ['AWS/Azure/GCP', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Security Audits']
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">Our Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From strategy to execution, we provide comprehensive digital solutions that drive results and empower your business.
          </p>
        </div>
      </section>

      {/* Service Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {serviceItems.map((item, index) => (
              <div key={index} className="group p-10 rounded-3xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">{item.desc}</p>
                <ul className="space-y-3">
                  {item.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center text-slate-700 font-medium">
                      <Zap size={16} className="text-blue-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Our Work Process</h2>
            <p className="text-slate-400">How we turn your vision into reality</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-500/30 -translate-y-1/2 -z-0"></div>
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your goals and requirements' },
              { step: '02', title: 'Planning', desc: 'Strategic roadmap and architecture design' },
              { step: '03', title: 'Execution', desc: 'Agile development and design phase' },
              { step: '04', title: 'Launch', desc: 'Final testing and deployment' }
            ].map((p, idx) => (
              <div key={idx} className="relative z-10 text-center">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-xl border-4 border-slate-900">
                  {p.step}
                </div>
                <h4 className="text-xl font-bold mb-3">{p.title}</h4>
                <p className="text-slate-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
