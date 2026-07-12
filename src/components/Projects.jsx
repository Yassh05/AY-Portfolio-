import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Social Media Analytics Dashboard',
    description: "Tracked engagement metrics (reach, impressions, follower growth) for Vivre's Instagram using Excel pivot tables and SQL queries. Identified top content formats to guide design strategy, contributing to a ~30% improvement in average post reach.",
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&h=400&fit=crop',
    liveUrl: null,
    sourceUrl: null,
    tags: ['MS Excel', 'SQL', 'Analytics', 'Instagram'],
  },
  {
    title: 'Personal Branding & Digital Portfolio',
    description: 'Designed a complete personal brand identity—logo, colour palette, and typography system—using Canva, then structured the content into a clean static webpage using HTML, making creative work discoverable to recruiters and collaborators online.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop',
    liveUrl: null,
    sourceUrl: null,
    tags: ['Canva', 'HTML', 'Branding', 'Portfolio'],
  },
  {
    title: 'Event Visual Identity Campaign – Vivre',
    description: 'Led complete visual branding for two major college events—designing 15+ assets including posters, digital banners, social media carousels, and stage backdrops. Managed creative production end-to-end, achieving consistent aesthetics and a measurable increase in event footfall.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop',
    liveUrl: null,
    sourceUrl: null,
    tags: ['Canva', 'Visual Design', 'Branding', 'Events'],
  },
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
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-link-primary"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-link-secondary"
                    >
                      <Github size={20} />
                    </a>
                  )}
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
