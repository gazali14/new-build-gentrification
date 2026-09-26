/* ═══════════════════════════════════════════════════════════
   JAKARTA BERGERAK — Modern Web Story JS
   Cinematic · Interactive · Surprising

   Data dan narasi mengacu pada skripsi:
   "Analisis Fenomena New-Build Gentrification di Jakarta Menggunakan
    Data Multisumber dengan Pendekatan Machine Learning"
   ═══════════════════════════════════════════════════════════ */

"use strict";

// ─────────────────────────────────────────────
// HELPER — format angka gaya Indonesia (koma desimal)
// ─────────────────────────────────────────────
const fmt = (n, d = 1) =>
  Number(n).toLocaleString("id-ID", {
    minimumFractionDigits: d,
    maximumFractionDigits: d,
  });
const fmtPct = (p, d = 1) => fmt(p * 100, d) + "%";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

// Tabel 20 skripsi — Probabilitas New-Build Gentrification pada 42 kecamatan.
//   prob        : probabilitas prediksi Random Forest (dasar penetapan kategori)
//   boot_median : median dari 50 iterasi bootstrap resampling
//   iqr         : rentang interkuartil dari 50 probabilitas bootstrap
// Kategori mengikuti Tabel 8 (Knorr, 2019):
//   Sangat Tinggi > 0,50 · Tinggi 0,35–0,49 · Sedang 0,20–0,34 · Rendah < 0,20
const PREDICTION_DATA = [
  {
    kecamatan: "SETIA BUDI",
    prob: 0.6959,
    boot_median: 0.6306,
    iqr: 0.1549,
    kategori: "Sangat Tinggi",
  },
  {
    kecamatan: "MENTENG",
    prob: 0.6138,
    boot_median: 0.5743,
    iqr: 0.1445,
    kategori: "Sangat Tinggi",
  },
  {
    kecamatan: "GAMBIR",
    prob: 0.5582,
    boot_median: 0.5318,
    iqr: 0.1526,
    kategori: "Sangat Tinggi",
  },
  {
    kecamatan: "KEBAYORAN BARU",
    prob: 0.5421,
    boot_median: 0.5281,
    iqr: 0.1422,
    kategori: "Sangat Tinggi",
  },
  {
    kecamatan: "KELAPA GADING",
    prob: 0.5094,
    boot_median: 0.4873,
    iqr: 0.1123,
    kategori: "Sangat Tinggi",
  },
  {
    kecamatan: "TANAH ABANG",
    prob: 0.4799,
    boot_median: 0.4458,
    iqr: 0.1549,
    kategori: "Tinggi",
  },
  {
    kecamatan: "JATINEGARA",
    prob: 0.449,
    boot_median: 0.4042,
    iqr: 0.15,
    kategori: "Tinggi",
  },
  {
    kecamatan: "CAKUNG",
    prob: 0.4443,
    boot_median: 0.3506,
    iqr: 0.202,
    kategori: "Tinggi",
  },
  {
    kecamatan: "PADEMANGAN",
    prob: 0.4377,
    boot_median: 0.4609,
    iqr: 0.2078,
    kategori: "Tinggi",
  },
  {
    kecamatan: "TANJUNG PRIOK",
    prob: 0.4316,
    boot_median: 0.3608,
    iqr: 0.1675,
    kategori: "Tinggi",
  },
  {
    kecamatan: "SENEN",
    prob: 0.4191,
    boot_median: 0.4041,
    iqr: 0.1199,
    kategori: "Tinggi",
  },
  {
    kecamatan: "KEBON JERUK",
    prob: 0.4154,
    boot_median: 0.3772,
    iqr: 0.1774,
    kategori: "Tinggi",
  },
  {
    kecamatan: "MAMPANG PRAPATAN",
    prob: 0.3999,
    boot_median: 0.4276,
    iqr: 0.2541,
    kategori: "Tinggi",
  },
  {
    kecamatan: "GROGOL PETAMBURAN",
    prob: 0.3866,
    boot_median: 0.359,
    iqr: 0.1274,
    kategori: "Tinggi",
  },
  {
    kecamatan: "PENJARINGAN",
    prob: 0.3733,
    boot_median: 0.3546,
    iqr: 0.1792,
    kategori: "Tinggi",
  },
  {
    kecamatan: "KEMAYORAN",
    prob: 0.3719,
    boot_median: 0.3873,
    iqr: 0.146,
    kategori: "Tinggi",
  },
  {
    kecamatan: "CILANDAK",
    prob: 0.3694,
    boot_median: 0.3797,
    iqr: 0.1372,
    kategori: "Tinggi",
  },
  {
    kecamatan: "PULO GADUNG",
    prob: 0.3481,
    boot_median: 0.2977,
    iqr: 0.1544,
    kategori: "Sedang",
  },
  {
    kecamatan: "KEMBANGAN",
    prob: 0.3415,
    boot_median: 0.3553,
    iqr: 0.181,
    kategori: "Sedang",
  },
  {
    kecamatan: "JOHAR BARU",
    prob: 0.3394,
    boot_median: 0.3937,
    iqr: 0.1409,
    kategori: "Sedang",
  },
  {
    kecamatan: "TEBET",
    prob: 0.3365,
    boot_median: 0.3185,
    iqr: 0.1033,
    kategori: "Sedang",
  },
  {
    kecamatan: "PALMERAH",
    prob: 0.3327,
    boot_median: 0.3615,
    iqr: 0.1331,
    kategori: "Sedang",
  },
  {
    kecamatan: "TAMAN SARI",
    prob: 0.3249,
    boot_median: 0.3667,
    iqr: 0.1067,
    kategori: "Sedang",
  },
  {
    kecamatan: "MATRAMAN",
    prob: 0.3211,
    boot_median: 0.3186,
    iqr: 0.0995,
    kategori: "Sedang",
  },
  {
    kecamatan: "SAWAH BESAR",
    prob: 0.3069,
    boot_median: 0.3321,
    iqr: 0.1065,
    kategori: "Sedang",
  },
  {
    kecamatan: "CEMPAKA PUTIH",
    prob: 0.3044,
    boot_median: 0.3398,
    iqr: 0.0961,
    kategori: "Sedang",
  },
  {
    kecamatan: "KEBAYORAN LAMA",
    prob: 0.2888,
    boot_median: 0.2929,
    iqr: 0.116,
    kategori: "Sedang",
  },
  {
    kecamatan: "KOJA",
    prob: 0.2861,
    boot_median: 0.2816,
    iqr: 0.1941,
    kategori: "Sedang",
  },
  {
    kecamatan: "PASAR MINGGU",
    prob: 0.2784,
    boot_median: 0.2773,
    iqr: 0.1467,
    kategori: "Sedang",
  },
  {
    kecamatan: "PANCORAN",
    prob: 0.2675,
    boot_median: 0.2167,
    iqr: 0.1533,
    kategori: "Sedang",
  },
  {
    kecamatan: "TAMBORA",
    prob: 0.2662,
    boot_median: 0.2727,
    iqr: 0.191,
    kategori: "Sedang",
  },
  {
    kecamatan: "CENGKARENG",
    prob: 0.204,
    boot_median: 0.1657,
    iqr: 0.1596,
    kategori: "Sedang",
  },
  {
    kecamatan: "MAKASAR",
    prob: 0.1955,
    boot_median: 0.2203,
    iqr: 0.1204,
    kategori: "Rendah",
  },
  {
    kecamatan: "KRAMAT JATI",
    prob: 0.1752,
    boot_median: 0.1837,
    iqr: 0.1021,
    kategori: "Rendah",
  },
  {
    kecamatan: "CILINCING",
    prob: 0.1635,
    boot_median: 0.2058,
    iqr: 0.1702,
    kategori: "Rendah",
  },
  {
    kecamatan: "JAGAKARSA",
    prob: 0.1546,
    boot_median: 0.1721,
    iqr: 0.0835,
    kategori: "Rendah",
  },
  {
    kecamatan: "DUREN SAWIT",
    prob: 0.1339,
    boot_median: 0.1792,
    iqr: 0.1726,
    kategori: "Rendah",
  },
  {
    kecamatan: "KALI DERES",
    prob: 0.1293,
    boot_median: 0.176,
    iqr: 0.1209,
    kategori: "Rendah",
  },
  {
    kecamatan: "CIRACAS",
    prob: 0.1129,
    boot_median: 0.1073,
    iqr: 0.077,
    kategori: "Rendah",
  },
  {
    kecamatan: "CIPAYUNG",
    prob: 0.0926,
    boot_median: 0.0751,
    iqr: 0.0684,
    kategori: "Rendah",
  },
  {
    kecamatan: "PESANGGRAHAN",
    prob: 0.0831,
    boot_median: 0.0931,
    iqr: 0.0706,
    kategori: "Rendah",
  },
  {
    kecamatan: "PASAR REBO",
    prob: 0.074,
    boot_median: 0.0943,
    iqr: 0.0706,
    kategori: "Rendah",
  },
];

// Tabel 19 skripsi — feature importance Random Forest
const FEATURE_IMPORTANCE = [
  { label: "Night-Time Light (NTL)", pct: 28.15, top: true },
  { label: "Land Surface Temp (LST)", pct: 13.61, top: true },
  { label: "SKTM (Kemiskinan)", pct: 10.05, top: true },
  { label: "Kepadatan Penduduk", pct: 9.24, top: true },
  { label: "Bangunan Kumuh", pct: 6.22, top: false },
  { label: "NDBI (Built-up Index)", pct: 5.51, top: false },
  { label: "Densitas Transportasi", pct: 5.49, top: false },
  { label: "Densitas Pendidikan", pct: 4.95, top: false },
  { label: "Densitas Komersial", pct: 4.06, top: false },
  { label: "Densitas Kesehatan", pct: 3.69, top: false },
  { label: "Hunian Vertikal", pct: 3.57, top: false },
  { label: "Vegetasi (NDVI)", pct: 3.46, top: false },
  { label: "Lokasi Kumuh", pct: 2.0, top: false },
];

// Tabel 18 skripsi — perbandingan performa Random Forest vs GBM
// (evaluasi nested CV: outer LOOCV 42 iterasi, inner Stratified 5-Fold)
//
// CATATAN F1-Score Random Forest: Tabel 18 skripsi menulis 0,721, tetapi dari
// Precision 0,636 dan Recall 1,000 hasil hitungnya 0,778 (0,721 adalah nilai
// Cohen's Kappa). Web story memakai 0,778. Jika ingin persis sama dengan
// tabel skripsi, ubah angka `rf` pada baris F1 di bawah — tabel, radar chart,
// dan teks lain akan ikut berubah.
const MODEL_METRICS = [
  { label: "AUC", short: "AUC", rf: 0.951, gbm: 0.835 },
  { label: "Balanced Accuracy", short: "Bal. Accuracy", rf: 0.943, gbm: 0.829 },
  { label: "Accuracy", short: "Accuracy", rf: 0.905, gbm: 0.905 },
  { label: "F1-Score", short: "F1-Score", rf: 0.778, gbm: 0.714 },
  { label: "Recall (Sensitivity)", short: "Recall", rf: 1.0, gbm: 0.714 },
  { label: "Precision", short: "Precision", rf: 0.636, gbm: 0.714 },
];

// Tabel 22 skripsi — kasus penggusuran (LBH Jakarta 2016–2018) per kategori prediksi
const VALIDATION_DATA = [
  { kategori: "Rendah", range: "0–20%", kasus: 22, kk: 517 },
  { kategori: "Sedang", range: "20–35%", kasus: 37, kk: 1310 },
  { kategori: "Tinggi", range: "35–50%", kasus: 40, kk: 4022 },
  { kategori: "Sangat Tinggi", range: ">50%", kasus: 17, kk: 223 },
];

const RISK_COLORS = {
  "Sangat Tinggi": "#ff2020",
  Tinggi: "#ff6820",
  Sedang: "#ffaa20",
  Rendah: "#2090ff",
};

// 13 variabel prediktor (kondisi 2014) — urutan mengikuti feature importance;
// `top` = empat kontributor terbesar
const VAR_PILLS = [
  { label: "NTL", top: true },
  { label: "LST", top: true },
  { label: "Kemiskinan (SKTM)", top: true },
  { label: "Kepadatan Penduduk", top: true },
  { label: "Bangunan Kumuh", top: false },
  { label: "NDBI", top: false },
  { label: "Densitas Transportasi", top: false },
  { label: "Densitas Pendidikan", top: false },
  { label: "Densitas Komersial", top: false },
  { label: "Densitas Kesehatan", top: false },
  { label: "Hunian Vertikal", top: false },
  { label: "NDVI", top: false },
  { label: "Lokasi Kumuh", top: false },
];

const EASTER_EGGS = {
  auc: {
    title: "AUC 0,951",
    body: "AUC (Area Under the ROC Curve) mengukur kemampuan model membedakan kecamatan Gentrifying dari Not Gentrifying di semua ambang probabilitas. Nilai 0,951 berarti, bila satu kecamatan Gentrifying dan satu Not Gentrifying dipilih acak, model memberi skor lebih tinggi pada yang Gentrifying dalam sekitar 95,1% pasangan. Random Forest jauh mengungguli GBM yang hanya 0,835.",
  },
  kec: {
    title: "42 Kecamatan",
    body: "DKI Jakarta memiliki 44 kecamatan. Dua kecamatan di Kabupaten Kepulauan Seribu dikeluarkan karena letaknya terpisah oleh laut sehingga minim interaksi dengan dinamika perkotaan di bagian Jakarta yang lain. Analisis berfokus pada 42 kecamatan di lima kota administrasi.",
  },
  bootstrap: {
    title: "Bootstrap 50×",
    body: "Algoritma tree-based mengandung unsur acak, dan datanya hanya 42 kecamatan. Bootstrap resampling 50 iterasi menghasilkan 50 probabilitas untuk tiap kecamatan. Median dipakai sebagai estimasi yang robust terhadap pencilan, sedangkan IQR menunjukkan ketidakpastian: makin lebar, makin sensitif prediksi terhadap komposisi data latih.",
  },
  exit: {
    title: "395.298 Jiwa Keluar",
    body: "Data Disdukcapil DKI Jakarta 2024: 395.298 jiwa berpindah keluar dan 84.783 jiwa datang. Yang keluar didominasi unit keluarga berusia 40–44 tahun dan anak usia 5–14 tahun, terutama menuju Bogor (56.444 jiwa) dan Depok (45.523 jiwa). Yang datang didominasi usia 20–29 tahun, mayoritas karyawan swasta dan mahasiswa. Pola ini menjadi sinyal kuat terjadinya displacement.",
  },
  rentgap: {
    title: "Teori Rent Gap (Smith, 1979)",
    body: "Rent gap adalah selisih antara nilai ekonomi lahan saat ini (capitalized ground rent) dan nilai maksimal bila lahan dikembangkan secara optimal (potential ground rent). Bangunan yang menua atau tak dirawat menekan nilai aktual, sementara perluasan transportasi publik dan kedekatan dengan pusat komersial mendorong nilai potensial. Semakin lebar celahnya, semakin menarik bagi modal untuk masuk.",
  },
  displacement: {
    title: "Displacement",
    body: "Marcuse (1985) membedakan empat bentuk displacement: direct last-resident, direct chain, exclusionary displacement, dan displacement pressure. Pada new-build gentrification, dua yang terakhir paling relevan: pembangunan baru jarang mengusir warga secara langsung, tetapi mengerek harga properti dan biaya hidup di sekitarnya sehingga keluarga rentan terdesak pindah.",
  },
  newbuild: {
    title: "Davidson & Lees (2005)",
    body: "Berbeda dengan gentrifikasi klasik yang berfokus pada perbaikan hunian lama, new-build gentrification digerakkan oleh konstruksi masif hunian vertikal dan area komersial eksklusif di atas lahan kosong atau lahan yang kurang termanfaatkan. Meski tidak selalu menggusur penghuni di tapak yang sama, kehadirannya memicu rambatan kenaikan harga lahan di permukiman sekitar.",
  },
  "auc-detail": {
    title: "AUC: Mengapa Penting?",
    body: "AUC tidak bergantung pada satu ambang probabilitas, sehingga lebih tahan terhadap data tidak seimbang seperti 7 kecamatan Gentrifying dari 42. Random Forest memperoleh 0,951 dan GBM 0,835.",
  },
  "f1-detail": {
    title: "F1-Score",
    body: "F1 adalah rata-rata harmonik Precision dan Recall. Random Forest mencapai Recall 1,000: seluruh 7 kecamatan Gentrifying terdeteksi. Konsekuensinya Precision 0,636, artinya sebagian kecamatan yang diprediksi Gentrifying sebenarnya bukan. GBM memiliki Precision dan Recall yang sama, yaitu 0,714.",
  },
  "ba-detail": {
    title: "Balanced Accuracy 0,943",
    body: "Karena data tidak seimbang (hanya 7 dari 42 kecamatan berlabel Gentrifying), accuracy biasa dapat menyesatkan: kedua model sama-sama 0,905. Balanced Accuracy merata-ratakan Recall dan Specificity sehingga lebih adil, dan di sini Random Forest (0,943) jauh di atas GBM (0,829).",
  },
  "finding-sangat": {
    title: "5 Kecamatan Sangat Tinggi",
    body: "Setia Budi (69,6%), Menteng (61,4%), Gambir (55,8%), Kebayoran Baru (54,2%), dan Kelapa Gading (50,9%). Kelimanya masuk Klaster 1 (Gentrifikasi Tinggi) pada tahap K-Means dan berada di pusat aktivitas bisnis, pemerintahan, serta kawasan hunian-komersial premium.",
  },
  "finding-tinggi": {
    title: "12 Kecamatan Tinggi",
    body: "Probabilitas 35–50%. Kecamatan ini, termasuk Tanah Abang (48,0%) dan Senen (41,9%), membentuk zona transisi di sekitar inti. Pada validasi, kategori ini memuat 40 kasus penggusuran dan 4.022 KK terdampak, porsi KK terbesar di antara semua kategori.",
  },
  "finding-sedang": {
    title: "15 Kecamatan Sedang",
    body: "Probabilitas 20–35%: sebagian karakteristik kecamatan mengindikasikan probabilitas new-build gentrification. Cengkareng (20,4%) berada tepat di ambang batas kategori. Pada validasi, kategori ini memuat 37 kasus penggusuran dan 1.310 KK terdampak.",
  },
  "finding-rendah": {
    title: "10 Kecamatan Rendah",
    body: "Probabilitas di bawah 20%, terutama di pinggiran selatan, tenggara, barat, dan timur laut Jakarta. Karakteristiknya belum mengarah pada pola new-build gentrification, sehingga lebih terlindungi dalam jangka pendek. Ini adalah pembacaan kondisi 2024, bukan ramalan jangka panjang.",
  },
};

// ─────────────────────────────────────────────
// CANVAS BACKGROUND — Particles + Skyline
// ─────────────────────────────────────────────
function initCanvas() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let W,
    H,
    particles = [],
    buildings = [];
  let mouse = { x: -999, y: -999 };

  function resize() {
    W = canvas.width = window.innerWidth;
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
        x,
        w,
        h,
        windows: [],
        lit: Math.random() > 0.3,
      });
      // windows
      const rows = Math.floor(h / 14);
      const cols = Math.floor(w / 10);
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          buildings[buildings.length - 1].windows.push({
            r,
            c,
            on: Math.random() > 0.35,
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
      life: 0,
      maxLife: 180 + Math.random() * 200,
      color:
        Math.random() > 0.6
          ? "#00d4aa"
          : Math.random() > 0.5
            ? "#ffb800"
            : "#ffffff",
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
    buildings.forEach((b) => {
      const bx = b.x,
        by = H - b.h,
        bw = b.w,
        bh = b.h;
      ctx.fillStyle = "rgba(10,16,32,0.85)";
      ctx.fillRect(bx, by, bw, bh);

      // Windows
      b.windows.forEach((win) => {
        if (win.flicker) {
          win.t += 0.05;
          if (Math.sin(win.t * 3.7) > 0.7 && Math.random() > 0.95)
            win.on = !win.on;
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
      const dx = p.x - mouse.x,
        dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 80) {
        p.vx += (dx / dist) * 0.04;
        p.vy += (dy / dist) * 0.04;
      }

      if (p.life < 20) p.alpha = p.maxAlpha * (p.life / 20);
      else if (p.life > p.maxLife - 40)
        p.alpha = p.maxAlpha * ((p.maxLife - p.life) / 40);
      else p.alpha = p.maxAlpha;

      if (p.life >= p.maxLife) {
        particles.splice(i, 1);
        return;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle =
        p.color
          .replace(")", `,${p.alpha})`)
          .replace("rgb", "rgba")
          .replace("#", "").length > 10
          ? p.color
          : hexAlpha(p.color, p.alpha);
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  function hexAlpha(hex, a) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${a})`;
  }

  window.addEventListener("resize", resize);
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  resize();
  draw();
}

// ─────────────────────────────────────────────
// CURSOR
// ─────────────────────────────────────────────
function initCursor() {
  const ring = document.getElementById("cursor-ring");
  const dot = document.getElementById("cursor-dot");
  if (!ring || !dot) return;

  let rx = 0,
    ry = 0,
    mx = 0,
    my = 0;

  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + "px";
    dot.style.top = my + "px";
  });

  document.addEventListener("mouseleave", () => {
    document.getElementById("cursor").style.opacity = "0";
  });
  document.addEventListener("mouseenter", () => {
    document.getElementById("cursor").style.opacity = "1";
  });

  document.addEventListener("mousedown", () =>
    document.body.classList.add("cursor-click"),
  );
  document.addEventListener("mouseup", () =>
    document.body.classList.remove("cursor-click"),
  );

  // Hover detect
  const hoverEls =
    "a,button,[data-egg],.def-card,.finding-card,.rank-item,.stat-item,.hero-float-card,.tl-node,.score-card,.var-pill,.legend-row,.map-ctrl-btn,.peta-btn,.risk-tab,.footer-logo";
  document.querySelectorAll(hoverEls).forEach((el) => {
    el.addEventListener("mouseenter", () =>
      document.body.classList.add("cursor-hover"),
    );
    el.addEventListener("mouseleave", () =>
      document.body.classList.remove("cursor-hover"),
    );
  });

  function animRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + "px";
    ring.style.top = ry + "px";
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
  window.addEventListener(
    "scroll",
    () => {
      const t = document.documentElement.scrollTop;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (t / h) * 100 + "%";
    },
    { passive: true },
  );
}

// ─────────────────────────────────────────────
// NAV — stuck + active + chapter
// ─────────────────────────────────────────────
function initNav() {
  const nav = document.getElementById("nav");
  const chapter = document.getElementById("nav-chapter");
  const brand = document.getElementById("nav-brand");
  if (brand)
    brand.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" }),
    );

  const sections = [...document.querySelectorAll("[data-section]")];

  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY;
      nav.classList.toggle("stuck", y > 60);

      // active link
      let current = "";
      sections.forEach((s) => {
        if (y >= s.offsetTop - 100) current = s.dataset.nav || s.id;
      });
      document.querySelectorAll(".nav-links a").forEach((a) => {
        const href = a.getAttribute("href").slice(1);
        a.classList.toggle("active", href === current);
      });

      // chapter label
      const cur = sections.find(
        (s) => y >= s.offsetTop - 100 && y < s.offsetTop + s.offsetHeight - 100,
      );
      if (cur && chapter)
        chapter.textContent = "§ " + cur.dataset.section.toUpperCase();
    },
    { passive: true },
  );

  // smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const t = document.querySelector(a.getAttribute("href"));
      if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.getElementById("hero-scroll")?.addEventListener("click", () => {
    document
      .getElementById("stats-band")
      ?.scrollIntoView({ behavior: "smooth" });
  });
}

// ─────────────────────────────────────────────
// SCROLL REVEAL
// ─────────────────────────────────────────────
function initReveal() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
}

// ─────────────────────────────────────────────
// COUNT-UP
// ─────────────────────────────────────────────
function initCountUp() {
  const els = document.querySelectorAll(".count-up");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting || e.target._done) return;
        e.target._done = true;
        const target = parseInt(e.target.dataset.target, 10);
        const decimal = e.target.hasAttribute("data-decimal");
        const sep = e.target.hasAttribute("data-sep");
        const dur = 1800;
        const start = performance.now();
        const tick = (now) => {
          const prog = Math.min((now - start) / dur, 1);
          const ease = 1 - Math.pow(1 - prog, 3);
          const cur = Math.round(ease * target);
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
    },
    { threshold: 0.3 },
  );
  els.forEach((el) => io.observe(el));
}

// ─────────────────────────────────────────────
// CONFETTI
// ─────────────────────────────────────────────
function spawnConfetti(x, y, count = 24) {
  const colors = [
    "#00d4aa",
    "#ffb800",
    "#ff4d4d",
    "#4da6ff",
    "#fff",
    "#ff6820",
  ];
  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    el.className = "confetti-piece";
    const color = colors[Math.floor(Math.random() * colors.length)];
    el.style.cssText = `
      left:${x}px; top:${y}px;
      background:${color};
      width:${6 + Math.random() * 8}px;
      height:${6 + Math.random() * 8}px;
      border-radius:${Math.random() > 0.5 ? "50%" : "2px"};
      animation-delay:${Math.random() * 0.3}s;
      animation-duration:${1.8 + Math.random() * 1.2}s;
      transform:translateX(${(Math.random() - 0.5) * 120}px);
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
  const bodyEl = document.getElementById("egg-body");
  const closeEl = document.getElementById("egg-close");
  if (!overlay) return;

  function showEgg(key, x, y) {
    const data = EASTER_EGGS[key];
    if (!data) return;
    titleEl.textContent = data.title;
    bodyEl.textContent = data.body;
    overlay.classList.add("show");
    if (x && y) spawnConfetti(x, y, 20);
  }

  function hideEgg() {
    overlay.classList.remove("show");
  }

  closeEl?.addEventListener("click", hideEgg);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) hideEgg();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") hideEgg();
  });

  document.querySelectorAll("[data-egg]").forEach((el) => {
    el.addEventListener("click", (e) => {
      const key = el.dataset.egg;
      if (!EASTER_EGGS[key]) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      el.classList.add("explode");
      el.addEventListener(
        "animationend",
        () => el.classList.remove("explode"),
        { once: true },
      );
      spawnRipple(cx, cy);
      showEgg(key, cx, cy);
    });
  });

  // Stats band click surprise
  [0, 1, 2, 3].forEach((i) => {
    const el = document.getElementById("stat-" + i);
    if (!el) return;
    el.addEventListener("click", (e) => {
      el.classList.add("pop");
      el.addEventListener("animationend", () => el.classList.remove("pop"), {
        once: true,
      });
      spawnConfetti(e.clientX, e.clientY, 16);
      spawnRipple(e.clientX, e.clientY);
    });
  });

  // Footer logo surprise
  document.getElementById("footer-logo")?.addEventListener("click", (e) => {
    spawnConfetti(e.clientX, e.clientY, 60);
    showEgg("exit", e.clientX, e.clientY);
  });

  // Konami-style: click hero tag 3× for mega confetti
  let heroTagClicks = 0;
  document.querySelector(".hero-tag")?.addEventListener("click", (e) => {
    heroTagClicks++;
    spawnConfetti(e.clientX, e.clientY, 10);
    if (heroTagClicks >= 3) {
      heroTagClicks = 0;
      for (let i = 0; i < 5; i++)
        setTimeout(
          () =>
            spawnConfetti(
              Math.random() * window.innerWidth,
              Math.random() * window.innerHeight * 0.5,
              20,
            ),
          i * 200,
        );
    }
  });
}

// ─────────────────────────────────────────────
// VAR PILLS
// ─────────────────────────────────────────────
function initVarPills() {
  const container = document.getElementById("var-pills-container");
  if (!container) return;

  VAR_PILLS.forEach((v) => {
    const el = document.createElement("span");
    el.className = "var-pill" + (v.top ? " top4" : "");
    el.textContent = v.label;
    el.title = v.top ? "Top 4 feature importance ★" : "Variabel prediktor";
    el.addEventListener("click", (e) => {
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
    row.style.transitionDelay = i * 0.06 + "s";
    row.innerHTML = `
      <div class="fi-label" style="color:${d.top ? "var(--teal)" : "var(--mist)"}">${d.label}</div>
      <div class="fi-track"><div class="fi-fill" data-w="${pct}" style="width:0%"></div></div>
      <div class="fi-val">${d.pct.toFixed(1)}%</div>
    `;
    container.appendChild(row);
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.querySelectorAll(".fi-fill").forEach((b) => {
          b.style.width = b.dataset.w + "%";
        });
        io.unobserve(e.target);
      });
    },
    { threshold: 0.1 },
  );
  io.observe(container);
}

// ─────────────────────────────────────────────
// TABEL PERBANDINGAN MODEL (Tabel 18)
// ─────────────────────────────────────────────
function initModelTable() {
  const tbody = document.getElementById("model-table-body");
  if (!tbody) return;
  tbody.innerHTML = MODEL_METRICS.map((m) => {
    const tie = m.rf === m.gbm;
    const rfCls = m.rf > m.gbm ? "metric-win" : "";
    const gbmCls = m.gbm > m.rf ? "metric-win" : "";
    const note = tie ? ' <span class="metric-note">seri</span>' : "";
    return `<tr>
      <td>${m.label}</td>
      <td class="${rfCls}">${fmt(m.rf, 3)}${note}</td>
      <td class="${gbmCls}">${fmt(m.gbm, 3)}${note}</td>
    </tr>`;
  }).join("");
}

// ─────────────────────────────────────────────
// KESTABILAN PREDIKSI (bootstrap: IQR terkecil vs terbesar)
// ─────────────────────────────────────────────
function initStability() {
  const low = document.getElementById("stab-low");
  const high = document.getElementById("stab-high");
  if (!low || !high) return;
  const row = (d) => `<li>
      <span class="stab-name">${d.kecamatan}</span>
      <span class="stab-val">IQR ${fmt(d.iqr, 3)}<small>median ${fmtPct(d.boot_median)}</small></span>
    </li>`;
  low.innerHTML = [...PREDICTION_DATA]
    .sort((a, b) => a.iqr - b.iqr)
    .slice(0, 4)
    .map(row)
    .join("");
  high.innerHTML = [...PREDICTION_DATA]
    .sort((a, b) => b.iqr - a.iqr)
    .slice(0, 4)
    .map(row)
    .join("");
}

// ─────────────────────────────────────────────
// TABEL VALIDASI PENGGUSURAN (Tabel 22)
// ─────────────────────────────────────────────
function initValidationTable() {
  const tbody = document.getElementById("val-table-body");
  if (!tbody) return;
  const totKasus = VALIDATION_DATA.reduce((a, d) => a + d.kasus, 0);
  const totKK = VALIDATION_DATA.reduce((a, d) => a + d.kk, 0);
  const rows = VALIDATION_DATA.map(
    (d) => `<tr>
      <td><span class="val-dot" style="background:${RISK_COLORS[d.kategori]}"></span>${d.kategori}<small>${d.range}</small></td>
      <td>${d.kasus}<small>${fmt((d.kasus / totKasus) * 100, 1)}%</small></td>
      <td>${d.kk.toLocaleString("id-ID")}<small>${fmt((d.kk / totKK) * 100, 1)}%</small></td>
    </tr>`,
  ).join("");
  tbody.innerHTML =
    rows +
    `<tr class="val-total">
      <td>Total</td><td>${totKasus}<small>100%</small></td><td>${totKK.toLocaleString("id-ID")}<small>100%</small></td>
    </tr>`;
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

  L.control.zoom({ position: "bottomright" }).addTo(map);

  // Dark basemap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
    maxZoom: 19,
    subdomains: "abc",
    className: "dark-basemap-tiles",
  }).addTo(map);

  const lookup = {};
  PREDICTION_DATA.forEach((d) => {
    lookup[d.kecamatan.toUpperCase()] = d;
  });
  window._kecLookup = lookup;

  const infoDefault = document.getElementById("peta-info-default");
  const infoData = document.getElementById("peta-info-data");
  const kecName = document.getElementById("kec-name");
  const probFill = document.getElementById("kec-prob-fill");
  const probPct = document.getElementById("kec-prob-pct");
  const kecKat = document.getElementById("kec-kategori");
  const kecBoot = document.getElementById("kec-boot");

  function styleFeature(f) {
    const d =
      lookup[
        (f.properties.nama_kec || f.properties.KECAMATAN || "")
          .toUpperCase()
          .trim()
      ];
    return {
      fillColor: d ? RISK_COLORS[d.kategori] : "#1a2a3a",
      fillOpacity: d ? 0.72 : 0.15,
      weight: 0.8,
      opacity: 0.5,
      color: "#000",
    };
  }

  function getKec(layer) {
    return lookup[
      (
        layer.feature?.properties.nama_kec ||
        layer.feature?.properties.KECAMATAN ||
        ""
      )
        .toUpperCase()
        .trim()
    ];
  }

  // Elemen DOM sebenarnya dari sebuah layer, dipakai untuk mematikan/menyalakan
  // interaksi mouse-nya lewat CSS pointer-events. getElement() adalah method
  // publik Leaflet; layer._path adalah cadangan untuk versi Leaflet lama.
  function getLayerEl(layer) {
    return (
      (typeof layer.getElement === "function" ? layer.getElement() : null) ||
      layer._path ||
      null
    );
  }

  function setInteractive(layer, show) {
    const el = getLayerEl(layer);
    if (el) el.style.pointerEvents = show ? "auto" : "none";
  }

  let geojsonLayer;
  let activeRisk = "all"; // filter kategori yang sedang aktif ("all" = tidak difilter)
  let top5Active = false; // status tombol "Top 5"
  const TOP5 = [
    "SETIA BUDI",
    "MENTENG",
    "GAMBIR",
    "KEBAYORAN BARU",
    "KELAPA GADING",
  ];

  // Satu sumber kebenaran: apakah kecamatan d boleh merespons hover/klik
  // sesuai kombinasi filter kategori dan Top 5 yang sedang aktif.
  function hoverBlocked(d) {
    if (!d) return true;
    if (activeRisk !== "all" && d.kategori !== activeRisk) return true;
    if (top5Active && !TOP5.includes(d.kecamatan)) return true;
    return false;
  }

  // Gaya visual (opacity/fillOpacity) sebuah layer sesuai filter aktif saat ini,
  // dipakai baik saat filter diterapkan maupun saat kursor keluar dari layer (onOut).
  function filteredStyle(d) {
    if (top5Active) {
      const isTop = TOP5.includes(d?.kecamatan);
      return {
        opacity: isTop ? 1 : 0.04,
        fillOpacity: isTop ? 0.95 : 0.02,
        weight: isTop ? 3 : 0.4,
      };
    }
    if (activeRisk !== "all") {
      const show = d && d.kategori === activeRisk;
      return { opacity: show ? 0.8 : 0.05, fillOpacity: show ? 0.75 : 0.04 };
    }
    return null; // tidak ada filter aktif -> pakai gaya bawaan (styleFeature)
  }

  function onHover(e) {
    const d = getKec(e.target);
    if (hoverBlocked(d)) return;
    e.target.setStyle({ weight: 2.5, opacity: 1, fillOpacity: 0.92 });
    e.target.bringToFront();
    infoDefault.style.display = "none";
    infoData.style.display = "block";
    kecName.textContent = d.kecamatan;
    probFill.style.width = (d.prob * 100).toFixed(1) + "%";
    probFill.style.background = RISK_COLORS[d.kategori];
    probPct.textContent = fmtPct(d.prob);
    probPct.style.color = RISK_COLORS[d.kategori];
    kecKat.textContent = "Probabilitas " + d.kategori;
    kecKat.style.color = RISK_COLORS[d.kategori];
    kecKat.style.border = "1px solid " + RISK_COLORS[d.kategori] + "55";
    kecKat.style.background = RISK_COLORS[d.kategori] + "22";
    if (kecBoot)
      kecBoot.innerHTML = `Median bootstrap (50×): <strong>${fmtPct(d.boot_median)}</strong><br/>IQR: ${fmt(d.iqr, 3)}`;
  }

  function onOut(e) {
    const d = getKec(e.target);
    geojsonLayer?.resetStyle(e.target);
    // resetStyle mengembalikan ke gaya default (styleFeature), jadi filter yang
    // sedang aktif perlu diterapkan ulang supaya wilayah tidak "lepas" dari dim.
    const fs = filteredStyle(d);
    if (fs) e.target.setStyle(fs);
    infoDefault.style.display = "";
    infoData.style.display = "none";
  }

  function loadGeoJSON() {
    fetch("batas_kecamatan_jakarta.geojson")
      .then((r) => {
        if (!r.ok) throw 0;
        return r.json();
      })
      .then((data) => {
        geojsonLayer = L.geoJSON(data, {
          style: styleFeature,
          onEachFeature(feat, layer) {
            layer.on({ mouseover: onHover, mouseout: onOut, click: onHover });
            const d =
              lookup[
                (feat.properties.nama_kec || feat.properties.KECAMATAN || "")
                  .toUpperCase()
                  .trim()
              ];
            if (d) {
              layer.bindTooltip(
                `<strong style="color:${RISK_COLORS[d.kategori]}">${d.kecamatan}</strong><br/>${fmtPct(d.prob)} — ${d.kategori}`,
                { sticky: true, direction: "top" },
              );
            }
          },
        }).addTo(map);
        window._kecLayer = geojsonLayer;
        map.fitBounds(geojsonLayer.getBounds(), { padding: [24, 24] });
      })
      .catch(() => {
        document.getElementById("map").style.display = "none";
        document.getElementById("map-placeholder").style.display = "flex";
      });
  }

  loadGeoJSON();

  // Menerapkan filter kategori: mengubah tampilan DAN interaktivitas tiap layer,
  // dipakai bersama oleh tombol filter, klik legenda, dan tombol reset.
  function applyCategoryFilter(cat) {
    activeRisk = cat;
    document
      .querySelectorAll(".peta-btn[data-risk]")
      .forEach((b) => b.classList.toggle("active", b.dataset.risk === cat));
    window._kecLayer?.eachLayer((layer) => {
      const d = getKec(layer);
      const show = cat === "all" || (d && d.kategori === cat);
      layer.setStyle({
        opacity: show ? 0.8 : 0.05,
        fillOpacity: show ? 0.75 : 0.04,
      });
      setInteractive(layer, show);
    });
  }

  // Filter buttons
  document.querySelectorAll(".peta-btn[data-risk]").forEach((btn) => {
    btn.addEventListener("click", () => applyCategoryFilter(btn.dataset.risk));
  });

  // Legend filter
  document.querySelectorAll(".legend-row[data-filter]").forEach((row) => {
    row.addEventListener("click", () =>
      applyCategoryFilter(row.dataset.filter),
    );
  });

  // Control buttons
  document
    .getElementById("btn-zoom-in")
    ?.addEventListener("click", () => map.zoomIn());
  document
    .getElementById("btn-zoom-out")
    ?.addEventListener("click", () => map.zoomOut());
  document.getElementById("btn-reset")?.addEventListener("click", () => {
    map.setView([-6.21, 106.845], 11);
    top5Active = false;
    document.getElementById("btn-top5")?.classList.remove("active");
    applyCategoryFilter("all");
  });

  document.getElementById("btn-top5")?.addEventListener("click", function () {
    top5Active = !top5Active;
    this.classList.toggle("active", top5Active);
    if (top5Active) {
      window._kecLayer?.eachLayer((layer) => {
        const d = getKec(layer);
        const isTop = TOP5.includes(d?.kecamatan);
        layer.setStyle({
          opacity: isTop ? 1 : 0.04,
          fillOpacity: isTop ? 0.95 : 0.02,
          weight: isTop ? 3 : 0.4,
        });
        setInteractive(layer, isTop);
      });
    } else {
      // kembali ke kondisi filter kategori yang masih aktif (atau "all")
      applyCategoryFilter(activeRisk);
    }
  });

  // Pulse animation on map (CSS class toggle)
  let pulseActive = false;
  document.getElementById("btn-pulse")?.addEventListener("click", function () {
    pulseActive = !pulseActive;
    this.classList.toggle("active", pulseActive);
    const high = PREDICTION_DATA.filter(
      (d) => d.kategori === "Sangat Tinggi",
    ).map((d) => d.kecamatan);
    window._kecLayer?.eachLayer((layer) => {
      const d = getKec(layer);
      if (!d || !high.includes(d.kecamatan)) return;
      const el = getLayerEl(layer);
      if (pulseActive) {
        el?.classList.add("pulse-layer");
      } else {
        el?.classList.remove("pulse-layer");
        geojsonLayer.resetStyle(layer);
      }
    });
  });
}

function initRanking() {
  const groups = {
    sangat: PREDICTION_DATA.filter((d) => d.kategori === "Sangat Tinggi"),
    tinggi: PREDICTION_DATA.filter((d) => d.kategori === "Tinggi"),
    sedang: PREDICTION_DATA.filter((d) => d.kategori === "Sedang"),
    rendah: PREDICTION_DATA.filter((d) => d.kategori === "Rendah"),
  };

  Object.entries(groups).forEach(([key, items]) => {
    const panel = document.getElementById("panel-" + key);
    if (!panel) return;
    const list = panel.querySelector(".ranking-list");
    if (!list) return;
    items
      .sort((a, b) => b.prob - a.prob)
      .forEach((d, i) => {
        const color = RISK_COLORS[d.kategori];
        const barW = (d.prob * 100).toFixed(1); // untuk lebar bar (titik desimal)
        const item = document.createElement("div");
        item.className = "rank-item";
        item.innerHTML = `
        <div class="rank-n">${i + 1}</div>
        <div>
          <div class="rank-kec">${d.kecamatan}</div>
          <div style="font-family:var(--mono);font-size:0.6rem;color:var(--fog);margin-top:0.2rem">
            Median bootstrap ${fmtPct(d.boot_median, 1)} · IQR ${fmt(d.iqr, 3)}
          </div>
        </div>
        <div class="rank-bar"><div class="rank-fill" data-w="${barW}" style="width:0%;background:${color}"></div></div>
        <div class="rank-pct" style="color:${color}">${fmtPct(d.prob)}</div>
      `;
        item.addEventListener("click", (e) => {
          spawnRipple(e.clientX, e.clientY);
          if (d.kategori === "Sangat Tinggi")
            spawnConfetti(e.clientX, e.clientY, 16);
        });
        list.appendChild(item);
      });
  });

  // Animate rank bars on tab show / scroll
  function animateBars(panel) {
    panel.querySelectorAll(".rank-fill").forEach((b, i) => {
      setTimeout(() => {
        b.style.width = b.dataset.w + "%";
      }, i * 50);
    });
  }

  // Tabs
  const tabs = document.querySelectorAll(".risk-tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      document
        .querySelectorAll(".tab-panel")
        .forEach((p) => p.classList.remove("active"));
      const panel = document.getElementById("panel-" + tab.dataset.cat);
      panel?.classList.add("active");
      if (panel) animateBars(panel);
    });
  });

  // Animate first tab when scrolled into view
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          animateBars(document.getElementById("panel-sangat"));
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.2 },
  );
  const rankSec = document.getElementById("panel-sangat");
  if (rankSec) io.observe(rankSec);
}

// ─────────────────────────────────────────────
// FINDING CARDS — bar fill
// ─────────────────────────────────────────────
function initFindingCards() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.querySelectorAll(".fc-bar-fill").forEach((b) => {
          setTimeout(() => {
            b.style.width = (b.dataset.width || "100") + "%";
          }, 300);
        });
        io.unobserve(e.target);
      });
    },
    { threshold: 0.15 },
  );
  document.querySelectorAll(".finding-grid").forEach((el) => io.observe(el));
}

// ─────────────────────────────────────────────
// CHARTS
// ─────────────────────────────────────────────
function initCharts() {
  if (typeof Chart === "undefined") return;

  Chart.defaults.font.family = "'IBM Plex Mono', monospace";
  Chart.defaults.color = "rgba(200,192,176,0.7)";

  const catCounts = { "Sangat Tinggi": 0, Tinggi: 0, Sedang: 0, Rendah: 0 };
  PREDICTION_DATA.forEach((d) => catCounts[d.kategori]++);

  // ── Donut
  const dCtx = document.getElementById("chart-donut")?.getContext("2d");
  if (dCtx) {
    new Chart(dCtx, {
      type: "doughnut",
      data: {
        labels: ["Sangat Tinggi", "Tinggi", "Sedang", "Rendah"],
        datasets: [
          {
            data: Object.values(catCounts),
            backgroundColor: [
              "#ff202088",
              "#ff682088",
              "#ffaa2088",
              "#2090ff88",
            ],
            borderColor: ["#ff2020", "#ff6820", "#ffaa20", "#2090ff"],
            borderWidth: 2,
            hoverOffset: 10,
          },
        ],
      },
      options: {
        responsive: true,
        cutout: "65%",
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              padding: 14,
              font: { size: 11 },
              color: "rgba(200,192,176,0.7)",
              usePointStyle: true,
            },
          },
          tooltip: {
            callbacks: {
              label: (ctx) => ` ${ctx.label}: ${ctx.raw} kecamatan`,
            },
          },
        },
        animation: { animateRotate: true, duration: 1200 },
      },
    });
  }

  // ── Horizontal bar: Top 15
  const bCtx = document.getElementById("chart-topbar")?.getContext("2d");
  if (bCtx) {
    const top15 = [...PREDICTION_DATA]
      .sort((a, b) => b.prob - a.prob)
      .slice(0, 15);
    new Chart(bCtx, {
      type: "bar",
      data: {
        labels: top15.map((d) => d.kecamatan),
        datasets: [
          {
            data: top15.map((d) => +(d.prob * 100).toFixed(1)),
            backgroundColor: top15.map((d) => RISK_COLORS[d.kategori] + "bb"),
            borderColor: top15.map((d) => RISK_COLORS[d.kategori]),
            borderWidth: 1,
            borderRadius: 2,
          },
        ],
      },
      options: {
        indexAxis: "y",
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: { label: (ctx) => ` ${ctx.raw.toFixed(1)}%` } },
        },
        scales: {
          x: {
            max: 100,
            grid: { color: "rgba(255,255,255,0.05)" },
            ticks: { callback: (v) => v + "%", color: "rgba(200,192,176,0.6)" },
          },
          y: {
            grid: { display: false },
            ticks: { color: "rgba(200,192,176,0.8)", font: { size: 10 } },
          },
        },
        animation: { duration: 1200, delay: (ctx) => ctx.dataIndex * 50 },
      },
    });
  }

  // ── Radar: Random Forest vs GBM (Tabel 18)
  const rCtx = document.getElementById("chart-radar")?.getContext("2d");
  if (rCtx) {
    new Chart(rCtx, {
      type: "radar",
      data: {
        labels: MODEL_METRICS.map((m) => m.short),
        datasets: [
          {
            label: "Random Forest",
            data: MODEL_METRICS.map((m) => m.rf),
            borderColor: "#00d4aa",
            backgroundColor: "rgba(0,212,170,0.12)",
            borderWidth: 2,
            pointBackgroundColor: "#00d4aa",
            pointRadius: 4,
          },
          {
            label: "Gradient Boosting (GBM)",
            data: MODEL_METRICS.map((m) => m.gbm),
            borderColor: "#ffb800",
            backgroundColor: "rgba(255,184,0,0.08)",
            borderWidth: 2,
            pointBackgroundColor: "#ffb800",
            pointRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              padding: 14,
              font: { size: 11 },
              color: "rgba(200,192,176,0.7)",
            },
          },
          tooltip: {
            callbacks: {
              label: (ctx) => ` ${ctx.dataset.label}: ${fmt(ctx.raw, 3)}`,
            },
          },
        },
        scales: {
          r: {
            min: 0.5,
            max: 1.0,
            ticks: {
              stepSize: 0.1,
              font: { size: 9 },
              backdropColor: "transparent",
              color: "rgba(200,192,176,0.5)",
            },
            grid: { color: "rgba(255,255,255,0.07)" },
            angleLines: { color: "rgba(255,255,255,0.07)" },
            pointLabels: { font: { size: 10 }, color: "rgba(200,192,176,0.8)" },
          },
        },
      },
    });
  }

  // ── Scatter: probabilitas prediksi vs median bootstrap
  const sCtx = document.getElementById("chart-scatter")?.getContext("2d");
  if (sCtx) {
    const sorted = [...PREDICTION_DATA].sort((a, b) => a.prob - b.prob);
    new Chart(sCtx, {
      type: "scatter",
      data: {
        datasets: [
          {
            label: "Probabilitas prediksi (warna = kategori)",
            data: sorted.map((d, i) => ({
              x: +(d.prob * 100).toFixed(2),
              y: i + 1,
              label: d.kecamatan,
              cat: d.kategori,
            })),
            backgroundColor: sorted.map((d) => RISK_COLORS[d.kategori] + "bb"),
            borderColor: sorted.map((d) => RISK_COLORS[d.kategori]),
            borderWidth: 1,
            pointRadius: 6,
            pointHoverRadius: 10,
          },
          {
            label: "Median bootstrap (50 iterasi)",
            data: sorted.map((d, i) => ({
              x: +(d.boot_median * 100).toFixed(2),
              y: i + 1,
              label: d.kecamatan,
              cat: d.kategori,
            })),
            backgroundColor: "rgba(240,234,216,0.0)",
            borderColor: "rgba(240,234,216,0.75)",
            borderWidth: 1.5,
            pointStyle: "rectRot",
            pointRadius: 4,
            pointHoverRadius: 8,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              padding: 12,
              font: { size: 10 },
              color: "rgba(200,192,176,0.7)",
              usePointStyle: true,
              generateLabels: () => [
                {
                  text: "Probabilitas prediksi (warna = kategori)",
                  fillStyle: "#ff6820",
                  strokeStyle: "#ff6820",
                  fontColor: "rgba(200,192,176,0.85)",
                  pointStyle: "circle",
                  datasetIndex: 0,
                },
                {
                  text: "Median bootstrap (50×)",
                  fillStyle: "transparent",
                  strokeStyle: "rgba(240,234,216,0.75)",
                  fontColor: "rgba(200,192,176,0.85)",
                  lineWidth: 1.5,
                  pointStyle: "rectRot",
                  datasetIndex: 1,
                },
              ],
            },
            onClick: () => {},
          },
          tooltip: {
            callbacks: {
              label: (ctx) =>
                `${ctx.raw.label}: ${fmt(ctx.raw.x, 1)}% — ${ctx.dataset.label.startsWith("Median") ? "median bootstrap" : ctx.raw.cat}`,
            },
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Probabilitas New-Build Gentrification (%)",
              color: "rgba(200,192,176,0.6)",
            },
            grid: { color: "rgba(255,255,255,0.05)" },
            ticks: { callback: (v) => v + "%", color: "rgba(200,192,176,0.6)" },
          },
          y: {
            title: {
              display: true,
              text: "Ranking Kecamatan (1 = terendah)",
              color: "rgba(200,192,176,0.6)",
            },
            grid: { color: "rgba(255,255,255,0.04)" },
            ticks: { color: "rgba(200,192,176,0.6)" },
          },
        },
      },
    });
  }

  // ── Validasi: kasus penggusuran & KK terdampak per kategori (Tabel 22)
  const vCtx = document.getElementById("chart-validasi")?.getContext("2d");
  if (vCtx) {
    const totKasus = VALIDATION_DATA.reduce((a, d) => a + d.kasus, 0);
    const totKK = VALIDATION_DATA.reduce((a, d) => a + d.kk, 0);
    new Chart(vCtx, {
      type: "bar",
      data: {
        labels: VALIDATION_DATA.map((d) => d.kategori),
        datasets: [
          {
            label: "% kasus penggusuran",
            data: VALIDATION_DATA.map((d) => (d.kasus / totKasus) * 100),
            backgroundColor: "rgba(0,212,170,0.55)",
            borderColor: "#00d4aa",
            borderWidth: 1,
            borderRadius: 2,
          },
          {
            label: "% KK terdampak",
            data: VALIDATION_DATA.map((d) => (d.kk / totKK) * 100),
            backgroundColor: "rgba(255,184,0,0.55)",
            borderColor: "#ffb800",
            borderWidth: 1,
            borderRadius: 2,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              padding: 14,
              font: { size: 11 },
              color: "rgba(200,192,176,0.7)",
              usePointStyle: true,
            },
          },
          tooltip: {
            callbacks: {
              label: (ctx) => {
                const d = VALIDATION_DATA[ctx.dataIndex];
                const n =
                  ctx.datasetIndex === 0
                    ? `${d.kasus} kasus`
                    : `${d.kk.toLocaleString("id-ID")} KK`;
                return ` ${fmt(ctx.raw, 1)}% (${n})`;
              },
            },
          },
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: "rgba(200,192,176,0.8)", font: { size: 10 } },
          },
          y: {
            beginAtZero: true,
            max: 80,
            grid: { color: "rgba(255,255,255,0.05)" },
            ticks: { callback: (v) => v + "%", color: "rgba(200,192,176,0.6)" },
          },
        },
        animation: { duration: 1200 },
      },
    });
  }
}

// ─────────────────────────────────────────────
// DEF CARD mouse-track spotlight
// ─────────────────────────────────────────────
function initCardSpotlights() {
  document
    .querySelectorAll(".def-card, .finding-card, .score-card")
    .forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const x = (((e.clientX - r.left) / r.width) * 100).toFixed(1);
        const y = (((e.clientY - r.top) / r.height) * 100).toFixed(1);
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
  initVarPills();
  initModelTable();
  initFeatureImportance();
  initStability();
  initValidationTable();
  initRanking();
  initFindingCards();
  initCardSpotlights();
  injectPulseStyle();

  window.addEventListener("load", () => {
    initCharts();
    initMap();
  });
});
