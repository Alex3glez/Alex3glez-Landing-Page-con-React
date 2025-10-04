import rigoImage from "../../img/rigo-baby.jpg";

export const Card = ({ nombre, imagen, descripcion, boton }) => {
  return (
    <div className="card m-0 p-0" style={{ width: "18rem" }}>
      <div className="w-100 ratio ratio-1x1 ">
        <img src={imagen} className="object-fit-cover rounded-top" alt="..." />
      </div>
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{descripcion}</p>
        <a href="#" className="btn btn-primary">
          {boton}
        </a>
      </div>
    </div>
  );
};
