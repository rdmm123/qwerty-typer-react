import React from "react";
import { useState } from "react";

const Context = React.createContext({});

export function GameStateContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [finished, setFinished] = useState(false);

  return (
    <Context.Provider
      value={{
        loadingState: [loading, setLoading],
        finishedState: [finished, setFinished],
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
