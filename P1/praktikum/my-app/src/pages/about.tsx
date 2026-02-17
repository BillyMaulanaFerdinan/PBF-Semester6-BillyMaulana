import React from 'react';
import Head from 'next/head';

const About = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <Head>
        <title>Halaman About</title>
      </Head>
      <h1>Halaman About</h1>
      <hr />
      <p><strong>Nama Mahasiswa:</strong> [Billy Maulana Ferdinan]</p>
      <p><strong>NIM:</strong> [2341720196]</p>
      <p><strong>Program Studi:</strong> [D4 - Teknik Informatika]</p>
    </div>
  );
};

export default About;