import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sections/seccion_47.css';

export default function Section47() {
  const [notificaciones, setNotificaciones] = useState([
    {
      id: 'n1',
      titulo: 'Nueva entrega',
      texto: 'Un estudiante entregó una nueva actividad de Artística.',
      leida: false
    },
    {
      id: 'n2',
      titulo: 'Nuevo mensaje',
      texto: 'Tienes un nuevo mensaje de un estudiante sin leer.',
      leida: false
    },
    {
      id: 'n3',
      titulo: 'Actividad próxima a vencer',
      texto: 'La actividad "Paisaje" de Artística vence en 2 días.',
      leida: false
    }
  ]);

  const leer = (id) => {
    setNotificaciones(prev => prev.map(n => n.id === id ? { ...n, leida: true } : n));
  };

  const eliminar = (id) => {
    setNotificaciones(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="seccion-scope seccion-47">
      <main className="telefono">
        <header className="encabezado">
          <Link to="/45_seccion.html" className="inicio" title="Volver al menú">
            🏠
          </Link>
          <h1>Notificaciones</h1>
        </header>

        <section className="lista" id="listaNotificaciones">
          {notificaciones.map(n => (
            <article key={n.id} className={`notificacion ${n.leida ? 'leida' : ''}`} id={n.id}>
              <h3>{n.titulo}</h3>
              <p>{n.texto}</p>
              <div className="botones">
                <button type="button" onClick={() => leer(n.id)}>
                  Marcar como leída
                </button>
                <button type="button" className="eliminar" onClick={() => eliminar(n.id)}>
                  Eliminar
                </button>
              </div>
            </article>
          ))}

          {notificaciones.length === 0 && (
            <p id="sinNotificaciones" className="sin-notificaciones" style={{ display: 'block' }}>
              No tienes notificaciones.
            </p>
          )}
        </section>
      </main>
    </div>
  );
}
