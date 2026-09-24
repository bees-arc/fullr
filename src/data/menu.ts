export interface DigitalMenuPage {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export const DIGITAL_MENU_PAGES: DigitalMenuPage[] = [
  {
    id: "menu-p1",
    title: "Page 1: Signature Burgers & Combos",
    subtitle: "Desi Chick, Dragon Bait, Major General, Beef Me Up Scotty",
    image: "/assets/Digital-Menu-01.jpg"
  },
  {
    id: "menu-p2",
    title: "Page 2: Monster Series, Sliders & Wings",
    subtitle: "Gojira, Kong, Brisket Sliders, Crispy Drumlets",
    image: "/assets/Digital-Menu-02.jpg"
  },
  {
    id: "menu-p3",
    title: "Page 3: Loaded Sides, Shakes & Refreshers",
    subtitle: "Cheesy Loaded Fries, Onion Rings, Thickshakes",
    image: "/assets/Digital-Menu-03.jpg"
  },
  {
    id: "menu-promo",
    title: "Current Promotions & Combos",
    subtitle: "Special limited-time offers & bundle deals",
    image: "/assets/Promo-July.png"
  }
];

export interface MenuItem {
  id: string;
  name: string;
  category: "Burgers" | "Sliders" | "Sides & Drumlets" | "Beverages";
  price: number;
  description: string;
  isSpicy?: boolean;
  isPopular?: boolean;
  image?: string;
}

export const MENU_ITEMS: MenuItem[] = [
  // Burgers
  {
    id: "m-desi-chick",
    name: "Desi Chick Burger",
    category: "Burgers",
    price: 900,
    description: "Crispy chicken fillet with authentic desi spices, signature slaw & cheddar.",
    isSpicy: true,
    isPopular: true,
    image: "/assets/Desi-Chick.png"
  },
  {
    id: "m-dragon-bait",
    name: "Dragon Bait Burger",
    category: "Burgers",
    price: 900,
    description: "Fiery spicy patty, jalapeños, pepper jack & cool herb mayo.",
    isSpicy: true,
    isPopular: true,
    image: "/assets/Dragon-Bait.png"
  },
  {
    id: "m-major-general",
    name: "Major General",
    category: "Burgers",
    price: 900,
    description: "100% prime beef, caramelized balsamic onions, smoky BBQ & melted cheese.",
    isPopular: true,
    image: "/assets/Major-General.png"
  },
  {
    id: "m-beef-me-up",
    name: "Beef Me Up Scotty",
    category: "Burgers",
    price: 900,
    description: "Double smashed beef patties, molten cheddar cascade & grilled mushrooms.",
    isPopular: true,
    image: "/assets/Beef-Me-Up-Scotty.png"
  },
  {
    id: "m-meatless-master",
    name: "Meatless Master",
    category: "Burgers",
    price: 900,
    description: "100% botanical patty, avocado crema, tomatoes & fresh brioche bun.",
    image: "/assets/Meatless-Master.png"
  },

  // Sliders
  {
    id: "m-beef-brisket-sliders",
    name: "Slow Cooked Beef Brisket Sliders (3pcs)",
    category: "Sliders",
    price: 1350,
    description: "12-hour slow smoked pulled beef brisket drenched in house jus on mini brioche.",
    isPopular: true,
    image: "/assets/Beef-Brisket-Sliders.jpg"
  },
  {
    id: "m-chicken-shawarma-sliders",
    name: "Chicken Shawarma Sliders (3pcs)",
    category: "Sliders",
    price: 1150,
    description: "Marinated shawarma spiced chicken with garlic toum & pickled turnips.",
    image: "/assets/Chicken-Shawarma-Sliders.jpg"
  },
  {
    id: "m-call-me-maybe",
    name: "Call Me Maybe Cheesy Bites",
    category: "Sliders",
    price: 850,
    description: "Crispy fried golden cheesy balls served with tangy cocktail sauce.",
    image: "/assets/Call-Me-Maybe.jpg"
  },

  // Sides & Drumlets
  {
    id: "m-loaded-fries",
    name: "Full'r Signature Loaded Fries",
    category: "Sides & Drumlets",
    price: 890,
    description: "Crispy fries layered with hot molten cheese, jalapeños, crispy bacon bits & sauce.",
    isPopular: true,
    image: "/assets/Loaded-Fries.jpg"
  },
  {
    id: "m-original-drumlets",
    name: "Original Crispy Drumlets (6pcs)",
    category: "Sides & Drumlets",
    price: 990,
    description: "Golden crispy fried chicken drumlets seasoned with house secret spices.",
    isPopular: true,
    image: "/assets/Original-Drumlets.jpg"
  },
  {
    id: "m-korean-drumlets",
    name: "Korean Gochujang Drumlets (6pcs)",
    category: "Sides & Drumlets",
    price: 1100,
    description: "Extra crunchy double-fried drumlets coated in sweet & spicy Korean glaze.",
    isSpicy: true,
    image: "/assets/Korean-Drumlets.jpg"
  },
  {
    id: "m-marmite-drumlets",
    name: "Marmite Mayo Crispy Drumlets (6pcs)",
    category: "Sides & Drumlets",
    price: 1100,
    description: "Tossed in umami rich Marmite butter glaze served with special Marmite mayo dip.",
    image: "/assets/Marmite-Mayo-Drumlets.jpg"
  },

  // Beverages
  {
    id: "m-shake-choc",
    name: "Triple Choc Fudge Monster Shake",
    category: "Beverages",
    price: 750,
    description: "Rich blended chocolate ice cream, chocolate syrup & whipped cream crown."
  },
  {
    id: "m-shake-vanilla",
    name: "Classic Salted Caramel Shake",
    category: "Beverages",
    price: 750,
    description: "Velvety vanilla ice cream swirled with house-made salted caramel."
  },
  {
    id: "m-soda-lime",
    name: "Electric Blue Lemonade",
    category: "Beverages",
    price: 490,
    description: "Sparkling fresh limeade with blue curaçao syrup and mint."
  },
  {
    id: "m-soda-soft",
    name: "Chilled Soft Drinks (Can)",
    category: "Beverages",
    price: 250,
    description: "Coke, Sprite, Fanta, Ginger Beer or Soda."
  }
];
