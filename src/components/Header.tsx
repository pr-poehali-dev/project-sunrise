import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon.tsx';

const navLinks = [
  { href: '/services', label: 'Все услуги' },
  { href: '/about', label: 'О нас' },
  { href: '/why-us', label: 'Почему выбирают нас' },
  { href: '/social', label: 'Социальная поддержка' },
  { href: '/portfolio', label: 'Наши работы' },
  { href: '/awards', label: 'Награды и сертификаты' },
  { href: '/reviews', label: 'Отзывы' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/97 shadow-lg' : 'bg-slate-900/90'
      } backdrop-blur-sm`}
    >
      {/* Строка навигации — только desktop */}
      <div className="hidden xl:block border-b border-slate-700">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex items-center gap-1 h-10">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-colors whitespace-nowrap ${
                  i === 0
                    ? location.pathname === link.href
                      ? 'bg-blue-500 text-white'
                      : 'bg-blue-600 hover:bg-blue-500 text-white'
                    : location.pathname === link.href
                    ? 'bg-slate-700 text-white'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Логотип + телефон + бургер */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
              <Icon name="Home" size={20} className="text-white" />
            </div>
            <div className="leading-tight">
              <div className="text-white font-bold text-sm md:text-base">СтройДонецк</div>
              <div className="text-blue-400 text-xs hidden sm:block">Строительство и кровля</div>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="tel:+79490049053"
              className="hidden md:flex items-center gap-2 text-white font-semibold text-sm hover:text-blue-300 transition-colors"
            >
              <Icon name="Phone" size={16} className="text-blue-400" />
              +7 949 004-90-53
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="xl:hidden w-10 h-10 flex items-center justify-center rounded-lg text-white hover:bg-slate-700 transition-colors"
              aria-label="Меню"
            >
              <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {menuOpen && (
        <div className="xl:hidden bg-slate-900 border-t border-slate-700 shadow-xl">
          <nav className="container mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-200 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+79490049053"
              className="px-4 py-3 rounded-lg text-sm font-medium text-blue-400 hover:bg-slate-700 flex items-center gap-2"
            >
              <Icon name="Phone" size={16} />
              +7 949 004-90-53
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}