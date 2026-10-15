import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Encabezado = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const cerrarMenu = () => setIsNavCollapsed(true);

  return (
    <header className="sticky-top" style={{ zIndex: 1030 }}>
      <nav
        className="navbar navbar-expand-lg navbar-dark py-2"
        style={{
          background: 'linear-gradient(180deg, #4c1d95 0%, #7c3aed 100%)',
          boxShadow: '0 4px 15px rgba(76, 29, 149, 0.25)',
          borderBottom: 'none'
        }}
      >
        <div className="container">
          <NavLink
            to="/"
            className="navbar-brand d-flex align-items-center gap-2 fw-bold text-white text-decoration-none"
            onClick={cerrarMenu}
          >
            <span>
              React <span className="text-warning">+</span> Vite
            </span>
          </NavLink>

          <button
            className="navbar-toggler border-0 shadow-sm p-2"
            type="button"
            aria-controls="menuPrincipal"
            aria-expanded={!isNavCollapsed ? 'true' : 'false'}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="menuPrincipal">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-1 mt-3 mt-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-link px-3 py-2 rounded-pill fw-semibold transition-all ${
                      isActive
                        ? 'active bg-primary text-white shadow-sm border border-white border-opacity-50'
                        : 'text-white text-opacity-90'
                    }`
                  }
                  onClick={cerrarMenu}
                >
                  Inicio
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/servicios"
                  className={({ isActive }) =>
                    `nav-link px-3 py-2 rounded-pill fw-semibold transition-all ${
                      isActive
                        ? 'active bg-success text-white shadow-sm border border-white border-opacity-50'
                        : 'text-white text-opacity-90'
                    }`
                  }
                  onClick={cerrarMenu}
                >
                  Servicios
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/contacto"
                  className={({ isActive }) =>
                    `nav-link px-3 py-2 rounded-pill fw-semibold transition-all ${
                      isActive
                        ? 'active bg-warning text-dark shadow-sm border border-white border-opacity-50'
                        : 'text-white text-opacity-90'
                    }`
                  }
                  onClick={cerrarMenu}
                >
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Encabezado;