import CardBio from '@/components/cardBio';
import Header from '@/components/header';
import Link from 'next/link';
import { Octokit } from 'octokit';

export default async function Home() {
  const octokit = new Octokit({
    auth: process.env.GITHUB_ACCESS_TOKEN,
  });

  const me = await octokit.request('GET /users/{username}', {
    username: 'sincanmaulanaa',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  const myGithub = me.data;

  return (
    <>
      <Header text='Sincan Maulana' />
      <article className='flex flex-col space-y-8 py-7 max-w-3xl'>
        <p className='text-md leading-6'>
          Saya Sincan, seorang <b>Front-End Developer di Google Indonesia</b>,
          dan saya senang dapat berbagi karya dan pengalaman saya dengan Anda di
          sini.
        </p>
        <CardBio
          avatar_url={myGithub.avatar_url}
          public_repos={myGithub.public_repos}
          followers={myGithub.followers}
          following={myGithub.following}
        />
        <p className='text-md leading-6'>
          Sebagai seorang software engineer, saya telah mengembangkan berbagai
          aplikasi dan platform yang melibatkan teknologi canggih seperti Java,
          Python, dan React Native. Saya selalu mencari cara untuk meningkatkan
          keterampilan saya dan mengeksplorasi teknologi baru yang dapat
          membantu saya menciptakan solusi yang lebih baik.
        </p>
      </article>
      <div>
        <Link
          href='https://github.com/sincanmaulanaa'
          target='_blank'
          className='pr-4 py-2 underline underline-offset-4 font-medium  hover:text-zinc-600 text-sm transition-all duration-200 ease-in'
        >
          GitHub
        </Link>
        <Link
          href='https://instagram.com/sincan.mln'
          target='_blank'
          className='ml-4 pr-4 py-2 underline underline-offset-4 font-medium hover:text-zinc-600 text-sm transition-all duration-200 ease-in'
        >
          Instagram
        </Link>
      </div>
    </>
  );
}
