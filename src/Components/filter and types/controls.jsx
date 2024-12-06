import React, { useState } from "react";
import "./controlStyles.css";
import filter from "../../images/filter.png";
import downArrow from "../../images/arrow-down.png";

export default function Controls() {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [isTypesMenuOpen, setIsTypesMenuOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const filterOptions = [
    { id: "price", label: "Price Range" },
    { id: "availability", label: "Availability" },
    { id: "condition", label: "Condition" },
    { id: "location", label: "Nearby" },
  ];

  const typeOptions = [
    { id: "trees", label: "Trees" },
    { id: "shrubs", label: "Shrubs" },
    { id: "flowers", label: "Flowers" },
    { id: "herbs", label: "Herbs" },
    { id: "succulents", label: "Succulents" },
    { id: "accessories", label: "Accessories" },
    { id: "Chemicals", label: "Tree Chemicals" },
  ];

  const toggleFilterSelection = (filterId) => {
    setSelectedFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((f) => f !== filterId)
        : [...prev, filterId]
    );
  };

  const toggleTypeSelection = (typeId) => {
    setSelectedTypes((prev) =>
      prev.includes(typeId)
        ? prev.filter((t) => t !== typeId)
        : [...prev, typeId]
    );
  };

  return (
    <div className="controls">
      <div className="controls-wrapper">
        <div className="control-button">
        <button
          onClick={() => {
            setIsFilterMenuOpen(!isFilterMenuOpen);
            setIsTypesMenuOpen(false);
          }}
          className={isFilterMenuOpen ? "active" : ""}
        >
          <img src={filter} alt="Filter icon" />
          Filter
          <img
            className={`down-arrow ${isFilterMenuOpen ? "rotate" : ""}`}
            src={downArrow}
            alt="Down arrow icon"
          />
        </button>
        {isFilterMenuOpen && (
          <div className="dropdown-menu">
            {filterOptions.map((filter) => (
              <label key={filter.id} className="dropdown-item">
                <input
                  type="checkbox"
                  checked={selectedFilters.includes(filter.id)}
                  onChange={() => toggleFilterSelection(filter.id)}
                />
                {filter.label}
              </label>
            ))}
          </div>
        )}
        </div>
        <div className="control-button">
          <button
            onClick={() => {
              setIsTypesMenuOpen(!isTypesMenuOpen);
              setIsFilterMenuOpen(false);
            }}
            className={isTypesMenuOpen ? "active" : ""}
          >
            Types
            <img
              className={`down-arrow ${isTypesMenuOpen ? "rotate" : ""}`}
              src={downArrow}
              alt="Down arrow icon"
            />
          </button>
          {isTypesMenuOpen && (
            <div className="dropdown-menu">
              {typeOptions.map((type) => (
                <label key={type.id} className="dropdown-item">
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(type.id)}
                    onChange={() => toggleTypeSelection(type.id)}
                  />
                  {type.label}
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
