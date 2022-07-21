import { useState } from "react";
import GameText from "../../components/GameText";
import getText from "../../services/getText";

export default function SinglePlayer() {
  const [textToWrite, setTextToWrite] = useState(getText({}));
  const [writtenText, setWrittenText] = useState("");
  const [wrongText, setWrongText] = useState("");

  const handleKeyDown = (event) => {
    const { key, target: input } = event;

    const lastChar = input.value.charAt(input.value.length - 1);
    console.log({ key, lastChar });
  };

  return (
    <>
      <GameText written={writtenText} wrong={wrongText} toWrite={textToWrite} />
      <input
        type="text"
        name="prompt"
        id="prompt"
        className="prompt"
        onBlur={(event) => event.target.focus()}
        onKeyDown={handleKeyDown}
        autoFocus
        autoComplete="off"
      />
    </>
  );
}
