import { useState, useEffect, useContext } from "react";
import getText from "../services/getText";
import GameStateContext from "../context/GameStateContext";

export default function useText() {
  const [text, setText] = useState("");
  const { loadingState } = useContext(GameStateContext);
  const [loading, setLoading] = loadingState;

  useEffect(() => {
    getText().then(({ text: newText }) => {
      setText(newText);
      setLoading(false);
    });
  }, []);

  return {
    loading,
    text,
    setText,
  };
}
