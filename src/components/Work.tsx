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
    >
      <div className='group-hover:left-0 group-hover:opacity-100 bg-inverse-surface flex text-background flex-col h-full justify-center -left-full opacity-0 absolute w-full z-10 transition-all duration-200 px-12'>
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
