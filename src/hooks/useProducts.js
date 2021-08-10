import { useState, useEffect } from "react";
import { get } from '../utils/api';

const useProducts = () => {

  const [products, setProducts] = useState(null);

  useEffect(() => {
    const getProds = async () => {
      const products = await get('/product');
      console.log('gotProducts', products.data.data);
      if (products && products.length) {
        setProducts(products.data.data);
      }
    }

    getProds();
  }, [products]);

  return products;
}

export default useProducts;