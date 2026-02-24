## Langkah 1 – Pengecekan Lingkungan
Install Node.js
<img width="494" height="388" alt="Screenshot 2026-02-17 125236" src="https://github.com/user-attachments/assets/16271fb1-49a1-42fc-98c3-16994b3c5723" />

Install Git
<img width="597" height="461" alt="Screenshot 2026-02-17 125725" src="https://github.com/user-attachments/assets/b41f4f86-321a-4af7-bf1e-0ed693a07437" />

Menjalankan Perintah
<img width="1106" height="625" alt="Screenshot 2026-02-17 131655" src="https://github.com/user-attachments/assets/96698afa-f74c-43df-8756-0ddf2bd993e7" />

## Langkah 2 – Membuat Project Next.js
Membuat Proyek
<img width="676" height="583" alt="Screenshot 2026-02-17 132513" src="https://github.com/user-attachments/assets/9652d72b-ee72-49c5-8b3a-bdfeb9c8615e" />
<img width="662" height="609" alt="Screenshot 2026-02-17 132538" src="https://github.com/user-attachments/assets/f0ef5e68-854e-42a6-9dad-0eb435679f78" />

## Langkah 3 – Menjalankan Server Development
Menjalankan Aplikasi
<img width="1100" height="475" alt="Screenshot 2026-02-17 132830" src="https://github.com/user-attachments/assets/e8cc23b3-c43a-4bcd-90dd-406010cd6ac8" />
<img width="1366" height="768" alt="Screenshot 2026-02-17 132859" src="https://github.com/user-attachments/assets/f9b5e7f3-52a4-4863-84c7-f1b2fee5bc63" />

## Langkah 4 – Mengenal Struktur Folder
---

## Langkah 5 – Modifikasi Halaman Utama
Ubah Tampilan
<img width="507" height="251" alt="Screenshot 2026-02-17 135941" src="https://github.com/user-attachments/assets/7b6d4348-ce29-4e6f-8ba7-de8aef1dc0ce" />

## Langkah 6 – Modifikasi API
Modifikasi hello.ts
<img width="343" height="194" alt="Screenshot 2026-02-17 140343" src="https://github.com/user-attachments/assets/816bf5cc-23cf-4d21-be06-b859e4558e7c" />

Menambahkan Extension
<img width="1359" height="185" alt="Screenshot 2026-02-17 140516" src="https://github.com/user-attachments/assets/bccf80aa-562a-492f-a731-f9bf755ddb1b" />

## Langkah 7 – Modifikasi Background
Modifikasi Background
<img width="490" height="186" alt="Screenshot 2026-02-17 140647" src="https://github.com/user-attachments/assets/e129d917-07e5-4de0-badc-e614ffcaf52d" />

## E. Tugas Praktikum
Tugas 1
<img width="418" height="212" alt="Screenshot 2026-02-17 142258" src="https://github.com/user-attachments/assets/8fdb2734-e5ba-4c3e-a056-7f4217959554" />

Tugas 2
<img width="461" height="216" alt="Screenshot 2026-02-17 142754" src="https://github.com/user-attachments/assets/8cd27c4a-f550-41bc-b45b-3b56754e61a8" />

## F. Pertanyaan Refleksi
1. Mengapa Pages Router disebut sebagai routing berbasis file?
   Jawab: Pages Router disebut routing berbasis file karena struktur folder dan nama file di dalam direktori pages secara otomatis menentukan URL/rute aplikasi. Misalnya, file pages/about.tsx akan otomatis menjadi rute /about tanpa perlu konfigurasi manual di kode.
   
3. Apa perbedaan Next.js dengan React standar (CRA)?
   Jawab:
React (CRA): Merupakan library untuk UI yang bersifat Client-Side Rendering (CSR). Semua proses render terjadi di browser pengguna.
Next.js: Adalah framework yang dibangun di atas React yang mendukung Server-Side Rendering (SSR) dan Static Site Generation (SSG). Ini membuat aplikasi lebih cepat dimuat dan lebih ramah SEO.

5. Apa fungsi perintah npm run dev?
   Jawab: menjalankan aplikasi dalam mode pengembangan, memantau perubahan pada file, dan mengaktifkan fitur seperti hot reload sehingga dapat langsung melihat pembaruan tanpa perlu memulai ulang secara manual
   
7. Apa perbedaan npm run dev dan run build ?
   Jawab: Perbedaan utama antara keduanya terletak pada tujuannya, di mana npm run dev digunakan untuk menjalankan aplikasi dalam mode pengembangan yang memungkinkan pengembang melihat perubahan kode secara langsung melalui fitur Fast Refresh. Sebaliknya, npm run build digunakan untuk mengompilasi dan mengoptimasi aplikasi menjadi file statis yang siap digunakan di lingkungan produksi agar performanya lebih cepat dan efisien.
