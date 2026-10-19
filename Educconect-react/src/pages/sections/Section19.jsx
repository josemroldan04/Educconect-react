import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sections/seccion_19.css';

export default function Section19() {
  return (
    <div className="seccion-scope seccion-19">
      <div className="telefono">

    
    <header className="header">

        
        <Link  className="boton" to="/18_seccion.html">
            <i className="fa-solid fa-arrow-left"></i>
        </Link>

        <h1>Opciones</h1>

        
        <Link  className="boton" to="/5_seccion.html">
            <i className="fa-solid fa-house"></i>
        </Link>

    </header>


    
    <main className="menu">

        
        <Link  className="opcion" to="/20_seccion.html">

            <div className="icono-opcion">
                <i className="fa-solid fa-clipboard-check"></i>
            </div>

            <div className="texto-opcion">
                <h2>Revisa tus calificaciones</h2>
            </div>

        </Link>


        
        <Link  className="opcion" to="/21_seccion.html">

            <div className="icono-opcion">
                <i className="fa-solid fa-calendar-days"></i>
            </div>

            <div className="texto-opcion">
                <h2>Lista de tareas pendientes</h2>
            </div>

        </Link>


        
        <Link  className="opcion" to="/22_seccion.html">

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
