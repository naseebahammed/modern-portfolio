import "./App.scss";
import Contact from "./Pages/Contact/Contact";
import Experience from "./Pages/Experience/Experience";
import Home from "./Pages/Home/Home";

import Quote from "./Pages/Quote/Quote";
import Skills from "./Pages/Skills/Skills";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Quote />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
