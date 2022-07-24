import { useEffect, useState } from "react";
import { useStopwatch } from "react-timer-hook";

const formatTime = ({ minutes, seconds }) => {
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};

export default function useStats({ charCount }) {
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: true });

  const [cpm, setCpm] = useState(0);
  const [wpm, setWpm] = useState(0);

  useEffect(() => {
    if (seconds === 0 && minutes === 0) return;
    const cpm = charCount / (minutes + seconds / 60);
    setCpm(cpm);
    setWpm(cpm / 5);
  }, [seconds, minutes]);

  const time = formatTime({ minutes, seconds });
  return { time, cpm, wpm };
}
