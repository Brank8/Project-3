import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import SearchPlayer from "./pages/SearchPlayer/SearchPlayer";
import SearchTeam from "./pages/SearchTeam/SearchTeam";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/searchPlayer" element={<SearchPlayer />} />
        <Route path="/searchTeam" element={<SearchTeam />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
