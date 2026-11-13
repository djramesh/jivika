import farmerBg1 from "../assets/farmer-bg-1.jpeg";
import farmerBg2 from "../assets/farmer-bg-2.jpeg";
import farmerBg3 from "../assets/farmer-bg-3.jpeg";
import farmerBg4 from "../assets/farmer-bg-4.jpeg";
import farmerBg5 from "../assets/farmer-bg-5.jpeg";
import farmerBg6 from "../assets/farmer-bg-6.jpeg";

export const HERO_SLIDES = [
  {
    image: farmerBg1,
    tag: "Oil India Limited CSR Initiative",
    title: "Direct from Assam’s Farmers to You",
    subtitle:
      "Single-origin spices, orthodox tea, Khasi mandarin, and sustainable bamboo crafts cultivated across 14 villages in Tinsukia.",
  },
  {
    image: farmerBg2,
    tag: "1000+ Farmers Empowered",
    title: "High-Value Harvests Grown with Scientific Care",
    subtitle:
      "Adopting Good Agricultural Practices (GAP) to elevate purity, aroma, and direct farmer income.",
  },
  {
    image: farmerBg3,
    tag: "Women-Led Micro-Enterprises",
    title: "Crafted by Rural Self-Help Groups",
    subtitle:
      "Every purchase supports community-owned producer groups, women SHG artisans, and eco-friendly rural livelihoods.",
  },
  {
    image: farmerBg4,
    tag: "Community-Owned Value Chains",
    title: "Traceable Quality Across Four Crop Clusters",
    subtitle:
      "Partner with Jeevika for authentic single-origin harvests directly from rural farmer collectives.",
  },
  {
    image: farmerBg5,
    tag: "Guijan & Hapjan Blocks, Tinsukia",
    title: "Naturally Grown in Assam’s Rich Alluvial Soil",
    subtitle:
      "Minimal chemical inputs, strict post-harvest grading, and transparent value chains.",
  },
  {
    image: farmerBg6,
    tag: "Sustainable Value Chains",
    title: "Building Climate-Resilient Rural Prosperity",
    subtitle:
      "From carbon-sequestering bamboo plantations to organic vermicompost circular farming.",
  },
];

export const CATEGORIES = [
  "All",
  "Spices",
  "Tea",
  "Citrus",
  "Bamboo & Craft",
  "Agri-Inputs",
];

export const PRODUCTS = [
  {
    id: 1,
    slug: "assam-ginger",
    name: "Ginger",
    scientificName: "Zingiber officinale",
    category: "Spices",
    clusterId: "spice",
    origin: "Tinsukia, Assam",
    badge: "Harvest Best Seller",
    rating: 4.9,
    reviewCount: 48,
    inStock: true,
    img: "/ginger_img.JPG",
    productImg: "/ginger-product.png",
    productImages: [
      "/ginger_img.JPG",
      "/ginger-product-img-1.JPG",
      "/ginger-product-img-2.JPG",
      "/ginger-product-img-3.JPG",
    ],
    shortDescription:
      "High-aroma, low-fiber Assam ginger rhizomes rich in natural gingerol, ideal for culinary and herbal infusion use.",
    description:
      "Cultivated by small and marginal farmers under the Jeevika Spice Value Chain, our Assam ginger is grown using treated quality rhizomes, scientific spacing, and minimal chemical input. Celebrated for its pungent warmth and digestive benefits.",
    highlights: [
      "Supports digestion, metabolism, and natural immunity",
      "Cleanly washed, sorted, and sun-cured post-harvest",
      "Directly sourced from Tinsukia Producer Groups",
    ],
    variants: [
      { id: "gin-500g", label: "500 g Pack", price: 140, mrp: 175, sku: "JV-GIN-05" },
      { id: "gin-1kg", label: "1 kg Pack", price: 260, mrp: 320, sku: "JV-GIN-10" },
      { id: "gin-10kg", label: "10 kg Wholesale", price: 2150, mrp: 2600, sku: "JV-GIN-100" },
    ],
    specs: [
      { label: "Origin", value: "Guijan & Hapjan, Tinsukia" },
      { label: "Product Form", value: "Fresh Whole Rhizomes" },
      { label: "Cultivation", value: "GAP Certified / Low Input" },
      { label: "Minimum Wholesale MOQ", value: "10 kg" },
      { label: "Dispatch Timeline", value: "3–7 Business Days" },
      { label: "Grade", value: "First Class Export Grade" },
    ],
  },
  {
    id: 2,
    slug: "high-curcumin-turmeric",
    name: "Turmeric",
    scientificName: "Curcuma longa",
    category: "Spices",
    clusterId: "spice",
    origin: "Tinsukia, Assam",
    badge: "High Curcumin",
    rating: 4.9,
    reviewCount: 62,
    inStock: true,
    img: "/turmeric-product-img-1.JPG",
    productImg: "/turmeric-product.png",
    productImages: [
      "/turmeric-product-img-1.JPG",
      "/turmeric-product-img-2.JPG",
      "/turmeric-product-img-3.JPG",
      "/turmeric-product.png",
    ],
    shortDescription:
      "Deep golden rhizomes packed with potent antioxidants and rich curcumin content, grown in fertile Assam soils.",
    description:
      "Assam's humid climate and rich soil yield vibrant turmeric prized for its medicinal properties and bold earthy color. Grown using scientific soil-health practices and linked to Jeevika's dedicated Spice Processing Unit.",
    highlights: [
      "Rich in natural curcuminoids & antioxidants",
      "Zero artificial colors or fillers",
      "Available as fresh fingers or processed dry rhizomes",
    ],
    variants: [
      { id: "tur-250g", label: "250 g Pack", price: 125, mrp: 155, sku: "JV-TUR-025" },
      { id: "tur-500g", label: "500 g Pack", price: 230, mrp: 280, sku: "JV-TUR-05" },
      { id: "tur-10kg", label: "10 kg Wholesale", price: 3800, mrp: 4500, sku: "JV-TUR-100" },
    ],
    specs: [
      { label: "Origin", value: "Tinsukia District, Assam" },
      { label: "Product Form", value: "Whole Rhizomes / Dry Fingers" },
      { label: "Cultivation", value: "Naturally Grown (Minimal Input)" },
      { label: "Minimum Wholesale MOQ", value: "10 kg" },
      { label: "Dispatch Timeline", value: "3–7 Business Days" },
      { label: "Grade", value: "First Class Select" },
    ],
  },
  {
    id: 3,
    slug: "assam-black-pepper",
    name: "Black Pepper",
    scientificName: "Piper nigrum",
    category: "Spices",
    clusterId: "spice",
    origin: "Small Tea Holdings, Assam",
    badge: "King of Spices",
    rating: 4.8,
    reviewCount: 39,
    inStock: true,
    img: "/black-pepper-product-img-1.JPG",
    productImg: "/black-pepper-cluster-1.png",
    productImages: [
      "/black-pepper-product-img-1.JPG",
      "/black-pepper-product-img-2.JPG",
      "/black-pepper-product-img-3.JPG",
      "/black-pepper-cluster-2.png",
    ],
    shortDescription:
      "Bold, aromatic peppercorns intercropped on shade trees within small tea gardens across Tinsukia.",
    description:
      "Known as 'Black Gold', Jeevika promotes black pepper interplanting inside small tea holdings using shade trees as standards. This diversifies farmer income while producing dense, piperine-rich peppercorns.",
    highlights: [
      "Intercropped harmoniously in Assam small tea gardens",
      "Sun-dried whole berries for maximum essential oil retention",
      "High antioxidant and piperine potency",
    ],
    variants: [
      { id: "pep-200g", label: "200 g Jar", price: 220, mrp: 265, sku: "JV-PEP-02" },
      { id: "pep-500g", label: "500 g Pack", price: 510, mrp: 600, sku: "JV-PEP-05" },
      { id: "pep-10kg", label: "10 kg Wholesale", price: 8900, mrp: 10200, sku: "JV-PEP-100" },
    ],
    specs: [
      { label: "Origin", value: "Tea Garden Shade Intercrops, Tinsukia" },
      { label: "Product Form", value: "Whole Dried Peppercorns" },
      { label: "Processing", value: "Sun-Dried & Graded" },
      { label: "Minimum Wholesale MOQ", value: "10 kg" },
      { label: "Dispatch Timeline", value: "4–8 Business Days" },
      { label: "Grade", value: "Bold First Class" },
    ],
  },
  {
    id: 4,
    slug: "khasi-mandarin",
    name: "Khasi Mandarin",
    scientificName: "Citrus reticulata",
    category: "Citrus",
    clusterId: "citrus",
    origin: "Puroni Motapung, Assam",
    badge: "+51% Yield Impact",
    rating: 4.9,
    reviewCount: 54,
    inStock: true,
    img: "/khasi_mandarine.jpeg",
    productImg: "/khasi-mandarin.png",
    productImages: [
      "/khasi_mandarine.jpeg",
      "/khasi_mandarine_1.jpeg",
      "/khasi_mandarine_3.jpeg",
      "/khasi-mandarin.png",
    ],
    shortDescription:
      "Sweet, juicy, thin-skinned Khasi mandarins revitalized through scientific orchard pruning and nutrition.",
    description:
      "Grown in traditional orchards including our Puroni Motapung demonstration hub, Jeevika's interventions boosted Khasi Mandarin average productivity by 51% (up to 11.7 MT/ha) while elevating fruit sweetness and grading quality.",
    highlights: [
      "Packed with Vitamin C and natural citrus antioxidants",
      "Graded for uniform size, juice yield, and shelf freshness",
      "Direct orchard-to-buyer linkage without middlemen",
    ],
    variants: [
      { id: "man-2kg", label: "2 kg Gift Crate", price: 280, mrp: 340, sku: "JV-MAN-02" },
      { id: "man-5kg", label: "5 kg Family Box", price: 650, mrp: 780, sku: "JV-MAN-05" },
      { id: "man-20kg", label: "20 kg Crate (Bulk)", price: 2200, mrp: 2650, sku: "JV-MAN-20" },
    ],
    specs: [
      { label: "Origin", value: "Puroni Motapung & Tinsukia Orchards" },
      { label: "Product Type", value: "Fresh Seasonal Harvest" },
      { label: "Grading", value: "Calibrated Size & Brix Checked" },
      { label: "Minimum Wholesale MOQ", value: "20 kg" },
      { label: "Dispatch Timeline", value: "2–5 Business Days (Seasonal)" },
      { label: "Grade", value: "First Class Orchard Select" },
    ],
  },
  {
    id: 5,
    slug: "bhoot-jolokia-king-chilli",
    name: "Bhoot Jolokia",
    scientificName: "Capsicum chinense",
    category: "Spices",
    clusterId: "spice",
    origin: "Tinsukia, Assam",
    badge: "GI Heritage Spice",
    rating: 4.9,
    reviewCount: 71,
    inStock: true,
    img: "/bhoot-jolokia.jpg",
    productImg: "/bhoot-jolokia.jpg",
    productImages: ["/bhoot-jolokia.jpg", "/king-chilli.png", "/king-chilli-1.png"],
    shortDescription:
      "Authentic Northeast Indian Bhoot Jolokia prized globally for intense Scoville heat and smoky aroma.",
    description:
      "Introduced on a commercial scale in FY 23–24 under Jeevika with active participation from women farmers, our Bhoot Jolokia delivers exceptional potency (4.4 MT/ha demo yield) and commands premium national & export rates.",
    highlights: [
      "Among the world's hottest chillies with distinctive fruity-smoky notes",
      "Boosts metabolism and rich in capsaicin antioxidants",
      "Available sun-dried whole pods or seasonal fresh harvest",
    ],
    variants: [
      { id: "kch-100g", label: "100 g Dried Pods", price: 190, mrp: 240, sku: "JV-KCH-01" },
      { id: "kch-250g", label: "250 g Dried Pods", price: 440, mrp: 540, sku: "JV-KCH-025" },
      { id: "kch-5kg", label: "5 kg Bulk Pack", price: 4200, mrp: 5000, sku: "JV-KCH-50" },
    ],
    specs: [
      { label: "Origin", value: "Tinsukia Women Farmer Collectives" },
      { label: "Product Form", value: "Whole Sun-Dried / Fresh" },
      { label: "Heat Profile", value: "850,000+ SHU (Authentic Bhut)" },
      { label: "Minimum Wholesale MOQ", value: "5 kg" },
      { label: "Dispatch Timeline", value: "3–6 Business Days" },
      { label: "Grade", value: "Premium Export Grade" },
    ],
  },
  {
    id: 6,
    slug: "assam-lemon",
    name: "Assam Lemon",
    scientificName: "Citrus limon",
    category: "Citrus",
    clusterId: "citrus",
    origin: "Borgaon, Tinsukia",
    badge: "State Fruit of Assam",
    rating: 4.8,
    reviewCount: 33,
    inStock: true,
    img: "/assam-lemon.png",
    productImg: "/assam-lemon.png",
    productImages: ["/assam-lemon.png"],
    missingPhotosHint:
      "Add 2–3 orchard & packed crate photos for Assam Lemon (e.g., public/assam-lemon-1.jpg, assam-lemon-2.jpg).",
    shortDescription:
      "Seedless, elongated GI-recognized Assam lemon celebrated as the 'Queen of Citrus' for its floral zest.",
    description:
      "Cultivated across 10+ hectares including our Borgaon demonstration plot, Kaji Nemu is native to Assam and treasured for its unique fragrance, virtually seedless juice, and year-round culinary versatility.",
    highlights: [
      "Distinctive aromatic peel & abundant Vitamin C juice",
      "Grown under Good Agricultural Practices (GAP)",
      "Ideal for beverages, pickles, and gourmet kitchens",
    ],
    variants: [
      { id: "lem-1kg", label: "1 kg Fresh Pack (8–10 pcs)", price: 130, mrp: 160, sku: "JV-LEM-10" },
      { id: "lem-3kg", label: "3 kg Kitchen Box", price: 360, mrp: 440, sku: "JV-LEM-30" },
      { id: "lem-15kg", label: "15 kg Wholesale Crate", price: 1550, mrp: 1900, sku: "JV-LEM-150" },
    ],
    specs: [
      { label: "Origin", value: "Borgaon Demo Cluster, Tinsukia" },
      { label: "Product Type", value: "Fresh Elongated Lime" },
      { label: "Cultivation", value: "GAP Guided Plantations" },
      { label: "Minimum Wholesale MOQ", value: "15 kg" },
      { label: "Dispatch Timeline", value: "2–5 Business Days" },
      { label: "Grade", value: "First Class Aromatic" },
    ],
  },
  {
    id: 7,
    slug: "assam-small-grower-tea",
    name: "Assam Tea",
    scientificName: "Camellia sinensis",
    category: "Tea",
    clusterId: "tea",
    origin: "8 Villages, Tinsukia",
    badge: "250+ Small Growers",
    rating: 5.0,
    reviewCount: 86,
    inStock: true,
    img: "/tea_2.jpeg",
    productImg: "/tea.png",
    productImages: ["/tea_2.jpeg", "/tea_image.JPG", "/tea_1.jpeg", "/tea.png"],
    shortDescription:
      "Brisk, malty upper-Assam tea harvested with improved Fine Leaf Count (FLC) by 250+ small tea growers.",
    description:
      "Covering 100 hectares across 8 villages, our Tea Cluster transformed leaf quality (FLC raised from 0% to 28%) and connected producer groups directly with Bought Leaf Factories, boosting net farmer income by 52%.",
    highlights: [
      "Direct sourcing from 250+ small tea growers in Upper Assam",
      "Strict two-leaves-and-a-bud plucking & nylon-bag transit care",
      "Rich malty liquor high in natural polyphenols",
    ],
    variants: [
      { id: "tea-250g", label: "250 g Tin / Pouch", price: 210, mrp: 260, sku: "JV-TEA-025" },
      { id: "tea-500g", label: "500 g Estate Pack", price: 390, mrp: 480, sku: "JV-TEA-05" },
      { id: "tea-10kg", label: "10 kg Trade Sack", price: 6800, mrp: 8000, sku: "JV-TEA-100" },
    ],
    specs: [
      { label: "Origin", value: "Upper Assam (8 Jeevika Villages)" },
      { label: "Cultivar", value: "Assam Camellia sinensis" },
      { label: "Quality Standard", value: "High Fine Leaf Count (FLC)" },
      { label: "Minimum Wholesale MOQ", value: "10 kg" },
      { label: "Dispatch Timeline", value: "3–5 Business Days" },
      { label: "Grade", value: "Select First/Second Flush Blend" },
    ],
  },
  {
    id: 8,
    slug: "shg-agarbatti-sticks",
    name: "Bamboo Agarbatti",
    scientificName: "Hand-Rolled Value Addition",
    category: "Bamboo & Craft",
    clusterId: "bamboo",
    origin: "Daisa & Bor Rupai Villages",
    badge: "100% Women SHG",
    rating: 4.8,
    reviewCount: 29,
    inStock: true,
    img: "/agarbatti.png",
    productImg: "/agarbatti.png",
    productImages: ["/agarbatti.png"],
    missingPhotosHint:
      "Add 2–3 photos of the Daisa & Bor Rupai SHG rolling unit & bundled raw sticks (e.g., public/agarbatti-1.jpg, agarbatti-2.jpg).",
    shortDescription:
      "Uniform, unscented raw bamboo incense sticks crafted by a 20-member all-women Self-Help Group.",
    description:
      "Produced in our Bamboo Agarbatti Rolling Unit in Daisa and Bor Rupai villages, this non-farm micro-enterprise empowers 20 rural women artisans with steady year-round income and precision-crafted raw sticks ready for perfumery.",
    highlights: [
      "100% women-led SHG production unit",
      "Smooth finish, consistent thickness & clean burn",
      "Ideal for incense brands, temples, and craft wholesalers",
    ],
    variants: [
      { id: "aga-1kg", label: "1 kg Bundle (~1,200 sticks)", price: 180, mrp: 220, sku: "JV-AGA-10" },
      { id: "aga-5kg", label: "5 kg Artisan Pack", price: 820, mrp: 980, sku: "JV-AGA-50" },
      { id: "aga-25kg", label: "25 kg Wholesale Bale", price: 3750, mrp: 4500, sku: "JV-AGA-250" },
    ],
    specs: [
      { label: "Origin", value: "Daisa & Bor Rupai SHG Unit, Assam" },
      { label: "Product Type", value: "Raw Unscented Incense Sticks" },
      { label: "Material", value: "Local Bamboo & Natural Charcoal/Jigat" },
      { label: "Stick Length", value: "8 inch / 9 inch Standard" },
      { label: "Minimum Wholesale MOQ", value: "25 kg" },
      { label: "Artisan Group", value: "20-Member Women SHG" },
    ],
  },
  {
    id: 9,
    slug: "organic-vermicompost",
    name: "Vermicompost",
    scientificName: "Organic Soil Conditioner",
    category: "Agri-Inputs",
    clusterId: "bamboo",
    origin: "29 Village Micro-Enterprises",
    badge: "250 MT/Yr Capacity",
    rating: 4.9,
    reviewCount: 41,
    inStock: true,
    img: "/vermin-compost.jpeg",
    productImg: "/vermicompost.png",
    productImages: ["/vermin-compost.jpeg", "/vermicompost.png"],
    missingPhotosHint:
      "Add 1–2 photos of bagged/sieved Jeevika Vermicompost & vermi-beds (e.g., public/vermicompost-1.jpg).",
    shortDescription:
      "Nutrient-dense, earthworm-processed organic compost restoring soil microbiome and moisture retention.",
    description:
      "Produced across 29 rural micro-enterprises with a combined capacity of 250 MT/year, Jeevika Vermicompost recycles agricultural waste into dark, odorless humus rich in beneficial microbes for gardens, nurseries, and tea estates.",
    highlights: [
      "Enhances soil aeration, water retention, and root vigor",
      "100% natural agricultural waste recycled by Eisenia fetida",
      "Trusted by home gardeners, nurseries, and commercial plantations",
    ],
    variants: [
      { id: "ver-5kg", label: "5 kg Garden Bag", price: 150, mrp: 190, sku: "JV-VER-05" },
      { id: "ver-25kg", label: "25 kg Farm Sack", price: 520, mrp: 650, sku: "JV-VER-25" },
      { id: "ver-500kg", label: "500 kg Bulk Lot", price: 8500, mrp: 10500, sku: "JV-VER-500" },
    ],
    specs: [
      { label: "Origin", value: "29 Jeevika Micro-Enterprises, Tinsukia" },
      { label: "Product Form", value: "Fine Sieved Dark Granules" },
      { label: "Moisture Content", value: "15% – 25% Optimal" },
      { label: "Application", value: "Potting, Horticulture & Tea Gardens" },
      { label: "Minimum Wholesale MOQ", value: "500 kg" },
      { label: "Packaging", value: "Moisture-Locked HDPE / Kraft Bags" },
    ],
  },
  {
    id: 10,
    slug: "assam-sustainable-bamboo",
    name: "Bamboo Culms",
    scientificName: "Bambusa tulda & B. balcooa",
    category: "Bamboo & Craft",
    clusterId: "bamboo",
    origin: "30 Ha Cluster, Tinsukia",
    badge: "Carbon Positive",
    rating: 4.8,
    reviewCount: 24,
    inStock: true,
    img: "/bamboo-1.jpeg",
    productImg: "/bamboo-product-1.png",
    productImages: [
      "/bamboo-1.jpeg",
      "/bamboo-2.jpeg",
      "/bamboo-3.jpeg",
      "/bamboo-product-1.png",
    ],
    shortDescription:
      "High-strength Bambusa tulda and Balcooa culms harvested from 30 hectares of carbon-sequestering plantations.",
    description:
      "One hectare of Jeevika bamboo absorbs 17–20 tonnes of CO2 annually while creating durable raw material for construction, handicrafts, furniture, and agarbatti manufacturing.",
    highlights: [
      "Absorbs 35% more greenhouse gases than typical timber",
      "High tensile strength suitable for structural & artisan craft use",
      "Supports sustainable non-timber rural livelihoods",
    ],
    variants: [
      { id: "bam-5p", label: "5 Treated Culms (Sample)", price: 750, mrp: 900, sku: "JV-BAM-05" },
      { id: "bam-20p", label: "20 Culm Bundle", price: 2700, mrp: 3200, sku: "JV-BAM-20" },
      { id: "bam-100p", label: "100 Culm Commercial Lot", price: 12000, mrp: 14500, sku: "JV-BAM-100" },
    ],
    specs: [
      { label: "Origin", value: "30 Hectare Bamboo Cluster, Tinsukia" },
      { label: "Species", value: "Bambusa tulda & Bambusa balcooa" },
      { label: "Carbon Impact", value: "17–20 Tonnes CO2 / Ha / Year" },
      { label: "Minimum Wholesale MOQ", value: "20 Culms" },
      { label: "Dispatch Timeline", value: "5–10 Business Days" },
      { label: "Grade", value: "Mature Seasoned Culms" },
    ],
  },
];

export const CLUSTERS = [
  {
    id: "tea",
    name: "Tea Cluster",
    shortName: "Tea",
    img: "/tea_image.JPG",
    iconImg: "/tea-leaf.png",
    coverage: "100 Ha • 8 Villages • 250+ Growers",
    impactStat: "+54% Income / Ha",
    description:
      "Scientific tea cultivation from soil testing to post-harvest leaf handling, elevating Fine Leaf Count (FLC) from 0% to 28% and linking growers directly with factories.",
  },
  {
    id: "citrus",
    name: "Citrus Cluster",
    shortName: "Citrus",
    img: "/citrus-img.webp",
    iconImg: "/citrus.png",
    coverage: "35 Ha • Khasi Mandarin & Assam Lemon",
    impactStat: "+51% Productivity",
    description:
      "Revitalizing traditional Khasi Mandarin orchards (25 ha) and commercial Kaji Nemu / Assam Lemon plots (10 ha) through GAP pruning, pest control, and demo hubs.",
  },
  {
    id: "spice",
    name: "Spices Cluster",
    shortName: "Spice",
    img: "/black-pepper-cluster-2.png",
    iconImg: "/spices-img.png",
    coverage: "4 Heritage Spices • Processing Unit",
    impactStat: "150 kg/hr Processing",
    description:
      "Commercial cultivation of Black Pepper, Ginger, Turmeric, and Bhoot Jolokia linked with Producer Groups and spice value addition.",
  },
  {
    id: "bamboo",
    name: "Bamboo & Value Addition",
    shortName: "Bamboo",
    img: "/bamboo-2.jpeg",
    iconImg: "/bamboo.png",
    coverage: "30 Ha • 29 Vermicompost & SHG Units",
    impactStat: "17–20T CO₂/Ha/Yr",
    description:
      "High-carbon-capture Bambusa tulda & balcooa plantations fueling women-led agarbatti rolling units, craft micro-enterprises, and circular vermicomposting.",
  },
];

export const GALLERY_ITEMS = [
  { id: 1, src: farmerBg1, title: "Field Training & Farmer Collective", category: "Community" },
  { id: 2, src: "/tea_image.JPG", title: "Small Tea Growers Plucking — Upper Assam", category: "Tea" },
  { id: 3, src: "/khasi_mandarine_1.jpeg", title: "Khasi Mandarin Orchard Harvest", category: "Citrus" },
  { id: 4, src: "/ginger-product-img-1.JPG", title: "Freshly Harvested Assam Ginger", category: "Spices" },
  { id: 5, src: farmerBg2, title: "Demonstration Plot Inspection", category: "Community" },
  { id: 6, src: "/turmeric-product-img-1.JPG", title: "High-Curcumin Turmeric Rhizomes", category: "Spices" },
  { id: 7, src: "/black-pepper-product-img-1.JPG", title: "Black Pepper Intercropped on Shade Trees", category: "Spices" },
  { id: 8, src: "/bamboo-3.jpeg", title: "Sustainable Bamboo Cluster Plantation", category: "Bamboo" },
  { id: 9, src: farmerBg3, title: "Good Agricultural Practices Workshop", category: "Community" },
  { id: 10, src: "/tea_1.jpeg", title: "Quality Tea Leaf Sorting & Transit Care", category: "Tea" },
  { id: 11, src: "/khasi_mandarine_3.jpeg", title: "Graded Khasi Mandarins Ready for Market", category: "Citrus" },
  { id: 12, src: "/vermin-compost.jpeg", title: "Village Vermicompost Micro-Enterprise", category: "Value Addition" },
  { id: 13, src: farmerBg4, title: "Women Farmer Participation in Tinsukia", category: "Community" },
  { id: 14, src: "/black-pepper-product-img-2.JPG", title: "Sun-Dried Black Peppercorns", category: "Spices" },
  { id: 15, src: "/ginger-product-img-2.JPG", title: "Post-Harvest Ginger Cleaning & Grading", category: "Spices" },
  { id: 16, src: farmerBg5, title: "Rural Producer Group Engagement", category: "Community" },
];

export const IMPACT_METRICS = [
  { value: "1000+", label: "Farmers Trained on GAP", detail: "Across 14 villages in Guijan & Hapjan" },
  { value: "+54%", label: "Tea Net Income Growth", detail: "250+ small tea growers across 100 ha" },
  { value: "+51%", label: "Mandarin Productivity", detail: "Peak orchard yield up to 11.7 MT/ha" },
  { value: "29", label: "Vermicompost Enterprises", detail: "250 MT/year organic production capacity" },
];

export function getProductById(id) {
  return PRODUCTS.find((p) => String(p.id) === String(id) || p.slug === String(id));
}

