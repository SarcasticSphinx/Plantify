// Products.js
import "./ProductStyles.css";
import star from "../../images/star.png";
import { products } from "./products.js";
import { useEffect, useState } from "react";
import ProductModal from './ProductModal'; // Import the modal component

export default function Products() {
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
        <>
            <h1 className="products-heading">Order Trees and planting accessories in <span>Kazla, Rajshahi, Bangladesh</span></h1>
            <div className="products-container">
                {products.map((product) => {
                    return (
                        <div onClick={() => handleProductClick(product)} className="product" key={product.id}>
                            <div className="product-image">
                                <img src={product.img} alt="" />
                            </div>
                            <div className="product-details">
                                <p className="product-name">{product.name}</p>
                                <div className="product-description">
                                    <p className="product-short-description">
                                        {product.description}
                                    </p>
                                    <p className="product-price">{product.price}$ for one</p>
                                </div>

                                <div className="product-rating">
                                    <p>{product.rating}</p>
                                    <img className="star" src={star} alt="" />
                                </div>
                                <p className="delivery-time">{product.deliveryTime}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Render the Product Modal */}
            {productModal && (
                <ProductModal product={selectedProduct} onClose={closeModal} />
            )}
        </>
    );
}