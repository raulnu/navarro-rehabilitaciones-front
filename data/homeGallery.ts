const homeGallery: IGalleryImage[] = [
  {
    src: "/home-gallery/edifici_blanc_treball_vertical.jpeg",
    alt: "Edificio blanco trabajo vertical",
  },
  {
    src: "/home-gallery/edifici_blanc-e1683048403441.jpeg",
    alt: "Edificio blanco",
  },
  {
    src: "/home-gallery/edifici_marro_blanc-e1683048315790.jpeg",
    alt: "Edificio marron y blanco",
  },
  {
    src: "/home-gallery/edifici_marro_embastida-e1683048174375.jpeg",
    alt: "Edificio marron bastida",
  },
  {
    src: "/home-gallery/pared_fluvial.jpeg",
    alt: "Instalación de pared fluvial",
  },
];

export default homeGallery;

interface IGalleryImage {
  src: string;
  alt: string;
}
