import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sections/seccion_1.css';

export default function Section1() {
  return (
    <div className="seccion-scope seccion-1">
      <div className="app">
        <h1>Bienvenido a EduConnect</h1>
        <div className="logo">
          <div className="logo-lines">
            <span className="line blue"></span>
            <span className="line pink"></span>
            <span className="line yellow"></span>
          </div>
          <div className="logo-c"></div>
        </div>
        <div className="buttons">
          <Link className="btn" to="/2_seccion.html">Iniciar sesión</Link>
          <Link className="btn" to="/4_seccion.html">Registrarse</Link>
        </div>
      </div>
    </div>
  );
}
