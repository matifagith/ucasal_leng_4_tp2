import { Link } from 'react-router-dom';

const NoEncontrado = () => {
  return (
    <div className="d-flex justify-content-center align-items-center py-5">
      <div
        className="card border-0 text-center p-5 mx-auto transition-hover"
        style={{
          borderRadius: '16px',
          boxShadow: '0 8px 25px rgba(76, 29, 149, 0.12)',
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(10px)',
          maxWidth: '550px'
        }}
      >
        <span className="display-1 fw-bold text-danger mb-2" style={{ textShadow: '0 2px 4px rgba(220, 53, 69, 0.15)' }}>
          404
        </span>
        <h2 className="fw-bold text-dark mb-3">Página no encontrada</h2>
        <p className="text-secondary mb-4">
          La ruta a la que intentas acceder no existe en este sitio.
        </p>
        <div>
          <Link to="/" className="btn btn-primary rounded-pill px-4 py-2 fw-semibold shadow-sm">
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoEncontrado;