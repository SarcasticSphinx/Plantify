import React, { useState, useEffect } from "react";
import star from "../../images/star.png";
import "./ProductModalStyles.css"; // Create this CSS file for styling
import convertToBDT from "../convertToBDT";

const ProductModal = ({ product, onClose }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Initialize cart from local storage or an empty array
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [quantity, setQuantity] = useState(1); // State to manage quantity of the product being added

  useEffect(() => {
    // Update local storage whenever cartItems changes
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  if (!product) return null;

  function handleAddToCart() {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.productName === product.name
    );

    if (existingItemIndex !== -1) {
      // Update quantity if item already exists in cart
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += quantity;
      setCartItems(updatedCart);
    } else {
      // Add new item to cart
      const newItem = {
        nurseryName: "Garden of Eden",
        nurseryImg: "",
        productName: product.name,
        productImg: product.img,
        price: product.price,
        quantity: quantity,
        shipping: product.shipping,
      };
      setCartItems((prev) => [...prev, newItem]);
    }

    // Reset quantity after adding to cart
    setQuantity(1);
  }

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
              <h3>Planting process:</h3>
              <p>{product.plantingProcess}</p>
            </div>
            <p className="mt-4 font-semibold text-[var(--primary-color)]">
              {product.nutrition}
            </p>
          </div>
        </div>

        <p className="modal-price">
          Price: <span>{convertToBDT(product.price)}৳</span> per one packed seed
        </p>
        <p className="modal-delivery-time">
          Delivery Time: <span>{product.deliveryTime}</span>
        </p>

        {/* Quantity Input */}
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="quantity-input"
        />

        <button onClick={handleAddToCart} className="modal-button">
          Add to cart
        </button>
        <a href="/Plantify/cart">
          <button onClick={() => {
            item.quantity === 0 ? handleAddToCart() : null
          }} className="modal-button">Order Now</button>
        </a>

        {/* Display added to cart message */}
        {cartItems.map((item) =>
          item.productName === product.name ? (
            <p key={item.productName} className="added-to-cart">
              [added to cart {item.quantity}x]
            </p>
          ) : null
        )}
      </div>
    </div>
  );
};

export default ProductModal;
