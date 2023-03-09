import React from 'react';
import Header from '@/components/header';
import Image from 'next/image';
import defaultThumbnailIcon from '../../../public/defaultThumbnail.svg';

export default async function page() {
  const blog = [
    {
      id: 1,
      image: defaultThumbnailIcon,
      title: 'Cara Jadi Orang Kaya!',
      view: '180',
      created_at: '2 Hari yang lalu',
    },
    {
      id: 2,
      image: defaultThumbnailIcon,
      title: 'Cara Jadi Orang Hebat!',
      view: '180',
      created_at: '2 Hari yang lalu',
    },
    {
      id: 3,
      image: defaultThumbnailIcon,
      title: 'Cara Jadi Orang Jahat!',
      view: '180',
      created_at: '2 Hari yang lalu',
    },
    {
      id: 4,
      image: defaultThumbnailIcon,
      title: 'Cara Jadi Orang Cerdas!',
      view: '180',
      created_at: '2 Hari yang lalu',
    },
    {
      id: 5,
      image: defaultThumbnailIcon,
      title: 'Cara Jadi Orang Baik!',
      view: '180',
      created_at: '2 Hari yang lalu',
    },
    {
      id: 6,
      image: defaultThumbnailIcon,
      title: 'Cara Jadi Orang Miskin!',
      view: '180',
      created_at: '2 Hari yang lalu',
    },
  ];

  return (
    <>
      <Header text='Blog' />
      <div className='grid grid-cols-2 gap-5 grid-rows-3 pt-8'>
        {blog.map((item) => (
          <div
            className='flex space-x-7 bg-zinc-50 p-6 rounded-2xl'
            key={item.id}
          >
            <Image alt='' src={item.image} width={65} height={65} />
            <div className='flex flex-col justify-between'>
              <h1 className='text-xl font-bold'>{item.title}</h1>
              <div className='text-sm flex justify-between'>
                <span>{item.created_at}</span>
                <span>{item.view}x Dilihat</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
