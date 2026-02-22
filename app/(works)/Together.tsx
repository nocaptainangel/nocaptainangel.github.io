import WorkArticle from "@/app/(works)/WorkArticle";
import persona from "@/public/images/personas/together.webp";
import userFlow from "@/public/images/user-flows/together.webp";
import userJourney from "@/public/images/user-journeys/together.webp";
import banner from "@/public/images/works/together.webp";

export default function Together() {
  return (
    <WorkArticle
      title="Together"
      banner={banner}
      name="Together"
      goals={[
        "Design a volunteering platform that makes it easy for users to discover, sign up for, and communicate with local non-profits, streamlining coordination and engagement while maximizing community impact. The app should reduce barriers to volunteering by simplifying scheduling, providing real-time updates, and helping organizations manage their volunteers efficiently.",
        "Ultimately, Together aims to create a connected community where acts of service are accessible, meaningful, and easy to participate in.",
      ]}
      role="User Research, UI and UX Designer | June - July 2022"
      persona={{ name: "together", image: persona }}
      userJourney={{ name: "together", image: userJourney }}
      wireframe={{
        diagram: userFlow,
        description: `To outline all the necessary functionality, I created a simple flow diagram that shows the main tasks the user can do. It gives a better understanding of the user experience architecture behind the product.`,
        mockups: {
          lofi: {
            iframe: `https://embed.figma.com/design/IPTvkvn601FXYDmddwDAsc/Together-App?node-id=0-1&embed-host=share`,
            subtitle: `After I established the Flow Diagram, I started drafting some paper wireframes and translating them into lo-fidelity mockups.`,
          },
          hifi: {
            iframe: `https://embed.figma.com/design/IPTvkvn601FXYDmddwDAsc/Together-App?node-id=129-585&embed-host=share`,
            subtitle: `Once the mockups are done, I started working with the high fidelity designs. There are times when I'm not satisfied with the outcome so I ask for help by having a testing phase to get the point of view of other people.`,
          },
        },
      }}
      usability={{
        texts: [
          "I conducted usability testing to evaluate the clarity, ease of use, and overall effectiveness of the Together prototype. Feedback from users informed iterative refinements to the interface, ensuring the app met their needs and effectively addressed the challenges of volunteering coordination.",
          "I continued iterating until both the functionality and visual design delivered a smooth, intuitive, and meaningful user experience.",
        ],
        iframe: `https://embed.figma.com/design/IPTvkvn601FXYDmddwDAsc/Together-App?node-id=43-473&embed-host=share`,
      }}
      conclusions={[
        "Designing Together highlighted how technology can remove barriers and make volunteering more accessible for everyone. By simplifying sign-ups, communication, and engagement with local non-profits, the app empowers users to make a meaningful impact on their communities. Iterative research and testing ensured the platform addresses real user needs while supporting organizations in managing volunteers effectively. This project reinforced my belief in building user-centered solutions that create positive, tangible change.",
      ]}
    >
      <div className="flex flex-col gap-4">
        <div>
          To better understand users and their needs, I conducted research on volunteering behaviors and existing
          volunteering apps, including an online survey targeting potential volunteers. This research helped identify
          gaps and opportunities that Together could address.
        </div>
        <div>Key insights included:</div>
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
      </div>
    </WorkArticle>
  );
}
