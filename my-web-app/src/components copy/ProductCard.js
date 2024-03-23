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
  &:hover {
    box-shadow: 0 0 11px rgba(33,33,33,.2);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  &:hover {
    transform: scale(1.1);
    transition: transform .5s;
  }
`;

const ProductName = styled.h3`
  margin: 0.5em 0;
`;

const ProductCard = ({ product }) => {
  return (
    <Card>
      <Link to={`/product/${product.id}`}>
        <ProductImage src={product.imageUrl} alt={product.name} />
      </Link>
      <ProductName>{product.name}</ProductName>
      {/* Add more product details here */}
    </Card>
  );
};

export default ProductCard;
