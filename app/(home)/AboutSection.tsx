"use client";

import Heart from "@/components/Heart";
import useMenu from "@/hooks/useMenu";
import profilePicture from "@/public/images/bonjour.webp";
import greetingPicture from "@/public/images/nice-to-meet-you.gif";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const { setColorScheme, buttonRef } = useMenu();

  useGSAP(
    () => {
      const buttonRect = buttonRef.current!.getBoundingClientRect();
      const classList = containerRef.current!.classList;

      // Container pinning
      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "max",
          endTrigger: aboutRef.current,
          pin: true,
          anticipatePin: 1,
          fastScrollEnd: false,
        },
      });

      // Background transition
      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "top top",
            scrub: 2,
            fastScrollEnd: false,
          },
        })
        .from(backgroundRef.current, {
          translateX: "100%",
        })
        .to(backgroundRef.current, {
          translateX: "-5%",
        });

      // Background behind the menu button
      gsap.to(backgroundRef.current, {
        scrollTrigger: {
          trigger: backgroundRef.current,
          start: `top-=${buttonRect.bottom} top`,
          end: `bottom-=${buttonRect.top} top`,
          scrub: true,
          onUpdate({ isActive }) {
            const colorScheme = isActive && classList.contains("dark") ? "light" : "dark";
            setColorScheme(colorScheme);
          },
        },
      });

      // Skill title transition
      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center-=18%",
            end: `top+=${window.innerHeight} top`,
            scrub: 2,
            fastScrollEnd: false,
          },
        })
        .from(".skill-title", {
          translateX: "100%",
        })
        .to(".skill-title", {
          translateX: 0,
        });

      // Skill transition
      gsap.set(".skill", {
        translateX: "100%",
      });
      gsap.to(".skill", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center-=18%",
          end: `top+=${window.innerHeight} top`,
          scrub: 2,
        },
        translateX(_: number, target: HTMLSpanElement) {
          const scrollWidth = Math.abs(target.scrollWidth - target.clientWidth);
          const styles = getComputedStyle(target);
          const padding = +styles.paddingRight.replace("px", "");

          return -scrollWidth - padding;
        },
      });

      // About me scroll
      gsap.to(aboutRef.current, {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top bottom",
          end: `bottom+=${window.innerHeight / 2.5} bottom`,
          scrub: 2,
          fastScrollEnd: false,
        },
        translateY: "-100%",
      });

      // About me enter/leave background change
      gsap.to(aboutRef.current, {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "15% bottom",
          end: "bottom bottom",
          scrub: 2,
          fastScrollEnd: false,
          onEnter() {
            classList.remove("dark");
          },
          onLeaveBack() {
            classList.add("dark");
          },
        },
      });

      // Background should go dark after scrolling at the end.
      gsap.to(overlayRef.current, {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "bottom top",
          end: `+=${window.innerHeight / 2}`,
          scrub: true,
          fastScrollEnd: false,
        },
        opacity: 1,
      });
    },
    { scope: containerRef },
  );

  return (
    <section id="about" className="dark relative mt-72 h-screen overflow-hidden" ref={containerRef}>
      <div
        className="lg:rounded-t-5xl absolute z-0 h-full w-[110%] rounded-t-2xl bg-white transition-colors md:rounded-t-4xl dark:bg-black"
        ref={backgroundRef}
      />
      <div className="pointer-events-none absolute inset-0 z-30 bg-black opacity-0" ref={overlayRef}></div>
      <div className="text-light-gray z-10 flex h-full flex-col justify-center gap-3 overflow-hidden uppercase transition-colors dark:text-white">
        <div className="skill-title font-wix-medefor-display px-8 text-sm font-medium tracking-[21%] md:px-16">
          My Support System
        </div>
        <div className="skill font-montserrat flex items-center gap-5 px-8 text-8xl font-bold whitespace-nowrap md:px-16">
          Figma <Heart /> Adobe XD <Heart /> HTML <Heart /> CSS <Heart /> JavaScript
        </div>
        <div className="skill-title font-wix-medefor-display px-8 text-sm font-medium tracking-[21%] md:px-16">
          To Do The Things I Love
        </div>
        <span className="skill font-montserrat flex items-center gap-5 px-8 text-8xl font-bold whitespace-nowrap md:px-16">
          UI/UX Design <Heart /> User Research <Heart /> Prototyping
        </span>
      </div>
      <div className="z-20 w-full" ref={aboutRef}>
        <div className="flex h-screen flex-col justify-center p-8 md:p-12 lg:p-28">
          <div className="flex w-full flex-col gap-8 rounded-2xl bg-black p-10 sm:w-xs md:w-sm md:rounded-3xl md:p-14">
            <div className="relative">
              <Image
                className="w-full rounded-2xl md:rounded-3xl"
                src={greetingPicture}
                alt="Nice to meet you"
                priority
              />
            </div>
            <div className="font-montserrat text-4xl font-bold text-white">
              <h2>Nice to</h2>
              <h2>
                meet <span className="font-tiempos-fine font-normal italic">you</span>. 👋🏻
              </h2>
            </div>
          </div>
        </div>
        <div className="flex h-screen flex-col justify-center p-8 sm:items-end md:p-12 lg:p-28">
          <div className="flex w-full max-w-full flex-col-reverse justify-between gap-8 rounded-2xl bg-black p-10 sm:w-3xl sm:flex-row md:rounded-3xl md:p-14">
            <div className="font-montserrat text-white md:py-8">
              <h2 className="mb-6 text-center text-5xl font-bold md:text-left">
                I&apos;m <span className="font-tiempos-fine font-normal italic">Angel</span>.
              </h2>
              <div className="flex flex-col gap-4 text-xs font-medium md:text-sm">
                <div>
                  I&apos;m a curious and creative UX designer with a passion for crafting seamless, user-friendly
                  experiences. I love design in all forms and solving user problems makes me happy.
                </div>
                <div>
                  When I&apos;m not obsessing over pixel-perfect interfaces, you&apos;ll find me exploring new cafes,
                  sketching random ideas, or tinkering with the latest design tools.
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                className="aspect-square w-6xl rounded-2xl object-cover sm:aspect-3/4 sm:w-xl md:w-4xl md:rounded-3xl"
                src={profilePicture}
                alt="Profile Picture"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
