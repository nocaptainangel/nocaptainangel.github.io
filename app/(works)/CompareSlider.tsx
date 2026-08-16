"use client";

import Image, { StaticImageData } from "next/image";
import { useCallback, useRef, useState } from "react";

export type CompareSliderProps = {
  before: StaticImageData;
  after: StaticImageData;
  caption: string;
};

export default function CompareSlider(props: CompareSliderProps) {
  const [value, setValue] = useState(50);
  const frameRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const frame = frameRef.current;
    if (!frame) return;

    const rect = frame.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setValue(Math.min(100, Math.max(0, ratio)));
  }, []);

  const handlePointerMove = useCallback(
    (event: PointerEvent) => {
      if (!draggingRef.current) return;
      updateFromClientX(event.clientX);
    },
    [updateFromClientX],
  );

  const stopDragging = useCallback(() => {
    draggingRef.current = false;
    window.removeEventListener("pointermove", handlePointerMove);
    window.removeEventListener("pointerup", stopDragging);
  }, [handlePointerMove]);

  const startDragging = useCallback(
    (event: React.PointerEvent) => {
      event.preventDefault();
      draggingRef.current = true;
      updateFromClientX(event.clientX);
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", stopDragging);
    },
    [handlePointerMove, stopDragging, updateFromClientX],
  );

  return (
    <div className="compare-wrap">
      <div className="compare-frame" ref={frameRef} onPointerDown={startDragging}>
        <Image className="img-after" src={props.after} alt="After" fill />
        <Image
          className="img-before compare-after"
          src={props.before}
          alt="Before"
          fill
          style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
        />
        <div className="compare-handle" style={{ left: `${value}%` }}>
          <div className="grip">↔</div>
        </div>
        <div className="compare-tag before-tag mono">BEFORE</div>
        <div className="compare-tag after-tag mono">AFTER</div>
      </div>
      <input
        className="compare-slider-input"
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
        aria-label="Drag to compare before and after"
      />
      <div className="compare-caption">{props.caption}</div>
    </div>
  );
}
