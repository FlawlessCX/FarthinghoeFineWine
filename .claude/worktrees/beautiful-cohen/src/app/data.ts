export interface WineOffer {
  pricePerBottle: string;
  priceSup?: string;
  caseType: string;
  casePrice: string;
  casePriceSup?: string;
  unitsAvailable: string;
}

export interface Wine {
  slug: string;
  name: string;
  type: string;
  region: string;
  imageUrl: string;
  offers: WineOffer[];
  producer: string;
  colour: string;
  country: string;
  subRegion?: string;
  appellation?: string;
  bottleSize: string;
  abv: string;
  vintage: string;
  breadcrumb: { label: string; href: string }[];
  stockLocation: string;
}

export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export function getWineBySlug(slug: string): Wine | undefined {
  return wines.find((w) => w.slug === slug);
}

export const wines: Wine[] = [
  {
    slug: "agusti-torello-anima-mundi-pells-penedes-2023",
    name: "Agusti Torello, Anima Mundi Pells, Penedes 2023",
    type: "White Wine",
    colour: "White",
    region: "Penedes, Catalonia, Spain",
    country: "Spain",
    subRegion: "Catalonia",
    appellation: "Penedes",
    imageUrl: "https://assets.farthinghoefinewine.com/img/product/lw/3089556.jpg",
    producer: "Agusti Torello",
    bottleSize: "Standard - 75cl",
    abv: "12.5",
    vintage: "2023",
    stockLocation: "United Kingdom",
    breadcrumb: [
      { label: "Spain", href: "/en/wine/spain" },
      { label: "Catalonia", href: "/en/wine/es.catalonia" },
      { label: "Penedes", href: "/en/wine/es.catalonia.penedes" },
    ],
    offers: [
      { pricePerBottle: "£21", priceSup: ".26", caseType: "Case of 6", casePrice: "£127", casePriceSup: ".58", unitsAvailable: "2 units Available" },
    ],
  },
  {
    slug: "agusti-torello-penedes-at-roca-esparter-reserva-2015",
    name: "Agusti Torello, Penedes, AT Roca Esparter Reserva 2015",
    type: "Sparkling Wine",
    colour: "White",
    region: "Penedes, Catalunya, Spain",
    country: "Spain",
    subRegion: "Catalunya",
    appellation: "Penedes",
    imageUrl: "https://assets.farthinghoefinewine.com/img/product/lw/1641048.jpg",
    producer: "Agusti Torello",
    bottleSize: "Standard - 75cl",
    abv: "11.5",
    vintage: "2015",
    stockLocation: "United Kingdom",
    breadcrumb: [
      { label: "Spain", href: "/en/wine/spain" },
      { label: "Catalunya", href: "/en/wine/es.catalunya" },
      { label: "Penedes", href: "/en/wine/es.catalunya.penedes" },
    ],
    offers: [
      { pricePerBottle: "£25", priceSup: ".11", caseType: "Case of 6", casePrice: "£150", casePriceSup: ".64", unitsAvailable: "3 units Available" },
    ],
  },
  {
    slug: "agusti-torello-penedes-at-roca-reserva-2022",
    name: "Agusti Torello, Penedes, AT Roca Reserva 2022",
    type: "Sparkling Wine",
    colour: "White",
    region: "Penedes, Catalunya, Spain",
    country: "Spain",
    subRegion: "Catalunya",
    appellation: "Penedes",
    imageUrl: "https://assets.farthinghoefinewine.com/img/product/lw/3089556.jpg",
    producer: "Agusti Torello",
    bottleSize: "Standard - 75cl",
    abv: "11.5",
    vintage: "2022",
    stockLocation: "United Kingdom",
    breadcrumb: [
      { label: "Spain", href: "/en/wine/spain" },
      { label: "Catalunya", href: "/en/wine/es.catalunya" },
      { label: "Penedes", href: "/en/wine/es.catalunya.penedes" },
    ],
    offers: [
      { pricePerBottle: "£18", priceSup: ".01", caseType: "Single Bottle", casePrice: "£18", casePriceSup: ".01", unitsAvailable: "2 units Available" },
    ],
  },
  {
    slug: "agusti-torello-penedes-at-roca-reserva-2023",
    name: "Agusti Torello, Penedes, AT Roca Reserva 2023",
    type: "Sparkling Wine",
    colour: "White",
    region: "Penedes, Catalunya, Spain",
    country: "Spain",
    subRegion: "Catalunya",
    appellation: "Penedes",
    imageUrl: "https://assets.farthinghoefinewine.com/img/product/lw/3089556.jpg",
    producer: "Agusti Torello",
    bottleSize: "Standard - 75cl",
    abv: "11.5",
    vintage: "2023",
    stockLocation: "United Kingdom",
    breadcrumb: [
      { label: "Spain", href: "/en/wine/spain" },
      { label: "Catalunya", href: "/en/wine/es.catalunya" },
      { label: "Penedes", href: "/en/wine/es.catalunya.penedes" },
    ],
    offers: [
      { pricePerBottle: "£18", priceSup: ".91", caseType: "Single Bottle", casePrice: "£18", casePriceSup: ".91", unitsAvailable: "5 units Available" },
      { pricePerBottle: "£18", priceSup: ".91", caseType: "Case of 6", casePrice: "£113", casePriceSup: ".44", unitsAvailable: "49 units Available" },
    ],
  },
  {
    slug: "agusti-torello-penedes-at-roca-rose-reserva-2016",
    name: "Agusti Torello, Penedes, AT Roca Rose Reserva 2016",
    type: "Sparkling Rose",
    colour: "Rose",
    region: "Penedes, Catalunya, Spain",
    country: "Spain",
    subRegion: "Catalunya",
    appellation: "Penedes",
    imageUrl: "https://assets.farthinghoefinewine.com/img/product/lw/1641048.jpg",
    producer: "Agusti Torello",
    bottleSize: "Standard - 75cl",
    abv: "12.0",
    vintage: "2016",
    stockLocation: "United Kingdom",
    breadcrumb: [
      { label: "Spain", href: "/en/wine/spain" },
      { label: "Catalunya", href: "/en/wine/es.catalunya" },
      { label: "Penedes", href: "/en/wine/es.catalunya.penedes" },
    ],
    offers: [
      { pricePerBottle: "£16", priceSup: ".00", caseType: "Case of 6", casePrice: "£96", casePriceSup: ".00", unitsAvailable: "1 unit Available" },
    ],
  },
  {
    slug: "akitu-a1-pinot-noir-central-otago-2013",
    name: "Akitu, A1 Pinot Noir, Central Otago 2013",
    type: "Red Wine",
    colour: "Red",
    region: "Central Otago, New Zealand",
    country: "New Zealand",
    subRegion: "Central Otago",
    imageUrl: "https://assets.farthinghoefinewine.com/img/product/lw/3089556.jpg",
    producer: "Akitu",
    bottleSize: "Standard - 75cl",
    abv: "14.0",
    vintage: "2013",
    stockLocation: "United Kingdom",
    breadcrumb: [
      { label: "New Zealand", href: "/en/wine/new-zealand" },
      { label: "Central Otago", href: "/en/wine/nz.central-otago" },
    ],
    offers: [
      { pricePerBottle: "£32", priceSup: ".66", caseType: "Case of 6", casePrice: "£195", casePriceSup: ".95", unitsAvailable: "2 units Available" },
    ],
  },
  {
    slug: "akitu-a1-pinot-noir-central-otago-2016",
    name: "Akitu, A1 Pinot Noir, Central Otago 2016",
    type: "Red Wine",
    colour: "Red",
    region: "Central Otago, New Zealand",
    country: "New Zealand",
    subRegion: "Central Otago",
    imageUrl: "https://assets.farthinghoefinewine.com/img/product/lw/3089556.jpg",
    producer: "Akitu",
    bottleSize: "Standard - 75cl",
    abv: "14.0",
    vintage: "2016",
    stockLocation: "United Kingdom",
    breadcrumb: [
      { label: "New Zealand", href: "/en/wine/new-zealand" },
      { label: "Central Otago", href: "/en/wine/nz.central-otago" },
    ],
    offers: [
      { pricePerBottle: "£59", priceSup: ".00", caseType: "Case of 6", casePrice: "£353", casePriceSup: ".98", unitsAvailable: "2 units Available" },
    ],
  },
  {
    slug: "akitu-a1-pinot-noir-central-otago-2019",
    name: "Akitu, A1 Pinot Noir, Central Otago 2019",
    type: "Red Wine",
    colour: "Red",
    region: "Central Otago, New Zealand",
    country: "New Zealand",
    subRegion: "Central Otago",
    imageUrl: "https://assets.farthinghoefinewine.com/img/product/lw/3089556.jpg",
    producer: "Akitu",
    bottleSize: "Standard - 75cl",
    abv: "14.0",
    vintage: "2019",
    stockLocation: "United Kingdom",
    breadcrumb: [
      { label: "New Zealand", href: "/en/wine/new-zealand" },
      { label: "Central Otago", href: "/en/wine/nz.central-otago" },
    ],
    offers: [
      { pricePerBottle: "£39", priceSup: ".12", caseType: "Case of 6", casePrice: "£234", casePriceSup: ".72", unitsAvailable: "24 units Available" },
    ],
  },
  {
    slug: "alain-hudelot-noellat-bourgogne-rouge-2023",
    name: "Alain Hudelot-Noellat, Bourgogne, Rouge 2023",
    type: "Red Wine",
    colour: "Red",
    region: "Bourgogne, Burgundy, France",
    country: "France",
    subRegion: "Burgundy",
    appellation: "Bourgogne",
    imageUrl: "https://assets.farthinghoefinewine.com/img/product/lw/3089556.jpg",
    producer: "Alain Hudelot-Noellat",
    bottleSize: "Standard - 75cl",
    abv: "13.0",
    vintage: "2023",
    stockLocation: "United Kingdom",
    breadcrumb: [
      { label: "France", href: "/en/wine/france" },
      { label: "Burgundy", href: "/en/wine/fr.burgundy" },
      { label: "Bourgogne", href: "/en/wine/fr.burgundy.bourgogne" },
    ],
    offers: [
      { pricePerBottle: "£38", priceSup: ".38", caseType: "Case of 6", casePrice: "£230", casePriceSup: ".29", unitsAvailable: "4 units Available" },
    ],
  },
  {
    slug: "alain-hudelot-noellat-bourgogne-rouge-2024",
    name: "Alain Hudelot-Noellat, Bourgogne, Rouge 2024",
    type: "Red Wine",
    colour: "Red",
    region: "Bourgogne, Burgundy, France",
    country: "France",
    subRegion: "Burgundy",
    appellation: "Bourgogne",
    imageUrl: "https://assets.farthinghoefinewine.com/img/product/lw/3089556.jpg",
    producer: "Alain Hudelot-Noellat",
    bottleSize: "Standard - 75cl",
    abv: "13.0",
    vintage: "2024",
    stockLocation: "United Kingdom",
    breadcrumb: [
      { label: "France", href: "/en/wine/france" },
      { label: "Burgundy", href: "/en/wine/fr.burgundy" },
      { label: "Bourgogne", href: "/en/wine/fr.burgundy.bourgogne" },
    ],
    offers: [
      { pricePerBottle: "£39", priceSup: ".58", caseType: "Case of 6", casePrice: "£237", casePriceSup: ".49", unitsAvailable: "1 unit Available" },
    ],
  },
  {
    slug: "alain-hudelot-noellat-chambolle-musigny-2022",
    name: "Alain Hudelot-Noellat, Chambolle-Musigny 2022",
    type: "Red Wine",
    colour: "Red",
    region: "Chambolle-Musigny, Burgundy, France",
    country: "France",
    subRegion: "Burgundy",
    appellation: "Chambolle-Musigny",
    imageUrl: "https://assets.farthinghoefinewine.com/img/product/lw/3089556.jpg",
    producer: "Alain Hudelot-Noellat",
    bottleSize: "Standard - 75cl",
    abv: "13.0",
    vintage: "2022",
    stockLocation: "United Kingdom",
    breadcrumb: [
      { label: "France", href: "/en/wine/france" },
      { label: "Burgundy", href: "/en/wine/fr.burgundy" },
      { label: "Chambolle-Musigny", href: "/en/wine/fr.burgundy.chambolle-musigny" },
    ],
    offers: [
      { pricePerBottle: "£133", priceSup: ".72", caseType: "Case of 6", casePrice: "£802", casePriceSup: ".32", unitsAvailable: "1 unit Available" },
    ],
  },
  {
    slug: "alain-hudelot-noellat-chambolle-musigny-2023",
    name: "Alain Hudelot-Noellat, Chambolle-Musigny 2023",
    type: "Red Wine",
    colour: "Red",
    region: "Chambolle-Musigny, Burgundy, France",
    country: "France",
    subRegion: "Burgundy",
    appellation: "Chambolle-Musigny",
    imageUrl: "https://assets.farthinghoefinewine.com/img/product/lw/3089556.jpg",
    producer: "Alain Hudelot-Noellat",
    bottleSize: "Standard - 75cl",
    abv: "13.0",
    vintage: "2023",
    stockLocation: "United Kingdom",
    breadcrumb: [
      { label: "France", href: "/en/wine/france" },
      { label: "Burgundy", href: "/en/wine/fr.burgundy" },
      { label: "Chambolle-Musigny", href: "/en/wine/fr.burgundy.chambolle-musigny" },
    ],
    offers: [
      { pricePerBottle: "£87", priceSup: ".58", caseType: "Case of 6", casePrice: "£525", casePriceSup: ".49", unitsAvailable: "1 unit Available" },
    ],
  },
  {
    slug: "alain-hudelot-noellat-chambolle-musigny-2024",
    name: "Alain Hudelot-Noellat, Chambolle-Musigny 2024",
    type: "Red Wine",
    colour: "Red",
    region: "Chambolle-Musigny, Burgundy, France",
    country: "France",
    subRegion: "Burgundy",
    appellation: "Chambolle-Musigny",
    imageUrl: "https://assets.farthinghoefinewine.com/img/product/lw/3089556.jpg",
    producer: "Alain Hudelot-Noellat",
    bottleSize: "Standard - 75cl",
    abv: "13.0",
    vintage: "2024",
    stockLocation: "United Kingdom",
    breadcrumb: [
      { label: "France", href: "/en/wine/france" },
      { label: "Burgundy", href: "/en/wine/fr.burgundy" },
      { label: "Chambolle-Musigny", href: "/en/wine/fr.burgundy.chambolle-musigny" },
    ],
    offers: [
      { pricePerBottle: "£87", priceSup: ".58", caseType: "Case of 6", casePrice: "£525", casePriceSup: ".49", unitsAvailable: "1 unit Available" },
    ],
  },
  {
    slug: "alain-hudelot-noellat-nuits-saint-georges-premier-cru-aux-murgers-2012",
    name: "Alain Hudelot-Noellat, Nuits-Saint-Georges Premier Cru, Aux Murgers 2012",
    type: "Red Wine",
    colour: "Red",
    region: "Nuits-Saint-Georges, Burgundy, France",
    country: "France",
    subRegion: "Burgundy",
    appellation: "Nuits-Saint-Georges",
    imageUrl: "https://assets.farthinghoefinewine.com/img/product/lw/3089556.jpg",
    producer: "Alain Hudelot-Noellat",
    bottleSize: "Standard - 75cl",
    abv: "13.0",
    vintage: "2012",
    stockLocation: "United Kingdom",
    breadcrumb: [
      { label: "France", href: "/en/wine/france" },
      { label: "Burgundy", href: "/en/wine/fr.burgundy" },
      { label: "Nuits-Saint-Georges", href: "/en/wine/fr.burgundy.nuits-saint-georges" },
    ],
    offers: [
      { pricePerBottle: "£169", priceSup: ".32", caseType: "Case of 6", casePrice: "£1,015", casePriceSup: ".92", unitsAvailable: "1 unit Available" },
    ],
  },
  {
    slug: "alain-hudelot-noellat-richebourg-grand-cru-2024",
    name: "Alain Hudelot-Noellat, Richebourg Grand Cru 2024",
    type: "Red Wine",
    colour: "Red",
    region: "Richebourg, Burgundy, France",
    country: "France",
    subRegion: "Burgundy",
    appellation: "Richebourg",
    imageUrl: "https://assets.farthinghoefinewine.com/img/product/lw/3089556.jpg",
    producer: "Alain Hudelot-Noellat",
    bottleSize: "Standard - 75cl",
    abv: "13.5",
    vintage: "2024",
    stockLocation: "United Kingdom",
    breadcrumb: [
      { label: "France", href: "/en/wine/france" },
      { label: "Burgundy", href: "/en/wine/fr.burgundy" },
      { label: "Richebourg", href: "/en/wine/fr.burgundy.richebourg" },
    ],
    offers: [
      { pricePerBottle: "£1,143", priceSup: ".58", caseType: "Case of 3", casePrice: "£3,430", casePriceSup: ".75", unitsAvailable: "1 unit Available" },
    ],
  },
  {
    slug: "alain-hudelot-noellat-vosne-romanee-2023",
    name: "Alain Hudelot-Noellat, Vosne-Romanee 2023",
    type: "Red Wine",
    colour: "Red",
    region: "Vosne-Romanee, Burgundy, France",
    country: "France",
    subRegion: "Burgundy",
    appellation: "Vosne-Romanee",
    imageUrl: "https://assets.farthinghoefinewine.com/img/product/lw/3089556.jpg",
    producer: "Alain Hudelot-Noellat",
    bottleSize: "Standard - 75cl",
    abv: "13.0",
    vintage: "2023",
    stockLocation: "United Kingdom",
    breadcrumb: [
      { label: "France", href: "/en/wine/france" },
      { label: "Burgundy", href: "/en/wine/fr.burgundy" },
      { label: "Vosne-Romanee", href: "/en/wine/fr.burgundy.vosne-romanee" },
    ],
    offers: [
      { pricePerBottle: "£87", priceSup: ".58", caseType: "Case of 6", casePrice: "£525", casePriceSup: ".49", unitsAvailable: "1 unit Available" },
    ],
  },
  {
    slug: "alain-hudelot-noellat-vosne-romanee-premier-cru-aux-malconsorts-2013-magnum",
    name: "Alain Hudelot-Noellat, Vosne-Romanee Premier Cru, Aux Malconsorts 2013 (Magnum)",
    type: "Red Wine",
    colour: "Red",
    region: "Vosne-Romanee, Burgundy, France",
    country: "France",
    subRegion: "Burgundy",
    appellation: "Vosne-Romanee",
    imageUrl: "https://assets.farthinghoefinewine.com/img/product/lw/3089556.jpg",
    producer: "Alain Hudelot-Noellat",
    bottleSize: "Magnum - 150cl",
    abv: "13.0",
    vintage: "2013",
    stockLocation: "United Kingdom",
    breadcrumb: [
      { label: "France", href: "/en/wine/france" },
      { label: "Burgundy", href: "/en/wine/fr.burgundy" },
      { label: "Vosne-Romanee", href: "/en/wine/fr.burgundy.vosne-romanee" },
    ],
    offers: [
      { pricePerBottle: "£847", priceSup: ".44", caseType: "Single Bottle", casePrice: "£847", casePriceSup: ".44", unitsAvailable: "3 units Available" },
    ],
  },
  {
    slug: "alain-hudelot-noellat-vosne-romanee-premier-cru-les-suchots-2014",
    name: "Alain Hudelot-Noellat, Vosne-Romanee Premier Cru, Les Suchots 2014",
    type: "Red Wine",
    colour: "Red",
    region: "Vosne-Romanee, Burgundy, France",
    country: "France",
    subRegion: "Burgundy",
    appellation: "Vosne-Romanee",
    imageUrl: "https://assets.farthinghoefinewine.com/img/product/lw/3089556.jpg",
    producer: "Alain Hudelot-Noellat",
    bottleSize: "Standard - 75cl",
    abv: "13.0",
    vintage: "2014",
    stockLocation: "United Kingdom",
    breadcrumb: [
      { label: "France", href: "/en/wine/france" },
      { label: "Burgundy", href: "/en/wine/fr.burgundy" },
      { label: "Vosne-Romanee", href: "/en/wine/fr.burgundy.vosne-romanee" },
    ],
    offers: [
      { pricePerBottle: "£273", priceSup: ".72", caseType: "Case of 6", casePrice: "£1,642", casePriceSup: ".32", unitsAvailable: "2 units Available" },
    ],
  },
  {
    slug: "alain-voge-cornas-les-chailles-2019",
    name: "Alain Voge, Cornas, Les Chailles 2019",
    type: "Red Wine",
    colour: "Red",
    region: "Cornas, Rhone, France",
    country: "France",
    subRegion: "Rhone",
    appellation: "Cornas",
    imageUrl: "https://assets.farthinghoefinewine.com/img/product/lw/3089556.jpg",
    producer: "Alain Voge",
    bottleSize: "Standard - 75cl",
    abv: "13.5",
    vintage: "2019",
    stockLocation: "United Kingdom",
    breadcrumb: [
      { label: "France", href: "/en/wine/france" },
      { label: "Rhone", href: "/en/wine/fr.rhone" },
      { label: "Cornas", href: "/en/wine/fr.rhone.cornas" },
    ],
    offers: [
      { pricePerBottle: "£38", priceSup: ".86", caseType: "Case of 6", casePrice: "£233", casePriceSup: ".15", unitsAvailable: "2 units Available" },
    ],
  },
  {
    slug: "alain-voge-cornas-les-chailles-2020",
    name: "Alain Voge, Cornas, Les Chailles 2020",
    type: "Red Wine",
    colour: "Red",
    region: "Cornas, Rhone, France",
    country: "France",
    subRegion: "Rhone",
    appellation: "Cornas",
    imageUrl: "https://assets.farthinghoefinewine.com/img/product/lw/3089556.jpg",
    producer: "Alain Voge",
    bottleSize: "Standard - 75cl",
    abv: "13.5",
    vintage: "2020",
    stockLocation: "United Kingdom",
    breadcrumb: [
      { label: "France", href: "/en/wine/france" },
      { label: "Rhone", href: "/en/wine/fr.rhone" },
      { label: "Cornas", href: "/en/wine/fr.rhone.cornas" },
    ],
    offers: [
      { pricePerBottle: "£39", priceSup: ".51", caseType: "Case of 6", casePrice: "£237", casePriceSup: ".08", unitsAvailable: "5 units Available" },
      { pricePerBottle: "£39", priceSup: ".72", caseType: "Single Bottle", casePrice: "£39", casePriceSup: ".72", unitsAvailable: "3 units Available" },
    ],
  },
];

export const filters = [
  { icon: "public", label: "Region" },
  { icon: "wine_bar", label: "Style" },
  { icon: "liquor", label: "Producer" },
  { icon: "currency_pound", label: "Price" },
  { icon: "schedule", label: "Vintage" },
  { icon: "bubble_chart", label: "Bottle Size" },
  { icon: "category", label: "Category" },
  { icon: "location_on", label: "Stock Location" },
];

export const navLinks = [
  { label: "ALL WINE", href: "/" },
  { label: "LATEST OFFERS", href: "/en/offers" },
  { label: "EN PRIMEUR", href: "/en/enprimeur" },
  { label: "WHISKY", href: "/en/whiskyinvestment" },
  { label: "RESOURCES", href: "/en/services" },
  { label: "ABOUT", href: "/en/about" },
];

export const footerColumns = [
  {
    title: "Wine",
    href: "/en/wine",
    links: [
      { label: "All Wine", href: "/en/wine" },
      { label: "Buy Drinking Wine", href: "/en/wine/cat.summer-2025-drinking-list" },
      { label: "En Primeur Campaigns", href: "/en/enprimeur" },
      { label: "New In", href: "/en/offers" },
      { label: "How We Source Wine", href: "/en/ourwine" },
    ],
  },
  {
    title: "Resources",
    href: "/en/services",
    links: [
      { label: "Collecting & Cellar Plans", href: "/en/collecting" },
      { label: "Storage", href: "/en/storage" },
      { label: "Trading & Broking", href: "/en/trading" },
      { label: "Delivery & Shipments", href: "/en/delivery" },
      { label: "Trade Sales", href: "/en/tradesales" },
    ],
  },
  {
    title: "About",
    href: "/en/about",
    links: [
      { label: "Meet The Team", href: "/en/team" },
      { label: "Our History", href: "/en/history" },
      { label: "International Markets", href: "/en/markets" },
    ],
  },
  {
    title: "Contact",
    href: "/en/contact",
    links: [
      { label: "Get In Touch", href: "/en/contact" },
      { label: "Email Sign Up", href: "/en/#newsletter" },
      { label: "Customer Login", href: "/en/account" },
    ],
    extra: [
      "+44 (0) 1295 811188",
      "info@farthinghoe.com",
    ],
  },
];
