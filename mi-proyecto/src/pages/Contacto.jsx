import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState('');
const [fieldErrors, setFieldErrors] = useState({});
const maxMessageLength = 300;

// Función de validación del formulario
const validate = () => {
  const errors = {};

  // Nombre: al menos dos palabras, solo letras y espacios
  if (!formData.nombre.trim()) {
    errors.nombre = 'El nombre es obligatorio.';
  } else if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(?:\s+[A-Za-zÁÉÍÓÚáéíóúÑñ]+)+$/.test(formData.nombre.trim())) {
    errors.nombre = 'Introduce nombre y apellido (solo letras).';
  }

  // Email: formato básico
  if (!formData.email.trim()) {
    errors.email = 'El correo es obligatorio.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
    errors.email = 'Introduce un correo electrónico válido.';
  }

  // Mensaje: obligatorio y máximo 300 caracteres
  if (!formData.mensaje.trim()) {
    errors.mensaje = 'El mensaje es obligatorio.';
  } else if (formData.mensaje.length > maxMessageLength) {
    errors.mensaje = `El mensaje no puede superar los ${maxMessageLength} caracteres.`;
  }

  setFieldErrors(errors);
  return Object.keys(errors).length === 0;
};

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value
  }));
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setEnviado(false);

    // Validaciones de campos
    if (!validate()) {
      setError('Corrige los errores del formulario antes de enviarlo.');
      return;
    }

    setEnviando(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          nombre: formData.nombre,
          email: formData.email,
          asunto: formData.asunto,
          mensaje: formData.mensaje
        },
        publicKey
      );

      setEnviado(true);
      setFormData({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
      });
    } catch (err) {
      console.error('Error al enviar el email:', err);
      setError('Ocurrió un error al enviar el mensaje. Por favor, intenta de nuevo.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="container py-4">
      <div
        className="card border-0 text-center mb-5 mx-auto py-4 px-3"
        style={{
          background:
            'linear-gradient(180deg, rgba(248, 249, 250, 0.95) 0%, rgba(235, 238, 242, 0.60) 65%, rgba(255, 255, 255, 0) 100%)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 25px rgba(76, 29, 149, 0.12)',
          borderRadius: '16px',
          maxWidth: '800px'
        }}
      >
        <h1
          className="display-5 fw-bold text-warning mb-0"
          style={{ textShadow: '0 2px 4px rgba(255, 193, 7, 0.20)' }}
        >
          Página de Contacto y Ubicación
        </h1>
      </div>

      <div className="row g-4 align-items-stretch">
        <div className="col-12 col-md-6">
          <div
            className="card border-0 p-4 h-100 transition-hover"
            style={{
              borderRadius: '16px',
              boxShadow: '0 8px 25px rgba(76, 29, 149, 0.12)',
              backgroundColor: 'rgba(255, 255, 255, 0.92)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <h3 className="h4 text-dark fw-bold mb-3">Envíanos un Mensaje</h3>

            {enviado && (
              <div className="alert alert-success alert-dismissible fade show mb-3" role="alert">
                ¡Gracias por comunicarte! Tu mensaje fue enviado con éxito.
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setEnviado(false)}
                  aria-label="Cerrar"
                ></button>
              </div>
            )}

            {error && (
              <div className="alert alert-danger alert-dismissible fade show mb-3" role="alert">
                {error}
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setError('')}
                  aria-label="Cerrar"
                ></button>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label fw-semibold text-dark">
                  Nombre y Apellido <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="form-control"
                  placeholder="Ej. Juan Pérez"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
{fieldErrors.nombre && <div className="text-danger mt-1">{fieldErrors.nombre}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold text-dark">
                  Correo Electrónico <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="ejemplo@correo.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
{fieldErrors.email && <div className="text-danger mt-1">{fieldErrors.email}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="asunto" className="form-label fw-semibold text-dark">
                  Asunto
                </label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  className="form-control"
                  placeholder="Motivo de tu consulta"
                  value={formData.asunto}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label fw-semibold text-dark">
                  Mensaje <span className="text-danger">*</span>
                </label>
                                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="4"
                  className="form-control"
                  placeholder="Escribe tu consulta o mensaje aquí..."
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  maxLength={maxMessageLength}
                ></textarea>
                {fieldErrors.mensaje && <div className="text-danger mt-1">{fieldErrors.mensaje}</div>}
              </div>

              <button
                type="submit"
                className="btn btn-warning w-100 fw-bold text-dark py-2 shadow-sm"
                disabled={enviando}
              >
                {enviando ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Enviando...
                  </>
                ) : (
                  'Enviar Mensaje'
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div
            className="card border-0 p-4 h-100 d-flex flex-column justify-content-between transition-hover"
            style={{
              borderRadius: '16px',
              boxShadow: '0 8px 25px rgba(76, 29, 149, 0.12)',
              backgroundColor: 'rgba(255, 255, 255, 0.92)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <div>
              <h3 className="h4 text-dark fw-bold mb-3">Ubicación</h3>
              <p className="text-muted small mb-3">
                Campus Universitario Castañares - Universidad Católica de Salta (UCASAL), Salta, Argentina.
              </p>
            </div>

            <div className="flex-grow-1 rounded overflow-hidden shadow-sm" style={{ minHeight: '340px' }}>
              <iframe
                title="Mapa de ubicación UCASAL"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.6841527376045!2d-65.41849182390885!3d-24.772036477989395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3bd97589d89%3A0x86c67b9319e71158!2sUniversidad%20Cat%C3%B3lica%20de%20Salta!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '340px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="mt-3 text-muted small">
              <strong>Dirección:</strong> Campo Castañares, A4400 Salta, Argentina.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
