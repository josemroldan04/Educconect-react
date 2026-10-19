import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sections/seccion_13.css';

export default function Section13() {
  return (
    <div className="seccion-scope seccion-13">
      <div className="telefono">


    

    <header className="header">


        

        <Link 
            className="btn-header"
            to="/11_seccion.html"
            title="Volver a opciones">

            <i className="fa-solid fa-arrow-left"></i>

        </Link>


        

        <h1>
            Calificaciones
        </h1>


        

        <Link 
            className="btn-header"
            to="/5_seccion.html"
            title="Volver al inicio">

            <i className="fa-solid fa-house"></i>

        </Link>

    </header>



    

    <main className="contenido">


        <h2>
            Artística
        </h2>


        

        <div className="promedio">

            <p>
                Promedio
            </p>

            <span id="promedio">
                4.2
            </span>

        </div>



        

        <div className="lista">


            

            <div className="calificacion">

                <div className="informacion">

                    <h3>
                        Colorear dibujo
                    </h3>

                    <p>
                        Calificación
                    </p>

                </div>

                <div className="nota">
                    4.5
                </div>

            </div>



            

            <div className="calificacion">

                <div className="informacion">

                    <h3>
                        Delineado
                    </h3>

                    <p>
                        Calificación
                    </p>

                </div>

                <div className="nota">
                    4.0
                </div>

            </div>



            

            <div className="calificacion">

                <div className="informacion">

                    <h3>
                        Sombras
                    </h3>

                    <p>
                        Calificación
                    </p>

                </div>

                <div className="nota">
                    3.8
                </div>

            </div>



            

            <div className="calificacion">

                <div className="informacion">

                    <h3>
                        Biografía
                    </h3>

                    <p>
                        Calificación
                    </p>

                </div>

                <div className="nota">
                    4.5
                </div>

            </div>



            

            <div className="calificacion">

                <div className="informacion">

                    <h3>
                        Paisaje
                    </h3>

                    <p>
                        Pendiente de calificar
                    </p>

                </div>

                <div className="pendiente">
                    -
                </div>

            </div>

        </div>



        

        <div className="mensaje">

            <i className="fa-solid fa-circle-info"></i>

            <span>
                Las calificaciones son asignadas por el profesor.
            </span>

        </div>


    </main>

</div>
    </div>
  );
}
