"use client";

import { useState, useEffect } from "react";
import { Wine, WineOffer } from "./data";
import { MaterialIcon } from "./components";

function OfferAddToBasket({
  offer,
  wine,
  onAddToBasket,
  heading,
}: {
  offer: WineOffer;
  wine: Wine;
  onAddToBasket: (wine: Wine, offer: WineOffer, quantity: number) => void;
  heading?: string;
}) {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    onAddToBasket(wine, offer, quantity);
    setQuantity(1);
  };

  const isSingleBottle = offer.caseType === "Single Bottle";

  return (
    <div className="border border-gray-200 rounded-lg p-3">
      {heading && (
        <h3 className="font-semibold text-sm mb-2" style={{ color: "rgb(21, 33, 64)" }}>
          {heading}
        </h3>
      )}
      {/* Offer pricing */}
      <div className="mb-3">
        {!isSingleBottle ? (
          <>
            <div style={{ color: "rgb(21, 33, 64)", fontSize: "14px" }}>
              <span className="font-semibold" style={{ fontSize: "16px" }}>
                {offer.casePrice}{offer.casePriceSup && offer.casePriceSup}
              </span>
              <span className="ml-1">{offer.caseType}</span>
            </div>
            <div style={{ color: "rgb(21, 33, 64)", fontSize: "14px", fontWeight: "normal" }}>
              {offer.pricePerBottle}{offer.priceSup && offer.priceSup} / bottle
            </div>
          </>
        ) : (
          <div style={{ color: "rgb(21, 33, 64)", fontSize: "14px" }}>
            <span className="font-semibold" style={{ fontSize: "16px" }}>
              {offer.pricePerBottle}{offer.priceSup && offer.priceSup}
            </span>
            <span className="ml-1">Per Bottle</span>
          </div>
        )}
      </div>

      {/* Quantity and Add to Basket */}
      <div className="flex items-center gap-3">
        <div className="flex flex-col">
          <span className="text-xs text-gray-600 mb-1">Qty</span>
          <div className="flex items-center border border-gray-300 rounded">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-2 py-1 text-gray-600 hover:bg-gray-100 text-sm"
            >
              −
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-10 text-center border-l border-r border-gray-300 py-1 focus:outline-none text-sm"
              min="1"
            />
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-2 py-1 text-gray-600 hover:bg-gray-100 text-sm"
            >
              +
            </button>
          </div>
        </div>
        <button
          onClick={handleAdd}
          className="flex-1 px-4 py-2 rounded-full text-white text-sm font-medium transition-opacity hover:opacity-90"
          style={{ backgroundColor: "rgb(21, 33, 64)" }}
        >
          Add {isSingleBottle ? "Bottle" : "Case"} to Basket
        </button>
      </div>
    </div>
  );
}

export function ProductModal({
  wine,
  isOpen,
  onClose,
  onAddToBasket,
}: {
  wine: Wine | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToBasket: (wine: Wine, offer: WineOffer, quantity: number) => void;
}) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !wine) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.35)" }}
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg shadow-lg max-w-[700px] w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row gap-6 p-6">
          {/* Product Image */}
          <div className="flex-shrink-0 w-full md:w-[250px] flex items-center justify-center bg-gray-100 rounded-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={wine.imageUrl}
              alt={wine.name}
              className="max-h-[300px] w-auto object-contain p-4"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1 flex flex-col">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <MaterialIcon name="close" className="text-[24px]" />
            </button>

            {/* Wine Name and Basics */}
            <h2
              className="text-lg font-medium mb-1 pr-8"
              style={{ fontFamily: "'Raleway', sans-serif", color: "rgb(21, 33, 64)" }}
            >
              {wine.vintage} {wine.name}
            </h2>
            <p className="text-sm text-gray-500 mb-2">{wine.bottleSize}</p>

            {/* Producer Link */}
            <a
              href={`/producer/${wine.producer}`}
              className="text-sm font-semibold mb-4 hover:underline"
              style={{ color: "rgb(21, 33, 64)" }}
            >
              {wine.producer} - See all wine from this producer
            </a>

            {/* Wine Type and Region */}
            <p className="text-sm text-gray-600 mb-4" style={{ fontFamily: "'Raleway', sans-serif" }}>
              {wine.type} from {wine.region}
            </p>

            {/* Stock Location and Status */}
            <div className="flex items-center gap-4 mb-4 text-sm">
              <div>
                <span className="text-gray-600">Stock location: </span>
                <span className="font-semibold text-gray-900">{wine.stockLocation}</span>
              </div>
              <div className="text-green-600 font-semibold">In Stock</div>
            </div>

            {/* Offers - each with its own quantity + add to basket */}
            <div className="flex flex-col gap-3 mt-auto">
              {/* Single Bottle offers */}
              {wine.offers.filter(o => o.caseType === "Single Bottle").map((offer, i) => (
                <OfferAddToBasket
                  key={`bottle-${i}`}
                  offer={offer}
                  wine={wine}
                  onAddToBasket={onAddToBasket}
                  heading="Purchase by the Bottle"
                />
              ))}
              {/* Case offers */}
              {wine.offers.filter(o => o.caseType !== "Single Bottle").map((offer, i) => (
                <OfferAddToBasket
                  key={`case-${i}`}
                  offer={offer}
                  wine={wine}
                  onAddToBasket={onAddToBasket}
                  heading="Purchase by the Case"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
