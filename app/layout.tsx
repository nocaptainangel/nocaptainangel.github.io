import Compose from "@/components/Compose";
import Cursor from "@/components/Cursor";
import config from "@/config";
import { CursorProvider } from "@/contexts/CursorProvider";
import { MenuProvider } from "@/contexts/MenuProvider";
import { montserrat, tiemposFine, tiemposHeadline, wixMedeforDisplay } from "@/fonts";
import clsx from "clsx";
import ReactLenis from "lenis/react";
import { Metadata, Viewport } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
};

export const viewport: Viewport = {
  initialScale: 1.0,
  themeColor: "#000000",
  width: "device-width",
};

type Props = {
  children: ReactNode;
};

export default function RootLayout(props: Props) {
  return (
    <ReactLenis root>
      <html lang="en">
        <body
          className={clsx(
            "overflow-hidden",
            montserrat.variable,
            tiemposFine.variable,
            tiemposHeadline.variable,
            wixMedeforDisplay.variable,
          )}
          data-lenis-prevent
        >
          <Compose providers={[CursorProvider, MenuProvider]}>
            <Cursor />
            {props.children}
          </Compose>
        </body>
      </html>
    </ReactLenis>
  );
}
