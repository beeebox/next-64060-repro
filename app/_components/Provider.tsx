'use client';

import { PropsWithChildren, useEffect, useState, createContext, useMemo } from "react";

export const TestProvider = createContext({});

export const Provider: React.FC<PropsWithChildren> = ({ children }) => {
  const [_, setTest] = useState(0);

  useEffect(() => {
    setTest(1)
  }, []);
  // Recreating of this object during rerender causes flickering
  const value = {};

  // return (
  //   <>
  //     {children}
  //   </>
  // )
  return <TestProvider.Provider value={value}>{children}</TestProvider.Provider>
}