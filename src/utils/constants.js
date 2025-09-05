// App constants and configuration

export const COMPANY_INFO = {
  name: "ORPHIC ART REVOLUTION PRIVATE LIMITED",
  tagline: "Revolutionizing Spaces with Art & Design",
  description: "Transforming spaces with innovative layouts, colour harmonies, furniture, and design technologies. We specialize in creating functional yet artistic interiors through comprehensive design solutions.",
  phone: "+91 9696100912",
  email: "orphicartrevolution@gmail.com",
  whatsapp: "+91 9696100912",
  address: {
    street: "466140 Peer Bukhara",
    area: "Chowk",
    city: "Lucknow",
    state: "Uttar Pradesh",
    pincode: "226003",
    country: "India",
    full: "466140 Peer Bukhara, Chowk, Lucknow, Uttar Pradesh – 226003"
  },
  businessHours: {
    weekdays: "9:00 AM - 7:00 PM",
    saturday: "9:00 AM - 6:00 PM",
    sunday: "10:00 AM - 4:00 PM"
  },
  social: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    linkedin: "#"
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
    id: "interior-design-styling",
    name: "Interior Design & Styling",
    description: "Comprehensive interior design solutions including concept development, furniture layouts, colour consultation, accessories & décor, and space optimization.",
    icon: "Palette",
    href: "/interior-design"
  },
  {
    id: "space-planning",
    name: "Space Planning",
    description: "Expert space planning and concept development, custom millwork & cabinetry, lighting design, and window treatments for optimal functionality.",
    icon: "Layout",
    href: "/interior-design"
  },
  {
    id: "design-visualizations",
    name: "Design Visualizations",
    description: "Professional floor plans, elevations & sections, 3D modelling & rendering, and virtual tours to bring your vision to life.",
    icon: "Box",
    href: "/interior-design"
  },
  {
    id: "project-management",
    name: "Project Management",
    description: "End-to-end project management including vendor & contractor coordination, budget & timeline oversight, and quality execution.",
    icon: "Settings",
    href: "/interior-design"
  },
  {
    id: "colour-material-consultation",
    name: "Colour & Material Consultation",
    description: "Expert guidance on colour schemes, material selection, and finishes to create harmonious and functional spaces.",
    icon: "Palette",
    href: "/interior-design"
  },
  {
    id: "lighting-design",
    name: "Lighting Design & Custom Cabinetry",
    description: "Specialized lighting design solutions and custom cabinetry to enhance ambiance and maximize storage efficiency.",
    icon: "Lightbulb",
    href: "/interior-design"
  }
];

export const CITIES = [
  "Lucknow"
];

export const WORK_TYPES = [
  "Interior Design & Styling",
  "Space Planning",
  "Design Visualizations",
  "Project Management",
  "Colour & Material Consultation",
  "Lighting Design & Custom Cabinetry",
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
    description: "Free consultation to understand your requirements and creative vision"
  },
  {
    step: 2,
    title: "Design",
    description: "Concept development with 3D visualization and detailed planning"
  },
  {
    step: 3,
    title: "Create",
    description: "Expert execution with regular reviews and quality checkpoints"
  },
  {
    step: 4,
    title: "Deliver",
    description: "Final delivery with all assets and post-project support"
  }
];

export const FOUNDERS = [
  {
    id: 1,
    name: "Mrs. Shaista",
    role: "Director & Lead Designer",
    description: "An experienced interior design professional specializing in transforming spaces with innovative layouts, colour harmonies, furniture, and design technologies. Passionate about creating functional yet artistic interiors.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Mr. Anas Aqeel Siddique",
    role: "Director",
    description: "Co-founder and strategic leader, supporting the company's vision of revolutionizing art-driven design solutions.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Gomti Nagar, Lucknow",
    rating: 5,
    text: "ORPHIC ART REVOLUTION transformed our dream home into reality. The team was professional, transparent, and delivered exactly what they promised.",
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
  { name: "About", href: "/about" },
  { name: "Interior Design", href: "/interior-design" },
  { name: "Service Provider", href: "/service-provider" },
  { name: "Contact", href: "/contact" }
];
