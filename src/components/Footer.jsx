import { motion } from "framer-motion";
import {
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  ArrowUp,
  Heart,
  Film,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/share/1EY8VM7YZm/",
  },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/5">
      {/* Subtle gradient at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1 - About / Logo */}
          <div className="space-y-5">
            {/* SY Logo */}
            <a
              href="#home"
              className="inline-flex items-center gap-2 group"
              aria-label="Go to home"
            >
              <div className="w-10 h-10 rounded-lg bg-red-500 flex items-center justify-center font-bold text-white text-lg group-hover:bg-red-600 transition-colors duration-300">
                SY
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                Syed <span className="text-red-500">Yousaf</span>
              </span>
            </a>

            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Professional video editor and motion designer crafting cinematic
              visual experiences. Turning raw footage into compelling stories
              that captivate audiences worldwide.
            </p>

            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <Film className="w-4 h-4 text-red-500/60" />
              <span>Crafting visuals since 2024</span>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-red-500 text-sm transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-red-500 transition-colors duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Social Media */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Connect With Me
            </h4>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Follow me on social media for behind-the-scenes content, tips, and
              updates on latest projects.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              {socialLinks.map((social) => {
                const SocialIcon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-red-500 hover:bg-red-500/10 hover:border-red-500/30 transition-all duration-300"
                  >
                    <SocialIcon className="w-[18px] h-[18px]" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm text-center sm:text-left">
            © 2024 Syed Yousaf. All rights reserved.
          </p>

          <div className="flex items-center gap-1.5 text-gray-600 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>and passion</span>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-500/25 transition-colors duration-300 z-50"
        aria-label="Scroll to top"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
