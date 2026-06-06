import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Wand2 } from 'lucide-react';
import { comparisons } from '../data/siteData';

const BeforeAfter = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      id="before-after"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6"
          >
            <Wand2 className="w-4 h-4 text-red-500" />
            <span className="text-sm font-medium text-red-400">The Transformation</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Before{' '}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              &amp; After
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See the dramatic difference professional editing makes — from raw footage to polished, cinematic content.
          </p>
        </motion.div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {comparisons.map((comparison, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15, ease: 'easeOut' }}
            >
              <ComparisonCard comparison={comparison} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ========== Comparison Card ========== */
const ComparisonCard = ({ comparison, index }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-red-500/5 transition-all duration-500"
    >
      {/* Card header */}
      <div className="px-5 pt-5 pb-3">
        <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors duration-300">
          {comparison.title}
        </h3>
      </div>

      {/* Before & After panels */}
      <div className="px-5 pb-5">
        <div className="flex items-stretch gap-3">
          {/* Before Panel */}
          <div className="flex-1 relative rounded-xl overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${comparison.beforeColor}`} />
            <div className="absolute inset-0 bg-black/20" />

            {/* Subtle grid overlay */}
            <div className="absolute inset-0 opacity-[0.05]" style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }} />

            <div className="relative p-4 min-h-[140px] flex flex-col justify-between">
              <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/40 backdrop-blur-sm text-gray-300 border border-white/10 w-fit">
                Before
              </span>
              <p className="text-gray-300 text-xs leading-relaxed mt-4">
                {comparison.before}
              </p>

              {/* Decorative — raw footage "frame" lines */}
              <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-white/10 rounded-tr-sm" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-white/10 rounded-bl-sm" />
            </div>
          </div>

          {/* Arrow separator */}
          <div className="flex items-center justify-center">
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-8 h-8 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center"
            >
              <ArrowRight className="w-4 h-4 text-red-400" />
            </motion.div>
          </div>

          {/* After Panel */}
          <div className="flex-1 relative rounded-xl overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${comparison.afterColor}`} />

            {/* Shimmer overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative p-4 min-h-[140px] flex flex-col justify-between">
              <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-red-500/20 backdrop-blur-sm text-red-300 border border-red-500/20 w-fit">
                After
              </span>
              <p className="text-white/90 text-xs leading-relaxed mt-4">
                {comparison.after}
              </p>

              {/* Decorative — polished "frame" accents */}
              <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-red-500/20 rounded-tr-sm" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-red-500/20 rounded-bl-sm" />
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-red-500/20 transition-all duration-500" />
      </div>
    </motion.div>
  );
};

export default BeforeAfter;
