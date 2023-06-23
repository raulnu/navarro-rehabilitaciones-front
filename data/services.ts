const services: IService[] = [
  {
    title: "FACHADAS",
    items: [
      "Rehabilitación",
      "Revestimiento",
      "Aislamiento",
      "Pintura",
      "Cubiertas",
    ],
    image: "home-services/images.jpeg",
  },
  {
    title: "INTERIORES",
    items: [
      "Baños",
      "Cocinas",
      "Pladur",
      "Remodelación",
      "Estuco",
      "Escaleras",
      "Vestíbulos",
    ],
    image: "home-services/KAI-COLLECTION_15.jpg",
  },
  {
    title: "OTROS",
    items: [
      "Patios",
      "Refuerzo de vigas",
      "Bajantes de agua",
      "Carpintería de madera y aluminio",
      "Asesoramiento arquitectónico",
    ],
    image: "home-services/60c82cfe565b090b6fccf5716fb56e7e.jpg",
  },
];

export default services;

interface IService {
  title: string;
  items: string[];
  image: string;
}
