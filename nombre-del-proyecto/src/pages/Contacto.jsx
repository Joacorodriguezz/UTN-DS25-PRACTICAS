import "../styles/contacto.css";

function Contacto() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Formulario */}
        <div className="contact-form">
          <h2>Contáctanos</h2>
          <form>
            <div className="form-row">
              <input type="text" placeholder="Nombre" required />
              <input type="text" placeholder="Apellido" required />
            </div>
            <div className="form-row">
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Teléfono" />
            </div>
            <div className="form-row">
              <select>
                <option value="">Método de contacto preferido</option>
                <option value="email">Email</option>
                <option value="telefono">Teléfono</option>
              </select>
              <select>
                <option value="">¿Sobre qué tema nos contactás?</option>
                <option value="compras">Compras</option>
                <option value="soporte">Soporte</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <textarea placeholder="Escribí tu mensaje..." rows="5"></textarea>
            <button type="submit" className="btn-contact">Enviar</button>
          </form>
        </div>

        <div className="contact-info">
          <h3>Información de contacto</h3>
          <p><strong>Dirección:</strong> Calle Falsa 123, La Plata</p>
          <p><strong>Teléfono:</strong> +54 221 123-4567</p>
          <p><strong>Email:</strong> contacto@librerialollo.com</p>
          <div className="social-links">
            <a href="#">📘 Facebook</a>
            <a href="#">📸 Instagram</a>
            <a href="#">🐦 Twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
