import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { saveRegisteredUser, saveActiveSession } from '../../utils/storage';
import '../../styles/sections/seccion_4.css';

export default function Section4() {
  const [rol, setRol] = useState('estudiante');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [celular, setCelular] = useState('');
  const [pin, setPin] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const trimmedCorreo = correo.trim();
    const trimmedCelular = celular.trim();

    if (!/^d{10}$/.test(trimmedCelular)) {
      alert('El número de celular debe tener 10 dígitos.');
      return;
    }
    if (!/^d{4}$/.test(pin)) {
      alert('El PIN debe tener 4 números.');
      return;
    }

    const usuario = {
      rol,
      correo: trimmedCorreo,
      password,
      celular: trimmedCelular,
      pin
    };

    saveRegisteredUser(usuario);
    saveActiveSession({ correo: trimmedCorreo, rol });
    alert('Registro realizado correctamente.');

    if (rol === 'estudiante') {
      navigate('/5_seccion.html');
    } else {
      navigate('/45_seccion.html');
    }
  };

  return (
    <div className="seccion-scope seccion-4">
      <div className="app">
        <header className="header">
          <Link className="back" to="/">‹ Back</Link>
          <h1>Registrarse en EduConnect</h1>
        </header>
        <form id="registro" className="formulario" onSubmit={handleRegister}>
          <label>Estudiante o maestro</label>
          <div className="roles">
            <button
              type="button"
              className={`role ${rol === 'estudiante' ? 'active' : ''}`}
              onClick={() => setRol('estudiante')}
            >
              Estudiante
            </button>
            <button
              type="button"
              className={`role ${rol === 'maestro' ? 'active' : ''}`}
              onClick={() => setRol('maestro')}
            >
              Maestro
            </button>
          </div>
          <label htmlFor="correo">Correo electrónico</label>
          <input
            type="email"
            id="correo"
            placeholder="ejemplo@gmail.com"
            required
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          <label htmlFor="password">Crea una contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="********"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="celular">Número de celular</label>
          <input
            type="tel"
            id="celular"
            placeholder="3001234567"
            maxLength={10}
            required
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
          />
          <label htmlFor="pin">Ingrese su PIN</label>
          <input
            type="password"
            id="pin"
            maxLength={4}
            placeholder="****"
            required
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
          <button type="submit" className="registrar">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}
