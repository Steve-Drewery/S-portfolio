import "./App.css";
import Circle from "./components/Circle/Circle";
import Contact from "./components/Contact/Contact";
import { Header } from "./components/Header/Header";
import { Intro } from "./components/Header/Intro/Intro";
import Home from "./components/Projects/Projects";

const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Home />
      <Circle />
      <Contact />
    </div>
  );
};

export default App;
