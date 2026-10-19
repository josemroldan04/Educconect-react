import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sections/seccion_106.css';

export default function Section106() {
  return (
    <div className="seccion-scope seccion-106">
      <div className="telefono">

        <header className="encabezado">
            <Link  to="/101_seccion.html" className="boton-casa">⌂</Link>
            <h1>Estudiante</h1>
        </header>

        <main className="contenido">

            <div className="perfil-estudiante">
                <div className="icono-estudiante">👩‍🎓</div>

                <h2>Camila Rodríguez</h2>

                <p><strong>Grado:</strong> 10°</p>
                <p><strong>Materia:</strong> Artística</p>
            </div>

            <h3>Opciones</h3>

            <Link  to="/120_seccion.html" className="opcion">
                <span className="emoji">💬</span>

                <div>
                    <strong>Chat</strong>
                    <p>Hablar con Camila Rodríguez</p>
                </div>

                <span className="flecha">›</span>
            </Link>

            <Link  to="/121_seccion.html" className="opcion">
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
