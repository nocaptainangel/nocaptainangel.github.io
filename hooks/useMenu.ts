import { MenuContext } from "@/contexts/MenuProvider";
import { useContext } from "react";

export default function useMenu() {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }

  return context;
}
