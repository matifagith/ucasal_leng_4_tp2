import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Encabezado from './components/Encabezado';
import PieDePagina from './components/PieDePagina';
import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';
import NoEncontrado from './pages/NoEncontrado';

function App() {
  return (
    // ¡Aquí agregamos el basename para que funcione en GitHub Pages!
    <BrowserRouter basename="/ucasal_leng_4_tp2/">
      <div className="d-flex flex-column min-vh-100">
        <Encabezado />
        
        {/* Contenedor principal de las páginas */}
        <main className="container mt-5 flex-grow-1">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
            {/* Ruta 404 explicada en clase */}
            <Route path="*" element={<NoEncontrado />} /> 
          </Routes>
        </main>

        <PieDePagina />
      </div>
    </BrowserRouter>
  );
}

export default App;