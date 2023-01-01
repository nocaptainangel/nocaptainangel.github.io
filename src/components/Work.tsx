type WorkProps = {
  name: string;
  title: string;
  description: string;
  disabled?: boolean;
};

const Work = (props: WorkProps) => {
  const cursor = props.disabled ? 'cursor-default' : '';

  return (
    <a
      className={`group m-4 overflow-hidden relative w-[calc(50% - 32px)] z-20 h-80 ${cursor}`}
      href={props.disabled ? 'javascript:;' : `/works/${props.name}`}
      target='_blank'
    >
      <div className='lg:group-hover:left-0 lg:group-hover:opacity-100 bg-inverse-surface flex text-background flex-col min-h-min lg:h-full justify-center bottom-0 left-0 lg:-left-full opacity-100 lg:opacity-0 absolute w-full z-10 transition-all duration-200 py-6 px-4 md:px-12'>
        <div className='font-semibold mb-4 uppercase tracking-[0.01em] text-xs'>
          <span className='border-b-2 border-background pb-1'>{props.title}</span>
        </div>
        <div className='text-xs italic font-medium text-background text-opacity-70'>{props.description}</div>
      </div>
      <img className='w-full h-full object-cover' src={`/images/works/${props.name}.png`} alt={props.name} />
    </a>
  );
};

export default Work;
