import ContenidoRamo from "../components/ContenidoRamo";
import "../style/Home.css";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

export default function TerceroHome() {
    return(
        <>
        <div className="container_home">
                <img
                  className="video-background"
                  src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758386172/descarga_1_hbtexj.jpg"
                />
        
                {/* Video principal normal */}
                <img
                  className="video-main"
                  src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758386172/descarga_1_hbtexj.jpg"
                />
                
                  <div className="contenido_text">
                    <ContenidoRamo />
                  </div>
                  <div className="buton_next">
                    <Link to="/">
                      <Button></Button>
                    </Link>
                  </div>
              </div>
        </>
    );
}