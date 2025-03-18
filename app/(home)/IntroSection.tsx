import memoji from "@/public/images/memoji.webp";
import "@/styles/intro.css";
import Image from "next/image";

export default function IntroSection() {
  return (
    <section
      id="intro"
      className="font-montserrat text-headline relative flex h-svh flex-col justify-center text-center text-lg leading-snug font-bold sm:text-3xl md:text-4xl lg:text-5xl"
    >
      <div className="relative mx-auto flex flex-col justify-center gap-6 sm:flex-row-reverse sm:gap-2">
        <div className="relative w-28 self-center sm:w-16 md:w-22">
          <Image
            className="h-auto max-w-full -rotate-12 sm:absolute sm:-bottom-8 sm:left-0 md:-bottom-10 lg:-bottom-12 lg:w-28"
            src={memoji}
            alt="Memoji Picture"
          />
        </div>
        <div>
          ✨ User Experience <span className="font-tiempos-headline font-semibold italic">Designer</span>
        </div>
      </div>
      <div>
        with <span className="font-tiempos-headline font-semibold italic">human - centered</span> 🧡 approach
      </div>
      <div>
        based in the <span className="font-tiempos-headline font-semibold italic">Philippines</span>.
      </div>
      <span className="text-2xs absolute bottom-0 left-[50%] flex h-20 -translate-x-[50%] flex-col items-center gap-3 px-3 pt-2 font-medium text-black uppercase md:h-28">
        <span>View My Works</span>
        <span className="bg-light-gray relative w-px grow overflow-hidden">
          <span className="line-down absolute top-0 left-0 h-[50%] w-px bg-black" />
        </span>
      </span>
    </section>
  );
}
