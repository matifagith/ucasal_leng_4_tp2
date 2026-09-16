import { NavLink } from 'react-router-dom';

const Encabezado = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container">
          <span className="navbar-brand">React + Vite</span>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => isActive ? "nav-link text-danger fw-bold" : "nav-link"}
                >
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/servicios" 
                  className={({ isActive }) => isActive ? "nav-link text-danger fw-bold" : "nav-link"}
                >
                  Servicios
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/contacto" 
                  className={({ isActive }) => isActive ? "nav-link text-danger fw-bold" : "nav-link"}
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