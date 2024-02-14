import About from "./components/About";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Expertise from "./components/Expertise";
import Values from "./components/Values";
import "./App.css";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <NavBar />
      <About />
      <Expertise />
      <Values />
      <Contact />
    </main>
  );
}

export default App;
