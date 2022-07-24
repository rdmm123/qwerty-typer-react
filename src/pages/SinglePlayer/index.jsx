import { useState, useEffect } from "react";
import GameText from "../../components/GameText";
import CoreGame from "../../components/CoreGame";
import getText from "../../services/getText";
import GameOptions from "../../components/GameOptions";

export default function SinglePlayer() {
  const [finished, setFinished] = useState(false);

  const finishedText = () => {
    console.log("finished");
    setFinished(true);
  };

  return (
    <>
      <GameOptions />
      {finished ? <h1>Finished</h1> : <CoreGame onFinished={finishedText} />}
    </>
  );
}
