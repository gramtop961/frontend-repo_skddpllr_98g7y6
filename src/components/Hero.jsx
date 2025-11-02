import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-1 rounded-full border border-sky-200 bg-white px-3 py-1 text-sm text-sky-700 shadow-sm">
              <Star className="h-4 w-4 fill-sky-500/20 stroke-sky-600" />
              Свежая рыба с доставкой за 2 часа
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Натуральная свежая рыба и морепродукты
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Отборные поставки каждый день: охлаждённая, копчёная и филе. Деликатесы для ужина и повседневные фавориты.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#assortment" className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-6 py-3 text-white font-medium shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400">
                Посмотреть ассортимент
              </a>
              <a href="#about" className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-6 py-3 text-slate-700 font-medium hover:bg-slate-50">
                О качестве
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop"
                alt="Свежая рыба и морепродукты"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white" />
    </section>
  );
}
