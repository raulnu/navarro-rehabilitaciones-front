const homeGallery: IGalleryImage[] = [
  { src: "/projects-gallery/New Project(1).jpg", alt: "Antes y después" },
  { src: "/projects-gallery/New Project(2).jpg", alt: "Antes y después" },
  { src: "/projects-gallery/New Project(3).jpg", alt: "Antes y después" },
  { src: "/projects-gallery/New Project(4).jpg", alt: "Antes y después" },
  { src: "/projects-gallery/New Project(5).jpg", alt: "Antes y después" },
  { src: "/projects-gallery/New Project(6).jpg", alt: "Antes y después" },
  { src: "/projects-gallery/New Project(7).jpg", alt: "Antes y después" },
  { src: "/projects-gallery/New Project(8).jpg", alt: "Antes y después" },
];

export default homeGallery;

interface IGalleryImage {
  src: string;
  alt: string;
}
