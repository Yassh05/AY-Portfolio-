import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const educationData = [
  {
    title: 'B.Sc Electronics',
    organization: 'Hindu College [DU]',
    period: '2024 - 2027',
    score: '7.7 CGPA',
    description: 'Analytical and creative undergraduate pursuing B.Sc. Electronics at Hindu College with strong foundation in Python, SQL, Excel, and problem-solving, hands-on experience in analytics, graphic design, and operations through internships and consulting simulations.',
  },
  {
    title: 'Higher Secondary (12th)',
    organization: 'G.D. Goenka Public School',
    period: '2023 - 2024',
    score: '80%',
    description: 'Completed with focus on Science and Mathematics.',
  },
  {
    title: 'Secondary Education (10th)',
    organization: 'DR VSEC, Kanpur',
    period: '2021 - 2022',
    score: '94%',
    description: 'Completed secondary education with excellent academic performance.',
  },
];

const experienceData = [
  {
    title: 'Graphic Design Lead',
    organization: 'Vivre – The Film & Photography Society, Hindu College',
    period: 'May 2025 - May 2026',
    description: 'Managed and mentored the creative team, ensuring timely and high-quality output for all society projects and events.',
  },
  {
    title: 'Photography Intern',
    organization: 'YOHO',
    period: 'Oct 2024 - Dec 2024',
    description: 'Conceptualized and executed professional product photography for footwear collections, supporting marketing campaigns and elevating brand visual identity.',
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
