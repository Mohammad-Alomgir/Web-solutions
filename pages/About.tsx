
import React from 'react';
import { Target, Heart, Lightbulb, Zap, Users, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Intro */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                Crafting Digital <br /> Excellence Since 2012
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                WebSolutions was born from a simple idea: that technology should empower businesses, not complicate them. We started as a small team of three developers in a garage and have grown into a global agency.
              </p>
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                Today, we partner with visionary founders and established enterprises to define and build the next generation of digital products.
              </p>
              <div className="flex space-x-8">
                <div>
                  <div className="text-4xl font-bold text-blue-600">12+</div>
                  <div className="text-slate-500 font-medium">Years</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600">45+</div>
                  <div className="text-slate-500 font-medium">Experts</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600">200+</div>
                  <div className="text-slate-500 font-medium">Awards</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://picsum.photos/seed/office/800/600" className="rounded-[3rem] shadow-2xl relative z-10" alt="Office" />
              <div className="absolute -bottom-10 -right-10 w-full h-full bg-blue-600 -z-0 rounded-[3rem] opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-blue-600 font-bold uppercase tracking-wider mb-4">Our Core Values</h2>
            <h3 className="text-4xl font-bold text-slate-900">What Drives Us Every Day</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Innovation First', desc: 'We constantly explore new technologies to keep our clients ahead of the curve.', icon: <Lightbulb size={32} /> },
              { title: 'Client Centric', desc: 'Your success is our success. We prioritize your business goals in every decision.', icon: <Target size={32} /> },
              { title: 'Excellence Only', desc: 'We don\'t settle for "good enough". We strive for perfection in every line of code.', icon: <ShieldCheck size={32} /> }
            ].map((v, idx) => (
              <div key={idx} className="bg-slate-50 p-12 rounded-[2.5rem] text-center card-hover border border-slate-100">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                  {v.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4 text-slate-900">{v.title}</h4>
                <p className="text-slate-600 leading-relaxed text-lg">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-blue-600 font-bold uppercase tracking-wider mb-4">Our Leaders</h2>
            <h3 className="text-4xl font-bold text-slate-900">The Minds Behind WebSolutions</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: 'Alex Thompson', role: 'CEO & Founder', image: 'https://picsum.photos/seed/alex/400/500' },
              { name: 'Elena Rodriguez', role: 'CTO', image: 'https://picsum.photos/seed/elena/400/500' },
              { name: 'David Kim', role: 'Lead Designer', image: 'https://picsum.photos/seed/david/400/500' },
              { name: 'Maya Patel', role: 'Head of Marketing', image: 'https://picsum.photos/seed/maya/400/500' }
            ].map((t, idx) => (
              <div key={idx} className="group">
                <div className="relative overflow-hidden rounded-3xl mb-6 shadow-lg">
                  <img src={t.image} alt={t.name} className="w-full object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">{t.name}</h4>
                <p className="text-blue-600 font-medium">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
