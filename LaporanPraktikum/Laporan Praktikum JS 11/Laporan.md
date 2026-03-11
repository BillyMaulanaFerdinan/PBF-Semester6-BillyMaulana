# Laporan Praktikum JS 11
## Langkah Praktikum 

### Bagian 1 – Membuat Dynamic Route

Buka file pages/products/[product].tsx dan modfikasi sbb ( line 20 )

![alt text](<Screenshot 2026-03-11 221937.png>)

Jalankan browser http://localhost:3000/produk

Jika kita klik salah satu gambar maka akan menuju halaman lain

![alt text](<Screenshot 2026-03-11 222112.png>)

### Bagian 2 – Implementasi CSR (Client Rendering)

Modifikasi pada file [produk].tsx pada folder src/pages/produk/

![alt text](<Screenshot 2026-03-11 222811.png>)

Pada file produk.ts pada folder pages/api di rename menjadi [[...product]].ts

![alt text](<Screenshot 2026-03-11 223419.png>)

Modifikasi file servicefirebase.ts

![alt text](<Screenshot 2026-03-11 223220.png>)

Modifikasi file [[...produk]].ts

![alt text](<Screenshot 2026-03-11 223659.png>)

Jalankan browser http://localhost:3000/api/produk/3FwB5UeuLVBpQy2umXHD

![alt text](<Screenshot 2026-03-11 232342.png>)

Jalankan alamat url http://localhost:3000/api/produk/123

![alt text](<Screenshot 2026-03-11 232453.png>)

Buat file dengan nama index.tsx pada folder views/DetailProduct selain itu buat juga
file dengan nama detailProduct.module.scss

![alt text](<Screenshot 2026-03-11 233101.png>)

Modifikasi detailProduct.module.scss

![alt text](<Screenshot 2026-03-11 233815.png>)

Modifikasi index.tsx pada folder DetailProduct

![alt text](<Screenshot 2026-03-11 234023.png>)

Modifikasi file [product].tsx

![alt text](<Screenshot 2026-03-11 234336.png>)

Modifikasi index.tsx pada folder views/detailProduct line 16

![alt text](<Screenshot 2026-03-11 235033.png>)

Jalankan browser http://localhost:3000/produk/ saat produk diklik maka akan muncul
detailProduk

![alt text](<Screenshot 2026-03-12 000010.png>)

Agar tulisan detail produk ditengah maka modifikasi file detailProduct.module.scss line
103-108 dan file index.tsx tambahkan code pada line 7,8 dan 22 menjadi

![alt text](<Screenshot 2026-03-12 000859.png>)

![alt text](<Screenshot 2026-03-12 000906.png>)

Sehingga hasilnya seperti berikut

![alt text](<Screenshot 2026-03-12 000933.png>)

### Bagian 3 – Implementasi SSR

Modifikasi [produk].tsx pada folder src/pages/produk dan comment line 9 sampai 20
dikarena kita akan menggunakan metode SSR. Tambahkan beberapa kode untuk SSR

![alt text](<Screenshot 2026-03-12 001938.png>)

Jalankan browser http://localhost:3000/produk/server

![alt text](<Screenshot 2026-03-12 001944.png>)

![alt text](<Screenshot 2026-03-12 001950.png>)

### Bagian 4 – Implementasi Static Site Generation (Dynamic SSG)

Buka file [produk].tsx dan modifikasi seperti berikut

![alt text](<Screenshot 2026-03-12 003146.png>)

Buka file index.tsx pada folder src/views/DetailProduct dan modifikasi pada line 11

![alt text](<Screenshot 2026-03-12 003251.png>)

Jalankan browser http://localhost:3000/produk

![alt text](<Screenshot 2026-03-12 003315.png>)

Saat diklik salah satu produk

![alt text](<Screenshot 2026-03-12 003328.png>)

## 