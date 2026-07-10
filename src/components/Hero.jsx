import { Download, Github, Linkedin, Code2, Binary } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const roles = ['Frontend Developer', 'AI/ML Enthusiast', 'Problem Solver', 'Gamer'];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section id="home" className="hero-section">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="hero-bg-effect hero-bg-1" />
      <div className="hero-bg-effect hero-bg-2" />

      <div className="container relative z-10">
        <div className="hero-layout">
          {/* Text Content */}
          <motion.div
            className="hero-content flex-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="hero-subtitle">Welcome to my portfolio</p>
            <h1 className="hero-name">
              <span className="text-foreground">I'm </span>
              <span className="text-gradient glow-text text-accent">Yash Sharma</span>
            </h1>
            <h2 className="hero-role">
              {displayedText}
              <span className="hero-cursor">|</span>
            </h2>
            <p className="hero-description">
              Computer Science student specializing in Artificial Intelligence and Machine Learning
              with a strong foundation in Data Structures, Algorithms, and Web Development.
              Skilled in problem-solving and programming, with a passion for tackling real-world technical challenges.
            </p>

            {/* CTA Buttons */}
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="/YASH_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Yash_Resume.pdf"
                className="btn btn-primary"
              >
                <Download size={20} />
                Download CV
              </a>
              <a href="#contact" className="btn btn-outline">
                Get In Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="hero-social"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href="https://www.linkedin.com/in/yashsharma05/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/Yassh05"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Github size={24} />
              </a>
              <a
                href="https://leetcode.com/u/Yashxsharma/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Code2 size={24} />
              </a>
              <a
                href="https://www.hackerrank.com/profile/yashsharmaa555"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Binary size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-profile-wrapper"
          >
            <div className="hero-profile">
              <div className="hero-profile-glow" />
              <div className="hero-profile-image">
                <img
                  src="https://yassh05.github.io/PORTFOLIO/gaara.jpg"
                  alt="Yash Sharma"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
