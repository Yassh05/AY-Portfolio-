import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const educationData = [
  {
    title: 'B.Tech in Computer Science (AI/ML)',
    organization: 'Dronacharya College of Engineering',
    period: '2023 - 2027',
    score: '8.2 CGPA',
    description: 'Specializing in Artificial Intelligence and Machine Learning with strong foundation in Data Structures and Algorithms.',
  },
  {
    title: 'Higher Secondary (12th)',
    organization: 'G.D. Goenka Public School',
    period: '2022 - 2023',
    score: '88%',
    description: 'Completed with focus on Science and Mathematics.',
  },
  {
    title: 'Secondary Education (10th)',
    organization: 'Meenakshi Public School',
    period: '2020 - 2021',
    score: '93%',
    description: 'Completed secondary education with excellent academic performance.',
  },
];

const experienceData = [
  {
    title: 'IT & AI Intern',
    organization: 'Subros Limited',
    period: 'Jun 2025 - Aug 2025',
    description: 'Developed and implemented face detection and recognition models using Python, OpenCV, and machine learning libraries.',
  }
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const TimelineCard = ({ item, type }) => (
  <motion.div variants={itemVariants} className="timeline-card-wrapper">
    <div className="timeline-card card">
      <div className="timeline-card-header">
        <div className="timeline-period">
          <Calendar size={14} />
          <span>{item.period}</span>
        </div>
        {item.score && (
          <div className="timeline-score">
            <span>{item.score}</span>
          </div>
        )}
      </div>
      <h4 className="timeline-title">{item.title}</h4>
      <p className="timeline-organization">{item.organization}</p>
      <p className="timeline-description">{item.description}</p>
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="bg-grid" />

      <div className="container relative z-10">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Education & <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">
            My academic journey and professional experience
          </p>
        </motion.div>

        <div className="experience-split-layout">
          {/* Education Column */}
          <motion.div
            className="experience-column"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="experience-column-header">
              <div className="experience-icon experience-icon-education">
                <GraduationCap size={24} />
              </div>
              <h3 className="experience-column-title">Education</h3>
            </div>
            <div className="experience-column-content">
              {educationData.map((item, index) => (
                <TimelineCard key={index} item={item} type="education" />
              ))}
            </div>
          </motion.div>

          {/* Experience Column */}
          <motion.div
            className="experience-column"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="experience-column-header">
              <div className="experience-icon experience-icon-work">
                <Briefcase size={24} />
              </div>
              <h3 className="experience-column-title">Experience</h3>
            </div>
            <div className="experience-column-content">
              {experienceData.map((item, index) => (
                <TimelineCard key={index} item={item} type="experience" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
