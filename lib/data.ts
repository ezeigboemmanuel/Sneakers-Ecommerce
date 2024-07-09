import Image2 from "@/assets/sneakers/image2.png";
import Image3 from "@/assets/sneakers/image3.png";
import Image5 from "@/assets/sneakers/image5.png";
import Stars1 from "@/assets/icons/stars1.svg";
import Stars2 from "@/assets/icons/stars2.svg";
import PreImg1 from "@/assets/sneakers/preimg1.png";
import PreImg2 from "@/assets/sneakers/preimg2.png";
import PreImg3 from "@/assets/sneakers/preimg3.png";
import PreImg4 from "@/assets/sneakers/preimg4.png";
import PreImg5 from "@/assets/sneakers/preimg5.png";
import PreImg6 from "@/assets/sneakers/preimg6.png";
import zephyr1 from "@/assets/mainsneakers/Sneaker 1/air-jordan-4-retro-oxidized-green-mens-shoes-PNtDJp (1).jpeg"
import zephyr2 from "@/assets/mainsneakers/Sneaker 1/air-jordan-4-retro-oxidized-green-mens-shoes-PNtDJp.png"
import zephyr3 from "@/assets/mainsneakers/Sneaker 1/air-jordan-4-retro-oxidized-green-mens-shoes-PNtDJp (2).jpeg"
import zephyr4 from "@/assets/mainsneakers/Sneaker 1/air-jordan-4-retro-oxidized-green-mens-shoes-PNtDJp (2).png"
import zephyr5 from "@/assets/mainsneakers/Sneaker 1/air-jordan-4-retro-oxidized-green-mens-shoes-PNtDJp (3).png"
import zephyr6 from "@/assets/mainsneakers/Sneaker 1/air-jordan-4-retro-oxidized-green-mens-shoes-PNtDJp.jpeg"
import atlas1 from "@/assets/mainsneakers/Sneaker 3/air-jordan-3-retro-tex-desert-camo-womens-shoes-FMR3S0.jpeg"
import atlas2 from "@/assets/mainsneakers/Sneaker 3/air-jordan-3-retro-tex-desert-camo-womens-shoes-FMR3S0 (1).jpeg"
import atlas3 from "@/assets/mainsneakers/Sneaker 3/air-jordan-3-retro-tex-desert-camo-womens-shoes-FMR3S0 (2).jpeg"
import atlas4 from "@/assets/mainsneakers/Sneaker 3/air-jordan-3-retro-tex-desert-camo-womens-shoes-FMR3S0 (3).jpeg"
import atlas5 from "@/assets/mainsneakers/Sneaker 3/air-jordan-3-retro-tex-desert-camo-womens-shoes-FMR3S0 (4).jpeg"
import atlas6 from "@/assets/mainsneakers/Sneaker 3/air-jordan-3-retro-tex-desert-camo-womens-shoes-FMR3S0 (5).jpeg"
import surge1 from "@/assets/mainsneakers/Sneaker 7/Black/jordan-spizike-low-big-kids-shoes-t6s9lN.png"
import surge2 from "@/assets/mainsneakers/Sneaker 7/Black/jordan-spizike-low-big-kids-shoes-t6s9lN (1).jpeg"
import surge3 from "@/assets/mainsneakers/Sneaker 7/Black/jordan-spizike-low-big-kids-shoes-t6s9lN (1).png"
import surge4 from "@/assets/mainsneakers/Sneaker 7/Black/jordan-spizike-low-big-kids-shoes-t6s9lN (2).png"
import surge5 from "@/assets/mainsneakers/Sneaker 7/Black/jordan-spizike-low-big-kids-shoes-t6s9lN (3).png"
import surge6 from "@/assets/mainsneakers/Sneaker 7/Black/jordan-spizike-low-big-kids-shoes-t6s9lN (4).png"
import { StaticImageData } from "next/image";

interface Review {
  stars: StaticImageData;
  name: string;
  date: string;
  review: string;
}

interface Images {
  imageUrl: StaticImageData;
}

export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  colours: StaticImageData[];
  sizes: string[];
  shipping: string;
  reviews: Review[];
  images: Images[];
};

export const products: Product[] = [
  {
    id: "1",
    name: "Novaweave Phantom Pulse",
    category: "Men's Shoes",
    colours: [Image2, Image3, Image5],
    price: "100,540",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46"],
    description: `We're passionate about getting your fresh kicks to you fast. That's why we offer a variety of shipping options to choose from at checkout, ensuring you get your new favourites exactly when you need them. \n\nDidn't find your perfect fit? No worries! We understand that sometimes things don't work out as planned. Our hassle-free return policy allows you to return unworn items within 3 days for a full refund or exchange.`,
    shipping: `We strive to deliver your order promptly and efficiently. All orders are processed within 1-2 business days. Standard shipping typically takes 5-7 business days. Expedited and express shipping options are available at checkout for an additional fee.`,
    reviews: [
      {
        stars: Stars1,
        name: "Taiwo",
        date: "8 July, 2024",
        review:
          "These shoes are incredible! So light and breathable, it feels like I'm walking on air",
      },
      {
        stars: Stars2,
        name: "Sarah B",
        date: "8 July, 2024",
        review:
          "Not sure what the 'Phantom Pulse' does exactly, but these sneakers are amazing for running",
      },
    ],
    images: [
      {
        imageUrl: PreImg1,
      },
      {
        imageUrl: PreImg2,
      },
      {
        imageUrl: PreImg3,
      },
      {
        imageUrl: PreImg4,
      },
      {
        imageUrl: PreImg5,
      },
      {
        imageUrl: PreImg6,
      },
    ],
  },

  {
    id: "2",
    name: "Zephyr Swiftstrike Pro",
    category: "Men's Shoes",
    colours: [Image2, Image3, Image5],
    price: "140,540",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46"],
    description: `We're passionate about getting your fresh kicks to you fast. That's why we offer a variety of shipping options to choose from at checkout, ensuring you get your new favourites exactly when you need them. \n\nDidn't find your perfect fit? No worries! We understand that sometimes things don't work out as planned. Our hassle-free return policy allows you to return unworn items within 3 days for a full refund or exchange.`,
    shipping: `We strive to deliver your order promptly and efficiently. All orders are processed within 1-2 business days. Standard shipping typically takes 5-7 business days. Expedited and express shipping options are available at checkout for an additional fee.`,
    reviews: [
      {
        stars: Stars1,
        name: "Taiwo",
        date: "8 July, 2024",
        review:
          "These shoes are incredible! So light and breathable, it feels like I'm walking on air",
      },
      {
        stars: Stars2,
        name: "Sarah B",
        date: "8 July, 2024",
        review:
          "Not sure what the 'Phantom Pulse' does exactly, but these sneakers are amazing for running",
      },
    ],
    images: [
      {
        imageUrl: zephyr1,
      },
      {
        imageUrl: zephyr2,
      },
      {
        imageUrl: zephyr3,
      },
      {
        imageUrl: zephyr4,
      },
      {
        imageUrl: zephyr5,
      },
      {
        imageUrl: zephyr6,
      },
    ],
  },

  {
    id: "3",
    name: "Atlas Ascent GTX",
    category: "Women's Shoes",
    colours: [Image2, Image3, Image5],
    price: "260,000",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46"],
    description: `We're passionate about getting your fresh kicks to you fast. That's why we offer a variety of shipping options to choose from at checkout, ensuring you get your new favourites exactly when you need them. \n\nDidn't find your perfect fit? No worries! We understand that sometimes things don't work out as planned. Our hassle-free return policy allows you to return unworn items within 3 days for a full refund or exchange.`,
    shipping: `We strive to deliver your order promptly and efficiently. All orders are processed within 1-2 business days. Standard shipping typically takes 5-7 business days. Expedited and express shipping options are available at checkout for an additional fee.`,
    reviews: [
      {
        stars: Stars1,
        name: "Taiwo",
        date: "8 July, 2024",
        review:
          "These shoes are incredible! So light and breathable, it feels like I'm walking on air",
      },
      {
        stars: Stars2,
        name: "Sarah B",
        date: "8 July, 2024",
        review:
          "Not sure what the 'Phantom Pulse' does exactly, but these sneakers are amazing for running",
      },
    ],
    images: [
      {
        imageUrl: atlas1,
      },
      {
        imageUrl: atlas2,
      },
      {
        imageUrl: atlas3,
      },
      {
        imageUrl: atlas4,
      },
      {
        imageUrl: atlas5,
      },
      {
        imageUrl: atlas6,
      },
    ],
  },
  {
    id: "4",
    name: "Surge Conduit Bioflex",
    category: "Men's Shoes",
    colours: [Image2, Image3, Image5],
    price: "40,540",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46"],
    description: `We're passionate about getting your fresh kicks to you fast. That's why we offer a variety of shipping options to choose from at checkout, ensuring you get your new favourites exactly when you need them. \n\nDidn't find your perfect fit? No worries! We understand that sometimes things don't work out as planned. Our hassle-free return policy allows you to return unworn items within 3 days for a full refund or exchange.`,
    shipping: `We strive to deliver your order promptly and efficiently. All orders are processed within 1-2 business days. Standard shipping typically takes 5-7 business days. Expedited and express shipping options are available at checkout for an additional fee.`,
    reviews: [
      {
        stars: Stars1,
        name: "Taiwo",
        date: "8 July, 2024",
        review:
          "These shoes are incredible! So light and breathable, it feels like I'm walking on air",
      },
      {
        stars: Stars2,
        name: "Sarah B",
        date: "8 July, 2024",
        review:
          "Not sure what the 'Phantom Pulse' does exactly, but these sneakers are amazing for running",
      },
    ],
    images: [
      {
        imageUrl: surge1,
      },
      {
        imageUrl: surge2,
      },
      {
        imageUrl: surge3,
      },
      {
        imageUrl: surge4,
      },
      {
        imageUrl: surge5,
      },
      {
        imageUrl: surge6,
      },
    ],
  },
];
