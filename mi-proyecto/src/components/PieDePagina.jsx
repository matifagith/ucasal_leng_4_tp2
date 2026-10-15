const PieDePagina = () => {
  return (
    <footer
      className="py-3 mt-auto text-center"
      style={{
        background: 'linear-gradient(180deg, #7c3aed 0%, #4c1d95 100%)',
        boxShadow: '0 -4px 15px rgba(76, 29, 149, 0.25)',
        borderTop: 'none'
      }}
    >
      <div className="container">
        <p className="text-white text-opacity-90 small mb-0 fw-medium">
          Trabajo Práctico - Lenguajes 4 - UCASAL 2026
        </p>
      </div>
    </footer>
  );
};

export default PieDePagina;