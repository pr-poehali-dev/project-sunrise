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
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/a8dfca04-8351-4273-a5e3-479b5f2e98a9.jpg',
    ],
    examples: [
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/a8dfca04-8351-4273-a5e3-479b5f2e98a9.jpg',
        title: 'Заливка фундамента частного дома',
        description: 'Армирование и заливка монолитного фундамента',
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
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/a8dfca04-8351-4273-a5e3-479b5f2e98a9.jpg',
    ],
    examples: [
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/a8dfca04-8351-4273-a5e3-479b5f2e98a9.jpg',
        title: 'Бетонные работы',
        description: 'Заливка бетона под строительство',
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
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/a8dfca04-8351-4273-a5e3-479b5f2e98a9.jpg',
    ],
    examples: [
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/a8dfca04-8351-4273-a5e3-479b5f2e98a9.jpg',
        title: 'Строительство с нуля',
        description: 'Фундамент и подготовка площадки',
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
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/a8dfca04-8351-4273-a5e3-479b5f2e98a9.jpg',
    ],
    examples: [
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/a8dfca04-8351-4273-a5e3-479b5f2e98a9.jpg',
        title: 'Бетонные работы',
        description: 'Площадка под жилой дом',
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
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/ea8c310e-3eff-46e9-82b1-d687b95d5f7a.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/2f7e3d98-b561-47b5-8426-a2f326ccbc89.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/f758f81b-4557-4b99-8a4e-e2e82a418bf4.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/ba910fd6-edf0-4a03-bf6c-31351bda9568.jpg',
    ],
    examples: [
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/ea8c310e-3eff-46e9-82b1-d687b95d5f7a.jpg',
        title: 'Монтаж металлического забора',
        description: 'Ограждение участка, современный дизайн',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/2f7e3d98-b561-47b5-8426-a2f326ccbc89.jpg',
        title: 'Забор жалюзи',
        description: 'Установка металлического забора-жалюзи',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/f758f81b-4557-4b99-8a4e-e2e82a418bf4.jpg',
        title: 'Кухня под ключ',
        description: 'Современная кухня с встроенной техникой',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/ba910fd6-edf0-4a03-bf6c-31351bda9568.jpg',
        title: 'Укладка плитки',
        description: 'Керамогранит под дерево',
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
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/a8dfca04-8351-4273-a5e3-479b5f2e98a9.jpg',
    ],
    examples: [
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/a8dfca04-8351-4273-a5e3-479b5f2e98a9.jpg',
        title: 'Дренажные работы',
        description: 'Система отвода воды',
      },
    ],
  },
];
