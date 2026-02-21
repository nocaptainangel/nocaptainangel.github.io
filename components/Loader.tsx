"use client";

import "@/styles/loader.css";
import { enableScroll } from "@/utils/dom";
import { useEffect, useState } from "react";

const greetings = [
  "Hello",
  "Hola",
  "Bonjour",
  "Hei",
  "こんにちは",
  "Olá",
  "Hej",
  "Ahoj",
  "Annyeonghaseyo",
  "Kamusta",
  "Hallo",
  "Hello",
];

export default function Loader() {
  const [greeting, setGreeting] = useState(greetings[0]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const interval = setInterval(greet, 180);
    let index = 0;

    function greet() {
      const word = greetings[index++];

      setGreeting(word);

      if (index === greetings.length) {
        clearInterval(interval);

        const main = document.querySelector("main")!;
        main.classList.remove("loading");

        enableScroll();
      }
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader">
      <span className="greeting">{greeting}</span>
      <div className="rounded-wrap"></div>
    </div>
  );
}
