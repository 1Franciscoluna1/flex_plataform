import Login from "./components/login";
import Barra from "./components/barr_nav";
import Registro from "./components/register";
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import './App.css';
import Metricos from "./components/metricos";

function App() {
  return (
    <div className="">
      <header className="">
        <Router>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Registro />}/>
            <Route path="/home" element={<Barra />} />
            <Route path="/metrics" element={<Metricos />} />
          </Routes>
        </Router>
        </header>
      </div>
  );
}

export default App;
