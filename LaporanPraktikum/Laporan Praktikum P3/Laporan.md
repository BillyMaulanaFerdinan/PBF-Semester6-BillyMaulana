
**Langkah** **Praktikum**

> 1\. Langkah 2 – Membuat Catch-All Route 
>
> Buat folder shop dan file […slug].tsx:
>
><img src="./h3xpqxfi.png"
style="width:2.98958in;height:1.64583in" />

> Modifikasi Isi file \[…slug\].tsx dengan kode berikut:
<img src="./vtytj01g.png" style="width:6.5in;height:2.57292in" />

> Cek menggunakan console.log apakah nilai segment berhasil didapat
> Jalankan browser dan ketik urlnya sebagai berikut
<img src="./p5xw4ctn.png"
style="width:4.20833in;height:2.36458in" />

>
> Cek Vscode jika pada console.log dapat menampilkan nilai querynya berarti berhasil
<img src="./iyjwgyub.png" style="width:6.5in;height:3.08333in" />

> Modifikasi \[...slug\].tsx untuk menampilkan nilai query
<img src="./j2wdlhbq.png" style="width:6.5in;height:3.71875in" />

> 2\. Langkah 3 – Pengujian Catch-All Route Akses URL berikut di browser: 
>
>/shop/clothes
<img src="./fvfwdh01.png"
style="width:5.6875in;height:2.4375in" />
>
> /shop/clothes/tops
> <img src="./jjwo2n52.png"
style="width:4.11458in;height:2.41667in" />
>
> /shop/clothes/tops/t-shirt
> <img src="./bhanaej1.png"
style="width:4.36458in;height:2.32292in" />

> Modifikasi \[…slug\].tsx menjadi berikut
<img src="./02m3u12x.png" style="width:6.5in;height:3.71875in" />

>Jalankan browser : Berapapun banyaknya seqment tetap terbaca
> <img src="./t50nxipn.png" style="width:4.40625in;height:2.33333in" /><img src="./m3gxnpqm.png" style="width:4.75in;height:2.28125in" />


> 3\. Langkah 4 – Optional Catch-All Route
>
> 1\. Jika menggunakan \[...slug\].js maka ketika mengakses shop akan terjadi error 2. Solusinya dengan Rename file: \[...slug\].js → \[\[...slug\]\].js
>
><img src="./qviovmgf.png" style="width:2.73958in;height:0.46875in" />

> 3\. Sekarang akses: /shop
>
><img src="./ab1ylsl3.png" style="width:3.22917in;height:2.27083in" />
>
> 4\. Halaman dapat diakses meskipun tanpa parameter.

> 4\. Langkah 5 – Validasi Parameter
>
> Tambahkan validasi agar tidak error saat slug kosong:
<img src="./bsok4v5b.png" style="width:6.5in;height:4.33333in" />

> 5\. Langkah 6 – Membuat Halaman Login & Register Buat file:
<img src="./0mtpgdz4.png" style="width:2.75in;height:1.39583in" />
>
> o login.jsx
>
> o register.jsx

> Modifikasi login.jsx:
<img src="./10bokqqo.png"
style="width:5.55208in;height:2.8125in" />

> Modifikasi register.jsx:
<img src="./u1ppcxxw.png"
style="width:5.46875in;height:2.85417in" />

> 6\. Langkah 7 – Navigasi Imperatif (router.push)
>
> Tambahkan buttonlogin:
<img src="./r21wl5y5.png"
style="width:6.19792in;height:6.21875in" />
<img src="./uzkwjk33.png"
style="width:4.04167in;height:2.97917in" />

> 7\. Langkah 8 – Simulasi Redirect (Belum Login)
>
> Di halaman product, pada index.tsx tambahkan beberapa code berikut:
<img src="./e0uto1ac.png"
style="width:4.84375in;height:4.15625in" />

**E.** **Tugas** **Praktikum** Tugas 1 (Wajib)

• Buat catch-all route:

<img src="./lzs2x0xv.png"
style="width:3.03125in;height:1.80208in" /><img src="./2lfgyuuf.png"
style="width:5.54167in;height:4.64583in" />

• /category/\[...slug\].js

• Tampilkan seluruh parameter URL dalam bentuk list.

<img src="./1vq42dsj.png"
style="width:4.90625in;height:2.85417in" />

Tugas 2 (Wajib) • Buat navigasi: o Login → Product (imperatif)

o Login ↔ Register (Link)

<img src="./bu1l54qc.png"
style="width:5.86458in;height:5.8125in" /><img src="./fqkitool.png" style="width:2.75in;height:2.01042in" />

Tugas 3 (Pengayaan)

• Terapkan redirect otomatis ke login jika user belum login.

<img src="./limknadw.png"
style="width:5.625in;height:5.55208in" />

<img src="./qjvtvh0x.png" style="width:6.5in;height:4.66667in" /><img src="./o1f3vxij.png"
style="width:3.42708in;height:2.34375in" />

Pada tugas ini diterapkan mekanisme redirect otomatis menggunakan
useRouter dan useEffect. Sistem akan memeriksa status login pada
localStorage. Jika user belum login, maka akan otomatis diarahkan ke
halaman login sebelum dapat mengakses halaman produk.

**F.** **Pertanyaan** **Evaluasi**

1\. Apa perbedaan \[id\].js dan \[...slug\].js?

Jawab: \[id\].js hanya menangkap 1 parameter, sedangkan \[...slug\].js
dapat menangkap banyak segmen URL sekaligus.

2\. Mengapa slug berbentuk array?

Jawab: Karena \[...slug\] menangkap lebih dari satu bagian path URL,
sehingga disimpan dalam bentuk array.

3\. Kapan sebaiknya menggunakan Link dan router.push()?

Jawab: Link digunakan untuk navigasi lewat klik/tampilan, sedangkan
router.push() digunakan untuk navigasi lewat logika program (imperatif).

4\. Mengapa navigasi Next.js tidak me-refresh halaman?

Jawab: Karena Next.js memakai client-side routing, sehingga hanya konten
halaman yang diganti tanpa reload penuh.
