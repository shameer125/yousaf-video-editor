import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../data/siteData";

const AUTOPLAY_INTERVAL = 5000;

const initialsColors = [
  "from-red-500 to-rose-600",
  "from-purple-500 to-violet-600",
  "from-blue-500 to-cyan-600",
  "from-emerald-500 to-teal-600",
  "from-orange-500 to-amber-600",
  "from-pink-500 to-fuchsia-600",
];

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating
            ? "fill-yellow-400 text-yellow-400"
            : "fill-gray-600 text-gray-600"
        }`}
      />
    ))}
  </div>
);

const TestimonialCard = ({ testimonial, colorIndex }) => {
  const color = initialsColors[colorIndex % initialsColors.length];

  return (
    <div className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md lg:p-8">
      {/* Quote decoration */}
      <Quote className="absolute right-5 top-5 h-8 w-8 text-red-500/10" />

      {/* Stars */}
      <div className="mb-5">
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Review */}
      <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-300 italic">
        "{testimonial.review}"
      </p>

      {/* Divider */}
      <div className="mb-5 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Client info */}
      <div className="flex items-center gap-4">
        {/* Initials avatar */}
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${color} text-sm font-bold text-white shadow-lg`}
        >
          {testimonial.initials}
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white">
            {testimonial.name}
          </h4>
          <p className="text-xs text-gray-400">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const [visibleCount, setVisibleCount] = useState(1);

  // Responsive visible count
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setVisibleCount(3);
      } else if (width >= 640) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / visibleCount);
  const maxIndex = totalSlides - 1;

  // Clamp currentIndex on resize
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const goTo = useCallback(
    (index) => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    },
    [currentIndex],
  );

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goNext, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, goNext]);

  // Get visible testimonials for current slide
  const startIdx = currentIndex * visibleCount;
  const visibleTestimonials = testimonials.slice(
    startIdx,
    startIdx + visibleCount,
  );

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-20 lg:py-24 overflow-hidden bg-black"
    >
      {/* Background effects */}
      <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-red-500/[0.03] blur-[120px]" />
        <div className="absolute -right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-red-500/[0.02] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 lg:mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-red-400">
            Testimonials
          </span>
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl tracking-tight">
            Client{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          {/* Red underline accent */}
          <div className="mx-auto mb-6 flex items-center justify-center gap-1">
            <div className="h-1 w-8 rounded-full bg-red-500/40" />
            <div className="h-1 w-16 rounded-full bg-red-500" />
            <div className="h-1 w-8 rounded-full bg-red-500/40" />
          </div>
          <p className="mx-auto max-w-2xl text-base text-gray-400 sm:text-lg">
            Hear from creators and brands who've trusted me with their vision.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Prev / Next arrow buttons */}
          <button
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="absolute -left-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-white/5 p-2.5 text-gray-400 backdrop-blur-md transition-all duration-300 hover:border-red-500/40 hover:bg-red-500/10 hover:text-white sm:-left-5 lg:-left-14"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goNext}
            aria-label="Next testimonial"
            className="absolute -right-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-white/5 p-2.5 text-gray-400 backdrop-blur-md transition-all duration-300 hover:border-red-500/40 hover:bg-red-500/10 hover:text-white sm:-right-5 lg:-right-14"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Slides container */}
          <div className="overflow-hidden px-6 sm:px-8 lg:px-0">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className={`grid gap-6 ${
                  visibleCount === 3
                    ? "grid-cols-3"
                    : visibleCount === 2
                      ? "grid-cols-2"
                      : "grid-cols-1"
                }`}
              >
                {visibleTestimonials.map((testimonial, i) => (
                  <TestimonialCard
                    key={`${currentIndex}-${i}`}
                    testimonial={testimonial}
                    colorIndex={startIdx + i}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="mt-10 flex items-center justify-center gap-2">
            {[...Array(totalSlides)].map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`relative h-2.5 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "w-8 bg-red-500"
                    : "w-2.5 bg-white/20 hover:bg-white/40"
                }`}
              >
                {/* Active dot glow */}
                {i === currentIndex && (
                  <span className="absolute inset-0 animate-pulse rounded-full bg-red-500/50 blur-sm" />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Large decorative quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="pointer-events-none mt-12 flex justify-center"
        >
          <Quote className="h-16 w-16 text-red-500/[0.06]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
