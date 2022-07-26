import { useLocation } from "wouter";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowsRotate,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import IconSelect from "../IconSelect";
import { useGlobalGameState } from "../../hooks/useGlobalGameState";
import GameStateContext from "../../context/GameStateContext";

export default function GameOptions() {
  const [location, setLocation] = useLocation();
  const { loading } = useGlobalGameState();
  const {
    languageState: [language, setLanguage],
    resetState: [reset, setReset],
  } = useContext(GameStateContext);

  const handleChange = (value) => setLanguage(value);

  const resetText = () => setReset(!reset);

  return (
    <header className="GameOptions">
      <div>
        <button
          onClick={() => setLocation("/")}
          className="menu-button menu-icon"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </div>
      <div>
        <IconSelect
          icon={faLanguage}
          disabled={loading}
          defaultValue={language}
          onChange={handleChange}
        >
          <option value="english">English</option>
          <option value="spanish">Español</option>
        </IconSelect>
        <button
          className="menu-icon menu-button"
          disabled={loading}
          onClick={resetText}
        >
          <FontAwesomeIcon icon={faArrowsRotate} />
        </button>
      </div>
    </header>
  );
}
