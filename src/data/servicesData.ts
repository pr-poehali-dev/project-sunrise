export interface ServiceData {
  id: string;
  icon: string;
  title: string;
  description: string;
  fullDescription: string;
  images: string[];
  examples: {
    image: string;
    title: string;
    description: string;
  }[];
}

export const servicesData: ServiceData[] = [
  {
    id: 'roof-installation',
    icon: 'Home',
    title: 'Монтаж кровли',
    description: 'Устройство кровли под ключ: металлочерепица, профнастил, мягкая кровля, шифер. Частные дома, коммерческие здания, хозяйственные постройки.',
    fullDescription: 'Профессиональный монтаж кровли любой сложности. Работаем с металлочерепицей, профнастилом, мягкой кровлей, шифером. Выполняем работы на частных домах, коммерческих зданиях и хозяйственных постройках. Гарантия качества и соблюдение технологий.',
    images: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200',
      'https://images.unsplash.com/photo-1590073844006-33379778ae09?w=1200',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200',
    ],
    examples: [
      {
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800',
        title: 'Монтаж металлочерепицы',
        description: 'Частный дом, площадь 180 м²',
      },
      {
        image: 'https://images.unsplash.com/photo-1590073844006-33379778ae09?w=800',
        title: 'Кровля из профнастила',
        description: 'Коммерческое здание, площадь 450 м²',
      },
      {
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800',
        title: 'Мягкая кровля',
        description: 'Загородный дом, площадь 220 м²',
      },
    ],
  },
  {
    id: 'roof-repair',
    icon: 'Wrench',
    title: 'Ремонт кровли',
    description: 'Устраняем протечки, заменяем повреждённые элементы, выполняем капитальный и частичный ремонт крыш любой сложности.',
    fullDescription: 'Быстрое устранение протечек и повреждений кровли. Проводим диагностику, заменяем повреждённые элементы, выполняем капитальный и частичный ремонт крыш любой сложности. Работаем со всеми типами кровельных материалов.',
    images: [
      'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200',
    ],
    examples: [
      {
        image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800',
        title: 'Устранение протечки',
        description: 'Замена повреждённых листов металлочерепицы',
      },
      {
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
        title: 'Капитальный ремонт кровли',
        description: 'Полная замена кровельного покрытия',
      },
    ],
  },
  {
    id: 'construction',
    icon: 'Building2',
    title: 'Общестроительные работы',
    description: 'Фундаменты, стены, перекрытия, пристройки, реконструкция зданий. Строительство с нуля и по проекту заказчика.',
    fullDescription: 'Полный спектр общестроительных работ: от заливки фундамента до возведения стен и перекрытий. Выполняем пристройки, реконструкцию зданий, строительство с нуля по проектам заказчика. Опытные бригады и качественные материалы.',
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
    ],
    examples: [
      {
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
        title: 'Строительство дома с нуля',
        description: 'Частный дом 120 м², срок 6 месяцев',
      },
      {
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
        title: 'Пристройка к зданию',
        description: 'Жилая пристройка 40 м²',
      },
    ],
  },
  {
    id: 'insulation',
    icon: 'Snowflake',
    title: 'Утепление домов и крыш',
    description: 'Утепление фасадов, кровли, чердаков и перекрытий. Снижение теплопотерь и расходов на отопление.',
    fullDescription: 'Профессиональное утепление фасадов, кровли, чердаков и перекрытий. Используем современные теплоизоляционные материалы. Снижаем теплопотери до 40% и экономим ваши расходы на отопление.',
    images: [
      'https://images.unsplash.com/photo-1590073844006-33379778ae09?w=1200',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200',
    ],
    examples: [
      {
        image: 'https://images.unsplash.com/photo-1590073844006-33379778ae09?w=800',
        title: 'Утепление фасада',
        description: 'Частный дом, площадь 150 м²',
      },
      {
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800',
        title: 'Утепление кровли',
        description: 'Снижение теплопотерь на 35%',
      },
    ],
  },
  {
    id: 'facade',
    icon: 'Paintbrush',
    title: 'Фасадные и отделочные работы',
    description: 'Облицовка фасадов, декоративные элементы, подшивка свесов, внутренние и внешние отделочные работы.',
    fullDescription: 'Комплексные фасадные и отделочные работы: облицовка фасадов, монтаж декоративных элементов, подшивка свесов кровли. Выполняем внутренние и внешние отделочные работы любой сложности.',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200',
    ],
    examples: [
      {
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
        title: 'Облицовка фасада',
        description: 'Керамогранит, площадь 200 м²',
      },
      {
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
        title: 'Отделка фасада сайдингом',
        description: 'Частный дом, площадь 180 м²',
      },
    ],
  },
  {
    id: 'drainage',
    icon: 'Droplets',
    title: 'Водосточные системы',
    description: 'Монтаж и замена водосточных систем для защиты здания от влаги и разрушений.',
    fullDescription: 'Монтаж и замена водосточных систем любой сложности. Защищаем здание от влаги, предотвращаем разрушение фундамента и фасада. Используем качественные материалы с длительным сроком службы.',
    images: [
      'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=1200',
      'https://images.unsplash.com/photo-1590073844006-33379778ae09?w=1200',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200',
    ],
    examples: [
      {
        image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800',
        title: 'Монтаж водостока',
        description: 'Пластиковая система, длина 45 м',
      },
      {
        image: 'https://images.unsplash.com/photo-1590073844006-33379778ae09?w=800',
        title: 'Замена водосточной системы',
        description: 'Металлическая система, длина 60 м',
      },
    ],
  },
];
