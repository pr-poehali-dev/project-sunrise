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
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/f7a794a0-1d51-40c4-917f-f328fad669a8.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/f95657ca-103f-4046-af00-f56a62f008ab.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/311dd3b8-e94d-4bb0-84a7-4a6002661e95.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/6989f423-0688-46aa-8253-69074657ebb2.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/2b39def4-0004-42cb-9aa3-6ac7424be75c.jpg',
    ],
    examples: [
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/f7a794a0-1d51-40c4-917f-f328fad669a8.jpg',
        title: 'Строительство кровли каркасного дома',
        description: 'Монтаж стропильной системы, этапы строительства',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/f95657ca-103f-4046-af00-f56a62f008ab.jpg',
        title: 'Монтаж деревянных стропил',
        description: 'Установка стропильной конструкции крыши',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/311dd3b8-e94d-4bb0-84a7-4a6002661e95.jpg',
        title: 'Металлочерепица на жилом доме',
        description: 'Полная кровля с водосточной системой',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/6989f423-0688-46aa-8253-69074657ebb2.jpg',
        title: 'Профнастил на деревянной баане',
        description: 'Монтаж металлического покрытия',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/2b39def4-0004-42cb-9aa3-6ac7424be75c.jpg',
        title: 'Монтаж крыши деревянной бани',
        description: 'Установка стропил и обрешетки',
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
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/311dd3b8-e94d-4bb0-84a7-4a6002661e95.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/f7a794a0-1d51-40c4-917f-f328fad669a8.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/2b39def4-0004-42cb-9aa3-6ac7424be75c.jpg',
    ],
    examples: [
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/311dd3b8-e94d-4bb0-84a7-4a6002661e95.jpg',
        title: 'Ремонт металлочерепицы',
        description: 'Замена поврежденных листов и водостока',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/f7a794a0-1d51-40c4-917f-f328fad669a8.jpg',
        title: 'Ремонт стропильной системы',
        description: 'Восстановление несущей конструкции',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/2b39def4-0004-42cb-9aa3-6ac7424be75c.jpg',
        title: 'Капитальный ремонт крыши',
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
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/d07b1fdf-aacf-486a-b111-07f562bd613a.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/f04677d4-d715-4860-9601-22e4cc40f54f.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/da60ea55-5e54-43f4-8611-99bf929a0863.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/45c60827-3114-4ffb-b4a2-b310644eabe7.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/f000b3cb-8f9b-4948-b069-2cdfd3f1c563.jpg',
    ],
    examples: [
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/d07b1fdf-aacf-486a-b111-07f562bd613a.jpg',
        title: 'Армирование монолитной плиты',
        description: 'Подготовка к заливке фундамента перекрытия',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/f04677d4-d715-4860-9601-22e4cc40f54f.jpg',
        title: 'Монолитная плита перекрытия',
        description: 'Заливка бетонного перекрытия жилого дома',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/da60ea55-5e54-43f4-8611-99bf929a0863.jpg',
        title: 'Плитный фундамент',
        description: 'Заливка монолитной плиты с армированием',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/45c60827-3114-4ffb-b4a2-b310644eabe7.jpg',
        title: 'Опалубка и заливка',
        description: 'Монтаж опалубки под фундамент',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/f000b3cb-8f9b-4948-b069-2cdfd3f1c563.jpg',
        title: 'Ленточный фундамент',
        description: 'Армирование и заливка ленточного фундамента',
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
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/28c9adc5-e0c3-4ac1-aa3d-01a983fbc5dc.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/01b5120f-912f-4d39-93b1-d8e14d8793fd.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/0593b348-d217-461e-98bb-55a463b2e696.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/002e9b56-c5c6-44a3-9f48-224d8d08aa45.jpg',
    ],
    examples: [
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/28c9adc5-e0c3-4ac1-aa3d-01a983fbc5dc.jpg',
        title: 'Утепление чердака эковатой',
        description: 'Напыление эковаты на перекрытие чердака',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/01b5120f-912f-4d39-93b1-d8e14d8793fd.jpg',
        title: 'Монтаж каркаса под утепление',
        description: 'Подготовка стропильной системы для утепления крыши',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/0593b348-d217-461e-98bb-55a463b2e696.jpg',
        title: 'Утепление фасада пенопластом',
        description: 'Монтаж утеплителя на фасад здания под штукатурку',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/002e9b56-c5c6-44a3-9f48-224d8d08aa45.jpg',
        title: 'Утепление фасада жилого дома',
        description: 'Комплексное утепление стен с установкой крепежа',
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
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/83dc837d-bcd6-4f9e-908b-f012cf5e612d.jpg',
    ],
    examples: [
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/83dc837d-bcd6-4f9e-908b-f012cf5e612d.jpg',
        title: 'Монтаж водостока на плоской кровле',
        description: 'Установка системы водоотвода с защитой от протечек',
      },
    ],
  },
];