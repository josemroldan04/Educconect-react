import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sections/seccion_37.css';

export default function Section37() {
  return (
    <div className="seccion-scope seccion-37">
      <div className="telefono">

    
    <header className="header">

        <Link  className="boton" to="/36_seccion.html">
            <i className="fa-solid fa-arrow-left"></i>
        </Link>

        <h1>Opciones</h1>

        <Link  className="boton" to="/5_seccion.html">
            <i className="fa-solid fa-house"></i>
        </Link>

    </header>


    
    <main className="menu">

        
        <Link  to="/44_seccion.html" className="opcion">

            <div className="icono-opcion">
                <i className="fa-solid fa-clipboard-check"></i>
            </div>

            <div className="texto-opcion">
                <h2>Revisa tus calificaciones</h2>
            </div>

        </Link>


        
        <Link  to="/38_seccion.html" className="opcion">

            <div className="icono-opcion">
                <i className="fa-solid fa-calendar-days"></i>
            </div>

            <div className="texto-opcion">
                <h2>Lista de tareas pendientes</h2>
            </div>

        </Link>


        
        <Link  to="/39_seccion.html" className="opcion">

            <div className="icono-opcion">
                <i className="fa-solid fa-comments"></i>
            </div>

            <div className="texto-opcion">
                <h2>Chat con el profesor</h2>
            </div>

        </Link>

    </main>

</div>
    </div>
  );
}
