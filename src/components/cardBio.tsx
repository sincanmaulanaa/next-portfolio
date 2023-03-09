import Image from 'next/image';
import React from 'react';
import rocketIcon from '../../public/rocket.svg';
import githubIcon from '../../public/github.svg';
import handshakeIcon from '../../public/handshake.svg';

interface BioProps {
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
}

const CardBio = ({
  avatar_url,
  public_repos,
  followers,
  following,
}: BioProps) => {
  return (
    <div className='flex space-x-4 items-center w-80 border-2 border-[#F0F0F0] rounded-md p-7'>
      <div>
        <Image
          alt='GitHub Profile'
          src={avatar_url}
          width={80}
          height={80}
          className='rounded-full'
        />
      </div>
      <div className='flex flex-col space-y-2 text-sm'>
        <div className='flex space-x-3 items-center'>
          <Image alt='' src={rocketIcon} width={14} height={14} />
          <p>
            <b>{followers}</b> Pengikut
          </p>
        </div>
        <div className='flex space-x-3 items-center'>
          <Image alt='' src={githubIcon} width={14} height={14} />
          <p>
            <b>{public_repos}</b> Repository
          </p>
        </div>
        <div className='flex space-x-3 items-center'>
          <Image alt='' src={handshakeIcon} width={14} height={14} />
          <p>
            <b>{following}</b> Mengikuti
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardBio;
