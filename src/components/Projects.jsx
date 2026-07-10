import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import victorsClubImage from '@/assets/victors-club.jpeg';

const projects = [

  {
    title: 'Clear Sinus AI',
    description: 'Built an AI-powered medical decision support system that predicts sinus and nasal disease severity using symptoms, lab metrics, and CT findings.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&h=400&fit=crop',
    liveUrl: 'https://clear-sinus-ai.vercel.app/',
    sourceUrl: 'https://github.com/Yassh05/clear-sinus-ai',
    tags: ['Python', 'React', 'XGBoost', 'Healthcare AI'],
  },

  {
    title: 'Victors Club Website',
    description: 'Drafted a modern website for Victors Club, a college technical club, showcasing events, team, and activities.',
    image: victorsClubImage,
    liveUrl: 'https://victors-gamma.vercel.app/',
    sourceUrl: 'https://github.com/Yassh05/Victors',
    tags: ['React', 'Web Development', 'Vercel'],
  },
  {
    title: 'Ramprastha Real Estate Website',
    description: 'Developed a professional, responsive website for Ramprastha Group to showcase real estate projects and company details.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    liveUrl: 'https://yassh05.github.io/Ramprastha/',
    sourceUrl: 'https://github.com/Yassh05/Ramprastha/',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Wisdom Bharati Forum Website',
    description: 'Created a modern informational website for Wisdom Bharati Forum to present organizational goals, events, and resources.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop',
    liveUrl: 'https://yassh05.github.io/WBF/',
    sourceUrl: 'https://github.com/Yassh05/WBF/',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Foxx Fitness Gym Website',
    description: 'Created a professional website for a fitness brand with pages for home, services, membership, and contact.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
    liveUrl: 'https://yassh05.github.io/Foxx-Fitness/',
    sourceUrl: 'https://github.com/Yassh05/Foxx-Fitness/',
    tags: ['HTML', 'CSS', 'JavaScript'],
  }
  // {
  //   title: 'Weather App',
  //   description: 'Developed a real-time weather app that fetches weather data based on user location with beautiful UI.',
  //   image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop',
  //   liveUrl: 'https://yassh05.github.io/Weather_website/',
  //   sourceUrl: 'https://github.com/Yassh05/Weather_website/',
  //   tags: ['JavaScript', 'API', 'CSS'],
  // },
  // {
  //   title: 'Calculator',
  //   description: 'Designed a fully functional calculator supporting basic arithmetic operations with sleek design.',
  //   image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=600&h=400&fit=crop',
  //   liveUrl: 'https://yassh05.github.io/CALCULATOR/',
  //   sourceUrl: 'https://github.com/Yassh05/CALCULATOR/',
  //   tags: ['JavaScript', 'HTML', 'CSS'],
  // },
  // {
  //   title: 'Rock Paper Scissors Game',
  //   description: 'Built an interactive browser-based game with smooth animations and score tracking.',
  //   image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=600&h=400&fit=crop',
  //   liveUrl: 'https://yassh05.github.io/Rock-Paper-Scissors_Game/',
  //   sourceUrl: 'https://github.com/Yassh05/Rock-Paper-Scissors_Game/',
  //   tags: ['JavaScript', 'Game Dev', 'CSS'],
  // },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-card-30 relative">
      <div className="container relative z-10">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={itemVariants} className="project-card">
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-primary"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-secondary"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
