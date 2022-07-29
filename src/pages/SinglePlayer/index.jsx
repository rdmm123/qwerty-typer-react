import CoreGame from "../../components/CoreGame";
import GameOptions from "../../components/GameOptions";
import PlayAgainOptions from "../../components/PlayAgainOptions";
import { useGlobalGameState } from "../../hooks/useGlobalGameState";

export default function SinglePlayer() {
  const { finished } = useGlobalGameState();
  return (
    <>
      {finished ? (
        <PlayAgainOptions />
      ) : (
        <>
          <GameOptions />
          <CoreGame />
        </>
      )}
    </>
  );
}
