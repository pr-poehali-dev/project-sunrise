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
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/e5757956-d0d6-49c1-b69a-c63892b167ee.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/9daa1536-71cd-4b10-b6fa-a12a4ba9e20d.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/9dd2618d-7ebd-437f-b657-c067b484589d.jpg',
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
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/e5757956-d0d6-49c1-b69a-c63892b167ee.jpg',
        title: 'Декоративная штукатурка "Барашек"',
        description: 'Нанесение финишного покрытия на фасад',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/9daa1536-71cd-4b10-b6fa-a12a4ba9e20d.jpg',
        title: 'Облицовка декоративным кирпичом',
        description: 'Отделка фасада клинкерным кирпичом с утеплением',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/9dd2618d-7ebd-437f-b657-c067b484589d.jpg',
        title: 'Ремонт фасада "До и После"',
        description: 'Реставрация кирпичной кладки и финишная штукатурка',
      },
    ],
  },
  {
    id: 'facade',
    icon: 'Paintbrush',
    title: 'Ремонт и восстановление старых домов',
    description: 'Замена венцов, реконструкция полов, усиление перекрытий, пристройка веранд и демонтаж ветхих конструкций.',
    fullDescription: `Ремонт и восстановление старых домов:

• Замена венцов — подъем деревянного дома на домкратах и замена сгнивших нижних брёвен или бруса на новые.

• Реконструкция полов — демонтаж гнилых лаг, выравнивание основания, утепление и укладка нового чистового пола.

• Усиление перекрытий — укрепление балок между этажами или чердаком, чтобы полы не прогибались и не скрипели.

• Пристройка веранд и террас — расширение жилой площади старого дома, монтаж легких пристроек на отдельном фундаменте.

• Демонтажные работы — аккуратный снос ветхих перегородок, печей или пристроек, которые не подлежат восстановлению.`,
    images: [
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/02f4f415-fe84-4417-b6d7-520836b04c37.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/40bd8c7f-f2e0-4946-be20-e042d48f4807.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/f41e9979-089a-4ad4-af0a-296eb58d499b.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/0f797e3c-6714-4dc8-8cc1-75815ff089f6.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/17ec7513-6694-4e35-be13-3697ec2f0fe7.jpg',
    ],
    examples: [
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/02f4f415-fe84-4417-b6d7-520836b04c37.jpg',
        title: 'Замена венцов деревянного дома',
        description: 'Подъем дома на домкратах и замена сгнивших брёвен',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/40bd8c7f-f2e0-4946-be20-e042d48f4807.jpg',
        title: 'Реконструкция деревянного пола',
        description: 'Монтаж новых лаг и утепление основания',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/f41e9979-089a-4ad4-af0a-296eb58d499b.jpg',
        title: 'Усиление перекрытий',
        description: 'Укрепление балок металлическими элементами',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/0f797e3c-6714-4dc8-8cc1-75815ff089f6.jpg',
        title: 'Пристройка веранды к дому',
        description: 'Расширение жилой площади с крыльцом',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/17ec7513-6694-4e35-be13-3697ec2f0fe7.jpg',
        title: 'Демонтаж ветхих конструкций',
        description: 'Снос старой пристройки экскаватором',
      },
    ],
  },
  {
    id: 'drainage',
    icon: 'Droplets',
    title: 'Заборы и ограждения',
    description: 'Установка заборов из профнастила, евроштакетника, дерева и сетки-рабицы. Монтаж ворот и калиток.',
    fullDescription: `Заборы и ограждения:

• Забор из профнастила — установка сплошного ограждения из оцинкованной стали. Оптимально для защиты от шума, пыли и посторонних глаз.

• Забор из евроштакетника — монтаж металлических планок с зазором. Сочетает прочность металла и хорошую продуваемость участка.

• Деревянный забор — классическое ограждение (штакетник, «шахматка», «плетенка») с обязательной антисептической обработкой от гниения.

• Забор из сетки-рабицы — самый бюджетный и быстрый вариант для межевания участков или ограждения дачи.

• Кирпичные и комбинированные столбы — возведение капитальных опор из кирпича или декоративного блока с заливкой фундамента.

• Установка ворот и калиток — монтаж распашных или откатных ворот, врезка замков и установка автоматики.`,
    images: [
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/efee86a8-7124-4b0f-9ff9-9e1f44b2cdc3.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/5ed1f378-b6e9-41bb-8685-c1fab9465c4a.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/ecbe1b1c-0661-4d66-b846-9214953e1859.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/e851af79-5d49-4ce4-988d-11fdfe298fc8.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/015d0978-85ff-4187-b577-33144fe73e06.jpg',
    ],
    examples: [
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/efee86a8-7124-4b0f-9ff9-9e1f44b2cdc3.jpg',
        title: 'Забор из профнастила',
        description: 'Сплошное ограждение коричневого цвета на металлических столбах',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/5ed1f378-b6e9-41bb-8685-c1fab9465c4a.jpg',
        title: 'Деревянный забор-штакетник',
        description: 'Классическое ограждение с антисептической обработкой',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/ecbe1b1c-0661-4d66-b846-9214953e1859.jpg',
        title: 'Забор из сетки-рабицы',
        description: 'Бюджетное ограждение на металлических столбах',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/e851af79-5d49-4ce4-988d-11fdfe298fc8.jpg',
        title: 'Кирпичные столбы для забора',
        description: 'Возведение капитальных опор под ограждение',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/015d0978-85ff-4187-b577-33144fe73e06.jpg',
        title: 'Распашные ворота с калиткой',
        description: 'Монтаж ворот из профнастила с врезкой замка',
      },
    ],
  },
];