"use client";

import disappearingMeme from "@/public/images/disappearing-meme.gif";
import "@/styles/credits.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Credits() {
  const containerRef = useRef<HTMLDivElement>(null);
  const creditsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          toggleClass: {
            targets: creditsRef.current,
            className: "scrolling",
          },
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      id="credits"
      className="font-montserrat relative h-[30vh] overflow-hidden bg-black text-white"
      ref={containerRef}
    >
      <div className="absolute bottom-0 flex w-full [transform:translateY(100%)] flex-col gap-12" ref={creditsRef}>
        <div className="flex flex-col gap-4 text-center">
          <div className="text-xs">A website by</div>
          <div className="text-lg font-semibold tracking-widest uppercase">Angel Leijendekker</div>
        </div>
        <article className="crew grid grid-cols-2 gap-x-6 gap-y-2 text-xs">
          <div>Unit Production Manager</div>
          <div>Angel Leijendekker</div>
          <div>First Assistant Director</div>
          <div>Angel Leijendekker</div>
          <div>UX Designer</div>
          <div>Angel Leijendekker</div>
          <div>UI Designer</div>
          <div>Angel Leijendekker</div>
          <div>UX Researcher</div>
          <div>Angel Leijendekker</div>
          <div>Graphic Designer</div>
          <div>Angel Leijendekker</div>
          <div>Colorist</div>
          <div>Angel Leijendekker</div>
          <div>Editor</div>
          <div>Angel Leijendekker</div>
          <div>Assistant Editor</div>
          <div>Angel Leijendekker</div>
          <div>Unit Production Manager</div>
          <div>Angel Leijendekker</div>
          <div>End Title Typist</div>
          <div>Angel Leijendekker</div>
          <div>Dev</div>
          <div>Jonathan Leijendekker</div>
        </article>
        <div className="flex flex-col gap-4 text-center">
          <div className="text-xs">The designer wish to thank:</div>
          <article className="flex flex-col gap-2 text-sm font-semibold">
            <div>Her Mom</div>
            <div>Figma</div>
            <div>Awwwards</div>
            <div>Codepen.io</div>
            <div>Giphy</div>
            <div>Starbucks Venti Iced White Mocha</div>
          </article>
        </div>
        <div className="flex justify-center py-32">
          <Image src={disappearingMeme} alt="Disappearing Meme" />
        </div>
      </div>
    </div>
  );
}
