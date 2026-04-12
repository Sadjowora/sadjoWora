// components/HeroSection.jsx
// Portfolio Sadjo Wora — Hero avec animations Framer Motion

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0f]">

      {/* ── Fond : grille + halos ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#a78bfa 1px, transparent 1px), linear-gradient(90deg, #a78bfa 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-purple-500/15 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── Colonne gauche ── */}
        <div className="flex flex-col gap-6">

          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-400" />
            </span>
            Disponible pour des projets
          </motion.div>

          {/* Titre */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
          >
          Je construis des{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-purple-300">
            produits digitaux
          </span>{" "}
          pour marchés émergents — et au-delà
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-lg text-gray-400 leading-relaxed max-w-lg"
          >
            Développeur{" "}
            <span className="text-white font-medium">React / Next.js / React Native</span>{" "}
          basé au Portugal 🇵🇹. Je conçois des applications
          web et mobile pour startups, PME et institutions — du MVP jusqu'au SaaS.
          </motion.p>

          {/* Stack pills */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-wrap gap-2"
          >
            {["Next.js 14", "React Native", "Supabase", "TailwindCSS", "TypeScript"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-md bg-white/5 border border-white/10 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="flex flex-wrap gap-4 mt-2"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-colors duration-200 shadow-lg shadow-violet-500/20"
            >
              Voir mes projets
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
            <motion.a
              href="mailto:geniewora@gmail.com"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:border-violet-500/50 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all duration-200"
            >
              Me contacter
            </motion.a>
          </motion.div>

          {/* Métriques */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
            className="flex gap-8 pt-4 border-t border-white/10"
          >
            {[
              { value: "6+", label: "Projets livrés" },
              { value: "3+", label: "Ans d'expérience" },
              { value: "2", label: "Apps mobiles" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Colonne droite : photo ── */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="relative flex justify-center lg:justify-end"
        >
          {/* Anneaux décoratifs */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-80 h-80 rounded-full border border-violet-500/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-96 h-96 rounded-full border border-purple-500/10 animate-[spin_30s_linear_infinite_reverse]" />
          </div>

          {/* Photo */}
          <div className="relative w-64 h-64 lg:w-72 lg:h-72">
            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-violet-600 to-purple-800 rotate-3" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-violet-500/30">
              <Image
                src="/images/profile.jpg"
                alt="Mamadu Sadjo Djalo — Développeur React/Next.js"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Carte stack */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -bottom-4 -left-4 lg:-left-12 bg-[#13131a] border border-white/10 rounded-xl px-4 py-3 shadow-xl backdrop-blur-sm"
          >
            <p className="text-xs text-gray-500 mb-1.5">Dernière stack utilisée</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet-400" />
              <span className="text-sm text-white font-medium">Next.js 14 + Supabase</span>
            </div>
          </motion.div>

          {/* Carte localisation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -top-4 -right-4 lg:-right-8 bg-[#13131a] border border-white/10 rounded-xl px-4 py-3 shadow-xl backdrop-blur-sm"
          >
            <div className="flex items-center gap-2">
              <div>
                <p className="text-xs text-white font-medium">📍 Lisbonne, Portugal</p> 
                <p className="text-xs text-gray-500"> 🇬🇳 Guinée</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-linear-to-b from-gray-600 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}