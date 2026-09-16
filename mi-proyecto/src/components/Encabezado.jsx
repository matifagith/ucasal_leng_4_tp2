import { NavLink } from 'react-router-dom';

const Encabezado = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container">
          <span className="navbar-brand">Sitio TP2</span>
          
          {/* Botón hamburguesa visible solo en móviles */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="offcanvas" 
            data-bs-target="#menuLateral" 
            aria-controls="menuLateral"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menú lateral (Offcanvas) */}
          <div 
            className="offcanvas offcanvas-end text-bg-dark" 
            tabIndex="-1" 
            id="menuLateral" 
            aria-labelledby="menuLateralLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="menuLateralLabel">Navegación</h5>
              <button 
                type="button" 
                className="btn-close btn-close-white" 
                data-bs-dismiss="offcanvas" 
                aria-label="Cerrar"
              ></button>
            </div>
            
            <div className="offcanvas-body">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? "nav-link text-danger fw-bold" : "nav-link"}
                    data-bs-dismiss="offcanvas"
                  >
                    Inicio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink 
                    to="/servicios" 
                    className={({ isActive }) => isActive ? "nav-link text-danger fw-bold" : "nav-link"}
                    data-bs-dismiss="offcanvas"
                  >
                    Servicios
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink 
                    to="/contacto" 
                    className={({ isActive }) => isActive ? "nav-link text-danger fw-bold" : "nav-link"}
                    data-bs-dismiss="offcanvas"
                  >
                    Contacto
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Encabezado;