'use client';

import Header from '@/components/header';
import React, { useEffect, useState } from 'react';

const Form = () => {
  const [message, setMessage] = useState('');

  const handleMessageSubmit = () => {
    if (typeof window != 'undefined') {
      localStorage.setItem('guestBookMessage', message);
    }

    setMessage('');
  };

  console.log(message);
  return (
    <div className='flex flex-col pt-8'>
      <label htmlFor='message' className='block text-sm font-semibold'>
        Message:
      </label>
      <textarea
        name='message'
        id='message'
        placeholder='Ketik sesuatu...'
        className='outline-none mt-2 w-[600px] text-sm focus:ring-2 focus:ring-yellow-400 rounded-lg px-3 py-4'
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type='button'
        onClick={handleMessageSubmit}
        className='bg-yellow-400 text-white text-sm font-semibold px-2 py-2 rounded-md mt-4 hover:bg-yellow-500 transition duration-200 ease-in'
      >
        Kirim
      </button>
    </div>
  );
};

const Message = () => {
  const [storedMessage, setStoredMessage] = useState('');

  useEffect(() => {
    const storedMessages = localStorage.getItem('guestBookMessage');
    if (storedMessages) {
      setStoredMessage(storedMessage);
    }
  }, []);

  console.log('get item:', storedMessage);

  return (
    <div>
      {storedMessage && (
        <div className='bg-gray-200 p-4 rounded-lg mt-4'>
          <p className='text-sm'>{storedMessage}</p>
        </div>
      )}
    </div>
  );
};

export default function page() {
  return (
    <div>
      <Header text='Guest Book' />
      <Form />
      <Message />
    </div>
  );
}
