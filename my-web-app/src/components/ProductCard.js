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
  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
  &:hover {
    transform: scale(1.05);
    transition: transform 0.5s;
  }
`;

const ProductName = styled.h3`
  margin: 0.5em 0;
  color: #333;
  font-size: 1em;
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

//export default ProductCard;
export { ProductCard };
