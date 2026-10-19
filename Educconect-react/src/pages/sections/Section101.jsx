import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sections/seccion_101.css';

export default function Section101() {
  return (
    <div className="seccion-scope seccion-101">
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
                Grado 10°
            </h2>


            

            <div className="lista-grados">


                

                <Link 
                    to="/103_seccion.html"
                    className="grado">

                    <span className="icono">
                        👨‍🎓
                    </span>

                    <span>
                        Andrés López
                    </span>

                    <span className="flecha">
                        ›
                    </span>

                </Link>


                

                <Link 
                    to="/104_seccion.html"
                    className="grado">

                    <span className="icono">
                        👩‍🎓
                    </span>

                    <span>
                        Valentina Torres
                    </span>

                    <span className="flecha">
                        ›
                    </span>

                </Link>


                

                <Link 
                    to="/105_seccion.html"
                    className="grado">

                    <span className="icono">
                        👨‍🎓
                    </span>

                    <span>
                        Sebastián Gómez
                    </span>

                    <span className="flecha">
                        ›
                    </span>

                </Link>


                

                <Link 
                    to="/106_seccion.html"
                    className="grado">

                    <span className="icono">
                        👩‍🎓
                    </span>

                    <span>
                        Camila Rodríguez
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
