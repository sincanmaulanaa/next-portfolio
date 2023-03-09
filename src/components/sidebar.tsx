'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

interface Props {}

interface ItemProps {
  href?: string;
  text?: string;
  isActive?: boolean;
}

const NavItem = ({ href = '/', text = 'Link' }: ItemProps) => {
  const pathname = usePathname();

  return (
    <div className='mt-6'>
      <Link
        href={href}
        className={`text-slate-900 font-semibold transition-all duration-200 ease-in hover:bg-zinc-100 rounded-md px-4 py-2 ${
          pathname === href && 'bg-zinc-100'
        }`}
      >
        {text}
      </Link>
    </div>
  );
};

const Sidebar = () => {
  return (
    <nav className='w-56'>
      <div className='text-5xl px-2'>👨‍💻</div>
      <NavItem href='/' text='Home' />
      <NavItem href='/about' text='About' />
      <NavItem href='/blog' text='Blog' />
      <NavItem href='/guestbook' text='Guest Book' />
    </nav>
  );
};

export default Sidebar;
