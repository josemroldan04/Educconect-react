import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getRegisteredUser, saveActiveSession } from '../../utils/storage';
import '../../styles/sections/seccion_2.css';

export default function Section2() {
  const [rol, setRol] = useState('estudiante');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [pin, setPin] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const trimmedEmail = email.trim();
    if (!trimmedEmail || !password || !pin) {
      alert('Completa todos los campos.');
      return;
    }
    if (pin.length !== 4) {
      alert('El PIN debe tener 4 números.');
      return;
    }
    const user = getRegisteredUser();
    if (user) {
      if (
        user.correo !== trimmedEmail ||
        user.password !== password ||
        user.pin !== pin ||
        user.rol !== rol
      ) {
        alert('Los datos ingresados no coinciden con el usuario registrado.');
        return;
      }
    }
    saveActiveSession({ correo: trimmedEmail, rol });
    if (rol === 'estudiante') {
      navigate('/5_seccion.html');
    } else {
      navigate('/45_seccion.html');
    }
  };

  return (
    <div className="seccion-scope seccion-2">
      <div className="app">
        <header className="header">
          <Link className="back" to="/">‹ Back</Link>
          <h1>Inicia sesión en EduConnect</h1>
        </header>
        <main className="login">
          <h2>Estudiante o maestro</h2>
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
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            placeholder="ejemplo@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Contraseña</label>
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Escribe tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="show-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁
            </button>
          </div>
          <label htmlFor="pin">Ingrese su PIN</label>
          <input
            type="password"
            id="pin"
            placeholder="****"
            maxLength={4}
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
          <button type="button" className="login-button" onClick={handleLogin}>
            Iniciar sesión
          </button>
          <Link className="forgot-button" to="/3_seccion.html">
            ¿Olvidaste la contraseña?
          </Link>
        </main>
      </div>
    </div>
  );
}
