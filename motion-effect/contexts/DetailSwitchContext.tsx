import React, { createContext, useContext } from "react";
import { DetailSwitchProps } from "../AntMotion";

export const Context = createContext<DetailSwitchProps | null>(null);

function DetailSwitchContext({
  children,
  ...props
}: { children: React.ReactNode } & DetailSwitchProps) {
  return <Context.Provider value={props}>{children}</Context.Provider>;
}

export const useDetailSwitchProps = () => {
  const props = useContext(Context)!;
  return props;
};

export default DetailSwitchContext;
