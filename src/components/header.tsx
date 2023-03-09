import React from 'react';

interface Props {
  text?: string;
}

const Header = ({ text }: Props) => {
  return <h1 className='text-5xl font-semibold'>{text}</h1>;
};

export default Header;
