import WorkArticle, { WorkSectionData } from "@/app/(works)/WorkArticle";
import hifi from "@/public/images/mockups/fiora-hifi.webp";
import lofi from "@/public/images/mockups/fiora-lofi.webp";
import persona from "@/public/images/personas/fiora.webp";
import banner from "@/public/images/works/fiora.webp";

const sections: WorkSectionData[] = [
  {
    kind: "prose",
    head: { label: "RESEARCH STUDY DETAILS", title: "Research outcomes" },
    body: (
      <>
        <p>
          To quickly understand user needs within a limited timeline, I conducted secondary research for Fiora,
          refining the research questions and target audience to focus the study.
        </p>
        <p>Key insights included:</p>
        <ol>
          <li>Customers value the flexibility to place orders at their convenience.</li>
          <li>A website enables floral shop owners to showcase products and marketing in unique ways.</li>
          <li>
            Retail and event florists can browse the full catalog at any time, increasing the likelihood of
            discovering and ordering additional items. These findings directly informed the design of an intuitive,
            accessible, and comprehensive ordering experience for both customers and shop owners.
          </li>
        </ol>
      </>
    ),
  },
  {
    kind: "media",
    head: { label: "RESEARCH STUDY DETAILS", title: "Persona" },
    media: [{ image: persona }],
  },
  {
    kind: "media",
    head: {
      label: "INITIAL DESIGN CONCEPTS",
      title: "Wireframing and prototyping",
      lead: "I used Adobe XD in creating Fiora's wireframe, mockups and prototypes. As XD is flexible and I can get the assets directly in photoshop. The artboards, layers, and assets are editable at a high fidelity.",
    },
    media: [{ image: lofi }, { image: hifi }],
  },
  {
    kind: "media",
    head: { label: "TEST PHASE", title: "Usability testing" },
    body: <p>Here's the high-fidelity prototype after of my usability testing:</p>,
    media: [{ iframe: "https://xd.adobe.com/embed/b046814a-bffb-4d88-8923-89913d2c7f18-e515/?fullscreen" }],
  },
  {
    kind: "takeaways",
    head: { label: "TAKEAWAYS", title: "Conclusion" },
    items: [
      {
        body: "Fiora's responsive website simplifies flower ordering for customers and shop owners alike, combining intuitive navigation, accessibility, and a seamless click-and-deliver experience. By integrating insights from user research, the platform allows customers of all ages to browse the catalog, customize orders, and complete purchases with ease, while enabling shop owners to showcase products, manage orders efficiently, and reach a wider audience. Iterative testing ensured the experience is smooth, reliable, and tailored to real user needs.",
      },
    ],
  },
];

export default function Fiora() {
  return (
    <WorkArticle
      eyebrow="UI DESIGNER"
      title="Fiora"
      intro="Design a responsive e-commerce platform that allows customers to browse, select, and order flowers effortlessly, providing a smooth click-and-deliver experience for users of all ages while supporting floral shop owners in reaching their customers online."
      hero={banner}
      meta={[
        { key: "Role", value: "UI Designer" },
        { key: "Company", value: "Fiora" },
        { key: "Scope", value: "A Flower Shop Website" },
        { key: "Timeline", value: "January - February 2022" },
      ]}
      sections={sections}
      footerLabel="FIORA — CASE STUDY"
    />
  );
}
