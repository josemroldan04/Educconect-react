import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getStudentGradeData } from '../../utils/storage';
import '../../styles/sections/seccion_71.css';

export default function Section71() {
  const [calificacion, setCalificacion] = useState(null);
  const [comentario, setComentario] = useState('');

  useEffect(() => {
    const data = getStudentGradeData('calificacion_carlos_actividad2');
    if (data) {
      if (typeof data === 'object') {
        setCalificacion(data.nota);
        setComentario(data.comentario || '');
      } else {
        setCalificacion(parseFloat(data));
        const c = localStorage.getItem('comentario_' + 'calificacion_carlos_actividad2'.replace('calificacion_', ''));
        if (c) setComentario(c);
      }
    }
  }, []);

  const nota2 = calificacion !== null ? parseFloat(calificacion) : null;
  const promedio = nota2 !== null ? ((4.5 + nota2 + (4.3)) / 3).toFixed(1) : (4.4);

  return (
    <div className="seccion-scope seccion-71">
      <div className="telefono">
        <header>
          <Link to="/58_seccion.html" className="btn-regresar boton-volver">←</Link>
          <h1>Calificaciones</h1>
        </header>

        <main className="contenido" style={{ padding: '15px' }}>
          <section className="perfil" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <div className="avatar" style={{ fontSize: '40px' }}>👨‍🎓</div>
            <div>
              <h2>Carlos Rodríguez</h2>
              <p>9° · Tecnología</p>
            </div>
          </section>

          <div className="promedio">
            <p>Promedio actual</p>
            <strong id="promedio">{promedio}</strong>
            <span>/ 5.0</span>
          </div>

          <h3>Tareas / Actividades</h3>

          {/* ACTIVIDAD 1 */}
          <div className="actividad calificada">
            <div className="actividad-info">
              <h4>Actividad 1</h4>
              <p>Introducción a la tecnología</p>
              <span>✓ Calificada</span>
            </div>
            <div className="nota">
              <strong>4.5</strong>
              <small>/ 5.0</small>
            </div>
          </div>

          {/* ACTIVIDAD 2 */}
          <div className={`actividad ${nota2 !== null ? 'calificada' : 'pendiente'}`} id="actividad2">
            <div className="actividad-info">
              <h4>Actividad 2</h4>
              <p>Investigación sobre tecnología</p>
              <span id="estado2" style={nota2 !== null ? { color: '#29965a' } : {}}>
                {nota2 !== null ? '✓ Calificada' : '⏳ Pendiente de calificar'}
              </span>
              {comentario && <small id="comentario" style={{ display: 'block', marginTop: '4px' }}>Comentario: {comentario}</small>}
            </div>

            <div id="resultado2">
              {nota2 !== null ? (
                <div className="nota">
                  <strong>{nota2.toFixed(1)}</strong>
                  <small>/ 5.0</small>
                </div>
              ) : (
                <Link to="/72_seccion.html" className="btn-calificar boton-calificar">
                  Calificar
                </Link>
              )}
            </div>
          </div>

          {/* ACTIVIDAD 3 */}
          <div className="actividad calificada">
            <div className="actividad-info">
              <h4>Actividad 3</h4>
              <p>Proyecto tecnológico</p>
              <span>✓ Calificada</span>
            </div>
            <div className="nota">
              <strong>4.3</strong>
              <small>/ 5.0</small>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
