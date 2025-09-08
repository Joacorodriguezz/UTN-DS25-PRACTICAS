import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es requerido';
    if (!formData.email.trim()) newErrors.email = 'El email es requerido';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'El email no es válido';
    if (!formData.asunto.trim()) newErrors.asunto = 'El asunto es requerido';
    if (!formData.mensaje.trim()) newErrors.mensaje = 'El mensaje es requerido';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('¡Mensaje enviado exitosamente!');
      console.log('Datos del formulario:', formData);
      setFormData({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' });
    }
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1>Contacto</h1>
          <p>Estamos aquí para ayudarte. Contáctanos para cualquier consulta sobre nuestros libros.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Información de Contacto</h2>
            <div className="info-section">
              <h3>📍 Dirección</h3>
              <p>Av. Corrientes 1234<br />Buenos Aires, Argentina<br />Código Postal: 1043</p>
            </div>
            <div className="info-section">
              <h3>📞 Teléfonos</h3>
              <p>Teléfono: +54 11 1234-5678<br />WhatsApp: +54 9 11 1234-5678<br />Fax: +54 11 1234-5679</p>
            </div>
            <div className="info-section">
              <h3>📧 Email</h3>
              <p>info@librerialucianolollo.com<br />ventas@librerialucianolollo.com<br />soporte@librerialucianolollo.com</p>
            </div>
            <div className="info-section">
              <h3>🕒 Horarios de Atención</h3>
              <p>Lunes a Viernes: 9:00 - 20:00<br />Sábados: 9:00 - 18:00<br />Domingos: 10:00 - 16:00</p>
            </div>
            <div className="info-section">
              <h3>🌐 Redes Sociales</h3>
              <div className="social-links">
                <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>Envíanos un Mensaje</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre *</label>
                  <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} className={errors.nombre ? 'error' : ''} placeholder="Tu nombre completo" />
                  {errors.nombre && <span className="error-message">{errors.nombre}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={errors.email ? 'error' : ''} placeholder="tu@email.com" />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="+54 9 11 1234-5678" />
              </div>
              <div className="form-group">
                <label htmlFor="asunto">Asunto *</label>
                <select id="asunto" name="asunto" value={formData.asunto} onChange={handleChange} className={errors.asunto ? 'error' : ''}>
                  <option value="">Selecciona un asunto</option>
                  <option value="consulta-general">Consulta General</option>
                  <option value="pedido-libro">Pedido de Libro</option>
                  <option value="devolucion">Devolución</option>
                  <option value="sugerencia">Sugerencia</option>
                  <option value="queja">Queja</option>
                  <option value="otro">Otro</option>
                </select>
                {errors.asunto && <span className="error-message">{errors.asunto}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="mensaje">Mensaje *</label>
                <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange} className={errors.mensaje ? 'error' : ''} placeholder="Escribe tu mensaje aquí..." rows="5"></textarea>
                {errors.mensaje && <span className="error-message">{errors.mensaje}</span>}
              </div>
              <button type="submit" className="submit-button">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

