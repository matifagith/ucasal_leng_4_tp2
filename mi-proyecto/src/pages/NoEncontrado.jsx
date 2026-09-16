const NoEncontrado = () => {
  return (
    <div className="alert alert-danger text-center mt-5">
      <h1 className="display-1 fw-bold">404</h1>
      <h2>Página no encontrada</h2>
      <p>La ruta a la que intentas acceder no existe en este sitio.</p>
    </div>
  );
};

export default NoEncontrado;