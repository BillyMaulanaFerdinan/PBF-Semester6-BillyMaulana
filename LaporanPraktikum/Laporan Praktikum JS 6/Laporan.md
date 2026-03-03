# Laporan Praktikum JS 5
## Langkah Praktikum 

### Langkah 1 – Menjalankan Project

Menghapus Tailwind karena tidak digunakan

![alt text](<Screenshot 2026-03-04 025335.png>)

### Langkah 2 – Membuat Custom Document

Modifikasi pada folder pages _document.js

![alt text](<Screenshot 2026-03-04 025701.png>)

### Langkah 3 – Pengaturan Title per Halaman

Modifikasi pages/index.tsx.

![alt text](<Screenshot 2026-03-04 025912.png>)

![alt text](<Screenshot 2026-03-04 025925.png>)

### Langkah 4 – Membuat Custom Error Page (404)

Di folder pages, buat file 404.tsx

![alt text](<Screenshot 2026-03-04 030258.png>)

Akses URL yang tidak ada

![alt text](<Screenshot 2026-03-04 030312.png>)

### Langkah 5 – Styling Halaman 404

Buat file: styles/404.module.scss

![alt text](<Screenshot 2026-03-04 030832.png>)

Modifikasi kode pada pages/404.tsx:

![alt text](<Screenshot 2026-03-04 030819.png>)

Jalankan browser

![alt text](<Screenshot 2026-03-04 030843.png>)

### Langkah 6 – Menampilkan Gambar dari Folder Public

Modifikasi kode pada 404.tsx:

![alt text](<Screenshot 2026-03-04 031336.png>)

Jalankan browser

![alt text](<Screenshot 2026-03-04 031343.png>)

## E. Tugas Praktikum

### Tugas 1 (Wajib)

Tambahkan:

Judul halaman

![alt text](<Screenshot 2026-03-04 032616.png>)

Deskripsi singkat

![alt text](<Screenshot 2026-03-04 032710.png>)

Gambar ilustrasi

- Sudah dilakukan di tugas 6

### Tugas 2 (Wajib)

Custom warna, font, dan layout halaman 404

![alt text](<Screenshot 2026-03-04 033332.png>)

![alt text](<Screenshot 2026-03-04 033341.png>)

![alt text](<Screenshot 2026-03-04 033446.png>)

Navbar tidak tampil di halaman 404

![alt text](<Screenshot 2026-03-04 033352.png>)

### Tugas 3 (Pengayaan)

Tambahkan tombol:

“Kembali ke Home”

![alt text](<Screenshot 2026-03-04 033656.png>)

Gunakan navigasi Next.js (Link)

![alt text](<Screenshot 2026-03-04 033649.png>)

## F. Pertanyaan Evaluasi

1.Apa fungsi utama _document.js?

Jawab: Untuk mengatur struktur dasar HTML (seperti html, head, dan body) pada aplikasi Next.js.

2.Mengapa title tidak disarankan di _document.js?

Jawab: Karena title seharusnya diatur per halaman (menggunakan Head), bukan global di _document.js.

3.Apa perbedaan halaman biasa dan halaman 404.js?

Jawab: 404.js ditampilkan otomatis saat user mengakses halaman yang tidak ada, sedangkan halaman biasa punya route normal.

4.Mengapa folder public tidak perlu di-import?

Jawab: Karena file di folder public bisa diakses langsung lewat URL tanpa perlu import.