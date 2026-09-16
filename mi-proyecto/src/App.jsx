import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Encabezado from './components/Encabezado';
import PieDePagina from './components/PieDePagina';
import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';
import NoEncontrado from './pages/NoEncontrado';

function App() {
  return (
    <BrowserRouter basename="/ucasal_leng_4_tp2/">
      <div className="d-flex flex-column min-vh-100">
        <Encabezado />
        <main className="container mt-5 flex-grow-1">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<NoEncontrado />} /> 
          </Routes>
        </main>

        <PieDePagina />
      </div>
    </BrowserRouter>
  );
}

export default App;