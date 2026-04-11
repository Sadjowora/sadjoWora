// components/ProjectsSection.jsx
// Portfolio Sadjo Wora — Projets avec animations Framer Motion

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const PROJECTS = [
  {
    title: "Photou",
    description:
      "Application touristique pour découvrir les plus beaux endroits du Sénégal et de la Guinée. Informations détaillées sur les lieux stratégiques, galeries photos et itinéraires.",
    problem: "Manque de visibilité digitale des sites touristiques en Afrique de l'Ouest.",
    role: "Fullstack — architecture, design, développement mobile & web",
    image: "/images/photou.jpg",
    tags: ["React Native", "Next.js", "Supabase", "TailwindCSS", "ExpressJS"],
    links: { live: null, github: null },
    badge: "Tourisme",
    badgeColor: "emerald",
    featured: true,
  },
  {
    title: "No-YAAWi",
    description:
      "Plateforme spécialisée dans l'expédition de colis et la légalisation de documents administratifs. Back-office intégré pour la gestion des commandes et clients.",
    problem: "Processus administratifs opaques et longs pour les diasporas africaines.",
    role: "Fullstack — conception et développement complet",
    image: "/images/Photou.png",
    tags: ["React Native", "Next.js", "Firebase", "TailwindCSS"],
    links: { live: null, github: null },
    badge: "Logistique",
    badgeColor: "blue",
    featured: true,
  },
  {
    title: "E-djandai Web",
    description:
      "Application SaaS de gestion de la scolarité : notes, examens, cours, emplois du temps et édition d'attestations pour établissements scolaires.",
    problem: "Gestion scolaire encore manuelle dans la majorité des établissements guinéens.",
    role: "Fullstack — conception UX, développement et déploiement",
    image: "/images/E-djandai.png",
    tags: ["ReactJS", "Firebase", "Bootstrap"],
    links: { live: null, github: null },
    badge: "SaaS EdTech",
    badgeColor: "violet",
    featured: false,
  },
  {
    title: "Edjandai Mobile",
    description:
      "Version mobile de la plateforme Edjandai. Gestion des étudiants, professeurs et cours directement depuis un smartphone.",
    problem: "Accès aux outils de gestion scolaire depuis n'importe où.",
    role: "Développeur mobile — React Native + Firebase",
    image: "/images/edjandaiM.svg",
    tags: ["React Native", "Firebase", "TailwindCSS"],
    links: { live: null, github: null },
    badge: "Mobile",
    badgeColor: "amber",
    featured: false,
  },
  {
    title: "École Doctorale",
    description:
      "Site institutionnel pour une école doctorale de sciences juridiques, économiques, politiques et de gestion. Design responsive et sobre.",
    problem: "Absence de présence web pour l'institution.",
    role: "Développeur front-end — design et intégration",
    image: "/images/Site-Ecole-doctorale.png",
    tags: ["Next.js", "TailwindCSS", "Vercel"],
    links: { live: null, github: null },
    badge: "Institutionnel",
    badgeColor: "gray",
    featured: false,
  },
  {
    title: "CodeNakry",
    description:
      "Plateforme de publication d'articles, conseils et projets destinés aux développeurs et acteurs tech en Guinée. Communauté et blog.",
    problem: "Absence de ressources tech locales en langue française pour les développeurs guinéens.",
    role: "Fondateur & développeur — conception et déploiement complet",
    image: "/images/CodeNakry.png",
    tags: ["ReactJS", "Bootstrap", "Firebase"],
    links: { live: "https://codenakry.web.app", github: null },
    badge: "Communauté",
    badgeColor: "pink",
    featured: false,
  },
];

const BADGE_COLORS = {
  emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  blue:    "bg-blue-500/10 text-blue-400 border-blue-500/20",
  violet:  "bg-violet-500/10 text-violet-400 border-violet-500/20",
  amber:   "bg-amber-500/10 text-amber-400 border-amber-500/20",
  gray:    "bg-gray-500/10 text-gray-400 border-gray-500/20",
  pink:    "bg-pink-500/10 text-pink-400 border-pink-500/20",
};

export default function ProjectsSection() {
  const { ref, inView } = useInView();
  const featured = PROJECTS.filter((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="bg-[#0a0a0f] py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            Mes réalisations
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Projets sélectionnés
          </h2>
          <p className="text-gray-400 max-w-xl text-base leading-relaxed">
            Des applications web et mobile conçues pour résoudre de vrais problèmes
            dans le contexte ouest-africain.
          </p>
        </motion.div>

        {/* Featured cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {featured.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            >
              <FeaturedCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Small cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {others.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
            >
              <SmallCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative bg-[#0f0f18] border border-white/8 rounded-2xl overflow-hidden hover:border-violet-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10 flex flex-col h-full"
    >
      <div className="relative h-52 w-full overflow-hidden bg-[#13131f]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f18] via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 text-xs font-medium rounded-full border ${BADGE_COLORS[project.badgeColor]}`}>
            {project.badge}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6 gap-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
        </div>

        <div className="flex gap-3 p-3 rounded-xl bg-white/3 border border-white/5">
          <span className="text-violet-400 mt-0.5 shrink-0">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </span>
          <p className="text-gray-500 text-xs leading-relaxed">{project.problem}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 text-xs rounded-md bg-white/5 border border-white/8 text-gray-400">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto pt-2">
          {project.links.live ? (
            <a href={project.links.live} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold transition-all hover:scale-105">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Voir le projet
            </a>
          ) : project.links.github ? (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-gray-300 text-xs font-medium transition-all hover:border-violet-500/40">
              Code source
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/5 text-gray-600 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
              Projet privé
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function SmallCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="group bg-[#0f0f18] border border-white/8 rounded-xl p-5 hover:border-violet-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10 flex flex-col gap-4"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-base font-bold text-white leading-tight">{project.title}</h3>
        <span className={`shrink-0 px-2 py-0.5 text-xs font-medium rounded-full border ${BADGE_COLORS[project.badgeColor]}`}>
          {project.badge}
        </span>
      </div>

      <p className="text-gray-500 text-xs leading-relaxed flex-1 line-clamp-3">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="px-2 py-0.5 text-xs rounded bg-white/5 border border-white/8 text-gray-500">
            {tag}
          </span>
        ))}
        {project.tags.length > 3 && (
          <span className="px-2 py-0.5 text-xs text-gray-600">+{project.tags.length - 3}</span>
        )}
      </div>

      {project.links.live ? (
        <a href={project.links.live} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-violet-400 hover:text-violet-300 text-xs font-medium transition-colors mt-auto">
          Voir le projet
          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      ) : (
        <span className="text-xs text-gray-700 mt-auto">Projet privé</span>
      )}
    </motion.div>
  );
}