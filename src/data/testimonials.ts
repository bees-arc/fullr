export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  avatarText: string;
  verified: boolean;
}

export const TRUSTINDEX_INFO = {
  score: 4.5,
  totalReviews: "1,200+",
  status: "Top Rated Restaurant verified by Trustindex",
  description: "Trustindex verifies that Full'r Burgers has a review score above 4.5, based on reviews collected on Google over the past 12 months, qualifying it to receive the Top Rated Certificate.",
  certificateUrl: "https://www.trustindex.io/?a=sys&c=wp-top-rated-badge&url=/the-trustindex-verified-badge/"
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rev-1",
    name: "Akila Perera",
    rating: 5,
    date: "1 week ago",
    comment: "Hands down the best burgers in Colombo! The Desi Chick is unmatched with its crunch and sauce balance. It really gets messy, but that's what makes it so delicious!",
    avatarText: "AP",
    verified: true
  },
  {
    id: "rev-2",
    name: "Shenali Fernando",
    rating: 5,
    date: "2 weeks ago",
    comment: "Major General and Loaded Fries are a cheat-meal dream. Extremely juicy patties, freshly toasted brioche, and friendly staff at Pita Kotte!",
    avatarText: "SF",
    verified: true
  },
  {
    id: "rev-3",
    name: "Dilantha Silva",
    rating: 5,
    date: "3 weeks ago",
    comment: "I was skeptical about the Marmite burger, but wow—Mighty Marmite blew my mind. True culinary innovation happening right here in Sri Lanka.",
    avatarText: "DS",
    verified: true
  },
  {
    id: "rev-4",
    name: "Nadeesha Jayawardena",
    rating: 5,
    date: "a month ago",
    comment: "Quick delivery, piping hot and fresh. Even their packaging is top tier. Beef Me Up Scotty is pure heaven!",
    avatarText: "NJ",
    verified: true
  }
];
