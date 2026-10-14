# Web Story: Analisis Fenomena New-Build Gentrification di Jakarta

## 1. Deskripsi

Folder `Web story` berisi artefak Web Story interaktif untuk menyajikan hasil penelitian **“Analisis New-Build Gentrification di Jakarta Menggunakan Data Multisumber dengan Pendekatan Machine Learning”**.

Web Story menyampaikan latar belakang, metodologi, perubahan indikator fisik dan infrastruktur pada 2014–2024, hasil pemodelan dan prediksi pada tingkat kecamatan, serta validasi menggunakan informasi penggusuran. Aplikasi dibuat sebagai situs statis yang berjalan di sisi klien, menggunakan HTML, CSS, dan JavaScript, dengan pustaka Leaflet.js untuk peta serta Chart.js untuk visualisasi.

## 2. Struktur Folder dan File

```text
Web story/
├── index.html
├── script.js
├── style.css
├── batas_kecamatan_jakarta.geojson
├── data/
│   ├── NDVI_2014.tif
│   ├── NDVI_2024.tif
│   ├── POI_HV_2014.geojson
│   ├── POI_HV_2024.geojson
│   ├── POI_TRANS_2014.geojson
│   └── POI_TRANS_2024.geojson
└── images/
    ├── jakarta-cityscape.png
    ├── limitasi.png
    ├── Logo STIS.png
    ├── LST_2014.png
    ├── LST_2024.png
    ├── NDBI_2014.png
    ├── NDBI_2024.png
    ├── NDVI_2014.png
    ├── NDVI_2024.png
    ├── NTL_2014.png
    ├── NTL_2024.png
    ├── POI_HV_2014.png
    ├── POI_HV_2024.png
    ├── POI_TRANS_2014.png
    └── POI_TRANS_2024.png
```

Keterangan fungsi:

| File/Folder | Fungsi |
|---|---|
| `index.html` | Halaman utama yang berisi struktur dan narasi Web Story, serta memuat pustaka visualisasi dan `script.js`. |
| `script.js` | Mengatur interaksi dan fungsi visual Web Story, termasuk peta, grafik, serta pemuatan data yang digunakan oleh halaman. |
| `style.css` | Mengatur gaya visual, tata letak, tipografi, dan tampilan responsif halaman. |
| `batas_kecamatan_jakarta.geojson` | Data batas kecamatan yang digunakan sebagai dasar pemetaan. |
| `data/` | Menyimpan data geospasial pendukung, termasuk raster NDVI dan data titik hunian vertikal serta transportasi untuk tahun yang tersedia. |
| `images/` | Menyimpan gambar pendukung narasi dan visual perbandingan 2014–2024, termasuk peta indikator satelit dan sebaran POI. |

Daftar di atas mengikuti file yang terlihat pada direktori saat dokumentasi disusun. Jika ada file tambahan di dalam `data/` atau `images/`, pertahankan file tersebut apabila masih dipanggil oleh kode aplikasi. Sebaliknya, file yang tidak digunakan sebaiknya tidak disertakan tanpa alasan.

## 3. Isi dan Fitur Web Story

Web Story memuat bagian-bagian berikut:

1. **Latar belakang**, yang menjelaskan konteks perkembangan perkotaan dan konsep new-build gentrification.
2. **Metodologi**, termasuk sumber data dan alur penelitian berdasarkan CRISP-DM.
3. **Perubahan data satelit dan POI**, dengan pilihan indikator NTL, NDBI, NDVI, LST, transportasi publik, dan hunian vertikal untuk membandingkan kondisi 2014 dan 2024.
4. **Pemetaan dan hasil prediksi**, untuk menyajikan informasi spasial pada tingkat kecamatan.
5. **Validasi dan visualisasi hasil**, termasuk ringkasan evaluasi model dan perbandingan dengan data penggusuran.
6. **Kesimpulan dan batasan penelitian**, yang menjelaskan interpretasi serta keterbatasan hasil.

Rincian fitur yang aktif mengikuti implementasi terakhir pada `index.html` dan `script.js`.

## 4. Persyaratan

- Browser modern, seperti Google Chrome, Microsoft Edge, atau Mozilla Firefox.
- Koneksi internet untuk memuat pustaka JavaScript eksternal yang dirujuk melalui CDN, termasuk Chart.js dan Leaflet.js.
- Seluruh file dan folder artefak harus berada pada struktur direktori yang sesuai agar jalur relatif ke gambar dan data tetap valid.

## 5. Cara Menjalankan

1. Salin atau unduh seluruh folder `Web story` beserta subfolder dan file di dalamnya.
2. Untuk percobaan sederhana, buka `index.html` menggunakan browser.
3. Jika peta, data GeoJSON, atau fitur yang mengambil file lokal tidak berjalan saat halaman dibuka langsung, jalankan folder melalui server web lokal. Contohnya, buka folder di Visual Studio Code dan gunakan ekstensi Live Server.
4. Buka alamat lokal yang diberikan server melalui browser.
5. Periksa navigasi halaman, peta, grafik, tombol pilihan indikator, serta gambar untuk memastikan semua aset berhasil dimuat.


## 6. Batasan Interpretasi

Web Story menyajikan hasil penelitian sebagai informasi awal untuk memahami pola spasial dan meninjau kecamatan berdasarkan prediksi probabilitas new-build gentrification. Prediksi tersebut tidak dengan sendirinya membuktikan bahwa penggusuran atau perpindahan penduduk disebabkan oleh pembangunan baru. Interpretasi perlu mempertimbangkan metode, cakupan data, ketelitian lokasi data validasi, dan batasan penelitian yang dijelaskan pada Web Story.

## 7. Identitas Penelitian

- **Judul skripsi:** Analisis Fenomena New-Build Gentrification di Jakarta Menggunakan Data Multisumber dengan Pendekatan Machine Learning
- **Mahasiswa:** La Ode Muhammad Gazali
- **NIM:** 222212696
- **Program studi:** Diploma IV Komputasi Statistik
- **Institusi:** Politeknik Statistika STIS
- **Tahun:** 2026
