import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import '../App.css'; // Ensure the path is correct
import heroImage from '../images/hero-bg.jpg'; // Update path accordingly

const categories = ['all', 'electronics', 'jewelery', "men's clothing", "women's clothing"];

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const filterProducts = (category) => {
    setActiveCategory(category);
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.category === category));
    }
  };

  return (
    <div>
      <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <h1>Mock Up Standard Gallery for a store by Ali Khaled</h1>
        <p>Created with React, Javascript, CSS</p>
      </div>

      {/* ... rest of your code remains unchanged ... */}

      <div className="filters">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => filterProducts(category)}
            className={activeCategory === category ? 'active' : ''}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* ... footer ... */}
    </div>
  );
};

export default Home;
