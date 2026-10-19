import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sections/seccion_49.css';

export default function Section49() {
  return (
    <div className="seccion-scope seccion-49">
      <main className="telefono">


        

        <header className="encabezado">


            

            <Link 
                to="/48_seccion.html"
                className="inicio"
                title="Volver a Tecnología"
                aria-label="Volver a Tecnología">

                🏠

            </Link>


            

            <h1>Tecnología</h1>


        </header>


        

        <section className="contenido">


            <h2>
                Estudiantes de 9°
            </h2>


            <p className="descripcion">
                Selecciona un estudiante para
                ver sus opciones.
            </p>


            

            <div className="lista-estudiantes">


                

                <Link 
                    to="/52_seccion.html"
                    className="estudiante">

                    <div className="foto">
                        👨‍🎓
                    </div>

                    <div className="informacion">

                        <h3>
                            Juan Pérez
                        </h3>

                        <p>
                            Grado 9°
                        </p>

                    </div>

                    <span className="flecha">
                        ›
                    </span>

                </Link>


                

                <Link 
                    to="/53_seccion.html"
                    className="estudiante">

                    <div className="foto">
                        👩‍🎓
                    </div>

                    <div className="informacion">

                        <h3>
                            María Gómez
                        </h3>

                        <p>
                            Grado 9°
                        </p>

                    </div>

                    <span className="flecha">
                        ›
                    </span>

                </Link>


                

                <Link 
                    to="/54_seccion.html"
                    className="estudiante">

                    <div className="foto">
                        👨‍🎓
                    </div>

                    <div className="informacion">

                        <h3>
                            Carlos Rodríguez
                        </h3>

                        <p>
                            Grado 9°
                        </p>

                    </div>

                    <span className="flecha">
                        ›
                    </span>

                </Link>


                

                <Link 
                    to="/55_seccion.html"
                    className="estudiante">

                    <div className="foto">
                        👩‍🎓
                    </div>

                    <div className="informacion">

                        <h3>
                            Laura Martínez
                        </h3>

                        <p>
                            Grado 9°
                        </p>

                    </div>

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
