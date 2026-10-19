import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sections/seccion_40.css';

export default function Section40() {
  return (
    <div className="seccion-scope seccion-40">
      <div className="telefono">

    
    <header className="header">

        <Link  className="boton" to="/38_seccion.html">
            <i className="fa-solid fa-arrow-left"></i>
        </Link>

        <h1>Tarea</h1>

        <Link  className="boton" to="/5_seccion.html">
            <i className="fa-solid fa-house"></i>
        </Link>

    </header>


    
    <main className="contenido">

        <h2>Resolver problemas</h2>

        <div className="imagen">
            <i className="fa-solid fa-calculator"></i>
        </div>

        <div className="informacion">
            <p><strong>Fecha límite:</strong> 30/03/2026</p>
        </div>

        <div className="descripcion">
            <h3>Descripción</h3>

            <p>
                Resuelve los problemas matemáticos propuestos por el profesor,
                mostrando el procedimiento completo y justificando cada respuesta.
            </p>
        </div>


        
        <div className="botones">

            <Link  to="/42_seccion.html" className="aceptar">
                <i className="fa-solid fa-check"></i>
            </Link>

            <Link  to="/43_seccion.html" className="cancelar">
                <i className="fa-solid fa-xmark"></i>
            </Link>

        </div>

    </main>

</div>
    </div>
  );
}
