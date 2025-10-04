export const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5 py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>⚡ SuperHero Cards</h5>
            <p className="text-light">
              Proyecto fan-made para mostrar a tus héroes favoritos de Marvel y
              DC. ¡Porque todos necesitamos un poco de superpoder en el día a
              día!
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Enlaces rápidos</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none text-light">
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#cardContainer"
                  className="text-decoration-none text-light"
                >
                  Nuestros Héroes
                </a>
              </li>
              <li>
                <a href="#footer" className="text-decoration-none text-light">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Síguenos</h5>
            <a
              href="https://x.com/avengers"
              target="_blank"
              rel="noreferrer"
              className="text-light me-3"
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a
              href="https://www.facebook.com/avengers/?locale=es_ES"
              target="_blank"
              rel="noreferrer"
              className="text-light me-3"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/avengers/?hl=es"
              target="_blank"
              rel="noreferrer"
              className="text-light me-3"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>

        <div className="text-center pt-3 border-top border-secondary">
          <p className="mb-0">
            © 2025 SuperHero Cards | “Con un gran poder, viene un gran footer”
            🕸️
          </p>
        </div>
      </div>
    </footer>
  );
};
