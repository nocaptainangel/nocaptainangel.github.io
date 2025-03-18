export type CloseProps = {
  onClose: () => void;
};

export function Close(props: CloseProps) {
  return (
    <button
      className="font-montserrat fixed top-4 right-4 z-100 flex cursor-pointer items-center gap-3 p-4 text-sm font-semibold text-black uppercase md:top-12 md:right-14"
      onClick={props.onClose}
    >
      Close
      <div className="relative w-14">
        <span className="absolute top-0 left-0 h-px w-full -rotate-45 bg-black transition-transform" />
        <span className="absolute top-0 left-0 h-px w-full rotate-45 bg-black transition-transform" />
      </div>
    </button>
  );
}
