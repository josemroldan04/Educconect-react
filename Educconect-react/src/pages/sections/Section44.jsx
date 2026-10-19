import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sections/seccion_44.css';

export default function Section44() {
  return (
    <div className="seccion-scope seccion-44">
      <div className="telefono">

    
    <header className="header">

        <Link  className="boton" to="/37_seccion.html">
            <i className="fa-solid fa-arrow-left"></i>
        </Link>

        <h1>Calificaciones</h1>

        <Link  className="boton" to="/5_seccion.html">
            <i className="fa-solid fa-house"></i>
        </Link>

    </header>


    
    <main className="contenido">

        <h2>Matemáticas</h2>

        <div className="calificaciones">

            <div className="calificacion">
                <span>Operaciones con fracciones</span>
                <strong>4.5</strong>
            </div>

            <div className="calificacion">
                <span>Ecuaciones lineales</span>
                <strong>4.8</strong>
            </div>

            <div className="calificacion">
                <span>Funciones matemáticas</span>
                <strong>3.5</strong>
            </div>

            <div className="calificacion">
                <span>Resolver problemas</span>
                <strong>4.2</strong>
            </div>

            <div className="calificacion">
                <span>Geometría</span>
                <strong>4.6</strong>
            </div>

        </div>


        
        <div className="promedio">

            <span>Promedio final</span>

            <strong>4.3</strong>

        </div>

    </main>

</div>
    </div>
  );
}
