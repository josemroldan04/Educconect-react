import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Tarjeta de materia para dashboard
 */
export default function SubjectCard({
  to,
  icon,
  name,
  professor,
  code,
  isNew = false,
  isCreated = false
}) {
  let cardClass = 'materia';
  if (isNew) cardClass += ' materia-nueva';
  if (isCreated) cardClass += ' materia-nueva-creada';

  const content = (
    <>
      <div className="icono-materia">
        {typeof icon === 'string' && icon.startsWith('fa-') ? (
          <i className={icon}></i>
        ) : (
          <span>{icon}</span>
        )}
      </div>
      <span>{name}</span>
      {professor && <small>{professor}</small>}
      {code && <small>Código: {code}</small>}
    </>
  );

  if (to && to !== '#') {
    return (
      <Link to={to} className={cardClass}>
        {content}
      </Link>
    );
  }

  return (
    <a href="#" onClick={(e) => e.preventDefault()} className={cardClass}>
      {content}
    </a>
  );
}
