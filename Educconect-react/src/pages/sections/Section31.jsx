import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sections/seccion_31.css';

export default function Section31() {
  return (
    <div className="seccion-scope seccion-31">
      <div className="telefono">

    
    <header className="header">

        <Link  className="boton" to="/29_seccion.html">
            <i className="fa-solid fa-arrow-left"></i>
        </Link>

        <h1>Tarea</h1>

        <Link  className="boton" to="/5_seccion.html">
            <i className="fa-solid fa-house"></i>
        </Link>

    </header>


    
    <main className="contenido">

        <h2>Reacciones químicas</h2>

        <div className="imagen">
            <i className="fa-solid fa-flask"></i>
        </div>

        <div className="descripcion">

            <h3>Fecha límite: 30/03/2026</h3>

            <p>
                Realiza la actividad sobre los diferentes tipos de
                reacciones químicas y escribe un ejemplo de cada una.
            </p>

        </div>


        
        <div className="botones">

            <Link  className="aceptar" to="/33_seccion.html">
                <i className="fa-solid fa-check"></i>
            </Link>

            <Link  className="cancelar" to="/34_seccion.html">
                <i className="fa-solid fa-xmark"></i>
            </Link>

        </div>

    </main>

</div>
    </div>
  );
}
