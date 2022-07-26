import { useState, useEffect, useContext } from "react";
import getText from "../services/getText";
import GameStateContext from "../context/GameStateContext";
import { useGlobalGameState } from "./useGlobalGameState";

export default function useText() {
  const [text, setText] = useState("");
  const [writtenText, setWrittenText] = useState("");
  const [wrongText, setWrongText] = useState("");

  const { loadingState } = useContext(GameStateContext);
  const [loading, setLoading] = loadingState;
  const { language, reset } = useGlobalGameState();

  useEffect(() => {
    setLoading(true);
    getText({ lang: language }).then(({ text: newText }) => {
      setWrittenText("");
      setWrongText("");
      setText(newText);
      setLoading(false);
    });
  }, [language, reset]);

  return {
    textState: [text, setText],
    writtenTextState: [writtenText, setWrittenText],
    wrongTextState: [wrongText, setWrongText],
  };
}
