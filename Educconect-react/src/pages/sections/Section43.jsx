import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sections/seccion_43.css';

export default function Section43() {
  return (
    <div className="seccion-scope seccion-43">
      <div className="telefono">

    
    <header className="header">

        <Link  className="boton" to="/40_seccion.html">
            <i className="fa-solid fa-arrow-left"></i>
        </Link>

        <h1>Tareas Matemáticas</h1>

        <Link  className="boton" to="/5_seccion.html">
            <i className="fa-solid fa-house"></i>
        </Link>

    </header>

    
    <main className="contenido">

        <h2>Tus tareas</h2>

        <div className="lista">

            <div className="tarea">
                <span>Operaciones con fracciones</span>

                <button className="estado completada">
                    <i className="fa-solid fa-check"></i>
                </button>
            </div>

            <div className="tarea">
                <span>Ecuaciones lineales</span>

                <button className="estado completada">
                    <i className="fa-solid fa-check"></i>
                </button>
            </div>

            <div className="tarea">
                <span>Funciones matemáticas</span>

                <button className="estado cancelada">
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>

            
            <div className="tarea">
                <span>Resolver problemas</span>

                <button className="estado cancelada">
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>

            <div className="tarea">
                <span>Geometría</span>

                <button className="estado completada">
                    <i className="fa-solid fa-check"></i>
                </button>
            </div>

        </div>

    </main>

</div>
    </div>
  );
}
