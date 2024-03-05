import Link from "next/link"
import "./styles.css"

export const proyectos = [
    {
      id: 1,
      lugar: 'Baracoa',
      des: 'Únete a nosotros en un fascinante viaje por Baracoa. Esta será una aventura inolvidable durante 4 días y 3 noches en uno de los destinos más espectaculares de Cuba. Permítenos llevarte a un recorrido que te sumergirá en la belleza natural y la rica historia de la región.',
      foto: '/Baracoa-Cuba2.jpg',
      fecha: '10/ 10/ 2023',
      disponible: 1
    },
    {
      id: 2,
      lugar: 'Viñales',
      des: 'Acompáñanos a una maravillosa aventura en Viñales y prepárate para sumergirte en la belleza natural y cultural de esta región única durante 3 días y 2 noches. Te invitamos a un recorrido inolvidable que combina paisajes impresionantes, experiencias auténticas y emocionantes actividades.',
      foto: '/vinales.jpg',
      fecha: '11/ 12/ 2023',
      disponible: 1
    },
    {
      id: 3,
      lugar: 'Varadero',
      des: 'Por la mañana temprano, partirás hacia Varadero desde tu lugar de origen. Durante el trayecto, podrás disfrutar de los paisajes cubanos mientras te diriges hacia la hermosa  ciudad costera de Varadero.',
      foto: '/varadero.jpg',
      fecha: '',
      disponible: 0
    },
    {
      id: 4,
      lugar: 'Trinidad',
      des: 'Por la mañana temprano, partirás hacia Trinidad desde tu lugar de origen. Durante el trayecto, podrás disfrutar de los paisajes cambiantes de Cuba mientras te diriges hacia la hermosa ciudad colonial de Trinidad.',
      foto: '/Trinidad.jpg',
      fecha: '',
      disponible: 0
    },
    {
      id: 5,
      lugar: 'Jardines del Rey',
      des: 'Por la mañana temprano, partirás hacia Cayo Coco desde tu lugar de origen. Rumbo a una fascinante aventura que te espera. Como primera actividad tienes la visita delfinario, donde podrás observar a los delfines en acción mientras realizan emocionantes acrobacias y muestran su inteligencia. Aunque no participarás en el baño con los delfines, podrás acercarte lo suficiente para apreciar su belleza y gracia.',
      foto: '/Jardines-del-Rey.jpg',
      fecha: '',
      disponible: 0
    }
  ]

function Card ({lugar, disponible, fecha, id, foto}) {
    return (
        <Link href={`/proyectos/${id}`}>
            <section>
                <img src={foto}/>
                <div>
                    <p>{lugar}</p>
                    <p>{disponible == 1? "Disponible "+fecha:""}</p>
                </div>
            </section>
        </Link>
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