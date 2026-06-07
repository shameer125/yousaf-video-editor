import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/siteData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const linkVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: 0.1 + i * 0.05, duration: 0.4, ease: "easeOut" },
    }),
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.25, ease: "easeInOut" },
    },
  };

  const mobileLinkVariants = {
    hidden: { x: -40, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.08 * i,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
    exit: (i) => ({
      x: 40,
      opacity: 0,
      transition: {
        delay: 0.03 * i,
        duration: 0.2,
        ease: "easeIn",
      },
    }),
  };

  return (
    <>
      <motion.nav
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="relative flex items-center gap-1 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl md:text-3xl font-black tracking-tight">
                <span className="text-red-500">S</span>
                <span className="text-white">Y</span>
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-red-500/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    custom={i}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
                      isActive
                        ? "text-red-500"
                        : "text-gray-400 hover:text-white"
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-lg bg-red-500/10 border border-red-500/20"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </div>

            {/* CTA Button - Desktop */}
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-lg shadow-red-500/25 hover:shadow-red-500/40"
              custom={navLinks.length}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.a>

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-[1000] w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle navigation menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu — Portaled to document.body */}
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-[999] md:hidden"
            >
              {/* Backdrop */}
              <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl" />

              {/* Decorative blobs */}
              <div className="absolute top-20 right-10 w-64 h-64 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-20 left-10 w-48 h-48 bg-red-500/5 rounded-full blur-2xl pointer-events-none" />

              {/* Menu Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
                <nav className="flex flex-col items-center gap-2 w-full max-w-xs">
                  {navLinks.map((link, i) => {
                    const isActive =
                      activeSection === link.href.replace("#", "");
                    return (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        custom={i}
                        variants={mobileLinkVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className={`w-full text-center py-3 px-6 text-lg font-medium rounded-xl transition-colors duration-300 ${
                          isActive
                            ? "text-red-500 bg-red-500/10 border border-red-500/20"
                            : "text-gray-300 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {link.name}
                      </motion.a>
                    );
                  })}

                  {/* Mobile CTA */}
                  <motion.a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, "#contact")}
                    custom={navLinks.length}
                    variants={mobileLinkVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="mt-4 w-full text-center py-3.5 px-6 bg-red-500 hover:bg-red-600 text-white text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-red-500/25"
                  >
                    Hire Me
                  </motion.a>
                </nav>

                {/* Footer note */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-8 text-gray-600 text-xs"
                >
                  © 2026 SY. All rights reserved.
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
};

export default Navbar;
