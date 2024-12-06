import Controls from "./Components/filter and types/controls.jsx";
import NavBar from "./Components/Nav-Bar/nav.jsx";
import Search from "./Components/Search-box/search.jsx";
import FilteredOption from "./Components/FilteredOptions/FilteredOption.jsx";
import Products from "./Components/Products/Products.jsx";
import Suggestions from "./Components/Suggestions/Suggestions.jsx";
import Footer from "./Components/Footer/Footer.jsx";


function App() {
  return (
    <>
      <NavBar/>
      <Search/>
      <Controls/>
      <FilteredOption/>
      <Products/>
      <Suggestions/>
      <Footer/>
    </>
  );
}

export default App;
