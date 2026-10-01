import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import emailjs from "@emailjs/browser";

const FormularioContacto = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      nombre: '',
      email: '',
      mensaje: ''
    }
  });

  // Contador dinámico de caracteres utilizando useWatch
  const mensajeTexto = useWatch({ control, name: 'mensaje' }) || '';
  const contadorCaracteres = mensajeTexto.length;

  const onSubmit = async (data) => {
    setSubmitSuccess(false);
    setSubmitError('');

    // Credenciales obtenidas mediante variables de entorno
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          nombre: data.nombre,
          email: data.email,
          mensaje: data.mensaje
        },
        PUBLIC_KEY
      );
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error('Error al enviar el email mediante EmailJS:', error);
      setSubmitError('Ocurrió un error al enviar el mensaje. Por favor, intenta de nuevo.');
    }
  };

  return (
    <div className="card shadow-sm border-0 p-4 text-start">
      {/* <h2 className="h4 text-warning fw-bold mb-3">Envíanos una consulta</h2> */}

      {submitSuccess && (
        <div className="alert alert-success alert-dismissible fade show mb-3" role="alert">
          ¡Mensaje enviado con éxito!
          <button
            type="button"
            className="btn-close"
            onClick={() => setSubmitSuccess(false)}
            aria-label="Cerrar"
          ></button>
        </div>
      )}

      {submitError && (
        <div className="alert alert-danger alert-dismissible fade show mb-3" role="alert">
          {submitError}
          <button
            type="button"
            className="btn-close"
            onClick={() => setSubmitError('')}
            aria-label="Cerrar"
          ></button>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Campo Nombre y Apellido */}
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label text-dark fw-semibold">
            Nombre y Apellido <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            id="nombre"
            className="form-control"
            placeholder="Ej. Juan Pérez"
            {...register('nombre', {
              required: 'El Nombre y Apellido son obligatorios.',
              minLength: {
                value: 3,
                message: 'El nombre debe contener al menos 3 caracteres.'
              }
            })}
          />
          {errors.nombre && (
            <p className="text-danger small mt-1 mb-0">{errors.nombre.message}</p>
          )}
        </div>

        {/* Campo Correo Electrónico */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label text-dark fw-semibold">
            Correo Electrónico <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="ejemplo@correo.com"
            {...register('email', {
              required: 'El correo electrónico es obligatorio.',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Por favor, ingresa un correo electrónico válido.'
              }
            })}
          />
          {errors.email && (
            <p className="text-danger small mt-1 mb-0">{errors.email.message}</p>
          )}
        </div>

        {/* Campo Mensaje */}
        <div className="mb-3">
          <div className="d-flex justify-content-between align-items-center mb-1">
            <label htmlFor="mensaje" className="form-label text-dark fw-semibold mb-0">
              Mensaje <span className="text-danger">*</span>
            </label>
            <span className={`small ${contadorCaracteres > 300 ? 'text-danger fw-bold' : 'text-muted'}`}>
              {contadorCaracteres} / 300
            </span>
          </div>
          <textarea
            id="mensaje"
            rows="4"
            className="form-control"
            placeholder="Escribe tu mensaje aquí..."
            {...register('mensaje', {
              required: 'El mensaje no puede estar vacío.',
              validate: (value) =>
                (value && value.length > 300)
                  ? `El límite permitido es 300 caracteres. Cantidad actual: ${value.length}.`
                  : true
            })}
          ></textarea>
          {errors.mensaje && (
            <p className="text-danger small mt-1 mb-0">{errors.mensaje.message}</p>
          )}
        </div>

        {/* Botón de Envío */}
        <div className="mt-4">
          <button
            type="submit"
            className="btn btn-warning w-100 border-0 fw-bold text-dark py-2 shadow-sm"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Enviando...
              </>
            ) : (
              'Enviar Mensaje'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioContacto;
