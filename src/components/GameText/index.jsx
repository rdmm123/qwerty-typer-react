import "./styles.css";

export default function GameText({ written, wrong, toWrite }) {
  return (
    <div className="GameText">
      <span className="text-written">{written}</span>
      <span className="text-wrong">{wrong}</span>
      <span className="text-to-write">{toWrite}</span>
    </div>
  );
}
