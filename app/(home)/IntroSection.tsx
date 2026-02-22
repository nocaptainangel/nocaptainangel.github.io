"use client";

import art1 from "@/public/images/art/art 1.webp";
import art2 from "@/public/images/art/art 2.webp";
import art3 from "@/public/images/art/art 3.webp";
import art4 from "@/public/images/art/art 4.webp";
import art5 from "@/public/images/art/art 5.webp";
import art6 from "@/public/images/art/art 6.webp";
import art7 from "@/public/images/art/art 7.webp";
import art8 from "@/public/images/art/art 8.webp";
import art9 from "@/public/images/art/art 9.webp";
import "@/styles/intro.css";
import Image from "next/image";
import { useEffect, useRef } from "react";

const FONTS = [
  "var(--font-barrio)",
  "var(--font-sarina)",
  "var(--font-rubik-bubbles)",
  "var(--font-pixelify-sans)",
  "var(--font-exile)",
  "var(--font-agbalumo)",
  "var(--font-manufacturing-consent)",
] as const;
const LETTERS = ["A", "N", "G", "E", "L"] as const;
const ARTS = [
  { src: art1, alt: "Art 1" },
  { src: art2, alt: "Art 2" },
  { src: art3, alt: "Art 3" },
  { src: art4, alt: "Art 4" },
  { src: art5, alt: "Art 5" },
  { src: art6, alt: "Art 6" },
  { src: art7, alt: "Art 7" },
  { src: art8, alt: "Art 8" },
  { src: art9, alt: "Art 9" },
] as const;

export default function IntroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const letterRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    letterRefs.current.forEach((elOrNull) => {
      if (!elOrNull) {
        return;
      }

      const el = elOrNull;

      // Set a random initial font immediately.
      let current = FONTS[Math.floor(Math.random() * FONTS.length)];
      el.style.fontFamily = current;

      function scheduleNext() {
        if (cancelled) {
          return;
        }

        // 1–2 second interval, random per letter.
        const delay = 1000 + Math.random() * 1000;
        setTimeout(() => {
          if (cancelled) {
            return;
          }

          const options = FONTS.filter((f) => f !== current);
          current = options[Math.floor(Math.random() * options.length)];
          el.style.fontFamily = current;
          scheduleNext();
        }, delay);
      }

      // Stagger start: each letter begins its cycle at a random offset (0–2 s).
      const initialDelay = Math.random() * 2000;
      setTimeout(() => {
        if (cancelled) {
          return;
        }

        const options = FONTS.filter((f) => f !== current);
        current = options[Math.floor(Math.random() * options.length)];
        el.style.fontFamily = current;
        scheduleNext();
      }, initialDelay);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  // Start marquee only after the Loader removes the `loading` class from <main>.
  // RAF-based instead of CSS animation — avoids Safari's compositor flicker at loop reset.
  useEffect(() => {
    const main = document.querySelector("main");
    if (!main || !marqueeRef.current) {
      return;
    }

    const track = marqueeRef.current;

    // ~80 px/s matches the previous 20 s CSS animation for 8 images × 203 px.
    const SPEED = 80;
    let position = 0;
    let lastTime: number | null = null;
    let rafId: number;

    function tick(time: number) {
      if (lastTime !== null) {
        position -= (SPEED * (time - lastTime)) / 1000;
        const halfWidth = track.scrollWidth / 2;

        if (position <= -halfWidth) {
          position += halfWidth;
        }

        track.style.transform = `translateX(${position}px)`;
      }
      lastTime = time;
      rafId = requestAnimationFrame(tick);
    }

    function start() {
      rafId = requestAnimationFrame(tick);
    }

    if (!main.classList.contains("loading")) {
      start();
      return () => cancelAnimationFrame(rafId);
    }

    const observer = new MutationObserver(() => {
      if (!main.classList.contains("loading")) {
        observer.disconnect();
        start();
      }
    });

    observer.observe(main, { attributes: true, attributeFilter: ["class"] });
    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="intro" className="relative h-svh overflow-hidden" ref={sectionRef}>
      {/* ── Right: bio + portfolio images ─────────────────────────── */}
      {/* Mobile: full-width at top. md+: 42%-wide vertically centered on right */}
      <div className="absolute top-0 flex h-full w-full flex-col content-center justify-center gap-4 pb-40 lg:right-0 lg:w-1/2 lg:pt-30 lg:pb-0">
        <p className="font-montserrat text-headline px-6 text-[13px] leading-relaxed font-semibold md:pr-8 lg:pr-28 lg:pl-0">
          Hi, I&apos;m Angel Leijendekker — a Netherlands-based product builder with a background in UX design and
          front-end development. I turn user insights into meaningful digital experiences where design, technology, and
          product thinking meet.
        </p>

        {/* Marquee: clipped by the overflow-hidden wrapper */}
        <div className="overflow-hidden">
          <div className="marquee-track" ref={marqueeRef}>
            {/* Set 1 — pr matches gap so both sets are equal width */}
            <div className="flex gap-2 pr-2 md:gap-3 md:pr-3">
              {ARTS.map((art) => (
                <Image
                  key={art.alt}
                  className="aspect-square w-35 shrink-0 rounded-lg object-cover md:w-48"
                  src={art.src}
                  alt={art.alt}
                  width={191}
                  height={191}
                />
              ))}
            </div>
            {/* Set 2 — duplicate for seamless loop */}
            <div className="flex gap-2 pr-2 md:gap-3 md:pr-3" aria-hidden="true">
              {ARTS.map((art) => (
                <Image
                  key={art.alt}
                  className="aspect-square w-35 shrink-0 rounded-lg object-cover md:w-48"
                  src={art.src}
                  alt={art.alt}
                  width={191}
                  height={191}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── ANGEL letters ─────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0">
        {LETTERS.map((char, i) => (
          <span
            key={char}
            ref={(el) => {
              letterRefs.current[i] = el;
            }}
            className={`angel-letter angel-letter-${char.toLowerCase()}`}
          >
            {char}
          </span>
        ))}
      </div>

      {/* ── View My Works indicator ────────────────────────────────── */}
      <span className="text-2xs absolute bottom-0 left-1/2 flex h-20 -translate-x-1/2 flex-col items-center gap-3 px-3 pt-2 font-medium text-black uppercase md:h-28">
        <span>View My Works</span>
        <span className="bg-light-gray relative w-px grow overflow-hidden">
          <span className="line-down absolute top-0 left-0 h-1/2 w-px bg-black" />
        </span>
      </span>
    </section>
  );
}
