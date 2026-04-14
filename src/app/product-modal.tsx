"use client";

import { useState, useEffect } from "react";
import { Wine } from "./data";
import { MaterialIcon } from "./components";

export function ProductModal({
  wine,
  isOpen,
  onClose,
  onAddToBasket,
}: {
  wine: Wine | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToBasket: (wine: Wine, quantity: number) => void;
}) {
  const [quantity, setQuantity] = useState(1);

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

  const handleAddClick = () => {
    onAddToBasket(wine, quantity);
    setQuantity(1);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg max-w-[700px] w-full max-h-[90vh] overflow-y-auto"
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
              className="text-2xl font-medium mb-1"
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

            {/* Pricing Details */}
            <div className="border-t border-gray-200 pt-4 mb-4">
              {wine.offers.length > 0 && (
                <div>
                  {wine.offers.map((offer, i) => (
                    <div key={i} className="mb-3 pb-3 border-b border-gray-100 last:border-b-0 last:pb-0">
                      <div className="font-medium mb-2" style={{ color: "rgb(21, 33, 64)", fontSize: "14px" }}>
                        {offer.caseType}
                      </div>
                      {offer.casePrice && (
                        <div className="text-sm mb-1">
                          <span className="font-semibold" style={{ color: "rgb(21, 33, 64)" }}>
                            {offer.casePrice}
                            {offer.casePriceSup && offer.casePriceSup}
                          </span>
                          <span className="ml-2 text-gray-500">Case Price</span>
                        </div>
                      )}
                      <div className="text-sm">
                        <span className="font-semibold" style={{ color: "rgb(21, 33, 64)" }}>
                          {offer.pricePerBottle}
                          {offer.priceSup && offer.priceSup}
                        </span>
                        <span className="ml-2 text-gray-500">Bottle Price</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Stock Location and Status */}
            <div className="flex items-center gap-4 mb-4 text-sm">
              <div>
                <span className="text-gray-600">Stock location: </span>
                <span className="font-semibold text-gray-900">{wine.stockLocation}</span>
              </div>
              <div className="text-green-600 font-semibold">In Stock</div>
            </div>

            {/* Quantity Selector and Add Button */}
            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-200">
              <div className="flex flex-col">
                <span className="text-xs text-gray-600 mb-1">Qty</span>
                <div className="flex items-center border border-gray-300 rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-12 text-center border-l border-r border-gray-300 py-1 focus:outline-none"
                    min="1"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={handleAddClick}
                className="flex-1 px-6 py-2 rounded-full text-white font-medium transition-opacity hover:opacity-90"
                style={{ backgroundColor: "rgb(21, 33, 64)" }}
              >
                Add to Basket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
