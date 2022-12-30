import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const classNames = [
  'border',
  'border-primary',
  'bg-transparent',
  'border-solid',
  'rounded-md',
  'text-base',
  'min-w-[10rem]',
  'py-4',
  'px-12',
  'relative',
  'text-white',
  'before:bg-primary',
  'before:rounded-[0.3rem]',
  "before:content-['']",
  'before:h-full',
  'before:absolute',
  'before:right-0',
  'before:top-0',
  'before:transition-all',
  'before:duration-200',
  'before:w-full',
  'before:-z-10',
  'hover:text-primary',
  'hover:before:w-0',
  'disabled:opacity-50',
  'disabled:cursor-not-allowed',
  'disabled:hover:text-white',
  'disabled:hover:before:w-full',
];

const Button = (props: ButtonProps) => {
  const { className, ...rest } = props;

  return (
    <button {...rest} className={`${classNames.join(' ')} ${className || ''}`}>
      {props.children}
    </button>
  );
};

export default Button;
