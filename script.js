// Floating hearts + typing + simple scroll reveal

/* ---------- floating hearts ---------- */
(function makeHearts(){
  const container = document.getElementById('hearts-container');
  const total = 18;
  for(let i=0;i<total;i++){
    const d = document.createElement('div');
    d.className = 'heart';
    const left = Math.random()*100;
    const size = 12 + Math.random()*18;
    d.style.left = left + 'vw';
    d.style.width = size + 'px';
    d.style.height = size + 'px';
    d.style.top = (90 + Math.random()*20) + 'vh'; // start from bottom area
    d.style.opacity = 0.9 - Math.random()*0.4;
    const dur = 6 + Math.random()*6;
    d.style.animation = `floatUp ${dur}s linear ${Math.random()*3}s forwards`;
    container.appendChild(d);
    // remove after animation to keep DOM light
    setTimeout(()=> d.remove(), (dur+3)*1000);
    // spawn more continuously
    setInterval(()=>{
      if (!document.body.contains(d)) {
        const nd = d.cloneNode(true);
        nd.style.left = Math.random()*100 + 'vw';
        nd.style.top = (90 + Math.random()*10) + 'vh';
        nd.style.animation = `floatUp ${6+Math.random()*6}s linear 0s forwards`;
        container.appendChild(nd);
        setTimeout(()=> nd.remove(), (10+Math.random()*8)*1000);
      }
    }, 5000 + Math.random()*4000);
  }
})();

/* ---------- typing effect (loop) ---------- */
(function typeLoop(){
  const el = document.getElementById('typing');
  const texts = ["Our Journey of Love 💕","From First Sight to Forever ❤️","Shiropa ও Supto — Forever"];
  let i=0, pos=0, forward=true;
  function tick(){
    const txt = texts[i];
    if(forward){
      pos++;
      el.textContent = txt.slice(0,pos);
      if(pos===txt.length){ forward=false; setTimeout(tick,1200); return }
    } else {
      pos--;
      el.textContent = txt.slice(0,pos);
      if(pos===0){ forward=true; i=(i+1)%texts.length; setTimeout(tick,300); return }
    }
    setTimeout(tick, 70);
  }
  tick();
})();

/* ---------- simple scroll reveal ---------- */
(function revealOnScroll(){
  const items = document.querySelectorAll('.event, .grid img');
  function check(){
    const vh = window.innerHeight;
    items.forEach(it=>{
      const r = it.getBoundingClientRect();
      if(r.top < vh - 60){
        it.classList.add('visible');
      }
    });
  }
  items.forEach(it=>it.classList.add('reveal'));
  window.addEventListener('scroll', check);
  window.addEventListener('load', check);
})();
