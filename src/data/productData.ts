
import { Product } from "../types/product";

export const productData: Product = {
  id: 1,
  name: "Tênis Esportivo FlexRun",
  description: "Tênis esportivo leve e flexível, ideal para corridas e atividades físicas. Tecnologia de amortecimento avançado para máximo conforto durante o uso prolongado.",
  price: 299.90,
  discount: 15,
  rating: 4.7,
  images: [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
  ],
  sizes: [
    { id: 1, label: "35", available: true },
    { id: 2, label: "36", available: true },
    { id: 3, label: "37", available: true },
    { id: 4, label: "38", available: true },
    { id: 5, label: "39", available: true },
    { id: 6, label: "40", available: true },
    { id: 7, label: "41", available: true },
    { id: 8, label: "42", available: false },
    { id: 9, label: "43", available: true },
    { id: 10, label: "44", available: false }
  ],
  colors: [
    { id: 1, label: "Preto", colorCode: "#000000", available: true },
    { id: 2, label: "Branco", colorCode: "#FFFFFF", available: true },
    { id: 3, label: "Azul", colorCode: "#0d8edf", available: true },
    { id: 4, label: "Vermelho", colorCode: "#FF0000", available: false },
    { id: 5, label: "Verde", colorCode: "#00FF00", available: true }
  ],
  stock: 150
};
