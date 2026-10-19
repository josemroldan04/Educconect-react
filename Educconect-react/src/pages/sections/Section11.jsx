import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sections/seccion_11.css';

export default function Section11() {
  return (
    <div className="seccion-scope seccion-11">
      <main className="telefono">


        

        <header className="header">


            

            <Link 
                className="btn-header"
                to="/9_seccion.html"
                title="Volver a Artística">

                <i className="fa-solid fa-arrow-left"></i>

            </Link>


            

            <h1>
                Opciones
            </h1>


            

            <Link 
                className="btn-header"
                to="/5_seccion.html"
                title="Volver al menú">

                <i className="fa-solid fa-house"></i>

            </Link>

        </header>



        

        <main className="menu">


            

            <Link 
                className="opcion"
                to="/13_seccion.html">

                <div className="icono-opcion">

                    <i className="fa-solid fa-clipboard-check"></i>

                </div>

                <div className="texto-opcion">

                    <h2>
                        Revisa tus calificaciones
                    </h2>

                </div>

            </Link>



            

            <Link 
                className="opcion"
                to="/12_seccion.html">

                <div className="icono-opcion">

                    <i className="fa-solid fa-calendar-days"></i>

                </div>

                <div className="texto-opcion">

                    <h2>
                        Lista de tareas pendientes
                    </h2>

                </div>

            </Link>



            

            <Link 
                className="opcion"
                to="/10_seccion.html">

                <div className="icono-opcion">

                    <i className="fa-solid fa-comments"></i>

                </div>

                <div className="texto-opcion">

                    <h2>
                        Chat con el profesor
                    </h2>

                </div>

            </Link>


        </main>

    </main>
    </div>
  );
}
