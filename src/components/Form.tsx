import { DetailedHTMLProps, InputHTMLAttributes, RefObject, useEffect, useState } from 'react';
import useToggle from '../hooks/useToggle';

type Choice = {
  text: string;
  value?: string;
};

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type DropdownProps = Omit<InputProps, 'form'> & {
  choices: Choice[];
  form: RefObject<HTMLFormElement>;
};

const classNames = [
  'border-0',
  'border-b',
  'border-solid',
  'border-b-primary',
  'text-base',
  'font-thin',
  'md:mx-3',
  'p-2',
  'text-center',
  'placeholder:text-tertiary',
  'rounded-none',
];

export const Input = (props: InputProps) => {
  const { className, ...rest } = props;

  return <input {...rest} className={`${classNames.join(' ')} ${className || ''}`} />;
};

export const Dropdown = (props: DropdownProps) => {
  const { choices, className, form, ...rest } = props;
  const [showMenu, toggleMenu] = useToggle(false);
  const [selected, setSelected] = useState<Choice>();

  const reset = () => setSelected(undefined);

  useEffect(() => {
    if (!form.current) return;

    form.current.addEventListener('reset', reset);

    return () => form.current!.removeEventListener('reset', reset);
  }, [form.current]);

  return (
    <>
      <div
        className={`${classNames.join(' ')} relative cursor-pointer ${className || ''}`}
        onClick={() => toggleMenu()}
      >
        <span className={!!selected?.text ? 'text-primary' : 'text-tertiary'}>
          {selected?.text || props.placeholder}
        </span>
        <span className='absolute right-0'>▼</span>
        {showMenu && (
          <div className='absolute left-4 mt-3 flex flex-col bg-white shadow-2xl z-50'>
            {props.choices.map((choice, index) => (
              <div
                key={index}
                className='cursor-pointer text-left text-primary text-base p-4'
                onClick={() => setSelected(choice)}
              >
                {choice.text}
              </div>
            ))}
          </div>
        )}
      </div>
      <input {...rest} value={selected?.value || selected?.text || ''} hidden={true} readOnly={true} />
    </>
  );
};
