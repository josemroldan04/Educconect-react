import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addStudentTemporarySubject } from '../../utils/storage';
import '../../styles/sections/seccion_8.css';

export default function Section8() {
  const [materia, setMateria] = useState('');
  const [profesor, setProfesor] = useState('');
  const [codigo, setCodigo] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const m = materia.trim();
    const p = profesor.trim();
    const c = codigo.trim();

    if (!m || !p || !c) {
      alert('Complete todos los campos.');
      return;
    }

    const res = addStudentTemporarySubject({ nombre: m, profesor: p, codigo: c });
    if (!res.success) {
      alert(res.error);
      return;
    }

    alert('Materia creada correctamente.');
    navigate('/5_seccion.html');
  };

  return (
    <div className="seccion-scope seccion-8">
      <main className="telefono">
        <header className="header">
          <Link className="inicio" to="/5_seccion.html" title="Volver al menú">
            🏠
          </Link>
          <h1>Materia Nueva</h1>
        </header>

        <section className="contenido">
          <div className="icono">📒✏️</div>

          <form id="formulario" onSubmit={handleSubmit}>
            <input
              type="text"
              id="materia"
              placeholder="Nombre de la materia"
              required
              value={materia}
              onChange={(e) => setMateria(e.target.value)}
            />
            <input
              type="text"
              id="profesor"
              placeholder="Nombre del profesor"
              required
              value={profesor}
              onChange={(e) => setProfesor(e.target.value)}
            />
            <input
              type="text"
              id="codigo"
              placeholder="Código de la materia"
              required
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
            />
            <button type="submit" className="crear">
              Crear
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
