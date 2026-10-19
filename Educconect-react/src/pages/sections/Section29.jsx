import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sections/seccion_29.css';

export default function Section29() {
  return (
    <div className="seccion-scope seccion-29">
      <div className="telefono">

    
    <header className="header">

        <Link  className="boton" to="/28_seccion.html">
            <i className="fa-solid fa-arrow-left"></i>
        </Link>

        <h1>Tareas de Química</h1>

        <Link  className="boton" to="/5_seccion.html">
            <i className="fa-solid fa-house"></i>
        </Link>

    </header>


    
    <main className="contenido">

        <h2>Tus tareas</h2>

        <div className="lista">

            <div className="tarea">
                <span>Tabla periódica</span>

                <div className="estado completada">
                    <i className="fa-solid fa-check"></i>
                </div>
            </div>


            <div className="tarea">
                <span>Enlaces químicos</span>

                <div className="estado completada">
                    <i className="fa-solid fa-check"></i>
                </div>
            </div>


            <div className="tarea">
                <span>Balanceo de ecuaciones</span>

                <div className="estado cancelada">
                    <i className="fa-solid fa-xmark"></i>
                </div>
            </div>


            
            <div className="tarea">
                <span>Reacciones químicas</span>

                <Link  className="estado pendiente" to="/31_seccion.html">
                    <i className="fa-regular fa-square"></i>
                </Link>
            </div>


            <div className="tarea">
                <span>Estados de la materia</span>

                <div className="estado completada">
                    <i className="fa-solid fa-check"></i>
                </div>
            </div>

        </div>


        
        <Link  className="agregar" to="/32_seccion.html">
            <i className="fa-solid fa-circle-plus"></i>
        </Link>

    </main>

</div>
    </div>
  );
}
