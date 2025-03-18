import AboutSection from "@/app/(home)/AboutSection";
import Credits from "@/app/(home)/Credits";
import IntroSection from "@/app/(home)/IntroSection";
import WorksSection from "@/app/(home)/WorksSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <IntroSection />
      <WorksSection />
      <AboutSection />
      <Footer>
        <Credits />
      </Footer>
    </>
  );
}
