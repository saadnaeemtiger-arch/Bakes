import { Category, Product, Testimonial, FAQItem } from "./types";

export const CATEGORIES: Category[] = [
  {
    id: "birthday",
    name: "Birthday Cakes",
    description: "Whimsical, colorful, and customized birthday masterpieces baked to make your special day unforgettable.",
    image: "https://images.unsplash.com/photo-1504113888839-1c8003a729fb?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "wedding",
    name: "Wedding Cakes",
    description: "Sophisticated multi-tiered designs featuring handcrafted florals and luxurious textures tailored to your love story.",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "anniversary",
    name: "Anniversary Cakes",
    description: "Elegant bakes celebrating milestones, crafted with premium fillings and stunning refined details.",
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "custom",
    name: "Custom Cakes",
    description: "Bring your wildest dreams to life. If you can imagine it, Mom can bake it with flawless craftsmanship.",
    image: "https://images.unsplash.com/photo-1562266563-fa44c2ec415f?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "cupcakes",
    name: "Cupcakes",
    description: "Delightful mini treats, moist and crowned with smooth, decadent custom-piped buttercream.",
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "brownies",
    name: "Brownies",
    description: "Fudgy, dense, and packed with Belgian chocolate. Crinkly tops and soft gooey centers.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "cookies",
    name: "Cookies",
    description: "Crispy edges, soft centers. Handcrafted standard and stuffed cookies that melt in your mouth.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "pastries",
    name: "Pastries",
    description: "Golden flaky tarts, eclairs, and handmade choux pastry filled with luscious custards.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "cheesecakes",
    name: "Cheesecakes",
    description: "Creamy, rich, slow-baked New York style cheesecakes with custom berry or biscuit toppings.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "boxes",
    name: "Dessert Boxes",
    description: "Assorted curation of Mom's signature bakes—perfect for gifts, picnic treats, or corporate sharing.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Chocolate Fudge Cake",
    description: "A decadent triple-layer chocolate cake covered in luxury Belgian chocolate fudge frosting and finished with chocolate curls.",
    price: "$65",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop&q=80",
    category: "custom",
    tag: "Best Seller"
  },
  {
    id: "p2",
    name: "Red Velvet Bliss Cake",
    description: "Velvety smooth red velvet layers paired with a signature cloud-like cream cheese frosting, dusted with crumbs.",
    price: "$70",
    image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?w=800&auto=format&fit=crop&q=80",
    category: "birthday",
    tag: "Crowd Favorite"
  },
  {
    id: "p3",
    name: "Vanilla Celebration Cake",
    description: "Classic Madagascar vanilla bean sponge cake layered with premium strawberry conserve and silky vanilla buttercream.",
    price: "$65",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13636?w=800&auto=format&fit=crop&q=80",
    category: "birthday",
    tag: "Classic"
  },
  {
    id: "p4",
    name: "Lotus Biscoff Dream Cake",
    description: "Biscoff cookie-infused sponge layers filled with crunchy cookie butter spread, frosted in Biscoff whipped cream.",
    price: "$75",
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=800&auto=format&fit=crop&q=80",
    category: "custom",
    tag: "Trending"
  },
  {
    id: "p5",
    name: "Strawberry Rose Cake",
    description: "Fresh strawberry sponge cake filled with a delicate hand-simmered organic strawberry compote and whipped rose chantilly.",
    price: "$72",
    image: "https://images.unsplash.com/photo-1464349110291-2f6ed1848b5f?w=800&auto=format&fit=crop&q=80",
    category: "anniversary",
    tag: "Elegant"
  },
  {
    id: "p6",
    name: "Floral Wedding Cake",
    description: "A gorgeous modern multi-tier wedding cake decorated with edible organic pressed gold leaf and fresh pastel flowers.",
    price: "$280",
    image: "https://images.unsplash.com/photo-1527525443983-6e60c75ecc04?w=800&auto=format&fit=crop&q=80",
    category: "wedding",
    tag: "Premium"
  },
  {
    id: "p7",
    name: "Luxury Cupcake Box",
    description: "A collection of 12 artisan cupcakes in assorted flavors: Double Chocolate, Vanilla Raspberry, Salted Caramel, and Red Velvet.",
    price: "$45",
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=800&auto=format&fit=crop&q=80",
    category: "cupcakes",
    tag: "Gift Choice"
  },
  {
    id: "p8",
    name: "Mini Dessert Collection",
    description: "A deluxe sharing assortment of 16 mini pastries, featuring chocolate eclairs, fruit tarts, and stuffed cookies.",
    price: "$55",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&auto=format&fit=crop&q=80",
    category: "boxes",
    tag: "Perfect Sharing"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Jenkins",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
    rating: 5,
    review: "Mom created our wedding cake and it was stunning! Not only was the floral detailing gorgeous, but the Chocolate Fudge flavor was rich and moist. Every single guest asked where we got it. Absolute perfection!",
    tag: "Wedding Cake"
  },
  {
    id: "t2",
    name: "David Miller",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    rating: 5,
    review: "Ordered a custom outer space themed birthday cake for my son. The design exceeded my expectations, and the cake tasted incredible—it was so fresh and soft. Mom is extremely talented!",
    tag: "Custom Birthday Cake"
  },
  {
    id: "t3",
    name: "Elena Rostova",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
    rating: 5,
    review: "I get the Lotus Biscoff cake for every milestone celebration. The attention to detail and love that goes into these bakes is so obvious. The prices are very reasonable for this luxury level.",
    tag: "Biscoff Celebration"
  },
  {
    id: "t4",
    name: "Marcus Aurelius",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
    rating: 5,
    review: "We ordered the Luxury Cupcake Box and custom brownies for our office party. They were gone in literally 10 minutes! The packaging is elegant, making it feel like a high-end gourmet gift.",
    tag: "Cupcakes & Brownies"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How can I place an order?",
    answer: "You can place an order by browsing our collections and using our live 'Custom Order Inquiry' wizard, chatting with our AI Baking Consultant who can estimate your order, or by filling out our contact form. Once we receive your request, Mom will contact you within 24 hours to finalize details and confirm payment."
  },
  {
    question: "How much notice is required for orders?",
    answer: "For standard signature cakes, cupcakes, and dessert boxes, we require at least 3-4 days' notice. For elaborate custom designs and multi-tier wedding cakes, we recommend booking 2-4 weeks in advance to secure your date."
  },
  {
    question: "Can I request custom flavors or dietary designs?",
    answer: "Absolutely! We love personalized requests. We offer a variety of options including gluten-free, eggless, dairy-free, and vegan recipe bases. Just mention your dietary needs or flavor concepts in our custom order builder."
  },
  {
    question: "Do you offer delivery or pickup?",
    answer: "We offer secure, temperature-controlled delivery for tiered cakes and larger orders within a 25-mile radius of our bakery. Contactless pickup is also available directly from our home bakery workspace in sweet comfort."
  },
  {
    question: "Which payment methods do you accept?",
    answer: "We accept secure digital payments including credit/debit cards, Apple Pay, Google Pay, PayPal, and Venmo. A 50% deposit is required to lock in custom orders, with the balance due upon delivery or pickup."
  }
];

export const GALLERY_ITEMS = [
  {
    title: "Enchanted Garden Wedding Cake",
    category: "Wedding Cakes",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&auto=format&fit=crop&q=80"
  },
  {
    title: "1st Birthday Pastel Magic",
    category: "Birthday Cakes",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13636?w=800&auto=format&fit=crop&q=80"
  },
  {
    title: "Custom Buttercream Swirls",
    category: "Cupcakes",
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?w=800&auto=format&fit=crop&q=80"
  },
  {
    title: "Luxury Event Dessert Buffet",
    category: "Dessert Tables",
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=800&auto=format&fit=crop&q=80"
  },
  {
    title: "Triple Chocolate Stuffed Cookies",
    category: "Cookies",
    image: "https://images.unsplash.com/photo-1558961309-dbdf0f65e23c?w=800&auto=format&fit=crop&q=80"
  },
  {
    title: "Warm Fudgy Salted Caramel Brownie",
    category: "Brownies",
    image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=800&auto=format&fit=crop&q=80"
  },
  {
    title: "Mom Prepping Fresh Berry Compote",
    category: "Baking Process",
    image: "https://images.unsplash.com/photo-1516224490913-c1b75960c226?w=800&auto=format&fit=crop&q=80"
  },
  {
    title: "A Golden Celebration Toast",
    category: "Happy Customers",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&auto=format&fit=crop&q=80"
  }
];
