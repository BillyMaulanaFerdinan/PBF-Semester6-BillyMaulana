# Laporan Praktikum JS 7
## Langkah Praktikum 

### Langkah 2 – Membuat API Produk
Buat file pad pages/api/produk.js

Tambahkan data statis:

![alt text](<Screenshot 2026-03-04 210749.png>)

Akses: http://localhost:3000/api/produk


![alt text](<Screenshot 2026-03-04 210755.png>)


### Langkah 3 – Fetch Data API di Frontend
Modifikasi kode: Tambahkan useEffect() dan comment useEffect untuk isLogin

![alt text](<Screenshot 2026-03-04 211244.png>)

Jalankan browser http://localhost:3000/produk

![alt text](<Screenshot 2026-03-04 211251.png>)

## E. Integrasi Firebase

### Langkah 5 – Setup Firebase

Buka Firebase Go To Console ( login dengan login google)

![alt text](<Screenshot 2026-03-04 211848.png>)

Buat project baru

![alt text](<Screenshot 2026-03-04 212001.png>)

Select parent resource

![alt text](<Screenshot 2026-03-04 212157.png>)

create project dan disable google analytics

![alt text](<Screenshot 2026-03-04 212157.png>)

![alt text](<Screenshot 2026-03-04 212416.png>)

![alt text](<Screenshot 2026-03-04 212504.png>)

add app dan pilih web

![alt text](<Screenshot 2026-03-04 212527.png>)

register app

![alt text](<Screenshot 2026-03-04 212614.png>)

continue to console

![alt text](<Screenshot 2026-03-04 212653.png>)

Aktifkan Firestore Database

![alt text](<Screenshot 2026-03-04 212803.png>)

create database

![alt text](<Screenshot 2026-03-04 212840.png>)

![alt text](<Screenshot 2026-03-04 212959.png>)

![alt text](<Screenshot 2026-03-04 213032.png>)

![alt text](<Screenshot 2026-03-04 213048.png>)

![alt text](<Screenshot 2026-03-04 213138.png>)

Rubah rules jadi true lalu publish

![alt text](<Screenshot 2026-03-04 213206.png>)

Make collection

![alt text](<Screenshot 2026-03-04 213256.png>)

products

![alt text](<Screenshot 2026-03-04 213256.png>)

auto-id

![alt text](<Screenshot 2026-03-04 213323.png>)

Add field

![alt text](<Screenshot 2026-03-04 213431.png>)

![alt text](<Screenshot 2026-03-04 213443.png>)

### Langkah 6 – Install Firebase

npm install firebase

![alt text](<Screenshot 2026-03-04 214554.png>)

Buat folder dan file ts pada pages utlis/db/firebase.ts

Copy paste yang ada pada kotak merah ke file firebase.ts

![alt text](<Screenshot 2026-03-04 214954.png>)

### Langkah 7 – Konfigurasi Environment Variable agar credensial firebase tidak dapat dilihat saat dipush di repository

Buat file: .env.local

Modifikasi file env

![alt text](<Screenshot 2026-03-04 215606.png>)

### Langkah 8 – Konfigurasi Firebase

Modifikasi firebase.ts

![alt text](<Screenshot 2026-03-04 215820.png>)

### Langkah 9 – Ambil Data dari Firestore

Buat file ulits/db/servicefirebase.js

modifikasi file servicefirebase.js

![alt text](<Screenshot 2026-03-04 220122.png>)

### Langkah 10 – API Mengambil Data Firebase

Edit pages/api/product.js

![alt text](<Screenshot 2026-03-04 222823.png>)

Jalankan browser http://localhost:3000/api/produk

![alt text](<Screenshot 2026-03-04 222829.png>)

Modifikasi index.ts pada produk sesuaikan nama typenya dan db nya

![alt text](<Screenshot 2026-03-04 223020.png>)

Jalankan browser

![alt text](<Screenshot 2026-03-04 223028.png>)

## Tugas Praktikum

Tugas 1 (Wajib)

• Tambahkan minimal 3 data produk di Firestore

![alt text](<Screenshot 2026-03-04 225533.png>)

• Pastikan data tampil di halaman produk

![alt text](<Screenshot 2026-03-04 225542.png>)

Tugas 2 (Wajib)

• Tambahkan field baru:

• category

![alt text](<Screenshot 2026-03-04 225820.png>)

• Tampilkan category di frontend

![alt text](<Screenshot 2026-03-04 225929.png>)

![alt text](<Screenshot 2026-03-04 225828.png>)

Tugas 3 (Pengayaan)

• Tambahkan tombol Refresh Data

![alt text](<Screenshot 2026-03-04 230252.png>)

![alt text](<Screenshot 2026-03-04 230344.png>)

• Gunakan fetch ulang tanpa reload halaman

![alt text](<Screenshot 2026-03-04 230312.png>)

## G. Pertanyaan Evaluasi

1.Apa fungsi API Routes pada Next.js?

Jawab: Untuk membuat backend API langsung di dalam project Next.js (handle request/response seperti server).

2.Mengapa .env.local tidak boleh di-push ke repository?

Jawab: Karena berisi data sensitif (API key, password, dll) yang bisa disalahgunakan jika tersebar.

3.Apa perbedaan data statis dan data dinamis?

Jawab: Data statis tidak sering berubah (dibuat saat build), sedangkan data dinamis bisa berubah-ubah dan diambil saat runtime.

4.Mengapa Next.js disebut framework fullstack?

Jawab: Karena bisa menangani frontend (UI) dan backend (API & server logic) dalam satu framework.