import "./filterOptionStyle.css";
import { products } from "../Products/products.js";
import { useState } from "react";
import ProductModal from "../Products/ProductModal";

// Function to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
};

export default function FilteredOption() {
  const shuffledProducts = shuffleArray([...products]);
  const selectedProducts = shuffledProducts.slice(0, 6);

  const [productModal, setProductModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setProductModal(true);
  };

  const closeModal = () => {
    setProductModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className="options-container">
      <h2 className="Filtered-options-heading">
        Inspiring for your First order
      </h2>
      <div className="filtered-items">
        {selectedProducts.map((product) => ( // Fix: Use selectedProducts here
          <div onClick={() => handleProductClick(product)} key={product.id} className="filtered-item">
            <div className="img">
              <img src={product.img} alt={product.name} />
            </div>
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
      {/* Render the Product Modal */}
      {productModal && (
        <ProductModal product={selectedProduct} onClose={closeModal} /> // Fix: Pass selectedProduct
      )}
    </div>
  );
}