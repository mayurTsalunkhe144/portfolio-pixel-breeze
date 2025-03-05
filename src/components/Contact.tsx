
import React, { useState } from 'react';
import portfolioData from '@/data/portfolio';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { toast } from 'sonner';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 sm:py-32 bg-secondary/30">
      <div className="section-container">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to contact me.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <AnimatedSection className="lg:col-span-2" animation="slide-up">
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href={`mailto:${portfolioData.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
                      {portfolioData.email}
                    </a>
                  </div>
                </div>
                
                {portfolioData.phone && (
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href={`tel:${portfolioData.phone}`} className="text-muted-foreground hover:text-foreground transition-colors">
                        {portfolioData.phone}
                      </a>
                    </div>
                  </div>
                )}
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">{portfolioData.location}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-medium mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  {portfolioData.socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-secondary hover:bg-secondary/80 p-3 rounded-full transition-all duration-300"
                      aria-label={link.name}
                    >
                      <span className="sr-only">{link.name}</span>
                      <svg width="20" height="20" fill="currentColor" className="text-foreground">
                        <use xlinkHref={`#${link.icon.toLowerCase()}`} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="lg:col-span-3" animation="slide-up" delay={200}>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border bg-secondary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border bg-secondary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border bg-secondary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-border bg-secondary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="button-primary w-full justify-center"
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        Send Message <Send size={16} className="ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
