import { Link } from "wouter";
import "./styles.css";

export default function MainMenu() {
  return (
    <section className="MainMenu">
      <nav>
        <Link to="solo/">Solo</Link>
        <a href="#">Versus</a>
      </nav>
    </section>
  );
}
