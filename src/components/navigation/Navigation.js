import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import languageContext from '../../context/language/languageContext';
import productsContext from '../../context/products/productsContext';
import useMobileLayout from '../../hooks/useMobileLayout';
import NavDrawer from './NavDrawer';

import logo from '../../resources/logo.png';

const Navigation = () => {
  const lang = useContext(languageContext);
  const products = useContext(productsContext);
  const location = useLocation().pathname;

  const mobile = useMobileLayout();
  const { t } = useTranslation();

  const [show, setShow] = useState(false);

  useEffect(() => {
    closeNav();
  }, [mobile, location]);

  const changeLanguage = (l) => {
    lang.setLanguage(l);
  }

  const openNav = () => {
    setShow(true);
  }

  const closeNav = () => {
    setShow(false);
  }

  const getProducts = () => {
    return (
      <>
        {products.products.map((prod) => (
          <Link
            key={prod.url}
            to={`/products/${prod.url}`}
          >
            {lang.language ? prod.no_title : prod.en_title}
          </Link>))}
      </>
    )
  }


  return (
    <nav>
      <div className="container flex flex-space-between center">
        <Link to="/"><img src={logo} className="logo" alt="logo" /></Link>
        <div className="navigation flex center">
          <div>
            <Link to="/" className="glow">{t('nav.home')}</Link>
            {(products.products.length > 0) && (<span className="dropdown">
              <Link className="dropdown-button glow" to="/products">{t('nav.products')} <i className="fa fa-caret-down" /></Link>
              <span className="dropdown-content">
                {products && getProducts()}
              </span>
            </span>)}
            <Link to="/about" className="glow" >{t('nav.about')} AQUALINK</Link>
            <Link to="/contact" className="glow" >{t('nav.contact')}</Link>
          </div>
          <div className="end">
            <i className="flag-icon flag-icon-no pointer" onClick={() => changeLanguage('no')} /> | <i className="flag-icon flag-icon-en pointer" onClick={() => changeLanguage('en')} />
          </div>
        </div>
        <button className="mobile openDrawer" onClick={openNav}><i className="fa fa-bars" /></button>

        <NavDrawer products={getProducts()} visible={show} close={closeNav} setLang={changeLanguage} />
      </div>
    </nav>
  )
}

export default Navigation;