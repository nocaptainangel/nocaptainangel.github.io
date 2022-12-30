import { FormEvent, useRef, useState } from 'react';
import emailClient from '../client/email-client';
import useToggle from '../hooks/useToggle';
import Button from './Button';
import { Dropdown, Input } from './Form';

const choices = [
  {
    text: 'Hiring you for a project',
  },
  {
    text: 'Getting you as a mentor',
  },
  {
    text: 'Collaborating ideas with you',
  },
  {
    text: 'Giving you a secret ninja mission',
  },
];
const emailPattern = /(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)/;

const ContactForm = () => {
  const ref = useRef<HTMLFormElement>(null);
  const [error, setError] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [disabled, toggleDisabled] = useToggle(false);

  const clean = () => {
    setError(undefined);
    setMessage(undefined);
  };

  const reset = () => {
    ref.current?.reset();
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    toggleDisabled();
    clean();

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const interested = formData.get('interested');
    const email = formData.get('email');
    const errors = validate(name, interested, email);

    if (errors.length) {
      setError('* All fields must be completed.');
      toggleDisabled();

      return;
    }

    const message = `I am interested in ${interested}`;
    const data = {
      name,
      message,
      email,
    };

    try {
      const response = await emailClient.send(data);

      switch (response.status) {
        case 200:
          setMessage(response.data.message);

          break;
        case 400:
          setError('* All fields must be completed.');

          break;
        default:
          setError(response.errors[0].message);
      }
    } catch (err) {
      const e = err as Error;

      setError(e.message);
    } finally {
      toggleDisabled();
      reset();
    }
  };

  return (
    <form className='text-lg md:text-xl flex flex-col' ref={ref} onSubmit={onSubmit}>
      <div className='mb-16 font-extralight flex flex-col gap-8'>
        <div className='flex grow flex-col md:flex-row gap-8 md:gap-0'>
          <div className='flex md:items-center grow flex-col md:flex-row'>
            <span>Hello, my name is</span>
            <Input className='grow' type='text' name='name' placeholder='Your name here' />
          </div>
          <div className='flex md:items-center grow flex-col md:flex-row'>
            <span>and I'm interested in</span>
            <Dropdown className='grow' name='interested' placeholder='Select dropdown' choices={choices} form={ref} />
          </div>
        </div>
        <div className='flex md:items-center grow flex-col md:flex-row'>
          <span>You can get in touch with me at</span>
          <div className='flex grow'>
            <Input className='w-1/2 grow md:grow-0' type='text' name='email' placeholder='Your email here' />
            <span className='hidden font-bold text-xl md:inline-block'>.</span>
          </div>
        </div>
        {!!error && <div className='text-error text-sm font-medium'>{error}</div>}
        {!!message && <div className='text-primary text-sm font-medium'>{message}</div>}
      </div>
      <div>
        <Button type='submit' disabled={disabled}>
          Send Inquiry
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;

const validate = (
  name: FormDataEntryValue | null,
  interested: FormDataEntryValue | null,
  email: FormDataEntryValue | null
) => {
  const errors = [];

  if (!name) {
    errors.push({
      field: 'name',
      code: 'errors.name.required',
      message: 'Required Field',
    });
  }

  if (!email) {
    errors.push({
      field: 'email',
      code: 'errors.email.required',
      message: 'Required Field',
    });
  } else if (!email.toString().match(emailPattern)) {
    errors.push({
      field: 'email',
      code: 'errors.email.invalid',
      message: "That's not a valid email",
    });
  }

  if (!interested) {
    errors.push({
      field: 'interested',
      code: 'errors.interested.required',
      message: 'Required Field',
    });
  }

  return errors;
};
