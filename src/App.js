import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';

import Navbar_ from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Details from './components/Details';
import Default from './components/Default';

class App extends Component {
  render(){
    return(
      <React.Fragment>
        <Navbar_/>
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route path='/details' component={Details} />
          <Route path='/Cart' component={Cart} />
          <Route  component={Default} />
        </Switch>
      </React.Fragment>

      

    );
  }
}

export default App;
