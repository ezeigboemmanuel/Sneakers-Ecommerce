export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Product 1",
    description: "This is the description for product 1",
    price: 29.99,
    imageUrl: "/assets/sneakers/image1.png",
  },
  {
    id: "2",
    name: "Product 2",
    description: "This is the description for product 2",
    price: 49.99,
    imageUrl: "/assets/sneakers/image1.png",
  },
];
