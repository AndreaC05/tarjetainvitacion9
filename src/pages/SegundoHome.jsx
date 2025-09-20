import ContenidoFlores from "../components/ContenidoFlores.jsx";
import "../style/Home.css";
import "../style/Home2.css";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

export default function SegundoHome() {
  return (
    <>
      <div className="container_home">
        <img
          className="video-background"
          src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758381464/descarga_k2mdms.jpg"
        />

        {/* Video principal normal */}
        <img
          className="video-main"
          src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758381464/descarga_k2mdms.jpg"
        />

        <div className="img_decoracion">
          <img
            src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758385379/image_42_dtuqf9.svg"
            alt=""
          />
        </div>

        <div className="contenido_text">
          <ContenidoFlores />
        </div>
        <div className="buton_next" style={{ marginTop: "210px" }}>
          <Link to="/ramo">
            <Button></Button>
          </Link>
        </div>

        <div className="img_decoracion_dos">
          <img
            src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758385379/image_42_dtuqf9.svg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
