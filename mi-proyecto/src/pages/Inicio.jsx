import { useState, useEffect } from 'react';
import axios from 'axios';

const Inicio = () => {
  const [pokemons, setPokemons] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerPokemons = async () => {
      try {
        setCargando(true);
        setError(null);

        const respuesta = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=12');
        const resultados = respuesta.data.results;

        const peticionesDetalles = resultados.map((pokemon) => axios.get(pokemon.url));
        const respuestasDetalles = await Promise.all(peticionesDetalles);

        const listaDetallada = respuestasDetalles.map((res) => res.data);

        setPokemons(listaDetallada);
      } catch (err) {
        console.error('Error al consultar la PokéAPI:', err);
        setError('No se pudieron cargar los Pokémon. Por favor, reintenta más tarde.');
      } finally {
        setCargando(false);
      }
    };

    obtenerPokemons();
  }, []);

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
          className="display-5 fw-bold text-primary mb-2"
          style={{ textShadow: '0 2px 4px rgba(13, 110, 253, 0.12)' }}
        >
          Página de Inicio
        </h1>
        <p className="lead text-secondary mb-0">
          Datos consumidos desde la{' '}
          <a
            href="https://pokeapi.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="fw-bold text-decoration-none"
          >
            PokéAPI
          </a>
          .
        </p>
      </div>

      {cargando && (
        <div className="text-center my-5 py-5">
          <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="mt-3 text-muted fw-semibold">Cargando datos de la PokéAPI...</p>
        </div>
      )}

      {error && (
        <div className="alert alert-danger text-center shadow-sm" role="alert">
          {error}
        </div>
      )}

      {!cargando && !error && (
        <div className="row g-4">
          {pokemons.map((pokemon) => {
            const { id, name, sprites, types, height, weight, base_experience } = pokemon;

            const spriteUrl =
              sprites.other?.['official-artwork']?.front_default ||
              sprites.front_default ||
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png';

            return (
              <div key={id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div
                  className="card h-100 border-0 text-center transition-hover overflow-hidden"
                  style={{
                    borderRadius: '16px',
                    boxShadow: '0 8px 25px rgba(76, 29, 149, 0.12)',
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div className="bg-light p-3 d-flex justify-content-center align-items-center" style={{ minHeight: '180px' }}>
                    <img
                      src={spriteUrl}
                      alt={`Sprite de ${name}`}
                      className="img-fluid"
                      style={{ maxHeight: '140px', objectFit: 'contain' }}
                      loading="lazy"
                    />
                  </div>

                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <span className="badge bg-secondary mb-2">#{String(id).padStart(3, '0')}</span>
                      <h5 className="card-title text-capitalize fw-bold mb-3">{name}</h5>

                      <div className="mb-3">
                        <span className="text-muted small d-block mb-1">Tipo(s):</span>
                        <div className="d-flex flex-wrap justify-content-center gap-1">
                          {types.map((t) => (
                            <span key={t.type.name} className="badge bg-primary text-uppercase">
                              {t.type.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="border-top pt-2 mt-2 text-start small">
                      <div className="d-flex justify-content-between mb-1">
                        <span className="text-muted">Altura:</span>
                        <span className="fw-semibold">{(height / 10).toFixed(1)} m</span>
                      </div>
                      <div className="d-flex justify-content-between mb-1">
                        <span className="text-muted">Peso:</span>
                        <span className="fw-semibold">{(weight / 10).toFixed(1)} kg</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span className="text-muted">Exp. Base:</span>
                        <span className="fw-semibold">{base_experience} XP</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Inicio;