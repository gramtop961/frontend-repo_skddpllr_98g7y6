import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contacts" className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">FishFresh</h3>
            <p className="mt-2 text-slate-600">
              Магазин свежей рыбы и морепродуктов. Работаем ежедневно, доставка по городу и области.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-700">Контакты</h4>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li className="flex items-center gap-2"><Phone className="h-5 w-5 text-sky-600" /> +7 (999) 000-00-00</li>
              <li className="flex items-center gap-2"><Mail className="h-5 w-5 text-sky-600" /> hello@fishfresh.ru</li>
              <li className="flex items-center gap-2"><MapPin className="h-5 w-5 text-sky-600" /> Набережная, 12, Санкт‑Петербург</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-700">График</h4>
            <p className="mt-3 text-slate-700">Пн–Вс: 9:00–21:00</p>
            <p className="text-slate-500 text-sm">Самовывоз и курьерская доставка</p>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} FishFresh. Все права защищены.</p>
          <p>
            Сделано с любовью к морю.
          </p>
        </div>
      </div>
    </footer>
  );
}
