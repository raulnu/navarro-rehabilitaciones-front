const homeCarousel: ICarouselImage[] = [
  {
    src: "/home-carousel/can-serra-portrait-1.jpg",
    alt: "Barrio de Can Serra",
    title: "COMPROMETIDOS CON NUESTROS CLIENTES",
  },
  {
    src: "/home-carousel/can-serra-portrait-2.jpg",
    alt: "Barrio de Can Serra",
    title: "PRECIOS COMPETITIVOS",
  },
  {
    src: "/home-carousel/can-serra-portrait-3.jpg",
    alt: "Barrio de Can Serra",
    title: "CALIDAD EN EL SERVICIO",
  },
];

export default homeCarousel;

interface ICarouselImage {
  src: string;
  alt: string;
  title: string;
}
