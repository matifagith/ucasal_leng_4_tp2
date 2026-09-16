import { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Offcanvas } from 'bootstrap';

const Encabezado = () => {
  const offcanvasRef = useRef(null);
  const bsOffcanvasRef = useRef(null);

  useEffect(() => {
    if (offcanvasRef.current) {
      bsOffcanvasRef.current = Offcanvas.getOrCreateInstance(offcanvasRef.current);
    }
  }, []);

  const cerrarMenu = () => {
    if (bsOffcanvasRef.current) {
      bsOffcanvasRef.current.hide();
    }
    // Limpieza de seguridad por si queda el backdrop en el DOM tras la navegación en React
    setTimeout(() => {
      const backdrops = document.querySelectorAll('.offcanvas-backdrop, .modal-backdrop');
      backdrops.forEach(backdrop => backdrop.remove());
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }, 150);
  };

  const alternarMenu = (e) => {
    e.preventDefault();
    if (bsOffcanvasRef.current) {
      bsOffcanvasRef.current.toggle();
    }
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container">
          <NavLink to="/" className="navbar-brand" onClick={cerrarMenu}>React + Vite</NavLink>
          
          {/* 1. Botón "hamburguesa" controlado por script en React */}
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={alternarMenu}
            aria-controls="menuLateral"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* 2. Contenedor del menú lateral (Offcanvas en móvil, navbar en desktop) */}
          <div 
            ref={offcanvasRef}
            className="offcanvas-lg offcanvas-end text-bg-dark" 
            tabIndex="-1" 
            id="menuLateral" 
            aria-labelledby="menuLateralLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="menuLateralLabel">Menú</h5>
              <button 
                type="button" 
                className="btn-close btn-close-white" 
                onClick={cerrarMenu}
                aria-label="Cerrar"
              ></button>
            </div>
            
            <div className="offcanvas-body">
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
        </div>
      </nav>
    </header>
  );
};

export default Encabezado;