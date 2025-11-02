import { ShoppingCart } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-cover"
          loading="lazy"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-sky-700 shadow ring-1 ring-sky-200">
            {product.badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
        <p className="mt-1 text-sm text-slate-600">{product.desc}</p>
        <div className="mt-auto flex items-end justify-between pt-4">
          <div>
            <div className="text-xl font-bold text-slate-900">{product.price.toLocaleString()} ₽</div>
            <div className="text-xs text-slate-500">за кг</div>
          </div>
          <button className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-3 py-2 text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400">
            <ShoppingCart className="h-5 w-5" />
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
}
