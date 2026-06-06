import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "../data/siteData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-50px" });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black"
    >
      {/* Background ambient effects */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-red-500/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-red-500/3 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            My <span className="text-red-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full" />
          <div className="w-12 h-1 bg-red-500/50 mx-auto rounded-full mt-1.5" />
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Mastering the art of visual storytelling through a diverse set of
            creative tools and techniques.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.04 }}
                className="group relative p-5 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden cursor-default"
              >
                {/* Hover glow using skill's accent color */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${skill.color}15 0%, transparent 70%)`,
                  }}
                />

                {/* Top accent line */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-3/4 transition-all duration-500 rounded-full"
                  style={{ backgroundColor: skill.color }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="w-11 h-11 sm:w-12 sm:h-12 mx-auto mb-3 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{
                      backgroundColor: `${skill.color}15`,
                    }}
                  >
                    <Icon
                      className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: skill.color }}
                    />
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-white font-medium text-xs sm:text-sm text-center mb-3 leading-tight">
                    {skill.name}
                  </h3>

                  {/* Progress Bar */}
                  <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)`,
                      }}
                      initial={{ width: 0 }}
                      animate={
                        gridInView ? { width: `${skill.level}%` } : { width: 0 }
                      }
                      transition={{
                        duration: 1.2,
                        delay: 0.3 + index * 0.08,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    />
                  </div>

                  {/* Percentage Label */}
                  <motion.div
                    className="mt-2 text-center"
                    initial={{ opacity: 0 }}
                    animate={gridInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.08 }}
                  >
                    <span
                      className="text-xs font-semibold"
                      style={{ color: skill.color }}
                    >
                      {skill.level}%
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
