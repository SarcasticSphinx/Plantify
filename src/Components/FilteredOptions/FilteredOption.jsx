import "./filterOptionStyle.css";
import { filteredProducts } from "./filteredProducts.js";

export default function FilteredOption() {

  return (
    <div className="options-container">
      <h2 className="Filtered-options-heading">
        Inspiring for your First order
      </h2>
      <div className="filtered-items">
        {filteredProducts.map((product, index) => (
          <div key={product.id} className="filtered-item">
            <div className="img">
              <img src={product.img} alt="" />
            </div>

            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
