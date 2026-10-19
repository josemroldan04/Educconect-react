import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sections/seccion_109.css';

export default function Section109() {
  return (
    <div className="seccion-scope seccion-109">
      <div className="telefono">

        <header className="encabezado">
            <Link  to="/102_seccion.html" className="boton-casa">⌂</Link>
            <h1>Estudiante</h1>
        </header>

        <main className="contenido">

            <div className="perfil-estudiante">
                <div className="icono-estudiante">👩‍🎓</div>

                <h2>María Sánchez</h2>

                <p><strong>Grado:</strong> 11°</p>
                <p><strong>Materia:</strong> Artística</p>
            </div>

            <h3>Opciones</h3>

            <Link  to="/129_seccion.html" className="opcion">
                <span className="emoji">💬</span>

                <div>
                    <strong>Chat</strong>
                    <p>Hablar con María Sánchez</p>
                </div>

                <span className="flecha">›</span>
            </Link>

            <Link  to="/130_seccion.html" className="opcion">
                <span className="emoji">📝</span>

                <div>
                    <strong>Calificaciones</strong>
                    <p>Consultar sus calificaciones</p>
                </div>

                <span className="flecha">›</span>
            </Link>

        </main>

    </div>
    </div>
  );
}
