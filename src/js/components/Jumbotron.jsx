import fotoCarrusel from "../../img/foto-carrusel.jpg";

export const Jumbotron = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner rounded-2">
        <div className="carousel-item active">
          <img
            src="https://cadenaser.com/resizer/v2/CF43IHJNBROKFDQEBJNKUROGWQ.jpg?auth=5ac17892306205c680042412d037c1d6f8d36fcf93b8d6ab11748fcd9c8b1680"
            className="d-block w-100 imagenCarrusel"
            alt="imagen 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://fotografias.antena3.com/clipping/cmsimages01/2018/06/13/2AA767EF-798D-4BDB-9B7B-9D1AFF1A9C1B/98.jpg?crop=1036,583,x23,y0&width=1900&height=1069&optimize=high&format=webply"
            className="d-block w-100 imagenCarrusel"
            alt="imagen 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.blogs.es/d68506/vengadores_poster-espanol_650/450_1000.jpg"
            className="d-block w-100 imagenCarrusel"
            alt="imagen 3"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
