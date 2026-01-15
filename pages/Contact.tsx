
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Get In Touch</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to start your next project? We're here to help you navigate the digital landscape.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <div className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Email Us</div>
                      <div className="text-slate-900 font-bold text-lg">hello@websolutions.tech</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <div className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Call Us</div>
                      <div className="text-slate-900 font-bold text-lg">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <div className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Visit Us</div>
                      <div className="text-slate-900 font-bold text-lg leading-relaxed">
                        123 Innovation Drive,<br />Silicon Valley, CA 94043
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 p-8 rounded-3xl text-white">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <MessageSquare size={20} />
                  </div>
                  <h3 className="text-xl font-bold">Quick Chat?</h3>
                </div>
                <p className="text-slate-400 mb-8">
                  Prefer a faster response? Our AI assistant is available 24/7 to answer common questions and provide instant quotes.
                </p>
                <button className="w-full bg-white text-slate-900 font-bold py-4 rounded-2xl hover:bg-blue-600 hover:text-white transition-all shadow-xl">
                  Message on WhatsApp
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white border border-slate-100 shadow-2xl rounded-[3rem] p-8 md:p-12">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8">
                    <CheckCircle size={48} />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Message Sent!</h2>
                  <p className="text-slate-600 text-lg max-w-sm">
                    Thank you for reaching out. One of our experts will get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-10 text-blue-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Email Address</label>
                      <input 
                        type="email" 
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Subject</label>
                    <select 
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      value={formState.subject}
                      onChange={(e) => setFormState({...formState, subject: e.target.value})}
                    >
                      <option value="">Select a service</option>
                      <option value="web">Web Development</option>
                      <option value="design">UI/UX Design</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Your Message</label>
                    <textarea 
                      rows={6} 
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                      placeholder="Tell us about your project goals..."
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send size={20} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
