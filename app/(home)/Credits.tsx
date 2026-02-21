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
      <div className="absolute bottom-0 flex w-full transform-[translateY(100%)] flex-col gap-12" ref={creditsRef}>
        <div className="flex flex-col gap-4 text-center">
          <div className="text-xs">A website by</div>
          <div className="text-lg font-semibold tracking-widest uppercase">Angel Leijendekker</div>
        </div>
        <article className="crew grid grid-cols-2 gap-x-6 gap-y-2 text-xs">
          <div>Product Thinker</div>
          <div>Angel Leijendekker</div>
          <div>Associate Product Manager (in progress)</div>
          <div>Angel Leijendekker</div>
          <div>User Advocate</div>
          <div>Angel Leijendekker</div>
          <div>Problem Framer</div>
          <div>Angel Leijendekker</div>
          <div>UX Designer</div>
          <div>Angel Leijendekker</div>
          <div>Product Researcher</div>
          <div>Angel Leijendekker</div>
          <div>Prototype Builder</div>
          <div>Angel Leijendekker</div>
          <div>Frontend Developer</div>
          <div>Angel Leijendekker</div>
          <div>Cross-Functional Translator</div>
          <div>Angel Leijendekker</div>
          <div>Iteration Enthusiast</div>
          <div>Angel Leijendekker</div>
          <div>Curiosity Department</div>
          <div>Angel Leijendekker</div>
          <div>Dev Support</div>
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
            <div>Post-it Notes Everywhere</div>
            <div>Iteration 42</div>
            <div>Miro</div>
            <div>Random Sketchbooks</div>
            <div>Feedback Loops</div>
            <div>Prototype Experiments</div>
            <div>Late-night Brainstorms</div>
            <div>Bug Hunting Expeditions</div>
            <div>Decision-making Committee (just me)</div>
          </article>
        </div>
        <div className="flex justify-center py-32">
          <Image src={disappearingMeme} alt="Disappearing Meme" />
        </div>
      </div>
    </div>
  );
}
