import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUserProfile, saveUserProfile, clearActiveSession } from '../../utils/storage';
import '../../styles/sections/seccion_6.css';

export default function Section6() {
  const [nombre, setNombre] = useState('');
  const [grado, setGrado] = useState('');
  const [codigo, setCodigo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const perfil = getUserProfile();
    if (perfil) {
      setNombre(perfil.nombre || '');
      setGrado(perfil.grado || '');
      setCodigo(perfil.codigo || '');
      setTelefono(perfil.telefono || '');
      setCorreo(perfil.correo || '');
    }
  }, []);

  const handleGuardar = () => {
    if (!nombre.trim() || !grado.trim() || !codigo.trim() || !telefono.trim() || !correo.trim()) {
      alert('Complete todos los campos.');
      return;
    }
    saveUserProfile({
      nombre: nombre.trim(),
      grado: grado.trim(),
      codigo: codigo.trim(),
      telefono: telefono.trim(),
      correo: correo.trim()
    });
    alert('Perfil guardado correctamente.');
    navigate('/5_seccion.html');
  };

  const handleCerrarSesion = () => {
    if (window.confirm('¿Estás seguro de que deseas cerrar sesión?')) {
      clearActiveSession();
      navigate('/');
    }
  };

  return (
    <div className="seccion-scope seccion-6">
      <main className="telefono">
        <header>
          <Link to="/5_seccion.html" className="volver" title="Volver al menú">
            🏠
          </Link>
          <h1>Perfil</h1>
        </header>

        <section className="contenido">
          <div className="foto-container">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
              className="perfil"
              alt="Foto de perfil"
            />
          </div>

          <input
            type="text"
            id="nombre"
            placeholder="Nombre"
            autoComplete="name"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="text"
            id="grado"
            placeholder="Grado"
            value={grado}
            onChange={(e) => setGrado(e.target.value)}
          />
          <input
            type="text"
            id="codigo"
            placeholder="Código de estudiante"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
          />
          <input
            type="tel"
            id="telefonoUsuario"
            placeholder="Número de teléfono"
            autoComplete="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
          <input
            type="email"
            id="correo"
            placeholder="Correo electrónico"
            autoComplete="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />

          <button type="button" className="guardar" onClick={handleGuardar}>
            Guardar
          </button>
          <button type="button" className="cerrar-sesion" onClick={handleCerrarSesion}>
            Cerrar sesión
          </button>
        </section>
      </main>
    </div>
  );
}
