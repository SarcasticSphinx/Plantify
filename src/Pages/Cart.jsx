<<<<<<< HEAD
import React from "react";
import { useState, useEffect } from "react";
import { shippingOptions } from "../data/shippingOptions.js";
import "./cartStyles.css";
import moreInfo from "../images/more.png";
import agreement from "../images/agreement.png";
import plantNursery from "../images/plant-nursery.png";
import { cart } from "../data/cart";
import visa from "../images/visa.png";
import mastercard from "../images/card.png";
import bkash from "../images/bkash.png";
import nagad from "../images/nagad.png";
import googlePay from "../images/google-pay.png";
import voucher from "../images/voucher.png";
import dropDown from "../images/down.png";
import emptyCart from "../images/empty-cart.png";
import convertToBDT from "../Components/convertToBDT.js";

const Cart = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const handleOptionSelect = (index, option) => {
    const updatedCart = [...cart];
    updatedCart[index].shippingOption = option;
    setCart(updatedCart);
    setOpenDropdownIndex(null);
  };

  const handleDeleteFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  // State to manage editing for each item
  const [editingIndex, setEditingIndex] = useState(null);
  const [quantities, setQuantities] = useState(
    cart.map((item) => item.quantity)
  );

  const handleEditClick = (index) => {
    setEditingIndex(index);
  };

  const handleConfirmClick = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = quantities[index]; // Update quantity in cart
    setCart(updatedCart);
    setEditingIndex(null); // Exit editing mode
  };

  const handleCancelClick = () => {
    setEditingIndex(null); // Exit editing mode without saving
  };

  return (
    <div>
      {cart.length === 0 ? (
        <div className="empty-cart-container">
          <img src={emptyCart} alt="Empty cart" />
          <h1>Your Cart is Empty</h1>
          <p>Looks like you haven't added anything to your cart yet</p>
          <a href="/Plantify/"><button>Continue Shopping</button></a>
        </div>
      ) : (
        <div className="cart-container">
          <h1>Your Cart ({cart.length})</h1>
          <div className="agreement-text">
            <img src={agreement} alt="" />
            <p>
              <span>Buy confidently</span> with Plantify's Purchase Protection
              program for buyers, get a full refund in the rare case your item
              doesn't arrive, arrives damaged, or isn't as described.
              <a href="#">See eligibility</a>
            </p>
          </div>
          <div className="cart-items-and-payment">
            <div className="cart-items">
              {cart.map((item, index) => {
                return (
                  <div key={index} className="cart-item">
                    <div className="nursery-info">
                      <img
                        className="nursery-img"
                        src={
                          item.nurseryImg === ""
                            ? plantNursery
                            : item.nurseryImg
                        }
                        alt="nursery"
                      />
                      <h3>{item.nurseryName}</h3>
                      <img className="more-info" src={moreInfo} alt="" />
                    </div>
                    <div className="cart-product-details">
                      <img src={item.productImg} alt="" />
                      <div className="cart-product-detail-info">
                        <h3>{item.productName}</h3>
                        <p>recent purchase history</p>
                        <div className="cart-controls">
                          <input
                            type="number"
                            value={
                              editingIndex === index
                                ? quantities[index]
                                : item.quantity
                            }
                            onChange={(e) => {
                              const newQuantity = Math.max(
                                1,
                                parseInt(e.target.value)
                              ); // Ensure quantity is at least 1
                              const updatedQuantities = [...quantities];
                              updatedQuantities[index] = newQuantity; // Update local quantity state
                              setQuantities(updatedQuantities);
                            }}
                            disabled={editingIndex !== index} // Disable input if not editing
                          />
                          {editingIndex === index ? (
                            <>
                              <button onClick={() => handleConfirmClick(index)}>
                                Confirm
                              </button>
                              <button onClick={handleCancelClick}>
                                Cancel
                              </button>
                            </>
                          ) : (
                            <button onClick={() => handleEditClick(index)}>
                              Edit
                            </button>
                          )}
                          <button onClick={() => handleDeleteFromCart(index)}>
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="cart-product-price">
                        BDT{" "}
                        {convertToBDT(item.price) *
                          (editingIndex === index
                            ? quantities[index]
                            : item.quantity)}
                        ৳
                      </div>
                    </div>
                    <div
                      className="shipping-info"
                      onClick={() => toggleDropdown(index)}
                    >
                      <span>Shipping: </span>
                      {item.shippingOption || "FREE Shipping"}
                      <img src={dropDown} alt="Dropdown icon" />
                      {openDropdownIndex === index && (
                        <div className="dropdown-menu">
                          {shippingOptions.map((option) => (
                            <div
                              key={option.id}
                              className="dropdown-item"
                              onClick={(e) => {
                                e.stopPropagation(); // Prevent event bubbling
                                handleOptionSelect(index, option.name);
                              }}
                            >
                              {option.name}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Payment section */}
            <div className="payment-secton">
              <h2 className="payment-section-title">How you'll pay</h2>
              <div className="payment-options">
                <div className="payment-option">
                  <input
                    type="radio"
                    id="card-payment"
                    name="paymentMethod"
                    value="creditCard"
                  />
                  <label htmlFor="card-payment">
                    <img src={visa} alt="" />
                    <img src={mastercard} alt="" />
                  </label>
                </div>
                <div className="payment-option">
                  <input
                    type="radio"
                    id="bkash-nagad"
                    name="paymentMethod"
                    value="paypal"
                  />
                  <label htmlFor="bkash-nagad">
                    <img src={bkash} alt="" />
                    <img src={nagad} alt="" />
                  </label>
                </div>
                <div className="payment-option">
                  <input
                    type="radio"
                    id="g-pay"
                    name="paymentMethod"
                    value="bankTransfer"
                  />
                  <label htmlFor="g-pay">
                    <img src={googlePay} alt="" />
                  </label>
                </div>
              </div>

              {/* payment-detail */}
              <div className="payment-detail">
                <div className="payment-detail-info">
                  <h3>Item(s) Total</h3>
                  <p>
                    BDT{" "}
                    {convertToBDT(
                      cart.reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      )
                    )}
                    ৳
                  </p>{" "}
                  {/* Calculate total dynamically */}
                </div>
                {/* Assuming shipping is always free for simplicity */}
                <div className="payment-detail-info">
                  <h3>
                    Shipping
                    <span className="location-info">(To bangladesh)</span>
                  </h3>

                  <p>FREE</p>
                </div>
                {/* Total calculation */}
                <div className="horizontal-divider"></div>
                <div className="payment-detail-info">
                  <h3 className="total-payment">Total({cart.length} items)</h3>{" "}
                  {/* Dynamic item count */}
                  {/* Calculate total dynamically */}
                  <p>
                    BDT{" "}
                    {cart.reduce(
                      (total, item) => total + convertToBDT(item.price) * item.quantity,
                      0
                    )}
                    ৳
                  </p>
                </div>
                {/* Gift option */}
                <div className="gift">
                  <input type="checkbox" id="gift" name="gift" />
                  <label htmlFor="gift">
                    Mark as a gift<a href="">Learn more</a>
                  </label>
                </div>
                {/* Proceed to payment button */}
                <button>Proceed to payment</button>
              </div>

              {/* Voucher option */}
              <div className="voucher-option">
                {/* Existing voucher code section */}
                <div className="voucher">
                  <img src={voucher} alt="" />
                  <h3>Apply coupon code</h3>
                </div>
                {/* Local taxes information */}
                <p>
                  Local taxes included (where applicable) <br />*{" "}
                  <a href="">
                    <u>
                      Learn more about additional taxes, duties, and fees that
                      may apply
                    </u>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
=======
import React from "react";
import { useState, useEffect } from "react";
import { shippingOptions } from "../data/shippingOptions.js";
import "./cartStyles.css";
import moreInfo from "../images/more.png";
import agreement from "../images/agreement.png";
import plantNursery from "../images/plant-nursery.png";
import { cart } from "../data/cart";
import visa from "../images/visa.png";
import mastercard from "../images/card.png";
import bkash from "../images/bkash.png";
import nagad from "../images/nagad.png";
import googlePay from "../images/google-pay.png";
import voucher from "../images/voucher.png";
import dropDown from "../images/down.png";
import emptyCart from "../images/empty-cart.png";
import convertToBDT from "../Components/convertToBDT.js";

const Cart = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const handleOptionSelect = (index, option) => {
    const updatedCart = [...cart];
    updatedCart[index].shippingOption = option;
    setCart(updatedCart);
    setOpenDropdownIndex(null);
  };

  const handleDeleteFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  // State to manage editing for each item
  const [editingIndex, setEditingIndex] = useState(null);
  const [quantities, setQuantities] = useState(
    cart.map((item) => item.quantity)
  );

  const handleEditClick = (index) => {
    setEditingIndex(index);
  };

  const handleConfirmClick = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = quantities[index]; // Update quantity in cart
    setCart(updatedCart);
    setEditingIndex(null); // Exit editing mode
  };

  const handleCancelClick = () => {
    setEditingIndex(null); // Exit editing mode without saving
  };

  return (
    <div>
      {cart.length === 0 ? (
        <div className="empty-cart-container">
          <img src={emptyCart} alt="Empty cart" />
          <h1>Your Cart is Empty</h1>
          <p>Looks like you haven't added anything to your cart yet</p>
          <a href="/Plantify/"><button>Continue Shopping</button></a>
        </div>
      ) : (
        <div className="cart-container">
          <h1>Your Cart ({cart.length})</h1>
          <div className="agreement-text">
            <img src={agreement} alt="" />
            <p>
              <span>Buy confidently</span> with Plantify's Purchase Protection
              program for buyers, get a full refund in the rare case your item
              doesn't arrive, arrives damaged, or isn't as described.
              <a href="#">See eligibility</a>
            </p>
          </div>
          <div className="cart-items-and-payment">
            <div className="cart-items">
              {cart.map((item, index) => {
                return (
                  <div key={index} className="cart-item">
                    <div className="nursery-info">
                      <img
                        className="nursery-img"
                        src={
                          item.nurseryImg === ""
                            ? plantNursery
                            : item.nurseryImg
                        }
                        alt="nursery"
                      />
                      <h3>{item.nurseryName}</h3>
                      <img className="more-info" src={moreInfo} alt="" />
                    </div>
                    <div className="cart-product-details">
                      <img src={item.productImg} alt="" />
                      <div className="cart-product-detail-info">
                        <h3>{item.productName}</h3>
                        <p>recent purchase history</p>
                        <div className="cart-controls">
                          <input
                            type="number"
                            value={
                              editingIndex === index
                                ? quantities[index]
                                : item.quantity
                            }
                            onChange={(e) => {
                              const newQuantity = Math.max(
                                1,
                                parseInt(e.target.value)
                              ); // Ensure quantity is at least 1
                              const updatedQuantities = [...quantities];
                              updatedQuantities[index] = newQuantity; // Update local quantity state
                              setQuantities(updatedQuantities);
                            }}
                            disabled={editingIndex !== index} // Disable input if not editing
                          />
                          {editingIndex === index ? (
                            <>
                              <button onClick={() => handleConfirmClick(index)}>
                                Confirm
                              </button>
                              <button onClick={handleCancelClick}>
                                Cancel
                              </button>
                            </>
                          ) : (
                            <button onClick={() => handleEditClick(index)}>
                              Edit
                            </button>
                          )}
                          <button onClick={() => handleDeleteFromCart(index)}>
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="cart-product-price">
                        BDT{" "}
                        {convertToBDT(item.price) *
                          (editingIndex === index
                            ? quantities[index]
                            : item.quantity)}
                        ৳
                      </div>
                    </div>
                    <div
                      className="shipping-info"
                      onClick={() => toggleDropdown(index)}
                    >
                      <span>Shipping: </span>
                      {item.shippingOption || "FREE Shipping"}
                      <img src={dropDown} alt="Dropdown icon" />
                      {openDropdownIndex === index && (
                        <div className="dropdown-menu">
                          {shippingOptions.map((option) => (
                            <div
                              key={option.id}
                              className="dropdown-item"
                              onClick={(e) => {
                                e.stopPropagation(); // Prevent event bubbling
                                handleOptionSelect(index, option.name);
                              }}
                            >
                              {option.name}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Payment section */}
            <div className="payment-secton">
              <h2 className="payment-section-title">How you'll pay</h2>
              <div className="payment-options">
                <div className="payment-option">
                  <input
                    type="radio"
                    id="card-payment"
                    name="paymentMethod"
                    value="creditCard"
                  />
                  <label htmlFor="card-payment">
                    <img src={visa} alt="" />
                    <img src={mastercard} alt="" />
                  </label>
                </div>
                <div className="payment-option">
                  <input
                    type="radio"
                    id="bkash-nagad"
                    name="paymentMethod"
                    value="paypal"
                  />
                  <label htmlFor="bkash-nagad">
                    <img src={bkash} alt="" />
                    <img src={nagad} alt="" />
                  </label>
                </div>
                <div className="payment-option">
                  <input
                    type="radio"
                    id="g-pay"
                    name="paymentMethod"
                    value="bankTransfer"
                  />
                  <label htmlFor="g-pay">
                    <img src={googlePay} alt="" />
                  </label>
                </div>
              </div>

              {/* payment-detail */}
              <div className="payment-detail">
                <div className="payment-detail-info">
                  <h3>Item(s) Total</h3>
                  <p>
                    BDT{" "}
                    {convertToBDT(
                      cart.reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      )
                    )}
                    ৳
                  </p>{" "}
                  {/* Calculate total dynamically */}
                </div>
                {/* Assuming shipping is always free for simplicity */}
                <div className="payment-detail-info">
                  <h3>
                    Shipping
                    <span className="location-info">(To bangladesh)</span>
                  </h3>

                  <p>FREE</p>
                </div>
                {/* Total calculation */}
                <div className="horizontal-divider"></div>
                <div className="payment-detail-info">
                  <h3 className="total-payment">Total({cart.length} items)</h3>{" "}
                  {/* Dynamic item count */}
                  {/* Calculate total dynamically */}
                  <p>
                    BDT{" "}
                    {cart.reduce(
                      (total, item) => total + convertToBDT(item.price) * item.quantity,
                      0
                    )}
                    ৳
                  </p>
                </div>
                {/* Gift option */}
                <div className="gift">
                  <input type="checkbox" id="gift" name="gift" />
                  <label htmlFor="gift">
                    Mark as a gift<a href="">Learn more</a>
                  </label>
                </div>
                {/* Proceed to payment button */}
                <button>Proceed to payment</button>
              </div>

              {/* Voucher option */}
              <div className="voucher-option">
                {/* Existing voucher code section */}
                <div className="voucher">
                  <img src={voucher} alt="" />
                  <h3>Apply coupon code</h3>
                </div>
                {/* Local taxes information */}
                <p>
                  Local taxes included (where applicable) <br />*{" "}
                  <a href="">
                    <u>
                      Learn more about additional taxes, duties, and fees that
                      may apply
                    </u>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
>>>>>>> db3c5a0c940cf8905cb3c3d2e9046b105f1c2aa4
