import  {Routes, Route} from "react-router-dom";
import NavBar from "./Components/Nav-Bar/nav.jsx";

import Home from "./Pages/Home.jsx";
import Guide from "./Pages/Guide.jsx";
import Cart from "./Pages/Cart.jsx";
import Footer from "./Components/Footer/Footer.jsx";


function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
