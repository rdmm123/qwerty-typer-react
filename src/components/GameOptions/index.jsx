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

export default function GameOptions() {
  const [location, setLocation] = useLocation();
  const { loading, finished } = useGlobalGameState();

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
        <IconSelect icon={faLanguage} disabled={loading}>
          <option value="english">English</option>
          <option value="spanish">Español</option>
        </IconSelect>
        <button
          id="reset_text"
          className="menu-icon menu-button"
          disabled={loading}
          onClick={() => console.log("holla")}
        >
          <FontAwesomeIcon icon={faArrowsRotate} />
        </button>
      </div>
    </header>
  );
}
