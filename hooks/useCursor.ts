import { CursorContext } from "@/contexts/CursorProvider";
import { useContext } from "react";

export default function useCursor() {
  const context = useContext(CursorContext);

  if (!context) {
    throw new Error("useCursor must be used within a CursorContext");
  }

  return context;
}
