"use client";

import { ColorSchemeEnum } from "next/dist/lib/metadata/types/metadata-types";
import { createContext, Dispatch, ReactNode, RefObject, SetStateAction, useRef, useState } from "react";

export const MenuContext = createContext<MenuContextProps | null>(null);

type MenuContextProps = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  colorScheme: ColorSchemeEnum;
  setColorScheme: Dispatch<SetStateAction<ColorSchemeEnum>>;
  isHidden: boolean;
  setHidden: Dispatch<SetStateAction<boolean>>;
  buttonRef: RefObject<HTMLButtonElement | null>;
};

export type MenuProviderProps = {
  children: ReactNode;
};

export function MenuProvider(props: MenuProviderProps) {
  const [isOpen, setOpen] = useState(false);
  const [colorScheme, setColorScheme] = useState<ColorSchemeEnum>("dark");
  const [isHidden, setHidden] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <MenuContext.Provider
      value={{
        isOpen,
        setOpen,
        colorScheme,
        setColorScheme,
        isHidden,
        setHidden,
        buttonRef,
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
}
