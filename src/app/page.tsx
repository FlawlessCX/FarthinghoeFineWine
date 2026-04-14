"use client";

import { useState } from "react";
import { wines, filters } from "./data";
import type { Wine, WineOffer } from "./data";
import { MaterialIcon, Header, Footer } from "./components";
import { ProductModal } from "./product-modal";

function ViewToggle({ currentView, onViewChange }: { currentView: "list" | "grid"; onViewChange: (view: "list" | "grid") => void }) {
  return (
    <div className="flex items-center gap-1 border border-gray-300 rounded inline-flex p-0.5">
      <button
        onClick={() => onViewChange("list")}
        className={`flex items-center justify-center w-8 h-8 rounded transition-colors ${
          currentView === "list"
            ? "bg-gray-200 text-gray-900"
            : "bg-white text-gray-600 hover:text-gray-900"
        }`}
        title="List View"
      >
        <MaterialIcon name="view_list" className="text-[16px]" />
      </button>
      <button
        onClick={() => onViewChange("grid")}
        className={`flex items-center justify-center w-8 h-8 rounded transition-colors ${
          currentView === "grid"
            ? "bg-gray-200 text-gray-900"
            : "bg-white text-gray-600 hover:text-gray-900"
        }`}
        title="Grid View"
      >
        <MaterialIcon name="grid_3x3" className="text-[16px]" />
      </button>
    </div>
  );
}

function HeroBanner() {
  return (
    <section className="relative w-full h-[240px] overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://www.farthinghoefinewine.com/img/FFW%20Website%20Hero%20Images.jpg"
        alt="Search All Wines"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1
          className="text-white text-4xl px-8 py-4"
          style={{
            fontFamily: "'Rosarivo', serif",
            backgroundColor: "rgba(21, 33, 64, 0.7)",
            fontWeight: 400,
          }}
        >
          Search All Wines
        </h1>
      </div>
    </section>
  );
}

function WineGridCard({ wine, priceDisplayMode, onViewDetails }: { wine: Wine; priceDisplayMode: "inBond" | "withTax"; onViewDetails: (wine: Wine) => void }) {
  return (
    <article className="border border-gray-200 rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
      {/* Wine image container */}
      <a href={`/product/${wine.slug}`} className="flex items-center justify-center h-[240px] bg-white overflow-hidden flex-shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={wine.imageUrl}
          alt={wine.name}
          className="max-h-full w-auto object-contain p-4"
        />
      </a>

      {/* Content */}
      <div className="p-4 flex flex-col" style={{ fontFamily: "'Helvetica', 'Arial', sans-serif", fontSize: "16px" }}>
        {/* Vintage and Name */}
        <a href={`/product/${wine.slug}`} className="hover:underline mb-2">
          <h3
            className="font-medium leading-tight"
            style={{ color: "rgb(21, 33, 64)", fontSize: "18px" }}
          >
            {wine.vintage} {wine.name}
          </h3>
        </a>

        {/* Region */}
        <p className="text-gray-600 mb-3" style={{ fontSize: "16px" }}>
          {wine.type} from {wine.region}
        </p>

        {/* Offers */}
        <div className="mb-4">
          {wine.offers.map((offer, i) => (
            <div key={i} className="mb-3" style={{ fontSize: "14px" }}>
              <div className="font-medium mb-2" style={{ color: "rgb(21, 33, 64)", fontSize: "14px" }}>
                {offer.caseType}
              </div>
              {offer.casePrice && (
                <div className="text-gray-700 mb-2" style={{ fontSize: "14px" }}>
                  <span className="font-semibold" style={{ color: "rgb(21, 33, 64)", fontSize: "16px" }}>
                    {offer.casePrice}
                    {offer.casePriceSup && offer.casePriceSup}
                  </span>
                  <span className="ml-2 text-gray-500" style={{ fontSize: "14px" }}>Case Price</span>
                </div>
              )}
              <div className="text-gray-700 mb-2" style={{ fontSize: "14px" }}>
                <span className="font-semibold" style={{ color: "rgb(21, 33, 64)", fontSize: "16px" }}>
                  {offer.pricePerBottle}
                  {offer.priceSup && offer.priceSup}
                </span>
                <span className="ml-2 text-gray-500" style={{ fontSize: "14px" }}>Bottle Price</span>
              </div>
              {offer.unitsAvailable && (
                <div className="text-gray-600" style={{ fontSize: "14px" }}>
                  {offer.unitsAvailable}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Price Display Label */}
        <div className="text-xs text-gray-500 mb-3">
          {priceDisplayMode === "inBond" ? "In Bond Bottle Price" : "Price Include Tax & Duty"}
        </div>

        {/* View Details button */}
        <button
          onClick={() => onViewDetails(wine)}
          className="w-full block px-6 py-2 rounded-full text-white text-sm font-medium transition-colors hover:opacity-90 text-center"
          style={{ backgroundColor: "rgb(21, 33, 64)" }}
        >
          View Details
        </button>
      </div>
    </article>
  );
}

function FilterBar({
  currentView,
  onViewChange,
  sortBy,
  onSortChange
}: {
  currentView: "list" | "grid";
  onViewChange: (view: "list" | "grid") => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}) {
  const [showSortMenu, setShowSortMenu] = useState(false);

  const sortOptions = [
    { value: "winery-asc", label: "Winery: A to Z" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "winery-desc", label: "Winery: Z to A" },
    { value: "vintage-new", label: "Vintage: Newest First" },
    { value: "vintage-old", label: "Vintage: Oldest First" },
  ];

  const currentSortLabel = sortOptions.find(opt => opt.value === sortBy)?.label || "Relevance";

  return (
    <section className="border-b border-gray-300 bg-white sticky top-[130px] z-40">
      <div className="max-w-[1440px] mx-auto px-6 py-3">
        {/* Single row: Sort by on left, View on right */}
        <div className="flex items-center justify-between">
          {/* Sort by */}
          <div className="relative">
            <button
              onClick={() => setShowSortMenu(!showSortMenu)}
              className="flex items-center gap-2 text-sm text-gray-900 hover:text-gray-700 whitespace-nowrap"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              <span>Sort by: {currentSortLabel}</span>
              <MaterialIcon name="unfold_more" className="text-[18px]" />
            </button>

            {showSortMenu && (
              <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded shadow-lg z-50 min-w-[200px]">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      onSortChange(option.value);
                      setShowSortMenu(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                      sortBy === option.value ? "bg-gray-100 font-semibold" : ""
                    }`}
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* View toggle */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-900" style={{ fontFamily: "'Raleway', sans-serif" }}>View:</span>
            <div className="flex items-center gap-1 border border-gray-300 rounded p-0.5">
              <button
                onClick={() => onViewChange("grid")}
                className={`flex items-center justify-center w-6 h-6 rounded transition-colors ${
                  currentView === "grid"
                    ? "bg-gray-200 text-gray-900"
                    : "bg-white text-gray-600 hover:text-gray-900"
                }`}
                title="Grid View"
              >
                <MaterialIcon name="grid_3x3" className="text-[14px]" />
              </button>
              <button
                onClick={() => onViewChange("list")}
                className={`flex items-center justify-center w-6 h-6 rounded transition-colors ${
                  currentView === "list"
                    ? "bg-gray-200 text-gray-900"
                    : "bg-white text-gray-600 hover:text-gray-900"
                }`}
                title="List View"
              >
                <MaterialIcon name="view_list" className="text-[14px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WineOfferRow({ offer, wine, priceDisplayMode, onViewDetails }: { offer: WineOffer; wine: Wine; priceDisplayMode?: "inBond" | "withTax"; onViewDetails?: (wine: Wine) => void }) {
  return (
    <div className="flex items-center gap-6 mt-auto pt-4 flex-wrap">
      <div className="text-sm" style={{ fontFamily: "'Raleway', sans-serif", color: "#333" }}>
        <span className="text-base font-semibold" style={{ color: "rgb(21, 33, 64)" }}>
          {offer.pricePerBottle}
          {offer.priceSup && offer.priceSup}
        </span>
        <span className="ml-1 text-gray-500">inc VAT per bottle</span>
      </div>
      <div className="text-sm font-semibold" style={{ color: "#333" }}>
        {offer.caseType}
      </div>
      <div className="text-sm" style={{ color: "#333" }}>
        <span className="font-semibold">{offer.casePrice}{offer.casePriceSup && offer.casePriceSup}</span>
        <span className="ml-1 text-gray-500">Nett Case Price</span>
      </div>
      <button
        onClick={() => onViewDetails?.(wine)}
        className="ml-auto px-6 py-2 rounded-full text-white text-sm font-medium transition-colors hover:opacity-90 inline-block"
        style={{ backgroundColor: "rgb(21, 33, 64)", fontFamily: "'Raleway', sans-serif" }}
      >
        View Details
      </button>
    </div>
  );
}

function WineCard({ wine, priceDisplayMode, onViewDetails }: { wine: Wine; priceDisplayMode: "inBond" | "withTax"; onViewDetails: (wine: Wine) => void }) {
  return (
    <article className="border-b border-gray-200 py-6 px-6">
      <div className="max-w-[1440px] mx-auto flex gap-6">
        {/* Wine image */}
        <a href={`/product/${wine.slug}`} className="flex-shrink-0 w-[120px] flex items-start justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={wine.imageUrl}
            alt={wine.name}
            className="max-h-[160px] w-auto object-contain"
          />
        </a>

        {/* Wine details */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-start justify-between">
            <div>
              <a href={`/product/${wine.slug}`} className="hover:underline">
                <h3
                  className="text-lg font-medium"
                  style={{ fontFamily: "'Raleway', sans-serif", color: "rgb(21, 33, 64)" }}
                >
                  {wine.name}
                </h3>
              </a>
              <p
                className="text-lg mt-0.5"
                style={{ fontFamily: "'Rosarivo', serif", color: "#555" }}
              >
                {wine.type} from {wine.region}
              </p>
            </div>
          </div>

          {/* Offers */}
          {wine.offers.map((offer, i) => (
            <WineOfferRow key={i} offer={offer} wine={wine} priceDisplayMode={priceDisplayMode} onViewDetails={onViewDetails} />
          ))}

          {/* Price Display Label */}
          <div className="text-xs text-gray-500 mt-2 pt-2 border-t border-gray-200">
            {priceDisplayMode === "inBond" ? "In Bond Bottle Price" : "Price Include Tax & Duty"}
          </div>
        </div>
      </div>
    </article>
  );
}

function FiltersPanel({
  selectedFilters,
  onFilterChange,
  priceDisplayMode,
  onPriceDisplayChange
}: {
  selectedFilters: { [key: string]: string[] };
  onFilterChange: (category: string, value: string, checked: boolean) => void;
  priceDisplayMode: "inBond" | "withTax";
  onPriceDisplayChange: (mode: "inBond" | "withTax") => void;
}) {
  const [expandedFilters, setExpandedFilters] = useState<{ [key: string]: boolean }>({
    region: true,
    style: true,
    producer: false,
    price: false,
    vintage: false,
    bottleSize: false,
    category: false,
    stockLocation: false,
  });

  const toggleFilter = (filterName: string) => {
    setExpandedFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  // Static filter data with counts from live site
  const filterData = {
    region: [
      { name: "France", count: 1355 },
      { name: "Italy", count: 259 },
      { name: "Spain", count: 41 },
      { name: "United States", count: 24 },
      { name: "Germany", count: 19 },
      { name: "Portugal", count: 15 },
      { name: "Australia", count: 14 },
      { name: "New Zealand", count: 12 },
      { name: "Argentina", count: 10 },
      { name: "Chile", count: 8 },
      { name: "South Africa", count: 8 },
      { name: "United Kingdom", count: 8 },
      { name: "Lebanon", count: 2 },
      { name: "Austria", count: 1 },
      { name: "Norway", count: 1 },
    ],
    style: [
      { name: "Red", count: 1297 },
      { name: "White", count: 369 },
      { name: "Sparkling", count: 68 },
      { name: "Fortified Wine", count: 17 },
      { name: "Rose", count: 15 },
      { name: "Still", count: 5 },
      { name: "Whiskies", count: 2 },
      { name: "Gin", count: 1 },
      { name: "Liqueur", count: 1 },
      { name: "Mixed", count: 1 },
    ],
    producer: [
      { name: "Ballot Millot", count: 54 },
      { name: "Maison Roche de Bellene", count: 34 },
      { name: "Domaine Huet", count: 28 },
      { name: "Domaine de la Romanée-Conti", count: 26 },
      { name: "Louis Roederer", count: 24 },
      { name: "Moët & Chandon", count: 22 },
      { name: "Château Lafite Rothschild", count: 20 },
      { name: "Domaine Leflaive", count: 19 },
      { name: "Château Margaux", count: 18 },
      { name: "Veuve Clicquot", count: 17 },
      { name: "Château Latour", count: 16 },
      { name: "Domaine Leroy", count: 15 },
      { name: "Bollinger", count: 14 },
      { name: "Château Pichon Longueville", count: 13 },
      { name: "Domaine Coche-Dury", count: 12 },
      { name: "Krug", count: 11 },
      { name: "Château Mouton Rothschild", count: 10 },
      { name: "Domaine du Romanée-St Vivant", count: 9 },
      { name: "Tattinger", count: 8 },
      { name: "Château d'Yquem", count: 7 },
    ],
    price: [
      { name: "up to £10", count: 0 },
      { name: "£10-£14.99", count: 0 },
      { name: "£15-£19.99", count: 0 },
      { name: "£20-£49.99", count: 0 },
      { name: "£50-£99.99", count: 0 },
      { name: "£100 and up", count: 0 },
    ],
    vintage: [
      { name: "NV", count: 31 },
      { name: "2025", count: 6 },
      { name: "2024", count: 153 },
      { name: "2023", count: 128 },
      { name: "2022", count: 143 },
      { name: "2021", count: 173 },
      { name: "2020", count: 190 },
      { name: "2019", count: 145 },
      { name: "2018", count: 119 },
      { name: "2017", count: 91 },
      { name: "2016", count: 87 },
      { name: "2015", count: 78 },
      { name: "2014", count: 37 },
      { name: "2013", count: 48 },
      { name: "2012", count: 53 },
      { name: "2011", count: 39 },
      { name: "2010", count: 45 },
      { name: "2009", count: 51 },
      { name: "2008", count: 24 },
      { name: "2007", count: 12 },
      { name: "2006", count: 16 },
      { name: "2005", count: 15 },
      { name: "2004", count: 12 },
      { name: "2003", count: 5 },
      { name: "2002", count: 6 },
      { name: "2001", count: 7 },
      { name: "2000", count: 9 },
      { name: "1999", count: 9 },
      { name: "1998", count: 8 },
      { name: "1997", count: 4 },
      { name: "1996", count: 3 },
      { name: "1995", count: 5 },
      { name: "1994", count: 2 },
      { name: "1992", count: 1 },
      { name: "1990", count: 1 },
      { name: "1989", count: 1 },
      { name: "1988", count: 2 },
      { name: "1986", count: 3 },
      { name: "1985", count: 1 },
      { name: "1982", count: 2 },
      { name: "1981", count: 1 },
      { name: "1967", count: 3 },
      { name: "1963", count: 1 },
      { name: "1954", count: 1 },
      { name: "1950", count: 1 },
      { name: "1931", count: 1 },
      { name: "1920", count: 1 },
    ],
    bottleSize: [
      { name: "Standard (75cl)", count: 1608 },
      { name: "Magnum (150cl)", count: 123 },
      { name: "Demi (37.5cl)", count: 27 },
      { name: "Dbl. Magnum (300cl)", count: 13 },
      { name: "Salmanazar (900cl)", count: 4 },
      { name: "Imperial (600cl)", count: 3 },
      { name: "50cl", count: 1 },
    ],
    category: [
      { name: "Wines To Enjoy Now", count: 210 },
      { name: "Singapore Stock", count: 102 },
      { name: "Kitty Fisher's Tasting Dinner range", count: 67 },
      { name: "Hong Kong Stock", count: 64 },
      { name: "Spring Drinking - Burgundy", count: 62 },
      { name: "Seasonal Top Picks", count: 38 },
    ],
    stockLocation: [
      { name: "United Kingdom", count: 1647 },
      { name: "Singapore", count: 102 },
      { name: "Hong Kong SAR China", count: 64 },
      { name: "Australia", count: 41 },
    ],
  };

  const filterCategories = [
    { name: "region", label: "Region", options: filterData.region },
    { name: "style", label: "Style", options: filterData.style },
    { name: "producer", label: "Producer", options: filterData.producer },
    { name: "price", label: "Price", options: filterData.price },
    { name: "vintage", label: "Vintage", options: filterData.vintage },
    { name: "bottleSize", label: "Bottle Size", options: filterData.bottleSize },
    { name: "category", label: "Category", options: filterData.category },
    { name: "stockLocation", label: "Stock Location", options: filterData.stockLocation },
  ];

  return (
    <aside className="w-full bg-white p-6 flex flex-col h-full overflow-hidden">
      <h2 className="text-lg font-semibold mb-6" style={{ fontFamily: "'Raleway', sans-serif", color: "rgb(21, 33, 64)" }}>
        Filters
      </h2>
      <div className="flex-1 overflow-y-auto pr-2" style={{
        scrollBehavior: 'smooth',
      }}>
        {/* Price Display Filter */}
        <div className="mb-6">
          <h3 className="w-full py-2 uppercase text-sm tracking-wide mb-3" style={{ fontFamily: "'Raleway', sans-serif", color: "rgb(21, 33, 64)", fontWeight: 600, letterSpacing: "0.05em" }}>
            Price Display
          </h3>
          <div className="py-3 space-y-3 border-t border-gray-200">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="priceDisplay"
                checked={priceDisplayMode === "inBond"}
                onChange={() => onPriceDisplayChange("inBond")}
                className="w-4 h-4"
              />
              <span style={{ fontSize: "14px", color: "#333" }}>In Bond Bottle Price</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="priceDisplay"
                checked={priceDisplayMode === "withTax"}
                onChange={() => onPriceDisplayChange("withTax")}
                className="w-4 h-4"
              />
              <span style={{ fontSize: "14px", color: "#333" }}>Include Duty & Tax</span>
            </label>
          </div>
        </div>

        {filterCategories.map((category) => (
          <div key={category.name} className="mb-6">
            <button
              onClick={() => toggleFilter(category.name)}
              className="w-full flex items-center justify-between py-2 hover:text-opacity-80 transition-colors uppercase text-sm tracking-wide"
              style={{ fontFamily: "'Raleway', sans-serif", color: "rgb(21, 33, 64)", fontWeight: 600, letterSpacing: "0.05em" }}
            >
              <span>{category.label}</span>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">({category.options.length})</span>
                <MaterialIcon
                  name={expandedFilters[category.name] ? "expand_less" : "expand_more"}
                  className="text-[18px]"
                />
              </div>
            </button>
            {expandedFilters[category.name] && (
              <div className="py-3 space-y-3 border-t border-gray-200 mt-3">
                {/* Search box for certain filters */}
                {(category.name === "region" || category.name === "producer") && (
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-gray-400"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  />
                )}
                <div className="space-y-2 max-h-[300px] overflow-y-auto">
                  {category.options.map((option) => {
                    const optionName = typeof option === 'string' ? option : option.name;
                    const optionCount = typeof option === 'object' ? option.count : 0;
                    return (
                      <label key={optionName} className="flex items-center justify-between gap-2 text-sm cursor-pointer">
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectedFilters[category.name]?.includes(optionName) || false}
                            onChange={(e) => onFilterChange(category.name, optionName, e.target.checked)}
                            className="w-4 h-4 rounded"
                          />
                          <span style={{ fontFamily: "'Raleway', sans-serif", color: "#333" }}>{optionName}</span>
                        </div>
                        <span className="text-xs text-gray-500">({optionCount})</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}

export default function Home() {
  const [viewMode, setViewMode] = useState<"list" | "grid">("grid");
  const [sortBy, setSortBy] = useState("winery-asc");
  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>({});
  const [priceDisplayMode, setPriceDisplayMode] = useState<"inBond" | "withTax">("inBond");
  const [selectedWineForModal, setSelectedWineForModal] = useState<Wine | null>(null);

  const handleViewDetails = (wine: Wine) => {
    setSelectedWineForModal(wine);
  };

  const handleAddToBasket = (wine: Wine, quantity: number) => {
    console.log(`Added ${quantity} of ${wine.name} to basket`);
    setSelectedWineForModal(null);
  };

  const handleFilterChange = (category: string, value: string, checked: boolean) => {
    setSelectedFilters((prev) => {
      const updated = { ...prev };
      if (!updated[category]) {
        updated[category] = [];
      }
      if (checked) {
        updated[category].push(value);
      } else {
        updated[category] = updated[category].filter((v) => v !== value);
      }
      if (updated[category].length === 0) {
        delete updated[category];
      }
      return updated;
    });
  };

  // Filter wines based on selected filters
  const filteredWines = wines.filter((wine) => {
    for (const [category, values] of Object.entries(selectedFilters)) {
      if (values.length === 0) continue;

      switch (category) {
        case "region":
          if (!values.includes(wine.country)) return false;
          break;
        case "style":
          const wineStyle =
            wine.colour === "Red"
              ? "Red"
              : wine.colour === "White"
              ? "White"
              : wine.colour === "Rose"
              ? "Rosé"
              : wine.colour;
          if (!values.includes(wineStyle)) return false;
          break;
        case "producer":
          if (!values.includes(wine.producer)) return false;
          break;
        case "price":
          const winePrice = parseFloat(wine.offers[0]?.pricePerBottle.replace(/[£,]/g, "") || "0");
          const matchesPrice = values.some(priceRange => {
            if (priceRange === "up to £10") return winePrice < 10;
            if (priceRange === "£10-£14.99") return winePrice >= 10 && winePrice < 15;
            if (priceRange === "£15-£19.99") return winePrice >= 15 && winePrice < 20;
            if (priceRange === "£20-£49.99") return winePrice >= 20 && winePrice < 50;
            if (priceRange === "£50-£99.99") return winePrice >= 50 && winePrice < 100;
            if (priceRange === "£100 and up") return winePrice >= 100;
            return false;
          });
          if (!matchesPrice) return false;
          break;
        case "vintage":
          if (!values.includes(wine.vintage)) return false;
          break;
        case "bottleSize":
          if (!values.includes(wine.bottleSize)) return false;
          break;
        case "category":
          // Category filter - for now, all wines match (you can customize this logic)
          break;
        case "stockLocation":
          if (!values.includes(wine.stockLocation)) return false;
          break;
      }
    }
    return true;
  });

  // Sort wines based on sortBy value
  const sortedWines = [...filteredWines].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        const priceA = parseFloat(a.offers[0]?.pricePerBottle.replace(/[£,]/g, "") || "0");
        const priceB = parseFloat(b.offers[0]?.pricePerBottle.replace(/[£,]/g, "") || "0");
        return priceA - priceB;
      case "price-high":
        const priceAHigh = parseFloat(a.offers[0]?.pricePerBottle.replace(/[£,]/g, "") || "0");
        const priceBHigh = parseFloat(b.offers[0]?.pricePerBottle.replace(/[£,]/g, "") || "0");
        return priceBHigh - priceAHigh;
      case "winery-asc":
        return a.producer.localeCompare(b.producer);
      case "winery-desc":
        return b.producer.localeCompare(a.producer);
      case "vintage-new":
        return parseInt(b.vintage) - parseInt(a.vintage);
      case "vintage-old":
        return parseInt(a.vintage) - parseInt(b.vintage);
      default:
        return 0;
    }
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroBanner />
        <div className="flex bg-white min-h-[calc(100vh-400px)]">
          {/* Left Sidebar - Filters (1/4 width) */}
          <div className="w-1/4 border-r border-gray-200">
            <FiltersPanel
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
              priceDisplayMode={priceDisplayMode}
              onPriceDisplayChange={setPriceDisplayMode}
            />
          </div>

          {/* Right Content Area (3/4 width) */}
          <div className="w-3/4">
            <FilterBar currentView={viewMode} onViewChange={setViewMode} sortBy={sortBy} onSortChange={setSortBy} />

            {viewMode === "list" ? (
              // List View
              <section>
                {sortedWines.map((wine) => (
                  <WineCard key={wine.slug} wine={wine} priceDisplayMode={priceDisplayMode} onViewDetails={handleViewDetails} />
                ))}
              </section>
            ) : (
              // Grid View
              <section className="bg-white">
                <div className="px-6 py-8">
                  <div className="grid grid-cols-3 gap-6">
                    {sortedWines.map((wine) => (
                      <WineGridCard key={wine.slug} wine={wine} priceDisplayMode={priceDisplayMode} onViewDetails={handleViewDetails} />
                    ))}
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      </main>
      <Footer />
      <ProductModal
        wine={selectedWineForModal}
        isOpen={!!selectedWineForModal}
        onClose={() => setSelectedWineForModal(null)}
        onAddToBasket={handleAddToBasket}
      />
    </div>
  );
}
