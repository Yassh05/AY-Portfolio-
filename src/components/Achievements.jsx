import { Trophy, Medal, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const achievements = [
  {
    year: '2025',
    title: '4th Place – The Elden Conquest, Feymania\'25 Quiz Competition',
    organization: 'Illuminati – The Physics Society, ARSD College',
    description: 'Ranked 4th out of 15+ teams in the inter-college quiz organised by Illuminati – The Physics Society, ARSD College, demonstrating strong analytical reasoning and competitive teamwork.',
    tags: ['Quiz Competition', 'Inter-College', '4th Place'],
    icon: Trophy,
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
