import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sections/seccion_9.css';

export default function Section9() {
  return (
    <div className="seccion-scope seccion-9">
      <main className="telefono">

        

        <header className="header">

            

            <Link 
                to="/5_seccion.html"
                className="inicio"
                title="Volver al menú"
                aria-label="Volver al menú">
                🏠
            </Link>


            

            <div className="buscador">

                <input 
                    type="text"
                    id="buscar"
                    value="Artística"
                    placeholder="Buscar materia..."
                    autoComplete="off"
                 />

                <button
                    type="button"
                    
                    aria-label="Buscar">
                    🔍
                </button>

            </div>

        </header>


        

        <section className="contenido">

            

            <div className="imagen-container">

                <img 
                    src="https://cdn-icons-png.flaticon.com/512/3163/3163478.png"
                    className="imagen"
                    alt="Artística"
                 />

            </div>


            

            <h1>Artística</h1>


            

            <div className="dato">

                <span className="etiqueta">
                    Profesor
                </span>

                <span>
                    Carlos Ramírez
                </span>

            </div>


            

            <div className="dato">

                <span className="etiqueta">
                    Código
                </span>

                <span>
                    ART-101
                </span>

            </div>


            

            <Link 
                className="entrar"
                to="/11_seccion.html">
                Entrar a la materia
            </Link>

        </section>

    </main>
    </div>
  );
}
