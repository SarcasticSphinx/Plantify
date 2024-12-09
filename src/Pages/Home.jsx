import React from "react";


import Search from "../Components/Search-box/search";
import Controls from "../Components/filter and types/controls";
import FilteredOption from "../Components/FilteredOptions/FilteredOption";
import Products from "../Components/Products/Products.jsx";
import Suggestions from "../Components/Suggestions/Suggestions.jsx";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <div className="main-container">
      <Search />
      <Controls />
      <FilteredOption />
      <Products />
      <Suggestions />
    </div>
  );
};

export default Home;
