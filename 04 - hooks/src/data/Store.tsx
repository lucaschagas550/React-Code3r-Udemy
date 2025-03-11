import React, { useState, createContext, ReactNode } from "react";

interface StoreProps {
    children: ReactNode;
  }

interface AppState {
  number: number;
  text: string;
}

export type AppContextType = AppState & {
  setNumber: (n: number) => void;
  setText: (t: string) => void;
};

export const AppContext = createContext<AppContextType | undefined>(
  undefined
);

const initialState: AppState = {
  number: 1234,
  text: "Context API + Hooks",
};

//Exporta a store para ele pode ser utilizada em outras partes da aplicacao
const Store = ({ children }: StoreProps) => {
  const [state, setState] = useState(initialState);

  function updateState<T extends keyof AppState>(key: T, value: AppState[T]) {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }

  //children basicamente eh tudo que tem dentro das tags <store> no arquivo App.tsx
  return (
    <AppContext.Provider
      value={{
        number: state.number,
        text: state.text,
        setNumber: (n) => updateState("number", n),
        setText: (t) => updateState("text", t),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Store;
