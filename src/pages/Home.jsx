import Contenido from "../components/Contenido";
import "../style/Home.css";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="container_home">
        <img
          className="video-background"
          src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758378107/Pretty_Sunflower_Inspired_Wallpaper___Sunflowers_c1pi1y.jpg"
        />

        {/* Video principal normal */}
        <img
          className="video-main"
          src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758378107/Pretty_Sunflower_Inspired_Wallpaper___Sunflowers_c1pi1y.jpg"
        />
        
          <div className="contenido_text">
            <Contenido />
          </div>
          <div className="buton_next" style={{ marginTop: "180px" }}>
            <Link to="/flores">
              <Button></Button>
            </Link>
          </div>
      </div>
    </>
  );
}
