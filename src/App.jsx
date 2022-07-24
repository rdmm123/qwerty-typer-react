import "./App.css";
import SinglePlayer from "./pages/SinglePlayer";
import MainMenu from "./pages/MainMenu";
import { Route } from "wouter";
import BottomMenu from "./components/BottomMenu";

function App() {
  return (
    <div className="App">
      <Route path="/" component={MainMenu} />
      <Route path="/solo" component={SinglePlayer} />
      <BottomMenu />
    </div>
  );
}

export default App;
