import {
  Agbalumo,
  Barrio,
  Exile,
  Manufacturing_Consent,
  Montserrat,
  Pixelify_Sans,
  Rubik_Bubbles,
  Sarina,
  Wix_Madefor_Display,
} from "next/font/google";
import localFont from "next/font/local";

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

export const tiemposFine = localFont({
  src: [
    {
      path: "./fonts/TiemposFine/TiemposFine-Regular.otf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./fonts/TiemposFine/TiemposFine-RegularItalic.otf",
      style: "italic",
      weight: "400",
    },
    {
      path: "./fonts/TiemposFine/TiemposFine-MediumItalic.otf",
      style: "italic",
      weight: "500",
    },
  ],
  variable: "--font-tiempos-fine",
});

export const tiemposHeadline = localFont({
  src: [
    {
      path: "./fonts/TiemposHeadline/TiemposHeadline-SemiboldItalic.otf",
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

export const barrio = Barrio({
  subsets: ["latin"],
  variable: "--font-barrio",
  weight: "400",
});

export const sarina = Sarina({
  subsets: ["latin"],
  variable: "--font-sarina",
  weight: "400",
});

export const rubikBubbles = Rubik_Bubbles({
  subsets: ["latin"],
  variable: "--font-rubik-bubbles",
  weight: "400",
});

export const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixelify-sans",
  weight: ["400", "700"],
});

export const exile = Exile({
  subsets: ["latin"],
  variable: "--font-exile",
  weight: "400",
});

export const agbalumo = Agbalumo({
  subsets: ["latin"],
  variable: "--font-agbalumo",
  weight: "400",
});

export const manufacturingConsent = Manufacturing_Consent({
  subsets: ["latin"],
  variable: "--font-manufacturing-consent",
  weight: "400",
});
