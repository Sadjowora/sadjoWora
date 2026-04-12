// pages/index.jsx
// Portfolio Sadjo Wora — Page principale avec SEO complet

import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from '../components/ContactSection';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        {/* ── Titre & description ── */}
        <title>Mamadu Sadjo Djalo — Développeur React / Next.js & Builder SaaS</title>
        <meta
          name="description"
          content="Développeur web et mobile basé en Guinée Conakry. Je conçois des applications React, Next.js et React Native pour le marché ouest-africain — du MVP au SaaS."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Mamadu Sadjo Djalo" />
        <meta
          name="keywords"
          content="développeur web Guinée, React, Next.js, React Native, Supabase, SaaS Afrique, freelance Conakry, Sadjo Djalo, Lisbonne, portugal"
        />

        {/* ── Open Graph (LinkedIn, Facebook, WhatsApp) ── */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sadjowora.vercel.app" />
        <meta
          property="og:title"
          content="Mamadu Sadjo Djalo — Développeur React / Next.js & Builder SaaS"
        />
        <meta
          property="og:description"
          content="Développeur web et mobile basé en Guinée. Je construis des produits digitaux pour l'Afrique de l'Ouest avec React, Next.js et React Native."
        />
        <meta
          property="og:image"
          content="https://sadjowora.vercel.app/images/profile.jpg"
        />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Sadjo.dev" />

        {/* ── Twitter Card ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mamadu Sadjo Djalo — Développeur React / Next.js"
        />
        <meta
          name="twitter:description"
          content="Développeur web et mobile basé en Guinée. React, Next.js, React Native."
        />
        <meta
          name="twitter:image"
          content="https://sadjowora.vercel.app/images/profile.jpg"
        />

        {/* ── Favicon ── */}{/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
         <link rel="apple-touch-icon" href="/favicon.svg" />

        {/* ── Canonical ── */}
        <link rel="canonical" href="https://sadjowora.vercel.app" />
      </Head>

      <div>
        <section id="home">
          <HeroSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </div>
    </>
  );
};

export default Home;