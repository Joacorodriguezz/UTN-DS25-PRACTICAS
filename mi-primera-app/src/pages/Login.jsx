import React, { useState } from 'react';
import '../styles/registration.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = 'El email es requerido';
    if (!formData.password) newErrors.password = 'La contraseña es requerida';
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert('Inicio de sesión enviado');
      console.log('Login:', formData);
    }
  };

  return (
    <div className="registration-page">
      <div className="container">
        <div className="registration-header">
          <h1>Iniciar sesión</h1>
          <p>Accede a tu cuenta para continuar</p>
        </div>
        <div className="registration-form-container">
          <form className="registration-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={errors.email ? 'error' : ''} placeholder="tu@email.com" />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className={errors.password ? 'error' : ''} placeholder="Tu contraseña" />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>
            <button type="submit" className="submit-button">Ingresar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

