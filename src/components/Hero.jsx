import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { ChevronDown, Play, MessageCircle } from 'lucide-react';

/* ── Floating Particle ──────────────────────────────────────────────── */
const Particle = ({ size, x, y, delay, duration, color }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: size,
      height: size,
      left: `${x}%`,
      top: `${y}%`,
      background: color,
    }}
    animate={{
      y: [0, -30, 0, 20, 0],
      x: [0, 15, -10, 5, 0],
      opacity: [0.15, 0.4, 0.2, 0.35, 0.15],
      scale: [1, 1.2, 0.9, 1.1, 1],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

/* ── Decorative Floating Ring ───────────────────────────────────────── */
const FloatingRing = ({ size, x, y, delay, borderColor }) => (
  <motion.div
    className="absolute rounded-full border pointer-events-none"
    style={{
      width: size,
      height: size,
      left: `${x}%`,
      top: `${y}%`,
      borderColor,
    }}
    animate={{
      rotate: [0, 360],
      scale: [1, 1.1, 1],
      opacity: [0.1, 0.25, 0.1],
    }}
    transition={{
      rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
      scale: { duration: 6, delay, repeat: Infinity, ease: 'easeInOut' },
      opacity: { duration: 4, delay, repeat: Infinity, ease: 'easeInOut' },
    }}
  />
);

/* ── Animated Line ──────────────────────────────────────────────────── */
const AnimatedLine = ({ x, y, width, angle, delay }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width,
      height: '1px',
      background:
        'linear-gradient(90deg, transparent, rgba(239,68,68,0.3), transparent)',
      transform: `rotate(${angle}deg)`,
    }}
    animate={{ opacity: [0, 0.5, 0], scaleX: [0.5, 1, 0.5] }}
    transition={{
      duration: 5,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

/* ── particles / decorations data ───────────────────────────────────── */
const particles = [
  { size: 4, x: 10, y: 20, delay: 0, duration: 8, color: 'rgba(239,68,68,0.4)' },
  { size: 6, x: 85, y: 15, delay: 1.2, duration: 10, color: 'rgba(239,68,68,0.3)' },
  { size: 3, x: 70, y: 70, delay: 0.5, duration: 7, color: 'rgba(255,255,255,0.2)' },
  { size: 5, x: 25, y: 75, delay: 2, duration: 9, color: 'rgba(239,68,68,0.25)' },
  { size: 4, x: 50, y: 10, delay: 1, duration: 11, color: 'rgba(255,255,255,0.15)' },
  { size: 3, x: 90, y: 55, delay: 0.8, duration: 8, color: 'rgba(239,68,68,0.35)' },
  { size: 5, x: 15, y: 50, delay: 1.5, duration: 10, color: 'rgba(255,255,255,0.12)' },
  { size: 2, x: 60, y: 30, delay: 0.3, duration: 6, color: 'rgba(239,68,68,0.3)' },
  { size: 4, x: 40, y: 85, delay: 2.2, duration: 9, color: 'rgba(255,255,255,0.18)' },
  { size: 3, x: 78, y: 40, delay: 1.8, duration: 7, color: 'rgba(239,68,68,0.2)' },
];

const rings = [
  { size: 180, x: 5, y: 10, delay: 0, borderColor: 'rgba(239,68,68,0.08)' },
  { size: 120, x: 80, y: 60, delay: 1, borderColor: 'rgba(255,255,255,0.05)' },
  { size: 220, x: 60, y: -5, delay: 2, borderColor: 'rgba(239,68,68,0.06)' },
  { size: 90, x: 20, y: 70, delay: 0.5, borderColor: 'rgba(255,255,255,0.04)' },
];

const lines = [
  { x: 5, y: 35, width: '180px', angle: 25, delay: 0 },
  { x: 75, y: 20, width: '140px', angle: -15, delay: 1.5 },
  { x: 45, y: 80, width: '200px', angle: 10, delay: 3 },
];

/* ── headline words ─────────────────────────────────────────────────── */
const headline = 'Transforming Raw Footage into Engaging Stories';
const words = headline.split(' ');

/* ── Hero Component ─────────────────────────────────────────────────── */
const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  /* container + child variants */
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
  };

  const wordVariants = {
    hidden: { y: 40, opacity: 0, filter: 'blur(8px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const fadeUp = {
    hidden: { y: 30, opacity: 0 },
    visible: (delay = 0) => ({
      y: 0,
      opacity: 1,
      transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const handleScroll = (e, target) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Background Layers ──────────────────────────────────────── */}
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />

      {/* Red radial accents */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-red-500/[0.07] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-red-500/[0.05] rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-red-500/[0.04] rounded-full blur-[80px]" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]" />

      {/* ── Floating Decorations ───────────────────────────────────── */}
      {particles.map((p, i) => (
        <Particle key={`p-${i}`} {...p} />
      ))}
      {rings.map((r, i) => (
        <FloatingRing key={`r-${i}`} {...r} />
      ))}
      {lines.map((l, i) => (
        <AnimatedLine key={`l-${i}`} {...l} />
      ))}

      {/* ── Content ────────────────────────────────────────────────── */}
      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full text-center pt-24 pb-16"
      >
        {/* Tag line chip */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-xs sm:text-sm font-medium text-gray-300 tracking-wide">
            Professional Video Editor
          </span>
        </motion.div>

        {/* Headline — staggered word animation */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tighter mb-6"
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              className={`inline-block mr-[0.3em] ${
                ['Raw', 'Engaging', 'Stories'].includes(word)
                  ? 'bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent'
                  : 'text-white'
              }`}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Sub-heading */}
        <motion.p
          custom={0.9}
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed mb-10"
        >
          Professional Video Editing for{' '}
          <span className="text-gray-200 font-medium">YouTube</span>,{' '}
          <span className="text-gray-200 font-medium">Instagram Reels</span>,{' '}
          <span className="text-gray-200 font-medium">TikTok</span>,{' '}
          <span className="text-gray-200 font-medium">Commercial Ads</span>, and{' '}
          <span className="text-gray-200 font-medium">Social Media Content</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={1.2}
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary — View Portfolio */}
          <motion.a
            href="#portfolio"
            onClick={(e) => handleScroll(e, '#portfolio')}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full transition-all duration-300 shadow-xl shadow-red-500/30 hover:shadow-red-500/50 overflow-hidden"
          >
            {/* shine effect */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <Play size={18} className="relative z-10" />
            <span className="relative z-10">View Portfolio</span>
          </motion.a>

          {/* Secondary — Contact Me */}
          <motion.a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/20 hover:border-white/40 text-white font-semibold bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
          >
            <MessageCircle size={18} />
            <span>Contact Me</span>
          </motion.a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          custom={1.6}
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {[
            { value: '150+', label: 'Projects' },
            { value: '50+', label: 'Happy Clients' },
            { value: '5+', label: 'Years Exp.' },
            { value: '99%', label: 'Satisfaction' },
          ].map((stat, i) => (
            <div
              key={i}
              className="py-3 px-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <p className="text-xl sm:text-2xl font-bold text-red-500">
                {stat.value}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll Indicator ───────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-600">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1"
        >
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3], height: ['4px', '10px', '4px'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 rounded-full bg-red-500"
          />
        </motion.div>
        <ChevronDown size={14} className="text-gray-600" />
      </motion.div>
    </section>
  );
};

export default Hero;
