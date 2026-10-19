import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sections/seccion_27.css';

export default function Section27() {
  return (
    <div className="seccion-scope seccion-27">
      <div className="telefono">

    
    <header className="header">

        <Link  className="boton" to="/5_seccion.html">
            <i className="fa-solid fa-house"></i>
        </Link>

        <div className="buscador">
            <input  type="text" id="buscar" placeholder="Química" />

            <button >
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>

    </header>


    
    <main className="contenido">

        
        <div className="imagen">
            <i className="fa-solid fa-flask"></i>
        </div>

        <h1>Química</h1>

        <div className="informacion">
            <p>Profesor: Carlos Ramírez</p>
        </div>

        <div className="informacion">
            <p>Código: QUI-101</p>
        </div>

        <Link  className="entrar-materia" to="/28_seccion.html">
            Entrar a la materia
        </Link>

    </main>

</div>
    </div>
  );
}
