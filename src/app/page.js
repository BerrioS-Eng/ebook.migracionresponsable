import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h2>
          Guía paso a paso para emigrar a España
        </h2>
        <div className={styles.btn_section}>
          <div className={styles.btn_buy}>
            <h3>$15.99</h3> <span className={styles.price}>$19.99</span>
            <Link
              href="https://buy.stripe.com/aEUdR11XkapQaty9AL"
              className={styles.buy_now}
            >Consiguelo Ahora</Link>
          </div>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/ebook-without-bg.png"
          alt="Ebook Migración responsable"
          width={280}
          height={320}
          priority
        />
      </div>

      <div className={styles.grid}>
        <section>
          <div className={styles.card_buy}>
            <div className={styles.info_buy}>
              <div className={styles.description_buy}>
                <h3>$15.99</h3> <span className={styles.price}>$19.99</span>
              </div>
              <div className={styles.on_sale}>
                <h4>% ON SALE!</h4>
              </div>
            </div>
            <Link
              href='https://buy.stripe.com/aEUdR11XkapQaty9AL'
              className={styles.buy_now}
            >¡Consiguelo Ahora!
            </Link>
          </div>
          <hr className={styles.line_divide}></hr>
        </section>

        <section className={styles.blogging}>
          <div className={styles.entraces}>
            <h1>Migración Responsable</h1>
            <div className={styles.author_detail}>
              <Image
                className={styles.img_profile}
                src="/profile-img.jpg"
                alt='profile-author'
                width={50}
                height={50}
                priority
              />
              <a>
                <u>@migracionresponsable.com</u>
              </a>
            </div>
            <hr className={styles.line_divide}></hr>
            <p className={styles.content}>
            ¿Alguna vez has soñado con una nueva vida en Europa? ¿Te has preguntado cómo migrar de manera responsable y exitosa? En "Migración Responsable", te ofrezco una guía detallada basada en mi propia experiencia, diseñada para ayudarte a dar el salto con confianza y responsabilidad.
            <br/>
            <br/>
            Este ebook es mucho más que un simple manual de migración. Es una narración personal que comparte mis propias vivencias y desafíos al iniciar una vida en Europa. Te guiaré a través de cada etapa del proceso, desde la planificación inicial hasta la instalación en tu destino europeo deseado. Descubrirás cómo:
            <br/>
            <br/>
            Evaluar tus motivaciones y metas personales para la migración.
            Investigar y seleccionar el país y la ciudad adecuados para tu estilo de vida.
            Navegar por los requisitos legales y de visa de manera efectiva.
            Prepararte financieramente para el viaje y la adaptación.
            Encontrar alojamiento, empleo y servicios esenciales una vez que llegues.
            Integrarte en la cultura local y construir una red de apoyo sólida.
            Además, proporciono consejos prácticos y recursos valiosos para que tu transición sea lo más suave posible. No importa si estás planeando una mudanza a largo plazo, un año sabático o una aventura temporal, "Migración Responsable" te brinda la orientación que necesitas para tomar decisiones informadas y responsables.
            <br/>
            <br/>
            Prepárate para hacer realidad tus sueños de vivir en Europa de manera responsable y exitosa. 
            ¡Descarga tu copia de "Migración Responsable" hoy mismo y da el primer paso hacia una nueva vida emocionante!
            </p>
          </div>
        </section>
      </div>

      <div className={styles.footer}>
        <p>&copy; 2023 Copyright: Skypulse Studio</p>
      </div>
    </main>
  )
}
