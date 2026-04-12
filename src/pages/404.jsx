// pages/404.jsx
// Portfolio Sadjo Wora — Page 404 personnalisée

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function NotFound() {
  const router = useRouter();
  const [count, setCount] = useState(10);

  // Compte à rebours → redirige vers l'accueil
  useEffect(() => {
    if (count <= 0) {
      router.push("/");
      return;
    }
    const timer = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [count, router]);

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-6 relative overflow-hidden">

      {/* Fond décoratif */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#a78bfa 1px, transparent 1px), linear-gradient(90deg, #a78bfa 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 text-center flex flex-col items-center gap-8 max-w-lg">

        {/* 404 géant */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <p className="text-[10rem] font-bold leading-none text-transparent bg-clip-text bg-linear-to-br from-violet-400 to-purple-600 select-none">
            404
          </p>
          <div className="absolute inset-0 text-[10rem] font-bold leading-none text-violet-500/10 blur-2xl select-none">
            404
          </div>
        </motion.div>

        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-3"
        >
          <h1 className="text-2xl font-bold text-white">
            Page introuvable
          </h1>
          <p className="text-gray-400 text-base leading-relaxed">
            Cette page n'existe pas ou a été déplacée.
            Tu seras redirigé vers l'accueil dans{" "}
            <span className="text-violet-400 font-semibold">{count}</span> seconde{count > 1 ? "s" : ""}.
          </p>
        </motion.div>

        {/* Barre de progression */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-full max-w-xs h-1 rounded-full bg-white/10 overflow-hidden"
        >
          <motion.div
            className="h-full rounded-full bg-linear-to-r from-violet-500 to-purple-400"
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 10, ease: "linear" }}
          />
        </motion.div>

        {/* Boutons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.button
            onClick={() => router.push("/")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-violet-500/20"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Retour à l'accueil
          </motion.button>

          <motion.button
            onClick={() => router.push("/#contact")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:border-violet-500/40 bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-all"
          >
            Me contacter
          </motion.button>
        </motion.div>

        {/* Logo bas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-2 mt-4"
        >
          <div className="w-6 h-6 rounded-md bg-linear-to-br from-violet-500 to-purple-700 flex items-center justify-center">
            <span className="text-white font-bold text-xs">S</span>
          </div>
          <span className="text-gray-600 text-sm">
            Sadjo<span className="text-violet-500">.</span>dev
          </span>
        </motion.div>
      </div>
    </div>
  );
}