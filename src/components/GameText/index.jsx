import './styles.css'

export default function GameText({ written, wrong, toWrite }) {
  return (
    <div class="text-div">
      <span class="text-written">{written}</span>
      <span class="text-wrong">{wrong}</span>
      <span class="text-to-write">{toWrite}</span>
    </div>
  );
}