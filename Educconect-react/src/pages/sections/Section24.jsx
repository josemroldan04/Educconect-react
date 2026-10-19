import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sections/seccion_24.css';

export default function Section24() {
  return (
    <div className="seccion-scope seccion-24">
      <div className="telefono">

    
    <header className="header">

        
        <Link  className="boton" to="/21_seccion.html">
            <i className="fa-solid fa-arrow-left"></i>
        </Link>

        <h1>Tareas</h1>

        
        <Link  className="boton" to="/5_seccion.html">
            <i className="fa-solid fa-house"></i>
        </Link>

    </header>


    
    <main className="contenido">

        <h2>Caída libre</h2>

        <p className="fecha">
            Fecha límite: 30/03/2026
        </p>

        
        <div className="imagen">
            <i className="fa-solid fa-atom"></i>
        </div>

        
        <div className="descripcion">

            Realiza los ejercicios sobre caída libre aplicando las fórmulas
            estudiadas en clase. Debes mostrar todo el procedimiento y
            entregar la actividad antes de la fecha límite.

        </div>


        
        <div className="botones">

            
            <Link  className="aceptar" to="/25_seccion.html"
               >
                <i className="fa-solid fa-check"></i>
            </Link>

            
            <Link  className="cancelar" to="/26_seccion.html"
               >
                <i className="fa-solid fa-xmark"></i>
            </Link>

        </div>

    </main>

</div>
    </div>
  );
}
