import Head from "next/head";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import data from "../../../data/presentation.json";
import Presentation from "@/components/Presentation/Presentation";
import styles from "../../styles/Contacto.module.scss";

export const contacto = () => {
  return (
    <>
      <Head>
        <title>Navarro Rehabilitaciones</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Header />
      <main className={styles.mainContainer}>
        <Presentation data={data.contacto} />
        <section className={styles.contactData}>
          <div className={styles.contactData__item}>
            <img
              src="contact-icons/icons8-post-50.png"
              alt="Email icon"
              height="35"
              width="35"
            />
            <a href="mailto:info@restauracionesnavarro.com">
              info@restauracionesnavarro.com
            </a>
          </div>
          <div className={styles.contactData__item}>
            <img
              src="contact-icons/icons8-phone-50.png"
              alt="Phone icon"
              height="35"
              width="35"
            />
            <a href="tel:934376970">93 437 69 70</a>
          </div>
          <div className={styles.contactData__item}>
            <img
              src="contact-icons/icons8-location-50.png"
              alt="Phone icon"
              height="35"
              width="35"
            />
            <a href="https://www.google.com/maps/place/RESNA+Navarro+Rehabilitaci%C3%B3n+de+Edificios+Sl/@41.3668828,2.0985439,17z/data=!4m14!1m7!3m6!1s0x12a4991975ce68ed:0xd79a35eaa27cf03!2sRESNA+Navarro+Rehabilitaci%C3%B3n+de+Edificios+Sl!8m2!3d41.3668828!4d2.1007326!16s%2Fg%2F11c1rtk1z_!3m5!1s0x12a4991975ce68ed:0xd79a35eaa27cf03!8m2!3d41.3668828!4d2.1007326!16s%2Fg%2F11c1rtk1z_?entry=ttu">
              Avda. Can Serra, 88 C, Sot. <br /> 108906 L'Hospitalet de
              Llobregat (BCN)
            </a>
            <span></span>
          </div>
        </section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.331461073!2d2.098543915425163!3d41.36688277926607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4991975ce68ed%3A0xd79a35eaa27cf03!2sRESNA%20Navarro%20Rehabilitaci%C3%B3n%20de%20Edificios%20Sl!5e0!3m2!1ses!2ses!4v1687457037211!5m2!1ses!2ses"
          width="600"
          height="450"
          className={styles.map}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </main>
      <Footer page="contacto" />
    </>
  );
};

export default contacto;
