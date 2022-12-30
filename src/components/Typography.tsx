import type { ReactNode } from 'react';

type SectionTagProps = {
  children: ReactNode;
};

export const SectionTag = (props: SectionTagProps) => {
  return (
    <div className="before:bg-black before:content-[''] before:h-[1px] font-['Inter'] text-sm before:absolute before:w-3 before:top-1/2 relative before:-left-6">
      {props.children}
    </div>
  );
};
