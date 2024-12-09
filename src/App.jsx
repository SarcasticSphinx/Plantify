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
<<<<<<< HEAD
        <Route path="/Plantify" element={<Home />} />
        <Route path="/Plantify/guide" element={<Guide />} />
        <Route path="/Plantify/cart" element={<Cart />} />
=======
        <Route path="/" element={<Home />} />
        <Route path="/Plantify" element={<Home />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/cart" element={<Cart />} />
>>>>>>> db3c5a0c940cf8905cb3c3d2e9046b105f1c2aa4
      </Routes>
      <Footer />
    </>
  );
}

export default App;
