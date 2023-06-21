import Head from "next/head";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import styles from "../styles/Home.module.scss";
import presentationData from "../../data/presentation.json";
import servicesData from "../../data/services";
import Presentation from "@/components/Presentation/Presentation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Navarro Rehabilitaciones</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={`${styles.mainContainer}`}>
        <section className={`${styles.homeGallery}`}>
          <img
            src="/home-gallery/IMAG1589.jpg"
            alt="edificio rojo"
            height="500"
          />
          <img
            src="/home-gallery/Imagen-principal-perfil-de-la-noticia-Bloques-de-viviendas-rehabilitados.jpg"
            alt="edificio gris"
            height="500"
          />
          <img
            src="/home-gallery/New Projecdddddt.jpg"
            alt="andamio eléctrico"
            height="500"
          />
          <img src="/home-gallery/New Project.jpg" alt="andamio" height="500" />
          <img
            src="/home-gallery/Paramento impermeabilizado con Sistema ONDUCLAIR PC COLOR MARFIL.jpg"
            alt="impermeabilización"
            height="500"
          />
        </section>
        <Presentation data={presentationData.inicio} />
        <section className={`${styles.servicios}`}>
          {servicesData.map((service, articleIndex) => {
            return (
              <article
                className={`${styles.servicios__article}`}
                key={articleIndex}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  height="150"
                  width="150"
                />
                <h4 className={`${styles.servicios__article__title}`}>
                  {service.title}
                </h4>
                <div className={`${styles.servicios__article__box}`}>
                  {service.items.map((item, spanIndex) => {
                    return <span key={spanIndex}>{item}</span>;
                  })}
                </div>
              </article>
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
}
