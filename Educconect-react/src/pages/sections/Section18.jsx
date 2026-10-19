import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sections/seccion_18.css';

export default function Section18() {
  return (
    <div className="seccion-scope seccion-18">
      <div className="telefono">

    

    <header className="header">

        <Link  className="boton" to="/5_seccion.html">
            <i className="fa-solid fa-house"></i>
        </Link>

        <div className="buscador">
            <input 
                type="text"
                id="buscar"
                placeholder="Física"
             />

            <button >
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>

    </header>


    

    <main className="contenido">

        <img 
            src="https://cdn-icons-png.flaticon.com/512/2784/2784445.png"
            className="imagen"
            alt="Física"
         />

        <h1>Física</h1>

        <input 
            type="text"
            value="Profesor: Juan Pérez"
            readOnly
         />

        <input 
            type="text"
            value="Código: FIS-101"
            readOnly
         />

        <Link  className="entrar" to="/19_seccion.html">
            Entrar a la materia
        </Link>

    </main>

</div>
    </div>
  );
}
