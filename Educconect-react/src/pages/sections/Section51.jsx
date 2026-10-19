import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sections/seccion_51.css';

export default function Section51() {
  return (
    <div className="seccion-scope seccion-51">
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
                Estudiantes de 11°
            </h2>


            <p className="descripcion">
                Selecciona un estudiante para
                ver sus opciones.
            </p>


            

            <div className="lista-estudiantes">


                

                <Link 
                    to="/60_seccion.html"
                    className="estudiante">

                    <div className="foto">
                        👩‍🎓
                    </div>

                    <div className="informacion">

                        <h3>
                            Valeria Gallego
                        </h3>

                        <p>
                            Grado 11°
                        </p>

                    </div>

                    <span className="flecha">
                        ›
                    </span>

                </Link>


                

                <Link 
                    to="/61_seccion.html"
                    className="estudiante">

                    <div className="foto">
                        👩‍🎓
                    </div>

                    <div className="informacion">

                        <h3>
                            Sara Ramirez
                        </h3>

                        <p>
                            Grado 11°
                        </p>

                    </div>

                    <span className="flecha">
                        ›
                    </span>

                </Link>


                

                <Link 
                    to="/62_seccion.html"
                    className="estudiante">

                    <div className="foto">
                        👩‍🎓
                    </div>

                    <div className="informacion">

                        <h3>
                            Maria Sanchez
                        </h3>

                        <p>
                            Grado 11°
                        </p>

                    </div>

                    <span className="flecha">
                        ›
                    </span>

                </Link>


                

                <Link 
                    to="/63_seccion.html"
                    className="estudiante">

                    <div className="foto">
                        👨‍🎓
                    </div>

                    <div className="informacion">

                        <h3>
                            Daniel Rodríguez
                        </h3>

                        <p>
                            Grado 11°
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
