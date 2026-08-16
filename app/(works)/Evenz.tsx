import WorkArticle, { WorkSectionData } from "@/app/(works)/WorkArticle";
import afterHero from "@/public/images/works/evenz/after-hero.webp";
import beforeFeatures from "@/public/images/works/evenz/before-features.webp";
import beforeHero from "@/public/images/works/evenz/before-hero.webp";
import hero from "@/public/images/works/evenz/hero.webp";
import personaType01 from "@/public/images/works/evenz/persona-type-01.webp";
import personaType02 from "@/public/images/works/evenz/persona-type-02.webp";
import personaType03 from "@/public/images/works/evenz/persona-type-03.webp";

const sections: WorkSectionData[] = [
  {
    kind: "list",
    head: {
      label: "THE PROBLEM",
      title: "It looked like a template, not a platform.",
      lead: "Evenz is about helping people discover and navigate their world of events, but the product experience didn't quite reflect that. The challenge was to make the experience feel more intentional — less like a collection of standard sections, and more like a place where people could actually discover something they wanted to experience.",
    },
    items: [
      {
        marker: "A",
        title: "The visual language felt repetitive.",
        body: (
          <>
            The same red was used across the hero, buttons, icons, and badges. Without much variation, it was difficult
            to create a clear visual hierarchy or give different parts of the experience their own moment. Sections like
            “Secure Transactions,” “Privacy Protection,” and “Fair Pricing” communicated useful information, but they
            relied on patterns commonly seen across marketplace and ticketing products.
          </>
        ),
      },
      {
        marker: "B",
        title: "The events didn't come through.",
        body: (
          <>
            Concerts, festivals, and arenas are naturally full of energy, but that feeling wasn't really present in the
            interface. Most imagery was small and contained within phone mockups, which made the events themselves feel
            secondary to the UI.
          </>
        ),
      },
      {
        marker: "C",
        title: "There wasn't much to make the brand memorable.",
        body: (
          <>
            The visual system didn't yet have many distinctive elements that felt uniquely Evenz. Outside of the logo,
            much of the experience could have been associated with another ticketing platform.
          </>
        ),
      },
    ],
    aside: { image: beforeFeatures, caption: "ORIGINAL — FEATURE SECTION", note: "v1" },
  },
  {
    kind: "cards",
    head: {
      label: "WHO THIS WAS FOR",
      title: "Not every ticket buyer browses the same way.",
      lead: "Some people are looking for inspiration, others already know what they want, and some are planning around a specific date or event. The experience needed to support all three without making any of them work harder than necessary.",
    },
    cards: [
      {
        tag: "Type 01",
        title: "[The impulse browser]",
        body: "Opens the app with no plan — needs the homepage itself to surface something worth clicking, fast.",
        image: personaType01,
      },
      {
        tag: "Type 02",
        title: "[The returning buyer]",
        body: "Already knows the artist or venue — needs search and category filtering to get out of the way.",
        image: personaType02,
      },
      {
        tag: "Type 03",
        title: "[The planner]",
        body: "Booking ahead for a specific date or city — needs trust signals and clear ticket info more than discovery.",
        image: personaType03,
      },
    ],
  },
  {
    kind: "compare",
    head: {
      label: "BEFORE / AFTER",
      title: "SAME PURPOSE. A DIFFERENT EXPERIENCE.",
      lead: "The redesign moved away from the flat, template-like treatment and towards a darker, more cinematic visual direction. Instead of letting the UI do all the visual work, real event photography became a bigger part of the experience — bringing more of the atmosphere and energy of the events themselves into the product.",
    },
    before: beforeHero,
    after: afterHero,
    caption: "DRAG TO COMPARE — evenz.com homepage, v1 → redesign",
  },
  {
    kind: "walkthrough",
    head: {
      label: "THE FULL PAGE",
      title: "ONE SCROLL, FROM DISCOVERY TO DECISION.",
      lead: "The hero set the direction, but the rest of the page needed to carry it through. I designed each section to build on the previous one, keeping the experience visually consistent while giving users enough information to explore, understand, and ultimately find an event worth booking.",
    },
    video: "/images/works/evenz/after-hero-full.mov",
    steps: [
      {
        title: "Hero & search",
        body: "A rotating full-bleed carousel — concerts, theatre, family events — with search and category filters floating directly on the image instead of a separate bar above it.",
      },
      {
        title: "Popular categories & trending events",
        body: "Categories moved from a row of generic icons to photographic tiles, sitting next to a horizontally-scrolling trending rail with real dates and venues — the two ways people actually start browsing, side by side.",
      },
      {
        title: `"Discover Hidden Gems"`,
        body: "An editorial collage of posters and album art, built to feel like a curated crate-dig rather than an algorithmic grid — this is the section that most departs from the old template.",
      },
      {
        title: "Artist highlights",
        body: "A tighter grid for named acts and tours, kept visually consistent with the collage above it so the page reads as one continuous discovery flow, not stacked widgets.",
      },
      {
        title: "Immersive concert banner",
        body: "A full-width, full-color moment reserved for a single marquee show — the one place on the page allowed to be loud, which is what makes the restraint everywhere else land.",
      },
      {
        title: "Footer",
        body: `"Never miss your favorite performers" replaces generic trust-badge copy, and the footer closes on the wordmark rather than another CTA — the page ends the way it opened, on the brand.`,
      },
    ],
  },
  {
    kind: "split",
    head: { label: "WORKING WITH THE TEAM", title: "This didn't ship alone." },
    body: (
      <p>
        The redesign was shaped together with the team. I worked with stakeholders and engineering to review the
        direction, discuss what was realistic to build, and decide which parts of the new system to introduce first.
        Some ideas changed along the way, but keeping the conversation close to the actual product helped us turn the
        design into something that could work in practice — not just in a prototype.
      </p>
    ),

    items: [
      {
        term: "Stakeholders",
        body: "Direction was reviewed with the relevant product and business stakeholders before moving into development.",
      },
      {
        term: "Engineering",
        body: "I worked with the development team to break the redesign into manageable pieces and align on what could be shipped first.",
      },
      {
        term: "Cadence",
        body: "Design and implementation were reviewed regularly throughout the process, rather than waiting until the end.",
      },
      {
        term: "Handoff",
        body: "Designs and system details were documented in Figma, giving engineering a clear reference for layouts, components, states, and responsive behaviour.",
      },
    ],
  },
  {
    kind: "takeaways",
    head: { label: "DECISIONS & TRADEOFFS", title: "WHAT I LEARNED ALONG THE WAY." },
    intro: "Some key takeaways from this project are:",
    items: [
      {
        title: "Simplifying took more thought than adding.",
        body: "Removing the trust badges, phone mockups, and icon grid wasn't as straightforward as it looked. It meant being intentional about what the page actually needed and being comfortable letting some familiar patterns go.",
      },
      {
        title: "A visual system needs consistency from the start.",
        body: "Keeping the colour palette and type scale simple made the system easier to work with, but only when those decisions were established early. Otherwise, small exceptions quickly start adding up.",
      },
      {
        title: "The bigger issue was hierarchy, not colour.",
        body: "My first instinct was to focus on changing the red and overall visual style. But the deeper issue was that the page didn't have a clear sense of what mattered most. Once the hierarchy was addressed, the visual direction became much easier to define.",
      },
      {
        title: "There are still parts of the product to improve.",
        body: "The redesign didn't cover everything. Checkout and the ticket-detail experience still need further work, and I haven't included performance or conversion results that I can't actually measure yet. I'd rather leave those gaps visible than present assumptions as outcomes.",
      },
    ],
  },
];

export default function Evenz() {
  return (
    <WorkArticle
      eyebrow="TICKETING PLATFORM · END-TO-END REDESIGN"
      title="EVENZ CASE STUDY"
      intro="When I joined Evenz, the product looked like a lot of other ticketing platforms — bright, functional, but easy to forget. I wanted to explore how the experience could feel more connected to the events themselves. I worked across the research, design system, and product screens to create an experience that felt more cinematic, engaging, and true to the excitement of going to an event."
      link="https://v2.evenz.com/"
      hero={hero}
      meta={[
        { key: "Role", value: "UX Research, System & UI Design" },
        { key: "Company", value: "Evenz" },
        { key: "Scope", value: "Full product revamp" },
        { key: "Surface", value: "Web & App" },
      ]}
      sections={sections}
      footerLabel="EVENZ — REDESIGN CASE STUDY"
    />
  );
}
