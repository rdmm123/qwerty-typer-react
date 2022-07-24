import CoreGame from "../../components/CoreGame";
import GameOptions from "../../components/GameOptions";
import { useGlobalGameState } from "../../hooks/useGlobalGameState";

export default function SinglePlayer() {
  const { finished } = useGlobalGameState();
  return (
    <>
      <GameOptions />
      {finished ? <h1>Finished</h1> : <CoreGame />}
    </>
  );
}
