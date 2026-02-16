import { useState, useRef, useEffect } from 'react';
import Icon from '@/components/ui/icon.tsx';

const serviceOptions = [
  { id: 'roof', label: 'Кровельные работы', icon: 'Home' },
  { id: 'foundation', label: 'Фундаментные работы', icon: 'Layers' },
  { id: 'facade', label: 'Фасадные работы', icon: 'Building2' },
  { id: 'interior', label: 'Внутренняя отделка', icon: 'PaintBucket' },
  { id: 'carpentry', label: 'Столярные работы', icon: 'Hammer' },
  { id: 'fence', label: 'Заборы и ограждения', icon: 'Fence' },
];

const subtypeOptions: Record<string, { id: string; label: string; icon: string }[]> = {
  roof: [
    { id: 'new', label: 'Монтаж новой кровли', icon: 'Plus' },
    { id: 'replace', label: 'Замена старой кровли', icon: 'RefreshCw' },
    { id: 'repair', label: 'Ремонт кровли', icon: 'Wrench' },
    { id: 'elements', label: 'Элементы кровли', icon: 'Component' },
  ],
  foundation: [
    { id: 'strip', label: 'Ленточный фундамент', icon: 'Minus' },
    { id: 'slab', label: 'Монолитная плита', icon: 'Square' },
    { id: 'pile', label: 'Свайный фундамент', icon: 'ArrowDown' },
    { id: 'consult', label: 'Нужна консультация', icon: 'HelpCircle' },
  ],
  facade: [
    { id: 'insulation', label: 'Утепление фасада', icon: 'Thermometer' },
    { id: 'cladding', label: 'Облицовка', icon: 'LayoutGrid' },
    { id: 'plaster', label: 'Штукатурка', icon: 'Paintbrush' },
    { id: 'painting', label: 'Покраска', icon: 'Palette' },
  ],
  interior: [
    { id: 'cosmetic', label: 'Косметический ремонт', icon: 'Sparkles' },
    { id: 'major', label: 'Капитальный ремонт', icon: 'Hammer' },
    { id: 'turnkey', label: 'Ремонт под ключ', icon: 'Key' },
  ],
  carpentry: [
    { id: 'doors', label: 'Двери и окна', icon: 'DoorOpen' },
    { id: 'stairs', label: 'Лестницы', icon: 'TrendingUp' },
    { id: 'furniture', label: 'Мебель на заказ', icon: 'Armchair' },
    { id: 'other', label: 'Другое', icon: 'MoreHorizontal' },
  ],
  fence: [
    { id: 'profsheet', label: 'Профлист', icon: 'LayoutList' },
    { id: 'wood', label: 'Дерево', icon: 'TreePine' },
    { id: 'brick', label: 'Кирпич', icon: 'Brick' },
    { id: 'mesh', label: 'Сетка', icon: 'Grid3x3' },
    { id: 'combined', label: 'Комбинированный', icon: 'Combine' },
  ],
};

const sizeOptions = [
  { id: 'small', label: 'Небольшой объём', icon: 'Minimize2', hint: 'до 50 м²' },
  { id: 'medium', label: 'Средний объём', icon: 'Square', hint: '50–150 м²' },
  { id: 'large', label: 'Большой объём', icon: 'Maximize2', hint: 'более 150 м²' },
  { id: 'unknown', label: 'Не знаю точно', icon: 'HelpCircle', hint: 'рассчитаем за вас' },
];

const timingOptions = [
  { id: 'urgent', label: 'Срочно', icon: 'Zap', hint: 'в ближайшие дни' },
  { id: 'month', label: 'В течение месяца', icon: 'Calendar', hint: 'есть время спланировать' },
  { id: 'later', label: 'Позже', icon: 'Clock', hint: 'через 2–3 месяца' },
  { id: 'exploring', label: 'Просто узнаю цену', icon: 'Search', hint: 'без обязательств' },
];

const objectOptions = [
  { id: 'house', label: 'Частный дом', icon: 'Home' },
  { id: 'dacha', label: 'Дача', icon: 'TreePine' },
  { id: 'commercial', label: 'Коммерческий объект', icon: 'Building2' },
  { id: 'land', label: 'Участок', icon: 'MapPin' },
];

const TOTAL_STEPS = 7;

const serviceLabels: Record<string, string> = {
  roof: 'Кровельные работы',
  foundation: 'Фундаментные работы',
  facade: 'Фасадные работы',
  interior: 'Внутренняя отделка',
  carpentry: 'Столярные работы',
  fence: 'Заборы и ограждения',
};

const subtypeLabels: Record<string, Record<string, string>> = {
  roof: { new: 'Монтаж новой', replace: 'Замена старой', repair: 'Ремонт', elements: 'Элементы кровли' },
  foundation: { strip: 'Ленточный', slab: 'Плита', pile: 'Свайный', consult: 'Консультация' },
  facade: { insulation: 'Утепление', cladding: 'Облицовка', plaster: 'Штукатурка', painting: 'Покраска' },
  interior: { cosmetic: 'Косметический', major: 'Капитальный', turnkey: 'Под ключ' },
  carpentry: { doors: 'Двери и окна', stairs: 'Лестницы', furniture: 'Мебель', other: 'Другое' },
  fence: { profsheet: 'Профлист', wood: 'Дерево', brick: 'Кирпич', mesh: 'Сетка', combined: 'Комбинированный' },
};

const sizeLabels: Record<string, string> = { small: 'Небольшой', medium: 'Средний', large: 'Большой', unknown: 'Не определён' };
const timingLabels: Record<string, string> = { urgent: 'Срочно', month: 'В течение месяца', later: 'Позже', exploring: 'Узнаю цену' };
const objectLabels: Record<string, string> = { house: 'Частный дом', dacha: 'Дача', commercial: 'Коммерческий', land: 'Участок' };

export default function QuizSection() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    service: '',
    subtype: '',
    size: '',
    timing: '',
    object: '',
    comment: '',
    name: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const sectionRef = useRef<HTMLDivElement>(null);
  const [projectCount] = useState(() => 168 + Math.floor(Math.random() * 20));

  const scrollToQuiz = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const goNext = () => {
    setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
    setTimeout(scrollToQuiz, 100);
  };

  const goBack = () => {
    setStep((s) => Math.max(s - 1, 0));
    setTimeout(scrollToQuiz, 100);
  };

  const selectOption = (field: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
    setTimeout(goNext, 300);
  };

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, '');
    if (digits.length === 0) return '';
    let formatted = '+7';
    if (digits.length > 1) formatted += ' (' + digits.slice(1, 4);
    if (digits.length > 4) formatted += ') ' + digits.slice(4, 7);
    if (digits.length > 7) formatted += '-' + digits.slice(7, 9);
    if (digits.length > 9) formatted += '-' + digits.slice(9, 11);
    return formatted;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '');
    let digits = raw;
    if (digits.startsWith('8')) digits = '7' + digits.slice(1);
    if (!digits.startsWith('7') && digits.length > 0) digits = '7' + digits;
    if (digits.length > 11) digits = digits.slice(0, 11);
    setAnswers((prev) => ({ ...prev, phone: formatPhone(digits) }));
    setPhoneError('');
  };

  const validatePhone = () => {
    const digits = answers.phone.replace(/\D/g, '');
    if (digits.length !== 11) {
      setPhoneError('Введите полный номер телефона');
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!answers.name.trim()) return;
    if (!validatePhone()) return;

    setIsSubmitting(true);

    const now = new Date();
    const dateStr = now.toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' });

    const message = [
      '📋 Новая заявка с квиза',
      '',
      `🔧 Тип работ: ${serviceLabels[answers.service] || answers.service}`,
      `📌 Подтип: ${(subtypeLabels[answers.service] || {})[answers.subtype] || answers.subtype}`,
      `📐 Объём: ${sizeLabels[answers.size] || answers.size}`,
      `⏰ Сроки: ${timingLabels[answers.timing] || answers.timing}`,
      `🏠 Объект: ${objectLabels[answers.object] || answers.object}`,
      answers.comment ? `💬 Комментарий: ${answers.comment}` : '',
      '',
      `👤 Имя: ${answers.name}`,
      `📞 Телефон: ${answers.phone}`,
      `📅 Дата: ${dateStr}`,
    ].filter(Boolean).join('\n');

    try {
      const response = await fetch(
        `https://api.telegram.org/bot8330148159:AAF4oiiRH7xyPhXLcDadK9Jx4KpMyM66BBw/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: '722623121', text: message }),
        }
      );
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const progress = ((step + 1) / TOTAL_STEPS) * 100;

  const OptionCard = ({
    icon,
    label,
    hint,
    selected,
    onClick,
  }: {
    icon: string;
    label: string;
    hint?: string;
    selected: boolean;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className={`flex items-center gap-4 w-full p-4 rounded-xl border-2 text-left transition-all ${
        selected
          ? 'border-blue-500 bg-blue-50 shadow-md'
          : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm'
      }`}
    >
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
          selected ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
        }`}
      >
        <Icon name={icon} size={22} />
      </div>
      <div className="flex-1 min-w-0">
        <div className={`font-semibold ${selected ? 'text-blue-700' : 'text-slate-800'}`}>
          {label}
        </div>
        {hint && <div className="text-sm text-slate-500 mt-0.5">{hint}</div>}
      </div>
      {selected && (
        <div className="flex-shrink-0">
          <Icon name="CheckCircle" size={22} className="text-blue-600" />
        </div>
      )}
    </button>
  );

  const StepHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
    <div className="mb-6">
      <h3 className="text-xl md:text-2xl font-bold text-slate-900">{title}</h3>
      {subtitle && <p className="text-slate-500 mt-1">{subtitle}</p>}
    </div>
  );

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div>
            <StepHeader title="Что вас интересует?" subtitle="Выберите направление работ" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {serviceOptions.map((opt) => (
                <OptionCard
                  key={opt.id}
                  icon={opt.icon}
                  label={opt.label}
                  selected={answers.service === opt.id}
                  onClick={() => selectOption('service', opt.id)}
                />
              ))}
            </div>
          </div>
        );

      case 1:
        return (
          <div>
            <StepHeader
              title="Уточните тип работ"
              subtitle={serviceLabels[answers.service]}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(subtypeOptions[answers.service] || []).map((opt) => (
                <OptionCard
                  key={opt.id}
                  icon={opt.icon}
                  label={opt.label}
                  selected={answers.subtype === opt.id}
                  onClick={() => selectOption('subtype', opt.id)}
                />
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <StepHeader title="Примерный объём работ" subtitle="Это поможет точнее рассчитать стоимость" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {sizeOptions.map((opt) => (
                <OptionCard
                  key={opt.id}
                  icon={opt.icon}
                  label={opt.label}
                  hint={opt.hint}
                  selected={answers.size === opt.id}
                  onClick={() => selectOption('size', opt.id)}
                />
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <StepHeader title="Когда планируете начать?" subtitle="Определим приоритет вашего проекта" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {timingOptions.map((opt) => (
                <OptionCard
                  key={opt.id}
                  icon={opt.icon}
                  label={opt.label}
                  hint={opt.hint}
                  selected={answers.timing === opt.id}
                  onClick={() => selectOption('timing', opt.id)}
                />
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            <StepHeader title="Тип объекта" subtitle="Где будут проводиться работы?" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {objectOptions.map((opt) => (
                <OptionCard
                  key={opt.id}
                  icon={opt.icon}
                  label={opt.label}
                  selected={answers.object === opt.id}
                  onClick={() => selectOption('object', opt.id)}
                />
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div>
            <StepHeader title="Дополнительные пожелания" subtitle="Опишите особенности проекта (необязательно)" />
            <textarea
              value={answers.comment}
              onChange={(e) => setAnswers((prev) => ({ ...prev, comment: e.target.value }))}
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 outline-none resize-none h-32 text-slate-800 placeholder:text-slate-400"
              placeholder="Например: нужен демонтаж старого покрытия, есть сложный рельеф участка, особые материалы..."
            />
            <button
              onClick={goNext}
              className="mt-4 w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold transition-all"
            >
              Продолжить
              <Icon name="ArrowRight" size={18} />
            </button>
          </div>
        );

      case 6:
        if (submitted) {
          return (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <Icon name="CheckCircle" size={40} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Заявка принята!</h3>
              <p className="text-slate-600 text-lg max-w-md mx-auto">
                Специалист свяжется с вами в ближайшее время и озвучит точную стоимость работ.
              </p>
            </div>
          );
        }

        return (
          <div>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Calculator" size={32} className="text-green-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Расчёт готов ✅</h3>
              <p className="text-slate-600 text-lg max-w-lg mx-auto">
                Мы уже рассчитали стоимость работ по вашим параметрам.
                Оставьте номер телефона — специалист позвонит и подробно всё расскажет.
              </p>
            </div>

            <div className="max-w-md mx-auto space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Ваше имя</label>
                <input
                  type="text"
                  value={answers.name}
                  onChange={(e) => setAnswers((prev) => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-blue-500 outline-none text-slate-800 placeholder:text-slate-400"
                  placeholder="Иван"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Телефон</label>
                <input
                  type="tel"
                  value={answers.phone}
                  onChange={handlePhoneChange}
                  className={`w-full px-4 py-3.5 border-2 rounded-xl focus:border-blue-500 outline-none text-slate-800 placeholder:text-slate-400 ${
                    phoneError ? 'border-red-400' : 'border-gray-200'
                  }`}
                  placeholder="+7 (___) ___-__-__"
                  required
                />
                {phoneError && (
                  <p className="text-red-500 text-sm mt-1">{phoneError}</p>
                )}
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting || !answers.name.trim()}
                className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Icon name="Loader2" size={22} className="animate-spin" />
                    Отправка...
                  </>
                ) : (
                  <>
                    <Icon name="Send" size={22} />
                    Получить расчёт
                  </>
                )}
              </button>

              <p className="text-center text-slate-400 text-sm">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
              <p className="text-center text-green-600 text-sm font-semibold">
                Консультация бесплатная
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const [secondsHint] = useState(() => 25 + Math.floor(Math.random() * 15));

  return (
    <section ref={sectionRef} id="quiz" className="py-16 md:py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Рассчитайте стоимость работ
            </h2>
            <p className="text-slate-600 text-lg">
              Ответьте на несколько вопросов — получите точный расчёт без выезда
            </p>
            <div className="flex items-center justify-center gap-6 mt-4 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <Icon name="Clock" size={15} />
                Займёт ~{secondsHint} секунд
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="Users" size={15} />
                {projectCount} расчётов в этом месяце
              </span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="px-6 pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-500">
                  Шаг {step + 1} из {TOTAL_STEPS}
                </span>
                {step < TOTAL_STEPS - 1 && (
                  <span className="text-sm text-blue-600 font-medium">
                    Осталось {TOTAL_STEPS - step - 1} {TOTAL_STEPS - step - 1 === 1 ? 'шаг' : TOTAL_STEPS - step - 1 < 5 ? 'шага' : 'шагов'}
                  </span>
                )}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="p-6 md:p-8">{renderStep()}</div>

            {step > 0 && !submitted && (
              <div className="px-6 pb-6 md:px-8 md:pb-8 border-t border-gray-100 pt-4">
                <button
                  onClick={goBack}
                  className="flex items-center gap-2 text-slate-500 hover:text-slate-700 font-medium transition-colors"
                >
                  <Icon name="ArrowLeft" size={18} />
                  Назад
                </button>
              </div>
            )}
          </div>

          <div className="text-center mt-6 text-sm text-slate-400">
            Точный расчёт без выезда · Ответ в течение 15 минут
          </div>
        </div>
      </div>
    </section>
  );
}
