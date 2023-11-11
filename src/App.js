import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import GlobalStyle from "./styled";
import Home from "./pages/Home";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
