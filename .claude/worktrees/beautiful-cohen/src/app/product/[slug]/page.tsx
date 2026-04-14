import { notFound } from "next/navigation";
import { wines, getWineBySlug } from "../../data";
import { MaterialIcon, Header, Footer } from "../../components";
import { ProductDetails } from "./ProductDetails";

export function generateStaticParams() {
  return wines.map((wine) => ({ slug: wine.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const wine = getWineBySlug(slug);

  if (!wine) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <nav className="max-w-[1440px] mx-auto px-6 py-3 text-sm text-gray-500" style={{ fontFamily: "'Raleway', sans-serif" }}>
          {wine.breadcrumb.map((crumb, i) => (
            <span key={crumb.label}>
              <a href={crumb.href} className="hover:underline text-gray-600">
                {crumb.label}
              </a>
              <span className="mx-2">&gt;</span>
            </span>
          ))}
          <span className="text-gray-400">{wine.name}</span>
        </nav>

        {/* Product section */}
        <section className="max-w-[1440px] mx-auto px-6 pb-8">
          <div className="flex gap-12">
            {/* Wine image */}
            <div className="flex-shrink-0 w-[350px] flex justify-center items-start pt-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={wine.imageUrl}
                alt={wine.name}
                className="max-h-[450px] w-auto object-contain"
              />
            </div>

            {/* Product info */}
            <div className="flex-1 pt-2">
              <h1
                className="text-4xl mb-1"
                style={{ fontFamily: "'Rosarivo', serif", color: "#212121", fontWeight: 400 }}
              >
                {wine.name}
              </h1>
              <p className="text-gray-500 text-base mb-6" style={{ fontFamily: "'Raleway', sans-serif" }}>
                {wine.bottleSize}
              </p>

              {/* Producer link */}
              <a
                href="#"
                className="text-base font-semibold hover:underline inline-block mb-8"
                style={{ fontFamily: "'Raleway', sans-serif", color: "rgb(21, 33, 64)" }}
              >
                {wine.producer} - See all wine from this producer
              </a>

              {/* Purchase cards */}
              {wine.offers.map((offer, i) => (
                <div
                  key={i}
                  className="rounded-lg p-6 mb-4 flex items-center gap-6 flex-wrap"
                  style={{ backgroundColor: "rgb(232, 236, 242)" }}
                >
                  {/* Case type + Price per bottle */}
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-sm" style={{ color: "rgb(21, 33, 64)" }}>{offer.caseType}</span>
                    <div className="mt-1">
                      <span className="text-lg font-semibold" style={{ color: "rgb(21, 33, 64)" }}>
                        {offer.pricePerBottle}
                      </span>
                      <sup className="text-xs">{offer.priceSup}</sup>
                    </div>
                    <span className="text-xs text-gray-500">per bottle</span>
                  </div>

                  {/* Stock location */}
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-600">Stock location: {wine.stockLocation}</span>
                    <span className="text-sm font-medium text-green-700 mt-1">In Stock</span>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* Case price */}
                  <div className="text-right">
                    <span className="text-2xl font-bold" style={{ color: "rgb(21, 33, 64)" }}>
                      {offer.casePrice}
                    </span>
                    <sup className="text-sm font-bold">{offer.casePriceSup}</sup>
                    <span className="ml-2 text-sm text-gray-600">Nett Case Price</span>
                  </div>

                  {/* Qty selector */}
                  <div className="flex flex-col items-center">
                    <label className="text-xs text-gray-500 mb-1">Qty</label>
                    <select
                      className="border border-gray-300 rounded px-3 py-2 text-sm bg-white"
                      defaultValue="1"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                    </select>
                  </div>

                  {/* Add button */}
                  <button
                    className="flex items-center gap-2 px-8 py-3 rounded-full text-white text-sm font-medium transition-colors hover:opacity-90"
                    style={{ backgroundColor: "rgb(21, 33, 64)", fontFamily: "'Raleway', sans-serif" }}
                  >
                    <MaterialIcon name="add_shopping_cart" className="text-[18px]" />
                    Add
                  </button>
                </div>
              ))}

              {/* Product Details accordion */}
              <ProductDetails wine={wine} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
