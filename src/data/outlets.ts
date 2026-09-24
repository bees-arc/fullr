export interface Outlet {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  phoneDisplay: string;
  mapsUrl: string;
  dineIn: boolean;
  takeaway: boolean;
  delivery: boolean;
  hours: string;
  lat: number;
  lng: number;
  highlight?: string;
  image: string;
  googleReviewUrl?: string;
}

export const OUTLETS: Outlet[] = [
  {
    id: "pita-kotte",
    name: "Pita Kotte",
    address: "641B Kotte Road, Sri Jayawardenepura Kotte",
    city: "Kotte",
    phone: "+94112116909",
    phoneDisplay: "011 211 6909",
    mapsUrl: "https://maps.app.goo.gl/UDFsQZuDANkgmgqc6",
    googleReviewUrl: "https://g.page/r/CQlY8wmiaMnrEBM/review",
    dineIn: true,
    takeaway: true,
    delivery: true,
    hours: "11:00 AM - 11:00 PM Daily",
    lat: 6.8912,
    lng: 79.9145,
    highlight: "Dine-in Available • Cozy Ambience",
    image: "/assets/outlets/pita_kotte.jpg"
  },
  {
    id: "crescat",
    name: "Crescat Boulevard",
    address: "Ground Floor, Crescat Boulevard, Galle Road, Colombo 03",
    city: "Colombo 03",
    phone: "+94112116901",
    phoneDisplay: "011 211 6901",
    mapsUrl: "https://maps.app.goo.gl/12bSmL3saEM7tE227",
    googleReviewUrl: "https://g.page/r/CQlY8wmiaMnrEBM/review",
    dineIn: true,
    takeaway: true,
    delivery: true,
    hours: "10:30 AM - 10:30 PM Daily",
    lat: 6.9175,
    lng: 79.8492,
    highlight: "Heart of Colombo • Mall Parking",
    image: "/assets/outlets/crescat.jpg"
  },
  {
    id: "welisara",
    name: "Welisara",
    address: "445, Negombo Road, Welisara",
    city: "Welisara",
    phone: "+94112116906",
    phoneDisplay: "011 211 6906",
    mapsUrl: "https://maps.app.goo.gl/KEkTqb8tiavgwZ8Y6",
    googleReviewUrl: "https://g.page/r/CQlY8wmiaMnrEBM/review",
    dineIn: false,
    takeaway: true,
    delivery: true,
    hours: "11:00 AM - 11:00 PM Daily",
    lat: 6.9961,
    lng: 79.9023,
    highlight: "Express Takeaway & Fast Delivery",
    image: "/assets/outlets/welisara.jpg"
  },
  {
    id: "mount-lavinia",
    name: "Mount Lavinia",
    address: "69 Hotel Road, Mount Lavinia",
    city: "Mount Lavinia",
    phone: "+94112116902",
    phoneDisplay: "011 211 6902",
    mapsUrl: "https://maps.app.goo.gl/ac2rcKQVgb9VPK918",
    googleReviewUrl: "https://g.page/r/CQlY8wmiaMnrEBM/review",
    dineIn: true,
    takeaway: true,
    delivery: true,
    hours: "11:00 AM - 11:30 PM Daily",
    lat: 6.8354,
    lng: 79.8642,
    highlight: "Beachside Dine-in Experience",
    image: "/assets/outlets/mount_lavinia.jpg"
  },
  {
    id: "maharagama",
    name: "Maharagama",
    address: "355, Maharagama Road, Boralesgamuwa",
    city: "Boralesgamuwa / Maharagama",
    phone: "+94112116907",
    phoneDisplay: "011 211 6907",
    mapsUrl: "https://maps.app.goo.gl/wpF7RSZJYwZdmw6S9",
    googleReviewUrl: "https://g.page/r/CQlY8wmiaMnrEBM/review",
    dineIn: false,
    takeaway: true,
    delivery: true,
    hours: "11:00 AM - 11:00 PM Daily",
    lat: 6.8458,
    lng: 79.9038,
    highlight: "Quick Curbside Pickup",
    image: "/assets/outlets/maharagama.jpg"
  },
  {
    id: "nawala",
    name: "Nawala",
    address: "544 Nawala Road, Sri Jayewardenepura Kotte",
    city: "Nawala",
    phone: "+94112116903",
    phoneDisplay: "011 211 6903",
    mapsUrl: "https://maps.app.goo.gl/2XHi3eqkZ9hGWB49A",
    googleReviewUrl: "https://g.page/r/CQlY8wmiaMnrEBM/review",
    dineIn: false,
    takeaway: true,
    delivery: true,
    hours: "11:00 AM - 11:00 PM Daily",
    lat: 6.8876,
    lng: 79.8892,
    highlight: "Drive-thru & Delivery Hub",
    image: "/assets/outlets/nawala.jpg"
  },
  {
    id: "colombo-05",
    name: "Colombo 05",
    address: "57 D. S. Fonseka Rd, Colombo 00500",
    city: "Colombo 05",
    phone: "+94112116904",
    phoneDisplay: "011 211 6904",
    mapsUrl: "https://maps.app.goo.gl/V4R4rasTG97vze3cA",
    googleReviewUrl: "https://g.page/r/CQlY8wmiaMnrEBM/review",
    dineIn: true,
    takeaway: true,
    delivery: true,
    hours: "11:00 AM - 11:00 PM Daily",
    lat: 6.8834,
    lng: 79.8661,
    highlight: "Full Dine-in Restaurant & Outdoor Seating",
    image: "/assets/outlets/colombo_05.jpg"
  },
  {
    id: "thalawathugoda",
    name: "Thalawathugoda",
    address: "656A Pannipitiya Road, Thalawathugoda",
    city: "Thalawathugoda",
    phone: "+94112116905",
    phoneDisplay: "011 211 6905",
    mapsUrl: "https://maps.app.goo.gl/Dobw8SNgz75TDNmX7",
    googleReviewUrl: "https://g.page/r/CQlY8wmiaMnrEBM/review",
    dineIn: false,
    takeaway: true,
    delivery: true,
    hours: "11:00 AM - 11:00 PM Daily",
    lat: 6.8732,
    lng: 79.9324,
    highlight: "Fast Takeaway & Delivery Point",
    image: "/assets/outlets/coming_soon.png"
  }
];
