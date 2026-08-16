"use client";

import Reveal from "@/app/(works)/Reveal";
import WorkSection from "@/app/(works)/WorkSections";
import "@/styles/work.css";
import { CSSProperties, ReactNode } from "react";
import { StaticImageData } from "next/image";

export type SectionHead = {
  label: string;
  title: string;
  lead?: string;
};

export type WorkSectionData =
  | { kind: "prose"; head: SectionHead; body: ReactNode }
  | {
      kind: "list";
      head: SectionHead;
      items: { marker: string; title: string; body: ReactNode }[];
      aside?: { image: StaticImageData; caption?: string; note?: string };
    }
  | {
      kind: "cards";
      head: SectionHead;
      cards: { tag: string; title: string; body: string; image?: StaticImageData }[];
    }
  | { kind: "compare"; head: SectionHead; before: StaticImageData; after: StaticImageData; caption: string }
  | {
      kind: "walkthrough";
      head: SectionHead;
      shot?: StaticImageData;
      video?: string;
      steps: { title: string; body: ReactNode }[];
    }
  | {
      kind: "media";
      head: SectionHead;
      body?: ReactNode;
      media: { image?: StaticImageData; iframe?: string; caption?: string }[];
    }
  | { kind: "split"; head: SectionHead; body: ReactNode; items: { term: string; body: string }[] }
  | { kind: "takeaways"; head: SectionHead; intro?: string; items: { title?: string; body: string }[] };

export type WorkArticleProps = {
  eyebrow: string;
  title: string;
  intro: string;
  link?: string;
  hero: StaticImageData;
  meta: { key: string; value: string }[];
  sections: WorkSectionData[];
  footerLabel: string;
};

export default function WorkArticle(props: WorkArticleProps) {
  return (
    <article className="work">
      <WorkHero
        eyebrow={props.eyebrow}
        title={props.title}
        intro={props.intro}
        link={props.link}
        hero={props.hero}
        meta={props.meta}
      />
      {props.sections.map((section, i) => (
        <div key={i}>
          <div className="wrap">
            <StubDivider />
          </div>
          <WorkSection section={section} index={i} />
        </div>
      ))}
      <footer>
        <div className="wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
          <span className="mono">{props.footerLabel}</span>
          <span className="mono">ANGEL LEIJENDEKKER</span>
        </div>
      </footer>
    </article>
  );
}

type WorkHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  link?: string;
  hero: StaticImageData;
  meta: { key: string; value: string }[];
};

function WorkHero(props: WorkHeroProps) {
  return (
    <section className="hero" style={{ "--hero-image": `url(${props.hero.src})` } as CSSProperties}>
      <div className="wrap">
        <div className="hero-eyebrow mono">{props.eyebrow}</div>
        <h1 className="hero-title display">{props.title}</h1>
        <p className="hero-sub">{props.intro}</p>
        {!!props.link && (
          <a className="hero-link mono" href={props.link} target="_blank" rel="noreferrer">
            View live site
          </a>
        )}
        <div className="meta-strip">
          {props.meta.map((item, i) => (
            <div className="meta-item" key={i}>
              <div className="k">{item.key}</div>
              <div className="v">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeadView(props: { number: string; head: SectionHead }) {
  return (
    <Reveal className="section-head">
      <div className="section-num mono">
        {props.number} — {props.head.label}
      </div>
      <h2 className="section-title display">{props.head.title}</h2>
      {!!props.head.lead && <p className="section-lead">{props.head.lead}</p>}
    </Reveal>
  );
}

function StubDivider() {
  return <div className="stub-divider" />;
}
