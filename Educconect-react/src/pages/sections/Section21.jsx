import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sections/seccion_21.css';

export default function Section21() {
  return (
    <div className="seccion-scope seccion-21">
      <div className="telefono">

    
    <header className="header">

        
        <Link  className="boton" to="/19_seccion.html">
            <i className="fa-solid fa-arrow-left"></i>
        </Link>

        <h1>Tareas de Física</h1>

        
        <Link  className="boton" to="/5_seccion.html">
            <i className="fa-solid fa-house"></i>
        </Link>

    </header>


    
    <main className="contenido">

        <h2>Tus tareas</h2>

        <div className="lista">

            <div className="tarea">
                <span>Leyes de Newton</span>

                <button className="estado verde">
                    <i className="fa-solid fa-check"></i>
                </button>
            </div>


            <div className="tarea">
                <span>Movimiento rectilíneo</span>

                <button className="estado verde">
                    <i className="fa-solid fa-check"></i>
                </button>
            </div>


            <div className="tarea">
                <span>Fuerza y aceleración</span>

                <button className="estado rojo">
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>


            <div className="tarea">
                <span>Caída libre</span>

                <Link  className="estado gris" to="/24_seccion.html">
                    <i className="fa-regular fa-square"></i>
                </Link>
            </div>


            <div className="tarea">
                <span>Energía cinética</span>

                <button className="estado verde">
                    <i className="fa-solid fa-check"></i>
                </button>
            </div>

        </div>


        
        <Link  className="agregar" to="/23_seccion.html">
            <i className="fa-solid fa-circle-plus"></i>
        </Link>

    </main>

</div>
    </div>
  );
}
