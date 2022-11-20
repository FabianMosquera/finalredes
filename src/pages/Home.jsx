import React from 'react';
import { Link } from 'react-router-dom';

export function Home() {

  return (
    <>
      <div className="textBox">
        <h2>
          Basura Inteligente<span>.</span>
        </h2>
        <h5></h5>
        <h3>Dispositivos:</h3>
        <Link to='/device1'>
          <div className="contenedorD1">
            <h4>Objeto IoT - ESP32</h4>
          </div>
        </Link>
        <Link to='/device3'>
          <div className="contenedorD1">
            <h4>Objeto IoT - REST</h4>
          </div>
        </Link>

      </div>
    </>
  );
}
