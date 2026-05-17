/* ============================================================
   GENTRIFIKASI DKI JAKARTA — Web Story JavaScript
   ============================================================ */

// ── Data Prediksi (dari hasil_prediksi_2024.csv) ──
const PREDICTION_DATA = [
  {
    kecamatan: "SETIA BUDI",
    prob: 0.6959,
    mc_median: 0.6614,
    mc_min: 0.4614,
    mc_max: 0.7928,
    kategori: "Sangat Tinggi",
  },
  {
    kecamatan: "MENTENG",
    prob: 0.6138,
    mc_median: 0.5882,
    mc_min: 0.4437,
    mc_max: 0.7525,
    kategori: "Sangat Tinggi",
  },
  {
    kecamatan: "GAMBIR",
    prob: 0.5582,
    mc_median: 0.5556,
    mc_min: 0.3133,
    mc_max: 0.748,
    kategori: "Sangat Tinggi",
  },
  {
    kecamatan: "KEBAYORAN BARU",
    prob: 0.5421,
    mc_median: 0.5304,
    mc_min: 0.351,
    mc_max: 0.7406,
    kategori: "Sangat Tinggi",
  },
  {
    kecamatan: "KELAPA GADING",
    prob: 0.5094,
    mc_median: 0.513,
    mc_min: 0.353,
    mc_max: 0.7033,
    kategori: "Sangat Tinggi",
  },
  {
    kecamatan: "TANAH ABANG",
    prob: 0.4799,
    mc_median: 0.502,
    mc_min: 0.2849,
    mc_max: 0.6846,
    kategori: "Tinggi",
  },
  {
    kecamatan: "JATINEGARA",
    prob: 0.449,
    mc_median: 0.4302,
    mc_min: 0.2012,
    mc_max: 0.6298,
    kategori: "Tinggi",
  },
  {
    kecamatan: "CAKUNG",
    prob: 0.4443,
    mc_median: 0.3662,
    mc_min: 0.0898,
    mc_max: 0.5929,
    kategori: "Tinggi",
  },
  {
    kecamatan: "PADEMANGAN",
    prob: 0.4377,
    mc_median: 0.458,
    mc_min: 0.1584,
    mc_max: 0.6352,
    kategori: "Tinggi",
  },
  {
    kecamatan: "TANJUNG PRIOK",
    prob: 0.4316,
    mc_median: 0.3805,
    mc_min: 0.1958,
    mc_max: 0.6091,
    kategori: "Tinggi",
  },
  {
    kecamatan: "SENEN",
    prob: 0.4191,
    mc_median: 0.4147,
    mc_min: 0.1958,
    mc_max: 0.6398,
    kategori: "Tinggi",
  },
  {
    kecamatan: "KEBON JERUK",
    prob: 0.4154,
    mc_median: 0.3754,
    mc_min: 0.2027,
    mc_max: 0.5946,
    kategori: "Tinggi",
  },
  {
    kecamatan: "MAMPANG PRAPATAN",
    prob: 0.3999,
    mc_median: 0.3982,
    mc_min: 0.0395,
    mc_max: 0.6462,
    kategori: "Tinggi",
  },
  {
    kecamatan: "GROGOL PETAMBURAN",
    prob: 0.3866,
    mc_median: 0.3771,
    mc_min: 0.2043,
    mc_max: 0.5222,
    kategori: "Tinggi",
  },
  {
    kecamatan: "PENJARINGAN",
    prob: 0.3733,
    mc_median: 0.4043,
    mc_min: 0.1706,
    mc_max: 0.6166,
    kategori: "Tinggi",
  },
  {
    kecamatan: "KEMAYORAN",
    prob: 0.3719,
    mc_median: 0.415,
    mc_min: 0.204,
    mc_max: 0.5917,
    kategori: "Tinggi",
  },
  {
    kecamatan: "CILANDAK",
    prob: 0.3694,
    mc_median: 0.3783,
    mc_min: 0.0374,
    mc_max: 0.6112,
    kategori: "Tinggi",
  },
  {
    kecamatan: "PULO GADUNG",
    prob: 0.3481,
    mc_median: 0.3076,
    mc_min: 0.1088,
    mc_max: 0.5146,
    kategori: "Sedang",
  },
  {
    kecamatan: "KEMBANGAN",
    prob: 0.3415,
    mc_median: 0.3197,
    mc_min: 0.0286,
    mc_max: 0.5758,
    kategori: "Sedang",
  },
  {
    kecamatan: "JOHAR BARU",
    prob: 0.3394,
    mc_median: 0.3849,
    mc_min: 0.204,
    mc_max: 0.5591,
    kategori: "Sedang",
  },
  {
    kecamatan: "TEBET",
    prob: 0.3365,
    mc_median: 0.3401,
    mc_min: 0.2113,
    mc_max: 0.5007,
    kategori: "Sedang",
  },
  {
    kecamatan: "PALMERAH",
    prob: 0.3327,
    mc_median: 0.3779,
    mc_min: 0.214,
    mc_max: 0.5388,
    kategori: "Sedang",
  },
  {
    kecamatan: "TAMAN SARI",
    prob: 0.3249,
    mc_median: 0.3817,
    mc_min: 0.2228,
    mc_max: 0.5605,
    kategori: "Sedang",
  },
  {
    kecamatan: "MATRAMAN",
    prob: 0.3211,
    mc_median: 0.3379,
    mc_min: 0.1713,
    mc_max: 0.5103,
    kategori: "Sedang",
  },
  {
    kecamatan: "SAWAH BESAR",
    prob: 0.3069,
    mc_median: 0.3404,
    mc_min: 0.174,
    mc_max: 0.5278,
    kategori: "Sedang",
  },
  {
    kecamatan: "CEMPAKA PUTIH",
    prob: 0.3044,
    mc_median: 0.3478,
    mc_min: 0.1903,
    mc_max: 0.5307,
    kategori: "Sedang",
  },
  {
    kecamatan: "KEBAYORAN LAMA",
    prob: 0.2888,
    mc_median: 0.2786,
    mc_min: 0.0631,
    mc_max: 0.4621,
    kategori: "Sedang",
  },
  {
    kecamatan: "KOJA",
    prob: 0.2861,
    mc_median: 0.2796,
    mc_min: 0.0296,
    mc_max: 0.4786,
    kategori: "Sedang",
  },
  {
    kecamatan: "PASAR MINGGU",
    prob: 0.2784,
    mc_median: 0.2582,
    mc_min: 0.0431,
    mc_max: 0.5041,
    kategori: "Sedang",
  },
  {
    kecamatan: "PANCORAN",
    prob: 0.2675,
    mc_median: 0.2344,
    mc_min: 0.0331,
    mc_max: 0.4191,
    kategori: "Sedang",
  },
  {
    kecamatan: "TAMBORA",
    prob: 0.2662,
    mc_median: 0.2844,
    mc_min: 0.0471,
    mc_max: 0.5205,
    kategori: "Sedang",
  },
  {
    kecamatan: "CENGKARENG",
    prob: 0.204,
    mc_median: 0.1817,
    mc_min: 0.02,
    mc_max: 0.3623,
    kategori: "Sedang",
  },
  {
    kecamatan: "MAKASAR",
    prob: 0.1955,
    mc_median: 0.2376,
    mc_min: 0.0299,
    mc_max: 0.495,
    kategori: "Rendah",
  },
  {
    kecamatan: "KRAMAT JATI",
    prob: 0.1752,
    mc_median: 0.2005,
    mc_min: 0.0497,
    mc_max: 0.3869,
    kategori: "Rendah",
  },
  {
    kecamatan: "CILINCING",
    prob: 0.1635,
    mc_median: 0.2144,
    mc_min: 0.0402,
    mc_max: 0.4225,
    kategori: "Rendah",
  },
  {
    kecamatan: "JAGAKARSA",
    prob: 0.1546,
    mc_median: 0.1746,
    mc_min: 0.0,
    mc_max: 0.3866,
    kategori: "Rendah",
  },
  {
    kecamatan: "DUREN SAWIT",
    prob: 0.1339,
    mc_median: 0.1846,
    mc_min: 0.0195,
    mc_max: 0.3878,
    kategori: "Rendah",
  },
  {
    kecamatan: "KALI DERES",
    prob: 0.1293,
    mc_median: 0.1964,
    mc_min: 0.0196,
    mc_max: 0.376,
    kategori: "Rendah",
  },
  {
    kecamatan: "CIRACAS",
    prob: 0.1129,
    mc_median: 0.1099,
    mc_min: 0.0088,
    mc_max: 0.2573,
    kategori: "Rendah",
  },
  {
    kecamatan: "CIPAYUNG",
    prob: 0.0926,
    mc_median: 0.1121,
    mc_min: 0.02,
    mc_max: 0.2551,
    kategori: "Rendah",
  },
  {
    kecamatan: "PESANGGRAHAN",
    prob: 0.0831,
    mc_median: 0.1075,
    mc_min: 0.0,
    mc_max: 0.2807,
    kategori: "Rendah",
  },
  {
    kecamatan: "PASAR REBO",
    prob: 0.074,
    mc_median: 0.1078,
    mc_min: 0.0,
    mc_max: 0.2425,
    kategori: "Rendah",
  },
];

// Feature importance data (dari feature_importance.csv — Random Forest, Mean Decrease Gini)
const FEATURE_IMPORTANCE = [
  { variabel: "NTL", importance: 0.2815, label: "Night-Time Light" },
  { variabel: "LST", importance: 0.1361, label: "Land Surface Temp" },
  { variabel: "SKTM", importance: 0.1005, label: "SKTM (Kemiskinan)" },
  {
    variabel: "kepadatan_penduduk",
    importance: 0.0924,
    label: "Kepadatan Penduduk",
  },
  {
    variabel: "jumlah_bangunan_kumuh",
    importance: 0.0622,
    label: "Bangunan Kumuh",
  },
  { variabel: "NDBI", importance: 0.0551, label: "Built-up Index" },
  {
    variabel: "densitas_transportasi",
    importance: 0.0549,
    label: "Densitas Transportasi",
  },
  {
    variabel: "densitas_pendidikan",
    importance: 0.0495,
    label: "Densitas Pendidikan",
  },
  {
    variabel: "densitas_komersial",
    importance: 0.0406,
    label: "Densitas Komersial",
  },
  {
    variabel: "densitas_kesehatan",
    importance: 0.0369,
    label: "Densitas Kesehatan",
  },
  {
    variabel: "jumlah_hunian_vertikal",
    importance: 0.0357,
    label: "Hunian Vertikal",
  },
  { variabel: "NDVI", importance: 0.0346, label: "Vegetasi (NDVI)" },
  { variabel: "jumlah_lokasi_kumuh", importance: 0.02, label: "Lokasi Kumuh" },
];

const CAT_COLORS = {
  "Sangat Tinggi": "#d62728",
  Tinggi: "#ff7f0e",
  Sedang: "#f0b429",
  Rendah: "#4e9bcd",
};

// ──────────────────────────────────────────────────────────────────
// 1. READING PROGRESS BAR
// ──────────────────────────────────────────────────────────────────
function initProgressBar() {
  const bar = document.getElementById("progress-bar");
  if (!bar) return;
  window.addEventListener(
    "scroll",
    () => {
      const scrollTop = document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (scrollTop / docHeight) * 100 + "%";
    },
    { passive: true },
  );
}

// ──────────────────────────────────────────────────────────────────
// 2. SCROLL REVEAL
// ──────────────────────────────────────────────────────────────────
function initScrollReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  els.forEach((el) => io.observe(el));
}

// ──────────────────────────────────────────────────────────────────
// 3. FEATURE IMPORTANCE CHART (animated bars)
// ──────────────────────────────────────────────────────────────────
function initFeatureImportance() {
  const container = document.getElementById("fi-chart-container");
  if (!container) return;

  const max = FEATURE_IMPORTANCE[0].importance;
  FEATURE_IMPORTANCE.forEach((d, i) => {
    const pct = ((d.importance / max) * 100).toFixed(1);
    const row = document.createElement("div");
    row.className = "fi-row reveal visible";
    row.style.transitionDelay = i * 0.05 + "s";
    row.innerHTML = `
      <div class="fi-label">${d.label}</div>
      <div class="fi-bar-track">
        <div class="fi-bar-fill" data-width="${pct}" style="width:0%"></div>
      </div>
      <div class="fi-value">${(d.importance * 100).toFixed(1)}%</div>
    `;
    container.appendChild(row);
  });

  // Animate bars when revealed
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.querySelectorAll(".fi-bar-fill").forEach((bar) => {
            bar.style.width = bar.dataset.width + "%";
          });
        }
      });
    },
    { threshold: 0.1 },
  );
  io.observe(container);
}

// ──────────────────────────────────────────────────────────────────
// 4. LEAFLET MAP
// ──────────────────────────────────────────────────────────────────
function initMap() {
  if (typeof L === "undefined") return;

  const map = L.map("map", {
    center: [-6.2088, 106.8456],
    zoom: 11,
    zoomControl: false,
    attributionControl: false,
  });

  L.control.zoom({ position: "bottomright" }).addTo(map);

  // Dark tile layer
  L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
    attribution: "© CartoDB",
    maxZoom: 18,
    subdomains: "abcd",
  }).addTo(map);

  // Build lookup for quick access
  const lookup = {};
  PREDICTION_DATA.forEach((d) => {
    lookup[d.kecamatan.toUpperCase()] = d;
  });
  // Expose to window so filter/action buttons in index.html can access it
  window._kecLookup = lookup;

  // Load GeoJSON
  const geojsonPath = "batas_kecamatan_jakarta.geojson";
  const infoPanel = document.getElementById("map-info-panel");
  const defaultContent = document.getElementById("info-default");
  const hoverContent = document.getElementById("info-hover");

  function styleFeature(feature) {
    const name = (feature.properties.nama_kec || "").toUpperCase().trim();
    const d = lookup[name];
    const color = d ? CAT_COLORS[d.kategori] : "#333";
    return {
      fillColor: color,
      weight: 0.8,
      opacity: 0.6,
      color: "#1a1a2e",
      fillOpacity: d ? 0.72 : 0.3,
    };
  }

  function highlightFeature(e) {
    const layer = e.target;
    layer.setStyle({ weight: 2, opacity: 1, fillOpacity: 0.9 });
    layer.bringToFront();

    const name = (layer.feature.properties.nama_kec || "").toUpperCase().trim();
    const d = lookup[name];

    if (d && infoPanel) {
      document.getElementById("info-default").style.display = "none";
      document.getElementById("info-hover").style.display = "block";
      document.getElementById("kec-name").textContent = d.kecamatan;
      const pct = (d.prob * 100).toFixed(1);
      document.getElementById("kec-prob-pct").textContent = pct + "%";
      document.getElementById("kec-prob-pct").style.color =
        CAT_COLORS[d.kategori];
      document.getElementById("kec-prob-fill").style.width = pct + "%";
      document.getElementById("kec-prob-fill").style.background =
        CAT_COLORS[d.kategori];

      const katEl = document.getElementById("kec-kategori");
      katEl.textContent = "Risiko " + d.kategori;
      katEl.style.background = CAT_COLORS[d.kategori] + "22";
      katEl.style.color = CAT_COLORS[d.kategori];
      katEl.style.border = "1px solid " + CAT_COLORS[d.kategori] + "44";

      const mcEl = document.getElementById("kec-mc-range");
      if (d.mc_min !== undefined && d.mc_max !== undefined) {
        mcEl.textContent =
          "MC Median: " +
          (d.mc_median * 100).toFixed(1) +
          "% | Range: " +
          (d.mc_min * 100).toFixed(1) +
          "% – " +
          (d.mc_max * 100).toFixed(1) +
          "%";
      } else {
        mcEl.textContent = "";
      }
    }
  }

  function resetHighlight(e) {
    geojsonLayer.resetStyle(e.target);
    if (infoPanel) {
      document.getElementById("info-default").style.display = "flex";
      document.getElementById("info-hover").style.display = "none";
    }
  }

  let geojsonLayer;

  // Expose map and layer to window so external button handlers can access them
  window._leafletMap = map;

  function loadGeoJSON() {
    fetch(geojsonPath)
      .then((r) => {
        if (!r.ok) throw new Error("GeoJSON tidak ditemukan");
        return r.json();
      })
      .then((data) => {
        geojsonLayer = L.geoJSON(data, {
          style: styleFeature,
          onEachFeature: (feature, layer) => {
            layer.on({
              mouseover: highlightFeature,
              mouseout: resetHighlight,
            });
            const name = (feature.properties.nama_kec || "")
              .toUpperCase()
              .trim();
            const d = lookup[name.toUpperCase()];
            if (d) {
              layer.bindTooltip(
                `
                <div style="font-family:'IBM Plex Sans',sans-serif;font-size:12px;padding:4px 8px">
                  <strong>${d.kecamatan}</strong><br/>
                  <span style="color:${CAT_COLORS[d.kategori]};font-weight:600">${(d.prob * 100).toFixed(1)}% — ${d.kategori}</span>
                </div>
              `,
                { sticky: true, className: "custom-tooltip" },
              );
            }
          },
        }).addTo(map);

        // Expose layer to window so filter/action buttons can access it
        window._kecLayer = geojsonLayer;

        // Fit bounds
        map.fitBounds(geojsonLayer.getBounds(), { padding: [20, 20] });
      })
      .catch(() => {
        // Fallback: show placeholder message
        document.getElementById("map-placeholder").style.display = "flex";
        console.warn(
          "GeoJSON belum tersedia. Konversi SHP ke GeoJSON terlebih dahulu.",
        );
      });
  }

  loadGeoJSON();
}

// ──────────────────────────────────────────────────────────────────
// 5. RANKING TABS
// ──────────────────────────────────────────────────────────────────
function initRanking() {
  const groups = {
    "Sangat Tinggi": PREDICTION_DATA.filter(
      (d) => d.kategori === "Sangat Tinggi",
    ),
    Tinggi: PREDICTION_DATA.filter((d) => d.kategori === "Tinggi"),
    Sedang: PREDICTION_DATA.filter((d) => d.kategori === "Sedang"),
    Rendah: PREDICTION_DATA.filter((d) => d.kategori === "Rendah"),
  };

  const catKeys = {
    sangat: "Sangat Tinggi",
    tinggi: "Tinggi",
    sedang: "Sedang",
    rendah: "Rendah",
  };

  Object.keys(catKeys).forEach((key) => {
    const panel = document.getElementById("panel-" + key);
    if (!panel) return;
    const list = panel.querySelector(".ranking-list");
    if (!list) return;
    const items = groups[catKeys[key]] || [];
    items
      .sort((a, b) => b.prob - a.prob)
      .forEach((d, i) => {
        const color = CAT_COLORS[d.kategori];
        const item = document.createElement("div");
        item.className = "ranking-item reveal visible";
        item.style.transitionDelay = i * 0.06 + "s";
        item.innerHTML = `
        <div class="rank-num">${i + 1}</div>
        <div class="rank-kec">${d.kecamatan}</div>
        <div class="rank-bar-track">
          <div class="rank-bar-fill" style="width:${(d.prob * 100).toFixed(1)}%;background:${color}"></div>
        </div>
        <div class="rank-pct" style="color:${color}">${(d.prob * 100).toFixed(1)}%</div>
      `;
        list.appendChild(item);
      });
  });

  // Tab switching
  document.querySelectorAll(".risk-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document
        .querySelectorAll(".risk-tab")
        .forEach((t) => t.classList.remove("active"));
      document
        .querySelectorAll(".tab-panel")
        .forEach((p) => p.classList.remove("active"));
      tab.classList.add("active");
      const panel = document.getElementById("panel-" + tab.dataset.cat);
      if (panel) panel.classList.add("active");
    });
  });
}

// ──────────────────────────────────────────────────────────────────
// 6. CHART.JS VISUALIZATIONS
// ──────────────────────────────────────────────────────────────────
function initCharts() {
  if (typeof Chart === "undefined") return;

  Chart.defaults.font.family = "'IBM Plex Sans', sans-serif";
  Chart.defaults.color = "rgba(14,14,14,0.6)";

  // Count by category
  const catCounts = { "Sangat Tinggi": 0, Tinggi: 0, Sedang: 0, Rendah: 0 };
  PREDICTION_DATA.forEach((d) => catCounts[d.kategori]++);

  // ── Donut Chart: Distribusi Risiko ──
  const donutCtx = document.getElementById("chart-donut")?.getContext("2d");
  if (donutCtx) {
    new Chart(donutCtx, {
      type: "doughnut",
      data: {
        labels: ["Sangat Tinggi", "Tinggi", "Sedang", "Rendah"],
        datasets: [
          {
            data: Object.values(catCounts),
            backgroundColor: ["#d62728", "#ff7f0e", "#f0b429", "#4e9bcd"],
            borderColor: "#ede8dc",
            borderWidth: 3,
            hoverOffset: 8,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              padding: 16,
              font: { size: 12, family: "'IBM Plex Mono',monospace" },
              usePointStyle: true,
            },
          },
          tooltip: {
            callbacks: {
              label: (ctx) => ` ${ctx.label}: ${ctx.raw} kecamatan`,
            },
          },
        },
        cutout: "65%",
      },
    });
  }

  // ── Horizontal Bar: Top 15 Probabilitas ──
  const barCtx = document.getElementById("chart-topbar")?.getContext("2d");
  if (barCtx) {
    const top15 = [...PREDICTION_DATA]
      .sort((a, b) => b.prob - a.prob)
      .slice(0, 15);

    new Chart(barCtx, {
      type: "bar",
      data: {
        labels: top15.map((d) => d.kecamatan),
        datasets: [
          {
            label: "Probabilitas Gentrifikasi",
            data: top15.map((d) => +(d.prob * 100).toFixed(1)),
            backgroundColor: top15.map((d) => CAT_COLORS[d.kategori] + "cc"),
            borderColor: top15.map((d) => CAT_COLORS[d.kategori]),
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
          tooltip: {
            callbacks: {
              label: (ctx) => ` ${ctx.raw.toFixed(1)}%`,
            },
          },
        },
        scales: {
          x: {
            max: 100,
            grid: { color: "rgba(14,14,14,0.06)" },
            ticks: {
              callback: (v) => v + "%",
              font: { size: 11, family: "'IBM Plex Mono',monospace" },
            },
          },
          y: {
            grid: { display: false },
            ticks: {
              font: { size: 10.5, family: "'IBM Plex Sans',sans-serif" },
            },
          },
        },
      },
    });
  }

  // ── Model Performance Radar ──
  const radarCtx = document.getElementById("chart-radar")?.getContext("2d");
  if (radarCtx) {
    new Chart(radarCtx, {
      type: "radar",
      data: {
        labels: [
          "AUC",
          "F1-Score",
          "Balanced Acc",
          "Precision",
          "Recall",
          "Kappa",
        ],
        datasets: [
          {
            label: "Random Forest",
            data: [0.951, 0.778, 0.943, 0.636, 1.0, 0.721],
            borderColor: "#c8860a",
            backgroundColor: "rgba(200,134,10,0.12)",
            borderWidth: 2,
            pointBackgroundColor: "#c8860a",
            pointRadius: 4,
          },
          {
            label: "Decision Tree",
            data: [0.796, 0.667, 0.841, 0.625, 0.714, 0.595],
            borderColor: "#4e9bcd",
            backgroundColor: "rgba(78,155,205,0.08)",
            borderWidth: 2,
            pointBackgroundColor: "#4e9bcd",
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
              font: { size: 11, family: "'IBM Plex Mono',monospace" },
            },
          },
        },
        scales: {
          r: {
            min: 0.4,
            max: 1.0,
            ticks: {
              stepSize: 0.1,
              font: { size: 9, family: "'IBM Plex Mono',monospace" },
              backdropColor: "transparent",
            },
            grid: { color: "rgba(14,14,14,0.08)" },
            angleLines: { color: "rgba(14,14,14,0.08)" },
            pointLabels: {
              font: { size: 11, family: "'IBM Plex Mono',monospace" },
            },
          },
        },
      },
    });
  }

  // ── Scatter: prob_rf_final vs ranking ──
  const scatterCtx = document.getElementById("chart-scatter")?.getContext("2d");
  if (scatterCtx) {
    const sorted = [...PREDICTION_DATA].sort((a, b) => a.prob - b.prob);
    new Chart(scatterCtx, {
      type: "scatter",
      data: {
        datasets: [
          {
            label: "Kecamatan",
            data: sorted.map((d, i) => ({
              x: +(d.prob * 100).toFixed(2),
              y: i + 1,
              label: d.kecamatan,
              cat: d.kategori,
            })),
            backgroundColor: sorted.map((d) => CAT_COLORS[d.kategori] + "bb"),
            borderColor: sorted.map((d) => CAT_COLORS[d.kategori]),
            borderWidth: 1,
            pointRadius: 6,
            pointHoverRadius: 9,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => {
                const pt = ctx.raw;
                return `${pt.label}: ${pt.x.toFixed(1)}% — ${pt.cat}`;
              },
            },
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Probabilitas Gentrifikasi (%)",
              font: { size: 11 },
            },
            grid: { color: "rgba(14,14,14,0.06)" },
            ticks: { callback: (v) => v + "%" },
          },
          y: {
            title: {
              display: true,
              text: "Ranking Kecamatan",
              font: { size: 11 },
            },
            grid: { color: "rgba(14,14,14,0.06)" },
          },
        },
      },
    });
  }
}

// ──────────────────────────────────────────────────────────────────
// 7. SMOOTH SCROLL FOR NAV LINKS
// ──────────────────────────────────────────────────────────────────
function initNav() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

// ──────────────────────────────────────────────────────────────────
// INIT
// ──────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  initProgressBar();
  initScrollReveal();
  initFeatureImportance();
  initRanking();
  initNav();

  // Charts & Map need external libs — wait for them
  window.addEventListener("load", () => {
    initCharts();
    initMap();
  });
});
