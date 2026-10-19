import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addTeacherTemporarySubject } from '../../utils/storage';
import '../../styles/sections/seccion_135.css';

export default function Section135() {
  const [nombre, setNombre] = useState('');
  const [codigo, setCodigo] = useState('');
  const [icono, setIcono] = useState('📚');
  const [descripcion, setDescripcion] = useState('');
  const [mensaje, setMensaje] = useState({ texto: '', clase: '' });
  const navigate = useNavigate();

  const handleAgregar = () => {
    const n = nombre.trim();
    const c = codigo.trim();

    if (!n) {
      setMensaje({ texto: 'Por favor, escribe el nombre de la materia.', clase: 'mensaje error' });
      return;
    }
    if (!c) {
      setMensaje({ texto: 'Por favor, escribe el código de la materia.', clase: 'mensaje error' });
      return;
    }

    const res = addTeacherTemporarySubject({
      nombre: n,
      codigo: c,
      icono,
      descripcion: descripcion.trim()
    });

    if (!res.success) {
      setMensaje({ texto: res.error, clase: 'mensaje error' });
      return;
    }

    setMensaje({ texto: 'Materia agregada correctamente.', clase: 'mensaje correcto' });
    setTimeout(() => {
      navigate('/45_seccion.html');
    }, 1000);
  };

  return (
    <div className="seccion-scope seccion-135">
      <main className="telefono">
        <header className="encabezado">
          <Link to="/45_seccion.html" className="boton-volver">
            ←
          </Link>
          <h1>Agregar materia</h1>
        </header>

        <main className="contenido">
          <div className="icono-principal">📚</div>
          <h2>Nueva materia</h2>
          <p className="descripcion">
            Completa la información para agregar una nueva materia.
          </p>

          <label htmlFor="nombre">Nombre de la materia</label>
          <input
            type="text"
            id="nombre"
            placeholder="Ej. Matemáticas"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <label htmlFor="codigo">Código de la materia</label>
          <input
            type="text"
            id="codigo"
            placeholder="Ej. MAT-101"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
          />

          <label htmlFor="icono">Icono de la materia</label>
          <select id="icono" value={icono} onChange={(e) => setIcono(e.target.value)}>
            <option value="📚">📚 Libro</option>
            <option value="🧮">🧮 Matemáticas</option>
            <option value="🧪">🧪 Ciencias</option>
            <option value="🌎">🌎 Sociales</option>
            <option value="🌐">🌐 Idiomas</option>
            <option value="🎵">🎵 Música</option>
            <option value="🎨">🎨 Arte</option>
            <option value="⚽">⚽ Educación Física</option>
            <option value="💻">💻 Tecnología</option>
          </select>

          <label htmlFor="descripcion">Descripción</label>
          <textarea
            id="descripcion"
            placeholder="Escribe una breve descripción de la materia..."
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          ></textarea>

          <button type="button" className="boton-agregar" onClick={handleAgregar}>
            <i className="fa-solid fa-plus"></i> Agregar materia
          </button>

          {mensaje.texto && (
            <p id="mensaje" className={mensaje.clase}>
              {mensaje.texto}
            </p>
          )}
        </main>
      </main>
    </div>
  );
}
