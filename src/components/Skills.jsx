import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: 'Technical Skills',
    skills: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  ],
  },
  {
    category: 'Creative Skills',
    skills: [
      { name: 'Graphic Design', icon: 'https://api.iconify.design/mdi/palette.svg?color=%2300ff88' },
      { name: 'Photography', icon: 'https://api.iconify.design/mdi/camera.svg?color=%2300ff88' },
      { name: 'Event Branding', icon: 'https://api.iconify.design/mdi/calendar-star.svg?color=%2300ff88' },
      { name: 'Social Media Design', icon: 'https://api.iconify.design/mdi/instagram.svg?color=%2300ff88' },
    ],
  },
  // {
  //   category: 'Databases',
  //   skills: [
  //     { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  //     { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg' },
  //   ],
  // },
  {
    category: 'Soft Skills',
    skills: [
      { name: 'Leadership', icon: 'https://api.iconify.design/mdi/account-star.svg?color=%2300ff88' },
      { name: 'Communication', icon: 'https://api.iconify.design/mdi/message-text.svg?color=%2300ff88' },
      { name: 'Team Management', icon: 'https://api.iconify.design/mdi/account-group.svg?color=%2300ff88' },
      { name: 'Problem Solving', icon: 'https://api.iconify.design/mdi/puzzle.svg?color=%2300ff88' },
      { name: 'Analytical Thinking', icon: 'https://api.iconify.design/mdi/chart-line.svg?color=%2300ff88' },
    ],
  },
  {
    category: 'Tools & Technologies',
    skills: [
      { name: 'Canva', icon: 'https://api.iconify.design/simple-icons/canva.svg?color=%2300ff88' },
      { name: 'MS Excel', icon: 'https://api.iconify.design/vscode-icons/file-type-excel.svg' },
      { name: 'PowerPoint', icon: 'https://api.iconify.design/vscode-icons/file-type-powerpoint.svg' },
    ],
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

const Skills = () => {
  return (
    <section id="skills" className="section">
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
            <span className="text-gradient">Skills</span> & Expertise
          </h2>
          <p className="section-subtitle">
            Technologies and programming languages I've mastered throughout my journey
          </p>
        </motion.div>

        <div className="skills-categories-grid">
          {skillCategories.map((category) => (
            <div key={category.category} className="skill-category">
              <motion.h3
                className="skill-category-title"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
              >
                {category.category}
              </motion.h3>
              <motion.div
                className="skills-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
              >
                {category.skills.map((skill) => (
                  <motion.div key={skill.name} variants={itemVariants} className="card skill-card">
                    <div className="skill-card-content">
                      <div className="card-icon">
                        <img src={skill.icon} alt={skill.name} className="skill-icon-img" />
                      </div>
                      <h4 className="skill-name">{skill.name}</h4>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
