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
        "Design an app that provides assistance to customers in purchasing their favorite Aegyo coffee drinks with no in-person contact due to the pandemic. With immediately enabled click and deliver services, the customers can place an order and process the payment easily.",
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
          "After the visual design was complete, I tested the prototype with seven representative users to see how user friendly the application is. Testing helps me decide how to refine my mockups based on the feedback that users will provide. Testing also proves whether the potential solution I've been designing addresses the community problem I'm trying to solve.",
        ],
        images: [usability],
      }}
      conclusions={[
        "I personally love coffee and it's very refreshing to design a mobile app for a coffee shop. I learn many things during my usability testing and I'm pretty sure that the learnings I've gained will be applied to my next projects.",
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
