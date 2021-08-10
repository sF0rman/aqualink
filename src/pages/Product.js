import React from 'react';
import { useLocation } from 'react-router';
import ProductDetails from '../components/products/ProductDetails';
import ProductOverview from '../components/products/ProductOverview';
import banner from '../resources/banner.png';



const Product = () => {

  const location = useLocation();

  return (
    <div className="bg">
      <img className="banner" alt="banner" src={banner} />
      {location.pathname.endsWith('products') ? <ProductOverview /> : <ProductDetails />}
    </div>
  )
}

export default Product;