import React, { Component } from 'react';

import Header from './components/Header';
import Tablero from './components/Tablero';
import Carta from './components/Carta';
import baraja from './utils/baraja';

class App extends Component {
  render() {
    console.log("Mi Baraja");
    console.log(baraja());
    return (
      <div className='container'>
        <Header/>
        <Tablero/>
      </div>
    );
  }
}

export default App;