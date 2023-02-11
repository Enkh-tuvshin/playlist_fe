import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LeftBar } from "./component/LeftBar";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { Login } from "./component/Login";
import Signup from "./component/Signup";
import { CreatePlaylist } from "./pages/CreatePlaylist";
import { Navbar } from "./component/Navbar";
import { Songs } from "./component/Songs";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <LeftBar />
        <div className="header">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/playlist" element={<CreatePlaylist />} />
            <Route path="/song" element={<Songs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
