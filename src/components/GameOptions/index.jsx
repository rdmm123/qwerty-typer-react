import { useLocation } from "wouter";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import { useGlobalGameState } from "../../hooks/useGlobalGameState";
import GameStateContext from "../../context/GameStateContext";
import LanguageSelect from "../LanguageSelect";

export default function GameOptions() {
  const [location, setLocation] = useLocation();
  const { loading } = useGlobalGameState();
  const {
    resetState: [reset, setReset],
  } = useContext(GameStateContext);

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
        <LanguageSelect />
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
