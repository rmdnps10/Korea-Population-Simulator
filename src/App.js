import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import GlobalStyle from "./styled";
import Home from "./pages/Home";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import FirstModel from "./pages/FirstModel";

function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <>
      <GlobalStyle />
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/1970" element={<FirstModel></FirstModel>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
