import React from "react";
import "./GuideStyle.css";
import { Link } from "react-router-dom";

const Guide = () => {
  return (
    <div className="guide-container">
      <h1>
        Welcome to <span>Plantify</span>
      </h1>
      <h2>Your Go-To Hub for Plant Enthusiasts</h2>
      <div className="guide-content">
        <p>
          Plantify is the official shopping platform for Botanica Metropolis,
          designed to bring nature closer to urban living. Explore a wide
          variety of plants, gardening tools, and sustainable solutions for your
          home, rooftop, or urban garden.
        </p>
      </div>
      <h2>How to Use This Website</h2>
      <div className="guide-content">
        <h3>Browse Products</h3>
        <p>
          Navigate through our organized categories such as Indoor Plants,
          Outdoor Plants, Gardening Essentials, and Rooftop Garden Kits.
        </p>

        <h3>Search Functionality</h3>
        <p>
          Use the search bar to quickly find specific plants or tools by name,
          category, or price range.
        </p>

        <h3>Product Details</h3>
        <p>
          Click on any item to view its detailed description, care instructions,
          and benefits.
        </p>

        <h3>Add to Cart</h3>
        <p>
          Found something you love? Click "Add to Cart" and continue shopping or
          proceed to checkout.
        </p>
      </div>
      <h2>Checkout Process</h2>
      <div className="guide-content">
        <ol>
          <li>Review your cart items.</li>
          <li>Enter your delivery information.</li>
          <li>Choose from our eco-friendly packaging options.</li>
          <li>Securely pay through multiple payment methods.</li>
        </ol>
      </div>

      <h2>Special Features</h2>
      <div className="guide-content">
        <ul>
          <li>
            AI-powered Plant Recommendation System based on your living space
            and needs.
          </li>
          <li>
            Expert advice integrated into product pages for detailed guidance.
          </li>
          <li>Seasonal promotions and discounts on select items.</li>
        </ul>
      </div>

      <h2>Why Choose Plantify?</h2>
      <div className="guide-content">
        <strong>Sustainable Shopping:</strong> We source plants and tools
        ethically to promote eco-friendly urban living.
        <br />
        <strong>Expert Support:</strong> Access gardening tips and chat with our
        plant care specialists anytime.
        <br />
        <strong>Community-Centric:</strong> Engage in our rooftop gardening
        projects and sustainable city initiatives.
      </div>
      <div className="guide-content">
        <h2>Get Started Today</h2>
        <p  className="embrace">
          <span >Embrace the green lifestyle!</span><br />
          Explore Plantify and transform your home into a lush haven.
        </p>

      </div>
      <a href="/Plantify/" className="shop-now-btn"  >Shop now!<button ></button></a>
    </div>
  );
};

export default Guide;
