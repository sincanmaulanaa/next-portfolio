import Header from '@/components/header';
import React from 'react';

export default function page() {
  return (
    <>
      <Header text='About Me' />
      <article className='flex flex-col space-y-6 py-7 max-w-3xl'>
        <p className='text-md leading-6'>
          Saya Sincan, seorang <b>Front-End Developer di Google Indonesia</b>,
          dan saya senang dapat berbagi karya dan pengalaman saya dengan Anda di
          sini.
        </p>
        <p className='text-md leading-6'>
          Sebagai seorang software engineer, saya telah mengembangkan berbagai
          aplikasi dan platform yang melibatkan teknologi canggih seperti
          JavaScript, NextJS, dan NodeJS. Saya selalu mencari cara untuk
          meningkatkan keterampilan saya dan mengeksplorasi teknologi baru yang
          dapat membantu saya menciptakan solusi yang lebih baik.
        </p>
        <p className='text-md leading-6'>
          Saya percaya bahwa pengembangan perangkat lunak bukan hanya tentang
          menulis kode, tetapi juga tentang memahami kebutuhan pengguna dan
          memastikan pengalaman pengguna yang optimal. Dengan itu, saya selalu
          berusaha untuk memahami konteks bisnis yang mendukung produk yang saya
          buat dan mengoptimalkan solusi yang dapat memberikan dampak positif
          bagi bisnis dan pengguna. Saya senang berbagi pengalaman saya dalam
          mengembangkan perangkat lunak dan memberikan solusi teknologi yang
          inovatif.
        </p>
        <p className='text-md leading-6'>
          Silakan jelajahi portofolio saya dan jangan ragu untuk menghubungi
          saya jika Anda tertarik untuk bekerja sama atau berdiskusi lebih
          lanjut tentang proyek Anda. Terima kasih telah mengunjungi halaman
          saya!
        </p>
      </article>
    </>
  );
}
