import React from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Barra inferior de navegación para el estudiante
 */
export default function NavigationBar() {
  const location = useLocation();
  const path = location.pathname;

  const isHome = path === '/5_seccion.html' || path === '/seccion/5' || path === '/estudiante';
  const isNotif = path === '/7_seccion.html' || path === '/seccion/7' || path === '/estudiante/notificaciones';
  const isProfile = path === '/6_seccion.html' || path === '/seccion/6' || path === '/estudiante/perfil';

  return (
    <footer className="footer">
      <Link to="/5_seccion.html" className={`footer-icon ${isHome ? 'activo' : ''}`} title="Inicio">
        <i className="fa-solid fa-house"></i>
      </Link>
      <Link to="/7_seccion.html" className={`footer-icon ${isNotif ? 'activo' : ''}`} title="Notificaciones">
        <i className="fa-solid fa-bell"></i>
      </Link>
      <Link to="/6_seccion.html" className={`footer-icon ${isProfile ? 'activo' : ''}`} title="Perfil">
        <i className="fa-solid fa-user"></i>
      </Link>
    </footer>
  );
}
