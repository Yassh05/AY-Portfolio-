import { Mail, MapPin, Send, Github, Linkedin, Code2, Binary, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        });

      if (error) throw error;

      toast.success('Message sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-card-30 relative">
      <div className="container relative z-10">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl font-semibold mb-8">Get In Touch</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <a href="mailto:yash_sharma0512@outlook.com" className="contact-info-card">
                <div className="contact-info-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="contact-info-label">Email</p>
                  <p className="contact-info-value">yashsharmaa555@gmail.com</p>
                </div>
              </a>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="contact-info-label">Location</p>
                  <p className="contact-info-value">India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/yashsharma05/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/Yassh05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://leetcode.com/u/Yashxsharma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social"
                >
                  <Code2 size={24} />
                </a>
                <a
                  href="https://www.hackerrank.com/profile/yashsharmaa555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social"
                >
                  <Binary size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="form-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                  placeholder="John Doe"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                  placeholder="john@example.com"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-input form-textarea"
                  placeholder="Your message here..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn btn-primary btn-full ${isSubmitting ? 'btn-disabled' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
