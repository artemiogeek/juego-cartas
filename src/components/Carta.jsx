import React from 'react';
import { estilos } from '../Estilos/index.js';

const Carta = () => {
    return (
        <div className='card my-2' 
        style={{width: "125px", height: "125px", background: "none"}}
        >

            <div 
            className='card-body p-0'
             style={estilos.backCarta}
            >
                <p className='card-text'>
                    <small>React</small>
                </p>
            </div>
{/** 
            <div 
            className='card-body p-0'
             style={estilos.frontCarta}
            >
                <p className='card-text'>
                    <small>F</small>
                </p>
            </div>
        */}
        </div>
    );
};

export default Carta;