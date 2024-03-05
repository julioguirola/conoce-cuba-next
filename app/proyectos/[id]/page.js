import { proyectos } from "../page.js"
import "./styles.css"

const puntos = [
    {
        id: 1,
        proyecto_id: 2,
        lugar: 'Orquideario de Soroa',
        des: 'El primer día comenzaremos nuestra exploración con una visita al encantador  Orquideario de Soroa donde podremos maravillarnos con la gran variedad de orquídeas y otras especies florales, mientras nos sumergimos en un ambiente de serenidad y belleza natural.                                                                                                                                                                                                                                                                                                                                                                                                         \n',
        foto: '/orquideario-de-soroa-cuba.jpg'
      },
      {
        id: 2,
        proyecto_id: 2,
        lugar: 'Río de Soroa',
        des: 'Después, disfrutaremos de un refrescante tiempo de baño en el  Río de Soroa, donde nos relajaremos en las aguas cristalinas rodeadas de vegetación exuberante.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    \n',
        foto: '/soroa.jpg'
      },
      {
        id: 3,
        proyecto_id: 2,
        lugar: 'Castillo en las Nubes',
        des: 'Continuando nuestro viaje, visitaremos el imponente  Castillo en las Nubes. Desde lo alto de esta fortaleza, tendremos una vista panorámica impresionante de los valles y montañas circundantes, capturando imágenes que nos dejarán sin aliento. Además, tendremos la oportunidad de disfrutar de un almuerzo tradicional en la casa de un amable campesino local, donde saborearemos los auténticos platos cubanos.                                                                                                                                                                                                                                                                        \n',
        foto: '/le-chateau.jpg'
      },
      {
        id: 4,
        proyecto_id: 2,
        lugar: 'Hotel Pinar del Río',
        des: 'Durante las noches nos  hospedaremos en el acogedor  Hotel Pinar del Río, donde recargaremos energías para los días futuros.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         \n',
        foto: '/hotel-pinar-de-rio.jpg'
      },
      {
        id: 5,
        proyecto_id: 2,
        lugar: 'Hotel Los Jazmines',
        des: 'En el segundo día de nuestra aventura, visitaremos el   Hotel Los Jazmines, un lugar que sirve como mirador del increíble  Valle de Viñales.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          \n',
        foto: '/hotel-los-jazmines.jpg'
      },
      {
        id: 6,
        proyecto_id: 2,
        lugar: 'Valle de Viñales',
        des: 'Desde aquí contemplaremos las majestuosas formaciones montañosas conocidas como mogotes, que dan a esta región su carácter distintivo. Además, tendremos tiempo para explorar el encantador pueblo de Viñales, donde nos sumergiremos en la cultura local, disfrutaremos de la gastronomía tradicional y exploraremos los lugares emblemáticos como el  Mural de la Prehistoria y la Cueva del Indio. No solo eso, también tendremos la oportunidad de participar en actividades emocionantes como el  Canopy (tirolesa) y  montar a caballo, así conectaremos aún más con la naturaleza y la aventura en este entorno impresionante.                \n',
        foto: '/valle-de-vinales.jpg'
      },
      {
        id: 7,
        proyecto_id: 2,
        lugar: 'Las Terrazas',
        des: 'En nuestro último día, realizaremos una visita de retorno por  Las Terrazas, un parque nacional que alberga  la casa del gran Polo Montañés y el  Hotel Moca.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         \n',
        foto: '/las-terrazas-pinar-del-rio-cuba.jpg'
      },
      {
        id: 8,
        proyecto_id: 2,
        lugar: 'Hotel Moca',
        des: 'Aquí, disfrutaremos de paseos por el  lago artificial mientras quedamos maravillados con la belleza de este entorno natural.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               \n',
        foto: '/moka-hotel.jpg'
      },
      {
        id: 9,
        proyecto_id: 1,
        lugar: 'Cañón del Río Yumurí',
        des: 'El primer día de nuestra emocionante expedición iremos al impresionante  Cañón del Río Yumurí. Allí tendremos la oportunidad de disfrutar de un apacible paseo en el río, mientras nos deleitamos con los paisajes de ensueño que nos rodean. ¡No olvidemos traer traje de baño! pues podremos refrescarnos y disfrutar de un tiempo de baño en este río mágico. Como plato principal nos espera un almuerzo de puerco asado en la casa de un amable campesino local, donde nos deleitaremos con los sabores auténticos de la cocina tradicional cubana.                                                                                                   \n',
        foto: '/rio-yumuri.jpg'
      },
      {
        id: 10,
        proyecto_id: 1,
        lugar: 'Faro Punta de Maisí',
        des: 'En el segundo día de nuestra aventura te invitamos a descubrir el encanto del  Faro Punta de Maisí. Este lugar nos recibirá con su villa única, rodeada de playas deensueño y una piscina refrescante. Será un día para relajarse y disfrutar de la tranquilidad mientras nos deleitamos con las hermosas vistas panorámicas que ofrece este lugar mágico.                                                                                                                                                                                                                                                                                              \n',
        foto: '/Faro-de-Maisí.jpg'
      },
      {
        id: 11,
        proyecto_id: 1,
        lugar: 'Ruta del Cacao',
        des: 'En el tercer y último día de nuestro viaje exploraremos la famosa  Ruta del Cacao, conoceremos los secretos de la producción del cacao y degustaremos el delicioso chocolate elaborado en la región.                                                                                                                                                                                                                                                                                                                                                                                                                                                 \n',
        foto: '/ruta-del-cacao.jpg'
      },
      {
        id: 12,
        proyecto_id: 1,
        lugar: 'Cruz de Parra',
        des: 'Además, visitaremos el  lugar donde Colón puso la cruz de parra durante su llegada a Cuba, un momento histórico que marcó el comienzo de una nueva era.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               \n',
        foto: '/cruz-de-parra-colon.jpg'
      },
      {
        id: 16,
        proyecto_id: 5,
        lugar: 'Delfinario',
        des: 'Después de disfrutar de la experiencia en el delfinario, tu guía te llevará a una hermosa villa cercana, donde te esperará un oasis de relajación. Podrás refrescarte en la piscina o sumergirte en las aguas cristalinas de la playa privada de la villa. Para el almuerzo, serás deleitado con un festín culinario preparado por chefs de la villa.',
        foto: '/Delfinario-2.jpg'
      },
      {
        id: 17,
        proyecto_id: 5,
        lugar: 'Delfinario',
        des: 'Después de un tiempo de descanso y disfrute en la villa, comenzarás el viaje de regreso a casa. Durante el trayecto, tendrás la oportunidad de reflexionar sobre las experiencias inolvidables que viviste en Cayo Coco.\n' +
          '¡Disfruta de tu viaje! ',
        foto: '/Delfinario-1.jpg'
      },
      {
        id: 21,
        proyecto_id: 4,
        lugar: 'Playa',
        des: 'Después de la visita a Trinidad, te dirigirás a una hermosa playa cercana. Allí, tendrás tiempo para relajarte en la arena blanca y aguas cristalinas, disfrutando del sol y el sonido relajante del mar. Para el almuerzo, serás recibido en un ranchón, un establecimiento típico cubano donde se sirven platos tradicionales. Podrás deleitarte con la auténtica cocina cubana.\n' +
          '¡Disfruta de tu estadía en Trinidad!',
        foto: '/Playa.jpg'
      },
      {
        id: 18,
        proyecto_id: 4,
        lugar: 'Valle de los Ingenios',
        des: 'Llegarás al Valle de los Ingenios , ubicado cerca de Trinidad. Este valle es reconocido por su importancia histórica como centro azucarero en el siglo XIX y es considerado Patrimonio de la Humanidad por la UNESCO. Podrás explorar las antiguas plantaciones de caña.',
        foto: '/Valle-de-los-Ingenios.jpg'
      },
      {
        id: 19,
        proyecto_id: 4,
        lugar: 'Mirador del Valle',
        des: 'Toda esa belleza la podrás contemplar desde Mirador del Valle donde tendrás la oportunidad de volar mediante el canopi y disfrutar de un tiempo agradable.',
        foto: '/Mirador-del-Valle.jpg'
      },
      {
        id: 20,
        proyecto_id: 4,
        lugar: 'Parque de los Perros',
        des: 'Después de disfrutar del Mirador, continuarás tu viaje hacia la ciudad de Trinidad. Una vez allí, te sumergirás en el encanto colonial de esta hermosa ciudad, declarada Patrimonio de la Humanidad por la UNESCO donde podrás explorar sus calles empedradas, admirar las coloridas fachadas de las casas coloniales y visitar lugares emblemáticos como el Parque de los Perros. Disfrutarás de un tiempo limitado para explorar la ciudad y empaparte de su historia y cultura.',
        foto: '/Parque-de-los-Perros.jpg'
      },
      {
        id: 13,
        proyecto_id: 3,
        lugar: 'Marina',
        des: 'A tu llegada, comenzarás con una visita a la Marina de Varadero. Podrás maravillarte con los lujosos yates y embarcaciones, y disfrutar del ambiente náutico. Este lugar ofrece una variedad de actividades acuáticas opcionales, como paseos en catamarán.',
        foto: '/Marina-de-Varadero.jpg'
      },
      {
        id: 15,
        proyecto_id: 3,
        lugar: 'Todo por Uno',
        des: 'Luego se visitara el parque Todo por Uno lugar que proporciona un espacio ideal para el disfrute en familia con variadas opciones para entretener a pequeños y adultos por igual.\n' +
          'Al finalizar el día, emprenderás el viaje de regreso a tu hogar, llevando contigo hermosos recuerdos de tu experiencia en Varadero.\n' +
          '\n' +
          '¡Disfruta de tu día en Varadero!',
        foto: '/Todo-por-Uno.jpg'
      },
      {
        id: 14,
        proyecto_id: 3,
        lugar: 'Ciudad de Varadero',
        des: 'Después de la visita a la Marina , realizarás un paseo por la ciudad de Varadero. Podrás explorar la avenida principal, donde encontrarás tiendas, restaurantes y bares. Podrás disfrutar de la animada atmósfera de la ciudad y observar la vida local.\n' +
          'Durante el paseo, tendrás tiempo para disfrutar de un almuerzo incluido. Podrás deleitarte con platos típicos cubanos hechos con las opciones gastronómicas de la región.',
        foto: '/Varadero1.jpg'
      }    
]

function Card ({foto, lugar, des}) {
    return (
      <>
            <section>
                <img src={foto}/>
                <div>
                    <p>{lugar}</p>
                </div>
            </section>
            <p>{des}</p>
      </>
    )
}

export default function ({ params }) {
    const proyecto = proyectos.filter(elm => elm.id == params.id)[0]
    const puntos_this = puntos.filter(elm => elm.proyecto_id == params.id)
    
    return (
      <main>
        <h1 class="proyecto">{proyecto.lugar}</h1>
        <div><img src={proyecto.foto} /></div>
        <h3 class="proyecto">{proyecto.des}</h3>
        <article>
        {
            puntos_this.map(elm => {
                return <Card key={elm.id} foto={elm.foto} lugar={elm.lugar} des={elm.des} />
            })
        }
        </article>
      </main>
    )
}