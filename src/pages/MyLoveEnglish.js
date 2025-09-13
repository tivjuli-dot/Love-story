import React from "react";
import { motion } from "framer-motion";

export default function LoveEnglish() {
  return (
    <motion.section className="page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
      <h2>My Love in English</h2>
      <p style={{maxWidth:800, margin:"12px auto"}}>
        From the depths of my soul, I know Shiropa is my eternal light.
        Her smile washes away every sorrow; her presence sets the rhythm of my heart.
        I love her beyond words, beyond time — today, tomorrow and for always.
      </p>
    </motion.section>
  );
}
