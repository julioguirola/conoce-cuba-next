"use client"
import { useState, useEffect } from "react"
import "./styles.css"

export default function() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const images = ["/landing1.jpg", "/landing3.jpg", "/landing4.jpg", "/landing5.jpg"]

    useEffect(() => {
        const interval = setInterval(() => {
          // Avanzar al siguiente índice de imagen, asegurándose de volver al principio si llegamos al final
          setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }, 2000); // Cambiar cada 2 segundos
    
        // Limpiar el intervalo cuando el componente se desmonta para evitar fugas de memoria
        return () => clearInterval(interval);
      }, [currentImageIndex, images.length]);
    
    return (
        <main>
        <h1 >¡Bienvenidos a Conoce a Cuba Primero!</h1>
            <article>
            <div>
                <img src={images[currentImageIndex]}/>
            </div>
                <div>
                    <p>
                        Somos un apasionado
                        <strong>grupo de aficionados a la fotografía, los viajes y la naturaleza</strong>.
                        Nos dedicamos a explorar y capturar la belleza única de Cuba.
                        Permítanos compartirles por qué nuestra propuesta es una experiencia
                        inolvidable.
                    </p>
                    <p>
                        Nuestro grupo se dedica a organizar viajes a medida que combinan la
                        <strong>exploración fotográfica con la naturaleza exuberante de Cuba</strong>. Nos
                        enorgullece ofrecer una experiencia auténtica y enriquecedora,
                        permitiéndote sumergirte en la cultura cubana. Nuestros guías locales
                        conocen a fondo el país y sus rincones secretos, asegurando que no te
                        pierdas ninguna oportunidad de capturar la esencia de Cuba.
                    </p>
                </div>
            </article>
            <p >
                En Conoce a Cuba Primero, nos comprometemos a brindarte una
                experiencia segura y cómoda. Trabajamos con socios locales confiables,
                seleccionando cuidadosamente alojamientos y asegurando que cada
                detalle esté cuidado.
                Si eres un
                <strong>amante de la fotografía, los viajes y la naturaleza</strong>,
                únete a nosotros en una aventura inolvidable en la cautivadora isla de
                Cuba.
            </p>
            <p><strong>
                ¡Te
                invitamos a unirte a Conoce a Cuba Primero y explorar este tesoro
                caribeño de manera única y memorable!
            </strong></p>
        </main>
    )
}