// ProductModal.js
import React from "react";
import star from "../../images/star.png";
import "./ProductModalStyles.css"; // Create this CSS file for styling

const ProductModal = ({ product, onClose }) => {
  if (!product) return null; // If no product is selected, return null

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
        &#10006;
        </button>
        <div className="modal-title">
          <p>{product.name}</p>
          <div className="modal-rating">
            <p>{product.rating}</p>
            <img src={star} alt="star" />
          </div>
        </div>
        <div className="modal-info">
          <img src={product.img} alt={product.name} className="modal-image" />
          <div className="modal-detailed-info">
            <p className="modal-description">{product.detailedDescription}</p>
            <div className="planting-process">
                <h3>Planting process: </h3>
                <p>{product.plantingProcess}</p>
            </div>
            <p className=" mt-4 font-semibold text-[var(--primary-color)]">
              {product.nutrition}
            </p>
          </div>
        </div>

        <p className="modal-price">Price: <span>{product.price}$</span> per one packed seed</p>
        <p className="modal-delivery-time">
          Delivery Time: <span>{product.deliveryTime}</span>
        </p>
        <button className="modal-button">Add to cart</button>
        <button className="modal-button">Order Now</button>
      </div>
    </div>
  );
};

export default ProductModal;
