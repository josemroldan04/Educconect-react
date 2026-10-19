import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Encabezado reutilizable para pantallas de teléfono en EduConnect
 */
export default function Header({ title, backTo, homeTo }) {
  return (
    <header className="header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px' }}>
      {backTo ? (
        <Link className="boton btn-header boton-volver" to={backTo}>
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
      ) : <div style={{ width: '30px' }} />}

      <h1 style={{ fontSize: '20px', margin: 0, textAlign: 'center', flex: 1 }}>
        {title}
      </h1>

      {homeTo ? (
        <Link className="boton btn-header boton-casa" to={homeTo} title="Inicio">
          <i className="fa-solid fa-house"></i>
        </Link>
      ) : <div style={{ width: '30px' }} />}
    </header>
  );
}
