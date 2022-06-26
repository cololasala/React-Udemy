import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';

// const saludo = <h1>Hola mundo</h1>;

const divRoot = document.querySelector('#root'); // esta es la referencia al div del index.html dentro de la carpeta public

// ReactDOM.render(<PrimeraApp saludo="Hola desde property"/>, divRoot); // renderizamos el div saludo en el div root, enviamos saludo

ReactDOM.render(<CounterApp value={100} />, divRoot);
