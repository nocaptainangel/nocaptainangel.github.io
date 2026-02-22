import WorkArticle from "@/app/(works)/WorkArticle";
import hifi from "@/public/images/mockups/fiora-hifi.webp";
import lofi from "@/public/images/mockups/fiora-lofi.webp";
import persona from "@/public/images/personas/fiora.webp";
import userJourney from "@/public/images/user-journeys/fiora.webp";
import banner from "@/public/images/works/fiora.webp";

export default function Fiora() {
  return (
    <WorkArticle
      title="Fiora"
      banner={banner}
      name="Fiora - A Flower Shop Website"
      goals={[
        "Design a responsive e-commerce platform that allows customers to browse, select, and order flowers effortlessly, providing a smooth click-and-deliver experience for users of all ages while supporting floral shop owners in reaching their customers online.",
      ]}
      role="UI Designer | January - February 2022"
      persona={{
        name: "fiora",
        image: persona,
      }}
      userJourney={{
        name: "fiora",
        image: userJourney,
      }}
      wireframe={{
        description: `I used Adobe XD in creating Fiora's wireframe, mockups and prototypes. As XD is flexible and I can get the assets directly in photoshop. The artboards, layers, and assets are editable at a high fidelity.`,
        mockups: {
          lofi: {
            images: [lofi],
          },
          hifi: {
            images: [hifi],
          },
        },
      }}
      usability={{
        texts: ["Here's the high-fidelity prototype after of my usability testing:"],
        iframe: "https://xd.adobe.com/embed/b046814a-bffb-4d88-8923-89913d2c7f18-e515/?fullscreen",
      }}
      conclusions={[
        "Fiora's responsive website simplifies flower ordering for customers and shop owners alike, combining intuitive navigation, accessibility, and a seamless click-and-deliver experience. By integrating insights from user research, the platform allows customers of all ages to browse the catalog, customize orders, and complete purchases with ease, while enabling shop owners to showcase products, manage orders efficiently, and reach a wider audience. Iterative testing ensured the experience is smooth, reliable, and tailored to real user needs.",
      ]}
    >
      <div className="flex flex-col gap-4">
        <div>
          To quickly understand user needs within a limited timeline, I conducted secondary research for Fiora, refining
          the research questions and target audience to focus the study. Key insights included:
        </div>
        <div>Key insights included:</div>
        <ol>
          <li>Customers value the flexibility to place orders at their convenience.</li>
          <li>A website enables floral shop owners to showcase products and marketing in unique ways.</li>
          <li>
            Retail and event florists can browse the full catalog at any time, increasing the likelihood of discovering
            and ordering additional items. These findings directly informed the design of an intuitive, accessible, and
            comprehensive ordering experience for both customers and shop owners.
          </li>
        </ol>
      </div>
    </WorkArticle>
  );
}
