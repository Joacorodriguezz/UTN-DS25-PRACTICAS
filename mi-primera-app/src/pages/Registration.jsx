import React, { useState } from 'react';
import '../styles/registration.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    nombre: '', apellido: '', fechaNacimiento: '', email: '', password: '', sexo: '', temaFavorito: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es requerido';
    if (!formData.apellido.trim()) newErrors.apellido = 'El apellido es requerido';
    if (!formData.fechaNacimiento) newErrors.fechaNacimiento = 'La fecha de nacimiento es requerida';
    if (!formData.email.trim()) newErrors.email = 'El email es requerido';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'El email no es válido';
    if (!formData.password) newErrors.password = 'La contraseña es requerida';
    else if (formData.password.length < 6) newErrors.password = 'Mínimo 6 caracteres';
    if (!formData.sexo) newErrors.sexo = 'Debe seleccionar su sexo';
    if (!formData.temaFavorito) newErrors.temaFavorito = 'Debe seleccionar su tema favorito';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('¡Registro exitoso!');
      console.log('Datos del formulario:', formData);
    }
  };

  return (
    <div className="registration-page">
      <div className="container">
        <div className="registration-header">
          <h1>Registro de Usuario</h1>
          <p>Únete a nuestra comunidad de lectores y accede a ofertas exclusivas</p>
        </div>
        <div className="registration-form-container">
          <form className="registration-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nombre">Nombre *</label>
                <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} className={errors.nombre ? 'error' : ''} placeholder="Ingresa tu nombre" />
                {errors.nombre && <span className="error-message">{errors.nombre}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="apellido">Apellido *</label>
                <input type="text" id="apellido" name="apellido" value={formData.apellido} onChange={handleChange} className={errors.apellido ? 'error' : ''} placeholder="Ingresa tu apellido" />
                {errors.apellido && <span className="error-message">{errors.apellido}</span>}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="fechaNacimiento">Fecha de Nacimiento *</label>
              <input type="date" id="fechaNacimiento" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} className={errors.fechaNacimiento ? 'error' : ''} />
              {errors.fechaNacimiento && <span className="error-message">{errors.fechaNacimiento}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={errors.email ? 'error' : ''} placeholder="tu@email.com" />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña *</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className={errors.password ? 'error' : ''} placeholder="Mínimo 6 caracteres" />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>
            <div className="form-group">
              <label>Sexo *</label>
              <div className="radio-group">
                <label className="radio-label"><input type="radio" name="sexo" value="masculino" checked={formData.sexo === 'masculino'} onChange={handleChange} /><span>Masculino</span></label>
                <label className="radio-label"><input type="radio" name="sexo" value="femenino" checked={formData.sexo === 'femenino'} onChange={handleChange} /><span>Femenino</span></label>
                <label className="radio-label"><input type="radio" name="sexo" value="otro" checked={formData.sexo === 'otro'} onChange={handleChange} /><span>Otro</span></label>
              </div>
              {errors.sexo && <span className="error-message">{errors.sexo}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="temaFavorito">Tema Favorito *</label>
              <select id="temaFavorito" name="temaFavorito" value={formData.temaFavorito} onChange={handleChange} className={errors.temaFavorito ? 'error' : ''}>
                <option value="">Selecciona tu tema favorito</option>
                <option value="ficcion">Ficción</option>
                <option value="ciencia-ficcion">Ciencia Ficción</option>
                <option value="misterio">Misterio</option>
                <option value="romance">Romance</option>
              </select>
              {errors.temaFavorito && <span className="error-message">{errors.temaFavorito}</span>}
            </div>
            <button type="submit" className="submit-button">Registrarse</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;

