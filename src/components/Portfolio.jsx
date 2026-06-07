import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ExternalLink, Layers, Play } from "lucide-react";
import { categories, projects } from "../data/siteData";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeVideo, setActiveVideo] = useState(null);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative py-20 lg:py-24 overflow-hidden bg-black"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
            <Layers className="w-4 h-4 text-red-500" />
            <span className="text-sm text-red-400">Creative Works</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Browse through my video editing projects.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 rounded-full text-sm ${
                activeFilter === category
                  ? "bg-red-500 text-white"
                  : "bg-white/5 text-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setActiveVideo}
            />
          ))}
        </div>
      </div>

      {/* FULLSCREEN VIDEO MODAL */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setActiveVideo(null);
              }
            }}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 text-white text-3xl cursor-pointer hover:text-red-500"
            >
              ✕
            </button>

            {/* VIDEO */}
            <motion.video
              src={activeVideo}
              controls
              autoPlay
              muted
              className="max-w-[90%] max-h-[90%] rounded-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

/* ================= CARD ================= */
const ProjectCard = ({ project, onOpen }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-red-500/30 transition"
    >
      {/* VIDEO */}
      <div className="relative h-52 overflow-hidden">
        {/* PLAY ICON */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <Play className="w-10 h-10 text-white opacity-80 group-hover:opacity-0 transition" />
        </div>

        {/* VIDEO */}
        <video
          src={project.video}
          muted
          loop
          playsInline
          preload="metadata"
          onMouseEnter={(e) => {
            const v = e.currentTarget;
            v.currentTime = 0;
            v.play().catch(() => {});
          }}
          onMouseLeave={(e) => {
            const v = e.currentTarget;
            v.pause();
            v.currentTime = 0;
          }}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Category */}
        <div className="absolute top-4 left-4 z-10 text-xs bg-black/50 px-3 py-1 rounded-full text-white">
          {project.category}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="text-white font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>

        <button
          onClick={() => onOpen(project.video)}
          className="flex items-center gap-2 text-red-400 text-sm cursor-pointer"
        >
          View Project <ExternalLink size={14} />
        </button>
      </div>
    </motion.div>
  );
};

export default Portfolio;
