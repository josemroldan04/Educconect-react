import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { checkAndHandleReload, getTeacherTemporarySubjects } from '../../utils/storage';
import '../../styles/sections/seccion_45.css';

export default function Section45() {
  const [materiasProfesor, setMateriasProfesor] = useState([]);

  useEffect(() => {
    checkAndHandleReload();
    setMateriasProfesor(getTeacherTemporarySubjects());
  }, []);

  return (
    <div className="seccion-scope seccion-45">
      <main className="telefono">
        <header className="header">
          <div className="botones-superiores">
            <Link to="/46_seccion.html" className="boton-icono">
              <i className="fa-solid fa-user"></i>
            </Link>
            <Link to="/47_seccion.html" className="boton-icono">
              <i className="fa-solid fa-bell"></i>
            </Link>
          </div>
          <h1>Menú Principal</h1>
        </header>

        <section className="contenido">
          <h2>Tus Materias</h2>

          {/* TECNOLOGÍA */}
          <Link to="/48_seccion.html" className="materia">
            <div className="imagen-materia">
              <i className="fa-solid fa-laptop-code"></i>
            </div>
            <span>Tecnología</span>
          </Link>

          {/* ARTÍSTICA */}
          <Link to="/100_seccion.html" className="materia">
            <div className="imagen-materia artistica">
              <i className="fa-solid fa-palette"></i>
            </div>
            <span>Artística</span>
          </Link>

          {/* MATERIAS CREADAS TEMPORALES DEL PROFESOR */}
          {materiasProfesor.map(mat => (
            <a
              key={mat.codigo}
              href="#"
              onClick={(e) => e.preventDefault()}
              className="materia materia-creada"
            >
              <div className="imagen-materia">{mat.icono}</div>
              <span>{mat.nombre}</span>
              <small>Código: {mat.codigo}</small>
            </a>
          ))}

          {/* AGREGAR MATERIA */}
          <Link to="/135_seccion.html" className="agregar-materia">
            <i className="fa-solid fa-plus"></i>
            <span>Agregar materia</span>
          </Link>
        </section>
      </main>
    </div>
  );
}
