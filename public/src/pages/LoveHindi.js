import React from "react";
import { motion } from "framer-motion";

export default function LoveHindi() {
  return (
    <motion.section className="page" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
      <h2>My Love (Hindi - Romanized)</h2>
      <p style={{maxWidth:800, margin:"12px auto"}}>
        Suhasini, teri muskaan mere jeevan ka ujala hai,
          jaise andheri raat mein ek amar deepak jagata hai. 
          Teri aankhon mein chhupa hai ek shant aur 
          gehra sa samundar, jisme doob jaane par har 
            dard aur gham dhool ki tarah udd jaata hai. 
              Teri baaton ka jaadu mere hriday ke taaron ko chhu kar ek madhur sangeet banata hai,
              aur har dhadkan bas tera naam japti rehti hai. 
              Suhasini, tu sirf ek naam nahi, ek roshni aur adhyatmikta ka sansaar hai,
              jo mujhe har pal prem aur shanti ka anubhav karata hai.
              Tere saath gujare har lamhe ki yaadein mere jeevan ki sabse khubsurat kavita hain, 
              aur teri har muskaan meri atma ko nayi urja aur aastha se bhar deti hai. 
              Tere preet ke is samudra mein main apni poori aatma ko samarpit kar deta hoon, 
              jaise koi shishya apne guru ke charanon mein. 
              Suhasini, tu meri anant zindgani ka prateek hai,
              aur teri upasthiti mere jeevan ke har kshan ko divya aur amritmay bana deti hai.
      </p>
    </motion.section>
  );
                                                                                   }
