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
        "Design a responsive app that provides assistance to customers in purchasing flowers with no person contact due to the pandemic. With immediately enabled click and deliver services, the customers can place an order and process the payment easily.",
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
        "Who doesn't love flowers? I think it's one of the perfect gift or surprise you can give to a love one, to just simply tell them that you remember the special occasion in their lives. Creating Fiora's website, I want the customers to have an easy to navigate feel because flowers are not just for the young. I want the user experience to be smooth as possible with the older generations in mind.",
      ]}
    >
      <div className="flex flex-col gap-4">
        <div>
          Primary research, such as interviews and usability tests, can be time-consuming, and when timelines are short,
          secondary research can be a life-saver. Instead of taking the time to narrow down the problem space through
          primary research, I did a secondary research for “Fiora”. Now it has more refined research question and
          target, reducing the scope and effort of the study.
        </div>
        <div>Few of the major insights are as follows:</div>
        <ol>
          <li>Consumers like the idea to place an order at their own convenience.</li>
          <li>Having a website for floral shops gave the owners the chance to create unique advertising approaches.</li>
          <li>
            Not only can retail and event florists order from the website whenever they want, but they are also able to
            browse the entire catalog. Because everything is readily available to them, they may order additional items
            they may not even have come across otherwise.
          </li>
        </ol>
      </div>
    </WorkArticle>
  );
}
