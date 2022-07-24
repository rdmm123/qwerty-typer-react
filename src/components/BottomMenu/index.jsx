import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./styles.css";

export default function BottomMenu() {
  return (
    <footer className="BottomMenu">
      <a
        href="https://github.com/rdmm123/qwerty-typer-react"
        target="_blank"
        className="menu-button menu-icon"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </footer>
  );
}
