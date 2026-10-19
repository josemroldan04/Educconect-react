import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sections/seccion_35.css';

export default function Section35() {
  return (
    <div className="seccion-scope seccion-35">
      <div className="telefono">

    
    <header className="header">

        <Link  className="boton" to="/28_seccion.html">
            <i className="fa-solid fa-arrow-left"></i>
        </Link>

        <h1>Calificaciones</h1>

        <Link  className="boton" to="/5_seccion.html">
            <i className="fa-solid fa-house"></i>
        </Link>

    </header>


    
    <main className="contenido">

        <h2>Química</h2>

        <div className="lista">

            <div className="calificacion">
                <span>Tabla periódica</span>
                <strong>4.5</strong>
            </div>

            <div className="calificacion">
                <span>Enlaces químicos</span>
                <strong>4.2</strong>
            </div>

            <div className="calificacion">
                <span>Balanceo de ecuaciones</span>
                <strong>3.8</strong>
            </div>

            <div className="calificacion">
                <span>Reacciones químicas</span>
                <strong>4.7</strong>
            </div>

            <div className="calificacion">
                <span>Estados de la materia</span>
                <strong>4.4</strong>
            </div>

        </div>

        <div className="promedio">
            <span>Promedio</span>
            <strong>4.3</strong>
        </div>

    </main>

</div>
    </div>
  );
}
