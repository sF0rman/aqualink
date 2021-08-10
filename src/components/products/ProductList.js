import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import languageContext from '../../context/language/languageContext';
import productsContext from '../../context/products/productsContext';

// import useMobileLayout from '../../hooks/useMobileLayout';


const ProductList = ({ selectedProduct }) => {
  const products = useContext(productsContext);
  const lang = useContext(languageContext)
  const { t } = useTranslation();
  // const isMobile = useMobileLayout();

  const getProducts = () => {
    return (
      <>
        {
          products && products.products.map(prod => (
            prod && (
              <div
                key={prod.url}
                className={selectedProduct?.url === prod.url ? "active" : "bg-transparent"}
                href={`/products/${prod.url}`}
                action
              >
                {lang.language ? prod.no_title : prod.en_title}
              </div>
            )
          ))
        }
      </>
    )
  }

  return (
    <></>
  )
}

export default ProductList;