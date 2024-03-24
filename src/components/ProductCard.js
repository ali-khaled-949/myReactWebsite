// src/components/ProductCard.js

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  width: 300px;
  text-align: center;
  background: #fff;
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const ProductName = styled.h3`
  margin: 0.5em 0;
  color: #333;
  font-size: 1em;
  font-weight: bold;
`;

const ProductPrice = styled.div`
  color: #888;
  margin-bottom: 15px;
`;

const ProductCard = ({ product }) => {
  return (
    <Card>
      <Link to={`/product/${product.id}`}>
        <ProductImage src={product.image} alt={product.title} />
      </Link>
      <ProductName>{product.title}</ProductName>
      <ProductPrice>${product.price}</ProductPrice>
      <p>{product.description.substring(0, 100)}...</p>
      {/* You could add more details here */}
    </Card>
  );
};

// Choose either default or named export depending on how you want to import it elsewhere
export default ProductCard;
// export { ProductCard }; // Named export, remove or comment out if using default export
