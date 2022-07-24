import useStats from "../../hooks/useStats";
import "./styles.css";

export default function GameStats({ charCount }) {
  const { time, cpm, wpm } = useStats({ charCount });

  return (
    <div className="GameStats">
      <span>{time}</span>
      <span>{wpm.toFixed(1)} wpm</span>
      <span>{cpm.toFixed(1)} cpm</span>
    </div>
  );
}
