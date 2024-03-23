import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import '../App.css'; // Assuming your CSS file is named App.css and is located in the src directory

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      {/* Hero section */}
      <div className="hero">
        <h1>Welcome to Our Store</h1>
      </div>

      {/* Navigation - you would replace this with your actual navigation component */}
      <nav className="navigation">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>

      {/* Filters - you would replace this with your actual filter component */}
      <div className="filters">
        <button>Filter 1</button>
        <button>Filter 2</button>
        <button>Filter 3</button>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Footer - you would replace this with your actual footer component */}
      <footer className="footer">
        <div>Footer Content Here</div>
      </footer>
    </div>
  );
};

export default Home;
