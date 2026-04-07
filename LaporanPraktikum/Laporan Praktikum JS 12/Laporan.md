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

### Bagian 2 – Tambahkan Parameter Data

Modifikasi file revalidate.ts

![alt text](<Screenshot 2026-03-12 024821.png>)

Uji coba menambahkan parameter dan value pada url http://localhost:3000/api/revalidate?data=produk

![alt text](<Screenshot 2026-03-12 024710.png>)

Uji coba dengan url http://localhost:3000/api/revalidate?data=

![alt text](<Screenshot 2026-03-12 024727.png>)

### Bagian 3 – Tambahkan Token Security

Buka file .env dan modifikasi

![alt text](<Screenshot 2026-03-12 025042.png>)

Modifikasi file revalidate.ts tambahkan kondisi pada line 13 - 17

![alt text](<Screenshot 2026-03-12 025228.png>)

### E. Pengujian Manual Revalidation

Akses:

http://localhost:3000/api/revalidate?data=products&token=12345678

Jika benar:

{ revalidate: true }

![alt text](<Screenshot 2026-03-12 094515.png>)

Jika token salah:

![alt text](<Screenshot 2026-03-12 094538.png>)

## Tugas Individu
1. Tambahkan lagi produk pada firebase


2. Implementasikan ISR dengan revalidate: 10.


3. Tambahkan endpoint On-Demand Revalidation.


4. Tambahkan validasi token.


5. Uji dengan:
- Token benar


- Token salah


- Tanpa token


## H. Pertanyaan Analisis
1. Mengapa ISR lebih fleksibel dibanding SSG?
Jawab: Karena halaman bisa diperbarui tanpa build ulang (re-generate otomatis).

2. Apa perbedaan revalidate waktu dan on-demand?
Jawab: Waktu: update berdasarkan interval tertentu, on-demand: update dipicu manual/API.

3. Mengapa endpoint revalidation harus diamankan?
Jawab: Untuk mencegah akses tidak sah yang bisa memicu rebuild halaman.

4. Apa risiko jika token tidak digunakan?
Jawab: Siapa pun bisa memicu revalidation, berpotensi disalahgunakan.

5. Kapan ISR lebih cocok dibanding SSR?
Jawab: Saat butuh data cukup up-to-date tanpa harus render di setiap request.