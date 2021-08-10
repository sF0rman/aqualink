import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ prod, lang }) => {

  return (
    <Link to={`/products/${prod.url}`} className="product-card-link">
      <div className="product-card">
        <img src={`${process.env.REACT_APP_API_URL}/media/img/${prod.thumbnail}`} alt="product" className="product-card-image" />
        <div className="product-card-content">
          {lang ? prod.no_title : prod.en_title}
        </div>
      </div>
    </Link>
  )
}

export default ProductCard;