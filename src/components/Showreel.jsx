import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Film, Sparkles } from "lucide-react";

const Showreel = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="showreel"
      className="relative py-20 lg:py-24 overflow-hidden bg-black"
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6"
          >
            <Film className="w-4 h-4 text-red-500" />
            <span className="text-sm font-medium text-red-400">
              Watch My Work
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Showreel
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A curated collection of my best work — cinematic edits, motion
            graphics, and visual storytelling at its finest.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative group"
        >
          {/* Decorative corner brackets */}
          <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-red-500/50 rounded-tl-lg z-20" />
          <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-red-500/50 rounded-tr-lg z-20" />
          <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-red-500/50 rounded-bl-lg z-20" />
          <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-red-500/50 rounded-br-lg z-20" />

          {/* Outer glow on hover */}
          <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-transparent to-red-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />

          {/* Glassmorphism video frame */}
          <div className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/50">
            {/* Cinematic placeholder */}
            <div className="relative aspect-video w-full overflow-hidden">
              {/* Multi-layer gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
              <div className="absolute inset-0 bg-gradient-to-tr from-red-950/40 via-transparent to-purple-950/30" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />

              {/* Animated grain/noise texture overlay */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                  backgroundSize: "128px 128px",
                }}
              />

              {/* Horizontal cinematic lines */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {/* Letterbox bars */}
              <div className="absolute top-0 left-0 right-0 h-[8%] bg-black/80" />
              <div className="absolute bottom-0 left-0 right-0 h-[8%] bg-black/80" />

              {/* Floating decorative light streaks */}
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 3,
                }}
                className="absolute top-1/3 w-64 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"
              />
              <motion.div
                animate={{ x: ["200%", "-100%"] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 5,
                }}
                className="absolute top-2/3 w-96 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
              />

              {/* Decorative bokeh circles */}
              <motion.div
                animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/4 left-1/5 w-32 h-32 bg-red-500/10 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  opacity: [0.05, 0.15, 0.05],
                  scale: [1.1, 0.9, 1.1],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"
              />

              {/* Center play button */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group/play cursor-pointer"
                >
                  {/* Pulse rings */}
                  <motion.div
                    animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                    className="absolute inset-0 rounded-full bg-red-500/30"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.8], opacity: [0.2, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: 0.5,
                    }}
                    className="absolute inset-0 rounded-full bg-red-500/20"
                  />

                  {/* Button body */}
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-red-500 flex items-center justify-center shadow-lg shadow-red-500/30 group-hover/play:shadow-red-500/50 transition-shadow duration-300">
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1" />
                  </div>
                </motion.button>
              </div>

              {/* Bottom left — timecode overlay */}
              <div className="absolute bottom-[10%] left-6 z-10 flex items-center gap-3 text-white/40 text-xs font-mono">
                <span>00:00:00:00</span>
                <span className="w-1 h-1 rounded-full bg-red-500/60" />
                <span>REC</span>
              </div>

              {/* Bottom right — codec info */}
              <div className="absolute bottom-[10%] right-6 z-10 flex items-center gap-3 text-white/40 text-xs font-mono">
                <span>4K</span>
                <span>•</span>
                <span>24fps</span>
                <span>•</span>
                <span>LOG</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom decorative sparkle text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center justify-center gap-2 mt-8 text-gray-500 text-sm"
        >
          <Sparkles className="w-4 h-4 text-red-500/50" />
          <span>Click play to experience the magic</span>
          <Sparkles className="w-4 h-4 text-red-500/50" />
        </motion.div>
      </div>
    </section>
  );
};

export default Showreel;
