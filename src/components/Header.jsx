import { ShoppingCart, Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-sky-500/10 ring-1 ring-sky-500 flex items-center justify-center">
              <span className="text-sky-600 font-bold">F</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">FishFresh</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-slate-700">
            <a href="#assortment" className="hover:text-sky-600 transition">Ассортимент</a>
            <a href="#about" className="hover:text-sky-600 transition">О нас</a>
            <a href="#contacts" className="hover:text-sky-600 transition">Контакты</a>
          </nav>

          <div className="flex items-center gap-2">
            <a href="tel:+79990000000" className="hidden sm:flex items-center gap-2 text-slate-700 hover:text-sky-700 transition">
              <Phone className="h-5 w-5" />
              <span className="font-medium">+7 (999) 000-00-00</span>
            </a>
            <button className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-3 py-2 text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400">
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden sm:inline">Корзина</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
