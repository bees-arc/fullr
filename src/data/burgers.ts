export interface Burger {
  id: string;
  name: string;
  tagline: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  spicyLevel: number; // 0 to 3
  isCheesy: boolean;
  isVegetarian?: boolean;
  description: string;
  ingredients: string[];
  calories?: string;
  popular?: boolean;
}

export const FEATURED_BURGERS: Burger[] = [
  {
    id: "desi-chick",
    name: "Desi Chick",
    tagline: "Spiced to perfection with authentic desi flavours",
    category: "Chicken Burgers",
    price: 900,
    image: "/assets/Desi-Chick.png",
    spicyLevel: 2,
    isCheesy: true,
    isVegetarian: false,
    popular: true,
    description: "Crispy spiced chicken fillet smothered in aromatic desi spices, crowned with fresh house slaw, crunchy pickles, and oozing signature melted cheese between freshly toasted brioche buns.",
    ingredients: ["Spiced Crispy Chicken Fillet", "Desi Masala Glaze", "Full'r Signature Slaw", "Melty Cheddar", "House Pickles", "Brioche Bun"],
    calories: "580 kcal"
  },
  {
    id: "dragon-bait",
    name: "Dragon Bait",
    tagline: "Fiery, bold, and fiercely addictive",
    category: "Signature Burgers",
    price: 900,
    image: "/assets/Dragon-Bait.png",
    spicyLevel: 3,
    isCheesy: true,
    isVegetarian: false,
    popular: true,
    description: "Warning: Hot! Double-glazed fiery chicken or beef patty drenched in Full'r Dragon hot sauce, jalapeño crunches, melted pepper jack cheese, and creamy cool herb aioli to soothe the burn.",
    ingredients: ["Fiery Dragon Glazed Patty", "Pickled Jalapeños", "Pepper Jack Cheese", "Dragon Hot Sauce", "Herb Cool Mayo", "Toasted Sesame Bun"],
    calories: "620 kcal"
  },
  {
    id: "major-general",
    name: "Major General",
    tagline: "The commander of supreme beef satisfaction",
    category: "Beef Burgers",
    price: 900,
    image: "/assets/Major-General.png",
    spicyLevel: 1,
    isCheesy: true,
    isVegetarian: false,
    popular: true,
    description: "Commanding attention with a thick, juicy 100% prime beef patty, caramelized balsamic onions, smoky BBQ drizzle, double layer melted cheese, and crispy beef bacon strips.",
    ingredients: ["100% Prime Grilled Beef", "Caramelized Onions", "Double Cheddar Slice", "Smoky BBQ Sauce", "Crispy Beef Bacon", "Toasted Brioche"],
    calories: "690 kcal"
  },
  {
    id: "beef-me-up-scotty",
    name: "Beef Me Up Scotty",
    tagline: "Beam up into a galaxy of monstrous beef flavours",
    category: "Beef Burgers",
    price: 900,
    image: "/assets/Beef-Me-Up-Scotty.png",
    spicyLevel: 1,
    isCheesy: true,
    isVegetarian: false,
    popular: true,
    description: "Out-of-this-world flavour profile loaded with juicy smashed beef patties, drenched in our molten gold secret cheese sauce, grilled mushroom medley, and garlic butter toasted buns.",
    ingredients: ["Double Smashed Beef Patty", "Secret Molten Cheese Sauce", "Sautéed Herb Mushrooms", "Pickled Relish", "Full'r Cosmic Sauce", "Glazed Bun"],
    calories: "710 kcal"
  },
  {
    id: "meatless-master",
    name: "Meatless Master",
    tagline: "100% plant-powered, zero compromise on taste",
    category: "Vegetarian Burgers",
    price: 900,
    image: "/assets/Meatless-Master.png",
    spicyLevel: 1,
    isCheesy: true,
    isVegetarian: true,
    popular: false,
    description: "Crafted for foodies who love the mess without the meat! Rich seasoned botanical patty, fresh avocado crema, ripe tomato slices, crisp iceberg lettuce, and melted artisanal cheese.",
    ingredients: ["Savory Botanical Patty", "Avocado Crema", "Ripe Farm Tomatoes", "Crisp Lettuce", "Melted Plant-Friendly Cheese", "Whole Grain Brioche"],
    calories: "490 kcal"
  }
];
