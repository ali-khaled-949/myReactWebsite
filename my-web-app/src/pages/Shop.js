import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import '../App.css'; // Make sure this points to your main stylesheet
import heroImage from '../images/hero-bg.jpg'; // Update path accordingly

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from an API
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  // You can add filter functionality as in the Home page if needed

  return (
    <div className="shop-container">
        <br></br>
        <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <h1>Mock up Shop</h1>
        <p>Created with React, Javascript, CSS</p>
      </div>
      <div className="products-grid">
        
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
