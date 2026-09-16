import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Encabezado = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const cerrarMenu = () => setIsNavCollapsed(true);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container">
          <NavLink to="/" className="navbar-brand" onClick={cerrarMenu}>
            React + Vite
          </NavLink>                  
          <button 
            className="navbar-toggler" 
            type="button" 
            aria-controls="menuPrincipal"
            aria-expanded={!isNavCollapsed ? 'true' : 'false'}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="menuPrincipal">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => isActive ? "nav-link text-danger fw-bold active" : "nav-link"}
                  onClick={cerrarMenu}
                >
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/servicios" 
                  className={({ isActive }) => isActive ? "nav-link text-danger fw-bold active" : "nav-link"}
                  onClick={cerrarMenu}
                >
                  Servicios
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/contacto" 
                  className={({ isActive }) => isActive ? "nav-link text-danger fw-bold active" : "nav-link"}
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