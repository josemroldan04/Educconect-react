import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sections/seccion_25.css';

export default function Section25() {
  return (
    <div className="seccion-scope seccion-25">
      <div className="telefono">

    
    <header className="header">

        <Link  className="boton" to="/24_seccion.html">
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

                <div className="estado completada">
                    <i className="fa-solid fa-check"></i>
                </div>
            </div>


            <div className="tarea">
                <span>Movimiento rectilíneo</span>

                <div className="estado completada">
                    <i className="fa-solid fa-check"></i>
                </div>
            </div>


            <div className="tarea">
                <span>Fuerza y aceleración</span>

                <div className="estado cancelada">
                    <i className="fa-solid fa-xmark"></i>
                </div>
            </div>


            
            <div className="tarea">
                <span>Caída libre</span>

                <div className="estado completada">
                    <i className="fa-solid fa-check"></i>
                </div>
            </div>


            <div className="tarea">
                <span>Energía cinética</span>

                <div className="estado completada">
                    <i className="fa-solid fa-check"></i>
                </div>
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
