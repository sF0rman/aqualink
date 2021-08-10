import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NavDrawer = ({ products, visible, close, setLang }) => {

  const { t } = useTranslation();

  return (
    <div className="mobile-navigation" style={visible ? { right: 0 } : { right: '-100%' }}>
      <button onClick={close}>X</button>
      <div className="start">
        <div className="drawerContainer">
          <Link to="/">{t('nav.home')}</Link>
          <Link to="/products">{t('nav.products')} <i className="fa fa-caret-down" /></Link>
        </div>
        <div className="submenu">
          <div className="drawerContainer">
            {products}
          </div>
        </div>
        <div className="drawerContainer">
          <Link to="/about" >{t('nav.about')} AQUALINK</Link>
          <Link to="/contact" >{t('nav.contact')}</Link>
        </div>
      </div>
      <div className="end">
        <i className="flag-icon flag-icon-no" onClick={() => setLang('no')} /> |<i className="flag-icon flag-icon-en" onClick={() => setLang('en')} />
      </div>
    </div>
  )
}

export default NavDrawer;