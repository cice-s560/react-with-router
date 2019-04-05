import React, { Component } from 'react';

import './App.css';
import Menu from './components/Menu';
import {Switch, Route} from "react-router-dom"
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        {/* Compara la ruta del navegador y devuelve la primera ruta que coincide */}
        <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
          <Route path="/page3" component={Page3} />

        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
