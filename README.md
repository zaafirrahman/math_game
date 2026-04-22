# Math Arena ✏️

**Platform belajar matematika personal untuk siswa Algonova Math Tutoring.**

Math Arena adalah proyek kecil yang lahir dari kebutuhan nyata: siswa math tutoring Algonova butuh tempat mengerjakan soal yang runtut dan menyenangkan — bukan sekadar lembar latihan biasa. Berbeda dengan platform kursus pada umumnya yang materinya sudah fixed dari lembaga, seluruh konten di Math Arena dirancang langsung oleh tutor, disesuaikan dengan kebutuhan dan progress masing-masing siswa.

---

## Latar Belakang

Siswa math tutoring Algonova tidak terhubung ke platform resmi lembaga seperti siswa kursus reguler. Materi, urutan lesson, dan pendekatan pengajaran sepenuhnya ada di tangan tutor. Math Arena hadir sebagai jembatan: menjaga pengalaman belajar tetap terstruktur, interaktif, dan nggak bikin ngantuk — langsung dari browser, tanpa perlu install apapun.

---

## Fitur

Setiap siswa punya halaman belajar sendiri yang terdiri dari lesson-lesson. Dalam tiap lesson, ada empat bagian berurutan:

**1. Pemahaman Materi Ringkas**
Penjelasan konsep yang padat dan to-the-point — cukup untuk memahami inti materi sebelum masuk ke soal.

**2. Contoh Soal & Bahasan**
Contoh soal disertai pembahasan langkah demi langkah, supaya siswa tahu *kenapa* jawabannya begitu, bukan sekadar *apa* jawabannya.

**3. Jawab Soal Cepat (dengan Timer)**
Latihan soal dengan countdown timer untuk melatih kecepatan dan kepercayaan diri mengerjakan soal dalam kondisi terbatas waktu.

**4. Latihan Soal Santai**
Soal latihan tanpa tekanan waktu — buat memastikan pemahaman sudah solid sebelum lanjut ke lesson berikutnya.

---

## Struktur Proyek

```
math-arena/
├── index.html              # Halaman pemilihan akun siswa
├── assets/
├── student.html            # Halaman belajar students
├── students/
```

Setiap file siswa bersifat standalone — semua lesson, konten, dan logika ada di dalam satu file HTML.

---

## Akses

Buka `index.html` di browser, pilih akun siswa, masukkan password, dan langsung masuk ke halaman belajar. Tidak perlu server, tidak perlu koneksi internet khusus (kecuali untuk Google Fonts).

---

## Catatan

Proyek ini tidak dimaksudkan sebagai produk publik. Ini adalah tools internal yang dibuat tutor untuk mendukung proses belajar siswa-siswa tertentu secara personal. Konten lesson dibuat dan diperbarui langsung oleh tutor sesuai kebutuhan masing-masing siswa.

---

<sub>Framework Designed by <a href="https://zaafirrahman.github.io/">Zaafirrahman</a> · Project Supported by <a href="https://algonova.id/">Algonova</a></sub>