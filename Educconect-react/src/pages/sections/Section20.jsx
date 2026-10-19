import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sections/seccion_20.css';

export default function Section20() {
  return (
    <div className="seccion-scope seccion-20">
      <div className="telefono">

    
    <header className="header">

        <Link  className="boton" to="/19_seccion.html">
            <i className="fa-solid fa-arrow-left"></i>
        </Link>

        <h1>Calificaciones</h1>

        <Link  className="boton" to="/5_seccion.html">
            <i className="fa-solid fa-house"></i>
        </Link>

    </header>


    
    <main className="contenido">

        <h2>Física</h2>

        <div className="calificacion">

            <div className="nombre">
                Leyes de Newton
            </div>

            <div className="nota">
                4.5
            </div>

        </div>


        <div className="calificacion">

            <div className="nombre">
                Movimiento rectilíneo
            </div>

            <div className="nota">
                4.0
            </div>

        </div>


        <div className="calificacion">

            <div className="nombre">
                Fuerza y aceleración
            </div>

            <div className="nota">
                4.8
            </div>

        </div>


        <div className="calificacion">

            <div className="nombre">
                Evaluación final
            </div>

            <div className="nota">
                4.2
            </div>

        </div>


        <div className="promedio">

            <span>Promedio</span>

            <strong>4.4</strong>

        </div>

    </main>

</div>
    </div>
  );
}
