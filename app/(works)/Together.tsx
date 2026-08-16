import WorkArticle, { WorkSectionData } from "@/app/(works)/WorkArticle";
import persona from "@/public/images/personas/together.webp";
import userFlow from "@/public/images/user-flows/together.webp";
import userJourney from "@/public/images/user-journeys/together.webp";
import banner from "@/public/images/works/together.webp";

const sections: WorkSectionData[] = [
  {
    kind: "prose",
    head: { label: "RESEARCH STUDY DETAILS", title: "Research outcomes" },
    body: (
      <>
        <p>
          To better understand users and their needs, I conducted research on volunteering behaviors and existing
          volunteering apps, including an online survey targeting potential volunteers. This research helped
          identify gaps and opportunities that Together could address.
        </p>
        <p>Key insights included:</p>
        <ol>
          <li>People are motivated to make a positive difference and contribute to their communities.</li>
          <li>
            Users value a platform that simplifies communication, sign-ups, and interaction with local NGOs, allowing
            them to engage anytime, anywhere.
          </li>
          <li>
            Volunteering has a tangible, meaningful impact on individuals, communities, and society at large. These
            insights guided the design of Together, ensuring the app addresses real user needs while facilitating
            greater community participation.
          </li>
        </ol>
      </>
    ),
  },
  {
    kind: "media",
    head: {
      label: "INITIAL DESIGN CONCEPTS",
      title: "Wireframing and prototyping",
      lead: "To outline all the necessary functionality, I created a simple flow diagram that shows the main tasks the user can do. It gives a better understanding of the user experience architecture behind the product.",
    },
    media: [{ image: userFlow }],
  },
  {
    kind: "media",
    head: { label: "RESEARCH STUDY DETAILS", title: "Persona" },
    media: [{ image: persona }],
  },
  {
    kind: "media",
    head: { label: "RESEARCH STUDY DETAILS", title: "User Journey Map" },
    media: [{ image: userJourney }],
  },
  {
    kind: "media",
    head: {
      label: "INITIAL DESIGN CONCEPTS",
      title: "Wireframing and prototyping",
      lead: "After I established the Flow Diagram, I started drafting some paper wireframes and translating them into lo-fidelity mockups.",
    },
    media: [{ iframe: "https://embed.figma.com/design/IPTvkvn601FXYDmddwDAsc/Together-App?node-id=0-1&embed-host=share" }],
  },
  {
    kind: "media",
    head: {
      label: "INITIAL DESIGN CONCEPTS",
      title: "Wireframing and prototyping",
      lead: "Once the mockups are done, I started working with the high fidelity designs. There are times when I'm not satisfied with the outcome so I ask for help by having a testing phase to get the point of view of other people.",
    },
    media: [{ iframe: "https://embed.figma.com/design/IPTvkvn601FXYDmddwDAsc/Together-App?node-id=129-585&embed-host=share" }],
  },
  {
    kind: "media",
    head: { label: "TEST PHASE", title: "Usability testing" },
    body: (
      <>
        <p>
          I conducted usability testing to evaluate the clarity, ease of use, and overall effectiveness of the
          Together prototype. Feedback from users informed iterative refinements to the interface, ensuring the app
          met their needs and effectively addressed the challenges of volunteering coordination.
        </p>
        <p>
          I continued iterating until both the functionality and visual design delivered a smooth, intuitive, and
          meaningful user experience.
        </p>
      </>
    ),
    media: [{ iframe: "https://embed.figma.com/design/IPTvkvn601FXYDmddwDAsc/Together-App?node-id=43-473&embed-host=share" }],
  },
  {
    kind: "takeaways",
    head: { label: "TAKEAWAYS", title: "Conclusion" },
    items: [
      {
        body: "Designing Together highlighted how technology can remove barriers and make volunteering more accessible for everyone. By simplifying sign-ups, communication, and engagement with local non-profits, the app empowers users to make a meaningful impact on their communities. Iterative research and testing ensured the platform addresses real user needs while supporting organizations in managing volunteers effectively. This project reinforced my belief in building user-centered solutions that create positive, tangible change.",
      },
    ],
  },
];

export default function Together() {
  return (
    <WorkArticle
      eyebrow="USER RESEARCH · UI AND UX DESIGNER"
      title="Together"
      intro="Design a volunteering platform that makes it easy for users to discover, sign up for, and communicate with local non-profits, streamlining coordination and engagement while maximizing community impact. The app should reduce barriers to volunteering by simplifying scheduling, providing real-time updates, and helping organizations manage their volunteers efficiently."
      hero={banner}
      meta={[
        { key: "Role", value: "UI and UX Designer" },
        { key: "Company", value: "Together" },
        { key: "Scope", value: "User Research" },
        { key: "Timeline", value: "June - July 2022" },
      ]}
      sections={sections}
      footerLabel="TOGETHER — CASE STUDY"
    />
  );
}
