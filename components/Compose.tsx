import { JSXElementConstructor, ReactNode } from "react";

export type ComposeProps = {
  providers: JSXElementConstructor<{ children: ReactNode }>[];
  children: ReactNode;
};

export default function Compose(props: ComposeProps) {
  return props.providers.reduceRight((acc, Provider) => <Provider>{acc}</Provider>, props.children);
}
