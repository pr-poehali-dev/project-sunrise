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
  {
    id: 'tiling',
    icon: 'Grid3x3',
    title: 'Плиточные работы (на улице)',
    description: 'Укладка тротуарной плитки, облицовка крыльца и ступеней, отмостка, цоколь и установка бордюров.',
    fullDescription: `Плиточные работы (на улице):

• Укладка тротуарной плитки — мощение дорожек, площадок для авто и зон отдыха.

• Облицовка крыльца и ступеней — отделка входа керамогранитом или клинкерной плиткой с антискользящим покрытием.

• Плитка на отмостку — укладка декоративной плитки поверх бетонного основания вокруг дома.

• Облицовка цоколя — отделка нижней части фасада камнем или плиткой для защиты от влаги и грязи.

• Установка бордюров — монтаж садовых и дорожных бордюров для фиксации края плитки.`,
    images: [
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/83fd62ae-7185-44c3-af9b-ee38843c84f1.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/62acf3de-5bac-481b-8afe-0ca9d47cbfb6.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/47aef649-00f5-4669-9398-3f05b2410ad8.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/3164e795-856f-4d0c-bdc2-13f3b4bb92cd.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/2a4ab811-6551-4d62-a08e-992daf926bac.jpg',
    ],
    examples: [
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/83fd62ae-7185-44c3-af9b-ee38843c84f1.jpg',
        title: 'Укладка тротуарной плитки',
        description: 'Мощение площадки разноцветной плиткой «Старый город»',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/62acf3de-5bac-481b-8afe-0ca9d47cbfb6.jpg',
        title: 'Облицовка крыльца керамогранитом',
        description: 'Отделка входа антискользящим покрытием',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/47aef649-00f5-4669-9398-3f05b2410ad8.jpg',
        title: 'Плитка на отмостку дома',
        description: 'Укладка тротуарной плитки с облицовкой цоколя',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/3164e795-856f-4d0c-bdc2-13f3b4bb92cd.jpg',
        title: 'Облицовка цоколя камнем',
        description: 'Отделка декоративным камнем для защиты от влаги',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/2a4ab811-6551-4d62-a08e-992daf926bac.jpg',
        title: 'Установка бордюров',
        description: 'Монтаж садовых бордюров для фиксации плитки',
      },
    ],
  },
  {
    id: 'general-construction',
    icon: 'Hammer',
    title: 'Общестроительные работы',
    description: 'Возведение стен, штукатурка, стяжка пола, потолки, установка окон и дверей, садовые постройки.',
    fullDescription: `Общестроительные работы:

• Возведение стен — кладка кирпича, газоблока, пеноблока или возведение каркаса.

• Штукатурные работы — выравнивание стен под обои или покраску.

• Стяжка пола — заливка ровного основания под ламинат, линолеум или плитку.

• Потолки — монтаж подвесных конструкций из гипсокартона или панелей.

• Установка окон — монтаж ПВХ-окон, подоконников и отливов.

• Входные и межкомнатные двери — установка коробок, полотен и фурнитуры.

• Хозблоки и сараи — строительство бытовок для хранения инвентаря.

• Беседки — возведение зон отдыха из дерева или металла.

• Навесы — строительство укрытий для автомобиля из поликарбоната или профнастила.`,
    images: [
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/8d05a7cd-cb3c-42c3-ba1f-bc25205dddb7.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/abbe90af-7a84-440c-b2f1-9bc70c6de162.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/66f113bb-ef9c-4e0c-aa15-dd76d3bad72b.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/ab2c1917-1758-4b28-a5d2-6f16326ae7c6.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/a6391b2c-9aac-4133-b923-83c29a23c4f9.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/ea0f2573-ec10-466a-9308-2285e6df9ccb.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/314ec283-b673-4709-9f37-7684617d2e54.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/7aac1736-6b66-496e-8ec6-8315bddc8799.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/9f812bed-dc73-4202-b0ce-07fe78c200d0.jpg',
    ],
    examples: [
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/8d05a7cd-cb3c-42c3-ba1f-bc25205dddb7.jpg',
        title: 'Возведение стен из кирпича',
        description: 'Кладка несущих и перегородочных стен',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/abbe90af-7a84-440c-b2f1-9bc70c6de162.jpg',
        title: 'Штукатурные работы',
        description: 'Выравнивание стен под финишную отделку',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/66f113bb-ef9c-4e0c-aa15-dd76d3bad72b.jpg',
        title: 'Стяжка пола',
        description: 'Заливка ровного основания под напольное покрытие',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/ab2c1917-1758-4b28-a5d2-6f16326ae7c6.jpg',
        title: 'Монтаж подвесного потолка',
        description: 'Установка каркаса из гипсокартона',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/a6391b2c-9aac-4133-b923-83c29a23c4f9.jpg',
        title: 'Установка окон ПВХ',
        description: 'Монтаж окон с подоконниками и откосами',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/ea0f2573-ec10-466a-9308-2285e6df9ccb.jpg',
        title: 'Установка межкомнатной двери',
        description: 'Монтаж филенчатой двери с наличниками',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/314ec283-b673-4709-9f37-7684617d2e54.jpg',
        title: 'Строительство хозблока',
        description: 'Возведение бытовки из дерева с окном',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/7aac1736-6b66-496e-8ec6-8315bddc8799.jpg',
        title: 'Беседка с резными балясинами',
        description: 'Строительство садовой зоны отдыха',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/9f812bed-dc73-4202-b0ce-07fe78c200d0.jpg',
        title: 'Навес для автомобиля',
        description: 'Металлоконструкция с поликарбонатом',
      },
    ],
  },
  {
    id: 'new-construction',
    icon: 'HomeIcon',
    title: 'Строительство с нуля',
    description: 'Частные дома, дачи и бани под ключ. Полный цикл от фундамента до крыши из любых материалов.',
    fullDescription: `Строительство с нуля:

• Частные дома — полный цикл строительства от фундамента до крыши. Капитальные дома для постоянного проживания из любых материалов (кирпич, блок, дерево).

• Дачи — возведение уютных загородных домов для сезонного отдыха. Быстро, качественно и под ваш бюджет.

• Бани — строительство традиционных бань. Правильная парная, монтаж печи и внутренняя отделка деревом.`,
    images: [
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/0817a28c-94b9-4609-8854-6a6e46f96169.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/b6275437-c4e1-4e4e-a50d-b5adabea9111.jpg',
      'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/7c694e48-8af9-4871-a848-c219c3a457ca.jpg',
    ],
    examples: [
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/0817a28c-94b9-4609-8854-6a6e46f96169.jpg',
        title: 'Строительство частного дома',
        description: 'Возведение дома из газоблока с монтажом стропильной системы',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/b6275437-c4e1-4e4e-a50d-b5adabea9111.jpg',
        title: 'Дачный дом из бруса',
        description: 'Строительство двухэтажного дома для сезонного проживания',
      },
      {
        image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/7c694e48-8af9-4871-a848-c219c3a457ca.jpg',
        title: 'Баня с парилкой',
        description: 'Внутренняя отделка деревом и монтаж печи',
      },
    ],
  },
];