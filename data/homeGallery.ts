const homeGallery: IGalleryImage[] = [
  { src: "/home-gallery/IMAG1589.jpg", alt: "edificio rojo" },
  {
    src: "/home-gallery/Imagen-principal-perfil-de-la-noticia-Bloques-de-viviendas-rehabilitados.jpg",
    alt: "edificio gris",
  },
  { src: "/home-gallery/New Projecdddddt.jpg", alt: "andamio eléctrico" },
  { src: "/home-gallery/New Project.jpg", alt: "andamio" },
  {
    src: "/home-gallery/Paramento impermeabilizado con Sistema ONDUCLAIR PC COLOR MARFIL.jpg",
    alt: "impermeabilización",
  },
];

export default homeGallery;

interface IGalleryImage {
  src: string;
  alt: string;
}
