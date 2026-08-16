import WorkArticle, { WorkSectionData } from "@/app/(works)/WorkArticle";
import hifi from "@/public/images/mockups/aegyo-hifi.webp";
import lofi from "@/public/images/mockups/aegyo-lofi.webp";
import persona from "@/public/images/personas/aegyo.webp";
import usability from "@/public/images/usability/aegyo.webp";
import banner from "@/public/images/works/aegyo.webp";

const sections: WorkSectionData[] = [
  {
    kind: "prose",
    head: { label: "RESEARCH STUDY DETAILS", title: "Research outcomes" },
    body: (
      <div>
        Primary research, such as interviews and usability tests, can be time-consuming, and when timelines are
        short, secondary research can be a life-saver. Instead of taking the time to narrow down the problem space
        through primary research, I did a secondary research for “Aegyo”.
      </div>
    ),
  },
  {
    kind: "media",
    head: { label: "RESEARCH STUDY DETAILS", title: "Persona" },
    media: [{ image: persona }],
  },
  {
    kind: "media",
    head: { label: "INITIAL DESIGN CONCEPTS", title: "Wireframing and prototyping" },
    media: [{ image: lofi }],
  },
  {
    kind: "media",
    head: {
      label: "INITIAL DESIGN CONCEPTS",
      title: "Wireframing and prototyping",
      lead: "I keep on iterating my design until the aesthetic and functionality matches the user's needs. Once I'm satisfied, I started the testing phase to get feedback that will inform its high-fidelity version.",
    },
    media: [{ image: hifi }],
  },
  {
    kind: "media",
    head: { label: "TEST PHASE", title: "Usability testing" },
    body: (
      <p>
        After completing the visual design, I conducted usability testing with seven representative users to
        evaluate the clarity and ease of the ordering flow. Insights from testing informed iterative refinements to
        the interface, ensuring that the app effectively addressed user pain points and delivered a smooth, intuitive
        experience.
      </p>
    ),
    media: [{ image: usability }],
  },
  {
    kind: "takeaways",
    head: { label: "TAKEAWAYS", title: "Conclusion" },
    items: [
      {
        body: "Designing the Aegyo coffee app reinforced the importance of translating user insights into clear, efficient product flows. Iterative testing and refinement improved usability, reduced friction in ordering and payment, and ensured the solution addressed real user needs. The project strengthened my approach to user-centric design and iterative problem solving, lessons I carry forward in all product challenges.",
      },
    ],
  },
];

export default function Aegyo() {
  return (
    <WorkArticle
      eyebrow="USER RESEARCH · UI DESIGNER"
      title="Aegyo"
      intro="Design a mobile app that enables customers to order and pay for their favorite coffee drinks without in-person contact, providing a seamless click-and-deliver experience during the pandemic."
      hero={banner}
      meta={[
        { key: "Role", value: "UI Designer" },
        { key: "Company", value: "Aegyo" },
        { key: "Scope", value: "User Research" },
        { key: "Timeline", value: "January - March 2022" },
      ]}
      sections={sections}
      footerLabel="AEGYO — CASE STUDY"
    />
  );
}
