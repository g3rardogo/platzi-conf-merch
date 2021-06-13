import React from 'react';
import Product from './Product';
import '../styles/components/Products.scss';

const Products = ({ products }) => (
  <div className="Products">
    <div className="Products-items">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default Products;
