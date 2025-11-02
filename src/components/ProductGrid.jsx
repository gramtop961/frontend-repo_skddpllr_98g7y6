import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";

const PRODUCTS = [
  {
    id: 1,
    name: "Сёмга охлаждённая",
    desc: "Премиальное филе, богато омега-3",
    price: 1899,
    category: "fresh",
    image:
      "https://images.unsplash.com/photo-1611174741266-c8cebc903380?q=80&w=1600&auto=format&fit=crop",
    badge: "Хит",
  },
  {
    id: 2,
    name: "Дорадо",
    desc: "Средиземноморская классика",
    price: 1290,
    category: "fresh",
    image:
      "https://images.unsplash.com/photo-1594182636384-2d0ffbb2d3a4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Форель радужная",
    desc: "Нежная и сочная",
    price: 990,
    category: "fresh",
    image:
      "https://images.unsplash.com/photo-1557425631-f132f06f4aa6?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Скумбрия копчёная",
    desc: "Аромат холодного копчения",
    price: 670,
    category: "smoked",
    image:
      "https://images.unsplash.com/photo-1558030006-450675c4cde2?q=80&w=1600&auto=format&fit=crop",
    badge: "Новинка",
  },
  {
    id: 5,
    name: "Креветки королевские",
    desc: "Идеальны к пасте и салатам",
    price: 1190,
    category: "seafood",
    image:
      "https://images.unsplash.com/photo-1564849444446-f876dcef378e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Тунец стейк",
    desc: "Идеален для гриля",
    price: 1590,
    category: "fresh",
    image:
      "https://images.unsplash.com/photo-1599084993091-1cb5c96a3082?q=80&w=1600&auto=format&fit=crop",
  },
];

const TABS = [
  { key: "all", label: "Все" },
  { key: "fresh", label: "Охлаждённая" },
  { key: "smoked", label: "Копчёная" },
  { key: "seafood", label: "Морепродукты" },
];

export default function ProductGrid() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    if (active === "all") return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="assortment" className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Ассортимент</h2>
            <p className="mt-1 text-slate-600">Свежесть каждый день — выберите свой любимый вкус.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {TABS.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  active === t.key
                    ? "border-sky-600 bg-sky-50 text-sky-700"
                    : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
