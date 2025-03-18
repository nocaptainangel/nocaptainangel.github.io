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
      name="Together - Helping your local community through volunteering."
      goals={[
        "Design an app that streamlines volunteering activities and speed up the back and forth communication between volunteers and their local non-profit volunteering programs.",
        'Together is an app that lets you provide a helping hand to others through volunteering. With "together", you are making a difference in people\'s lives and provides vital help to people in need, worthwhile causes, and the community.',
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
          "I tested the prototype to see how user friendly the application is. Testing helps me decide how to refine my mockups based on the feedback that users will provide. Testing also proves whether the potential solution I've been designing addresses the community problem I'm trying to solve.",
          "I keep on iterating my design until the aesthetic and functionality matches the user's needs.",
        ],
        iframe: `https://embed.figma.com/design/IPTvkvn601FXYDmddwDAsc/Together-App?node-id=43-473&embed-host=share`,
      }}
      conclusions={[
        "People genuinely want to make a positive difference in the world, but due to time constraints or resources, they are having a hard time. By having a volunteering app, it's an excellent opportunity to make a difference right at the tip of their fingers.",
        "Seeing technology being used for something that can make a direct impact on people's lives means a lot to me. Organisations should utilise the potential of social networking to make kindness go viral. If we can create a network where people are addicted to kindness, can you imagine what that would do?",
      ]}
    >
      <div className="flex flex-col gap-4">
        <div>
          As I did my research on volunteering and volunteering apps, I also conducted an online survey to better
          understand the users I&apos;m designing for and their needs. I was also able to gain insights and determine
          the type of gap &quot;Together&quot; can fill.
        </div>
        <div>Few of the major insights are as follows:</div>
        <ol>
          <li>Generally, people wants to do good in the world and help make a difference.</li>
          <li>
            People likes the idea of having a volunteering app which makes them easier to communicate, sign up and
            interact with their local NGO&apos;s. It saves them time and allows them to apply for a particular cause
            anytime, anywhere.
          </li>
          <li>
            Volunteering can have a real and valuable positive affect on people, communities and society in general.
          </li>
        </ol>
      </div>
    </WorkArticle>
  );
}
