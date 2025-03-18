"use client";

import { createContext, Dispatch, ReactNode, SetStateAction, useCallback, useState } from "react";

export const CursorContext = createContext<CursorContextProps | null>(null);

type CursorContextIntersection = {
  element: HTMLElement;
  children: ReactNode;
};

type CursorContextProps = {
  intersections: CursorContextIntersection[];
  setIntersections: Dispatch<SetStateAction<CursorContextIntersection[]>>;
  intersect: (props: CursorContextIntersection) => void;
};

export type CursorProviderProps = {
  children: ReactNode;
};

export function CursorProvider(props: CursorProviderProps) {
  const [intersections, setIntersections] = useState<CursorContextIntersection[]>([]);
  const intersect = useCallback((registration: CursorContextIntersection) => {
    setIntersections((registrations) => registrations.concat(registration));
  }, []);

  return (
    <CursorContext.Provider
      value={{
        intersections,
        setIntersections,
        intersect,
      }}
    >
      {props.children}
    </CursorContext.Provider>
  );
}
