import { Link, useLocation } from "wouter";

export default function GameOptions() {
  const [location, setLocation] = useLocation();

  return (
    <header className="GameOptions">
      <div className="left">
        <button
          onClick={() => setLocation("/")}
          className="menu-button menu-icon"
        >
          Home
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      </div>
      <div className="right">
        <select name="lang_select" id="lang_select" className="lang-select">
          <option value="english">English</option>
          <option value="spanish">Español</option>
        </select>
        <button id="reset_text" className="menu-icon menu-button">
          <i className="fa-solid fa-arrows-rotate"></i>
        </button>
      </div>
    </header>
  );
}
