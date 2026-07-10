import { Award } from 'lucide-react';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: 'Introduction to Machine Learning',
    issuer: 'NPTEL ONLINE CERTIFICATION',
    date: 'Nov 2025',
    tags: ['Machine Learning','Python'],
    verified: true,
  },
  {
    title: 'Deloitte Australia Data Analytics Job Simulation',
    issuer: 'Deloitte - Forage',
    date: 'October 2025',
    tags: ['Data Analytics', 'Dashboards'],
    verified: true,
  },
  {
    title: 'Programming In Java',
    issuer: 'NPTEL ONLINE CERTIFICATION',
    date: 'May 2025',
    tags: ['Java'],
    verified: true,
  },
  {
    title: 'C Programming Training Certificate',
    issuer: 'Spoken Tutorial - IIT Bombay',
    date: 'July 2024',
    tags: ['C'],
    verified: true,
  },
  {
    title: 'Software Engineering Job Simulation',
    issuer: 'Goldman Sachs - Forage',
    date: 'September 2024',
    tags: ['Security', 'Password Analysis'],
    verified: true,
  },
  {
    title: 'Software Engineering Job Simulation',
    issuer: 'Accenture - Forage',
    date: 'September 2024',
    tags: ['Architecture', 'Testing', 'Debugging'],
    verified: true,
  },
  {
    title: 'Solutions Architecture Job Simulation',
    issuer: 'AWS - Forage',
    date: 'December 2024',
    tags: ['AWS', 'Scalable Architecture'],
    verified: true,
  },
  {
    title: 'Data Structures & Algorithms',
    issuer: 'Infosys',
    date: 'April 2024',
    tags: ['DSA'],
    verified: true,
  },
  {
    title: 'Software Engineer Intern Certificate',
    issuer: 'HackerRank',
    date: 'January 2025',
    tags: ['Algorithms', 'C++', 'OOP'],
    verified: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="container relative z-10">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Professional <span className="text-gradient">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Industry-recognized certifications validating my expertise
          </p>
        </motion.div>

        <motion.div
          className="certs-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {certifications.map((cert) => (
            <motion.div
              key={`${cert.title}-${cert.issuer}`}
              variants={itemVariants}
              className="cert-card"
            >
              {cert.verified && (
                <div className="cert-badge">
                  <Award size={12} />
                  Verified
                </div>
              )}

              <div className="mb-4">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
              </div>

              <div className="cert-tags">
                {cert.tags.map((tag) => (
                  <span key={tag} className="cert-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
