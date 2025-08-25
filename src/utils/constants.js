// App constants and configuration

export const COMPANY_INFO = {
  name: "EasiHome",
  tagline: "Tech-enabled Construction & Home Services",
  description: "Construction, renovation, interior design, painting services & purchase of building materials in Lucknow.",
  phone: "+91 894 894 5757",
  email: "care@easihome.in",
  whatsapp: "+91 894 894 5757",
  address: {
    street: "Navachar Incubation Center Faculty of Architectural and Planning",
    area: "Tagore Marg, C.S.I.R. Colony, Mukarimnagar, Hasanganj",
    city: "Lucknow",
    state: "Uttar Pradesh",
    pincode: "226007",
    country: "India",
    full: "Navachar Incubation Center Faculty of Architectural and Planning Tagore Marg, C.S.I.R. Colony, Mukarimnagar, Hasanganj, Lucknow, Uttar Pradesh 226007"
  },
  businessHours: {
    weekdays: "9:00 AM - 7:00 PM",
    saturday: "9:00 AM - 6:00 PM",
    sunday: "10:00 AM - 4:00 PM"
  },
  social: {
    facebook: "https://facebook.com/easihome",
    instagram: "https://instagram.com/easihome",
    twitter: "https://twitter.com/easihome",
    linkedin: "https://linkedin.com/company/easihome"
  },
  stats: {
    projectsCompleted: "500+",
    happyCustomers: "1000+",
    yearsExperience: "5+",
    teamMembers: "50+"
  }
};

export const SERVICES = [
  {
    id: "construction",
    name: "Construction",
    description: "Complete home construction with tech-enabled project management",
    icon: "Building2",
    href: "/construction",
    discount: "Up to 18% Off"
  },
  {
    id: "renovation",
    name: "Renovation",
    description: "Transform your existing space with modern design solutions",
    icon: "Hammer",
    href: "/renovation"
  },
  {
    id: "interior-design",
    name: "Interior Design",
    description: "Creating excellent interiors with professional design expertise",
    icon: "Palette",
    href: "/interior-design",
    discount: "Up to 12% Off"
  },
  {
    id: "painting",
    name: "Painting",
    description: "Professional painting services with premium quality materials",
    icon: "Paintbrush2",
    href: "/painting"
  },
  {
    id: "building-material",
    name: "Building Material",
    description: "Quality construction materials from trusted suppliers",
    icon: "Package",
    href: "/building-material"
  },
  {
    id: "service-provider",
    name: "Service Provider",
    description: "Connect with verified professionals for your projects",
    icon: "Users",
    href: "/service-provider"
  }
];

export const CITIES = [
  "Lucknow"
];

export const WORK_TYPES = [
  "Construction",
  "Renovation",
  "Interior Design",
  "Painting",
  "Material Financing",
  "Building Materials",
  "Electrical Work",
  "Plumbing",
  "Other"
];

export const STATS = [
  {
    number: "500+",
    label: "Projects Delivered",
    description: "Successfully completed projects across Lucknow"
  },
  {
    number: "10+",
    label: "Cities Served",
    description: "Expanding our services across Uttar Pradesh"
  },
  {
    number: "98%",
    label: "On-Time Delivery",
    description: "Consistent project completion within timeline"
  },
  {
    number: "4.8/5",
    label: "Customer Rating",
    description: "Average rating from satisfied customers"
  }
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Discover",
    description: "Free consultation to understand your requirements and vision"
  },
  {
    step: 2,
    title: "Plan",
    description: "Detailed planning with 3D designs and transparent cost breakdown"
  },
  {
    step: 3,
    title: "Build",
    description: "Expert execution with real-time updates and quality checkpoints"
  },
  {
    step: 4,
    title: "Handover",
    description: "Final inspection and handover with warranty and support"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Gomti Nagar, Lucknow",
    rating: 5,
    text: "EasiHome transformed our dream home into reality. The team was professional, transparent, and delivered exactly what they promised.",
    project: "3BHK Construction"
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Hazratganj, Lucknow",
    rating: 5,
    text: "Amazing interior design work! They understood our style perfectly and created a beautiful modern home within our budget.",
    project: "Interior Design"
  },
  {
    id: 3,
    name: "Amit Verma",
    location: "Indira Nagar, Lucknow",
    rating: 5,
    text: "The renovation of our old house was seamless. Great project management and quality workmanship throughout.",
    project: "Home Renovation"
  }
];

export const NAVIGATION = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Construction", href: "/construction" },
  { name: "Renovation", href: "/renovation" },
  { name: "Interior Design", href: "/interior-design" },
  { name: "Painting", href: "/painting" },
  { name: "Building Material", href: "/building-material" },
  { name: "Service Provider", href: "/service-provider" },
  { name: "Buy & Sale Plot", href: "/buy-sale-plot" },
  { name: "Contact Us", href: "/contact" }
];
