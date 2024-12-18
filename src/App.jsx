import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/Nav-Bar/nav.jsx";

import Home from "./Pages/Home.jsx";
import Guide from "./Pages/Guide.jsx";
import Cart from "./Pages/Cart.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/Plantify" element={<Home />} />
        <Route path="/Plantify/guide" element={<Guide />} />
        <Route path="/Plantify/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
