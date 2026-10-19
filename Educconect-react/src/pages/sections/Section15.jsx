import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sections/seccion_15.css';

export default function Section15() {
  return (
    <div className="seccion-scope seccion-15">
      <div className="telefono">


    

    <header className="header">


        

        <Link 
            className="boton"
            to="/14_seccion.html"
            title="Volver">

            <i className="fa-solid fa-arrow-left"></i>

        </Link>


        

        <h1>
            Tareas Artísticas
        </h1>


        

        <Link 
            className="boton"
            to="/5_seccion.html"
            title="Inicio">

            <i className="fa-solid fa-house"></i>

        </Link>


    </header>



    

    <main className="contenido">

        <h2>
            Tus tareas
        </h2>


        <div className="lista">


            

            <div className="tarea">

                <span>
                    Colorear dibujo - 10/03/2026
                </span>

                <button
                    className="estado completada"
                    title="Tarea completada">

                    <i className="fa-solid fa-check"></i>

                </button>

            </div>


            

            <div className="tarea">

                <span>
                    Delineado - 15/03/2026
                </span>

                <button
                    className="estado completada"
                    title="Tarea completada">

                    <i className="fa-solid fa-check"></i>

                </button>

            </div>


            

            <div className="tarea">

                <span>
                    Sombras - 17/03/2026
                </span>

                <button
                    className="estado cancelada"
                    title="Tarea no entregada">

                    <i className="fa-solid fa-xmark"></i>

                </button>

            </div>


            

            <div className="tarea">

                <span>
                    Paisaje - 26/03/2026
                </span>

                <button
                    className="estado completada"
                    title="Tarea completada">

                    <i className="fa-solid fa-check"></i>

                </button>

            </div>


            

            <div className="tarea">

                <span>
                    Biografía - 26/03/2026
                </span>

                <button
                    className="estado completada"
                    title="Tarea completada">

                    <i className="fa-solid fa-check"></i>

                </button>

            </div>


        </div>


    </main>

</div>
    </div>
  );
}
