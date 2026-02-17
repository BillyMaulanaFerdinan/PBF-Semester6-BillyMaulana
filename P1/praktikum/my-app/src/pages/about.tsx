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
      <p><strong>Nama Mahasiswa:</strong> [Isi Nama Kamu]</p>
      <p><strong>NIM:</strong> [Isi NIM Kamu]</p>
      <p><strong>Program Studi:</strong> [Isi Program Studi Kamu]</p>
    </div>
  );
};

export default About;