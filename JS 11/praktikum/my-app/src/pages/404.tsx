import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/404.module.scss';

const Custom404 = () => {
    return (
        <>
            {/* Add a title for the 404 page */}
            <Head>
                <title>404 - Halaman Tidak Ditemukan</title>
                {/* import a custom Google font just for this page */}
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div className={styles.error}>
                <img
                    src="/undraw_page-not-found_6wni.png"
                    alt="404"
                    className={styles.error__image}
                />
                <h1>404 - Halaman Tidak Ditemukan</h1>
                <p>Maaf, halaman yang Anda cari tidak ada .</p>
                                <p>Silahkan kembali ke halaman utama.</p>
                                {/* button linking to home page */}
                                {/* using Link without nested <a> to satisfy Next.js requirements */}
                                <Link href="/" className={styles.error__button}>
                                    Kembali ke Home
                                </Link>
            </div>
        </>
    );
};

export default Custom404;