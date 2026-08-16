"use client";

import CompareSlider from "@/app/(works)/CompareSlider";
import Reveal from "@/app/(works)/Reveal";
import WalkthroughVideo from "@/app/(works)/WalkthroughVideo";
import { SectionHeadView, WorkSectionData } from "@/app/(works)/WorkArticle";
import Image from "next/image";

export type WorkSectionProps = {
  section: WorkSectionData;
  index: number;
};

export default function WorkSection(props: WorkSectionProps) {
  const number = String(props.index + 1).padStart(2, "0");

  return (
    <section>
      <div className="wrap">
        <SectionHeadView number={number} head={props.section.head} />
        <SectionBody section={props.section} />
      </div>
    </section>
  );
}

function SectionBody(props: { section: WorkSectionData }) {
  const section = props.section;

  switch (section.kind) {
    case "prose":
      return <Reveal className="prose-body">{section.body}</Reveal>;

    case "list":
      return (
        <div className="problem-grid">
          <Reveal>
            <ul className="problem-list">
              {section.items.map((item, i) => (
                <li key={i}>
                  <span className="n">{item.marker}</span>
                  <div className="t">
                    <strong>{item.title}</strong>
                    <p>{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          {!!section.aside && (
            <Reveal>
              <div className="old-shot">
                <Image src={section.aside.image} alt={section.aside.caption ?? ""} />
                {(!!section.aside.caption || !!section.aside.note) && (
                  <div className="cap">
                    <span>{section.aside.caption}</span>
                    <span>{section.aside.note}</span>
                  </div>
                )}
              </div>
            </Reveal>
          )}
        </div>
      );

    case "cards":
      return (
        <Reveal className="persona-grid">
          {section.cards.map((card, i) => (
            <div className="persona-card" key={i}>
              <span className="tag">{card.tag}</span>
              {!!card.image && (
                <div className="persona-avatar">
                  <Image src={card.image} alt={card.title} />
                </div>
              )}
              <h4>{card.title}</h4>
              <p>{card.body}</p>
            </div>
          ))}
        </Reveal>
      );

    case "compare":
      return (
        <Reveal>
          <CompareSlider before={section.before} after={section.after} caption={section.caption} />
        </Reveal>
      );

    case "walkthrough": {
      const sidebarShot = !section.video && !!section.shot;

      return (
        <>
          {!!section.video && (
            <Reveal className="walkthrough-banner">
              <WalkthroughVideo src={section.video} />
            </Reveal>
          )}
          <div className={sidebarShot ? "fullpage-layout" : undefined}>
            {sidebarShot && (
              <Reveal className="fullpage-shot">
                <Image src={section.shot!} alt={section.head.title} />
              </Reveal>
            )}
            <Reveal>
              <ul className="anno-list">
                {section.steps.map((step, i) => (
                  <li className="anno-item" key={i}>
                    <div className="anno-num">{String(i + 1).padStart(2, "0")}</div>
                    <div className="anno-text">
                      <h4>{step.title}</h4>
                      <p>{step.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </>
      );
    }

    case "media":
      return (
        <Reveal>
          {!!section.body && <div className="prose-body">{section.body}</div>}
          <div className="media-block">
            {section.media.map((item, i) => (
              <div className="media-item" key={i}>
                {!!item.image && <Image className="w-full" src={item.image} alt={section.head.title} />}
                {!!item.iframe && <iframe src={item.iframe} allowFullScreen />}
                {!!item.caption && <div className="media-caption">{item.caption}</div>}
              </div>
            ))}
          </div>
        </Reveal>
      );

    case "split":
      return (
        <div className="team-panel">
          <Reveal>{section.body}</Reveal>
          <Reveal>
            <ul className="team-list">
              {section.items.map((item, i) => (
                <li key={i}>
                  <strong>{item.term}:</strong> {item.body}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      );

    case "takeaways":
      return (
        <Reveal className="reflect">
          {!!section.intro && <p>{section.intro}</p>}
          <ul className="takeaway-list">
            {section.items.map((item, i) => (
              <li key={i}>
                <span>
                  {!!item.title && <strong>{item.title} </strong>}
                  {item.body}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      );
  }
}
