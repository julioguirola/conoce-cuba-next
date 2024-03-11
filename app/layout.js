import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Conoce Cuba Primero"
};

function Social () {
  return (
    <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
          </svg>


          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-youtube" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
          <path d="M10 9l5 3l-5 3z" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
          <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M16.5 7.5l0 .01" />
          </svg>


          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-whatsapp" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
          <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
          </svg>
  </div>
 )
 }

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
                <a href="/">Proyectos</a>
                <a href="/about">Acerca De</a>
            </nav>
        </header>
        {children}
        <Analytics />
        <footer>
            <p>Advertencia: En este grupo no se compra ni revende nada, no se hacen comentarios politicos,religiosos,ni discriminatorios.Esto es solo para hablar de los viajes y las experiencias. </p>
            <p><u>Siguenos en nuestra redes sociales:</u></p>
      
            <Social />
        </footer>
    </body>
    </html>
  );
}

