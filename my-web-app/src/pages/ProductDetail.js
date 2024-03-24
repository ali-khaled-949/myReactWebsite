import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import '../App.css'; // Ensure this points to your stylesheet

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    // Fetch product details
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        // Additionally, you can fetch related products here
        // For now, let's just reuse the full product list as a placeholder
        fetch(`https://fakestoreapi.com/products`)
          .then((response) => response.json())
          .then((allProducts) => {
            const related = allProducts.filter((item) => item.category === data.category && item.id !== data.id);
            setRelatedProducts(related);
          });
      })
      .catch((error) => console.error('Error fetching product:', error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail-page"> (This is just a sample, without Responsive, without frames, just standard only for show)
      <div className="product-detail">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-info">
          <h1>{product.title}</h1>
          <p className="product-price">{`$${product.price}`}</p>
          <div className="quantity-selector">
            {/* Implement quantity selector */}
          </div>
          <button className="add-to-cart-btn">Add to Cart</button>
          <div className="product-meta">
            <span className="sku">SKU: {product.id}</span>
            <span className="availability">Availability: In Stock</span>
          </div>
          <div className="product-description">
            <h2>Description</h2>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
      <div className="related-products-section">
        <h2>Related Products</h2>
        <div className="related-products-grid">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard key={relatedProduct.id} product={relatedProduct} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
