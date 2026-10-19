import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sections/seccion_36.css';

export default function Section36() {
  return (
    <div className="seccion-scope seccion-36">
      <div className="telefono">

    
    <header className="header">

        <Link  className="boton" to="/5_seccion.html">
            <i className="fa-solid fa-house"></i>
        </Link>

        <div className="buscador">
            <input  type="text" id="buscar" placeholder="Matemáticas" />

            <button >
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>

    </header>


    
    <main className="contenido">

        <div className="imagen">
            <i className="fa-solid fa-square-root-variable"></i>
        </div>

        <h1>Matemáticas</h1>

        <div className="informacion">
            <p><strong>Profesor:</strong> Juan Pérez</p>
        </div>

        <div className="informacion">
            <p><strong>Código:</strong> MAT-101</p>
        </div>

        <Link  className="entrar" to="/37_seccion.html">
            Entrar a la materia
        </Link>

    </main>

</div>
    </div>
  );
}
