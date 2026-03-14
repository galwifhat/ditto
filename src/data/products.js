export const categories = [
  {
    id: "body-butter",
    name: "Body Butter",
    description:
      "Thick, luxurious moisturizing cream that melts into dry skin for all-day hydration.",
    icon: "🫧",
    color: "from-amber-50 to-orange-50",
    accent: "text-orange-700",
    badge: "Best Seller",
  },
  {
    id: "lotions-creams",
    name: "Lotions & Creams",
    description:
      "Blended with nourishing oils and natural fragrances for your daily skincare ritual.",
    icon: "✨",
    color: "from-rose-50 to-pink-50",
    accent: "text-rose-700",
    badge: "New Arrival",
  },
  {
    id: "lip-balm",
    name: "Lip Balm",
    description:
      "Protective barrier formula that seals in moisture and keeps lips soft in any weather.",
    icon: "💋",
    color: "from-red-50 to-rose-50",
    accent: "text-red-700",
    badge: null,
  },
  {
    id: "hand-foot-cream",
    name: "Hand & Foot Creams",
    description:
      "Intensive repair formula — proven effective on stubborn cracked heels and rough hands.",
    icon: "🤲",
    color: "from-yellow-50 to-amber-50",
    accent: "text-amber-700",
    badge: null,
  },
  {
    id: "face-moisturizer",
    name: "Face Moisturizers",
    description:
      "Gentle, clinically-tested formulas made with natural actives for your daily glow.",
    icon: "🌸",
    color: "from-green-50 to-emerald-50",
    accent: "text-emerald-700",
    badge: "Fan Favorite",
  },
  {
    id: "stretch-mark-cream",
    name: "Stretch Mark Cream",
    description:
      "Specially formulated to support skin elasticity — a trusted choice during pregnancy.",
    icon: "🌿",
    color: "from-teal-50 to-cyan-50",
    accent: "text-teal-700",
    badge: "Pregnancy Safe",
  },
];

export const products = [
  {
    id: 1,
    name: "Whipped Shea Body Butter",
    category: "body-butter",
    description:
      "Cloud-like whipped body butter infused with raw shea, mango butter, and argan oil. Absorbs beautifully without grease.",
    price: 24.99,
    image: "/images/products/shea _butter_cream.png",
    rating: 4.8,
    reviews: 234,
    featured: true,
    tag: "Best Seller",
    ingredients: ["Shea Butter", "Mango Butter", "Argan Oil", "Vitamin E"],
  },
  {
    id: 2,
    name: "Rose & Jasmine Body Lotion",
    category: "lotions-creams",
    description:
      "A silky daily lotion with real rose water, jasmine extract, and sweet almond oil. Your skin will thank you.",
    price: 19.99,
    image: "/images/products/body_lotion.png",
    rating: 4.7,
    reviews: 189,
    featured: true,
    tag: "New",
    ingredients: ["Rose Water", "Jasmine Extract", "Sweet Almond Oil"],
  },
  {
    id: 3,
    name: "Honey & Vanilla Lip Balm",
    category: "lip-balm",
    description:
      "A kissable blend of beeswax, raw honey, and vanilla butter. Soothes and protects against harsh conditions.",
    price: 8.99,
    image: "/images/products/lip_balm.png",
    rating: 4.9,
    reviews: 412,
    featured: true,
    tag: "Fan Favorite",
    ingredients: ["Beeswax", "Raw Honey", "Vanilla Butter", "Vitamin E"],
  },
  {
    id: 4,
    name: "Intensive Repair Hand Cream",
    category: "hand-foot-cream",
    description:
      "Fast-absorbing formula with urea, glycerin, and macadamia oil to visibly heal cracked skin overnight.",
    price: 14.99,
    image: "/images/products/hand_foot_cream.png",
    rating: 4.6,
    reviews: 167,
    featured: true,
    tag: null,
    ingredients: ["Urea", "Glycerin", "Macadamia Oil", "Allantoin"],
  },
  {
    id: 5,
    name: "Radiance Face Moisturizer",
    category: "face-moisturizer",
    description:
      "Lightweight gel-cream with hyaluronic acid, niacinamide, and rosehip oil for a natural, luminous complexion.",
    price: 34.99,
    image: "/images/products/radiance_face_moisturizer.png",
    rating: 4.8,
    reviews: 298,
    featured: true,
    tag: "Premium",
    ingredients: ["Hyaluronic Acid", "Niacinamide", "Rosehip Oil", "Green Tea"],
  },
  {
    id: 6,
    name: "Belly & Beyond Stretch Cream",
    category: "stretch-mark-cream",
    description:
      "Dermatologist-tested stretch mark cream with centella asiatica, cocoa butter, and vitamin C. Pregnancy-safe.",
    price: 29.99,
    image: "/images/products/stretch_cream.png",
    rating: 4.9,
    reviews: 521,
    featured: false,
    tag: "Pregnancy Safe",
    ingredients: [
      "Centella Asiatica",
      "Cocoa Butter",
      "Vitamin C",
      "Collagen Peptides",
    ],
  },
  {
    id: 7,
    name: "Coconut Dream Body Butter",
    category: "body-butter",
    description:
      "A tropical escape in a jar — whipped coconut oil and shea butter with a hint of lime zest.",
    price: 22.99,
    image: "/images/products/coconut_body_butter.png",
    rating: 4.7,
    reviews: 143,
    featured: false,
    tag: null,
    ingredients: ["Coconut Oil", "Shea Butter", "Lime Extract", "Vitamin E"],
  },
  {
    id: 8,
    name: "Cracked Heel Rescue Balm",
    category: "hand-foot-cream",
    description:
      "Thick, healing balm with salicylic acid and shea butter that visibly smooths rough heels in 3 days.",
    price: 16.99,
    image: "/images/products/heel_balm.png",
    rating: 4.5,
    reviews: 203,
    featured: false,
    tag: "Quick Fix",
    ingredients: [
      "Salicylic Acid",
      "Shea Butter",
      "Tea Tree Oil",
      "Peppermint",
    ],
  },
];

export const ingredients = [
  {
    id: 1,
    name: "Raw Shea Butter",
    benefit:
      "Deeply nourishes and repairs the skin barrier with essential fatty acids and vitamins A, E & F.",
    source: "West Africa",
    emoji: "🌰",
    color: "bg-amber-50 border-amber-200",
  },
  {
    id: 2,
    name: "Hyaluronic Acid",
    benefit:
      "Holds up to 1,000x its weight in water — plumps and hydrates at every layer of the skin.",
    source: "Biotechnology",
    emoji: "💧",
    color: "bg-blue-50 border-blue-200",
  },
  {
    id: 3,
    name: "Rosehip Oil",
    benefit:
      "Rich in vitamin C and retinoids, it visibly reduces dark spots and boosts natural radiance.",
    source: "Chile & Peru",
    emoji: "🌹",
    color: "bg-rose-50 border-rose-200",
  },
  {
    id: 4,
    name: "Centella Asiatica",
    benefit:
      "Ancient healing herb that accelerates skin regeneration and soothes inflammation.",
    source: "Southeast Asia",
    emoji: "🌿",
    color: "bg-green-50 border-green-200",
  },
  {
    id: 5,
    name: "Argan Oil",
    benefit:
      "Liquid gold rich in oleic acid that restores elasticity and protects against environmental damage.",
    source: "Morocco",
    emoji: "✨",
    color: "bg-yellow-50 border-yellow-200",
  },
  {
    id: 6,
    name: "Niacinamide",
    benefit:
      "Minimizes pores, evens skin tone, and strengthens the natural skin barrier.",
    source: "Vitamin B3",
    emoji: "🔬",
    color: "bg-purple-50 border-purple-200",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Amara K.",
    location: "Lagos, Nigeria",
    rating: 5,
    review:
      "The Whipped Shea Body Butter has completely transformed my skin. I have very dry skin and nothing worked until I found DITTO. My skin stays moisturized all day long even in the dry harmattan season!",
    product: "Whipped Shea Body Butter",
    avatar: "https://picsum.photos/seed/amara/80/80",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Priya M.",
    location: "Nairobi, Kenya",
    rating: 5,
    review:
      "I've been using the Radiance Face Moisturizer for 3 months now and my skin has never looked better. It's light, non-greasy, and my colleagues keep asking what I'm doing differently!",
    product: "Radiance Face Moisturizer",
    avatar: "https://picsum.photos/seed/priya/80/80",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Sarah T.",
    location: "London, UK",
    rating: 5,
    review:
      "As someone who is pregnant, finding safe skincare is so stressful. The Belly & Beyond Stretch Cream is pregnancy-safe, smells divine, and my bump is so soft. I genuinely love this brand.",
    product: "Belly & Beyond Stretch Cream",
    avatar: "https://picsum.photos/seed/sarah/80/80",
    date: "3 weeks ago",
  },
  {
    id: 4,
    name: "Fatima A.",
    location: "Dubai, UAE",
    rating: 5,
    review:
      "The Honey & Vanilla Lip Balm is the only one I'll ever use. I buy 5 at a time because I'm scared of running out. It's that good. My lips have never been this soft.",
    product: "Honey & Vanilla Lip Balm",
    avatar: "https://picsum.photos/seed/fatima/80/80",
    date: "1 week ago",
  },
  {
    id: 5,
    name: "Joy O.",
    location: "Accra, Ghana",
    rating: 5,
    review:
      "The Cracked Heel Rescue Balm worked in literally 3 days. I had been struggling with dry heels for years and every other product failed. DITTO is a game changer — natural AND effective!",
    product: "Cracked Heel Rescue Balm",
    avatar: "https://picsum.photos/seed/joy/80/80",
    date: "5 days ago",
  },
];
