import { useState, useEffect } from "react";
import getText from "../services/getText";

export default function useText() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);

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
