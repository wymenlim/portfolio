"use client";

import { motion } from "framer-motion";
import { Code2, Terminal } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="0" className="min-h-[70vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-gray-500 font-medium tracking-wide uppercase text-sm"
            >
              Computer Science Student
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-white leading-tight"
            >
              Wymen Lim
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-gray-400 leading-relaxed max-w-md"
          >
            Learning to build meaningful digital experiences through exploration and problem solving.
            A Computer Science student excited to pick up new technologies and grow with every project.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex items-center gap-2 text-sm text-gray-500"
          >
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            Available for opportunities
          </motion.div>
        </motion.div>

        {/* Right - Abstract Developer Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
          className="relative hidden md:flex items-center justify-center"
        >
          <div className="relative w-72 h-72">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-emerald-500/10 rounded-3xl rotate-6" />
            <div className="absolute inset-0 bg-gray-900 border border-gray-800 rounded-3xl shadow-lg flex items-center justify-center">
              <div className="space-y-4 text-center">
                <div className="flex justify-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-4 bg-gray-800 rounded-xl"
                  >
                    <Code2 className="w-8 h-8 text-emerald-500" />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    className="p-4 bg-gray-800 rounded-xl"
                  >
                    <Terminal className="w-8 h-8 text-emerald-500" />
                  </motion.div>
                </div>
                <div className="space-y-2 px-6">
                  <div className="h-2 bg-gray-800 rounded-full w-full" />
                  <div className="h-2 bg-gray-800 rounded-full w-3/4 mx-auto" />
                  <div className="h-2 bg-gray-800 rounded-full w-1/2 mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
