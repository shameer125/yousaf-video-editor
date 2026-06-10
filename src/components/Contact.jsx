import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  User,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "razayousaf209@gmail.com",
    href: "mailto:razayousaf209@gmail.com",
    color: "from-red-500/20 to-orange-500/10",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 331 3224247",
    href: "tel:+923313224247",
    color: "from-red-500/20 to-pink-500/10",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pakistan",
    href: null,
    color: "from-red-500/20 to-rose-500/10",
  },
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function ContactCard({ item, index }) {
  const IconComponent = item.icon;
  const Wrapper = item.href ? motion.a : motion.div;
  const wrapperProps = item.href
    ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <motion.div variants={itemVariants}>
      <Wrapper
        {...wrapperProps}
        whileHover={{ scale: 1.03, y: -4 }}
        whileTap={{ scale: 0.98 }}
        className="block bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-red-500/30 transition-all duration-300 group cursor-pointer"
      >
        <div className="flex items-center gap-4">
          <div
            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-red-500/30 transition-colors duration-300`}
          >
            <IconComponent className="w-6 h-6 text-red-500" />
          </div>
          <div className="min-w-0">
            <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold mb-1">
              {item.label}
            </p>
            <p className="text-white font-medium text-sm sm:text-base truncate group-hover:text-red-400 transition-colors duration-300">
              {item.value}
            </p>
          </div>
          {item.href && (
            <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-red-500 ml-auto flex-shrink-0 transition-colors duration-300 group-hover:translate-x-1 transform" />
          )}
        </div>
      </Wrapper>
    </motion.div>
  );
}

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const loadingToast = toast.loading("Sending message...");

  try {
    const response = await fetch("https://formspree.io/f/xrevkrro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast.success("Message sent successfully! ", {
        id: loadingToast,
      });
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error("Something went wrong ❌", {
        id: loadingToast,
      });
    }
  } catch (error) {
    toast.error("Error submitting form ❌", {
      id: loadingToast,
    });
  }
};

  return (
    <section
      id="contact"
      className="relative py-20 lg:py-24 bg-black overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-500/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-500/[0.02] rounded-full blur-3xl pointer-events-none" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full" ref={sectionRef}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-red-500 text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
            Contact Me
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
              Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-transparent mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            Have a project in mind or want to collaborate? I&apos;d love to hear
            from you. Let&apos;s create something amazing together.
          </p>
        </motion.div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Left column - Contact info */}
          <div className="space-y-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-4"
            >
              {contactInfo.map((item, index) => (
                <ContactCard key={item.label} item={item} index={index} />
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6"
            >
              <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-5">
                Follow Me
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                {socialLinks.map((social, index) => {
                  const SocialIcon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: 0.6 + index * 0.08,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-500/10 hover:border-red-500/30 transition-all duration-300"
                    >
                      <SocialIcon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-3 px-5 py-3 bg-green-500/10 border border-green-500/20 rounded-xl"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <span className="text-green-400 text-sm font-medium">
                Available for freelance projects
              </span>
            </motion.div>
          </div>

          {/* Right column - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 space-y-6"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                Send Me a Message
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                Fill out the form below and I&apos;ll get back to you as soon as
                possible.
              </p>

              {/* Name field */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block text-gray-400 text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="John Doe"
                    className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 outline-none focus:border-red-500 focus:bg-white/[0.08] transition-all duration-300 text-sm"
                  />
                </div>
              </div>

              {/* Email field */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-gray-400 text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="john@example.com"
                    className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 outline-none focus:border-red-500 focus:bg-white/[0.08] transition-all duration-300 text-sm"
                  />
                </div>
              </div>

              {/* Message field */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className="block text-gray-400 text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500 pointer-events-none" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 outline-none focus:border-red-500 focus:bg-white/[0.08] transition-all duration-300 text-sm resize-none"
                  />
                </div>
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="w-full flex items-center justify-center gap-2.5 px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition-colors duration-300 shadow-lg shadow-red-500/25 text-sm"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
