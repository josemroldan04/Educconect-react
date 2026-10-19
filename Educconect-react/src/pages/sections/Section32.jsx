import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sections/seccion_32.css';

export default function Section32() {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim() || !fecha.trim() || !descripcion.trim()) {
      alert('Complete todos los campos.');
      return;
    }
    alert(
      'Tarea agregada correctamente.\n\n' +
      'Nombre: ' + nombre +
      '\nFecha límite: ' + fecha +
      '\nDescripción: ' + descripcion
    );
    setNombre('');
    setFecha('');
    setDescripcion('');
  };

  return (
    <div className="seccion-scope seccion-32">
      <div className="telefono">
        <header className="header">
          <Link className="boton" to="/29_seccion.html">
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
          <h1>Tareas de Química</h1>
          <Link className="boton" to="/5_seccion.html">
            <i className="fa-solid fa-house"></i>
          </Link>
        </header>

        <main className="contenido">
          <h2>Tarea nueva</h2>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
            className="icono"
            alt="Nueva tarea"
          />

          <form id="formulario" onSubmit={handleSubmit}>
            <input
              type="text"
              id="nombre"
              placeholder="Nombre de la tarea"
              required
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <input
              type="date"
              id="fecha"
              required
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
            <textarea
              id="descripcion"
              placeholder="Descripción"
              required
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            ></textarea>
            <button type="submit" className="agregar">
              Agregar tarea
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}
