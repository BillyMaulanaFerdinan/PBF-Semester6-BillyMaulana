# Laporan Praktikum JS 13
## Langkah Praktikum 

### Bagian 1 – Membuat Middleware

Modifikasi file index.tsx pada folder src/pages/produk

![alt text](<Screenshot 2026-04-08 210128.png>)

Buat file: src/middleware.ts Sejajar dengan folder pages.

![alt text](<Screenshot 2026-04-08 210149.png>)

### Bagian 2 – Struktur Dasar Middleware

![alt text](<Screenshot 2026-04-08 210153.png>)

### Bagian 3 – Redirect Sederhana

![alt text](<Screenshot 2026-04-08 211438.png>)

Semua halaman akan redirect ke home dan error dikarenakan terus menerus loading

![alt text](<Screenshot 2026-04-08 211454.png>)

### Bagian 4 – Batasi Route Tertentu

Mengatasi pada bagian 3 maka perlu pembatasan route

![alt text](<Screenshot 2026-04-08 211910.png>)

### Bagian 5 – Simulasi Sistem Login

Modifikasi file middleware.ts

![alt text](<Screenshot 2026-04-08 212240.png>)

### D. Pengujian

Uji 1 – isLogin = false

![alt text](<Screenshot 2026-04-08 212409.png>)

![alt text](<Screenshot 2026-04-08 212415.png>)

Uji 2 – isLogin = true

![alt text](<Screenshot 2026-04-08 212516.png>)

![alt text](<Screenshot 2026-04-08 212524.png>)

Uji 3 – Tambahkan Multiple Route

![alt text](<Screenshot 2026-04-08 223001.png>)

## F. Tugas Praktikum

Tugas Individu

1. Buat halaman:
- /products
- /about
- /login
2. Implementasikan Middleware:
- Redirect ke /login jika belum login.
- Izinkan akses jika login true.

![alt text](<Screenshot 2026-04-08 223805.png>)

![alt text](<Screenshot 2026-04-08 223812.png>)

3. Tambahkan proteksi hanya untuk route tertentu.
4. Dokumentasikan:
- Screenshot sebelum dan sesudah redirect.

    Sebelum redirect saat klik tombol login maka akan kembali ke halaman login lagi

    ![alt text](<Screenshot 2026-04-08 223309.png>)

    Sesudah implementasi middleware saat klik tombol login akan redirect ke halaman produk

    ![alt text](<Screenshot 2026-04-08 223510.png>)

- Perbandingan dengan useEffect.

useEffect melakukan redirect setelah render, sehingga bisa menimbulkan glitch dan keamanannya lebih lemah karena berjalan di client. Selain itu, harus diterapkan di setiap halaman.

Sebaliknya, Middleware berjalan sebelum render, tidak menimbulkan glitch, lebih aman, dan cukup dibuat sekali untuk digunakan secara global.

## G. Pertanyaan Analisis

1. Mengapa middleware lebih aman dibanding useEffect?
Jawab: Karena dijalankan di server sebelum halaman diakses, sehingga proteksi tidak bisa dilewati dari client.

2. Mengapa middleware tidak menimbulkan glitch?
Jawab: Karena redirect terjadi sebelum halaman dirender ke user.

3. Apa risiko jika semua halaman diproteksi tanpa pengecualian?
Jawab: Halaman publik (login, register) ikut terblokir dan bisa menyebabkan error/loop.

4. Kapan middleware tidak diperlukan?
Jawab: Saat aplikasi tidak membutuhkan proteksi atau logic sebelum request diproses.

5. Apa perbedaan middleware dan API route?
Jawab: Middleware untuk intercept/validasi request sebelum masuk halaman, sedangkan API route untuk membuat endpoint backend.