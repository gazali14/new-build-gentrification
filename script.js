/* ═══════════════════════════════════════════════════════════
   JAKARTA BERGERAK — Modern Web Story JS
   Cinematic · Interactive · Surprising
   ═══════════════════════════════════════════════════════════ */

"use strict";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const PREDICTION_DATA = [
  { kecamatan:"SETIA BUDI",       prob:0.6959, mc_median:0.6614, mc_min:0.4614, mc_max:0.7928, kategori:"Sangat Tinggi" },
  { kecamatan:"MENTENG",          prob:0.6138, mc_median:0.5882, mc_min:0.4437, mc_max:0.7525, kategori:"Sangat Tinggi" },
  { kecamatan:"GAMBIR",           prob:0.5582, mc_median:0.5556, mc_min:0.3133, mc_max:0.7480, kategori:"Sangat Tinggi" },
  { kecamatan:"KEBAYORAN BARU",   prob:0.5421, mc_median:0.5304, mc_min:0.3510, mc_max:0.7406, kategori:"Sangat Tinggi" },
  { kecamatan:"KELAPA GADING",    prob:0.5094, mc_median:0.5130, mc_min:0.3530, mc_max:0.7033, kategori:"Sangat Tinggi" },
  { kecamatan:"TANAH ABANG",      prob:0.4799, mc_median:0.5020, mc_min:0.2849, mc_max:0.6846, kategori:"Tinggi" },
  { kecamatan:"JATINEGARA",       prob:0.4490, mc_median:0.4302, mc_min:0.2012, mc_max:0.6298, kategori:"Tinggi" },
  { kecamatan:"CAKUNG",           prob:0.4443, mc_median:0.3662, mc_min:0.0898, mc_max:0.5929, kategori:"Tinggi" },
  { kecamatan:"PADEMANGAN",       prob:0.4377, mc_median:0.4580, mc_min:0.1584, mc_max:0.6352, kategori:"Tinggi" },
  { kecamatan:"TANJUNG PRIOK",    prob:0.4316, mc_median:0.3805, mc_min:0.1958, mc_max:0.6091, kategori:"Tinggi" },
  { kecamatan:"SENEN",            prob:0.4191, mc_median:0.4147, mc_min:0.1958, mc_max:0.6398, kategori:"Tinggi" },
  { kecamatan:"KEBON JERUK",      prob:0.4154, mc_median:0.3754, mc_min:0.2027, mc_max:0.5946, kategori:"Tinggi" },
  { kecamatan:"MAMPANG PRAPATAN", prob:0.3999, mc_median:0.3982, mc_min:0.0395, mc_max:0.6462, kategori:"Tinggi" },
  { kecamatan:"GROGOL PETAMBURAN",prob:0.3866, mc_median:0.3771, mc_min:0.2043, mc_max:0.5222, kategori:"Tinggi" },
  { kecamatan:"PENJARINGAN",      prob:0.3733, mc_median:0.4043, mc_min:0.1706, mc_max:0.6166, kategori:"Tinggi" },
  { kecamatan:"KEMAYORAN",        prob:0.3719, mc_median:0.4150, mc_min:0.2040, mc_max:0.5917, kategori:"Tinggi" },
  { kecamatan:"CILANDAK",         prob:0.3694, mc_median:0.3783, mc_min:0.0374, mc_max:0.6112, kategori:"Tinggi" },
  { kecamatan:"PULO GADUNG",      prob:0.3481, mc_median:0.3076, mc_min:0.1088, mc_max:0.5146, kategori:"Sedang" },
  { kecamatan:"KEMBANGAN",        prob:0.3415, mc_median:0.3197, mc_min:0.0286, mc_max:0.5758, kategori:"Sedang" },
  { kecamatan:"JOHAR BARU",       prob:0.3394, mc_median:0.3849, mc_min:0.2040, mc_max:0.5591, kategori:"Sedang" },
  { kecamatan:"TEBET",            prob:0.3365, mc_median:0.3401, mc_min:0.2113, mc_max:0.5007, kategori:"Sedang" },
  { kecamatan:"PALMERAH",         prob:0.3327, mc_median:0.3779, mc_min:0.2140, mc_max:0.5388, kategori:"Sedang" },
  { kecamatan:"TAMAN SARI",       prob:0.3249, mc_median:0.3817, mc_min:0.2228, mc_max:0.5605, kategori:"Sedang" },
  { kecamatan:"MATRAMAN",         prob:0.3211, mc_median:0.3379, mc_min:0.1713, mc_max:0.5103, kategori:"Sedang" },
  { kecamatan:"SAWAH BESAR",      prob:0.3069, mc_median:0.3404, mc_min:0.1740, mc_max:0.5278, kategori:"Sedang" },
  { kecamatan:"CEMPAKA PUTIH",    prob:0.3044, mc_median:0.3478, mc_min:0.1903, mc_max:0.5307, kategori:"Sedang" },
  { kecamatan:"KEBAYORAN LAMA",   prob:0.2888, mc_median:0.2786, mc_min:0.0631, mc_max:0.4621, kategori:"Sedang" },
  { kecamatan:"KOJA",             prob:0.2861, mc_median:0.2796, mc_min:0.0296, mc_max:0.4786, kategori:"Sedang" },
  { kecamatan:"PASAR MINGGU",     prob:0.2784, mc_median:0.2582, mc_min:0.0431, mc_max:0.5041, kategori:"Sedang" },
  { kecamatan:"PANCORAN",         prob:0.2675, mc_median:0.2344, mc_min:0.0331, mc_max:0.4191, kategori:"Sedang" },
  { kecamatan:"TAMBORA",          prob:0.2662, mc_median:0.2844, mc_min:0.0471, mc_max:0.5205, kategori:"Sedang" },
  { kecamatan:"CENGKARENG",       prob:0.2040, mc_median:0.1817, mc_min:0.0200, mc_max:0.3623, kategori:"Sedang" },
  { kecamatan:"MAKASAR",          prob:0.1955, mc_median:0.2376, mc_min:0.0299, mc_max:0.4950, kategori:"Rendah" },
  { kecamatan:"KRAMAT JATI",      prob:0.1752, mc_median:0.2005, mc_min:0.0497, mc_max:0.3869, kategori:"Rendah" },
  { kecamatan:"CILINCING",        prob:0.1635, mc_median:0.2144, mc_min:0.0402, mc_max:0.4225, kategori:"Rendah" },
  { kecamatan:"JAGAKARSA",        prob:0.1546, mc_median:0.1746, mc_min:0.0000, mc_max:0.3866, kategori:"Rendah" },
  { kecamatan:"DUREN SAWIT",      prob:0.1339, mc_median:0.1846, mc_min:0.0195, mc_max:0.3878, kategori:"Rendah" },
  { kecamatan:"KALI DERES",       prob:0.1293, mc_median:0.1964, mc_min:0.0196, mc_max:0.3760, kategori:"Rendah" },
  { kecamatan:"CIRACAS",          prob:0.1129, mc_median:0.1099, mc_min:0.0088, mc_max:0.2573, kategori:"Rendah" },
  { kecamatan:"CIPAYUNG",         prob:0.0926, mc_median:0.1121, mc_min:0.0200, mc_max:0.2551, kategori:"Rendah" },
  { kecamatan:"PESANGGRAHAN",     prob:0.0831, mc_median:0.1075, mc_min:0.0000, mc_max:0.2807, kategori:"Rendah" },
  { kecamatan:"PASAR REBO",       prob:0.0740, mc_median:0.1078, mc_min:0.0000, mc_max:0.2425, kategori:"Rendah" },
];

const FEATURE_IMPORTANCE = [
  { label:"Night-Time Light (NTL)",    pct:28.15, top:true  },
  { label:"Land Surface Temp (LST)",   pct:13.61, top:true  },
  { label:"SKTM (Kemiskinan)",         pct:10.05, top:true  },
  { label:"Kepadatan Penduduk",        pct:9.24,  top:true  },
  { label:"Bangunan Kumuh",            pct:6.22,  top:false },
  { label:"NDBI (Built-up Index)",     pct:5.51,  top:false },
  { label:"Densitas Transportasi",     pct:5.49,  top:false },
  { label:"Densitas Pendidikan",       pct:4.95,  top:false },
  { label:"Densitas Komersial",        pct:4.06,  top:false },
  { label:"Densitas Kesehatan",        pct:3.69,  top:false },
  { label:"Hunian Vertikal",           pct:3.57,  top:false },
  { label:"Vegetasi (NDVI)",           pct:3.46,  top:false },
  { label:"Lokasi Kumuh",              pct:2.00,  top:false },
];

const RISK_COLORS = {
  "Sangat Tinggi": "#ff2020",
  "Tinggi":        "#ff6820",
  "Sedang":        "#ffaa20",
  "Rendah":        "#2090ff",
};

const VAR_PILLS = [
  { label:"NTL",               top:true  },
  { label:"LST",               top:true  },
  { label:"SKTM",              top:true  },
  { label:"Kepadatan Penduduk",top:true  },
  { label:"NDBI",              top:false },
  { label:"Densitas Transportasi", top:false },
  { label:"Densitas Pendidikan",   top:false },
  { label:"Densitas Komersial",    top:false },
  { label:"Densitas Kesehatan",    top:false },
  { label:"Hunian Vertikal",       top:false },
  { label:"NDVI",                  top:false },
  { label:"Lokasi Kumuh",          top:false },
  { label:"Bangunan Kumuh",        top:false },
];

const TIMELINE_DATA = [
  {
    title: "Jakarta dirancang hanya untuk 300 ribu jiwa",
    body:  "Pemerintah kolonial Belanda merancang Batavia untuk ~300 ribu jiwa. Urbanisasi pasca kemerdekaan mengubah segalanya — kota meledak di luar kendali. Tekanan ruang yang dirasakan hari ini berakar dari miskonfigurasi kapasitas historis ini. Pada 1970, Jakarta sudah dihuni 4,7 juta jiwa — 15× kapasitas desain."
  },
  {
    title: "Boom hunian vertikal pertama",
    body:  "Dekade 1990-an menandai era pertama pembangunan apartemen dan kondominium premium di Jakarta, terutama di kawasan Sudirman dan Kuningan. Krisis moneter 1997-98 sempat menghentikan momentum, namun fondasi pola new-build gentrification sudah tertanam."
  },
  {
    title: "Era pembangunan masif: 119 gedung baru",
    body:  "Dekade 2010-an mencatat 119 hunian vertikal baru — pertumbuhan terbesar dalam sejarah Jakarta. Koridor Thamrin, Gatot Subroto, Kemang, dan Kelapa Gading menjadi pusat konsentrasi. Nilai NJOP melonjak tajam. Tekanan displacement mulai terasa di lapangan."
  },
  {
    title: "MRT Jakarta beroperasi — aksesibilitas berubah total",
    body:  "Operasional MRT (2019) dan perluasan LRT & BRT mengubah peta aksesibilitas Jakarta secara fundamental. Teori rent gap Smith (1979) bekerja nyata: kawasan dekat stasiun mengalami kenaikan nilai lahan tajam, memicu gelombang baru reinvestasi dan displacement yang terakselerasi."
  },
  {
    title: "2024: Titik kritis — 395.298 jiwa meninggalkan Jakarta",
    body:  "Data Disdukcapil DKI 2024 mencatat arus keluar 395.298 jiwa vs. 84.783 jiwa masuk (rasio 4,66×). Pola demografis: keluarga pergi, lajang muda datang. Ini bukan sekadar migrasi — ini displacement terstruktur yang kini dapat diprediksi dan dipetakan dengan machine learning."
  },
];

const EASTER_EGGS = {
  "auc":          { title:"AUC Score 95.1%", body:"Area Under the ROC Curve: ukuran kemampuan model membedakan kecamatan berisiko vs tidak. Nilai 0.951 berarti model benar 95.1% dari semua perbandingan pasangan data. Ini sangat tinggi — memvalidasi bahwa Random Forest layak jadi instrumen prediksi kebijakan." },
  "kec":          { title:"42 Kecamatan", body:"DKI Jakarta memiliki 44 kecamatan, namun 2 kecamatan di Kepulauan Seribu dikeluarkan karena karakteristik yang sangat berbeda (pulau, bukan daratan urban). Analisis berfokus pada 42 kecamatan daratan untuk konsistensi." },
  "mc":           { title:"Monte Carlo 200×", body:"Karena data hanya 42 observasi, satu pembagian train/test bisa sangat bias. Monte Carlo 200× menjalankan 200 percobaan dengan pembagian acak berbeda, lalu mengambil median sebagai estimasi yang lebih robust dan mengukur ketidakpastian lewat rentang min–max." },
  "exit":         { title:"395.298 Jiwa Keluar", body:"Angka ini dari Disdukcapil DKI Jakarta 2024. Yang keluar didominasi keluarga dengan anak (usia 0–14) dan lansia (>60). Yang masuk didominasi usia 25–29 tahun, lajang, berpendidikan tinggi. Pola demografis ini adalah tanda klasik displacement akibat gentrifikasi." },
  "rentgap":      { title:"Teori Rent Gap (Smith, 1979)", body:"Neil Smith, seorang geograf Marxis, mengembangkan teori ini untuk menjelaskan mengapa investor menarget kawasan tertentu. 'Rent gap' = selisih antara nilai sewa aktual lahan vs nilai potensialnya jika dikembangkan ulang. Semakin lebar celah ini, semakin menarik bagi kapital untuk masuk." },
  "displacement": { title:"Displacement Terstruktur", body:"Displacement bisa langsung (penggusuran paksa) atau tidak langsung (kenaikan biaya sewa/hidup yang memaksa keluar secara 'sukarela'). Di Jakarta, yang dominan adalah displacement tidak langsung — sehingga sulit terdeteksi, namun skalanya masif sebagaimana data migrasi 2024 tunjukkan." },
  "newbuild":     { title:"Davidson & Lees (2005)", body:"Mark Davidson dan Loretta Lees mendokumentasikan new-build gentrification di London riverside — apartemen mewah baru yang bukan 'merehabilitasi' hunian lama, melainkan membangun dari nol di lahan yang sebelumnya ditempati warga berpendapatan rendah. Pola inilah yang relevan untuk Jakarta." },
  "auc-detail":   { title:"AUC: Mengapa Penting?", body:"Model dengan AUC tinggi bisa membedakan 'kecamatan akan tergentrifikasi' vs 'tidak' dengan akurasi tinggi. Ini krusial untuk kebijakan: salah identifikasi berarti sumber daya perlindungan dialokasikan ke tempat yang salah. AUC 0.951 memberi kepercayaan tinggi pada peta risiko yang dihasilkan." },
  "f1-detail":    { title:"F1-Score 0.778", body:"F1 adalah rata-rata harmonik precision dan recall. Untuk problem ini, recall (sensitivity) lebih penting — kita tidak boleh melewatkan kecamatan berisiko. Model RF mencapai recall sempurna (1.0), artinya SEMUA kecamatan yang sebenarnya berisiko terdeteksi." },
  "ba-detail":    { title:"Balanced Accuracy 94.3%", body:"Karena data imbalanced (hanya 12 dari 42 kecamatan positif), accuracy biasa bisa menyesatkan. Balanced accuracy mengambil rata-rata sensitivity dan specificity — ukuran yang jauh lebih adil untuk dataset kecil dengan distribusi kelas tidak seimbang." },
  "kappa-detail": { title:"Cohen's Kappa 0.778", body:"Kappa mengukur seberapa jauh prediksi model lebih baik dari sekadar tebakan acak. Nilai 0.778 (kategori 'substantial agreement') berarti model memberikan informasi yang jauh melampaui random — sangat signifikan untuk pengambilan keputusan kebijakan." },
  "finding-sangat": { title:"5 Kecamatan Paling Rentan", body:"Setia Budi (69.6%), Menteng (61.4%), Gambir (55.8%), Kebayoran Baru (54.2%), Kelapa Gading (50.9%). Semua berada di koridor bisnis dan investasi utama Jakarta. Di sini, intervensi seperti rent control, social housing, dan community land trust paling mendesak diimplementasikan." },
  "finding-tinggi": { title:"12 Kecamatan Risiko Tinggi", body:"Kawasan-kawasan ini berada dalam bayangan investasi — tekanan sudah mulai dirasakan tapi belum puncak. Ini adalah 'window of opportunity' untuk kebijakan preventif: perlindungan penyewa, batas kenaikan harga tanah, dan program hunian campuran (mixed-income housing)." },
  "finding-sedang": { title:"15 Kecamatan Risiko Sedang", body:"Perubahan berjalan lambat namun pasti. Kawasan ini membutuhkan monitoring aktif — terutama karena ekspansi jaringan transportasi bisa mengakselerasi tekanan secara tiba-tiba. Cengkareng (20.4%) adalah kasus paling menarik: berada tepat di ambang batas kategori." },
  "finding-rendah": { title:"10 Kecamatan Risiko Rendah", body:"'Rendah' bukan 'aman selamanya'. Pesanggrahan, Pasar Rebo, dan Cipayung saat ini terlindungi oleh kurangnya infrastruktur premium dan konektivitas. Namun rencana MRT East-West dan LRT Jabodebek bisa mengubah kalkulasi ini dalam 5–10 tahun ke depan." },
};

// ─────────────────────────────────────────────
// CANVAS BACKGROUND — Particles + Skyline
// ─────────────────────────────────────────────
function initCanvas() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let W, H, particles = [], buildings = [];
  let mouse = { x: -999, y: -999 };

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    buildSkyline();
  }

  function buildSkyline() {
    buildings = [];
    const count = Math.floor(W / 28);
    for (let i = 0; i < count; i++) {
      const w = 18 + Math.random() * 28;
      const h = 40 + Math.random() * (H * 0.35);
      const x = (i / count) * W + (Math.random() - 0.5) * 12;
      buildings.push({
        x, w, h,
        windows: [],
        lit: Math.random() > 0.3,
      });
      // windows
      const rows = Math.floor(h / 14);
      const cols = Math.floor(w / 10);
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          buildings[buildings.length - 1].windows.push({
            r, c, on: Math.random() > 0.35,
            flicker: Math.random() > 0.92,
            t: Math.random() * 100,
          });
        }
      }
    }
  }

  function spawnParticle() {
    return {
      x: Math.random() * W,
      y: H + 5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -(0.2 + Math.random() * 0.5),
      size: 0.8 + Math.random() * 1.4,
      alpha: 0,
      maxAlpha: 0.3 + Math.random() * 0.4,
      life: 0, maxLife: 180 + Math.random() * 200,
      color: Math.random() > 0.6 ? "#00d4aa" : Math.random() > 0.5 ? "#ffb800" : "#ffffff",
    };
  }

  for (let i = 0; i < 60; i++) {
    const p = spawnParticle();
    p.y = Math.random() * H;
    p.life = Math.random() * p.maxLife;
    p.alpha = p.maxAlpha * 0.6;
    particles.push(p);
  }

  let frame = 0;

  function draw() {
    frame++;
    ctx.clearRect(0, 0, W, H);

    // Skyline
    buildings.forEach(b => {
      const bx = b.x, by = H - b.h, bw = b.w, bh = b.h;
      ctx.fillStyle = "rgba(10,16,32,0.85)";
      ctx.fillRect(bx, by, bw, bh);

      // Windows
      b.windows.forEach(win => {
        if (win.flicker) {
          win.t += 0.05;
          if (Math.sin(win.t * 3.7) > 0.7 && Math.random() > 0.95) win.on = !win.on;
        }
        if (!win.on) return;
        const wx = bx + 3 + win.c * 10;
        const wy = by + 6 + win.r * 14;
        ctx.fillStyle = b.lit
          ? `rgba(255,220,120,${0.4 + Math.random() * 0.1})`
          : `rgba(0,212,170,${0.25 + Math.random() * 0.1})`;
        ctx.fillRect(wx, wy, 6, 8);
      });
    });

    // Particles
    if (frame % 3 === 0 && particles.length < 120) {
      particles.push(spawnParticle());
    }

    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      p.life++;

      // Mouse repel
      const dx = p.x - mouse.x, dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 80) {
        p.vx += (dx / dist) * 0.04;
        p.vy += (dy / dist) * 0.04;
      }

      if (p.life < 20) p.alpha = p.maxAlpha * (p.life / 20);
      else if (p.life > p.maxLife - 40) p.alpha = p.maxAlpha * ((p.maxLife - p.life) / 40);
      else p.alpha = p.maxAlpha;

      if (p.life >= p.maxLife) { particles.splice(i, 1); return; }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color.replace(")", `,${p.alpha})`).replace("rgb", "rgba").replace("#", "").length > 10
        ? p.color : hexAlpha(p.color, p.alpha);
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  function hexAlpha(hex, a) {
    const r = parseInt(hex.slice(1,3),16);
    const g = parseInt(hex.slice(3,5),16);
    const b = parseInt(hex.slice(5,7),16);
    return `rgba(${r},${g},${b},${a})`;
  }

  window.addEventListener("resize", resize);
  window.addEventListener("mousemove", e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  resize();
  draw();
}

// ─────────────────────────────────────────────
// CURSOR
// ─────────────────────────────────────────────
function initCursor() {
  const ring = document.getElementById("cursor-ring");
  const dot  = document.getElementById("cursor-dot");
  if (!ring || !dot) return;

  let rx = 0, ry = 0, mx = 0, my = 0;

  document.addEventListener("mousemove", e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + "px"; dot.style.top = my + "px";
  });

  document.addEventListener("mouseleave", () => {
    document.getElementById("cursor").style.opacity = "0";
  });
  document.addEventListener("mouseenter", () => {
    document.getElementById("cursor").style.opacity = "1";
  });

  document.addEventListener("mousedown", () => document.body.classList.add("cursor-click"));
  document.addEventListener("mouseup",   () => document.body.classList.remove("cursor-click"));

  // Hover detect
  const hoverEls = "a,button,[data-egg],.def-card,.finding-card,.rank-item,.stat-item,.hero-float-card,.tl-node,.score-card,.var-pill,.legend-row,.map-ctrl-btn,.peta-btn,.risk-tab,.footer-logo";
  document.querySelectorAll(hoverEls).forEach(el => {
    el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
    el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
  });

  function animRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + "px";
    ring.style.top  = ry + "px";
    requestAnimationFrame(animRing);
  }
  animRing();
}

// ─────────────────────────────────────────────
// PROGRESS BAR
// ─────────────────────────────────────────────
function initProgressBar() {
  const bar = document.getElementById("progress-bar");
  if (!bar) return;
  window.addEventListener("scroll", () => {
    const t = document.documentElement.scrollTop;
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = ((t / h) * 100) + "%";
  }, { passive: true });
}

// ─────────────────────────────────────────────
// NAV — stuck + active + chapter
// ─────────────────────────────────────────────
function initNav() {
  const nav    = document.getElementById("nav");
  const chapter = document.getElementById("nav-chapter");
  const brand  = document.getElementById("nav-brand");
  if (brand) brand.addEventListener("click", () => window.scrollTo({ top:0, behavior:"smooth" }));

  const sections = [...document.querySelectorAll("[data-section]")];

  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    nav.classList.toggle("stuck", y > 60);

    // active link
    let current = "";
    sections.forEach(s => {
      if (y >= s.offsetTop - 100) current = s.id;
    });
    document.querySelectorAll(".nav-links a").forEach(a => {
      const href = a.getAttribute("href").slice(1);
      a.classList.toggle("active", href === current);
    });

    // chapter label
    const cur = sections.find(s => y >= s.offsetTop - 100 && y < s.offsetTop + s.offsetHeight - 100);
    if (cur && chapter) chapter.textContent = "§ " + cur.dataset.section.toUpperCase();
  }, { passive: true });

  // smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      e.preventDefault();
      const t = document.querySelector(a.getAttribute("href"));
      if (t) t.scrollIntoView({ behavior:"smooth", block:"start" });
    });
  });

  document.getElementById("hero-scroll")?.addEventListener("click", () => {
    document.getElementById("stats-band")?.scrollIntoView({ behavior:"smooth" });
  });
}

// ─────────────────────────────────────────────
// SCROLL REVEAL
// ─────────────────────────────────────────────
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll("[data-reveal]").forEach(el => io.observe(el));
}

// ─────────────────────────────────────────────
// COUNT-UP
// ─────────────────────────────────────────────
function initCountUp() {
  const els = document.querySelectorAll(".count-up");
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting || e.target._done) return;
      e.target._done = true;
      const target  = parseInt(e.target.dataset.target, 10);
      const decimal = e.target.hasAttribute("data-decimal");
      const sep     = e.target.hasAttribute("data-sep");
      const dur = 1800;
      const start = performance.now();
      const tick = now => {
        const prog = Math.min((now - start) / dur, 1);
        const ease = 1 - Math.pow(1 - prog, 3);
        const cur  = Math.round(ease * target);
        if (decimal) {
          e.target.textContent = (cur / 1000).toFixed(3);
        } else if (sep) {
          e.target.textContent = cur.toLocaleString("id-ID");
        } else {
          e.target.textContent = cur;
        }
        if (prog < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.3 });
  els.forEach(el => io.observe(el));
}

// ─────────────────────────────────────────────
// CONFETTI
// ─────────────────────────────────────────────
function spawnConfetti(x, y, count = 24) {
  const colors = ["#00d4aa","#ffb800","#ff4d4d","#4da6ff","#fff","#ff6820"];
  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    el.className = "confetti-piece";
    const color = colors[Math.floor(Math.random() * colors.length)];
    el.style.cssText = `
      left:${x}px; top:${y}px;
      background:${color};
      width:${6+Math.random()*8}px;
      height:${6+Math.random()*8}px;
      border-radius:${Math.random()>0.5?'50%':'2px'};
      animation-delay:${Math.random()*0.3}s;
      animation-duration:${1.8+Math.random()*1.2}s;
      transform:translateX(${(Math.random()-0.5)*120}px);
    `;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3500);
  }
}

function spawnRipple(x, y) {
  const el = document.createElement("div");
  el.className = "ripple";
  el.style.cssText = `left:${x}px;top:${y}px;width:40px;height:40px;`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 900);
}

// ─────────────────────────────────────────────
// EASTER EGG MODAL
// ─────────────────────────────────────────────
function initEasterEggs() {
  const overlay = document.getElementById("easter-egg");
  const titleEl = document.getElementById("egg-title");
  const bodyEl  = document.getElementById("egg-body");
  const closeEl = document.getElementById("egg-close");
  if (!overlay) return;

  function showEgg(key, x, y) {
    const data = EASTER_EGGS[key];
    if (!data) return;
    titleEl.textContent = data.title;
    bodyEl.textContent  = data.body;
    overlay.classList.add("show");
    if (x && y) spawnConfetti(x, y, 20);
  }

  function hideEgg() { overlay.classList.remove("show"); }

  closeEl?.addEventListener("click", hideEgg);
  overlay.addEventListener("click", e => { if (e.target === overlay) hideEgg(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") hideEgg(); });

  document.querySelectorAll("[data-egg]").forEach(el => {
    el.addEventListener("click", e => {
      const key = el.dataset.egg;
      if (!EASTER_EGGS[key]) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      el.classList.add("explode");
      el.addEventListener("animationend", () => el.classList.remove("explode"), { once:true });
      spawnRipple(cx, cy);
      showEgg(key, cx, cy);
    });
  });

  // Stats band click surprise
  [0,1,2,3].forEach(i => {
    const el = document.getElementById("stat-"+i);
    if (!el) return;
    el.addEventListener("click", e => {
      el.classList.add("pop");
      el.addEventListener("animationend", () => el.classList.remove("pop"), { once:true });
      spawnConfetti(e.clientX, e.clientY, 16);
      spawnRipple(e.clientX, e.clientY);
    });
  });

  // Footer logo surprise
  document.getElementById("footer-logo")?.addEventListener("click", e => {
    spawnConfetti(e.clientX, e.clientY, 60);
    showEgg("exit", e.clientX, e.clientY);
  });

  // Konami-style: click hero tag 3× for mega confetti
  let heroTagClicks = 0;
  document.querySelector(".hero-tag")?.addEventListener("click", e => {
    heroTagClicks++;
    spawnConfetti(e.clientX, e.clientY, 10);
    if (heroTagClicks >= 3) {
      heroTagClicks = 0;
      for (let i = 0; i < 5; i++) setTimeout(() => spawnConfetti(Math.random()*window.innerWidth, Math.random()*window.innerHeight*0.5, 20), i*200);
    }
  });
}

// ─────────────────────────────────────────────
// TIMELINE
// ─────────────────────────────────────────────
function initTimeline() {
  const nodes  = document.querySelectorAll(".tl-node");
  const title  = document.getElementById("tl-title");
  const body   = document.getElementById("tl-body");
  const detail = document.getElementById("tl-detail");
  if (!nodes.length || !title) return;

  function activate(idx) {
    nodes.forEach(n => n.classList.toggle("active", parseInt(n.dataset.tl) === idx));
    detail.style.opacity = "0";
    detail.style.transform = "translateY(10px)";
    setTimeout(() => {
      title.textContent = TIMELINE_DATA[idx].title;
      body.textContent  = TIMELINE_DATA[idx].body;
      detail.style.opacity = "1";
      detail.style.transform = "none";
      detail.style.transition = "opacity 0.35s, transform 0.35s";
    }, 180);
  }

  nodes.forEach(n => n.addEventListener("click", () => activate(parseInt(n.dataset.tl))));
}

// ─────────────────────────────────────────────
// VAR PILLS
// ─────────────────────────────────────────────
function initVarPills() {
  const container = document.getElementById("var-pills-container");
  if (!container) return;

  VAR_PILLS.forEach(v => {
    const el = document.createElement("span");
    el.className = "var-pill" + (v.top ? " top4" : "");
    el.textContent = v.label;
    el.title = v.top ? "Top 4 feature importance ★" : "Variabel prediktor";
    el.addEventListener("click", e => {
      spawnRipple(e.clientX, e.clientY);
      if (v.top) spawnConfetti(e.clientX, e.clientY, 10);
    });
    container.appendChild(el);
  });
}

// ─────────────────────────────────────────────
// FEATURE IMPORTANCE BARS
// ─────────────────────────────────────────────
function initFeatureImportance() {
  const container = document.getElementById("fi-chart-container");
  if (!container) return;

  FEATURE_IMPORTANCE.forEach((d, i) => {
    const pct = ((d.pct / FEATURE_IMPORTANCE[0].pct) * 100).toFixed(1);
    const row = document.createElement("div");
    row.className = "fi-row";
    row.style.transitionDelay = (i * 0.06) + "s";
    row.innerHTML = `
      <div class="fi-label" style="color:${d.top?"var(--teal)":"var(--mist)"}">${d.label}</div>
      <div class="fi-track"><div class="fi-fill" data-w="${pct}" style="width:0%"></div></div>
      <div class="fi-val">${d.pct.toFixed(1)}%</div>
    `;
    container.appendChild(row);
  });

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.querySelectorAll(".fi-fill").forEach(b => { b.style.width = b.dataset.w + "%"; });
      io.unobserve(e.target);
    });
  }, { threshold: 0.1 });
  io.observe(container);
}

// ─────────────────────────────────────────────
// LEAFLET MAP
// ─────────────────────────────────────────────
function initMap() {
  if (typeof L === "undefined") return;

  const mapEl = document.getElementById("map");
  if (!mapEl) return;

  const map = L.map("map", {
    center: [-6.2088, 106.8456],
    zoom: 11,
    zoomControl: false,
    attributionControl: false,
  });
  window._leafletMap = map;

  L.control.zoom({ position:"bottomright" }).addTo(map);

  // Dark basemap
  L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
    attribution:"© CartoDB", maxZoom:18, subdomains:"abcd",
  }).addTo(map);

  const lookup = {};
  PREDICTION_DATA.forEach(d => { lookup[d.kecamatan.toUpperCase()] = d; });
  window._kecLookup = lookup;

  const infoDefault = document.getElementById("peta-info-default");
  const infoData    = document.getElementById("peta-info-data");
  const kecName     = document.getElementById("kec-name");
  const probFill    = document.getElementById("kec-prob-fill");
  const probPct     = document.getElementById("kec-prob-pct");
  const kecKat      = document.getElementById("kec-kategori");
  const kecMC       = document.getElementById("kec-mc-range");

  function styleFeature(f) {
    const d = lookup[(f.properties.nama_kec||f.properties.KECAMATAN||"").toUpperCase().trim()];
    return {
      fillColor: d ? RISK_COLORS[d.kategori] : "#1a2a3a",
      fillOpacity: d ? 0.72 : 0.15,
      weight: 0.8, opacity: 0.5, color: "#000",
    };
  }

  let geojsonLayer;

  function onHover(e) {
    e.target.setStyle({ weight:2.5, opacity:1, fillOpacity:0.92 });
    e.target.bringToFront();
    const d = lookup[(e.target.feature.properties.nama_kec||e.target.feature.properties.KECAMATAN||"").toUpperCase().trim()];
    if (!d) return;
    infoDefault.style.display = "none";
    infoData.style.display    = "block";
    kecName.textContent       = d.kecamatan;
    const p = (d.prob * 100).toFixed(1);
    probFill.style.width      = p + "%";
    probFill.style.background = RISK_COLORS[d.kategori];
    probPct.textContent       = p + "%";
    probPct.style.color       = RISK_COLORS[d.kategori];
    kecKat.textContent        = "Risiko " + d.kategori;
    kecKat.style.color        = RISK_COLORS[d.kategori];
    kecKat.style.border       = "1px solid " + RISK_COLORS[d.kategori] + "55";
    kecKat.style.background   = RISK_COLORS[d.kategori] + "22";
    kecMC.innerHTML = `MC Median: <strong>${(d.mc_median*100).toFixed(1)}%</strong><br/>Range: ${(d.mc_min*100).toFixed(1)}% – ${(d.mc_max*100).toFixed(1)}%`;
  }

  function onOut(e) {
    geojsonLayer?.resetStyle(e.target);
    infoDefault.style.display = "";
    infoData.style.display    = "none";
  }

  function loadGeoJSON() {
    fetch("batas_kecamatan_jakarta.geojson")
      .then(r => { if (!r.ok) throw 0; return r.json(); })
      .then(data => {
        geojsonLayer = L.geoJSON(data, {
          style: styleFeature,
          onEachFeature(feat, layer) {
            layer.on({ mouseover: onHover, mouseout: onOut, click: onHover });
            const d = lookup[(feat.properties.nama_kec||feat.properties.KECAMATAN||"").toUpperCase().trim()];
            if (d) {
              layer.bindTooltip(
                `<strong style="color:${RISK_COLORS[d.kategori]}">${d.kecamatan}</strong><br/>${(d.prob*100).toFixed(1)}% — ${d.kategori}`,
                { sticky:true, direction:"top" }
              );
            }
          },
        }).addTo(map);
        window._kecLayer = geojsonLayer;
        map.fitBounds(geojsonLayer.getBounds(), { padding:[24,24] });
      })
      .catch(() => {
        document.getElementById("map").style.display = "none";
        document.getElementById("map-placeholder").style.display = "flex";
      });
  }

  loadGeoJSON();

  // Filter buttons
  document.querySelectorAll(".peta-btn[data-risk]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".peta-btn[data-risk]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.dataset.risk;
      window._kecLayer?.eachLayer(layer => {
        const d = lookup[(layer.feature?.properties.nama_kec||layer.feature?.properties.KECAMATAN||"").toUpperCase().trim()];
        const show = cat === "all" || (d && d.kategori === cat);
        layer.setStyle({ opacity: show?0.8:0.05, fillOpacity: show?0.75:0.04 });
      });
    });
  });

  // Legend filter
  document.querySelectorAll(".legend-row[data-filter]").forEach(row => {
    row.addEventListener("click", () => {
      const cat = row.dataset.filter;
      document.querySelectorAll(".peta-btn[data-risk]").forEach(b => b.classList.remove("active"));
      document.querySelector(`.peta-btn[data-risk="${cat}"]`)?.classList.add("active");
      window._kecLayer?.eachLayer(layer => {
        const d = lookup[(layer.feature?.properties.nama_kec||layer.feature?.properties.KECAMATAN||"").toUpperCase().trim()];
        const show = d && d.kategori === cat;
        layer.setStyle({ opacity: show?0.9:0.05, fillOpacity: show?0.85:0.04 });
      });
    });
  });

  // Control buttons
  document.getElementById("btn-zoom-in")?.addEventListener("click",  () => map.zoomIn());
  document.getElementById("btn-zoom-out")?.addEventListener("click", () => map.zoomOut());
  document.getElementById("btn-reset")?.addEventListener("click",    () => { map.setView([-6.21,106.845],11); window._kecLayer?.eachLayer(l => geojsonLayer.resetStyle(l)); document.querySelectorAll(".peta-btn[data-risk]").forEach(b=>b.classList.toggle("active",b.dataset.risk==="all")); });

  let top5Active = false;
  document.getElementById("btn-top5")?.addEventListener("click", function() {
    top5Active = !top5Active;
    this.classList.toggle("active", top5Active);
    const top5 = ["SETIA BUDI","MENTENG","GAMBIR","KEBAYORAN BARU","KELAPA GADING"];
    window._kecLayer?.eachLayer(layer => {
      const d = lookup[(layer.feature?.properties.nama_kec||layer.feature?.properties.KECAMATAN||"").toUpperCase().trim()];
      const isTop = top5.includes(d?.kecamatan);
      if (top5Active) layer.setStyle({ opacity:isTop?1:0.04, fillOpacity:isTop?0.95:0.02, weight:isTop?3:0.4 });
      else geojsonLayer.resetStyle(layer);
    });
  });

  // Pulse animation on map (CSS class toggle)
  let pulseActive = false;
  document.getElementById("btn-pulse")?.addEventListener("click", function() {
    pulseActive = !pulseActive;
    this.classList.toggle("active", pulseActive);
    const high = PREDICTION_DATA.filter(d=>d.kategori==="Sangat Tinggi").map(d=>d.kecamatan);
    window._kecLayer?.eachLayer(layer => {
      const d = lookup[(layer.feature?.properties.nama_kec||layer.feature?.properties.KECAMATAN||"").toUpperCase().trim()];
      if (!d || !high.includes(d.kecamatan)) return;
      if (pulseActive) {
        layer._path?.classList.add("pulse-layer");
      } else {
        layer._path?.classList.remove("pulse-layer");
        geojsonLayer.resetStyle(layer);
      }
    });
  });
}

// ─────────────────────────────────────────────
// RANKING TABS
// ─────────────────────────────────────────────
function initRanking() {
  const groups = {
    sangat: PREDICTION_DATA.filter(d=>d.kategori==="Sangat Tinggi"),
    tinggi: PREDICTION_DATA.filter(d=>d.kategori==="Tinggi"),
    sedang: PREDICTION_DATA.filter(d=>d.kategori==="Sedang"),
    rendah: PREDICTION_DATA.filter(d=>d.kategori==="Rendah"),
  };

  Object.entries(groups).forEach(([key, items]) => {
    const panel = document.getElementById("panel-"+key);
    if (!panel) return;
    const list = panel.querySelector(".ranking-list");
    if (!list) return;
    items.sort((a,b)=>b.prob-a.prob).forEach((d,i)=>{
      const color = RISK_COLORS[d.kategori];
      const barW  = (d.prob * 100).toFixed(1);
      const item  = document.createElement("div");
      item.className = "rank-item";
      item.innerHTML = `
        <div class="rank-n">${i+1}</div>
        <div>
          <div class="rank-kec">${d.kecamatan}</div>
          <div style="font-family:var(--mono);font-size:0.6rem;color:var(--fog);margin-top:0.2rem">
            MC ${(d.mc_min*100).toFixed(0)}% – ${(d.mc_max*100).toFixed(0)}%
          </div>
        </div>
        <div class="rank-bar"><div class="rank-fill" data-w="${barW}" style="width:0%;background:${color}"></div></div>
        <div class="rank-pct" style="color:${color}">${barW}%</div>
      `;
      item.addEventListener("click", e => {
        spawnRipple(e.clientX, e.clientY);
        if (d.kategori==="Sangat Tinggi") spawnConfetti(e.clientX, e.clientY, 16);
      });
      list.appendChild(item);
    });
  });

  // Animate rank bars on tab show / scroll
  function animateBars(panel) {
    panel.querySelectorAll(".rank-fill").forEach((b,i) => {
      setTimeout(()=>{ b.style.width = b.dataset.w + "%"; }, i*50);
    });
  }

  // Tabs
  const tabs = document.querySelectorAll(".risk-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
      const panel = document.getElementById("panel-"+tab.dataset.cat);
      panel?.classList.add("active");
      if (panel) animateBars(panel);
    });
  });

  // Animate first tab when scrolled into view
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateBars(document.getElementById("panel-sangat"));
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });
  const rankSec = document.getElementById("ranking");
  if (rankSec) io.observe(rankSec);
}

// ─────────────────────────────────────────────
// FINDING CARDS — bar fill
// ─────────────────────────────────────────────
function initFindingCards() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.querySelectorAll(".fc-bar-fill").forEach(b => {
        setTimeout(() => { b.style.width = (b.dataset.width||"100") + "%"; }, 300);
      });
      io.unobserve(e.target);
    });
  }, { threshold:0.15 });
  document.querySelectorAll(".finding-grid").forEach(el => io.observe(el));
}

// ─────────────────────────────────────────────
// CHARTS
// ─────────────────────────────────────────────
function initCharts() {
  if (typeof Chart === "undefined") return;

  Chart.defaults.font.family = "'IBM Plex Mono', monospace";
  Chart.defaults.color = "rgba(200,192,176,0.7)";

  const catCounts = { "Sangat Tinggi":0, Tinggi:0, Sedang:0, Rendah:0 };
  PREDICTION_DATA.forEach(d => catCounts[d.kategori]++);

  // ── Donut
  const dCtx = document.getElementById("chart-donut")?.getContext("2d");
  if (dCtx) {
    new Chart(dCtx, {
      type:"doughnut",
      data:{
        labels:["Sangat Tinggi","Tinggi","Sedang","Rendah"],
        datasets:[{
          data:Object.values(catCounts),
          backgroundColor:["#ff202088","#ff682088","#ffaa2088","#2090ff88"],
          borderColor:["#ff2020","#ff6820","#ffaa20","#2090ff"],
          borderWidth:2, hoverOffset:10,
        }],
      },
      options:{
        responsive:true, cutout:"65%",
        plugins:{
          legend:{ position:"bottom", labels:{ padding:14, font:{size:11}, color:"rgba(200,192,176,0.7)", usePointStyle:true } },
          tooltip:{ callbacks:{ label:ctx=>` ${ctx.label}: ${ctx.raw} kecamatan` } },
        },
        animation:{ animateRotate:true, duration:1200 },
      },
    });
  }

  // ── Horizontal bar: Top 15
  const bCtx = document.getElementById("chart-topbar")?.getContext("2d");
  if (bCtx) {
    const top15 = [...PREDICTION_DATA].sort((a,b)=>b.prob-a.prob).slice(0,15);
    new Chart(bCtx, {
      type:"bar",
      data:{
        labels: top15.map(d=>d.kecamatan),
        datasets:[{
          data: top15.map(d=>+(d.prob*100).toFixed(1)),
          backgroundColor: top15.map(d=>RISK_COLORS[d.kategori]+"bb"),
          borderColor: top15.map(d=>RISK_COLORS[d.kategori]),
          borderWidth:1, borderRadius:2,
        }],
      },
      options:{
        indexAxis:"y", responsive:true,
        plugins:{ legend:{display:false}, tooltip:{callbacks:{label:ctx=>` ${ctx.raw.toFixed(1)}%`}} },
        scales:{
          x:{ max:100, grid:{color:"rgba(255,255,255,0.05)"}, ticks:{callback:v=>v+"%", color:"rgba(200,192,176,0.6)"} },
          y:{ grid:{display:false}, ticks:{color:"rgba(200,192,176,0.8)", font:{size:10}} },
        },
        animation:{ duration:1200, delay:(ctx)=>ctx.dataIndex*50 },
      },
    });
  }

  // ── Radar
  const rCtx = document.getElementById("chart-radar")?.getContext("2d");
  if (rCtx) {
    new Chart(rCtx, {
      type:"radar",
      data:{
        labels:["AUC","F1-Score","Bal.Accuracy","Precision","Recall","Kappa"],
        datasets:[
          { label:"Random Forest", data:[0.951,0.778,0.943,0.636,1.0,0.721],
            borderColor:"#00d4aa", backgroundColor:"rgba(0,212,170,0.12)", borderWidth:2, pointBackgroundColor:"#00d4aa", pointRadius:4 },
          { label:"Decision Tree", data:[0.796,0.667,0.841,0.625,0.714,0.595],
            borderColor:"#ffb800", backgroundColor:"rgba(255,184,0,0.08)", borderWidth:2, pointBackgroundColor:"#ffb800", pointRadius:4 },
        ],
      },
      options:{
        responsive:true,
        plugins:{ legend:{ position:"bottom", labels:{ padding:14, font:{size:11}, color:"rgba(200,192,176,0.7)" }} },
        scales:{ r:{
          min:0.4, max:1.0, ticks:{ stepSize:0.1, font:{size:9}, backdropColor:"transparent", color:"rgba(200,192,176,0.5)" },
          grid:{color:"rgba(255,255,255,0.07)"}, angleLines:{color:"rgba(255,255,255,0.07)"},
          pointLabels:{font:{size:10}, color:"rgba(200,192,176,0.8)"},
        }},
      },
    });
  }

  // ── Scatter
  const sCtx = document.getElementById("chart-scatter")?.getContext("2d");
  if (sCtx) {
    const sorted = [...PREDICTION_DATA].sort((a,b)=>a.prob-b.prob);
    new Chart(sCtx, {
      type:"scatter",
      data:{
        datasets:[{
          data: sorted.map((d,i)=>({ x:+(d.prob*100).toFixed(2), y:i+1, label:d.kecamatan, cat:d.kategori })),
          backgroundColor: sorted.map(d=>RISK_COLORS[d.kategori]+"bb"),
          borderColor: sorted.map(d=>RISK_COLORS[d.kategori]),
          borderWidth:1, pointRadius:6, pointHoverRadius:10,
        }],
      },
      options:{
        responsive:true,
        plugins:{
          legend:{display:false},
          tooltip:{callbacks:{label:ctx=>`${ctx.raw.label}: ${ctx.raw.x.toFixed(1)}% — ${ctx.raw.cat}`}},
        },
        scales:{
          x:{ title:{display:true, text:"Probabilitas Gentrifikasi (%)", color:"rgba(200,192,176,0.6)"},
              grid:{color:"rgba(255,255,255,0.05)"}, ticks:{callback:v=>v+"%", color:"rgba(200,192,176,0.6)"} },
          y:{ title:{display:true, text:"Ranking Kecamatan", color:"rgba(200,192,176,0.6)"},
              grid:{color:"rgba(255,255,255,0.04)"}, ticks:{color:"rgba(200,192,176,0.6)"} },
        },
      },
    });
  }
}

// ─────────────────────────────────────────────
// DEF CARD mouse-track spotlight
// ─────────────────────────────────────────────
function initCardSpotlights() {
  document.querySelectorAll(".def-card, .finding-card, .score-card").forEach(card => {
    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width  * 100).toFixed(1);
      const y = ((e.clientY - r.top)  / r.height * 100).toFixed(1);
      card.style.setProperty("--mx", x + "%");
      card.style.setProperty("--my", y + "%");
    });
  });
}

// ─────────────────────────────────────────────
// CSS pulse for high-risk map layers
// ─────────────────────────────────────────────
function injectPulseStyle() {
  const style = document.createElement("style");
  style.textContent = `
    .pulse-layer { animation: mapPulse 1.5s ease-in-out infinite !important; }
    @keyframes mapPulse { 0%,100%{fill-opacity:0.7} 50%{fill-opacity:0.15} }
  `;
  document.head.appendChild(style);
}

// ─────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  initCanvas();
  initCursor();
  initProgressBar();
  initNav();
  initReveal();
  initCountUp();
  initEasterEggs();
  initTimeline();
  initVarPills();
  initFeatureImportance();
  initRanking();
  initFindingCards();
  initCardSpotlights();
  injectPulseStyle();

  window.addEventListener("load", () => {
    initCharts();
    initMap();
  });
});
