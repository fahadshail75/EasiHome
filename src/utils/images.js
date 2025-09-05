// Hero Section Images
export const heroImages = {
  featuredProject: {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    alt: "Luxurious interior design by ORPHIC ART REVOLUTION PRIVATE LIMITED",
    title: "Premium Interior Design"
  },
  alternatives: [
    {
      src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      alt: "Modern living room interior design by ORPHIC ART REVOLUTION PRIVATE LIMITED",
      title: "Contemporary Living Spaces"
    },
    {
      src: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
      alt: "3D visualization and space planning by ORPHIC ART REVOLUTION PRIVATE LIMITED",
      title: "3D Design & Visualization"
    }
  ]
};

// ============================= //
// 🛠️ Utility Functions
// ============================= //

// Optimized Unsplash URL
export const getOptimizedImageUrl = (src, width = 800, quality = 80) => {
  if (src.includes("unsplash.com")) {
    // strip any existing &w= / &q= to avoid duplicates
    const cleanSrc = src.replace(/([?&])w=\d+/g, "").replace(/([?&])q=\d+/g, "");
    const hasQuery = cleanSrc.includes("?");
    const sep = hasQuery ? "&" : "?";
    return `${cleanSrc}${sep}w=${width}&q=${quality}&auto=format&fit=crop`;
  }
  return src;
};

// Load image with optional fallback
export const loadImageWithFallback = (src, fallbackSrc = null) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(src);
    img.onerror = () => {
      if (fallbackSrc) {
        const fallbackImg = new Image();
        fallbackImg.onload = () => resolve(fallbackSrc);
        fallbackImg.onerror = () =>
          reject(new Error("Failed to load image and fallback"));
        fallbackImg.src = fallbackSrc;
      } else {
        reject(new Error("Failed to load image"));
      }
    };
    img.src = src;
  });
};

// Generate props for <img> / <Image>
export const getImageProps = (imageData, size = "medium", fallbackSrc = null) => {
  const sizes = {
    small: { width: 400, quality: 75 },
    medium: { width: 800, quality: 80 },
    large: { width: 1200, quality: 85 },
    hero: { width: 1920, quality: 90 }
  };

  const { width, quality } =
    typeof size === "string" ? sizes[size] || sizes.medium : size;

  return {
    src: getOptimizedImageUrl(imageData.src, width, quality),
    alt: imageData.alt,
    loading: "lazy",
    className: "w-full h-full object-cover",
    onError: (e) => {
      if (fallbackSrc) e.target.src = fallbackSrc;
    }
  };
};

// ✅ NEW: Hero height calculation (subtracts navbar height)
export const getHeroHeight = (navbarHeight = "5rem") => {
  return `calc(100vh - ${navbarHeight})`;
};

// ============================= //
// 📦 Project & Gallery Images (for Home.jsx)
// ============================= //

// Basic gallery-friendly images used by ImageGallery in Home.jsx
export const projectImages = {
  completed: [
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      alt: "Luxurious Living Room Interior Design",
      category: "Interior Design",
      location: "Gomti Nagar, Lucknow",
      year: "2024",
    },
    {
      src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      alt: "Modern Kitchen with Custom Cabinetry",
      category: "Space Planning",
      location: "Hazratganj, Lucknow",
      year: "2024",
    },
    {
      src: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
      alt: "3D Visualization of Bedroom Design",
      category: "3D Visualization",
      location: "Indira Nagar, Lucknow",
      year: "2023",
    },
    {
      src: "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
      alt: "Contemporary Kitchen Design with Island",
      category: "Interior Design",
      location: "Aliganj, Lucknow",
      year: "2023",
    },
    {
      src: "https://images.unsplash.com/photo-1494526585095-c41746248156",
      alt: "Master Bedroom Interior Styling",
      category: "Interior Styling",
      location: "Mahanagar, Lucknow",
      year: "2022",
    },
    {
      src: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c88a",
      alt: "Luxury Bathroom Interior Design",
      category: "Interior Design",
      location: "Gomti Nagar Ext., Lucknow",
      year: "2022",
    },
    {
      src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      alt: "Modern Duplex Space Planning",
      category: "Space Planning",
      location: "Rajajipuram, Lucknow",
      year: "2024",
    },
    {
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      alt: "Kitchen Design with Custom Millwork",
      category: "Custom Millwork",
      location: "Chinhat, Lucknow",
      year: "2024",
    },
    {
      src: "https://images.unsplash.com/photo-1571055107559-3e67626fa8be",
      alt: "Modern Office Interior Styling",
      category: "Interior Styling",
      location: "Hazratganj, Lucknow",
      year: "2023",
    },
    {
      src: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
      alt: "Elegant master bedroom suite",
      category: "Master Bedroom",
      location: "Gomti Nagar, Lucknow",
      year: "2023",
    },
    {
      src: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      alt: "Spacious dining room with chandelier",
      category: "Dining Room",
      location: "Aliganj, Lucknow",
      year: "2023",
    },
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      alt: "Modern apartment balcony design",
      category: "Balcony Design",
      location: "Indira Nagar, Lucknow",
      year: "2022",
    },
    {
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
      alt: "Contemporary townhouse exterior",
      category: "Townhouse",
      location: "Jankipuram, Lucknow",
      year: "2024",
    },
    {
      src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
      alt: "Luxury bathroom with freestanding tub",
      category: "Luxury Bathroom",
      location: "Mahanagar, Lucknow",
      year: "2024",
    },
    {
      src: "https://images.unsplash.com/photo-1586105251261-72a756497a11",
      alt: "Modern home office design",
      category: "Home Office",
      location: "Gomti Nagar Ext., Lucknow",
      year: "2023",
    },
    {
      src: "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
      alt: "Elegant staircase with modern railings",
      category: "Staircase Design",
      location: "Rajajipuram, Lucknow",
      year: "2023",
    },
    {
      src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
      alt: "Spacious family room with fireplace",
      category: "Family Room",
      location: "Chinhat, Lucknow",
      year: "2022",
    },
    {
      src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
      alt: "Modern kitchen island with pendant lights",
      category: "Kitchen Island",
      location: "Hazratganj, Lucknow",
      year: "2022",
    },
    {
      src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
      alt: "Contemporary guest bedroom",
      category: "Guest Bedroom",
      location: "Aliganj, Lucknow",
      year: "2024",
    },
    {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      alt: "Open concept living and dining area",
      category: "Open Concept",
      location: "Indira Nagar, Lucknow",
      year: "2023",
    },
  ],
};

// Themed interior images used in the Interior Design showcase
export const interiorImages = {
  livingRooms: [
    {
      src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      alt: "Scandinavian style living room",
      style: "Scandinavian",
    },
    {
      src: "https://images.unsplash.com/photo-1493666438817-866a91353ca9",
      alt: "Modern minimalist living space",
      style: "Minimalist",
    },
  ],
  kitchens: [
    {
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      alt: "Contemporary kitchen with wood accents",
      style: "Contemporary",
    },
    {
      src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
      alt: "Modern kitchen island with pendant lights",
      style: "Modern",
    },
  ],
};

// Before/After transformation showcase
export const transformationImages = [
  {
    project: "2BHK Apartment Renovation",
    location: "Aliganj, Lucknow",
    duration: "8 Weeks",
    before: {
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      alt: "Before renovation - dated living room",
    },
    after: {
      src: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f",
      alt: "After renovation - modern living room",
    },
  },
];

// Team images used by About page
export const teamImages = {
  team: [
    {
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      alt: "Team member portrait",
    },
    {
      src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      alt: "Team member portrait",
    },
    {
      src: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
      alt: "Team member portrait",
    },
  ],
};
