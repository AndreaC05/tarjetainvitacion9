import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AudioProvider } from "./context/AudioProvider.jsx";

import Home from "./pages/Home.jsx";
import SegundoHome from "./pages/SegundoHome.jsx";
import TerceroHome from "./pages/TerceroHome.jsx";

function App() {
  return(
    <>
       <AudioProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/flores" element={<SegundoHome />}></Route>
            <Route path="/ramo" element={<TerceroHome />}></Route>
          </Routes>
        </BrowserRouter>
      </AudioProvider>
    </>
  );
}

export default App;