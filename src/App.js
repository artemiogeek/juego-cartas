import React, { Component } from 'react';

import Header from './components/Header';
import Tablero from './components/Tablero';
import Carta from './components/Carta';
import baraja from './utils/baraja';

const estadoInicial = {
  baraja: baraja(),
  parejaSeleccionada: [],
  estamosComparando: false,
  numeroDeIntentos: 0
};

class App extends Component {
  state = {
    ...estadoInicial,
  };

  reiniciar = () => {
    this.setState({...estadoInicial});
  }

  seleccionarCarta = () => (carta) => {
    console.log("mira la carta seleccionada");
    console.log(carta);
    /**
     * Si estamos comparando no volteamos la carta o
     * Si la carta fue adivinada, no volteamos la carta O
     * Si la carta seleccionada, esta en el arreglo de comparacion tampoco volteamos la carta
     */
    if (
      this.state.estamosComparando || 
      carta.fueAdivinada || 
      this.state.parejaSeleccionada.indexOf(carta)> -1 
      ) {
        return;
      }
    const parejaSeleccionada = [...this.state.parejaSeleccionada, carta];
    this.setState({parejaSeleccionada});

    if (parejaSeleccionada.length === 2){
      this.compararPareja(parejaSeleccionada);
    }
  };

  compararPareja = (arregloComparador) => {
   // this.setState({ estamosComparando: true});
    this.setState((prevState)=> ({...prevState, estamosComparando: true}));

    setTimeout(()=> {
      const [primeraCarta, segundaCarte] = arregloComparador;
      let baraja = this.state.baraja;

      if (primeraCarta.icono === segundaCarte.icono) {
        baraja = baraja.map(carta => {
          if(carta.icono !== primeraCarta.icono){
            return carta;
          }
          return {...carta, fueAdivinada: true}
        })
      }
      this.verificamosSiHayGanador(baraja);
      this.setState({
        baraja: baraja,
        parejaSeleccionada: [],
        estamosComparando: false,
        numeroDeIntentos: this.state.numeroDeIntentos + 1,
      })
    }, 1000);
  };

  verificamosSiHayGanador =(barajaActualizada)=>{
    if(barajaActualizada.filter((carta) => !carta.fueAdivinada).length === 0) {
      alert("ganaste");
    }
  }

  render() {
    console.log("Mi Baraja");
    console.log(baraja());
    return (
      <div className='container'>
        <Header intentos={this.state.numeroDeIntentos} reiniciar={this.reiniciar}/>
        <Tablero 
        baraja={this.state.baraja}
        parejaSeleccionada= {this.state.parejaSeleccionada}
        seleccionarCarta = {this.seleccionarCarta()}
        />
      </div>
    );
  }
}

export default App;