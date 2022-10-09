import { useContext } from "react";
import GameStateContext from "../context/GameStateContext";
import useStats from "./useStats";

export function useGlobalGameState() {
  const {
    loadingState: [loading, setLoading],
    finishedState: [finished, setFinished],
    languageState: [language, setLanguage],
    resetState: [reset, seReset],
  } = useContext(GameStateContext);

  return { loading, finished, language, reset };
}
