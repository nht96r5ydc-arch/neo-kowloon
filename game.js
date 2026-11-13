const B_DEF = [
  {id:'hq',n:'1. QG Tactique',d:'Débloque héros.',c:120},
  {id:'forge',n:'2. Forge Plasma',d:'+12% ATQ/niv.',c:150},
  {id:'clinic',n:'3. Cyber-Clinique',d:'+15% PV/niv.',c:150},
  {id:'market',n:'4. Marché Noir',d:'+60 ⚡ passif.',c:100},
  {id:'reactor',n:'5. Réacteur',d:'+10% ⚡ combat.',c:180},
  {id:'radar',n:'6. Tour Radar',d:'+2% Critique.',c:200},
  {id:'genlab',n:'7. Labo Génétique',d:'Débloque mutants.',c:220},
  {id:'arena',n:'8. Arène',d:'+15% gain Finish.',c:240},
  {id:'drones',n:'9. Usine Drones',d:'Débloque robots.',c:260},
  {id:'bank',n:'10. Banque',d:'+100 ⚡ passif.',c:300},
  {id:'temple',n:'11. Temple Néon',d:'Débloque ninjas.',c:350},
  {id:'orbital',n:'12. Bastion',d:'+20% stats Boss.',c:500}
];

const H_DAT = [
  {id:'h1',n:'Kael',ic:'🥷',b:'hq',l:1,hp:130,atk:25,sk:'Surcharge x2.2',tp:'b',ft:'PIRATAGE CÉRÉBRAL',fd:'Kael grille les circuits ennemis !'},
  {id:'h2',n:'Valkyrie',ic:'🦾',b:'hq',l:2,hp:180,atk:32,sk:'Frappe+Bouclier',tp:'s',ft:'JUGEMENT CÉLESTE',fd:'Rayon laser orbital au ralenti !'},
  {id:'h3',n:'Dr. Nova',ic:'🧬',b:'clinic',l:2,hp:165,atk:29,sk:'Nano-Soin 45%',tp:'h',ft:'VIRUS NÉCROTIQUE',fd:'Nanorobots dissolvant l\'armure !'},
  {id:'h4',n:'Jax Pyro',ic:'🔥',b:'forge',l:2,hp:190,atk:38,sk:'Lance-Flammes',tp:'b',ft:'SUPERNOVA',fd:'Explosion solaire calcinant l\'arène !'},
  {id:'h5',n:'Echo Sniper',ic:'🎯',b:'radar',l:2,hp:160,atk:44,sk:'Tir Perforant',tp:'b',ft:'BALLE FANTÔME',fd:'Pulvérise le cœur du robot !'},
  {id:'h6',n:'Tank-09',ic:'🛡️',b:'clinic',l:3,hp:280,atk:34,sk:'Forteresse',tp:'s',ft:'ÉCRASEMENT TITAN',fd:'Coup de marteau sismique !'},
  {id:'h7',n:'Viper',ic:'🐍',b:'genlab',l:2,hp:210,atk:46,sk:'Venin + Drain',tp:'h',ft:'MORSURE ACIDE',fd:'Tranche la cible en éclats néon !'},
  {id:'h8',n:'Spark',ic:'🤖',b:'drones',l:2,hp:220,atk:48,sk:'Essaim Drones',tp:'b',ft:'APOCALYPSE DRONES',fd:'50 drones kamikazes explosent !'},
  {id:'h9',n:'Zero Ninja',ic:'⚔️',b:'temple',l:2,hp:240,atk:58,sk:'Katana Plasma',tp:'b',ft:'COUPE DIMENSIONNELLE',fd:'Découpe l\'ennemi d\'un coup de katana !'},
  {id:'h10',n:'Aegis',ic:'⚡',b:'hq',l:4,hp:320,atk:52,sk:'Onde Divine',tp:'s',ft:'COLÈRE DE ZEUS',fd:'Un éclair vaporise l\'adversaire !'},
  {id:'h11',n:'Nyx Ombre',ic:'🦇',b:'market',l:4,hp:260,atk:65,sk:'Assassinat',tp:'b',ft:'EXÉCUTION OMBRE',fd:'Transperce le noyau énergétique !'},
  {id:'h12',n:'Atlas Méca',ic:'🚀',b:'drones',l:4,hp:380,atk:68,sk:'24 Missiles',tp:'b',ft:'PLUIE D\'ACIER',fd:'24 missiles réduisent la cible en poussière !'},
  {id:'h13',n:'Sera Chrono',ic:'⏳',b:'genlab',l:4,hp:290,atk:72,sk:'Distorsion',tp:'h',ft:'PARADOXE TEMPOREL',fd:'Fige le temps et frappe 100 fois !'},
  {id:'h14',n:'Kratos-X',ic:'🪓',b:'arena',l:4,hp:410,atk:82,sk:'Rage Cyber',tp:'b',ft:'FURIE SANGLANTE',fd:'Uppercut supersonique !'},
  {id:'h15',n:'Kenji Ronin',ic:'👺',b:'temple',l:4,hp:360,atk:95,sk:'Dragon Néon',tp:'b',ft:'SOUFFLE DU DRAGON',fd:'Dragon d\'énergie engloutissant l\'ennemi !'},
  {id:'h16',n:'Prime Élu',ic:'👑',b:'orbital',l:3,hp:500,atk:115,sk:'Singularité',tp:'b',ft:'BIG BANG',fd:'Trou noir miniature désintégrant la cible !'}
];

const BO_DAT = [
  {id:'b1',n:'BOSS 1: Cerbère',ic:'🐕',st:3,co:20,hp:300,atk:55,sk:'Morsure Feu',tp:'b',ft:'DÉCHIREMENT',fd:'Broie l\'ennemi !'},
  {id:'b2',n:'BOSS 2: Titan-X',ic:'🤖',st:6,co:30,hp:380,atk:68,sk:'Canon Nucléaire',tp:'b',ft:'RAYON ATOMIQUE',fd:'Faisceau atomique !'},
  {id:'b3',n:'BOSS 3: Méduse',ic:'👾',st:9,co:40,hp:440,atk:78,sk:'Drainage Vital',tp:'h',ft:'TEMPÊTE ÉLECTRIQUE',fd:'Électrocute la cible !'},
  {id:'b4',n:'BOSS 4: Goliath',ic:'🦾',st:12,co:50,hp:550,atk:85,sk:'Bouclier Acier',tp:'s',ft:'CHARGE DE BÉLIER',fd:'Impact à Mach 2 !'},
  {id:'b5',n:'BOSS 5: Arachno',ic:'🕷️',st:15,co:60,hp:520,atk:98,sk:'Toile Laser',tp:'b',ft:'PIÈGE MORTEL',fd:'Lasers coupants !'},
  {id:'b6',n:'BOSS 6: Valkyrie N',ic:'🦅',st:18,co:70,hp:600,atk:110,sk:'Plongeon Fatal',tp:'b',ft:'CHUTE MÉTÉORE',fd:'Cratère géant !'},
  {id:'b7',n:'BOSS 7: Kraken',ic:'🐙',st:21,co:80,hp:720,atk:118,sk:'Soin Abyssal',tp:'h',ft:'BROYAGE ABYSSAL',fd:'Pression hydraulique !'},
  {id:'b8',n:'BOSS 8: Oni',ic:'👹',st:24,co:90,hp:680,atk:135,sk:'Lame Maudite',tp:'b',ft:'JUGEMENT D\'ONI',fd:'Sabre enflammé !'},
  {id:'b9',n:'BOSS 9: Hydra',ic:'🐉',st:27,co:100,hp:800,atk:145,sk:'Triple Plasma',tp:'b',ft:'TRINITÉ INFERNALE',fd:'Trois rayons fusionnés !'},
  {id:'b10',n:'BOSS 10: Spectre',ic:'👻',st:30,co:115,hp:780,atk:160,sk:'Phase Mortelle',tp:'b',ft:'EFFACEMENT',fd:'Suppression totale !'},
  {id:'b11',n:'BOSS 11: Léviathan',ic:'🦈',st:33,co:130,hp:950,atk:170,sk:'Armure Réactive',tp:'s',ft:'RAZ-DE-MARÉE',fd:'Broie l\'adversaire !'},
  {id:'b12',n:'BOSS 12: Némésis',ic:'☣️',st:36,co:145,hp:920,atk:190,sk:'Toxine',tp:'h',ft:'CONTAMINATION',fd:'Onde bio-plasma !'},
  {id:'b13',n:'BOSS 13: Chronos',ic:'⚙️',st:39,co:160,hp:1050,atk:210,sk:'Arrêt Temps',tp:'b',ft:'FIN DES TEMPS',fd:'Réduit en poussière !'},
  {id:'b14',n:'BOSS 14: Shogun',ic:'🏯',st:42,co:180,hp:1150,atk:235,sk:'Armée Fantôme',tp:'b',ft:'CHARGE IMPÉRIALE',fd:'Mille guerriers !'},
  {id:'b15',n:'BOSS 15: Archonte',ic:'☀️',st:45,co:200,hp:1300,atk:260,sk:'Éruption',tp:'s',ft:'CŒUR D\'ÉTOILE',fd:'Soleil miniature !'},
  {id:'b16',n:'BOSS 16: DIEU ROBOT',ic:'👁️',st:48,co:250,hp:1600,atk:320,sk:'Apocalypse',tp:'b',ft:'GENÈSE FINALE',fd:'Réécrit la réalité !'}
];

let df = {};
B_DEF.forEach(x => df[x.id] = 1);

let S = JSON.parse(localStorage.getItem('nkSave')) || {
  cr: 300, cy: 10, na: false, st: 1, sel: 'h1', b: df, ob: [], db: []
};

const u = new URLSearchParams(location.search).get('unlock');
if (u) {
  if (u === 'nopub') S.na = true;
  if (u === 'c150') S.cy += 150;
  if (u === 'mega') { S.cr += 25000; S.cy += 80; }
  if (u.startsWith('b') && !S.ob.includes(u)) { S.ob.push(u); S.sel = u; }
  history.replaceState({}, '', location.pathname);
}

function sv() {
  localStorage.setItem('nkSave', JSON.stringify(S));
  ren();
}

let rTab = 'h';
function setTab(t) {
  rTab = t;
  document.getElementById('t-h').classList.toggle('active', t === 'h');
  document.getElementById('t-b').classList.toggle('active', t === 'b');
  renR();
}

function go(v, el) {
  document.querySelectorAll('.sec').forEach(x => x.classList.remove('active'));
  document.querySelectorAll('.nbtn').forEach(x => x.classList.remove('active'));
  document.getElementById('v-' + v).classList.add('active');
  el.classList.add('active');
  if (v === 'com') initC();
}

function ren() {
  document.getElementById('u-cr').innerText = S.cr;
  document.getElementById('u-cy').innerText = S.cy;
  document.getElementById('stg').innerText = S.st;
  document.getElementById('rate').innerText = ((S.b.market || 1) * 60) + ((S.b.bank || 1) * 100) - 60;
  if (S.na) {
    document.getElementById('ban').style.display = 'none';
    document.getElementById('iad').style.display = 'none';
    document.getElementById('vip').style.display = 'inline-block';
  }
  const g = document.getElementById('b-grid');
  g.innerHTML = '';
  B_DEF.forEach(x => {
    const l = S.b[x.id] || 1, c = l * x.c;
    g.innerHTML += `<div class="card"><div><h3>${x.n} <span style="color:var(--cyan)">Nv.${l}</span></h3><p>${x.d}</p></div><button class="btn ${S.cr >= c ? 'c-cyan' : 'c-off'}" onclick="upB('${x.id}',${c})">Améliorer (${c} ⚡)</button></div>`;
  });
  renR();
}

function upB(id, c) {
  if (S.cr < c) return alert('Crédits insuffisants');
  S.cr -= c;
  S.b[id] = (S.b[id] || 1) + 1;
  sv();
}

function col() {
  const g = ((S.b.market || 1) * 60) + ((S.b.bank || 1) * 100) - 60;
  S.cr += g;
  alert('+' + g + ' ⚡');
  sv();
}

function gst(id) {
  let f = H_DAT.find(x => x.id === id) || BO_DAT.find(x => x.id === id) || H_DAT[0];
  const m = f.id.startsWith('b') ? (1 + ((S.b.orbital || 1) - 1) * 0.2) : 1;
  return {
    ...f,
    fhp: Math.round(f.hp * (1 + ((S.b.clinic || 1) - 1) * 0.15) * m),
    fatk: Math.round(f.atk * (1 + ((S.b.forge || 1) - 1) * 0.12) * m),
    crit: Math.min(75, 20 + ((S.b.radar || 1) - 1) * 2)
  };
}

function renR() {
  const l = document.getElementById('r-list');
  l.innerHTML = '';
  if (rTab === 'h') {
    H_DAT.forEach(h => {
      const s = gst(h.id), ok = (S.b[h.b] || 1) >= h.l, sl = S.sel === h.id;
      const bo = B_DEF.find(x => x.id === h.b), bn = bo ? bo.n.substring(3) : h.b;
      const ac = ok
        ? `<button class="btn ${sl ? 'c-yel' : 'c-cyan'}" onclick="S.sel='${h.id}';sv()">${sl ? 'Équipé' : 'Choisir'}</button>`
        : `<small style="text-align:center">Requis:<br>${bn} Nv.${h.l}</small>`;
      l.innerHTML += `<div class="rcard"><div class="ico">${h.ic}</div><div class="inf"><h4>${h.n}</h4><span>${h.sk}</span><small>PV:${s.fhp} | ATQ:${s.fatk}</small></div><div class="act">${ac}</div></div>`;
    });
  } else {
    BO_DAT.forEach(b => {
      const s = gst(b.id), ow = S.ob.includes(b.id), dfb = S.db.includes(b.id), sl = S.sel === b.id;
      let ac = `<small style="color:var(--pink);text-align:center">Vaincre<br>Secteur ${b.st}</small>`;
      if (ow) ac = `<button class="btn ${sl ? 'c-yel' : 'c-cyan'}" onclick="S.sel='${b.id}';sv()">${sl ? 'Équipé' : 'Choisir'}</button>`;
      else if (dfb) ac = `<button class="btn c-pink" onclick="buyB('${b.id}',${b.co})">${b.co} 💎</button><button class="btn c-yel" onclick="pay('${b.id}')">3,99 €</button>`;
      l.innerHTML += `<div class="rcard boss"><div class="ico">${b.ic}</div><div class="inf"><h4>${b.n}</h4><span>${b.sk}</span><small>PV:${s.fhp} | ATQ:${s.fatk}</small></div><div class="act">${ac}</div></div>`;
    });
  }
}

function buyB(id, c) {
  if (S.cy < c) return alert('Cristaux insuffisants');
  S.cy -= c;
  S.ob.push(id);
  S.sel = id;
  sv();
}

function pay(sl) {
  location.href = 'https://stripe.com_' + sl.toUpperCase();
}

let C = {};
function initC() {
  const f = gst(S.sel);
  C = { f, php: f.fhp, pm: f.fhp, patk: f.fatk, cr: f.crit, cd: 0, bo: BO_DAT.find(x => x.st === S.st) || null };
  if (C.bo) {
