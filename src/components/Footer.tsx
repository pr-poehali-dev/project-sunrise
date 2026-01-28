import Icon from '@/components/ui/icon.tsx';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Строительная компания</h3>
            <p className="text-white/70">
              Кровельные и строительные работы под ключ в Донецке
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <div className="space-y-3 text-white/70">
              <a href="tel:+79490049053" className="flex items-center gap-2 hover:text-white transition-colors">
                <Icon name="Phone" size={18} />
                +7 949 004-90-53
              </a>
              <p className="flex items-center gap-2">
                <Icon name="MapPin" size={18} />
                Донецк
              </p>
              <a 
                href="https://t.me/DonetskStroyBot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                Telegram-бот
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Услуги</h3>
            <ul className="space-y-2 text-white/70">
              <li>Монтаж кровли</li>
              <li>Ремонт кровли</li>
              <li>Строительные работы</li>
              <li>Утепление домов</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            Строительные и кровельные работы в Донецке © 2026. Все права защищены
          </p>
          <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}