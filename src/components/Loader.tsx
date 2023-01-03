import { useEffect, useState } from 'react';
import '../styles/loader.css';

const greetings = [
  'Hello',
  'Hola',
  'Bonjour',
  'Guten tag',
  'こんにちは',
  'Olá',
  'Annyeonghaseyo',
  'Kamusta',
  'Hallo',
  'Hello',
];

const Loader = () => {
  const [greeting, setGreeting] = useState(greetings[0]);

  useEffect(() => {
    let interval: number;
    let index = 0;

    const greet = () => {
      const word = greetings[index++];

      setGreeting(word);

      if (index === greetings.length) {
        clearInterval(interval);

        document.body.classList.remove('loading');

        return;
      }
    };

    interval = setInterval(greet, 180);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id='loader'>
      <span id='greeting'>{greeting}</span>
      <div className='rounded-wrap'></div>
    </div>
  );
};

export default Loader;
