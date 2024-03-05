"use client"
import "./styles.css"

const proyectos = [ // 1 baracoa, 2 viñales, 3 varadero, 4 trinidad, 5 jardinesdelrey
    // {
    //   id: 1,
    //   lugar: 'Baracoa',
    //   des: 'Únete a nosotros en un fascinante viaje por Baracoa. Esta será una aventura inolvidable durante 4 días y 3 noches en uno de los destinos más espectaculares de Cuba. Permítenos llevarte a un recorrido que te sumergirá en la belleza natural y la rica historia de la región.',
    //   foto: '/Baracoa-Cuba2.jpg',
    //   fecha: '10/ Octubre/ 2023',
    //   disponible: 1
    // },
    {
      id: 2,
      lugar: 'Pinar del Río: Soroa , Viñales, Terrazas',
      des: 'Acompáñanos a una maravillosa aventura en Viñales y prepárate para sumergirte en la belleza natural y cultural de esta región única durante 3 días y 2 noches. Te invitamos a un recorrido inolvidable que combina paisajes impresionantes, experiencias auténticas y emocionantes actividades.',
      foto: '/vinales.jpg',
      fecha: '15, 16, 17/ Marzo/ 2024',
      disponible: 1
    },
    {
      id: 3,
      lugar: 'Varadero',
      des: 'Por la mañana temprano, partirás hacia Varadero desde tu lugar de origen. Durante el trayecto, podrás disfrutar de los paisajes cubanos mientras te diriges hacia la hermosa  ciudad costera de Varadero.',
      foto: '/varadero.jpg',
      fecha: '9/ Marzo/ 2024',
      disponible: 1
    },
    {
      lugar: "Cayo Guillermo: dia de la mujer",
      foto: "/guillermo.jpg",
      fecha: "8/ Marzo / 2024",
      disponible: 1
    },
    {
      lugar: "Hanabanilla: Transporte, hospedaje, desayuno garantizado, servicio de guía y visita a otros lugares de interés",
      foto: "/hanabanilla.jpg",
      fecha: "10, 11 ,12/ Marzo / 2024",
      disponible: 1
    },
    {
      lugar: "Club Karey Varadero",
      foto: "/karey.jpeg",
      fecha: "15, 16, 17/ Marzo / 2024",
      disponible: 1
    },
    {
      lugar: "Tope de Coyante: una noche",
      foto: "/collantes.jpg",
      fecha: "15, 16/ Marzo / 2024",
      disponible: 1
    },
    {
      lugar: "Hanabanilla de regreso",
      foto: "/hanabanilla.jpg",
      fecha: "24, 25, 26/ Marzo / 2024",
      disponible: 1
    },
    {
      lugar: "Santiago de Cuba",
      foto: "/santiago.jpg",
      fecha: "30, 31/ Marzo / 2024",
      disponible: 0
    },
    {
      id: 2,
      lugar: "Pinar del Río: Aguas Claras, Hotel Internacional tres dias... hospedaje y desayuno. Transporte, Soroa, Viñales, Terrazas",
      foto: '/vinales.jpg',
      fecha: "29, 30, 31/ Marzo / 2024",
      disponible: 1
    },
    // {
    //   id: 4,
    //   lugar: 'Trinidad',
    //   des: 'Por la mañana temprano, partirás hacia Trinidad desde tu lugar de origen. Durante el trayecto, podrás disfrutar de los paisajes cambiantes de Cuba mientras te diriges hacia la hermosa ciudad colonial de Trinidad.',
    //   foto: '/Trinidad.jpg',
    //   fecha: '',
    //   disponible: 0
    // },
    // {
    //   id: 5,
    //   lugar: 'Jardines del Rey',
    //   des: 'Por la mañana temprano, partirás hacia Cayo Coco desde tu lugar de origen. Rumbo a una fascinante aventura que te espera. Como primera actividad tienes la visita delfinario, donde podrás observar a los delfines en acción mientras realizan emocionantes acrobacias y muestran su inteligencia. Aunque no participarás en el baño con los delfines, podrás acercarte lo suficiente para apreciar su belleza y gracia.',
    //   foto: '/Jardines-del-Rey.jpg',
    //   fecha: '',
    //   disponible: 0
    // }
  ]

function Card ({lugar, disponible, fecha, id, foto}) {
    let locationChange = () => {}
    if (id) {
      locationChange = () => {location.href = `/${id}`}
    }

    let estado = disponible == 1 ? "available" : "sold"

    return (
            <section onClick={locationChange}>
                <img src={foto}/>
                <div>
                    <p>{lugar}</p>
                    <p className={estado}>{disponible == 1? "Disponible":"Vendido"}</p>
                    <p>{fecha}</p>
                </div>
            </section>
    )
}

export default function Page() {
    return (
    <main>
    {
        proyectos.map(element => {
            return <Card
                lugar={element.lugar}
                foto={element.foto}
                disponible={element.disponible} 
                fecha={element.fecha} 
                id={element.id} 
                key={element.id}
            />
        })
    }
    </main>
    )
}