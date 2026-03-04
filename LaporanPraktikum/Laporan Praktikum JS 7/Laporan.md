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

###