import React, { useReducer, useEffect } from 'react';
import { get } from '../../utils/api';

import ProductContext from './productsContext';
import productsReducer from './productsReducer';

const ProductState = ({ children }) => {
  const initialState = {
    loading: false,
    products: []
  };

  useEffect(() => {
    const setProducts = async () => {
      setLoading();
      const products = await get('/products');
      dispatch({ type: 'SET_PRODUCTS', payload: products.data.data });
    }
    setProducts();
  }, [])

  const [state, dispatch] = useReducer(productsReducer, initialState);

  const setLoading = () => {
    dispatch({ type: 'SET_LOADING' });
  }

  return (<ProductContext.Provider value={{
    loading: state.loading,
    products: state.products
  }}>{children}</ProductContext.Provider>)
}

export default ProductState;