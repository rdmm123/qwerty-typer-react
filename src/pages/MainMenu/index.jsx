import { Link } from "wouter";

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
