import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Download,
  FileText,
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
} from "lucide-react";

const timelineData = [
  {
    year: "2026 — Present",
    title: "Video Editor",
    company: "Freelance / Remote",
    description:
      "Leading video production for international clients. Specializing in cinematic edits, color grading, and motion graphics for YouTube, social media, and commercial projects.",
    icon: Briefcase,
  },
  {
    year: "2024 — 2026",
    title: "Video Editor & Motion Designer",
    company: "Creative Media Agency",
    description:
      "Produced high-quality video content for brands and influencers. Managed end-to-end post-production workflows including editing, sound design, and VFX.",
    icon: Award,
  },
  {
    year: "2024 — 2025",
    title: "Junior Video Editor",
    company: "Digital Studios",
    description:
      "Started professional journey editing short-form content, music videos, and promotional material. Developed expertise in Adobe Premiere Pro and After Effects.",
    icon: Briefcase,
  },
];

const skills = [
  { name: "Adobe Premiere Pro", level: 95 },
  { name: "After Effects", level: 90 },
  { name: "DaVinci Resolve", level: 85 },
  { name: "Color Grading", level: 88 },
  { name: "Motion Graphics", level: 82 },
  { name: "Sound Design", level: 78 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function SkillBar({ name, level, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="space-y-2"
    >
      <div className="flex justify-between text-sm">
        <span className="text-gray-300 font-medium">{name}</span>
        <span className="text-red-500 font-semibold">{level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-red-600 to-red-400"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.3 + index * 0.1,
            ease: "easeOut",
          }}
        />
      </div>
    </motion.div>
  );
}

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = index % 2 === 0;
  const IconComponent = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative flex items-start gap-6 group"
    >
      {/* Timeline dot and line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <motion.div
          className="w-12 h-12 rounded-full bg-red-500/20 border-2 border-red-500/50 flex items-center justify-center z-10 group-hover:bg-red-500/30 group-hover:border-red-500 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <IconComponent className="w-5 h-5 text-red-500" />
        </motion.div>
        {index < timelineData.length - 1 && (
          <div className="w-0.5 h-full bg-gradient-to-b from-red-500/30 to-transparent min-h-[60px]" />
        )}
      </div>

      {/* Content card */}
      <div className="flex-1 pb-10">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-red-500/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-500/5">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-4 h-4 text-red-500" />
            <span className="text-red-500 text-sm font-semibold tracking-wide">
              {item.year}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
          <p className="text-red-400/80 text-sm font-medium mb-3">
            {item.company}
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Resume() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="resume"
      className="relative py-20 lg:py-24 bg-black overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full" ref={sectionRef}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-red-500 text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
              Resume
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-transparent mx-auto rounded-full" />
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-5 mb-24"
        >
          <motion.a
            href="resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full transition-colors duration-300 shadow-lg shadow-red-500/25"
          >
            <Download className="w-5 h-5" />
            Download CV
          </motion.a>
          <motion.a
            href="resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 border-2 border-white/20 hover:border-red-500/60 text-white font-semibold rounded-full transition-all duration-300 bg-white/5 backdrop-blur-sm hover:bg-white/10"
          >
            <FileText className="w-5 h-5" />
            View Resume
          </motion.a>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Timeline - left / top */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-3"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
            >
              <Briefcase className="w-6 h-6 text-red-500" />
              Experience & Education
            </motion.h3>

            <div className="space-y-0">
              {timelineData.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Skills - right / bottom */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Award className="w-6 h-6 text-red-500" />
              Core Skills
            </h3>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 space-y-6">
              {skills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  index={index}
                />
              ))}
            </div>

            {/* Stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8"
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "2+", label: "Years Experience" },
                  { value: "100+", label: "Projects Done" },
                  { value: "30+", label: "Happy Clients" },
                  { value: "5+", label: "Awards Won" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-red-500 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-xs uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
