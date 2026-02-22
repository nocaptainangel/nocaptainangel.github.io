"use client";

import config from "@/config";
import useMenu from "@/hooks/useMenu";
import clsx from "clsx";
import { useLenis } from "lenis/react";
import Link from "next/link";
import { useCallback, useEffect } from "react";

export type MenuItem = {
  title: string;
  scrollTo?: string;
  link?: string;
};

export type MenuProps = {
  items: MenuItem[];
};

export default function Menu(props: MenuProps) {
  const { isOpen, setOpen, isHidden } = useMenu();
  const close = useCallback(() => setOpen(false), [setOpen]);
  const lenis = useLenis();

  useEffect(() => {
    function onKeyPress(event: KeyboardEvent) {
      if (event.key == "Escape") {
        close();
      }
    }

    window.addEventListener("keypress", onKeyPress);

    return () => window.removeEventListener("keypress", onKeyPress);
  }, [close]);

  return (
    <nav>
      {!isHidden && <MenuToggle />}
      {isOpen && <div className="fixed z-98 h-full w-full bg-black opacity-70" onClick={close} />}
      <div
        className={clsx(
          "fixed top-0 right-0 z-99 flex h-full w-xs flex-col gap-12 overflow-y-auto bg-black px-10 py-24 text-white transition-transform md:w-lg md:px-16 lg:w-xl",
          {
            "translate-x-full": !isOpen || isHidden,
            "translate-x-0": isOpen && !isHidden,
          },
        )}
        onClick={close}
      >
        <ul className="font-tiempos-fine flex grow flex-col justify-center gap-6 text-6xl italic md:text-8xl">
          {props.items.map((item, i) => (
            <li key={i}>
              <Link
                className="group inline-block cursor-pointer"
                href={item.link || "#"}
                onClick={item.scrollTo ? () => lenis?.scrollTo(item.scrollTo!) : undefined}
              >
                {item.title}
                <div className="flex justify-center">
                  <span className="mt-1 block h-[2px] w-0 bg-white transition-[width] group-hover:w-full"></span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <Link className="font-montserrat text-sm font-medium" href={`mailto:${config.email}`}>
            {config.email}
          </Link>
        </div>
      </div>
    </nav>
  );
}

function MenuToggle() {
  const { isOpen, setOpen, colorScheme, buttonRef } = useMenu();

  return (
    <button
      className={clsx(
        "font-montserrat fixed top-4 right-4 z-100 flex cursor-pointer items-center gap-3 p-4 text-sm font-semibold uppercase md:top-12 md:right-14",
        {
          "text-white": (colorScheme === "light" && !isOpen) || isOpen,
          "text-black": (colorScheme === "dark" && isOpen) || !isOpen,
        },
      )}
      onClick={() => setOpen((prev) => !prev)}
      ref={buttonRef}
    >
      {!isOpen ? "Menu" : "Close"}{" "}
      <div className="relative w-14">
        <span
          className={clsx("absolute top-0 left-0 h-px w-full transition-transform", {
            "bg-white": (colorScheme === "light" && !isOpen) || isOpen,
            "bg-black": (colorScheme === "dark" && isOpen) || !isOpen,
            "-rotate-45": isOpen,
          })}
        />
        <span
          className={clsx("absolute top-0 left-0 h-px w-full transition-transform", {
            "bg-white": (colorScheme === "light" && !isOpen) || isOpen,
            "bg-black": (colorScheme === "dark" && isOpen) || !isOpen,
            "rotate-45": isOpen,
          })}
        />
      </div>
    </button>
  );
}
