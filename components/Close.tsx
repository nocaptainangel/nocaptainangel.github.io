import clsx from "clsx";
import { forwardRef } from "react";

export type CloseProps = {
  text?: string;
  dark?: boolean;
  onClose: () => void;
};

export const Close = forwardRef<HTMLButtonElement, CloseProps>(function Close(props, ref) {
  const text = props.text ?? "Close";

  return (
    <button
      className={clsx(
        "font-montserrat fixed top-4 right-4 z-100 flex cursor-pointer items-center gap-3 p-4 text-sm font-semibold uppercase transition-colors",
        "md:top-12 md:right-14",
        props.dark ? "text-white" : "text-black",
      )}
      onClick={props.onClose}
      ref={ref}
    >
      {text}
      <div className="relative w-14">
        <span
          className={clsx(
            "absolute top-0 left-0 h-px w-full -rotate-45 transition-[transform,background-color]",
            props.dark ? "bg-white" : "bg-black",
          )}
        />
        <span
          className={clsx(
            "absolute top-0 left-0 h-px w-full rotate-45 transition-[transform,background-color]",
            props.dark ? "bg-white" : "bg-black",
          )}
        />
      </div>
    </button>
  );
});
