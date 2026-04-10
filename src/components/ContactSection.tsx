// components/ContactSection.tsx
// Portfolio Sadjo Wora — Section Contact + Footer
// Stack : Next.js 14 + Tailwind CSS
// Nécessite : npm install @emailjs/browser  OU utiliser un simple mailto fallback

"use client";

import { useState } from "react";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/Sadjowora",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/sadjowora",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Blog CodeNakry",
    href: "https://codenakry.web.app",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/351920287214",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

const CONTACT_REASONS = [
  { icon: "💼", label: "Projet freelance" },
  { icon: "🤝", label: "Opportunité d'emploi" },
  { icon: "🚀", label: "Collaboration SaaS" },
  { icon: "💬", label: "Simple discussion" },
];

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Envoi via mailto (fallback simple sans backend)
  // Pour un vrai envoi, intègre EmailJS ou Resend API
  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");

    const mailtoUrl = `mailto:geniewora@gmail.com?subject=${encodeURIComponent(
      form.subject || `Message de ${form.name}`
    )}&body=${encodeURIComponent(
      `Nom : ${form.name}\nEmail : ${form.email}\n\n${form.message}`
    )}`;

    window.location.href = mailtoUrl;

    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 800);
  };

  return (
    <>
      <section id="contact" className="bg-[#080810] py-24 px-6">
        <div className="max-w-6xl mx-auto">

          {/* ── En-tête ── */}
          <div className="mb-16">
            <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
              Travaillons ensemble
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Prenons contact
            </h2>
            <p className="text-gray-400 max-w-xl text-base leading-relaxed">
              Que ce soit pour un projet freelance, une opportunité d'emploi ou simplement
              échanger — je réponds à tous les messages.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* ── Colonne gauche : infos ── */}
            <div className="lg:col-span-2 flex flex-col gap-8">

              {/* Raisons de contact */}
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">
                  Je suis disponible pour
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {CONTACT_REASONS.map((r) => (
                    <div
                      key={r.label}
                      className="flex items-center gap-2.5 p-3.5 rounded-xl bg-[#0f0f18] border border-white/8 hover:border-violet-500/20 transition-all duration-200"
                    >
                      <span className="text-lg">{r.icon}</span>
                      <span className="text-gray-300 text-xs font-medium">{r.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coordonnées directes */}
              <div className="flex flex-col gap-3">
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">
                  Contact direct
                </p>
                <a
                  href="mailto:geniewora@gmail.com"
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#0f0f18] border border-white/8 hover:border-violet-500/30 transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Email</p>
                    <p className="text-white text-sm font-medium group-hover:text-violet-300 transition-colors">
                      geniewora@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/351920287214"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#0f0f18] border border-white/8 hover:border-emerald-500/30 transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">WhatsApp</p>
                    <p className="text-white text-sm font-medium group-hover:text-emerald-300 transition-colors">
                      +351 920 287 214
                    </p>
                  </div>
                </a>
              </div>

              {/* Réseaux sociaux */}
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">
                  Retrouve-moi sur
                </p>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={s.label}
                      className="w-10 h-10 rounded-xl bg-[#0f0f18] border border-white/8 flex items-center justify-center text-gray-400 hover:text-violet-400 hover:border-violet-500/30 hover:bg-violet-500/10 transition-all duration-200"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Colonne droite : formulaire ── */}
            <div className="lg:col-span-3">
              <div className="bg-[#0f0f18] border border-white/8 rounded-2xl p-8 flex flex-col gap-5">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Nom */}
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-400 text-sm font-medium">
                      Nom complet <span className="text-violet-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5 transition-all duration-200"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-400 text-sm font-medium">
                      Email <span className="text-violet-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Sujet */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-400 text-sm font-medium">Sujet</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Ex: Projet freelance Next.js"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5 transition-all duration-200"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-400 text-sm font-medium">
                    Message <span className="text-violet-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Décrivez votre projet, vos besoins, ou simplement dites bonjour..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5 transition-all duration-200 resize-none"
                  />
                </div>

                {/* Bouton envoi */}
                <button
                  onClick={handleSubmit}
                  disabled={status === "sending" || !form.name || !form.email || !form.message}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-violet-500/30"
                >
                  {status === "sending" ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Envoi en cours...
                    </>
                  ) : status === "success" ? (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Message envoyé !
                    </>
                  ) : (
                    <>
                      Envoyer le message
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>

                {status === "success" && (
                  <p className="text-center text-emerald-400 text-sm">
                    Merci ! Je te répondrai dans les plus brefs délais. 🙏
                  </p>
                )}

                <p className="text-center text-gray-600 text-xs">
                  Ou contacte-moi directement sur{" "}
                  <a href="mailto:geniewora@gmail.com" className="text-violet-400 hover:text-violet-300 transition-colors">
                    geniewora@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#060609] border-t border-white/8 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Logo + copyright */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center">
                <span className="text-white font-bold text-xs">S</span>
              </div>
              <span className="text-white font-semibold text-sm">
                Sadjo<span className="text-violet-400">.</span>dev
              </span>
            </div>
            <p className="text-gray-600 text-xs">
              © {new Date().getFullYear()} Mamadu Sadjo Djalo. Tous droits réservés.
            </p>
          </div>

          {/* Liens rapides */}
          <div className="flex items-center gap-6 text-xs text-gray-500">
            {["Projets", "Compétences", "À propos", "Contact"].map((label) => (
              <a
                key={label}
                href={`#${label === "À propos" ? "about" : label === "Compétences" ? "skills" : label.toLowerCase()}`}
                className="hover:text-violet-400 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Réseaux */}
          <div className="flex gap-3">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-gray-500 hover:text-violet-400 hover:border-violet-500/30 transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}