import React from "react";
import "./EmpresaCard.css";

const EmpresaCard = ({ titulo, descripcion, caracteristicas, imagen }) => {
  return (
    <div className="empresa-card">
      <div className="empresa-card__contenido">
        <h2 className="empresa-card__titulo">{titulo}</h2>
        <h4 className="empresa-card__subtitulo">DESCRIPCIÓN</h4>
        <p className="empresa-card__descripcion">{descripcion}</p>
        <h4 className="empresa-card__subtitulo">CARACTERÍSTICAS</h4>
        <p className="empresa-card__caracteristicas">{caracteristicas}</p>
      </div>
      <img src={imagen} alt={titulo} className="empresa-card__imagen" />
    </div>
  );
};

export default EmpresaCard;
