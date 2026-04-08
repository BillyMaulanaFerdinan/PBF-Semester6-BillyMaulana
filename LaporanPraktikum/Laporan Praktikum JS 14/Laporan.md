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

### D. Menambahkan Data Tambahan (Full Name)

Buka file [...nextauth].js dan tambahkan code pada line 22

![alt text](<Screenshot 2026-04-09 021909.png>)

Pada callbacks modifikasi codenya menjadi berikut :

![alt text](<Screenshot 2026-04-09 021916.png>)

Modifikasi navbar.module.scss

![alt text](<Screenshot 2026-04-09 021925.png>)

Modifikasi index.tsx pada folder components/layouts/navbar

![alt text](<Screenshot 2026-04-09 022308.png>)

Jalankan browser pada localhost

![alt text](<Screenshot 2026-04-09 022144.png>)

Lakukan sign in

![alt text](<Screenshot 2026-04-09 022217.png>)

### E. Proteksi Halaman Profile

Buat Halaman Profile

pages/profile/index.tsx dan modifikasi file index.tsx

![alt text](<Screenshot 2026-04-09 022836.png>)

jalankan browser

![alt text](<Screenshot 2026-04-09 022822.png>)

Buat Middleware Authorization

Buat file withAuth.ts dan folder dengan nama middleware di src

![alt text](<Screenshot 2026-04-09 033344.png>)

Modifikasi withAuth.ts

![alt text](<Screenshot 2026-04-09 033920.png>)

Modifikasi file middleware.ts

![alt text](<Screenshot 2026-04-09 034143.png>)

Jika user mengarahkan ke halaman profile tidak akan bisa, user akan diarahkan
ke alamat localhost

## h. Tugas Praktikum
1. Implementasikan login menggunakan Credentials Provider.
2. Tambahkan field full name.
3. Tampilkan full name setelah login.
4. Buat halaman profile.
5. Lindungi halaman profile dengan middleware.
6. Dokumentasikan:
- Screenshot login

![alt text](<Screenshot 2026-04-09 041429.png>)

- Screenshot session

![alt text](<Screenshot 2026-04-09 041449.png>)

- Screenshot redirect middleware

![alt text](<Screenshot 2026-04-09 041741.png>)

berhasil akses page profile setelah login

![alt text](<Screenshot 2026-04-09 041513.png>)

saat ingin mengkases page profile akan kembali ke page utama jika tidak login

![alt text](<Screenshot 2026-04-09 041706.png>)

## i. Pertanyaan Analisis
1. Mengapa session menggunakan JWT?
Jawab: Karena tidak perlu penyimpanan server (stateless) dan mudah dikirim antar request.

2. Apa perbedaan authorize() dan callback jwt()?
Jawab: authorize() untuk validasi login user, sedangkan jwt() untuk mengatur data yang disimpan di token.

3. Mengapa middleware perlu getToken()?
Jawab: Untuk mengambil dan memverifikasi token user dari request.

4. Apa risiko jika NEXTAUTH_SECRET tidak digunakan?
Jawab: Token bisa tidak aman dan rentan dimanipulasi.

5. Apa perbedaan autentikasi dan otorisasi dalam sistem ini?
Jawab: Autentikasi memastikan siapa user, sedangkan otorisasi menentukan hak akses user.