import React from 'react';
import Carta from './Carta';

const Tablero = (props) => {
    return (
        <div 
        className='d-flex justify-content-between flex-wrap' 
        style={{padding: "0 12em", background: "#4b4b4b"}}
        >
            {props.baraja.map((carta, index) => {
                const estaSiendoComparada = 
                    props.parejaSeleccionada.indexOf(carta) > -1;
                return (
                    <Carta 
                    key={index} 
                    info={carta}
                    estaSiendoComparada={estaSiendoComparada}
                    seleccionarCarta = {()=> props.seleccionarCarta(carta)}
                
                    />
                )
            }
            
            )}
            
   
            
        </div>
    );
};

export default Tablero;