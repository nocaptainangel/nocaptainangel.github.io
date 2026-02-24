"use client";

import useCursor from "@/hooks/useCursor";
import { isMobileBrowser } from "@/utils/mobile";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { ReactNode, useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

export default function Cursor() {
  const { intersections } = useCursor();
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const [children, setChildren] = useState<ReactNode | null>(null);

  useGSAP(
    () => {
      const isMobile = isMobileBrowser(navigator);
      dotRef.current!.hidden = isMobile;
      circleRef.current!.hidden = isMobile;

      if (isMobile) {
        return;
      }

      gsap.set(dotRef.current, {
        // Offset so the arrow tip matches the actual cursor position
        xPercent: -10,
        yPercent: -40,
      });
      gsap.set(circleRef.current, {
        xPercent: -50,
        yPercent: -50,
      });

      const dotSetter = {
        left: gsap.quickSetter(dotRef.current, "left", "px"),
        top: gsap.quickSetter(dotRef.current, "top", "px"),
      };
      const circleSetter = {
        left: gsap.quickSetter(circleRef.current, "left", "px"),
        top: gsap.quickSetter(circleRef.current, "top", "px"),
      };

      const speed = 6;
      let mouseX = -128;
      let mouseY = -128;
      let circleX = 0;
      let circleY = 0;

      function onMouseMove(event: MouseEvent) {
        mouseX = event.x;
        mouseY = event.y;

        dotSetter.left(mouseX);
        dotSetter.top(mouseY);
      }

      function animateCircle() {
        requestAnimationFrame(animateCircle);

        circleX += (mouseX - circleX) / speed;
        circleY += (mouseY - circleY) / speed;

        circleSetter.left(circleX);
        circleSetter.top(circleY);
      }

      animateCircle();

      dotSetter.left(mouseX);
      dotSetter.top(mouseY);
      circleSetter.left(mouseX);
      circleSetter.top(mouseY);

      window.addEventListener("mousemove", onMouseMove);

      // List of listeners that are created to check if the cursor is intersecting with elements.
      const listeners: ((event: MouseEvent) => void)[] = [];

      // Intersections between the cursor and elements.
      intersections.forEach((intersection) => {
        function checkIntersection(event: MouseEvent) {
          const rect = intersection.element.getBoundingClientRect();
          const isModalOpen = document.body.classList.contains("modal-open");

          if (isModalOpen) {
            return setChildren(null);
          }

          if (
            // The mouse is within the x axis of the element.
            event.x >= rect.left &&
            event.x <= rect.right &&
            // The mouse is within the y axis of the element.
            event.y >= rect.top &&
            event.y <= rect.bottom
          ) {
            setChildren(intersection.children);
          } else {
            setChildren(null);
          }
        }

        window.addEventListener("mousemove", checkIntersection);
        listeners.push(checkIntersection);
      });

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        listeners.forEach((listener) => window.removeEventListener("mousemove", listener));
      };
    },
    { dependencies: [dotRef, circleRef, intersections] },
  );

  return (
    <>
      <div className="pointer-events-none fixed top-0 left-0 z-103 group-[.loading]/main:hidden" ref={dotRef} hidden>
        <div className="relative flex items-center gap-1.5">
          <svg
            className="h-5 w-5 fill-[#e0171e] drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M4 3.5 18.5 11 12.5 13.5 11 20.5 4 3.5Z" stroke="white" strokeWidth="1" strokeLinejoin="round" />
          </svg>
          <div className="rounded-full bg-[#e0171e] px-3 py-1 text-[11px] font-medium text-white shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
            You
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "rounded-half pointer-events-none fixed top-0 left-0 z-103 h-16 w-16 transition-[height,width] group-[.loading]/main:hidden",
          {
            "h-36 w-36 border-none bg-[#ff832d]": !!children,
          },
        )}
        ref={circleRef}
        hidden
      >
        {children}
      </div>
    </>
  );
}
