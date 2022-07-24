import "./App.css";
import SinglePlayer from "./pages/SinglePlayer";
import MainMenu from "./pages/MainMenu";
import { Route } from "wouter";
import BottomMenu from "./components/BottomMenu";
import { GameStateContextProvider } from "./context/GameStateContext";

function App() {
  return (
    <div className="App">
      <Route path="/" component={MainMenu} />
      <GameStateContextProvider>
        <Route path="/solo" component={SinglePlayer} />
      </GameStateContextProvider>
      <BottomMenu />
    </div>
  );
}

export default App;
