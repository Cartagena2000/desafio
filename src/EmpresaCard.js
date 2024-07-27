import React from "react";
import "./EmpresaCard.css";

const EmpresaCard = ({
  titulo,
  descripcion,
  caracteristicas,
  imagen_de_referencia,
}) => {
  // Desestructuramos las características del objeto
  const { fecha, impacto } = caracteristicas;

  return (
    <div className="empresa-card">
      <div className="empresa-card__contenido">
        <h2 className="empresa-card__titulo">{titulo}</h2>
        <h4 className="empresa-card__subtitulo">DESCRIPCIÓN</h4>
        <p className="empresa-card__descripcion">{descripcion}</p>
        <h4 className="empresa-card__subtitulo">CARACTERÍSTICAS</h4>
        <ul className="empresa-card__caracteristicas">
          <li>
            <strong>Fecha:</strong> {fecha}
          </li>
          <li>
            <strong>Impacto:</strong> {impacto}
          </li>
        </ul>
      </div>
      <img
        src={imagen_de_referencia}
        alt={titulo}
        className="empresa-card__imagen"
      />
    </div>
  );
};

export default EmpresaCard;
