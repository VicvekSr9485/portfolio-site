import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt, faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import type { ContactForm } from '../../types';
import { useForm } from '../../hooks/useForm';
import { sendEmail } from '../../services/email';

const Contact: React.FC = () => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const { values, handleChange, resetForm } = useForm<ContactForm>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    
    try {
      await sendEmail(values);
      setSubmitStatus('success');
      resetForm();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background text-text relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-secondary rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            I'm currently available for freelance work and full-time positions. If you have a project that you want to get started or think you need my help with something, then get in touch.
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="bg-slate-800 p-4 rounded-2xl group-hover:bg-primary transition-colors duration-300 shadow-lg">
                  <FontAwesomeIcon icon={faPhone} className="text-2xl text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-text">Phone</h3>
                  <p className="text-slate-400 group-hover:text-text transition-colors duration-300">+2347086718384</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 group">
                <div className="bg-slate-800 p-4 rounded-2xl group-hover:bg-primary transition-colors duration-300 shadow-lg">
                  <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-text">Email</h3>
                  <p className="text-slate-400 group-hover:text-text transition-colors duration-300">olamideoso65@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 group">
                <div className="bg-slate-800 p-4 rounded-2xl group-hover:bg-primary transition-colors duration-300 shadow-lg">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-text">Location</h3>
                  <p className="text-slate-400 group-hover:text-text transition-colors duration-300">Ibadan, Oyo State, Nigeria</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6 text-text">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/oso-olamide/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary hover:-translate-y-1 transition-all duration-300 shadow-lg text-white">
                  <FontAwesomeIcon icon={faLinkedinIn} className="text-xl" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary hover:-translate-y-1 transition-all duration-300 shadow-lg text-white">
                  <FontAwesomeIcon icon={faGithub} className="text-xl" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary hover:-translate-y-1 transition-all duration-300 shadow-lg text-white">
                  <FontAwesomeIcon icon={faTwitter} className="text-xl" />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-slate-700">
              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/20 border border-green-500 text-green-200 p-4 rounded-xl mb-6 flex items-center"
                >
                  <FontAwesomeIcon icon={faCheckCircle} className="mr-3 text-xl" />
                  Thank you for your message! I'll get back to you soon.
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/20 border border-red-500 text-red-200 p-4 rounded-xl mb-6 flex items-center"
                >
                  <FontAwesomeIcon icon={faExclamationCircle} className="mr-3 text-xl" />
                  Something went wrong. Please try again later.
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-300">Name</label>
                  <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 text-text placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Your Name"
                      required
                    />
                    <div className="absolute bottom-0 left-0 h-0.5 bg-primary w-0 transition-all duration-300 group-focus-within:w-full"></div>
                  </motion.div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-300">Email</label>
                  <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 text-text placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Your Email"
                      required
                    />
                  </motion.div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-slate-300">Message</label>
                  <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 text-text placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </motion.div>
                </div>
                
                <motion.button 
                  type="submit" 
                  disabled={submitStatus === 'loading'}
                  className="w-full py-4 text-lg bg-primary text-background font-bold rounded-xl hover:bg-white transition-colors relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {submitStatus === 'loading' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-background" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Dispatching...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;