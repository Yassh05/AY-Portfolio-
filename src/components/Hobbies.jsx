import { Tv, Music, Plane, Palette, BookOpen, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

const hobbies = [
  {
    title: 'Sketching',
    description: 'Love putting pencil to paper — sketching portraits, patterns, and little everyday moments to unwind and stay creative.',
    icon: Palette,
    color: 'text-accent',
    bgColor: 'bg-accent-10',
  },
  {
    title: 'Reading',
    description: 'An avid reader — from fiction to self-development books, reading fuels my imagination and broadens my perspective.',
    icon: BookOpen,
    color: 'text-green-500',
    bgColor: 'bg-green-500-10',
  },
  {
    title: 'Photography',
    description: 'Capturing moments and aesthetics through the lens — from product shoots to candid frames that tell a story.',
    icon: Camera,
    color: 'text-pink-500',
    bgColor: 'bg-pink-500-10',
  },
  {
    title: 'Anime',
    description: 'Love watching anime - my Gaara profile pic says it all! Big fan of Naruto, Attack on Titan, and many more.',
    icon: Tv,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500-10',
  },
  {
    title: 'Music',
    description: 'Always have headphones on. Love discovering new artists and genres - music fuels my creative sessions.',
    icon: Music,
    color: 'text-primary',
    bgColor: 'bg-primary-10',
  },
  {
    title: 'Exploring',
    description: 'Love exploring new places, trying new food, and experiencing different cultures.',
    icon: Plane,
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500-10',
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const Hobbies = () => {
  return (
    <section id="hobbies" className="py-24 relative">
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
            <span className="text-gradient">Hobbies</span>
          </h2>
          <p className="section-subtitle">
            A few things I love doing outside of work and studies
          </p>
        </motion.div>

        <motion.div
          className="hobbies-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {hobbies.map((hobby) => (
            <motion.div key={hobby.title} variants={itemVariants} className="hobby-card">
              <div className="flex items-start gap-4">
                <div className={`hobby-icon ${hobby.bgColor} ${hobby.color}`}>
                  <hobby.icon size={28} />
                </div>
                <div>
                  <h3 className="hobby-title">{hobby.title}</h3>
                  <p className="hobby-description">{hobby.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Photography x Sketching Banner */}
        <motion.div
          className="hobby-banner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="hobby-banner-title">
            <span className="text-pink-500">Photography</span> x <span className="text-accent">Sketching</span> Soul
          </h3>
          <p className="hobby-banner-text">
            Whether it's framing the perfect shot through a lens or losing hours to a sketchbook,
            I'm happiest when I'm creating something. Got a favorite artist or photographer? Let's swap inspiration!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hobbies;
