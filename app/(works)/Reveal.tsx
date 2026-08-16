"use client";

import clsx from "clsx";
import { ReactNode, useEffect, useRef, useState } from "react";

export type RevealProps = {
  className?: string;
  children: ReactNode;
};

export default function Reveal(props: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isIn, setIsIn] = useState(false);

  useEffect(() => {
    const el = ref.current;

    if (!el) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIn(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={clsx("reveal", { in: isIn }, props.className)} ref={ref}>
      {props.children}
    </div>
  );
}
