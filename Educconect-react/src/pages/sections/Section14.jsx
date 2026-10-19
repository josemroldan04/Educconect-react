import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sections/seccion_14.css';

export default function Section14() {
  return (
    <div className="seccion-scope seccion-14">
      <div className="telefono">


    

    <header className="header">

        

        <Link 
            className="btn-header"
            to="/12_seccion.html"
            title="Volver a tareas">

            <i>←</i>

        </Link>


        

        <h1>
            Tareas
        </h1>


        

        <Link 
            className="btn-header"
            to="/5_seccion.html"
            title="Volver al inicio">

            <i>⌂</i>

        </Link>

    </header>



    

    <main className="contenido">


        <h2>
            Paisaje
        </h2>


        

        <div className="fecha">

            <strong>
                Fecha límite:
            </strong>

            <span>
                16/09/2025
            </span>

        </div>


        

        <img 
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600"
            alt="Paisaje"
            className="imagen" />


        

        <div className="descripcion">

            <h3>
                Descripción
            </h3>

            <p>
                Realiza el dibujo con base en la muestra
                y aplica colores cálidos con delineado
                y degradado.
            </p>

        </div>


        

        <div className="botones">


            

            <Link 
                className="aceptar"
                to="/15_seccion.html"
                title="Entregar tarea">

                ✓

            </Link>


            

            <Link 
                className="cancelar"
                to="/16_seccion.html"
                title="No entregar tarea">

                ✕

            </Link>


        </div>


        <p className="ayuda">
            Selecciona una opción para continuar
        </p>


    </main>

</div>
    </div>
  );
}
