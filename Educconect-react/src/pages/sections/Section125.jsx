import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { saveStudentGradeData } from '../../utils/storage';
import '../../styles/sections/seccion_125.css';

export default function Section125() {
  const [nota, setNota] = useState('');
  const [comentario, setComentario] = useState('');
  const [mensaje, setMensaje] = useState({ texto: '', clase: '' });
  const navigate = useNavigate();

  const handleGuardar = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const valNota = parseFloat(nota);
    const valComentario = comentario.trim();

    if (isNaN(valNota) || valNota < 0 || valNota > 5) {
      setMensaje({ texto: 'Ingresa una nota entre 0.0 y 5.0.', clase: 'error' });
      return;
    }
    if (!valComentario) {
      setMensaje({ texto: 'Escribe un comentario.', clase: 'error' });
      return;
    }

    if (true) {
      saveStudentGradeData('calificacion_valeria_actividad2', valNota);
      saveStudentGradeData('comentario_' + 'calificacion_valeria_actividad2'.replace('calificacion_', ''), valComentario);
    } else {
      saveStudentGradeData('calificacion_valeria_actividad2', { nota: valNota, comentario: valComentario });
    }

    setMensaje({ texto: '✓ Calificación guardada correctamente.', clase: 'exito' });
    setTimeout(() => {
      navigate('/124_seccion.html');
    }, 1000);
  };

  return (
    <div className="seccion-scope seccion-125">
      <div className="telefono">
        <header>
          <Link to="/124_seccion.html" className="btn-regresar boton-volver">←</Link>
          <h1>Calificar actividad</h1>
        </header>

        <main className="contenido" style={{ padding: '15px' }}>
          <section className="estudiante perfil" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
            <div className="avatar" style={{ fontSize: '40px' }}>👨‍🎓</div>
            <div>
              <h2>Valeria Gallego</h2>
              <p>11° · Artística</p>
            </div>
          </section>

          <section className="tarea actividad-info">
            <h2>Actividad 2</h2>
            <p className="subtitulo">
              <strong>Proyecto artístico</strong>
            </p>
            <p className="descripcion">
              Revisión del proyecto artístico realizado por el estudiante.
            </p>
            <div className="entrega archivo" style={{ marginTop: '10px' }}>
              <h3>📄 Entrega del estudiante</h3>
              <p>Valeria Gallego ha entregado esta actividad.</p>
              <div className="archivo">📎 Proyecto_artistico.pdf</div>
            </div>
          </section>

          <form id="formCalificar" onSubmit={handleGuardar} style={{ marginTop: '20px' }}>
            <label htmlFor="nota">Calificación</label>
            <input
              type="number"
              id="nota"
              min="0"
              max="5"
              step="0.1"
              placeholder="Ejemplo: 4.7"
              value={nota}
              onChange={(e) => setNota(e.target.value)}
              required
            />

            <label htmlFor="comentario">Comentario</label>
            <textarea
              id="comentario"
              placeholder="Escribe un comentario sobre el trabajo..."
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              required
            ></textarea>

            <button type="submit" onClick={handleGuardar}>
              Guardar calificación
            </button>
          </form>

          {mensaje.texto && (
            <p id="mensaje" className={mensaje.clase} style={{ marginTop: '10px' }}>
              {mensaje.texto}
            </p>
          )}
        </main>
      </div>
    </div>
  );
}
