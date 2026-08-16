"use client";

import { Close } from "@/components/Close";
import { disableScroll, enableScroll } from "@/utils/dom";
import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export type WorkModalProps = {
  children: ReactNode;
  onClose: () => void;
};

export default function WorkModal(props: WorkModalProps) {
  const onCloseRef = useRef(props.onClose);
  onCloseRef.current = props.onClose;
  const scrollRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  // The hero image is always in view when the modal opens (scrollTop 0), so
  // the close button starts dark-mode (white) until the scroll effect below
  // has a chance to measure whether it still overlaps the hero.
  const [overHero, setOverHero] = useState(true);

  useEffect(() => {
    document.body.classList.add("modal-open");
    disableScroll();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onCloseRef.current();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("modal-open");
      enableScroll();
    };
  }, []);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    const heroEl = scrollEl?.querySelector<HTMLElement>(".hero");

    if (!scrollEl || !heroEl) {
      return;
    }

    function update() {
      const heroBottom = heroEl!.getBoundingClientRect().bottom;
      const closeBottom = closeRef.current?.getBoundingClientRect().bottom ?? 0;

      setOverHero(heroBottom > closeBottom);
    }

    update();
    scrollEl.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      scrollEl.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return createPortal(
    <div className="fixed inset-0 z-102 h-full" role="dialog" aria-modal="true">
      <div className="relative max-h-full overflow-y-auto bg-white" ref={scrollRef}>
        <Close text="" dark={overHero} onClose={props.onClose} ref={closeRef} />
        {props.children}
      </div>
    </div>,
    document.body,
  );
}
