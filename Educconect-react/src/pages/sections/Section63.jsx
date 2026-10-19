import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sections/seccion_63.css';

export default function Section63() {
  return (
    <div className="seccion-scope seccion-63">
      <div className="telefono">

        <header className="encabezado">
            <Link  to="/51_seccion.html" className="boton-casa">⌂</Link>
            <h1>Estudiante</h1>
        </header>

        <main className="contenido">

            <div className="perfil-estudiante">
                <div className="icono-estudiante">👨‍🎓</div>

                <h2>Daniel Rodríguez</h2>

                <p><strong>Grado:</strong> 11°</p>
                <p><strong>Materia:</strong> Tecnología</p>
            </div>

            <h3>Opciones</h3>

            <Link  to="/97_seccion.html" className="opcion">
                <span className="emoji">💬</span>

                <div>
                    <strong>Chat</strong>
                    <p>Hablar con Daniel Rodríguez</p>
                </div>

                <span className="flecha">›</span>
            </Link>

            <Link  to="/98_seccion.html" className="opcion">
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
