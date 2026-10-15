const Servicios = () => {
  const tecnologias = [
    {
      id: 1,
      titulo: 'React',
      descripcion:
        'Librería declarativa basada en componentes utilizada para estructurar la interfaz de usuario, gestionar el estado con Hooks y renderizar vistas interactivas.',
      nivel: 'Avanzado',
      imagenUrl:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
      webUrl: 'https://react.dev'
    },
    {
      id: 2,
      titulo: 'Vite',
      descripcion:
        'Entorno de desarrollo rápido y empaquetador moderno que provee Hot Module Replacement (HMR) y compila la versión optimizada para producción.',
      nivel: 'Avanzado',
      imagenUrl:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg',
      webUrl: 'https://vite.dev'
    },
    {
      id: 3,
      titulo: 'React Router',
      descripcion:
        'Librería de enrutamiento del lado del cliente (SPA) que gestiona la navegación entre Inicio, Servicios y Contacto sin recargar la página.',
      nivel: 'Avanzado',
      imagenUrl:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/reactrouter/reactrouter-original.svg',
      webUrl: 'https://reactrouter.com'
    },
    {
      id: 4,
      titulo: 'Bootstrap 5',
      descripcion:
        'Framework CSS utilizado para estructurar el diseño responsivo mediante sistemas de grillas (grid), tarjetas, barras de navegación y utilidades de estilo.',
      nivel: 'Avanzado',
      imagenUrl:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg',
      webUrl: 'https://getbootstrap.com'
    },
    {
      id: 5,
      titulo: 'Axios',
      descripcion:
        'Cliente HTTP basado en promesas implementado para consultar de forma asíncrona la PokéAPI y resolver múltiples peticiones concurrentes con Promise.all.',
      nivel: 'Avanzado',
      imagenUrl:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/axios/axios-plain.svg',
      webUrl: 'https://axios-http.com'
    },
    {
      id: 6,
      titulo: 'Node.js',
      descripcion:
        'Entorno de ejecución multiplataforma utilizado para gestionar las dependencias del proyecto mediante npm y ejecutar los scripts de compilación.',
      nivel: 'Intermedio',
      imagenUrl:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
      webUrl: 'https://nodejs.org'
    }
  ];

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
          className="display-5 fw-bold text-success mb-2"
          style={{ textShadow: '0 2px 4px rgba(25, 135, 84, 0.12)' }}
        >
          Página de Servicios
        </h1>
        <p className="lead text-secondary mb-0">
          Listado de tecnologias utilizadas en el proyecto.
        </p>
      </div>

      <div className="row g-4">
        {tecnologias.map(({ id, titulo, descripcion, nivel, imagenUrl, webUrl }) => (
          <div key={id} className="col-12 col-md-6 col-lg-4">
            <div
              className="card h-100 border-0 d-flex flex-column justify-content-between p-4 transition-hover overflow-hidden"
              style={{
                borderRadius: '16px',
                boxShadow: '0 8px 25px rgba(76, 29, 149, 0.12)',
                backgroundColor: 'rgba(255, 255, 255, 0.92)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div>
                <a
                  href={webUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex justify-content-center align-items-center bg-light rounded py-4 mb-3 text-decoration-none"
                  style={{ minHeight: '120px', cursor: 'pointer' }}
                  title={`Visitar sitio web oficial de ${titulo}`}
                >
                  <img
                    src={imagenUrl}
                    alt={`Logo de ${titulo}`}
                    style={{ width: '70px', height: '70px', objectFit: 'contain' }}
                    loading="lazy"
                  />
                </a>

                <div className="mb-2">
                  <h4 className="card-title fw-bold mb-0">
                    <a
                      href={webUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark text-decoration-none"
                      title={`Visitar sitio web oficial de ${titulo}`}
                    >
                      {titulo}
                    </a>
                  </h4>
                </div>

                <p className="card-text text-muted small mt-2">
                  {descripcion}
                </p>
              </div>

              <div className="border-top pt-3 mt-3 d-flex justify-content-between align-items-center text-muted small">
                <span>Identificador: #{id} &bull; Nivel: {nivel}</span>
                <span className="text-success fw-semibold">En uso</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;