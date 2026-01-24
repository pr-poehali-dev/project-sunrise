import { useState } from 'react';
import Icon from '@/components/ui/icon.tsx';

interface CalculateModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName?: string;
}

export default function CalculateModal({ isOpen, onClose, serviceName }: CalculateModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: serviceName || '',
    area: '',
    comment: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const TELEGRAM_BOT_TOKEN = '7967876548:AAH0kGgqSUh7XnlVqHbxHmzPGOgT0ebf2OI';
    const TELEGRAM_CHAT_ID = '1558764964';

    const message = `🧮 Новая заявка на расчёт стоимости\n\n` +
      `👤 Имя: ${formData.name}\n` +
      `📱 Телефон: ${formData.phone}\n` +
      `🔧 Услуга: ${formData.service}\n` +
      `📏 Площадь: ${formData.area} м²\n` +
      `💬 Комментарий: ${formData.comment || 'Не указан'}`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'HTML',
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          service: serviceName || '',
          area: '',
          comment: '',
        });
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Ошибка отправки:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-md w-full p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Рассчитать стоимость</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        {submitStatus === 'success' ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="CheckCircle" size={32} className="text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Заявка отправлена!</h3>
            <p className="text-slate-600">Мы свяжемся с вами в ближайшее время</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                Ваше имя *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="Иван Иванов"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                Телефон *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="+7 (949) 491-57-29"
                required
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                Услуга *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                required
              >
                <option value="">Выберите услугу</option>
                <option value="Монтаж кровли">Монтаж кровли</option>
                <option value="Ремонт кровли">Ремонт кровли</option>
                <option value="Общестроительные работы">Общестроительные работы</option>
                <option value="Утепление домов и крыш">Утепление домов и крыш</option>
                <option value="Фасадные и отделочные работы">Фасадные и отделочные работы</option>
                <option value="Водосточные системы">Водосточные системы</option>
              </select>
            </div>

            <div>
              <label htmlFor="area" className="block text-sm font-semibold text-slate-700 mb-2">
                Площадь (м²)
              </label>
              <input
                type="number"
                id="area"
                name="area"
                value={formData.area}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="100"
              />
            </div>

            <div>
              <label htmlFor="comment" className="block text-sm font-semibold text-slate-700 mb-2">
                Комментарий
              </label>
              <textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                placeholder="Дополнительная информация..."
              />
            </div>

            {submitStatus === 'error' && (
              <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm">
                Произошла ошибка. Попробуйте позже или позвоните нам.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <Icon name="Loader2" size={24} className="animate-spin" />
                  Отправка...
                </>
              ) : (
                <>
                  <Icon name="Send" size={24} />
                  Отправить заявку
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}