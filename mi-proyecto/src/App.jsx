import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Encabezado from './components/Encabezado';
import PieDePagina from './components/PieDePagina';
import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';
import NoEncontrado from './pages/NoEncontrado';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="d-flex flex-column min-vh-100">
        <Encabezado />

        <div
          className="flex-grow-1 w-100 d-flex flex-column"
          style={{
            background:
              'linear-gradient(180deg, #7c3aed 0%, #905cf2 5%, #b790fa 12%, #d8b4fe 22%, #f3ebfa 35%, #ffffff 50%, #f3ebfa 65%, #d8b4fe 78%, #b790fa 88%, #905cf2 95%, #7c3aed 100%)'
          }}
        >
          <main className="container py-4 flex-grow-1">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="*" element={<NoEncontrado />} /> 
            </Routes>
          </main>
        </div>

        <PieDePagina />
      </div>
    </BrowserRouter>
  );
}

export default App;