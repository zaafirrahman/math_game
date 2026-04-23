# Math Arena ✏️

**Platform belajar matematika — terbuka untuk umum maupun personal untuk siswa Algonova.**

Math Arena awalnya lahir dari kebutuhan sederhana: siswa Math Tutoring Algonova butuh tempat mengerjakan soal yang runtut dan menyenangkan, dengan materi yang dirancang langsung oleh tutor — bukan fixed dari lembaga. Seiring berkembangnya proyek, Math Arena kini hadir dalam dua portal: satu untuk publik umum, satu khusus siswa Algonova.

---

## Portal

### 🌐 General Users — Free & Publik
Siapapun bisa akses tanpa perlu akun. Berisi fondasi matematika dari SD sampai SMA, mencakup 8 topik utama yang disusun secara progresif:

| # | Topik |
|---|-------|
| 1 | Fondasi Bilangan |
| 2 | Pola dan Logika |
| 3 | Bahasa Aljabar |
| 4 | Geometri dan Ruang |
| 5 | Relasi, Fungsi, dan Grafik |
| 6 | Trigonometri |
| 7 | Statistika dan Peluang |
| 8 | Kalkulus Dasar |

### 🔒 Algonova Students — Private, By Invitation
Portal khusus siswa Math Tutoring Algonova. Materi dan sesi disesuaikan dengan lesson plan pribadi masing-masing siswa, dirancang langsung oleh tutor. Akses menggunakan akun dan password yang diberikan tutor.

---

## Struktur Lesson

Baik di portal publik maupun Algonova Students, setiap lesson terdiri dari empat bagian berurutan:

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
math_game/
├── index.html                  # Halaman pemilihan portal
├── general_users.html          # Portal publik (8 topik fondasi matematika)
├── algo_students.html          # Portal Algonova Students (pilih akun)
├── assets/
├── algo_students/
├── general_users/
└── README.md
```

Setiap file siswa bersifat standalone — semua lesson, konten, dan logika ada di dalam satu file HTML.

---

## Akses

Buka `index.html` di browser dan pilih portal yang sesuai. Tidak perlu server, tidak perlu install apapun (kecuali koneksi internet untuk Google Fonts).

- **General Users** — langsung masuk tanpa login
- **Algonova Students** — pilih akun, masukkan password yang diberikan tutor

---

## Catatan

Konten portal publik disusun sebagai referensi belajar mandiri yang bisa diakses siapapun. Konten portal Algonova Students dibuat dan diperbarui langsung oleh tutor sesuai kebutuhan dan progress masing-masing siswa.

---

<sub>Framework Designed by <a href="https://zaafirrahman.github.io/">Zaafirrahman</a> · Project Supported by <a href="https://algonova.id/">Algonova</a></sub>