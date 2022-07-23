import { useState, useEffect } from "react";
import GameText from "../../components/GameText";
import getText from "../../services/getText";
import GameStats from "../GameStats";

export default function CoreGame({ onFinished = () => {} }) {
  const fullText = getText();
  const [textToWrite, setTextToWrite] = useState(fullText);
  const [writtenText, setWrittenText] = useState("");
  const [wrongText, setWrongText] = useState("");

  useEffect(() => {
    if (textToWrite.length === 0) {
      onFinished();
    }
  }, [textToWrite]);

  // Returns the amount of characters to delete from the text (to handle ctrl + delete)
  const getCharsToDelete = ({ promptText }) => {
    let spaceCounter = 0;
    for (let i = promptText.length - 1; i >= 0; i--) {
      const c = promptText.charAt(i);
      if (c !== " ") break;
      spaceCounter++;
    }
    const promptWords = promptText.match(/[\w-'\u00C0-\u017F]+|[^\w\s]/g);
    console.log(promptWords);
    const purgedWords =
      promptWords !== null ? promptWords.filter((word) => word.length > 0) : [];

    return purgedWords.length > 0
      ? purgedWords[purgedWords.length - 1].length + spaceCounter
      : spaceCounter;
  };

  // Deletes last character of the text and adds it to the text to write
  const deleteChars = ({ text, setter, amount, textToAdd = textToWrite }) => {
    if (amount == 0) return;

    const chars = text.slice(-amount);
    const newText = chars + textToAdd;
    setTextToWrite(newText);
    setter(text.slice(0, -amount));
    return { newText, count: chars.length };
  };

  // Function that executes when the backspace key is pressed
  const backspacePressed = ({ ctrlKey, promptText }) => {
    if (!promptText) return;

    const amount = ctrlKey ? getCharsToDelete({ promptText }) : 1;
    console.log(amount);

    if (wrongText && !writtenText)
      return deleteChars({ text: wrongText, setter: setWrongText, amount });

    if (writtenText && !wrongText)
      return deleteChars({ text: writtenText, setter: setWrittenText, amount });

    const { newText, count } = deleteChars({
      text: wrongText,
      setter: setWrongText,
      amount,
    });

    deleteChars({
      text: writtenText,
      setter: setWrittenText,
      amount: amount - count,
      textToAdd: newText,
    });
  };

  const spacebarPressed = ({ event }) => {
    event.target.value = "";
    event.preventDefault();
  };

  const handleKeyUp = (event) => {
    const { key, ctrlKey, target } = event;
    const charToWrite = textToWrite.charAt(0);

    if (key === "Backspace")
      return backspacePressed({ ctrlKey, promptText: target.value });

    // If its not a letter
    if (key.length > 1) return;

    // If key is correct and there is no wrong text
    if (key === charToWrite && wrongText.length === 0) {
      setTextToWrite(textToWrite.slice(1));
      setWrittenText(writtenText + key);

      if (key === " ") return spacebarPressed({ event });

      if (textToWrite.length === 0) onFinished();

      return;
    }

    // If key is wrong or there is already wrong text
    if (key !== charToWrite || wrongText.length > 0) {
      setTextToWrite(textToWrite.slice(1));
      setWrongText(wrongText + charToWrite);
      return;
    }
  };

  return (
    <>
      <GameStats />
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
