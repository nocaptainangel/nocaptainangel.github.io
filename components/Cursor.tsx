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
        xPercent: -50,
        yPercent: -50,
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
      <div
        className="bg-gray rounded-half pointer-events-none fixed top-0 left-0 z-103 h-3 w-3 group-[.loading]/main:hidden"
        ref={dotRef}
        hidden
      ></div>
      <div
        className={clsx(
          "border-gray rounded-half pointer-events-none fixed top-0 left-0 z-103 h-16 w-16 border transition-[height,width] group-[.loading]/main:hidden",
          {
            "bg-dark-gray h-36 w-36 border-none": !!children,
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
