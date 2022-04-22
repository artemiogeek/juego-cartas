import React from 'react';

const Header = ({intentos, reiniciar}) => {

    const handleClick = (e) => {
        e.preventDefault();
        reiniciar();
    }
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <p className="navbar-brand">
            Juego de Cartas
        </p>

        <div className="navbar-collapse">
            <h3 className='m-auto text-white'>Intentos: {intentos}</h3>
            <form className="form-inline my-2 my-lg-0">
                <button className="btn btn-light" onClick={handleClick}>
                    Reiniciar
                </button>
            </form>
        </div>
    </nav>
    );
};

export default Header;