import { Montserrat, Wix_Madefor_Display } from "next/font/google";
import localFont from "next/font/local";

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

export const tiemposFine = localFont({
  src: [
    {
      path: "./TiemposFine/TiemposFine-Regular.otf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./TiemposFine/TiemposFine-RegularItalic.otf",
      style: "italic",
      weight: "400",
    },
    {
      path: "./TiemposFine/TiemposFine-MediumItalic.otf",
      style: "italic",
      weight: "500",
    },
  ],
  variable: "--font-tiempos-fine",
});

export const tiemposHeadline = localFont({
  src: [
    {
      path: "./TiemposHeadline/TiemposHeadline-SemiboldItalic.otf",
      style: "italic",
      weight: "600",
    },
  ],
  variable: "--font-tiempos-headline",
});

export const wixMedeforDisplay = Wix_Madefor_Display({
  subsets: ["latin"],
  variable: "--font-wix-medefor-display",
  weight: "500",
});
