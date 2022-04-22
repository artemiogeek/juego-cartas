import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import { estilos } from '../Estilos/index.js';

class Carta extends Component {
//    state = {
//        isFlipped: false,
//    };
//    handleClick = (e) => {
//        e.preventDefault();
//        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
//      }

    render() {
    const {info, estaSiendoComparada, seleccionarCarta} = this.props;
    const {fueAdivinada} = info

    const mostrarCarta = estaSiendoComparada || fueAdivinada;

    return (
            <div className='card my-2' 
            style={{width: "125px", height: "125px", background: "none"}}
            >
                <ReactCardFlip isFlipped={mostrarCarta} flipDirection='horizontal'>
                    <div className='card-body p-0' style={estilos.backCarta} onClick={seleccionarCarta}>
                        <p className='card-text'>
                            <small>React</small>
                        </p>
                    </div>
    
                    <div className='card-body p-0' style={estilos.frontCarta}>
                        <p className='card-text'>
                            <i className={`fa ${info.icono}`}></i>
                        </p>
                    </div>
                </ReactCardFlip>

    
            </div>
        );
    }
}

export default Carta;