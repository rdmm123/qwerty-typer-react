import { useState } from "react";
import GameText from "../../components/GameText";
import getText from "../../services/getText";

export default function SinglePlayer() {
  const fullText = getText();
  const [textToWrite, setTextToWrite] = useState(fullText);
  const [writtenText, setWrittenText] = useState("");
  const [wrongText, setWrongText] = useState("");

  const handleKeyUp = (event) => {
    const { key } = event;
    console.log(key);
    const charToWrite = textToWrite.charAt(0);

    if (key === "Backspace") {
      setTextToWrite(textToWrite.slice(1));
      setWrittenText(writtenText.slice(0, -1));
    }

    if (key.length > 1) return;

    if (key === charToWrite && wrongText.length === 0) {
      setTextToWrite(textToWrite.slice(1));
      setWrittenText(writtenText + key);
      return;
    }

    if (key !== charToWrite || wrongText.length > 0) {
      setTextToWrite(textToWrite.slice(1));
      setWrongText(wrongText + charToWrite);
      return;
    }
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
        onKeyDown={handleKeyUp}
        autoFocus
        autoComplete="off"
      />
    </>
  );
}
