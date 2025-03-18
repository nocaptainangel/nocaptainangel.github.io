import heart from "@/public/images/heart.webp";
import Image from "next/image";

export default function Heart() {
  return <Image className="inline h-5 w-auto" src={heart} alt="Heart" />;
}
