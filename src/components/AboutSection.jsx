// components/AboutSection.jsx
// Portfolio Sadjo Wora — À propos avec animations Framer Motion

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const TIMELINE = [
  {
    year: "2024 — Présent",
    title: "Entrepreneur & Développeur indépendant",
    place: "Conakry, Guinée",
    description:
      "Conception et développement de produits SaaS pour le marché ouest-africain : QFlow (gestion de files d'attente), application de transport aéroport-hôtel, plateforme B2B AfriConnect.",
    type: "work",
  },
  {
    year: "2023",
    title: "Développeur Fullstack Freelance",
    place: "Remote — Afrique de l'Ouest",
    description:
      "Réalisation de projets clients : site école doctorale, No-YAAWi (expédition & légalisation), Photou (tourisme Guinée / Sénégal).",
    type: "work",
  },
  {
    year: "2022",
    title: "Fondateur — CodeNakry",
    place: "Conakry, Guinée",
    description:
      "Création d'une plateforme communautaire dédiée aux développeurs guinéens : articles, conseils, partage de projets et ressources tech en français.",
    type: "project",
  },
  {
    year: "2021",
    title: "Premiers projets React Native",
    place: "Conakry, Guinée",
    description:
      "Développement de Edjandai — application mobile et web de gestion scolaire (notes, examens, cours, emplois du temps) pour établissements guinéens.",
    type: "project",
  },
  {
    year: "2020",
    title: "Début du développement web",
    place: "Conakry, Guinée",
    description:
      "Apprentissage autodidacte du développement web : HTML, CSS, JavaScript, puis React.js. Premiers projets statiques et dynamiques.",
    type: "education",
  },
];

const TYPE_STYLES = {
  work:      { dot: "bg-violet-500", badge: "bg-violet-500/10 text-violet-400 border-violet-500/20", label: "Travail" },
  project:   { dot: "bg-blue-500",   badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",       label: "Projet" },
  education: { dot: "bg-emerald-500", badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", label: "Formation" },
};

const STATS = [
  { value: "4+", label: "Années de code" },
  { value: "6+", label: "Projets livrés" },
  { value: "3", label: "Produits SaaS en cours" },
  { value: "2", label: "Apps mobiles publiées" },
];

export default function AboutSection() {
  const { ref, inView } = useInView();
  const { ref: timelineRef, inView: timelineInView } = useInView();

  return (
    <section id="about" className="bg-[#0a0a0f] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* En-tête */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            Qui suis-je
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            À propos de moi
          </h2>
        </motion.div>

        {/* Bloc principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">

          {/* Photo + stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-purple-900/20 z-10" />
              <Image src="/images/profile.jpg" alt="Mamadu Sadjo Djalo" fill className="object-cover" />
              <div className="absolute bottom-4 left-4 z-20 bg-[#0f0f18]/90 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-400" />
                  </span>
                  <span className="text-white text-sm font-medium">Disponible pour des projets</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="bg-[#0f0f18] border border-white/8 rounded-xl px-4 py-4 text-center hover:border-violet-500/20 transition-all duration-300"
                >
                  <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-gray-500 text-xs">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4 text-gray-400 text-base leading-relaxed">
              <p>
                Je suis <span className="text-white font-semibold">Mamadu Sadjo Djalo</span>, développeur
                web et mobile basé à <span className="text-white font-semibold">Conakry, Guinée</span>.
                Je conçois des applications avec React, Next.js et React Native — du prototype
                jusqu'au produit en production.
              </p>
              <p>
                Ce qui me distingue ? Je ne suis pas seulement développeur — je suis aussi{" "}
                <span className="text-white font-semibold">entrepreneur</span>. Je comprends les enjeux
                business derrière chaque ligne de code. J'ai fondé{" "}
                <a href="https://codenakry.web.app" target="_blank" rel="noopener noreferrer"
                  className="text-violet-400 hover:text-violet-300 transition-colors">
                  CodeNakry
                </a>
                , une communauté tech guinéenne, et je développe activement plusieurs produits SaaS
                ciblant le marché ouest-africain.
              </p>
              <p>
                Mon approche : comprendre le{" "}
                <span className="text-white font-semibold">problème</span> avant de choisir la solution
                technique. Livrer vite, itérer, améliorer.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {["🇬🇳 Guinée Conakry", "🚀 Builder SaaS", "📱 React Native", "🌍 Afrique de l'Ouest", "💡 Pensée produit", "✍️ Blogger tech"].map((tag) => (
                <span key={tag}
                  className="px-3 py-1.5 text-sm rounded-lg bg-white/5 border border-white/8 text-gray-300 hover:border-violet-500/30 hover:text-white transition-all duration-200">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <motion.a
                href="https://drive.google.com/file/d/1G5kaG8n_cWXiG22vcU6_B5U3o6K8MenN/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors shadow-lg shadow-violet-500/20"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                Télécharger mon CV
              </motion.a>
              <motion.a
                href="mailto:geniewora@gmail.com"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 hover:border-violet-500/40 bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-all"
              >
                Me contacter
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div ref={timelineRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-white mb-2">Mon parcours</h3>
            <p className="text-gray-500 text-sm mb-10">De l'apprentissage autodidacte aux produits SaaS</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/50 via-white/10 to-transparent" />
            <div className="flex flex-col gap-0">
              {TIMELINE.map((item, i) => {
                const s = TYPE_STYLES[item.type];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                    className="relative flex gap-8 pl-12 pb-10 group"
                  >
                    <div className={`absolute left-[13px] top-1.5 w-2.5 h-2.5 rounded-full ${s.dot} ring-4 ring-[#0a0a0f] z-10 group-hover:scale-125 transition-transform duration-200`} />
                    <div className="flex-1 bg-[#0f0f18] border border-white/8 rounded-2xl p-5 hover:border-white/15 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-black/20">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <h4 className="text-white font-semibold text-base">{item.title}</h4>
                          <p className="text-gray-500 text-xs mt-0.5 flex items-center gap-1.5">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {item.place}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className={`px-2.5 py-1 text-xs font-medium rounded-full border ${s.badge}`}>
                            {s.label}
                          </span>
                          <span className="text-gray-600 text-xs font-mono">{item.year}</span>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}