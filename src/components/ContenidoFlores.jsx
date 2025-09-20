import { useState, useEffect } from "react";
import "../style/Contenido.css";

export default function ContenidoFlores() {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  
  const fullText = `En un campo de sueños floreces tú,
como el sol que acaricia la mañana,
llevas en tu sonrisa la luz
que da vida a cada flor amarilla.

Cada pétalo guarda mi amor,
cada aroma susurra tu nombre,
y en este día te entrego mi corazón,
porque contigo la esperanza se expande.`;

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

  // Función para convertir el texto en estructura de poesía
  const formatPoetry = (text) => {
    const lines = text.split('\n');
    return lines.map((line, index) => (
      <span key={index}>
        {line}
        {index < lines.length - 1 && <br />}
      </span>
    ));
  };

  return (
    <>
      <div className="container_texto_invitacion">
        <div className="img_logo">
          {/* <img
            src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758121564/image_28_2_m0dzha.png"
            alt=""
          /> */}
        </div>
        <div className="texto_invitacion">
          <div className="parrafo poesia">
            <p className={`cursor ${showCursor ? "blinking-cursor" : ""}`}>
              {formatPoetry(displayedText)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}