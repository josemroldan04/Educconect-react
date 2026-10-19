import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sections/seccion_82.css';

export default function Section82() {
  const [mensajes, setMensajes] = useState([
    { tipo: 'recibido', texto: 'Hola, tengo una pregunta sobre la actividad.' },
    { tipo: 'enviado', texto: '¡Hola! Claro, cuéntame en qué te puedo ayudar.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [mensajes]);

  const enviarMensaje = () => {
    const texto = inputVal.trim();
    if (!texto) return;
    setMensajes(prev => [...prev, { tipo: 'enviado', texto }]);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      enviarMensaje();
    }
  };

  const alertCamera = () => alert('La función de cámara estará disponible próximamente.');
  const alertImage = () => alert('La función para enviar imágenes estará disponible próximamente.');
  const alertAudio = () => alert('La función de mensajes de voz estará disponible próximamente.');

  return (
    <div className="seccion-scope seccion-82">
      <main className="telefono">
        <header className="header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px' }}>
          <Link className="btn-header" to="/58_seccion.html">
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
          <h1 style={{ fontSize: '18px', margin: 0 }}>Chat - Sebastián Gómez</h1>
          <Link className="btn-header" to="/45_seccion.html">
            <i className="fa-solid fa-house"></i>
          </Link>
        </header>

        <main className="chat" ref={chatRef} style={{ flex: 1, padding: '15px', overflowY: 'auto' }}>
          {mensajes.map((m, idx) => (
            <div key={idx} className={`mensaje ${m.tipo}`}>
              {m.texto}
            </div>
          ))}
        </main>

        <footer className="footer" style={{ display: 'flex', gap: '8px', padding: '10px', alignItems: 'center' }}>
          <button type="button" className="icono" onClick={alertCamera} title="Cámara">
            <i className="fa-solid fa-camera"></i>
          </button>
          <button type="button" className="icono" onClick={alertImage} title="Enviar imagen">
            <i className="fa-regular fa-image"></i>
          </button>
          <button type="button" className="icono" onClick={alertAudio} title="Mensaje de voz">
            <i className="fa-solid fa-microphone"></i>
          </button>
          <input
            type="text"
            id="mensajeInput"
            placeholder="Escribe un mensaje..."
            autoComplete="off"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{ flex: 1 }}
          />
          <button type="button" className="enviar" onClick={enviarMensaje} title="Enviar mensaje">
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </footer>
      </main>
    </div>
  );
}
