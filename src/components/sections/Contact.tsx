import React, { useState } from 'react';
import Button from '../common/Button';
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
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-center max-w-2xl mx-auto mb-12">
          I'm currently available for freelance work and full-time positions. If you have a project that you want to get started or think you need my help with something, then get in touch.
        </p>
        
        <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
          <div className="md:w-1/2">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 p-3 rounded-full">
                  <i className="fas fa-phone text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>+2347086718384</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 p-3 rounded-full">
                  <i className="fas fa-envelope text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>olamideoso65@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 p-3 rounded-full">
                  <i className="fas fa-map-marker-alt text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p>Ibadan, Oyo State, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              {submitStatus === 'success' && (
                <div className="bg-green-500 text-white p-4 rounded-lg mb-4">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-500 text-white p-4 rounded-lg mb-4">
                  Something went wrong. Please try again later.
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Your Email"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  variant="primary"
                  disabled={submitStatus === 'loading'}
                >
                  {submitStatus === 'loading' ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;