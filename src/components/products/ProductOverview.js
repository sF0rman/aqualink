import React, { useContext } from 'react';
import languageContext from '../../context/language/languageContext';
import productsContext from '../../context/products/productsContext';
import ProductCard from './ProductCard';



const ProductOverview = () => {
  const products = useContext(productsContext);
  const lang = useContext(languageContext)

  return (
    <div>
      <div className="container grid p">
        {products && products.products.map(prod => (
          <div key={prod.url}>
            <ProductCard prod={prod} lang={lang.language} />
          </div>
        ))}
      </div>
    </div >
  )
}

export default ProductOverview;