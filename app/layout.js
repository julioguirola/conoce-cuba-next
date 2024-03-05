import "./globals.css";

export const metadata = {
  title: "Conoce Cuba Primero"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    </head>
    <body>
        <header>
            <nav>
                <img src="/logo.jpg" width="100" height="100"/>
                <h1 >Conoce a Cuba Primero</h1>
                <a href="/">Inicio</a>
                <a href="/proyectos">Proyectos</a>
            </nav>
        </header>
        {children}
        <footer>
            <p>Advertencia: En este grupo no se compra ni revende nada, no se hacen comentarios politicos,religiosos,ni discriminatorios.Esto es solo para hablar de los viajes y las experiencias. </p>
            <p><u>Siguenos en nuestra redes sociales:</u></p>
      
            <div>
              <a href=""><img src="https://cdn.icon-icons.com/icons2/996/PNG/512/instagram_social_media_online_icon-icons.com_75342.png" alt=""/></a>
              <a href=""><img src="https://cdn.icon-icons.com/icons2/996/PNG/512/facebook_social_media_online_icon-icons.com_75341.png" alt=""/></a>
              <a href=""><img src="https://cdn.icon-icons.com/icons2/996/PNG/512/whatsapp_social_media_online_icon-icons.com_75348.png" alt=""/></a>
              <a href=""><img src="https://cdn.icon-icons.com/icons2/996/PNG/512/play_youtube_social_media_online_icon-icons.com_75350.png" alt=""/></a>
            </div>
        </footer>
    </body>
    </html>
  );
}

