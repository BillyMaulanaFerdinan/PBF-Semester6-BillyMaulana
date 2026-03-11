# Laporan Praktikum JS 12
## Langkah Praktikum 

### Bagian 1 – Tambahkan revalidate

Buka halaman static.tsx pada folder src/pages/produk

![alt text](<Screenshot 2026-03-12 020226.png>)

### Bagian 2 – Pengujian ISR

Jalankan: ( lakukan hal sama seperti JS sebelumnya untuk ngebuild SSG)

![alt text](<Screenshot 2026-03-12 021345.png>)

![alt text](<Screenshot 2026-03-12 021437.png>)

Tambahkan data baru di database pada firebase

![alt text](<Screenshot 2026-03-12 021748.png>)

Refresh halaman sebelum 10 detik → Data lama.

- Sebelum 10 detik data yang akan ditampilkan masih data lama

Refresh setelah 10 detik → Data baru muncul.

![alt text](<Screenshot 2026-03-12 021935.png>)

## D. On-Demand Revalidation

### Bagian 1 – Buat API Revalidate

Buat file revalidate.ts pada folder pages/api/ dan modifikasi

![alt text](<Screenshot 2026-03-12 022431.png>)

####