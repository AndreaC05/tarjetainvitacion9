import { useState, useEffect } from "react";
import "../style/Contenido.css";

export default function Contenido() {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const fullText =
    "Hoy quiero regalarte más que flores amarillas: cada pétalo es un deseo de felicidad, cada color la luz que traes a mi vida. Son símbolo de amor, amistad y esperanza… pero contigo se convierten en la prueba de lo mucho que significas para mí.";

  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < fullText.length) {
        setDisplayedText(fullText.substring(0, i + 1));
        i++;
        setTimeout(typeWriter, 80); // Velocidad de escritura (80ms por letra)
      } else {
        // Cuando termina el texto, ocultar cursor
        setTimeout(() => {
          setShowCursor(false);
        }, 1000);
      }
    };

    // Empezar a escribir después de 1 segundo
    const timer = setTimeout(typeWriter, 1000);

    return () => clearTimeout(timer);
  }, [fullText]);

  return (
    <>
      <div className="container_texto_invitacion">
        <div className="img_logo">
          {/* <img
            src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758121564/image_28_2_m0dzha.png"
            alt=""
          /> */}
          <div className="nombre">
            <h1>Anali</h1>
            <h1>Nallely</h1>
          </div>
        </div>

        <div className="texto_invitacion">
          <div className="parrafo">
            <p className={`cursor ${showCursor ? "blinking-cursor" : ""}`}>
              {displayedText}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
