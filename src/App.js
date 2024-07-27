import React from "react";
import EmpresaCard from "./EmpresaCard";

const datos = {
  descripcion: "Empresas más valiosas",
  empresas: [
    {
      titulo: "Apple",
      descripcion:
        "Apple Inc. es una empresa estadounidense que diseña y produce equipos electronicos, software y servicios en linea.",
      caracteristicas:
        "Innovacion en tecnologia, marca reconocida mundialmente, productos de alta calidad.",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/1/1b/Apple_logo_grey.svg",
    },
    {
      titulo: "Microsoft Corporation",
      descripcion:
        "Microsoft Corporation es una empresa tecnologica multinacional con sede en Redmond, Washington.",
      caracteristicas:
        "Lider en software de productividad, sistemas operativos, servicios en la nube.",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    },
    {
      titulo: "Amazon.com",
      descripcion:
        "Amazon.com, Inc. es una empresa estadounidense de comercio electronico y servicios de computacion en la nube.",
      caracteristicas:
        "Lider en comercio electronico, servicios en la nube, innovacion logistica.",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      titulo: "Alphabet",
      descripcion:
        "Alphabet Inc. es una empresa multinacional estadounidense conglomerada, matriz de Google.",
      caracteristicas:
        "Dominio en busquedas en linea, publicidad digital, inteligencia artificial.",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/7/7a/Alphabet_Inc_Logo_2015.svg",
    },
    {
      titulo: "Facebook",
      descripcion:
        "Facebook, Inc. es una empresa de tecnologia y redes sociales con sede en Menlo Park, California.",
      caracteristicas:
        "Lider en redes sociales, publicidad digital, innovacion en comunicacion.",
      imagen:
        "https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg",
    },
    {
      titulo: "Tencent Holdings Ltd.",
      descripcion:
        "Tencent Holdings Ltd. es una empresa multinacional china de tecnologia y entretenimiento.",
      caracteristicas:
        "Lider en servicios de internet, videojuegos, redes sociales.",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/Tencent_logo_2017.svg",
    },
    {
      titulo: "Alibaba Group Holding Limited",
      descripcion:
        "Alibaba Group es una empresa china de comercio electronico y tecnologia.",
      caracteristicas:
        "Lider en comercio electronico, servicios en la nube, pagos en linea.",
      imagen:
        "https://upload.wikimedia.org/wikipedia/en/8/80/Alibaba-Group-Logo.svg",
    },
    {
      titulo: "Berkshire Hathaway",
      descripcion:
        "Berkshire Hathaway Inc. es un holding multinacional estadounidense con sede en Omaha, Nebraska.",
      caracteristicas:
        "Diversificacion en inversiones, liderazgo en seguros, gestion financiera.",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/6/6e/Berkshire-Hathaway-Logo.svg",
    },
    {
      titulo: "Tesla",
      descripcion:
        "Tesla, Inc. es una empresa estadounidense que diseña y fabrica coches electricos, baterias y productos de energia solar.",
      caracteristicas:
        "Innovacion en vehiculos electricos, energias renovables, liderazgo en tecnologia.",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
    },
    {
      titulo: "Visa",
      descripcion:
        "Visa Inc. es una empresa estadounidense de servicios financieros con sede en Foster City, California.",
      caracteristicas:
        "Lider en pagos electronicos, innovacion en servicios financieros, amplia red global.",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
    },
    {
      titulo: "Johnson & Johnson",
      descripcion:
        "Johnson & Johnson es una corporacion multinacional estadounidense de dispositivos medicos, productos farmaceuticos y de consumo.",
      caracteristicas:
        "Innovacion en productos de salud, lider en dispositivos medicos, fuerte presencia global.",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/b/be/JNJ_Logo_New.svg",
    },
    {
      titulo: "Walmart",
      descripcion:
        "Walmart Inc. es una corporacion multinacional estadounidense de tiendas de descuento y almacenes.",
      caracteristicas:
        "Lider en comercio minorista, precios competitivos, amplia red de tiendas.",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg",
    },
    {
      titulo: "Samsung Electronics",
      descripcion:
        "Samsung Electronics Co., Ltd. es una empresa multinacional surcoreana de tecnologia.",
      caracteristicas:
        "Innovacion en electronica de consumo, liderazgo en tecnologia de semiconductores, amplia gama de productos.",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/b/b4/Samsung_wordmark.svg",
    },
    {
      titulo: "Nestle S.A.",
      descripcion:
        "Nestle S.A. es una multinacional suiza de alimentos y bebidas.",
      caracteristicas:
        "Lider en la industria alimentaria, amplia gama de productos, fuerte presencia global.",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/b/bf/Nestl%C3%A9_textlogo.svg",
    },
    {
      titulo: "Procter & Gamble",
      descripcion:
        "Procter & Gamble Co. es una multinacional estadounidense de bienes de consumo.",
      caracteristicas:
        "Innovacion en productos de consumo, marcas reconocidas, amplia gama de productos.",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/8/85/Procter_%26_Gamble_logo.svg",
    },
    {
      titulo: "Roche Holding",
      descripcion:
        "Roche Holding AG es una empresa suiza de atencion sanitaria y biotecnologia.",
      caracteristicas:
        "Lider en productos farmaceuticos, innovacion en biotecnologia, fuerte presencia global.",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/f/f5/Hoffmann-La_Roche_logo.svg",
    },
    {
      titulo: "L'Oreal",
      descripcion:
        "L'Oreal S.A. es una empresa francesa de cosmeticos y belleza.",
      caracteristicas:
        "Lider en productos de belleza, innovacion en cosmeticos, marcas reconocidas.",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/9/9d/L%27Or%C3%A9al_logo.svg",
    },
    {
      titulo: "Coca-Cola Company",
      descripcion:
        "The Coca-Cola Company es una multinacional estadounidense de bebidas.",
      caracteristicas:
        "Lider en bebidas no alcoholicas, marca globalmente reconocida, innovacion en productos.",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/0/09/The_Coca-Cola_Company_%282020%29.svg",
    },
    {
      titulo: "PepsiCo",
      descripcion:
        "PepsiCo, Inc. es una multinacional estadounidense de alimentos, aperitivos y bebidas.",
      caracteristicas:
        "Lider en alimentos y bebidas, marcas reconocidas, fuerte presencia global.",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/a/a6/PepsiCo_logo.svg",
    },
    {
      titulo: "Toyota Motor Corporation",
      descripcion:
        "Toyota Motor Corporation es una multinacional japonesa de automoviles.",
      caracteristicas:
        "Lider en fabricacion de automoviles, innovacion en vehiculos hibridos, amplia red global.",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Toyota.svg",
    },
  ],
};

function App() {
  return (
    <div className="App">
      <h1 className="descripcion-h1">{datos.descripcion}</h1>
      <div className="empresa-lista">
        {datos.empresas.map((empresa, index) => (
          <EmpresaCard
            key={index}
            titulo={empresa.titulo}
            descripcion={empresa.descripcion}
            caracteristicas={empresa.caracteristicas}
            imagen={empresa.imagen}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
