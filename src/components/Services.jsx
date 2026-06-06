import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { services } from "../data/siteData";

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
      className="group relative"
    >
      {/* Hover glow effect */}
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-red-500/0 via-red-500/0 to-red-500/0 opacity-0 blur-sm transition-all duration-500 group-hover:from-red-500/30 group-hover:via-red-500/10 group-hover:to-red-500/30 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-500 group-hover:scale-[1.02] group-hover:border-red-500/40 group-hover:bg-white/[0.08] lg:p-8">
        {/* Icon */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-500 group-hover:border-red-500/30 group-hover:bg-red-500/10">
            <Icon className="h-7 w-7 text-gray-400 transition-colors duration-500 group-hover:text-red-500" />
          </div>

          {/* Price badge */}
          <span className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-sm font-semibold text-red-400">
            {service.price}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-red-50">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mb-6 text-sm leading-relaxed text-gray-400">
          {service.description}
        </p>

        {/* Features */}
        <ul className="mb-8 flex-1 space-y-3">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3">
              <CheckCircle className="h-4 w-4 shrink-0 text-red-500/70" />
              <span className="text-sm text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Get Started button */}
        <button className="group/btn relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400">
          <span className="relative z-10">Get Started</span>
          <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 transition-transform duration-500 group-hover/btn:translate-x-full" />
        </button>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-20 lg:py-24 overflow-hidden bg-black"
    >
      {/* Background decorative elements */}
      <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-red-500/[0.03] blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 h-[400px] w-[400px] rounded-full bg-red-500/[0.02] blur-[100px]" />
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
            What I Offer
          </span>
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl tracking-tight">
            My{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          {/* Red underline accent */}
          <div className="mx-auto mb-6 flex items-center justify-center gap-1">
            <div className="h-1 w-8 rounded-full bg-red-500/40" />
            <div className="h-1 w-16 rounded-full bg-red-500" />
            <div className="h-1 w-8 rounded-full bg-red-500/40" />
          </div>
          <p className="mx-auto max-w-2xl text-base text-gray-400 sm:text-lg">
            From short-form content to full-length productions, I deliver
            professional editing that elevates your brand and captivates your
            audience.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-gray-500">
            Need a custom package?{" "}
            <a
              href="#contact"
              className="font-medium text-red-400 underline decoration-red-400/30 underline-offset-4 transition-colors hover:text-red-300 hover:decoration-red-300/50"
            >
              Let's discuss your project
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
