import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="seccion-scope">
      <div
        className="app"
        style={{
          width: '380px',
          height: '720px',
          background: '#fffef5',
          borderRadius: '30px',
          padding: '40px 25px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          gap: '20px'
        }}
      >
        <div style={{ fontSize: '60px' }}>🔍</div>
        <h1 style={{ fontSize: '24px', color: '#202d3d', margin: 0 }}>
          Página no encontrada
        </h1>
        <p style={{ color: '#687789', fontSize: '15px' }}>
          La sección solicitada no existe o ha cambiado de ruta.
        </p>
        <Link
          to="/"
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            background: 'linear-gradient(135deg, #55c9ee, #8ed6ed)',
            color: 'white',
            borderRadius: '10px',
            textDecoration: 'none',
            fontWeight: 'bold',
            marginTop: '20px'
          }}
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}
