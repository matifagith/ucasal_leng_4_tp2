import FormularioContacto from '../components/FormularioContacto';

const Contacto = () => {
  return (
    <div className="pb-5">
      <div className="text-center mb-4">
        <h1 className="display-4 text-warning">Página de Contacto</h1>
        <p className="lead text-secondary">

        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <FormularioContacto />
        </div>
      </div>
    </div>
  );
};

export default Contacto;
