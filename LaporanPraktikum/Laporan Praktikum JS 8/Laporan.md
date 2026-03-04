# Laporan Praktikum JS 8
## Langkah Praktikum 

### Bagian 1 – Setup Data Produk

Pastikan data memiliki:
- id
- name
- category
- price
- image

![alt text](<Screenshot 2026-03-05 002923.png>)

jalankan browser http://localhost:3000/api/produk

![alt text](<Screenshot 2026-03-05 002946.png>)

### Bagian 2 – Implementasi CSR dengan useEffect

Membuat file index.tsx pada folder views/products

Modifikasi index.tsx

![alt text](<Screenshot 2026-03-05 004052.png>)

Buka file index.tsx pada pages/produk/

Modifikasi index.tsx pada pages/produk/

![alt text](<Screenshot 2026-03-05 004058.png>)

Jalankan browser http://localhost:3000/produk

![alt text](<Screenshot 2026-03-05 004032.png>)

Pada folder produk buat file produk.modules.scss

Modifikasi produk.modules.scss

![alt text](<Screenshot 2026-03-05 004505.png>)

Modifikasi Pada file index.tsx pada folder pages/views/product

![alt text](<Screenshot 2026-03-05 005123.png>)

Jalankan Browser

![alt text](<Screenshot 2026-03-05 005136.png>)

### Bagian 3 – Implementasi Skeleton Loading

Modfikasi file index.tsx pada folder views/product/index.tsx

![alt text](<Screenshot 2026-03-05 005648.png>)

Modifikasi file product.module.scss

![alt text](<Screenshot 2026-03-05 010249.png>)

Jalankan browser maka akan muncul skeleton yang terdapat animasi berkedip

![alt text](<Screenshot 2026-03-05 010304.png>)

Modifikasi pada index.tsx pada folder views/product/index.tsx

![alt text](<Screenshot 2026-03-05 010417.png>)

Jalankan browser maka akan muncul skeleton yang terdapat animasi berkedip

![alt text](<Screenshot 2026-03-05 010334.png>)

### Bagian 5 – Implementasi SWR

Install SWR

![alt text](<Screenshot 2026-03-05 014642.png>)

Buka dan modifkasi file index.tsx pada folder pages/product/

![alt text](<Screenshot 2026-03-05 014935.png>)

Agar terlihat lebih rapi
- Buat folder swr pada utils dan tambahkan file dengan nama fetcher.js
- Modifikasi file fetcher.ts

![alt text](<Screenshot 2026-03-05 014941.png>)

Modifikasi file index.tsx pada folder pages/produk

![alt text](<Screenshot 2026-03-05 015551.png>)

Bandingkan:
- useEffect manual
    - Kontrol penuh atas kapan dan bagaimana fetching dijalankan (misalnya di-mount, dependency berubah).
    - Perlu menulis boilerplate: state untuk data/loading/error, fetch/axios, cleanup, retry, dsb.
    - Tidak ada caching otomatis; setiap pemanggilan ulang biasanya mem-fetch ulang kecuali diatur sendiri.
    - Perlu menambahkan mekanisme revalidation, polling, deduplikasi request, dan lain‑lain jika dibutuhkan.
    - Ringan, tanpa dependensi eksternal – baik untuk kasus sederhana atau khusus.

- SWR
    - Library kecil dari Vercel khusus untuk React/Next.js.
    - Menyediakan hook useSWR yang otomatis meng-handle:
        - caching di memori,
        - revalidation saat window focus atau reconnect,
        - deduplikasi request,
        - fallback data, polling, error retry, dan banyak opsi konfigurasi.
    - Sangat memudahkan fetching data asinkron dan sinkronisasi state server–klien.
    - Menambah dependensi tetapi menghemat banyak kode dan bug.
    - Cocok ketika banyak komponen menggunakan data sama atau butuh UX responsif.

### 