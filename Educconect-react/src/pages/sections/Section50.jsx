import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sections/seccion_50.css';

export default function Section50() {
  return (
    <div className="seccion-scope seccion-50">
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
                Estudiantes de 10°
            </h2>


            <p className="descripcion">
                Selecciona un estudiante para
                ver sus opciones.
            </p>


            

            <div className="lista-estudiantes">


                

                <Link 
                    to="/56_seccion.html"
                    className="estudiante">

                    <div className="foto">
                        👨‍🎓
                    </div>

                    <div className="informacion">

                        <h3>
                            Andrés López
                        </h3>

                        <p>
                            Grado 10°
                        </p>

                    </div>

                    <span className="flecha">
                        ›
                    </span>

                </Link>


                

                <Link 
                    to="/57_seccion.html"
                    className="estudiante">

                    <div className="foto">
                        👩‍🎓
                    </div>

                    <div className="informacion">

                        <h3>
                            Valentina Torres
                        </h3>

                        <p>
                            Grado 10°
                        </p>

                    </div>

                    <span className="flecha">
                        ›
                    </span>

                </Link>


                

                <Link 
                    to="/58_seccion.html"
                    className="estudiante">

                    <div className="foto">
                        👨‍🎓
                    </div>

                    <div className="informacion">

                        <h3>
                            Sebastián Gómez
                        </h3>

                        <p>
                            Grado 10°
                        </p>

                    </div>

                    <span className="flecha">
                        ›
                    </span>

                </Link>


                

                <Link 
                    to="/59_seccion.html"
                    className="estudiante">

                    <div className="foto">
                        👩‍🎓
                    </div>

                    <div className="informacion">

                        <h3>
                            Camila Rodríguez
                        </h3>

                        <p>
                            Grado 10°
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
