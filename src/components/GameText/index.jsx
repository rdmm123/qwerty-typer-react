import "./styles.css";

export default function GameText({ written, wrong, toWrite }) {
  return (
    <div className="text-div">
      <span className="text-written">{written}</span>
      <span className="text-wrong">{wrong}</span>
      <span className="text-to-write">{toWrite}</span>
    </div>
  );
}
