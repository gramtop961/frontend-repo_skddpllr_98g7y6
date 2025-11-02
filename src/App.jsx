import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

function About() {
  return (
    <section id="about" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Почему мы</h2>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Ежедневные поставки</p>
                <p className="mt-1 text-slate-600">Работаем напрямую с проверенными рыболовецкими хозяйствами и импортёрами.</p>
              </li>
              <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Холодовая цепь</p>
                <p className="mt-1 text-slate-600">Сохраняем оптимальную температуру на всех этапах от склада до вашей двери.</p>
              </li>
              <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Чистота и разделка</p>
                <p className="mt-1 text-slate-600">Подготовим филе, стейки, удалим кости и упакуем вакуумно по запросу.</p>
              </li>
              <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Быстрая доставка</p>
                <p className="mt-1 text-slate-600">Курьеры привезут заказ в течение 2 часов в удобный интервал.</p>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-slate-200">
            <img
              src="https://images.unsplash.com/photo-1517088587697-8de5e9921ee8?q=80&w=1600&auto=format&fit=crop"
              alt="Рыбный прилавок"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <ProductGrid />
        <About />
      </main>
      <Footer />
    </div>
  );
}
