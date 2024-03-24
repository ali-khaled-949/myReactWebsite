// src/pages/AdminPanel.js

import React, { useState } from 'react';

const AdminPanel = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construct the product object
    const newProduct = {
      name: productName,
      price: productPrice,
      // Add additional fields as necessary
    };

    // Post the new product to the backend
    try {
      const response = await fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include other necessary headers, such as authentication tokens
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        const addedProduct = await response.json();
        console.log('Product added successfully:', addedProduct);
        // Reset the form or give some feedback to the user
        setProductName('');
        setProductPrice('');
        // Optionally, refresh the list of products or navigate the admin to the product list
      } else {
        console.error('Failed to add the product.');
        // Provide error feedback to the user
      }
    } catch (error) {
      console.error('Error adding the product:', error);
      // Handle errors, possibly show a user-friendly message
    }
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <h2>Add a New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="productPrice">Product Price:</label>
          <input
            type="number"
            id="productPrice"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AdminPanel;
