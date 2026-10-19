import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { checkAndHandleReload, getStudentTemporarySubjects } from '../../utils/storage';
import '../../styles/sections/seccion_5.css';

export default function Section5() {
  const [busqueda, setBusqueda] = useState('');
  const [materiasTemporales, setMateriasTemporales] = useState([]);

  useEffect(() => {
    checkAndHandleReload();
    setMateriasTemporales(getStudentTemporarySubjects());
  }, []);

  const defaultSubjects = [
    { href: '/18_seccion.html', icon: 'fa-solid fa-atom', name: 'Física' },
    { href: '/27_seccion.html', icon: 'fa-solid fa-flask', name: 'Química' },
    { href: '/9_seccion.html', icon: 'fa-solid fa-palette', name: 'Artística' },
    { href: '/36_seccion.html', icon: 'fa-solid fa-calculator', name: 'Matemáticas' }
  ];

  const q = busqueda.toLowerCase().trim();

  return (
    <div className="seccion-scope seccion-5">
      <div className="telefono">
        <header className="header">
          <h1>Mis materias</h1>
        </header>

        <div className="buscador">
          <input
            type="text"
            id="buscar"
            placeholder="Buscar materia..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          <button type="button" onClick={() => {}}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <main className="contenido">
          <div className="materias" id="listaMaterias">
            {/* AGREGAR MATERIA */}
            {('materia nueva'.includes(q) || q === '') && (
              <Link to="/8_seccion.html" className="materia materia-nueva">
                <div className="icono-materia">
                  <i className="fa-solid fa-circle-plus"></i>
                </div>
                <span>Materia nueva</span>
              </Link>
            )}

            {/* DEFAULT SUBJECTS */}
            {defaultSubjects
              .filter(sub => sub.name.toLowerCase().includes(q))
              .map(sub => (
                <Link key={sub.name} to={sub.href} className="materia">
                  <div className="icono-materia">
                    <i className={sub.icon}></i>
                  </div>
                  <span>{sub.name}</span>
                </Link>
              ))}

            {/* TEMPORARY SUBJECTS */}
            {materiasTemporales
              .filter(mat =>
                mat.nombre.toLowerCase().includes(q) ||
                (mat.profesor && mat.profesor.toLowerCase().includes(q)) ||
                (mat.codigo && mat.codigo.toLowerCase().includes(q))
              )
              .map(mat => (
                <a
                  key={mat.codigo}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="materia materia-nueva-creada"
                >
                  <div className="icono-materia">
                    <i className="fa-solid fa-book"></i>
                  </div>
                  <span>{mat.nombre}</span>
                  <small>{mat.profesor}</small>
                  <small>Código: {mat.codigo}</small>
                </a>
              ))}
          </div>
        </main>

        <footer className="footer">
          <Link to="/5_seccion.html" className="footer-icon activo">
            <i className="fa-solid fa-house"></i>
          </Link>
          <Link to="/7_seccion.html" className="footer-icon">
            <i className="fa-solid fa-bell"></i>
          </Link>
          <Link to="/6_seccion.html" className="footer-icon">
            <i className="fa-solid fa-user"></i>
          </Link>
        </footer>
      </div>
    </div>
  );
}
