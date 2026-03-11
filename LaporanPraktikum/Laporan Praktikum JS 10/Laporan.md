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

##