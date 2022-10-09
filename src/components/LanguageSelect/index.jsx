import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useContext } from "react";
import { useGlobalGameState } from "../../hooks/useGlobalGameState";
import GameStateContext from "../../context/GameStateContext";
import IconSelect from "../IconSelect";
import getLanguages from "../../services/getLanguages";

export default function LanguageSelect() {
  const [langs, setLangs] = useState([]);

  const { loading } = useGlobalGameState();
  const {
    languageState: [language, setLanguage],
    resetState: [reset, setReset],
  } = useContext(GameStateContext);

  const formatLangs = (langs) =>
    Object.entries(langs).map(([code, name]) => ({ value: code, label: name }));

  useEffect(() => {
    getLanguages().then((langs) => {
      setLangs(formatLangs(langs));
    });
  }, []);

  const handleChange = (value) => {
    setLanguage(value);
    setReset(!reset);
  };
  return (
    <IconSelect
      icon={faLanguage}
      disabled={loading}
      defaultValue={language}
      onChange={handleChange}
    >
      {langs.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </IconSelect>
  );
}
