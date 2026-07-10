import { Trophy, Medal, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const achievements = [
  {
    year: '2026',
    title: 'GATE 2026 CS — Qualified',
    organization: 'Graduate Aptitude Test in Engineering',
    description: 'Successfully cleared GATE 2026 in Computer Science, one of India\'s most competitive national-level examinations for engineering graduates.',
    tags: ['GATE', 'Computer Science', 'National Exam'],
    icon: Star,
  },
  {
    year: '2025',
    title: 'SIH 2025 — Finalist',
    organization: 'Smart India Hackathon',
    description: 'Selected as a finalist in Smart India Hackathon 2025, one of India\'s largest innovation-driven hackathons organized by the Government of India.',
    tags: ['Hackathon', 'Finalist', 'Innovation'],
    icon: Trophy,
  },
  {
    year: '2025',
    title: 'Hack o Relay 4.0 — Special Category Winner',
    organization: 'GDG Club, Dronacharya College of Engineering',
    description: 'Won the Special Category at Hack o Relay 4.0 hackathon organized by the Google Developer Groups club at DCE, showcasing innovation and technical excellence.',
    tags: ['Hackathon', 'Winner', 'GDG'],
    icon: Trophy,
  },
  {
    year: '2025',
    title: 'Best Senator Award — Wisdom Bharati Forum',
    organization: 'National Youth Parliament',
    description: 'Honored as the Best Senator for exceptional articulation, leadership, and impactful participation in the National Youth Parliament organized by WBF.',
    tags: ['Public Speaking', 'Leadership', 'National Event'],
    icon: Trophy,
  },
  {
    year: '2025',
    title: 'NPTEL Programming in Java — Elite Silver',
    organization: 'NPTEL Certification',
    description: 'Recognized for outstanding performance in the Programming in Java course conducted by IITs and NPTEL.',
    tags: ['Java Programming', 'Elite Silver'],
    icon: Medal,
  },
  {
    year: '2025',
    title: 'NCAT 2025 — AIR 39',
    organization: 'National Creativity Aptitude Test',
    description: 'Secured All India Rank 39 in a national-level aptitude exam testing creativity, logic, and innovation.',
    tags: ['Aptitude', 'AIR 39', 'Creative Thinking'],
    icon: Star,
  },
  {
    year: '2016-17',
    title: 'Times NIE National Aptitude Challenge — City Finalist',
    organization: 'School-Level Aptitude Competition',
    description: 'Qualified for city finals in a prestigious national-level aptitude challenge hosted by The Times NIE.',
    tags: ['Aptitude Test', 'City Finalist'],
    icon: Trophy,
  },
  {
    year: '2015',
    title: 'International Olympiad of Mathematics — Bronze Medal',
    organization: 'Olympiad Exam',
    description: 'Awarded Bronze medal for exceptional mathematical aptitude and problem-solving skills on an international platform.',
    tags: ['Mathematics', 'Olympiad', 'Bronze Medal'],
    icon: Medal,
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
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-card-30 relative">
      <div className="container relative z-10">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="text-gradient">Achievements</span> & Recognition
          </h2>
          <p className="section-subtitle">
            Milestones and awards that mark my journey of excellence
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {achievements.map((achievement) => (
            <motion.div key={achievement.title} variants={itemVariants} className="achievement-item">
              {/* Timeline Line */}
              <div className="achievement-line" />

              {/* Timeline Dot */}
              <div className="achievement-dot" />

              <div className="achievement-card">
                <div className="flex items-start gap-4">
                  <div className="achievement-icon">
                    <achievement.icon size={24} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="achievement-meta">
                      <span className="achievement-year">{achievement.year}</span>
                      <span className="text-muted-foreground text-sm">•</span>
                      <span className="achievement-org">{achievement.organization}</span>
                    </div>
                    <h3 className="achievement-title">{achievement.title}</h3>
                    <p className="achievement-description">{achievement.description}</p>
                    <div className="achievement-tags">
                      {achievement.tags.map((tag) => (
                        <span key={tag} className="achievement-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
