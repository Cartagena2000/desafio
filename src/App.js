import React from "react";
import EmpresaCard from "./EmpresaCard";

const datos = {
  "crisis_economicas": [
    {
      "titulo": "Crisis del Petróleo de 1973",
      "descripcion": "El embargo petrolero por parte de la OPEP llevó a una gran escasez de petróleo y un aumento en los precios, causando recesiones en muchos países occidentales.",
      "caracteristicas": {
        "fecha": "1973-1974",
        "impacto": "Aumento masivo de los precios del petróleo, inflación, y recesiones económicas en Estados Unidos y Europa."
      },
      "imagen_de_referencia": "https://upload.wikimedia.org/wikipedia/commons/9/99/U.S._gas_rationing_stamps_1974.jpg"
    },
    {
      "titulo": "Crisis de la Deuda Latinoamericana",
      "descripcion": "Muchos países de América Latina se endeudaron masivamente en los años 70 y no pudieron pagar sus deudas en los 80.",
      "caracteristicas": {
        "fecha": "1980s",
        "impacto": "Decenas de países en América Latina entraron en recesión, lo que llevó a una década de estancamiento económico conocido como la 'década perdida'."
      },
      "imagen_de_referencia": "https://upload.wikimedia.org/wikipedia/commons/6/62/Latin_America_regions.svg"
    },
    {
      "titulo": "Lunes Negro",
      "descripcion": "El 19 de octubre de 1987, los mercados bursátiles de todo el mundo se desplomaron, con una caída del 22% en el Dow Jones.",
      "caracteristicas": {
        "fecha": "1987",
        "impacto": "Pérdidas masivas en los mercados financieros globales, aunque la economía se recuperó relativamente rápido."
      },
      "imagen_de_referencia": "https://upload.wikimedia.org/wikipedia/commons/a/af/Black_Monday_Dow_Jones.svg"
    },
    {
      "titulo": "Crisis Financiera Asiática",
      "descripcion": "Comenzó en Tailandia con el colapso del baht y se extendió a otros países de Asia, causando devaluaciones de divisas y quiebras masivas.",
      "caracteristicas": {
        "fecha": "1997",
        "impacto": "Recesiones severas en varios países asiáticos y pánico financiero global."
      },
      "imagen_de_referencia": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Asian_Financial_Crisis_EN_vector.svg"
    },
    {
      "titulo": "Crisis de las Punto Com",
      "descripcion": "La burbuja de las empresas de tecnología y de Internet estalló en marzo de 2000, causando la caída de muchas compañías y pérdidas en el mercado de valores.",
      "caracteristicas": {
        "fecha": "2000-2002",
        "impacto": "Caída significativa en los mercados bursátiles y la quiebra de muchas empresas tecnológicas."
      },
      "imagen_de_referencia": "https://upload.wikimedia.org/wikipedia/commons/5/50/US_VC_funding.png"
    },
    {
      "titulo": "Crisis Financiera Global de 2008",
      "descripcion": "Causada por la burbuja inmobiliaria en Estados Unidos y la posterior crisis de las hipotecas subprime, llevando a la quiebra de Lehman Brothers y una recesión global.",
      "caracteristicas": {
        "fecha": "2008-2009",
        "impacto": "Recesión global, rescates bancarios masivos y reformas financieras importantes."
      },
      "imagen_de_referencia": "https://upload.wikimedia.org/wikipedia/commons/9/92/TED_Spread.png"
    },
    {
      "titulo": "Crisis de la Deuda Soberana Europea",
      "descripcion": "Varios países de la Eurozona, especialmente Grecia, enfrentaron grandes crisis de deuda que amenazaron la estabilidad del euro.",
      "caracteristicas": {
        "fecha": "2010-2012",
        "impacto": "Austeridad severa en muchos países europeos, rescates financieros y tensiones políticas."
      },
      "imagen_de_referencia": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Long-term_interest_rates_%28eurozone%29.png"
    },
    {
      "titulo": "Crisis del Peso Argentino",
      "descripcion": "Argentina entró en una profunda crisis económica en 2001, con una devaluación masiva del peso, default de deuda y disturbios sociales.",
      "caracteristicas": {
        "fecha": "2001-2002",
        "impacto": "Colapso económico, alta inflación y una crisis social significativa."
      },
      "imagen_de_referencia": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Buenos_Aires_-_Manifestaci%C3%B3n_contra_el_Corralito_-_20020206-04.JPG"
    },
    {
      "titulo": "Crisis del Real Brasileño",
      "descripcion": "Brasil enfrentó una crisis financiera en 1999 cuando la especulación contra su moneda llevó a una devaluación y a un acuerdo de rescate con el FMI.",
      "caracteristicas": {
        "fecha": "1998-1999",
        "impacto": "Devaluación del real, inflación y desaceleración económica."
      },
      "imagen_de_referencia": "https://es.wikipedia.org/wiki/Crisis_de_Brasil_de_1999#/media/Archivo:Cotizacion_USD-BRL.png"
    },
    {
      "titulo": "Crisis Económica de Venezuela",
      "descripcion": "Debido a políticas económicas fallidas, corrupción y colapso de los precios del petróleo, Venezuela ha enfrentado una crisis económica y humanitaria severa.",
      "caracteristicas": {
        "fecha": "2010s-2020s",
        "impacto": "Hiperinflación, escasez de productos básicos, emigración masiva y colapso económico."
      },
      "imagen_de_referencia": "https://es.wikipedia.org/wiki/Crisis_en_Venezuela#/media/Archivo:%C2%A9UNICEF-ECU-2018-Arcos.jpg"
    }
  ]
};

function App() {
  return (
    <div className="App">
      <h1 className="descripcion-h1">Crisis Económicas Globales</h1>
      <div className="empresa-lista">
        {datos.crisis_economicas.map((crisis, index) => (
          <EmpresaCard
            key={index}
            titulo={crisis.titulo}
            descripcion={crisis.descripcion}
            caracteristicas={crisis.caracteristicas}
            imagen_de_referencia={crisis.imagen_de_referencia} // Asegúrate de que coincida
          />
        ))}
      </div>
    </div>
  );
}

export default App;
