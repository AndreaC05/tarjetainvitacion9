import { useState, useEffect } from "react";
import "../style/ContenidoRamo.css";

export default function ContenidoRamo() {
  const [visibleFlowers, setVisibleFlowers] = useState([]);

  const sunflowers = [
    // Capa de atrás - más grandes, formando arco
    { id: 1, delay: 0, rotation: -20, x: -45, y: -15, scale: 1.1, zIndex: 1 },
    { id: 2, delay: 300, rotation: 0, x: 0, y: -25, scale: 1.15, zIndex: 1 },
    { id: 3, delay: 600, rotation: 20, x: 45, y: -15, scale: 1.1, zIndex: 1 },
    
    // Capa intermedia - tamaño medio
    { id: 4, delay: 900, rotation: -10, x: -25, y: 10, scale: 0.95, zIndex: 2 },
    { id: 5, delay: 1200, rotation: 10, x: 25, y: 10, scale: 0.95, zIndex: 2 },
    
    // Capa de adelante - más pequeños
    { id: 6, delay: 1500, rotation: -5, x: -15, y: 35, scale: 0.8, zIndex: 3 },
    { id: 7, delay: 1800, rotation: 5, x: 15, y: 35, scale: 0.8, zIndex: 3 },
    { id: 8, delay: 2100, rotation: 0, x: 0, y: 45, scale: 0.85, zIndex: 3 }
  ];

  useEffect(() => {
    sunflowers.forEach((flower) => {
      setTimeout(() => {
        setVisibleFlowers(prev => [...prev, flower.id]);
      }, flower.delay);
    });
  }, []);

  return (
    <div className="ramo-container">
        <div className="text">
            <p>Que la luz de estas flores amarillas ilumine siempre nuestro camino, llenándolo de amor y esperanza.</p>
        </div>
      <div className="bouquet-wrapper">
        {sunflowers.map((flower) => (
          <div
            key={flower.id}
            className={`sunflower ${visibleFlowers.includes(flower.id) ? 'visible' : ''}`}
            style={{
              transform: `translate(${flower.x}px, ${flower.y}px) rotate(${flower.rotation}deg) scale(${flower.scale})`,
              zIndex: flower.zIndex,
            }}
          >
            <img
              src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758386243/image_43_sqgbsu.png"
              alt="Girasol"
              className="sunflower-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
}