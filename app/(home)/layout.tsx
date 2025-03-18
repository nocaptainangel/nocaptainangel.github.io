import Loader from "@/components/Loader";
import Menu, { MenuItem } from "@/components/Menu";
import config from "@/config";
import "@/styles/home.css";
import { ReactNode } from "react";

const menuItems: MenuItem[] = [
  {
    title: "Works",
    scrollTo: "#works",
  },
  {
    title: "About",
    scrollTo: "#about",
  },
  {
    title: "Contact",
    link: `mailto:${config.email}`,
  },
];

type Props = {
  children: ReactNode;
};

export default function Layout(props: Props) {
  return (
    <main className="group/main loading bg-dotted [.loading]:overflow-hidden">
      <Loader />
      <Menu items={menuItems} />
      {props.children}
    </main>
  );
}
