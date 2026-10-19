import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sections/seccion_100.css';

export default function Section100() {
  return (
    <div className="seccion-scope seccion-100">
      <main className="telefono">


        

        <header className="encabezado">


            

            <Link 
                to="/45_seccion.html"
                className="inicio"
                title="Volver al menú"
                aria-label="Volver al menú">

                🏠

            </Link>


            

            <h1>Artística</h1>


        </header>


        

        <section className="contenido">


            

            <h2>
                Selecciona un grado
            </h2>


            

            <div className="lista-grados">


                

                <Link 
                    to="/101_seccion.html"
                    className="grado">

                    <span className="icono">
                        🎓
                    </span>

                    <span>
                        Grado 10°
                    </span>

                    <span className="flecha">
                        ›
                    </span>

                </Link>


                

                <Link 
                    to="/102_seccion.html"
                    className="grado">

                    <span className="icono">
                        🎓
                    </span>

                    <span>
                        Grado 11°
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
