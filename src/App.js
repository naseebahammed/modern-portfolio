import "./App.scss";
import Contact from "./Pages/Contact/Contact";
import Experience from "./Pages/Experience/Experience";
import Home from "./Pages/Home/Home";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quote from "./Pages/Quote/Quote";
import Skills from "./Pages/Skills/Skills";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Home />
      <Quote />
      <Experience />
      <Skills />
      <Contact />
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;