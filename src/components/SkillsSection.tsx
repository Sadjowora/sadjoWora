// components/SkillsSection.tsx
// Portfolio Sadjo Wora — Section Compétences
// Stack : Next.js 14 + Tailwind CSS

const SKILL_GROUPS = [
  {
    category: "Frontend",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "violet",
    skills: [
      { name: "Next.js 14", level: 90 },
      { name: "React.js", level: 92 },
      { name: "TailwindCSS", level: 88 },
      { name: "TypeScript", level: 75 },
      { name: "HTML / CSS", level: 95 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    category: "Mobile",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    color: "blue",
    skills: [
      { name: "React Native", level: 85 },
      { name: "Expo", level: 80 },
      { name: "Navigation RN", level: 78 },
    ],
  },
  {
    category: "Backend & BaaS",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    color: "emerald",
    skills: [
      { name: "Supabase", level: 85 },
      { name: "Firebase", level: 82 },
      { name: "ExpressJS", level: 70 },
      { name: "PostgreSQL", level: 72 },
    ],
  },
  {
    category: "Outils & DevOps",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "amber",
    skills: [
      { name: "Git / GitHub", level: 88 },
      { name: "Vercel", level: 90 },
      { name: "VS Code", level: 92 },
      { name: "Figma", level: 65 },
    ],
  },
];

const SOFT_SKILLS = [
  { label: "Pensée produit", desc: "Je pense business avant de coder" },
  { label: "Autonomie", desc: "Capable de mener un projet de A à Z" },
  { label: "Communication", desc: "À l'aise avec clients et équipes tech" },
  { label: "Curiosité", desc: "Veille tech active, toujours en apprentissage" },
];

const COLOR_MAP: Record<string, { bar: string; bg: string; border: string; icon: string; text: string }> = {
  violet:  { bar: "bg-violet-500",  bg: "bg-violet-500/10",  border: "border-violet-500/20",  icon: "text-violet-400",  text: "text-violet-300" },
  blue:    { bar: "bg-blue-500",    bg: "bg-blue-500/10",    border: "border-blue-500/20",    icon: "text-blue-400",    text: "text-blue-300" },
  emerald: { bar: "bg-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20", icon: "text-emerald-400", text: "text-emerald-300" },
  amber:   { bar: "bg-amber-500",   bg: "bg-amber-500/10",   border: "border-amber-500/20",   icon: "text-amber-400",   text: "text-amber-300" },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-[#080810] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ── En-tête ── */}
        <div className="mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            Mon expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Compétences techniques
          </h2>
          <p className="text-gray-400 max-w-xl text-base leading-relaxed">
            Une stack moderne orientée produit, du prototype au déploiement en production.
          </p>
        </div>

        {/* ── Grille des groupes ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {SKILL_GROUPS.map((group) => {
            const c = COLOR_MAP[group.color];
            return (
              <div
                key={group.category}
                className={`bg-[#0f0f18] border border-white/8 rounded-2xl p-6 flex flex-col gap-5 hover:border-white/15 transition-all duration-300`}
              >
                {/* Header groupe */}
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center ${c.icon}`}>
                    {group.icon}
                  </div>
                  <h3 className={`text-sm font-semibold ${c.text}`}>{group.category}</h3>
                </div>

                {/* Skills avec barres */}
                <div className="flex flex-col gap-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300 text-xs font-medium">{skill.name}</span>
                        <span className="text-gray-600 text-xs">{skill.level}%</span>
                      </div>
                      {/* Barre de progression */}
                      <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${c.bar} opacity-80`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Soft skills ── */}
        <div className="border-t border-white/8 pt-12">
          <h3 className="text-lg font-semibold text-white mb-6">
            Au-delà du code
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SOFT_SKILLS.map((s) => (
              <div
                key={s.label}
                className="flex items-start gap-3 p-4 rounded-xl bg-[#0f0f18] border border-white/8 hover:border-violet-500/20 transition-all duration-300 group"
              >
                <div className="mt-0.5 w-6 h-6 rounded-lg bg-violet-500/15 border border-violet-500/20 flex items-center justify-center shrink-0 group-hover:bg-violet-500/25 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{s.label}</p>
                  <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bannière apprentissage continu ── */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-violet-500/10 to-purple-500/5 border border-violet-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <p className="text-white text-sm font-semibold">Toujours en apprentissage</p>
              <p className="text-gray-400 text-xs mt-0.5">
                Actuellement : <span className="text-violet-300 font-medium">Docker · CI/CD · Stripe API · PayDunya</span>
              </p>
            </div>
          </div>
          <a
            href="https://codenakry.web.app"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-violet-500/30 bg-violet-500/10 hover:bg-violet-500/20 text-violet-300 text-xs font-medium transition-all"
          >
            Voir mon blog tech
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}