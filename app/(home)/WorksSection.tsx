"use client";

import Aegyo from "@/app/(works)/Aegyo";
import Fiora from "@/app/(works)/Fiora";
import Together from "@/app/(works)/Together";
import WorkModal from "@/app/(works)/WorkModal";
import useCursor from "@/hooks/useCursor";
import useMenu from "@/hooks/useMenu";
import { disableScroll, enableScroll } from "@/utils/dom";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import {
  createRef,
  MouseEvent,
  ReactNode,
  RefObject,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type Work = {
  name: string;
  description: string;
  image: string;
  url?: string;
  component?: ReactNode;
};

const works: Work[] = [
  {
    name: "Evenz",
    description: "Evenz is a leading ticket seller that uses a location-based map to show you nearby events.",
    image: "/images/works/evenz.webp",
    url: "https://dev.evenz.com/v2",
  },
  {
    name: "H2P",
    description: "Empowering the filipinos at the grassroots level with technology based health systems.",
    image: "/images/works/h2p.webp",
    url: "https://h2p-web.vercel.app",
  },
  {
    name: "Aegyo",
    description: "A coffee shop mobile app for the coffee lovers.",
    image: "/images/works/aegyo.webp",
    component: <Aegyo />,
  },
  {
    name: "Fiora",
    description: "",
    image: "/images/works/fiora.webp",
    component: <Fiora />,
  },
  {
    name: "Together",
    description: "",
    image: "/images/works/together.webp",
    component: <Together />,
  },
];

type WorkStickyProps = {
  index: number;
  size: number;
  work: Work;
  parentRef: RefObject<HTMLDivElement | null>;
};

type ProjectCounterProps = {
  className: string;
  index: number;
  size: number;
};

type WorkImageProps = {
  work: Work;
};

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function WorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const worksRefs = useMemo(() => Array.from({ length: works.length }, () => createRef<HTMLDivElement>()), []);
  const { setColorScheme, buttonRef } = useMenu();

  useGSAP(
    () => {
      const buttonRect = buttonRef.current!.getBoundingClientRect();

      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: `top-=${buttonRect.bottom} top`,
          end: `bottom-=${buttonRect.top} top`,
          scrub: true,
          onUpdate({ isActive }) {
            setColorScheme(isActive ? "light" : "dark");
          },
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section id="works" className="relative w-full" ref={containerRef}>
      {works.map((work, i) => (
        <div key={i} className="relative h-screen w-full overflow-hidden" ref={worksRefs[i]}>
          <div className="backdrop-blur-work bg-work absolute z-10 box-border h-full w-full" />
          <Image
            className="absolute inset-0 z-0 box-border h-full w-full -translate-y-28 scale-200 object-cover object-center"
            src={work.image}
            alt={work.name}
            fill
          />
          {work.name}
        </div>
      ))}
      <div className="absolute inset-0 top-0 z-10 h-full w-full">
        <div className="sticky inset-0 h-screen w-full overflow-hidden">
          {works.map((work, i) => (
            <WorkSticky key={i} index={i} size={works.length} work={work} parentRef={worksRefs[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkSticky(props: WorkStickyProps) {
  const isFirst = props.index === 0;
  const isLast = props.index + 1 === props.size;
  const clipDefault = useMemo(
    () => ({
      top: isFirst ? 0.0 : 100.0,
      bottom: 100.0,
    }),
    [isFirst],
  );
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      setClipPath(clipDefault.top, clipDefault.bottom);

      gsap.to(ref.current, {
        scrollTrigger: {
          trigger: props.parentRef.current,
          start: "top bottom",
          end: "bottom top",
          onUpdate: ({ trigger }) => {
            const rect = trigger!.getBoundingClientRect();
            const height = ref.current!.clientHeight;
            let top = clipDefault.top;
            let bottom = clipDefault.bottom;

            if (!isFirst) {
              top = Math.min((rect.top / height) * 100, 100);
            }

            if (!isLast) {
              bottom = Math.max((rect.bottom / height) * 100, 0);
            }

            setClipPath(top, bottom);
          },
        },
      });

      function setClipPath(top: number, bottom: number) {
        gsap.set(ref.current, {
          "--clip-path-top": `${top}%`,
          "--clip-path-bottom": `${bottom}%`,
        });
      }
    },
    { scope: props.parentRef },
  );

  return (
    <div
      className="absolute inset-0 flex flex-col"
      style={{
        clipPath: `polygon(0% var(--clip-path-top), 100% var(--clip-path-top), 100% var(--clip-path-bottom), 0% var(--clip-path-bottom))`,
      }}
      ref={ref}
    >
      <div className="flex h-full flex-col gap-6 p-14 text-white md:gap-10 md:p-18 lg:container lg:m-auto lg:h-fit lg:flex-row lg:gap-24">
        <div className="flex flex-3/5 flex-col justify-between lg:flex-1/2 lg:justify-center">
          <ProjectCounter
            className="text-center text-2xl md:text-3xl lg:hidden"
            index={props.index}
            size={props.size}
          />
          <div className="flex flex-col gap-12 lg:clear-left lg:gap-0">
            <WorkImage work={props.work} />
          </div>
        </div>
        <div className="flex flex-1/5 flex-col lg:flex-1/2 lg:gap-24 lg:py-28">
          <ProjectCounter className="hidden lg:block" index={props.index} size={props.size} />
          <div className="flex flex-col gap-4">
            <div className="font-tiempos-fine text-center text-4xl md:text-5xl lg:text-left">{props.work.name}</div>
            <div className="font-montserrat text-sm font-medium md:text-xl lg:text-sm">{props.work.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCounter(props: ProjectCounterProps) {
  return (
    <div className={clsx("font-tiempos-fine", props.className)}>
      Project ({props.index + 1} / {props.size})
    </div>
  );
}

function WorkImage(props: WorkImageProps) {
  const containerRef = useRef<HTMLAnchorElement>(null);
  const { intersect } = useCursor();
  const [showModal, setShowModal] = useState(false);
  const onClick = useCallback(
    (event: MouseEvent) => {
      if (!!props.work.url) {
        return;
      }

      event.preventDefault();

      disableScroll();
      setShowModal(true);
    },
    [props.work.url],
  );
  const onClose = useCallback(() => {
    enableScroll();
    setShowModal(false);
  }, []);

  useLayoutEffect(() => {
    if (!containerRef.current) {
      return;
    }

    intersect({
      element: containerRef.current,
      children: <Discover />,
    });
  }, [containerRef, intersect]);

  return (
    <>
      {props.work.component && showModal && <WorkModal onClose={onClose}>{props.work.component}</WorkModal>}
      <Link
        className="relative block aspect-square w-full overflow-hidden rounded-2xl md:w-lg md:self-center"
        href={props.work.url || "#"}
        target={props.work.url && "_blank"}
        ref={containerRef}
        onClick={onClick}
      >
        <Image className="object-cover" src={props.work.image} alt={props.work.name} fill />
      </Link>
    </>
  );
}

function Discover() {
  return <div className="font-montserrat flex h-full items-center justify-center text-sm text-white">Discover</div>;
}
