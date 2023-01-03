import type { ReactNode } from 'react';
import { BehanceIcon, GitHubIcon, InstagramIcon, LinkedInIcon } from '../components/SocialIcon';

type SocialProps = {
  tagline: string;
  name: string;
  icon: ReactNode;
};

const Social = (props: SocialProps) => {
  return (
    <div className='flex flex-col items-center grow'>
      <div className='text-xs'>{props.tagline}</div>
      <div className='font-semibold mb-3 leading-none'>{props.name}</div>
      {props.icon}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className='flex bg-on-background justify-center mt-24 px-8'>
      <div className='max-w-5xl text-background flex flex-col grow'>
        <div className='flex flex-col sm:flex-row gap-12 py-24'>
          <Social tagline='View on' name='Behance' icon={<BehanceIcon className='h-6 w-6' isLight={true} />} />
          <Social tagline='Heart on' name='Instagram' icon={<InstagramIcon className='h-6 w-6' isLight={true} />} />
          <Social tagline='Connect' name='LinkedIn' icon={<LinkedInIcon className='h-6 w-6' isLight={true} />} />
          <Social tagline='Follow on' name='GitHub' icon={<GitHubIcon className='h-6 w-6' isLight={true} />} />
        </div>

        <hr className='w-full border-t-secondary border-t h-0' />

        <div className='py-8 px-4 text-xs uppercase'>© 2022 Angel Leijendekkker. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
