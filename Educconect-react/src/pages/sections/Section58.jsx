import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sections/seccion_58.css';

export default function Section58() {
  return (
    <div className="seccion-scope seccion-58">
      <div className="telefono">

        <header className="encabezado">
            <Link  to="/50_seccion.html" className="boton-casa">⌂</Link>
            <h1>Estudiante</h1>
        </header>

        <main className="contenido">

            <div className="perfil-estudiante">
                <div className="icono-estudiante">👨‍🎓</div>

                <h2>Sebastián Gómez</h2>

                <p><strong>Grado:</strong> 10°</p>
                <p><strong>Materia:</strong> Tecnología</p>
            </div>

            <h3>Opciones</h3>

            <Link  to="/82_seccion.html" className="opcion">
                <span className="emoji">💬</span>

                <div>
                    <strong>Chat</strong>
                    <p>Hablar con Sebastián Gómez</p>
                </div>

                <span className="flecha">›</span>
            </Link>

            <Link  to="/83_seccion.html" className="opcion">
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
