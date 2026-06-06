import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Film, Briefcase, Sparkles } from 'lucide-react';
import { stats } from '../data/siteData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const experienceHighlights = [
  {
    icon: Film,
    title: 'Creative Storytelling',
    text: 'Transforming raw footage into compelling visual narratives that captivate and inspire audiences.',
  },
  {
    icon: Briefcase,
    title: 'Professional Workflow',
    text: 'Streamlined editing pipeline ensuring fast turnarounds without compromising on quality.',
  },
  {
    icon: Sparkles,
    title: 'Cutting-Edge Techniques',
    text: 'Staying ahead of trends with the latest editing tools, effects, and industry techniques.',
  },
];

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-50px' });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-black overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-500/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-red-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full" />
          <div className="w-12 h-1 bg-red-500/50 mx-auto rounded-full mt-1.5" />
        </motion.div>

        {/* Two Column Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column – Profile Image Placeholder */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
            <div className="relative group">
              {/* Decorative outer ring */}
              <div className="absolute -inset-3 bg-gradient-to-br from-red-500/30 via-red-500/10 to-transparent rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-red-500 rounded-tl-lg" />
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-red-500 rounded-tr-lg" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-red-500 rounded-bl-lg" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-red-500 rounded-br-lg" />

              {/* Main image placeholder */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-[22rem] md:w-96 md:h-[26rem] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-white/10">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-red-500/10" />

                {/* Grid pattern */}
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                  }}
                />

                {/* Initials */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-7xl sm:text-8xl font-bold bg-gradient-to-br from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent select-none">
                      SY
                    </span>
                    <div className="mt-3 text-sm text-white/40 tracking-[0.25em] uppercase font-medium">
                      Video Editor
                    </div>
                  </div>
                </div>

                {/* Animated shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ duration: 4, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column – About Text & Highlights */}
          <motion.div variants={containerVariants} className="space-y-6">
            <motion.div variants={itemVariants}>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                Passionate <span className="text-red-500">Video Editor</span> &amp; Visual Storyteller
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Hey there! I&apos;m <span className="text-white font-medium">Syed Yousaf</span>, a
                passionate video editor with <span className="text-red-400 font-medium">3+ years of professional experience</span> crafting
                visually stunning content. I specialize in YouTube videos, Instagram Reels, TikTok content,
                and commercial advertisements.
              </p>
            </motion.div>

            <motion.p variants={itemVariants} className="text-gray-400 leading-relaxed text-sm sm:text-base">
              My journey in video editing began with a fascination for storytelling through visuals. Over the
              years, I&apos;ve honed my skills in color grading, motion graphics, sound design, and
              cinematic editing. Every frame I edit is a step toward turning your vision into reality — with
              precision, creativity, and a touch of cinematic magic.
            </motion.p>

            {/* Experience Highlight Cards */}
            <motion.div variants={containerVariants} className="space-y-3 pt-2">
              {experienceHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    whileHover={{ x: 6 }}
                    className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-red-500/30 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm sm:text-base mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          ref={statsRef}
          variants={containerVariants}
          initial="hidden"
          animate={statsInView ? 'visible' : 'hidden'}
          className="mt-20 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={scaleUpVariants}
                whileHover={{ y: -6, scale: 1.03 }}
                className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-red-500/30 text-center transition-colors duration-300 overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
