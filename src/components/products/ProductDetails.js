import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import languageContext from '../../context/language/languageContext';
import { get } from '../../utils/api';
import Table from '../Table';
import ProductMedia from './ProductMedia';
import Video from '../media/Video';

const ProductDetails = () => {

  const location = useLocation();
  const lang = useContext(languageContext).language;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async (path) => {
      const res = await get(path);
      if (res) {
        setProduct(res.data.data);
      }
    }

    const path = location.pathname;
    if (path) {
      getProduct(path);
    }
  }, [location])

  const getProductTable = () => {
    const table = product.productTables.filter(table => !table.isExample)[0];
    if (table) {
      return (<div className="mt">
        <Table
          images={table.header_img}
          rows={lang ? table.no_headers : table.en_headers}
          data={lang ? table.no_data : table.en_data}
          title={lang ? table.no_title : table.en_title}
        />
      </div>
      )
    }
  }

  const getExamples = () => {
    const examples = product.productTables.filter(table => table.isExample);
    if (examples) {
      return (
        <div className="grid-2">
          {examples.map((ex, i) => (
            <div className="mt">
              <Table
                rows={lang ? ex.no_headers : ex.en_headers}
                data={lang ? ex.no_data : ex.en_data}
                title={lang ? ex.no_title : ex.en_title} />
            </div>
          ))}
        </div>
      )
    }
  }

  // <a href="http://sertifisering.carlstahl.no/LoggInn.aspx" target="_blank" rel="noreferrer"><button>{t('products.certificates')}</button></a>

  const populateProductData = () => {
    return (
      <>
        <div className="flex flex-space-between">
          <h2>{lang ? product.no_title : product.en_title}</h2>
          <span></span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: (lang ? product.no_description : product.en_description) }} />
        {getProductTable}
      </>
    )
  }

  const getVideo = () => {
    if (lang && product.no_video) {
      console.log('video', product.no_video);
      return (
        <div className="ribbon ribbon-dark">
          <div className="container">
            <Video url={product.no_video} />
          </div>
        </div>
      )
    } else if (product.en_video) {
      console.log('video', product.en_video);
      return (
        <div className="ribbon ribbon-dark">
          <div className="container">
            <Video url={product.en_video} />
          </div>
        </div>
      )
    } else {
      return (<></>);
    }
  }

  return (
    <div className="product-details p">
      <div className="container">
        {product && populateProductData()}
      </div>

      {product && getVideo()}

      {(product && product.productImages && product.productImages.length) && (
        <div className="ribbon ribbon-dark mt">
          <div className="container">
            <ProductMedia images={product.productImages} />
          </div>
        </div>
      )}
      <div className="container">
        {product && getProductTable()}
        {product && getExamples()}
      </div>

    </div>
  )
}

export default ProductDetails;