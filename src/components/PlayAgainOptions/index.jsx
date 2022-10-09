import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRotate,
  faHouseChimney,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "wouter";
import GameStateContext from "../../context/GameStateContext";
import "./styles.css";

export default function PlayAgainOptions() {
  const {
    finishedState: [finished, setFinished],
  } = useContext(GameStateContext);

  const handleReset = () => setFinished(false);

  return (
    <div className="PlayAgainOptions">
      <Link to="/" className="option" onClick={handleReset}>
        <FontAwesomeIcon className="" icon={faHouseChimney} />
        <p>MAIN MENU</p>
      </Link>
      <button className="option" onClick={handleReset}>
        <FontAwesomeIcon icon={faRotate} />
        <p>PLAY AGAIN</p>
      </button>
      <button className="option">
        <FontAwesomeIcon icon={faShareNodes} />
        <p>SHARE</p>
      </button>
    </div>
  );
}
