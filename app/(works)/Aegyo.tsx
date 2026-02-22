import WorkArticle from "@/app/(works)/WorkArticle";
import hifi from "@/public/images/mockups/aegyo-hifi.webp";
import lofi from "@/public/images/mockups/aegyo-lofi.webp";
import persona from "@/public/images/personas/aegyo.webp";
import usability from "@/public/images/usability/aegyo.webp";
import banner from "@/public/images/works/aegyo.webp";

export default function Aegyo() {
  return (
    <WorkArticle
      title="Aegyo"
      banner={banner}
      name="Aegyo - A coffee shop mobile app"
      goals={[
        "Design a mobile app that enables customers to order and pay for their favorite coffee drinks without in-person contact, providing a seamless click-and-deliver experience during the pandemic.",
      ]}
      role="User Research, UI Designer | January - March 2022"
      persona={{
        name: "aegyo",
        image: persona,
      }}
      wireframe={{
        mockups: {
          lofi: {
            images: [lofi],
          },
          hifi: {
            images: [hifi],
            subtitle: `I keep on iterating my design until the aesthetic and functionality matches the user's needs. Once I'm satisfied, I started the testing phase to get feedback that will inform its high-fidelity version.`,
          },
        },
      }}
      usability={{
        texts: [
          "After completing the visual design, I conducted usability testing with seven representative users to evaluate the clarity and ease of the ordering flow. Insights from testing informed iterative refinements to the interface, ensuring that the app effectively addressed user pain points and delivered a smooth, intuitive experience.",
        ],
        images: [usability],
      }}
      conclusions={[
        "Designing the Aegyo coffee app reinforced the importance of translating user insights into clear, efficient product flows. Iterative testing and refinement improved usability, reduced friction in ordering and payment, and ensured the solution addressed real user needs. The project strengthened my approach to user-centric design and iterative problem solving, lessons I carry forward in all product challenges.",
      ]}
    >
      <div className="flex flex-col gap-4">
        Primary research, such as interviews and usability tests, can be time-consuming, and when timelines are short,
        secondary research can be a life-saver. Instead of taking the time to narrow down the problem space through
        primary research, I did a secondary research for “Aegyo”.
      </div>
    </WorkArticle>
  );
}
