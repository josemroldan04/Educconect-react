import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sections/seccion_12.css';

export default function Section12() {
  return (
    <div className="seccion-scope seccion-12">
      <div className="telefono">


    

    <header className="header">

        

        <Link 
            className="boton"
            to="/11_seccion.html"
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
                    Colorear dibujo
                </span>

                <button
                    className="estado verde"
                    title="Tarea completada">

                    <i className="fa-solid fa-check"></i>

                </button>

            </div>


            

            <div className="tarea">

                <span>
                    Delineado
                </span>

                <button
                    className="estado verde"
                    title="Tarea completada">

                    <i className="fa-solid fa-check"></i>

                </button>

            </div>


            

            <div className="tarea">

                <span>
                    Sombras
                </span>

                <button
                    className="estado rojo"
                    title="Tarea no entregada">

                    <i className="fa-solid fa-xmark"></i>

                </button>

            </div>


            

            <div className="tarea">

                <span>
                    Paisaje
                </span>

                <Link 
                    className="estado pendiente"
                    to="/14_seccion.html"
                    title="Ver tarea">

                    <i className="fa-regular fa-square"></i>

                </Link>

            </div>


            

            <div className="tarea">

                <span>
                    Biografía
                </span>

                <button
                    className="estado verde"
                    title="Tarea completada">

                    <i className="fa-solid fa-check"></i>

                </button>

            </div>


        </div>


        

        <Link 
            className="agregar"
            to="/17_seccion.html"
            title="Agregar nueva tarea">

            <i className="fa-solid fa-plus"></i>

        </Link>


    </main>

</div>
    </div>
  );
}
