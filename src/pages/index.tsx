import Head from "next/head";
import { useState } from "react";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import styles from "../styles/Home.module.scss";
import presentationData from "../../data/presentation.json";
import servicesData from "../../data/services";
import Presentation from "@/components/Presentation/Presentation";
// import galleryImagesData from "../../data/homeGallery";
import homeCarousel from "../../data/homeCarousel";

export default function Home() {
  const [carouselCounter, setCarouselCounter] = useState(0);
  const handleCarouselCounterModifier = (operation: string) => {
    if (operation === "add") {
      if (carouselCounter === 2) {
        setCarouselCounter(0);
      } else {
        setCarouselCounter(carouselCounter + 1);
      }
    } else {
      if (carouselCounter === 0) {
        setCarouselCounter(2);
      } else {
        setCarouselCounter(carouselCounter - 1);
      }
    }
  };
  return (
    <>
      <Head>
        <title>Navarro Rehabilitaciones</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className={`${styles.mainContainer}`}>
        {/* <section className={`${styles.homeGallery}`}>
          {galleryImagesData.map((image, index) => {
            return (
              <img src={image.src} alt={image.alt} height="500" key={index} />
            );
          })}
        </section> */}
        <section
          className={`${styles.carousel}`}
          style={{
            backgroundImage: `url(${homeCarousel[carouselCounter].src})`,
          }}
        >
          <span className={styles.carousel__title}>
            {homeCarousel[carouselCounter].title}
          </span>
          <div className={styles.carousel__buttons}>
            <button onClick={() => handleCarouselCounterModifier("substract")}>
              {"<"}
            </button>
            <button onClick={() => handleCarouselCounterModifier("add")}>
              {">"}
            </button>
          </div>
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
