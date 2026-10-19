import React from 'react';

/**
 * Campo de formulario reutilizable
 */
export default function FormField({
  id,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  maxLength
}) {
  return (
    <div className="campo-formulario" style={{ marginBottom: '15px' }}>
      {label && <label htmlFor={id} style={{ display: 'block', marginBottom: '5px' }}>{label}</label>}
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        maxLength={maxLength}
        style={{ width: '100%' }}
      />
    </div>
  );
}
