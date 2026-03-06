# Laporan Praktikum JS 9
## Langkah Praktikum 

### Bagian 1 – Setup Halaman SSR

Buat file baru pada pages/products/server.tsx

Modifikasi file server.tsx :

![alt text](<Screenshot 2026-03-06 104712.png>)

Jalankan browser : http://localhost:3000/produk/server

![alt text](<Screenshot 2026-03-06 104719.png>)

### Bagian 2 – Implementasi getServerSideProps pada server.tsx

![alt text](<Screenshot 2026-03-06 105206.png>)

Jalankan browser http://localhost:3000/produk/server

![alt text](<Screenshot 2026-03-06 105215.png>)

### Bagian 3 – Refactor Type ( produk type )

Buat folder types pada folder pages dan buat file Product.type.ts

Modifikasi Product.type.ts

![alt text](<Screenshot 2026-03-06 105658.png>)

modifikasi pada file server.tsx

![alt text](<Screenshot 2026-03-06 105736.png>)

### Bagian 4 – Uji Perbedaan SSR vs CSR

Uji 1 – Skeleton
- Buka halaman CSR

![alt text](<Screenshot 2026-03-06 110335.png>)

- Refresh
- Skeleton muncul

![alt text](<Screenshot 2026-03-06 110348.png>)

- Buka halaman SSR

![alt text](<Screenshot 2026-03-06 110418 copy.png>)

- Refresh
- Skeleton tidak muncul

![alt text](<Screenshot 2026-03-06 110428.png>)

Uji 2 – Network Tab
- Buka DevTools → Network → XHR
- Refresh halaman CSR → Request API terlihat

![alt text](<Screenshot 2026-03-06 110834.png>)

- Refresh halaman SSR → Request API tidak terlihat

![alt text](<Screenshot 2026-03-06 110822.png>)

Uji 3 – Response HTML
- CSR: HTML awal kosong (berisi skeleton)

![alt text](<Screenshot 2026-03-06 110348.png>)

- SSR: HTML sudah berisi data produk lengkap

![alt text](<Screenshot 2026-03-06 110822.png>)

## D. Tugas Praktikum

Tugas Individu
1. Buat 2 halaman:
- /products (CSR)
- /products/server (SSR)
2. Dokumentasikan:
- Screenshot CSR
- Screenshot SSR
- Perbedaan Network tab
- Perbedaan View Source

    - CSR

    ![alt text](<Screenshot 2026-03-06 111457.png>)

    - SSR

    ![alt text](<Screenshot 2026-03-06 111449.png>)

3. Buat laporan analisis minimal 2 halaman.

## E. Studi Analisis
Jawab pertanyaan berikut:
1. Mengapa SSR lebih baik untuk SEO?

    Jawab: Karena konten HTML sudah dirender di server sehingga mudah dibaca oleh mesin pencari

2. Kapan sebaiknya menggunakan SSR?

    Jawab: Saat aplikasi memiliki data yang sering berubah dan perlu SEO yang baik.

3. Apa kekurangan SSR dibanding CSR?

    Jawab: Beban server lebih besar karena halaman dirender setiap request.

4. Mengapa skeleton tidak muncul pada SSR?

    Jawab: Karena halaman sudah dirender lengkap di server sebelum dikirim ke browser.