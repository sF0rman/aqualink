import React from 'react';
import { withRouter } from 'react-router';
import {
  HashRouter, Route, Switch
} from "react-router-dom";
import './App.scss';
import Footer from './components/footer/Footer';
import Navigation from './components/navigation/Navigation';
import LanguageState from './context/language/LanguageState';
import ProductState from './context/products/ProductState';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Media from './pages/Media';
import News from './pages/News';
import Product from './pages/Product';



const NavWithRouter = withRouter(Navigation);

function App() {
  return (
    <div className="App">
      <LanguageState>
        <ProductState>
          <HashRouter basename="/">
            <div className="page">
              <NavWithRouter />
              <Switch>
                <Route path='/products' component={Product} />
                <Route path='/media' component={Media} />
                <Route path='/news' component={News} />
                <Route path='/about' component={Home} />
                <Route path='/contact' component={Contact} />
                <Route exact path='/' component={Home} />
              </Switch>
            </div>
            <Footer />
          </HashRouter>
        </ProductState>
      </LanguageState>
    </div>
  );
}

export default App;
