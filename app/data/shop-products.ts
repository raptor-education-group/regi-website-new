import { ambassadors } from "./ambassadors";

export type ProductOption = {
  name: string;
  values: string[];
};

export type ShopProduct = {
  slug: string;
  storePath: string;
  name: string;
  price: number;
  category: "Apparel" | "Accessories" | "Adoption";
  image: string;
  description: string;
  details: string;
  options?: ProductOption[];
  featured?: boolean;
};

const shirtSizes = ["Small", "Medium", "Large", "XL", "2XL"];

export const adoptionBirds = ambassadors.map(
  (bird) => `${bird.name} — ${bird.species}`,
);

export const shopProducts: ShopProduct[] = [
  {
    slug: "symbolic-adoption",
    storePath: "/store/p/adopt-a-bird-symbolic-adoption",
    name: "Adopt-a-Bird: Symbolic Adoption",
    price: 50,
    category: "Adoption",
    image: "/images/shop/symbolic-adoption.webp",
    description:
      "Choose a REGI Avian Ambassador and make a one-time symbolic gift toward lifelong care.",
    details:
      "A symbolic adoption does not transfer ownership—the bird remains at REGI as a protected education partner. Each mailed packet includes a signed certificate, professional portrait, and biography. Your gift helps fund food, safe housing, enrichment, and medical care for REGI's ambassadors.",
    options: [{ name: "Adoptee", values: adoptionBirds }],
    featured: true,
  },
  {
    slug: "regi-t-shirt",
    storePath: "/store/p/regi-t-shirt",
    name: "REGI T-Shirt",
    price: 25,
    category: "Apparel",
    image: "/images/shop/regi-tshirt.webp",
    description: "A classic REGI logo tee for everyday wildlife advocates.",
    details:
      "A comfortable short-sleeve shirt featuring the embroidered-style REGI mark. All gift shop proceeds support birds in REGI's care.",
    options: [
      { name: "Color", values: ["Forest green", "Heather gray", "Sand"] },
      { name: "Size", values: shirtSizes },
    ],
    featured: true,
  },
  {
    slug: "regi-hat",
    storePath: "/store/p/regi-hat",
    name: "REGI Hat",
    price: 20,
    category: "Accessories",
    image: "/images/shop/regi-hat.webp",
    description: "An easy-wearing cap embroidered with the REGI logo.",
    details:
      "A practical, adjustable hat for tours, trails, field days, and showing your support wherever you go.",
    options: [{ name: "Fit", values: ["Adjustable"] }],
    featured: true,
  },
  {
    slug: "night-owls-t-shirt",
    storePath: "/store/p/night-owls-graphic-t-shirt",
    name: "Night Owls Graphic T-Shirt",
    price: 22,
    category: "Apparel",
    image: "/images/shop/night-owls.webp",
    description: "A field-guide-inspired gathering of North American owls.",
    details:
      "A richly illustrated owl shirt for night-shift naturalists, bird nerds, and anyone who appreciates silent flight.",
    options: [{ name: "Size", values: shirtSizes }],
  },
  {
    slug: "cool-raptors-t-shirt",
    storePath: "/store/p/cool-raptors-graphic-t-shirt",
    name: "Cool Raptors Graphic T-Shirt",
    price: 22,
    category: "Apparel",
    image: "/images/shop/cool-raptors.webp",
    description: "A raptor-forward graphic tee with plenty of personality.",
    details:
      "A relaxed wildlife graphic that supports the real birds behind REGI's rehabilitation and education work.",
    options: [{ name: "Size", values: shirtSizes }],
  },
  {
    slug: "peregrine-forest-t-shirt",
    storePath: "/store/p/bird-nerd-graphic-t-shirt",
    name: "Peregrine Forest Graphic T-Shirt",
    price: 22,
    category: "Apparel",
    image: "/images/shop/peregrine-forest.webp",
    description: "A peregrine falcon design inspired by wild forest edges.",
    details:
      "A detailed nature tee celebrating one of the world's fastest and most remarkable raptors.",
    options: [{ name: "Size", values: shirtSizes }],
  },
  {
    slug: "north-american-raptors-t-shirt",
    storePath: "/store/p/cool-raptors-graphic-t-shirt-5t4bn-twchn",
    name: "North American Raptors Graphic T-Shirt",
    price: 22,
    category: "Apparel",
    image: "/images/shop/north-american-raptors.webp",
    description: "A visual introduction to familiar North American birds of prey.",
    details:
      "A field-guide-style shirt featuring illustrated raptors and species labels—equal parts wearable art and conversation starter.",
    options: [{ name: "Size", values: shirtSizes }],
  },
  {
    slug: "bird-nerd-t-shirt",
    storePath: "/store/p/bird-nerd-graphic-t-shirt-1",
    name: "Bird Nerd Graphic T-Shirt",
    price: 22,
    category: "Apparel",
    image: "/images/shop/bird-nerd.webp",
    description: "For the person who is always the first to look up.",
    details:
      "A cheerful graphic tee for unapologetic bird people. Your purchase supports specialized avian care and education.",
    options: [{ name: "Size", values: shirtSizes }],
  },
  {
    slug: "in-my-nature-t-shirt",
    storePath: "/store/p/in-my-nature-graphic-t-shirt",
    name: "In My Nature Graphic T-Shirt",
    price: 22,
    category: "Apparel",
    image: "/images/shop/in-my-nature.webp",
    description: "A nature-minded graphic tee built for time outside.",
    details:
      "An easy conversation piece for people who feel most like themselves outdoors and around wildlife.",
    options: [{ name: "Size", values: shirtSizes }],
  },
  {
    slug: "eastern-birds-t-shirt",
    storePath: "/store/p/eastern-birds-graphic-t-shirt",
    name: "Eastern Birds Graphic T-Shirt",
    price: 22,
    category: "Apparel",
    image: "/images/shop/eastern-birds.webp",
    description: "A colorful celebration of eastern North American birdlife.",
    details:
      "A field-guide-inspired graphic that turns a shirt into a small lesson in the birds living around us.",
    options: [{ name: "Size", values: shirtSizes }],
  },
  {
    slug: "i-am-smiling-t-shirt",
    storePath: "/store/p/cool-raptors-graphic-t-shirt-5t4bn",
    name: "I Am Smiling Graphic T-Shirt",
    price: 22,
    category: "Apparel",
    image: "/images/shop/i-am-smiling.webp",
    description: "An eagle expression only a raptor person could love.",
    details:
      "A playful wildlife tee with a bald eagle graphic and just the right amount of REGI humor.",
    options: [{ name: "Size", values: shirtSizes }],
  },
  {
    slug: "obnoxious-plants-t-shirt",
    storePath: "/store/p/obnoxious-plants-graphic-t-shirt",
    name: "Obnoxious Plants Graphic T-Shirt",
    price: 22,
    category: "Apparel",
    image: "/images/shop/obnoxious-plants.webp",
    description: "A botanical design for people who notice the whole habitat.",
    details:
      "Bird conservation begins with healthy landscapes. This nature graphic puts some of the plant side of that story front and center.",
    options: [{ name: "Size", values: shirtSizes }],
  },
  {
    slug: "jabebo-earrings",
    storePath: "/store/p/jabebo-earrings",
    name: "Jabebo Earrings",
    price: 15,
    category: "Accessories",
    image: "/images/shop/jabebo-earrings.webp",
    description: "Lightweight bird earrings made from reclaimed materials.",
    details:
      "A small, wearable nod to conservation. Available designs vary; REGI will confirm the current bird styles when your order request is received.",
    options: [{ name: "Style", values: ["Choose from current bird designs"] }],
  },
];

export function getShopProduct(slug: string) {
  return shopProducts.find((product) => product.slug === slug);
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}
