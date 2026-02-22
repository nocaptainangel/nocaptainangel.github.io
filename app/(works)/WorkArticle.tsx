"use client";

import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

type NameImage = {
  name: string;
  image: StaticImageData;
};

type Wireframe = {
  diagram?: StaticImageData;
  description?: string;
  mockups: {
    lofi?: Mockup;
    hifi?: Mockup;
  };
};

type Mockup = {
  iframe?: string;
  images?: StaticImageData[];
  subtitle?: string;
};

type Usability = {
  texts: string[];
  iframe?: string;
  images?: StaticImageData[];
};

type SectionContentProps = {
  children: ReactNode;
};

type SectionTitleProps = {
  title: string;
  name: string;
};

type AccentTitleProps = {
  title: string;
};

export type WorkLayoutProps = {
  title: string;
  banner: StaticImageData;
  name: string;
  goals: string[];
  role: string;
  persona: NameImage;
  userJourney?: NameImage;
  wireframe: Wireframe;
  usability: Usability;
  conclusions: string[];
  children: ReactNode;
};

export default function WorkArticle(props: WorkLayoutProps) {
  return (
    <article className="font-montserrat">
      <div className="relative mb-6 h-52 w-full overflow-hidden md:h-96">
        <Image className="h-full w-full object-cover" src={props.banner} alt={props.name} />
      </div>

      {/* Article title & goal */}
      <SectionContent>
        <div className="flex grid-cols-5 flex-col gap-8 md:grid">
          <div className="col-span-2">
            <SectionTitle title="Project name" name={props.name} />
          </div>
          <div className="col-span-3 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <AccentTitle title="Project goal" />
              <div className="flex flex-col gap-6 leading-7">
                {props.goals.map((goal, i) => (
                  <p key={i}>{goal}</p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <AccentTitle title="Role & duration" />
              <div className="text-gray text-sm">{props.role}</div>
            </div>
          </div>
        </div>
      </SectionContent>

      {/* Research study details */}
      <SectionContent>
        <SectionTitle title="Research study details" name="Research outcomes" />
        <div className="flex flex-col leading-7">{props.children}</div>
        <div className="font-semibold">Persona:</div>
        <Image className="w-full" src={props.persona.image} alt={`Persona: ${props.persona.name}`} />
        {!!props.userJourney && (
          <>
            <div className="font-semibold">User Journey Map:</div>
            <Image className="w-full" src={props.userJourney.image} alt={`User Journey: ${props.userJourney.name}`} />
          </>
        )}
      </SectionContent>

      {/* Initial design concepts */}
      <SectionContent>
        <SectionTitle title="Initial design concepts" name="Wireframing and prototyping" />
        {!!props.wireframe.description && <div>{props.wireframe.description}</div>}
        {!!props.wireframe.diagram && (
          <Image className="w-full" src={props.wireframe.diagram} alt={`${props.title} User flow`} />
        )}
        {!!props.wireframe.mockups.lofi?.subtitle && <div>{props.wireframe.mockups.lofi.subtitle}</div>}
        <div className="flex justify-center">
          {!!props.wireframe.mockups.lofi?.iframe && (
            <iframe
              className="h-[70vh] w-full border-black"
              src={props.wireframe.mockups.lofi.iframe}
              allowFullScreen
            />
          )}
          {props.wireframe.mockups.lofi?.images?.map((image, i) => (
            <Image className="w-full" key={i} src={image} alt={`Lo-fi mockup: ${i + 1}`} />
          ))}
        </div>
        {!!props.wireframe.mockups.hifi?.subtitle && <div>{props.wireframe.mockups.hifi.subtitle}</div>}
        <div className="flex justify-center">
          {!!props.wireframe.mockups.hifi?.iframe && (
            <iframe
              className="h-[70vh] w-full border-black"
              src={props.wireframe.mockups.hifi.iframe}
              allowFullScreen
            />
          )}
          {props.wireframe.mockups.hifi?.images?.map((image, i) => (
            <Image className="w-full" key={i} src={image} alt={`Hi-fi mockup: ${i + 1}`} />
          ))}
        </div>
      </SectionContent>

      {/* Test phase */}
      <SectionContent>
        <SectionTitle title="Test phase" name="Usability testing" />
        <div className="flex flex-col gap-6 leading-7">
          {props.usability.texts.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
        <div className="flex justify-center">
          {!!props.usability.iframe && (
            <iframe className="h-[70vh] w-full border-black" src={props.usability.iframe} allowFullScreen />
          )}
          {props.usability.images?.map((image, i) => (
            <Image className="w-full" key={i} src={image} alt={`Usability: ${props.name}`} />
          ))}
        </div>
      </SectionContent>

      {/* Takeaways */}
      <SectionContent>
        <SectionTitle title="Takeaways" name="Conclusion" />
        <div className="flex flex-col gap-6 leading-7">
          {props.conclusions.map((conclusion, i) => (
            <p key={i}>{conclusion}</p>
          ))}
        </div>
      </SectionContent>
    </article>
  );
}

function SectionContent(props: SectionContentProps) {
  return (
    <div className="flex justify-center px-8 py-8 sm:py-14 lg:px-0">
      <div className="flex max-w-6xl grow flex-col gap-8 lg:px-8">{props.children}</div>
    </div>
  );
}

function SectionTitle(props: SectionTitleProps) {
  return (
    <div className="flex flex-col gap-1">
      <AccentTitle title={props.title} />
      <h1 className="text-4xl leading-snug font-bold">{props.name}</h1>
    </div>
  );
}

function AccentTitle(props: AccentTitleProps) {
  return (
    <div className="text-light-blue font-wix-medefor-display text-sm font-extralight tracking-[5px] uppercase">
      {props.title}
    </div>
  );
}
