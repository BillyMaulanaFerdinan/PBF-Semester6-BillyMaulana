# Laporan Praktikum JS 10
## Langkah Praktikum 

### Bagian 1 – Setup Halaman Static

Buat file baru pada pages/products/static.tsx

Modifikasi file static.tsx

![alt text](<Screenshot 2026-03-11 200030.png>)

### Bagian 3 – Build Production Mode

Pindah beberapa folder diluar pages antara lain

![alt text](<Screenshot 2026-03-11 201025.png>)

Jalankan: npm run build

![alt text](<Screenshot 2026-03-11 202742.png>)

Jika berhasil: npm run start

![alt text](<Screenshot 2026-03-11 202820.png>)

Akses: http://localhost:3000/products/static

![alt text](<Screenshot 2026-03-11 202953.png>)

### Bagian 4 – Pengujian Perubahan Data

Buka database firebasenya
- Tambahkan produk baru di database.

![alt text](<Screenshot 2026-03-11 203716.png>)

![alt text](<Screenshot 2026-03-11 203739.png>)

Buka halaman:
- /products (CSR) → Data bertambah

![alt text](<Screenshot 2026-03-11 203823.png>)

- /products/server (SSR) → Data bertambah

![alt text](<Screenshot 2026-03-11 203831.png>)

- /products/static (SSG) → Data tidak berubah

![alt text](<Screenshot 2026-03-11 203817.png>)

Uji 2 – Build Ulang

Jalankan kembali:
- npm run build
    - lakukan secara bersamaan dengan npm run dev saat melakukan npm run build

    ![alt text](<Screenshot 2026-03-11 204125.png>)

- npm run start
    -  npm run dev stop terlebih dahulu setelah itu npm run start

    ![alt text](<Screenshot 2026-03-11 204214.png>)

2. Refresh halaman static
- Data baru muncul

![alt text](<Screenshot 2026-03-11 204238.png>)

## D. Tugas Praktikum

Tugas Individu

1. Buat 3 halaman:
- CSR
![alt text](<Screenshot 2026-03-11 203823.png>)

- SSR
![alt text](<Screenshot 2026-03-11 203831.png>)

- SSG
![alt text](<Screenshot 2026-03-11 203817.png>)


2. Lakukan pengujian:
- Tambah data
![alt text](<Screenshot 2026-03-11 205128.png>)

![alt text](<Screenshot 2026-03-11 205140.png>)

- Hapus data
![alt text](<Screenshot 2026-03-11 205325.png>)

![alt text](<Screenshot 2026-03-11 205335.png>)

- Bandingkan hasil

Setelah menambah

![alt text](<Screenshot 2026-03-11 205218.png>)

Setelah menghapus

![alt text](<Screenshot 2026-03-11 205346.png>)

3. Buat laporan analisis minimal 3 halaman.

## E. Studi Analisis

Jawab pertanyaan berikut:

1. Mengapa SSG tidak menampilkan data terbaru?
Jawab: Karena halaman dibuat saat proses build, sehingga data tidak berubah sampai dilakukan build ulang.

2. Mengapa SSG lebih cepat?
Jawab: Karena halaman sudah berupa file HTML statis yang langsung dikirim ke browser.

3. Kapan SSG tidak cocok digunakan?
Jawab: Saat aplikasi memiliki data yang sering berubah atau real-time.

4. Mengapa e-commerce tidak cocok menggunakan SSG murni?
Jawab: Karena data produk, stok, dan harga sering berubah sehingga membutuhkan data dinamis

5. Apa perbedaan build mode dan development mode?
Jawab: Development mode digunakan saat pengembangan dengan fitur live reload, sedangkan build mode menghasilkan versi optimasi siap produksi.