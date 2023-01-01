import type { ReactNode } from 'react';

type SectionTagProps = {
  children: ReactNode;
};

type AccentTitleProps = {
  title: string;
};

type SectionTitleProps = AccentTitleProps & {
  name: string;
};

export const SectionTag = (props: SectionTagProps) => {
  return (
    <div className="before:bg-black before:content-[''] before:h-[1px] font-['Inter'] text-sm before:absolute before:w-3 before:top-1/2 relative before:-left-6">
      {props.children}
    </div>
  );
};

export const AccentTitle = (props: AccentTitleProps) => {
  return (
    <div className='text-accent uppercase text-xs font-extralight tracking-[5px] font-["Arial"]'>{props.title}</div>
  );
};

export const SectionTitle = (props: SectionTitleProps) => {
  return (
    <div className='flex flex-col gap-1'>
      <AccentTitle title={props.title} />
      <h1 className="font-['Poppins'] text-3xl font-bold leading-snug">{props.name}</h1>
    </div>
  );
};
