# Laporan Praktikum JS 14
## Langkah Praktikum 

### Bagian 1 – Install NextAuth

![alt text](<Screenshot 2026-04-09 013906.png>)

### Bagian 2 – Konfigurasi API Auth

Buat file dan folder pada folder pages/api/auth/[...nextauth].ts

Modifikasi file [...nextauth].ts:

![alt text](<Screenshot 2026-04-09 014409.png>)

### Bagian 3 – Tambahkan Secret

Buka file .env.local dan tambahkan code pada line 12

![alt text](<Screenshot 2026-04-09 014712.png>)

### Bagian 4 – Tambahkan SessionProvider

Buka file _app.tsx dan modifikasi:

![alt text](<Screenshot 2026-04-09 015101.png>)

### Bagian 5 – Tambahkan Tombol Login & Logout

Buka index.tsx pada folder component/navbar:

Modifikasi file index.tsx pada line 10 dan 2

![alt text](<Screenshot 2026-04-09 015738.png>)

Buka file file navbar.module.scss tambahkan code pada line 9

![alt text](<Screenshot 2026-04-09 015744.png>)

Jalankan http://localhost:3000/

![alt text](<Screenshot 2026-04-09 015803.png>)

Jika di klik sign in maka akan muncul dan isikan textbox masing. Setelah itu klik
button sign in dan setelah diklik maka akan kembali ke halaman localhost

![alt text](<Screenshot 2026-04-09 015932.png>)

![alt text](<Screenshot 2026-04-09 020023.png>)

Setelah berhasil login maka akan muncul session

![alt text](<Screenshot 2026-04-09 020058.png>)

Untuk dapat menangkap data pada session maka tambahkan code sebagai berikut :

![alt text](<Screenshot 2026-04-09 020455.png>)

#### Uji coba sign in dan sign out

Jalankan Kembali npm run dev

Jalankan localhost

![alt text](<Screenshot 2026-04-09 020617.png>)

Klik sign in dan isikan textboxnya

![alt text](<Screenshot 2026-04-09 020639.png>)

Maka akan muncul tombol signout

![alt text](<Screenshot 2026-04-09 020649.png>)

Ketika user klik signout maka akan kembali sign in

![alt text](<Screenshot 2026-04-09 020617.png>)

### 