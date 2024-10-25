import React, { useState, useEffect } from 'react';

const ProductForm = ({ products, onOrderChange }) => {
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Update order when product or quantity changes
  useEffect(() => {
    const currentProduct = products[selectedProductIndex];
    onOrderChange(currentProduct, quantity);
  }, [selectedProductIndex, quantity, onOrderChange]); // Dependencies for the effect

  const handleProductChange = (e) => {
    setSelectedProductIndex(parseInt(e.target.value, 10));
  };

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => Math.max(prevQuantity + change, 1)); // Prevent quantity below 1
  };

  const currentProduct = products[selectedProductIndex];

  return (
    <div className="product-form">
      <h2>Select product</h2>
      <label>
        Product:
        <select value={selectedProductIndex} onChange={handleProductChange}>
          {products.map((product, index) => (
            <option key={index} value={index}>
              {product.name} ({product.price}€)
            </option>
          ))}
        </select>
      </label>

      <label>
        Quantity:
        <button type="button" onClick={() => handleQuantityChange(-1)}>-</button>
        {quantity}
        <button type="button" onClick={() => handleQuantityChange(1)}>+</button>
      </label>
    </div>
  );
};

export default ProductForm;
