// components/HeroSection.tsx
// Portfolio Sadjo Wora — Section Hero
// Stack : Next.js 14 + Tailwind CSS
// Remplace la section hero actuelle dans app/page.tsx ou pages/index.tsx

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0f]">

      {/* ── Fond : grille + halo violet ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grille subtile */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#a78bfa 1px, transparent 1px), linear-gradient(90deg, #a78bfa 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Halo violet gauche */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-violet-600/20 blur-[120px]" />
        {/* Halo violet droit */}
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-purple-500/15 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── Colonne gauche : texte ── */}
        <div className="flex flex-col gap-6">

          {/* Badge disponibilité */}
          <div className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-400" />
            </span>
            Disponible pour des projets
          </div>

          {/* Titre principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
            Je construis des{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-purple-300">
              produits digitaux
            </span>{" "}
            qui fonctionnent en Afrique
          </h1>

          {/* Sous-titre */}
          <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
            Développeur <span className="text-white font-medium">React / Next.js / React Native</span> basé en Guinée.
            Je conçois des applications web et mobile pensées pour les marchés
            ouest-africains — du MVP jusqu'au SaaS.
          </p>

          {/* Stack pills */}
          <div className="flex flex-wrap gap-2">
            {["Next.js 14", "React Native", "Supabase", "TailwindCSS", "TypeScript"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-md bg-white/5 border border-white/10 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/30"
            >
              Voir mes projets
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="mailto:geniewora@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:border-violet-500/50 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all duration-200"
            >
              Me contacter
            </a>
          </div>

          {/* Métriques */}
          <div className="flex gap-8 pt-4 border-t border-white/10">
            <div>
              <p className="text-2xl font-bold text-white">6+</p>
              <p className="text-xs text-gray-500 mt-0.5">Projets livrés</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">3+</p>
              <p className="text-xs text-gray-500 mt-0.5">Ans d'expérience</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">2</p>
              <p className="text-xs text-gray-500 mt-0.5">Apps mobiles</p>
            </div>
          </div>
        </div>

        {/* ── Colonne droite : photo + carte flottante ── */}
        <div className="relative flex justify-center lg:justify-end">

          {/* Anneau décoratif */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-80 h-80 rounded-full border border-violet-500/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-96 h-96 rounded-full border border-purple-500/10 animate-[spin_30s_linear_infinite_reverse]" />
          </div>

          {/* Photo de profil */}
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

          {/* Carte flottante — stack */}
          <div className="absolute -bottom-4 -left-4 lg:-left-12 bg-[#13131a] border border-white/10 rounded-xl px-4 py-3 shadow-xl backdrop-blur-sm">
            <p className="text-xs text-gray-500 mb-1.5">Dernière stack utilisée</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet-400" />
              <span className="text-sm text-white font-medium">Next.js 14 + Supabase</span>
            </div>
          </div>

          {/* Carte flottante — localisation */}
          <div className="absolute -top-4 -right-4 lg:-right-8 bg-[#13131a] border border-white/10 rounded-xl px-4 py-3 shadow-xl backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <span className="text-base">🇬🇳</span>
              <div>
                <p className="text-xs text-white font-medium">Conakry, Guinée</p>
                <p className="text-xs text-gray-500">Afrique de l'Ouest</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
        <span className="text-xs tracking-widest uppercase"> Scroller </span>
        <div className="w-px h-8 bg-linear-to-b from-gray-600 to-transparent animate-pulse" />
      </div>
    </section>
  );
}