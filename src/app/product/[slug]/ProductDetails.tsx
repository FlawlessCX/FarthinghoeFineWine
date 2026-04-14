"use client";

import { useState } from "react";
import type { Wine } from "../../data";

export function ProductDetails({ wine }: { wine: Wine }) {
  const [isOpen, setIsOpen] = useState(false);

  const details = [
    { label: "Vintage", value: wine.vintage },
    { label: "Colour", value: wine.colour },
    { label: "Producer", value: wine.producer, href: "#" },
    { label: "Country", value: wine.country, href: `/en/wine/${wine.country.toLowerCase()}` },
    { label: "Region", value: wine.subRegion, href: "#" },
    ...(wine.appellation ? [{ label: "Sub Region", value: wine.appellation, href: "#" }] : []),
    { label: "Bottle Size", value: wine.bottleSize },
    { label: "ABV", value: wine.abv },
  ].filter((d) => d.value);

  return (
    <div className="border-t border-b border-gray-200 mt-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
        style={{ fontFamily: "'Raleway', sans-serif" }}
      >
        <span className="text-base font-medium text-gray-700">Product Details:</span>
        <span
          className="material-icons-outlined text-gray-500 transition-transform"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          expand_more
        </span>
      </button>

      {isOpen && (
        <div className="pb-6">
          <ul className="space-y-3">
            {details.map((detail) => (
              <li key={detail.label} className="flex gap-4 text-sm" style={{ fontFamily: "'Raleway', sans-serif" }}>
                <span className="font-semibold w-[120px] flex-shrink-0" style={{ color: "rgb(21, 33, 64)" }}>
                  {detail.label}
                </span>
                {detail.href ? (
                  <a href={detail.href} className="text-gray-700 hover:underline">
                    {detail.value}
                  </a>
                ) : (
                  <span className="text-gray-700">{detail.value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
