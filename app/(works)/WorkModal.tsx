import { Close } from "@/components/Close";
import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

export type WorkModalProps = {
  children: ReactNode;
  onClose: () => void;
};

export default function WorkModal(props: WorkModalProps) {
  useEffect(() => {
    document.body.classList.add("modal-open");

    function onKeyPress(event: KeyboardEvent) {
      if (event.key == "Escape") {
        props.onClose();
      }
    }

    document.body.addEventListener("keypress", onKeyPress);

    return () => {
      document.body.classList.remove("modal-open");
      document.body.removeEventListener("keypress", onKeyPress);
    };
  }, [props]);

  return createPortal(
    <div className="fixed inset-0 z-102 h-full">
      <div className="relative max-h-full overflow-y-auto bg-white">
        <Close text="" onClose={props.onClose} />
        {props.children}
      </div>
    </div>,
    document.body,
  );
}
