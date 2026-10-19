import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getRegisteredUser, saveRegisteredUser } from '../../utils/storage';
import '../../styles/sections/seccion_3.css';

export default function Section3() {
  const [correo, setCorreo] = useState('');
  const [pass1, setPass1] = useState('');
  const [pass2, setPass2] = useState('');
  const [pin, setPin] = useState('');
  const navigate = useNavigate();

  const handleUpdate = () => {
    const trimmed = correo.trim();
    if (!trimmed || !pass1 || !pass2 || !pin) {
      alert('Completa todos los campos.');
      return;
    }
    if (pass1 !== pass2) {
      alert('Las contraseñas no coinciden.');
      return;
    }
    if (pin.length !== 4) {
      alert('El PIN debe tener 4 números.');
      return;
    }
    const user = getRegisteredUser();
    if (user && user.correo !== trimmed) {
      alert('El correo no coincide con el usuario registrado.');
      return;
    }
    if (user) {
      user.password = pass1;
      user.pin = pin;
      saveRegisteredUser(user);
    }
    alert('Contraseña actualizada correctamente.');
    navigate('/2_seccion.html');
  };

  return (
    <div className="seccion-scope seccion-3">
      <div className="app">
        <header className="header">
          <Link className="back" to="/2_seccion.html">‹ Back</Link>
          <h1>Olvidaste tu contraseña</h1>
        </header>
        <main className="formulario">
          <label htmlFor="correo">Correo electrónico</label>
          <input
            type="email"
            id="correo"
            placeholder="ejemplo@gmail.com"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          <label htmlFor="pass1">Nueva contraseña</label>
          <input
            type="password"
            id="pass1"
            placeholder="********"
            value={pass1}
            onChange={(e) => setPass1(e.target.value)}
          />
          <label htmlFor="pass2">Confirme la contraseña</label>
          <input
            type="password"
            id="pass2"
            placeholder="********"
            value={pass2}
            onChange={(e) => setPass2(e.target.value)}
          />
          <label htmlFor="pin">Confirme su PIN</label>
          <input
            type="password"
            id="pin"
            maxLength={4}
            placeholder="****"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
          <button className="continuar" type="button" onClick={handleUpdate}>
            Continuar
          </button>
        </main>
      </div>
    </div>
  );
}
