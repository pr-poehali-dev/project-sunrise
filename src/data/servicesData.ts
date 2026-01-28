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
    title: 'Кровельные работы',
    description: 'Монтаж, ремонт и утепление кровли. Установка стропильной системы, укладка покрытия, устранение протечек, монтаж теплоизоляции.',
    fullDescription: `Кровельные работы любой сложности:

• Монтаж кровли — установка стропильной системы и укладка покрытия (металлочерепица, мягкая кровля, профнастил).

• Ремонт крыши — устранение протечек, замена поврежденных листов и восстановление герметичности.

• Утепление кровли — монтаж теплоизоляции и пароизоляции для защиты дома от холода и конденсата.

• Обслуживание и подшив — отделка карнизов (софиты), установка снегозадержателей и чистка кровли.`,
    images: [
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/2e4e950c-6c3e-4fb2-99fd-77cdffc8a337.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/ce72b274-2fa3-4380-94cb-2dc26a02102e.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/a59a04d0-77fc-40bc-a2d2-1660e9b05763.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/7cff307e-5935-436d-84b1-2216efe922a9.jpg',
    ],
    examples: [
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/2e4e950c-6c3e-4fb2-99fd-77cdffc8a337.jpg',
        title: 'Монтаж металлочерепицы',
        description: 'Установка кровельного покрытия с пароизоляцией',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/ce72b274-2fa3-4380-94cb-2dc26a02102e.jpg',
        title: 'Ремонт кровли',
        description: 'Замена поврежденных листов профнастила',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/a59a04d0-77fc-40bc-a2d2-1660e9b05763.jpg',
        title: 'Утепление кровли',
        description: 'Монтаж теплоизоляции между стропилами',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/7cff307e-5935-436d-84b1-2216efe922a9.jpg',
        title: 'Подшив карнизов',
        description: 'Установка софитов и отделка свесов',
      },
    ],
  },
  {
    id: 'roof-repair',
    icon: 'Wrench',
    title: 'Фундаментные работы',
    description: 'Фундаментные работы для частных домов и дач. Заливка, ремонт, гидроизоляция и отмостка.',
    fullDescription: `Фундаментные работы для частных домов и дач:

• Заливка фундамента — устройство бетонного основания (ленточный, плита, сваи) под ключ.

• Ремонт и усиление — устранение трещин, укрепление старого фундамента и замена венцов.

• Гидроизоляция и дренаж — защита основания от грунтовых вод, сырости и разрушения.

• Земляные работы — рытье траншей, котлованов и устройство песчано-гравийной подушки.

• Монтаж отмостки — создание бетонной или мягкой дорожки вокруг дома для отвода осадков.`,
    images: [
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/5b98d7be-6221-4524-a318-3746563bace0.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/56bffd0f-6cee-4a30-a462-8e2282c7f4b5.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/7e86f9da-30de-4065-a3c7-db29b5e8fe5d.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/3c56ed71-1d79-45c8-8cda-b078160b5a75.jpg',
    ],
    examples: [
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/5b98d7be-6221-4524-a318-3746563bace0.jpg',
        title: 'Заливка ленточного фундамента',
        description: 'Устройство опалубки и заливка бетоном',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/56bffd0f-6cee-4a30-a462-8e2282c7f4b5.jpg',
        title: 'Ремонт и замена венцов',
        description: 'Укрепление фундамента деревянного дома',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/7e86f9da-30de-4065-a3c7-db29b5e8fe5d.jpg',
        title: 'Гидроизоляция фундамента',
        description: 'Нанесение защитного покрытия от влаги',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/3c56ed71-1d79-45c8-8cda-b078160b5a75.jpg',
        title: 'Монтаж бетонной отмостки',
        description: 'Устройство водоотвода вокруг дома',
      },
    ],
  },
  {
    id: 'construction',
    icon: 'Building2',
    title: 'Кровельные работы (шифер)',
    description: 'Монтаж, замена и покраска шифера. Надежный и бюджетный вариант для частных домов и хозпостроек.',
    fullDescription: `Кровельные работы (шифер):

• Монтаж шифера — укладка классических асбестоцементных листов на готовую обрешетку. Надежный и бюджетный вариант для частных домов и хозпостроек.

• Замена старого шифера — демонтаж треснувших листов и установка нового покрытия без полной разборки крыши.

• Герметизация и покраска — заделка отверстий в местах креплений и окрашивание шифера специальными составами для защиты от мха и влаги.`,
    images: [
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/c4bc55db-ce35-4df1-851f-4ce2f5dc9353.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/4259116c-1d14-4489-9d01-f897c76a4116.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/1928626c-0e8d-4e91-8fc8-2a746427a425.jpg',
    ],
    examples: [
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/c4bc55db-ce35-4df1-851f-4ce2f5dc9353.jpg',
        title: 'Монтаж шифера на обрешетку',
        description: 'Укладка асбестоцементных листов на навес',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/4259116c-1d14-4489-9d01-f897c76a4116.jpg',
        title: 'Замена старого шифера',
        description: 'Демонтаж поврежденных листов и установка новых',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/1928626c-0e8d-4e91-8fc8-2a746427a425.jpg',
        title: 'Покраска шифера',
        description: 'Нанесение защитного покрытия от мха и влаги',
      },
    ],
  },
  {
    id: 'insulation',
    icon: 'Snowflake',
    title: 'Фасадные работы',
    description: 'Облицовка сайдингом, утепление, штукатурка, покраска и ремонт фасадов. Защита и обновление внешнего вида дома.',
    fullDescription: `Фасадные работы:

• Облицовка сайдингом — обшивка стен виниловыми или металлическими панелями. Быстрый способ обновить вид дома и защитить стены от осадков.

• Утепление фасада — монтаж минваты или пенополистирола («мокрый фасад» под штукатурку или под обшивку), чтобы снизить расходы на отопление.

• Декоративная штукатурка — нанесение финишных покрытий («короед», «барашек»). Придает дому эстетичный вид и скрывает неровности стен.

• Облицовка кирпичом и камнем — отделка фасада декоративным кирпичом, натуральным или искусственным камнем для максимальной долговечности.

• Покраска фасада — обновление цвета и защита стен специальными фасадными красками, устойчивыми к выгоранию и влаге.

• Ремонт фасада — заделка трещин, восстановление отслаивающихся участков и реставрация старой отделки.`,
    images: [
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/a0670eee-ac7e-4854-8252-6a786ac029be.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/7d0d6bf9-6235-4db0-af52-ea0b224c4eb2.jpg',
    ],
    examples: [
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/a0670eee-ac7e-4854-8252-6a786ac029be.jpg',
        title: 'Облицовка сайдингом',
        description: 'Обшивка фасада виниловыми панелями с утеплением',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/7d0d6bf9-6235-4db0-af52-ea0b224c4eb2.jpg',
        title: 'Утепление фасада минватой',
        description: 'Монтаж теплоизоляции под финишную отделку',
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