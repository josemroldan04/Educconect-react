import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sections/seccion_102.css';

export default function Section102() {
  return (
    <div className="seccion-scope seccion-102">
      <main className="telefono">


        

        <header className="encabezado">

            

            <Link 
                to="/100_seccion.html"
                className="inicio"
                title="Volver"
                aria-label="Volver">

                🏠

            </Link>


            

            <h1>Artística</h1>


        </header>


        

        <section className="contenido">


            

            <h2>
                Grado 11°
            </h2>


            

            <div className="lista-grados">


                

                <Link 
                    to="/107_seccion.html"
                    className="grado">

                    <span className="icono">
                        👩‍🎓
                    </span>

                    <span>
                        Valeria Gallego
                    </span>

                    <span className="flecha">
                        ›
                    </span>

                </Link>


                

                <Link 
                    to="/108_seccion.html"
                    className="grado">

                    <span className="icono">
                        👩‍🎓
                    </span>

                    <span>
                        Sara Ramírez
                    </span>

                    <span className="flecha">
                        ›
                    </span>

                </Link>


                

                <Link 
                    to="/109_seccion.html"
                    className="grado">

                    <span className="icono">
                        👩‍🎓
                    </span>

                    <span>
                        María Sánchez
                    </span>

                    <span className="flecha">
                        ›
                    </span>

                </Link>


                

                <Link 
                    to="/110_seccion.html"
                    className="grado">

                    <span className="icono">
                        👨‍🎓
                    </span>

                    <span>
                        Daniel Rodríguez
                    </span>

                    <span className="flecha">
                        ›
                    </span>

                </Link>


            </div>


        </section>


    </main>
    </div>
  );
}
