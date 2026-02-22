"use client";

import config from "@/config";
import clsx from "clsx";
import { useLenis } from "lenis/react";
import Link from "next/link";
import { ReactNode } from "react";

export type FooterSectionProps = {
  children?: ReactNode;
};

export default function Footer(props: FooterSectionProps) {
  const lenis = useLenis();

  return (
    <footer className="relative z-100 flex h-screen flex-col bg-black px-8 sm:px-12">
      <div
        className={clsx("flex grow flex-col", {
          "py-8": props.children,
          "py-16": !props.children,
        })}
      >
        <div className="flex grow flex-col justify-center py-32 text-center text-xl leading-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">
          <div className="font-montserrat font-semibold">I&apos;d love to hear from you, why don&apos;t you say</div>
          <Link className="font-tiempos-fine font-medium italic underline" href={`mailto:${config.email}`}>
            {config.email}
          </Link>
        </div>
        <div className="text-light-gray font-montserrat flex justify-between gap-8 text-xs opacity-70">
          <span>© Angel Leijendekker 2026</span>
          <Link className="cursor-pointer" href="#" onClick={() => lenis?.scrollTo(0)}>
            Back to top ↑
          </Link>
        </div>
      </div>
      {props.children}
    </footer>
  );
}
