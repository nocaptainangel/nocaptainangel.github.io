import { ArrowDown } from './Arrow';

export const ScrollDown = () => {
  return (
    <span className='rotate-180 uppercase whitespace-nowrap self-center items-center flex text-2xs tracking-widest text-secondary [writing-mode:tb-rl]'>
      <ArrowDown /> <span className='hidden sm:inline-block'>Scroll to discover</span>
    </span>
  );
};
