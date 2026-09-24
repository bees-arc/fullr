export interface InnovationItem {
  id: string;
  name: string;
  category: "Limited Edition" | "Marmite Mania" | "Monster Series" | "Sliders & Sides";
  tagline: string;
  image: string;
  badge: string;
  description: string;
}

export const INNOVATIONS: InnovationItem[] = [
  // Limited Edition & Holiday Specials
  {
    id: "krispy-kringle",
    name: "Krispy Kringle",
    category: "Limited Edition",
    tagline: "The festive crunch extravaganza",
    image: "/assets/Crispy-Kringle.jpg",
    badge: "Christmas Special",
    description: "Special holiday crunch featuring ultra-crispy golden crumbed fillet, cranberry spiced glaze, and holiday melted cheese."
  },
  {
    id: "the-grinch",
    name: "Grinch Grub",
    category: "Limited Edition",
    tagline: "Mischievous flavour explosion",
    image: "/assets/The-Grinch.jpg",
    badge: "Holiday Edition",
    description: "Packed with green herb pesto slaw, double smash patties, and tangled crispy onion rings."
  },
  {
    id: "mistletoe-munch",
    name: "Mistletoe Munch",
    category: "Limited Edition",
    tagline: "Love at first messy bite",
    image: "/assets/Mistletoe-Munch.jpg",
    badge: "Seasonal",
    description: "Savory meets sweet tang with roasted berry compote, double beef patty, and sharp smoked cheddar."
  },
  {
    id: "grim-reaper",
    name: "Grim Reaper",
    category: "Limited Edition",
    tagline: "Dare to conquer the heat",
    image: "/assets/Grim-Reaper.jpg",
    badge: "Spiciest Burger",
    description: "Carolina reaper infusion with ghost pepper cheese sauce and caramelized bacon bits for extreme heat lovers."
  },
  {
    id: "mr-hyde",
    name: "Mr. Hyde",
    category: "Limited Edition",
    tagline: "The monster alter-ego",
    image: "/assets/Mr-Hyde.jpg",
    badge: "Halloween Special",
    description: "Dark toasted brioche, black garlic aioli, double Angus patty, and melted provolone."
  },
  {
    id: "vampire-bites",
    name: "Vampire Bites",
    category: "Sliders & Sides",
    tagline: "Bloody delicious crispy treats",
    image: "/assets/Vampire-Bites.jpg",
    badge: "Halloween Special",
    description: "Bite-sized chicken pops tossed in blood-red spicy glazed drizzle."
  },

  // Marmite Mania
  {
    id: "mighty-marmite",
    name: "Mighty Marmite",
    category: "Marmite Mania",
    tagline: "You either love it, or you LOVE it even more",
    image: "/assets/Mighty-Marmite.jpg",
    badge: "Signature Collab",
    description: "Bold Marmite butter glaze infused into sizzling beef patties with melted cheddar and caramelized shallots."
  },
  {
    id: "marmite-chook",
    name: "Marmite Chook",
    category: "Marmite Mania",
    tagline: "Crispy chicken with an umami punch",
    image: "/assets/Marmite-Chook.jpg",
    badge: "Fan Favourite",
    description: "Juicy buttermilk fried chicken coated in a sticky honey-Marmite glaze with cool slaw."
  },
  {
    id: "cheesy-marmite",
    name: "Cheesy Marmite",
    category: "Marmite Mania",
    tagline: "Molten cheese meets rich umami",
    image: "/assets/Cheesy-Marmite.jpg",
    badge: "Cheese Bomb",
    description: "A cascade of molten Marmite cheddar sauce cascading over double patties."
  },
  {
    id: "marmite-mayo-drumlets",
    name: "Marmite Mayo Crispy Chicken Drumlets",
    category: "Marmite Mania",
    tagline: "Super crunchy drumlets with house Marmite dip",
    image: "/assets/Marmite-Mayo-Drumlets.jpg",
    badge: "Snack Innovation",
    description: "Golden crispy fried chicken drumlets paired with rich creamy Marmite mayo."
  },

  // Monster Series
  {
    id: "gojira",
    name: "Gojira",
    category: "Monster Series",
    tagline: "The King of the Burgerverse",
    image: "/assets/Gojira.jpg",
    badge: "Monster Stack",
    description: "Triple smashed patties, double crispy chicken, four cheese slices, and volcanic spicy drizzle."
  },
  {
    id: "kong",
    name: "Kong",
    category: "Monster Series",
    tagline: "Colossal strength and flavour",
    image: "/assets/Kong.jpg",
    badge: "Mega Size",
    description: "Towering stack of hand-pressed beef, crispy onion crown, and rich secret burger sauce."
  },
  {
    id: "weapon-x",
    name: "Weapon X",
    category: "Monster Series",
    tagline: "Clawed with supreme deliciousness",
    image: "/assets/Weapon-X.jpg",
    badge: "Comic Con Series",
    description: "Loaded with pulled beef ribs, crispy onion straws, and chipotle BBQ glaze."
  },
  {
    id: "the-merc",
    name: "The Merc",
    category: "Monster Series",
    tagline: "Maximum effort, maximum cheese",
    image: "/assets/The-Merc.jpg",
    badge: "Comic Con Series",
    description: "Double peppered beef, fiery red hot sauce, and chimichurri mayo."
  },
  {
    id: "royal-spirit",
    name: "Royal Spirit",
    category: "Monster Series",
    tagline: "Regal indulgence for burger royalty",
    image: "/assets/Royal-Spirit.jpg",
    badge: "Match Special",
    description: "Golden honey mustard glazed chicken fillet with premium aged cheese."
  },
  {
    id: "thomian-grit",
    name: "Thomian Grit",
    category: "Monster Series",
    tagline: "Bold flavours that fight hard",
    image: "/assets/Thomian-Grit.jpg",
    badge: "Match Special",
    description: "Spicy battered chicken, crunchy jalapeño poppers, and zesty secret sauce."
  },

  // Sliders & Sides
  {
    id: "beef-brisket-sliders",
    name: "Beef Brisket Sliders",
    category: "Sliders & Sides",
    tagline: "Slow-cooked, melt-in-mouth beef goodness",
    image: "/assets/Beef-Brisket-Sliders.jpg",
    badge: "Chef's Cut",
    description: "12-hour slow smoked pulled beef brisket drenched in house jus, tucked in buttery mini brioche sliders."
  },
  {
    id: "chicken-shawarma-sliders",
    name: "Chicken Shawarma Sliders",
    category: "Sliders & Sides",
    tagline: "Middle-eastern spices meet American sliders",
    image: "/assets/Chicken-Shawarma-Sliders.jpg",
    badge: "Fusion Classic",
    description: "Marinated shawarma chicken shavings with garlic toum aioli and pickled turnips."
  },
  {
    id: "call-me-maybe",
    name: "Call me, Maybe",
    category: "Sliders & Sides",
    tagline: "Crispy bites you can't resist calling back",
    image: "/assets/Call-Me-Maybe.jpg",
    badge: "Must Try",
    description: "Cheesy filled crispy bites fried to golden perfection with tangy cocktail dip."
  },
  {
    id: "love-bite",
    name: "Love Bite",
    category: "Sliders & Sides",
    tagline: "Sweet & savory Valentine sensation",
    image: "/assets/Love-Bite.jpg",
    badge: "Valentine Special",
    description: "Red velvet glazed sliders with tender spiced chicken and honey goat cheese."
  },
  {
    id: "loaded-fries",
    name: "Loaded Fries",
    category: "Sliders & Sides",
    tagline: "The messiest, gooiest fries in town",
    image: "/assets/Loaded-Fries.jpg",
    badge: "Top Seller",
    description: "Crispy seasoned fries smothered in molten cheese, bacon crumbles, jalapeños, and secret sauce."
  },
  {
    id: "original-drumlets",
    name: "Original Crispy Chicken Drumlets",
    category: "Sliders & Sides",
    tagline: "Golden crunch in every bite",
    image: "/assets/Original-Drumlets.jpg",
    badge: "Crispy AF",
    description: "Hand-breaded juicy drumlets seasoned with 11 secret herbs and spices."
  },
  {
    id: "korean-drumlets",
    name: "Korean Crispy Chicken Drumlets",
    category: "Sliders & Sides",
    tagline: "Sweet, spicy, sticky perfection",
    image: "/assets/Korean-Drumlets.jpg",
    badge: "K-Style",
    description: "Extra crispy double-fried drumlets coated in authentic Gochujang sesame glaze."
  }
];
