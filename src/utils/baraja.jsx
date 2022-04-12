import FontAwesomeClases from './fontAwasomeClases'

const NUMERO_CARTAS = 20;

export default () => {
    const fontAwasomeClases = FontAwesomeClases();
    let cartas = [];

    while(cartas.length < NUMERO_CARTAS) {
        const index = Math.floor(Math.randon()* FontAwesomeClases.length);
        const carta = {
            icono: fontAwasomeClases.splice(index, 1)[0],
            fueAdivinada: false
        }
        cartas.push(carta);
        cartas.push({...carta});
    }
    return cartas;
}