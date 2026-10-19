import React from 'react';

/**
 * Contenedor con aspecto de dispositivo móvil / teléfono
 * Respeta dimensiones y diseño original de EduConnect
 */
export default function PhoneLayout({ children, isAppLayout = false, className = '' }) {
  const containerClass = isAppLayout ? 'app' : 'telefono';

  return (
    <div className={`seccion-scope ${className}`}>
      <div className={containerClass}>
        {children}
      </div>
    </div>
  );
}
