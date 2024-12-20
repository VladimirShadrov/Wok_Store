type ProductType = {
  id: number;
  title: string;
  weight: number;
  price: number;
  imgSmall: string;
  imgBig: string;
  ingridients: string[];
  nutritionalValue: { [key: string]: string | number }[];
  description: string;
  category: string;
  count: number;
  ratio: number;
};

const products: ProductType[] = [
  {
    id: 1,
    title: 'Тяхан с овощами',
    weight: 300,
    price: 279,
    imgSmall: 'images/products/1-300.jpg',
    imgBig: 'images/products/1-1300.jpg',
    ingridients: ['Масло растительное', 'Морковь', 'Лук репчатый', 'Перец болгарский', 'Рис', 'Соус "Чесночный"', 'Кунжут'],
    nutritionalValue: [
      {
        text: 'Энерг. ценность',
        value: 135,
      },
      {
        text: 'Белки',
        value: 3.5,
      },
      {
        text: 'Жиры',
        value: 5.5,
      },
      {
        text: 'Углеводы',
        value: 16,
      },
    ],
    description:
      'Для тех, кто ориентирован на диетическое питание, нашими поварами специально разработано особое блюдо – тяхан с овощами. В его составе можно найти рассыпчатый и нежный рис, болгарский перец, помидоры и иные овощи, обильно сдобренные чесночным соусом. Чтобы максимально сохранить вкусовые показатели каждого ингредиента, они обжариваются на глубокой сковороде вок всего за пару минут.',
    category: 'Тяханы',
    count: 1,
    ratio: 1,
  },
  {
    id: 2,
    title: 'Тяхан с курицей',
    weight: 300,
    price: 339,
    imgSmall: 'images/products/2-300.jpg',
    imgBig: 'images/products/2-1300.jpg',
    ingridients: ['Масло растительное', 'Грудка куриная', 'Морковь', 'Лук репчатый', 'Перец болгарский', 'Рис', 'Соус "Чесночный"', 'Кунжут'],
    nutritionalValue: [
      {
        text: 'Энерг. ценность',
        value: 140,
      },
      {
        text: 'Белки',
        value: 6.5,
      },
      {
        text: 'Жиры',
        value: 4.5,
      },
      {
        text: 'Углеводы',
        value: 17,
      },
    ],
    description:
      'В составе тяхана с курицей собраны только самые полезные ингредиенты, которые способны подарить к тому же настоящее гастрономическое удовольствие. Витамины, макро- и микроэлементы – все сохраняется в овощах, ведь для их обжарки используется специальный метод на сковороде вок. В качестве заправки блюда применяется соус «Чесночный», который обладает достаточно острым вкусом.',
    category: 'Тяханы',
    count: 1,
    ratio: 5,
  },
  {
    id: 3,
    title: 'Соба с овощами',
    weight: 320,
    price: 359,
    imgSmall: 'images/products/3-300.jpg',
    imgBig: 'images/products/3-1300.jpg',
    ingridients: ['Масло растительное', 'Морковь', 'Лук репчатый', 'Перец болгарский', 'Кабачки', 'Лапша гречневая', 'Соус "Чесночный"', 'Кунжут'],
    nutritionalValue: [
      {
        text: 'Энерг. ценность',
        value: 160,
      },
      {
        text: 'Белки',
        value: 4.5,
      },
      {
        text: 'Жиры',
        value: 6.5,
      },
      {
        text: 'Углеводы',
        value: 19,
      },
    ],
    description:
      'Тонковыраженный вкус гречневой лапши и обжаренные на сковороде вок овощи выступают в качестве основы соба с овощами. В этом блюде можно найти только самые полезные дары природы – кабачки, репчатый лук, болгарский перец, помидоры и морковь. Характерный привкус соба придает оригинальное сочетание свежего чеснока и соевого соуса.',
    category: 'Гречневая',
    count: 1,
    ratio: 2,
  },
  {
    id: 4,
    title: 'Удон с овощами',
    weight: 320,
    price: 359,
    imgSmall: 'images/products/4-300.jpg',
    imgBig: 'images/products/4-1300.jpg',
    ingridients: ['Масло растительное', 'Морковь', 'Лук репчатый', 'Перец болгарский', 'Кабачки', 'Лапша пшеничная', 'Соус "Чесночный"', 'Кунжут'],
    nutritionalValue: [
      {
        text: 'Энерг. ценность',
        value: 150,
      },
      {
        text: 'Белки',
        value: 3.5,
      },
      {
        text: 'Жиры',
        value: 6.5,
      },
      {
        text: 'Углеводы',
        value: 19,
      },
    ],
    description:
      'Для поклоннинков вегетаринской кухни наши повара готовят специальное блюдо – удон с овощами. В нем пшеничная лапша идеальным образом сочетается с болгарским перцем, морковью и иными овощами, приготовленными на сковороде вок. Чтобы придать лапше вок остроту и даже некоторую жгучесть, в нее добавляется свежий чеснок в обрамлении соевого соуса.',
    category: 'Пшеничная',
    count: 1,
    ratio: 4,
  },
  {
    id: 5,
    title: 'Сомен с овощами',
    weight: 320,
    price: 359,
    imgSmall: 'images/products/5-300.jpg',
    imgBig: 'images/products/5-1300.jpg',
    ingridients: ['Масло растительное', 'Морковь', 'Лук репчатый', 'Перец болгарский', 'Кабачки', 'Лапша яичная', 'Соус "Чесночный"', 'Кунжут'],
    nutritionalValue: [
      {
        text: 'Энерг. ценность',
        value: 150,
      },
      {
        text: 'Белки',
        value: 3.5,
      },
      {
        text: 'Жиры',
        value: 6.5,
      },
      {
        text: 'Углеводы',
        value: 19,
      },
    ],
    description:
      'Насладиться истинным вкусом овощей можно, если заказать сомен с овощами в нашей компании. Наши повара соединили самые вкусные овощи, обжаренные в горячем растительном масле на сковороде вок, с ароматной яичной лапшой. Нужная степень остроты в блюде достигается с помощью свежего чеснока и качественного соевого соуса.',
    category: 'Яичная',
    count: 1,
    ratio: 1,
  },
  {
    id: 6,
    title: 'Тяхан со свининой',
    weight: 300,
    price: 359,
    imgSmall: 'images/products/6-300.jpg',
    imgBig: 'images/products/6-1300.jpg',
    ingridients: ['Масло растительное', 'Свинина', 'Морковь', 'Лук репчатый', 'Перец болгарский', 'Рис', 'Соус "Чесночный"', 'Кунжут'],
    nutritionalValue: [
      {
        text: 'Энерг. ценность',
        value: 210,
      },
      {
        text: 'Белки',
        value: 5.5,
      },
      {
        text: 'Жиры',
        value: 14,
      },
      {
        text: 'Углеводы',
        value: 16,
      },
    ],
    description:
      'Поклонники сытной и ароматной пищи наверняка по достоинству оценят вкусовые качества очередного творения наших мастеров кулинарии – тяхана со свининой. Обжаренные всего за несколько минут до хрустящей корочки овощи и мясо великолепно сочетаются с рассыпчатым рисом, сливаясь в единое целое. Блюду свойственен достаточно острый вкус, ведь в его составе имеется чесночный соус.',
    category: 'Тяхяны',
    count: 1,
    ratio: 2,
  },
  {
    id: 7,
    title: 'Фунчоза с овощами',
    weight: 320,
    price: 359,
    imgSmall: 'images/products/7-300.jpg',
    imgBig: 'images/products/7-1300.jpg',
    ingridients: ['Масло растительное', 'Морковь', 'Лук репчатый', 'Перец болгарский', 'Кабачки', 'Соус "Чесночный"', 'Лапша стеклянная', 'Кунжут'],
    nutritionalValue: [
      {
        text: 'Энерг. ценность',
        value: 165,
      },
      {
        text: 'Белки',
        value: 4,
      },
      {
        text: 'Жиры',
        value: 6,
      },
      {
        text: 'Углеводы',
        value: 19,
      },
    ],
    description:
      'Поклонники сытной и ароматной пищи наверняка по достоинству оценят вкусовые качества очередного творения наших мастеров кулинарии – Фунчозы с овощами. ',
    category: 'Фунчозы',
    count: 1,
    ratio: 4,
  },
  {
    id: 8,
    title: 'Тяхан с говядиной',
    weight: 300,
    price: 369,
    imgSmall: 'images/products/8-300.jpg',
    imgBig: 'images/products/8-1300.jpg',
    ingridients: ['Масло растительное', 'Говящина', 'Морковь', 'Лук репчатый', 'Перец болгарский', 'Рис', 'Соус "Чесночный"', 'Кунжут'],
    nutritionalValue: [
      {
        text: 'Энерг. ценность',
        value: 140,
      },
      {
        text: 'Белки',
        value: 6,
      },
      {
        text: 'Жиры',
        value: 5.5,
      },
      {
        text: 'Углеводы',
        value: 16,
      },
    ],
    description:
      'Характерной чертой тяхана с говядиной является его достаточно низкая калорийность. Ведь говядина считается ценным диетическим продуктом, а входящие в состав блюда овощи питают организм энергией, не нагружая его лишними калориями. Для максимального сохранения полезных свойств и придания блюду особого привкуса все ингредиенты очень быстро обжариваются на сковороде вок в растительном масле.',
    category: 'Тяханы',
    count: 1,
    ratio: 5,
  },
  {
    id: 9,
    title: 'Соба с курицей',
    weight: 320,
    price: 419,
    imgSmall: 'images/products/9-300.jpg',
    imgBig: 'images/products/9-1300.jpg',
    ingridients: [
      'Масло растительное',
      'Грудка куриная',
      'Морковь',
      'Лук репчатый',
      'Перец болгарский',
      'Кабачки',
      'Соус "Чесночный"',
      'Лапша гречневая',
    ],
    nutritionalValue: [
      {
        text: 'Энерг. ценность',
        value: 160,
      },
      {
        text: 'Белки',
        value: 8.5,
      },
      {
        text: 'Жиры',
        value: 5.5,
      },
      {
        text: 'Углеводы',
        value: 18,
      },
    ],
    description:
      'Соба с курицей – это отличный вариант для тех, кто хочет познакомиться с особенностями японской кухни и максимально зарядить свой организм энергией. Гречневая лапша обладает характерным привкусом и темноватым оттенком, что придает блюду особую пикантность. Нежное филе куриной грудки буквально тает во рту, а его вкус оттеняется обжаренными на растительном масле в сковороде вок разнообразными овощами. Специфический вкус блюду придают такие специи, как свежий чеснок и соевый соус.',
    category: 'Гречневая',
    count: 1,
    ratio: 1,
  },
  {
    id: 10,
    title: 'Соба со свининой',
    weight: 320,
    price: 419,
    imgSmall: 'images/products/10-300.jpg',
    imgBig: 'images/products/10-1300.jpg',
    ingridients: ['Масло растительное', 'Свинина', 'Морковь', 'Лук репчатый', 'Перец болгарский', 'Кабачки', 'Соус "Чесночный"', 'Лапша гречневая'],
    nutritionalValue: [
      {
        text: 'Энерг. ценность',
        value: 220,
      },
      {
        text: 'Белки',
        value: 6.5,
      },
      {
        text: 'Жиры',
        value: 14,
      },
      {
        text: 'Углеводы',
        value: 17,
      },
    ],
    description:
      'Сытное, калорийное и потрясающе вкусное блюдо – вот визитная карточка соба со свининой. Среди гречневой лапши уютно расположились множество овощей, которые готовятся особым способом на сковороде вок. Всего за несколько минут репчатый лук, помидоры, кабачки и иные овощи покрываются ароматной корочкой, сохраняя все витамины и минералы.',
    category: 'Гречневая',
    count: 1,
    ratio: 2,
  },
  {
    id: 11,
    title: 'Удон с курицей',
    weight: 320,
    price: 419,
    imgSmall: 'images/products/11-300.jpg',
    imgBig: 'images/products/11-1300.jpg',
    ingridients: [
      'Масло растительное',
      'Грудка куриная',
      'Морковь',
      'Лук репчатый',
      'Перец болгарский',
      'Кабачки',
      'Соус "Чесночный"',
      'Лапша пшеничная',
    ],
    nutritionalValue: [
      {
        text: 'Энерг. ценность',
        value: 160,
      },
      {
        text: 'Белки',
        value: 7.5,
      },
      {
        text: 'Жиры',
        value: 5.5,
      },
      {
        text: 'Углеводы',
        value: 18,
      },
    ],
    description:
      'Для приготовления «Удон с курицей» используется пшеничная лапша, которая известна своими питательными свойствами. Насыщенный вкус блюду придает нежнейшие филе куриной грудки, которое нарезается тонкими полосками. Подчеркнуть всю глубину вкуса лапши вок помогают различные овощи, среди которых кабачок, помидоры, болгарский перец и др. Острота в блюде достигается за счет соевого соуса и свежего чеснока.',
    category: 'Пшеничная',
    count: 1,
    ratio: 1,
  },
  {
    id: 12,
    title: 'Удон со свининой',
    weight: 320,
    price: 419,
    imgSmall: 'images/products/12-300.jpg',
    imgBig: 'images/products/12-1300.jpg',
    ingridients: ['Масло растительное', 'Свинина', 'Морковь', 'Лук репчатый', 'Перец болгарский', 'Кабачки', 'Соус "Чесночный"', 'Лапша пшеничная'],
    nutritionalValue: [
      {
        text: 'Энерг. ценность',
        value: 220,
      },
      {
        text: 'Белки',
        value: 5.5,
      },
      {
        text: 'Жиры',
        value: 14,
      },
      {
        text: 'Углеводы',
        value: 17,
      },
    ],
    description:
      'Для приготовления лапши вок «Удон со свининой» требуется не только тщательно подобрать продукты, но и приготовить их особым образом на сковороде вок. Для этого сначала подготавливается пшеничная лапша, а остальные ингредиенты очень быстро обжариваются на сковороде вок в растительном масле. Это позволяет максимально сохранить настоящий вкус всех продуктов и их полезные вещества.',
    category: 'Пшеничная',
    count: 1,
    ratio: 3,
  },
  {
    id: 13,
    title: 'Сомен с курицей',
    weight: 320,
    price: 419,
    imgSmall: 'images/products/13-300.jpg',
    imgBig: 'images/products/13-1300.jpg',
    ingridients: [
      'Масло растительное',
      'Грудка куриная',
      'Морковь',
      'Лук репчатый',
      'Перец болгарский',
      'Кабачки',
      'Соус "Чесночный"',
      'Лапша яичная',
    ],
    nutritionalValue: [
      {
        text: 'Энерг. ценность',
        value: 160,
      },
      {
        text: 'Белки',
        value: 7.5,
      },
      {
        text: 'Жиры',
        value: 5.5,
      },
      {
        text: 'Углеводы',
        value: 18,
      },
    ],
    description:
      '«Сомен с курицей» представляет собой идеальный вариант для плотного обеда либо ужина, ведь благодаря наличию в нем множества ингредиентов это блюдо не только способно подарит ощущение сытости, но и наполнить организм питательными веществами. Изготавливается оно с использованием яичной лапши, которая дополняется ароматной куриной грудкой и различными овощами. Для придания аромату блюда особой пикантности в него добавлены соевый соус и чеснок.',
    category: 'Яичная',
    count: 1,
    ratio: 5,
  },
  {
    id: 14,
    title: 'Сомен со свининой',
    weight: 320,
    price: 419,
    imgSmall: 'images/products/14-300.jpg',
    imgBig: 'images/products/14-1300.jpg',
    ingridients: ['Масло растительное', 'Свинина', 'Морковь', 'Лук репчатый', 'Перец болгарский', 'Кабачки', 'Соус "Чесночный"', 'Лапша яичная'],
    nutritionalValue: [
      {
        text: 'Энерг. ценность',
        value: 220,
      },
      {
        text: 'Белки',
        value: 6,
      },
      {
        text: 'Жиры',
        value: 14,
      },
      {
        text: 'Углеводы',
        value: 17,
      },
    ],
    description:
      'Основой блюда «Сомен со свининой» является невероятно вкусная яичная лапша, которая отлично сочетается с тонкими ломтиками свинины и нарезанными на полоски овощами. Особенностью этого блюда считается высокоскоростная обжарка всех ингредиентов на специальной сковороде вок, что обеспечивает сохранность всех питательных веществ в каждом из продуктов.',
    category: 'Яичная',
    count: 1,
    ratio: 5,
  },
  {
    id: 15,
    title: 'Фунчоза со свининой',
    weight: 320,
    price: 419,
    imgSmall: 'images/products/15-300.jpg',
    imgBig: 'images/products/15-1300.jpg',
    ingridients: ['Масло растительное', 'Свинина', 'Морковь', 'Лук репчатый', 'Перец болгарский', 'Кабачки', 'Соус "Чесночный"', 'Лапша стеклянная'],
    nutritionalValue: [
      {
        text: 'Энерг. ценность',
        value: 210,
      },
      {
        text: 'Белки',
        value: 5.5,
      },
      {
        text: 'Жиры',
        value: 15,
      },
      {
        text: 'Углеводы',
        value: 17,
      },
    ],
    description:
      'Поклонники сытной и ароматной пищи наверняка по достоинству оценят вкусовые качества очередного творения наших мастеров кулинарии – Фунчозы со свининой.',
    category: 'Фунчозы',
    count: 1,
    ratio: 4,
  },
  {
    id: 16,
    title: 'Фунчоза с курицей',
    weight: 320,
    price: 419,
    imgSmall: 'images/products/16-300.jpg',
    imgBig: 'images/products/16-1300.jpg',
    ingridients: [
      'Масло растительное',
      'Грудка куриная',
      'Морковь',
      'Лук репчатый',
      'Перец болгарский',
      'Кабачки',
      'Соус "Чесночный"',
      'Лапша стеклянная',
    ],
    nutritionalValue: [
      {
        text: 'Энерг. ценность',
        value: 170,
      },
      {
        text: 'Белки',
        value: 9,
      },
      {
        text: 'Жиры',
        value: 5,
      },
      {
        text: 'Углеводы',
        value: 18.5,
      },
    ],
    description:
      'Поклонники сытной и ароматной пищи наверняка по достоинству оценят вкусовые качества очередного творения наших мастеров кулинарии – Фунчозы с курицей.',
    category: 'Фунчозы',
    count: 1,
    ratio: 2,
  },
  {
    id: 17,
    title: 'Соба с говядиной',
    weight: 320,
    price: 439,
    imgSmall: 'images/products/17-300.jpg',
    imgBig: 'images/products/17-1300.jpg',
    ingridients: ['Масло растительное', 'Говядина', 'Морковь', 'Лук репчатый', 'Перец болгарский', 'Кабачки', 'Соус "Чесночный"', 'Лапша гречневая'],
    nutritionalValue: [
      {
        text: 'Энерг. ценность',
        value: 160,
      },
      {
        text: 'Белки',
        value: 8,
      },
      {
        text: 'Жиры',
        value: 6,
      },
      {
        text: 'Углеводы',
        value: 18,
      },
    ],
    description:
      'Характерной чертой соба с говядиной является его темноватые оттенки, так как для приготовления лапши используется гречневая мука. Это блюдо отлично подойдет для тех, кто любит остроту, ведь в его составе присутствует свежий чеснок. Благодаря обжарке на сковороде вок в растительном масле разнообразных овощей в них полностью сохраняется не только их структура, но и все питательные вещества.',
    category: 'Гречневая',
    count: 1,
    ratio: 2,
  },
  {
    id: 18,
    title: 'Удон с говядиной',
    weight: 320,
    price: 439,
    imgSmall: 'images/products/18-300.jpg',
    imgBig: 'images/products/18-1300.jpg',
    ingridients: ['Масло растительное', 'Говядина', 'Морковь', 'Лук репчатый', 'Перец болгарский', 'Кабачки', 'Соус "Чесночный"', 'Лапша пшеничная'],
    nutritionalValue: [
      {
        text: 'Энерг. ценность',
        value: 160,
      },
      {
        text: 'Белки',
        value: 7,
      },
      {
        text: 'Жиры',
        value: 6,
      },
      {
        text: 'Углеводы',
        value: 18,
      },
    ],
    description:
      'Удон с говядиной представляет собой подлинное произведение искусства, в котором смешано множество оттенков и вкусов. В качестве лидирующего тона выступает нежно-желтый, который присущ яичной лапше. Помидоры вносят в палитру блюда красноватые тона, болгарский перец – оранжевые оттенки, а соевый соус делает оттенок лапши немного приглушенным по интенсивности.',
    category: 'Пшеничная',
    count: 1,
    ratio: 1,
  },
  {
    id: 19,
    title: 'Сомен с говядиной',
    weight: 320,
    price: 439,
    imgSmall: 'images/products/19-300.jpg',
    imgBig: 'images/products/19-1300.jpg',
    ingridients: ['Масло растительное', 'Говядина', 'Морковь', 'Лук репчатый', 'Перец болгарский', 'Кабачки', 'Соус "Чесночный"', 'Лапша яичная'],
    nutritionalValue: [
      {
        text: 'Энерг. ценность',
        value: 160,
      },
      {
        text: 'Белки',
        value: 7,
      },
      {
        text: 'Жиры',
        value: 6,
      },
      {
        text: 'Углеводы',
        value: 18,
      },
    ],
    description:
      'Тонкий вкус яичной лапши можно подчеркнуть как овощами, так и мясными продуктами. Поэтому у нас можно заказать сомен с говядиной, в котором будут присутствовать сразу оба компонента. Нарезанные на длинные полоски кусочки молодой говядины, сладкая морковь, пикантный болгарский перец, сочные кабачки и многое другое – вот что таит в себе сомен с говядиной.',
    category: 'Яичная',
    count: 1,
    ratio: 3,
  },
  {
    id: 20,
    title: 'Фунчоза с говядиной',
    weight: 320,
    price: 439,
    imgSmall: 'images/products/20-300.jpg',
    imgBig: 'images/products/20-1300.jpg',
    ingridients: ['Масло растительное', 'Говядина', 'Морковь', 'Лук репчатый', 'Перец болгарский', 'Кабачки', 'Соус "Чесночный"', 'Лапша стеклянная'],
    nutritionalValue: [
      {
        text: 'Энерг. ценность',
        value: 150,
      },
      {
        text: 'Белки',
        value: 7.2,
      },
      {
        text: 'Жиры',
        value: 5,
      },
      {
        text: 'Углеводы',
        value: 16,
      },
    ],
    description:
      'Поклонники сытной и ароматной пищи наверняка по достоинству оценят вкусовые качества очередного творения наших мастеров кулинарии – фунчозы с говядиной.',
    category: 'Фунчозы',
    count: 1,
    ratio: 3,
  },
  {
    id: 21,
    title: 'Тяхан с креветками',
    weight: 300,
    price: 459,
    imgSmall: 'images/products/21-300.jpg',
    imgBig: 'images/products/21-1300.jpg',
    ingridients: ['Масло растительное', 'Креветки', 'Морковь', 'Лук репчатый', 'Перец болгарский', 'Рис', 'Соус "Чесночный"', 'Кунжут'],
    nutritionalValue: [
      {
        text: 'Энерг. ценность',
        value: 150,
      },
      {
        text: 'Белки',
        value: 6,
      },
      {
        text: 'Жиры',
        value: 6.5,
      },
      {
        text: 'Углеводы',
        value: 17,
      },
    ],
    description:
      'Для тяхана с креветкой все продукты проходят самый тщательный отбор как по качественным показателям, так и по вкусовым. Нарезанные на тонкие длинные полосы овощи по отдельности подвергаются обжарке на сковороде вок, после чего смешиваются с рассыпчатым рисом. В качестве заправки для блюда используется ароматный чесночный соус.',
    category: 'Тяханы',
    count: 1,
    ratio: 1,
  },
  {
    id: 22,
    title: 'Соба с креветками',
    weight: 320,
    price: 529,
    imgSmall: 'images/products/22-300.jpg',
    imgBig: 'images/products/22-1300.jpg',
    ingridients: ['Масло растительное', 'Креветки', 'Морковь', 'Лук репчатый', 'Перец болгарский', 'Кабачки', 'Соус "Чесночный"', 'Лапша гречневая'],
    nutritionalValue: [
      {
        text: 'Энерг. ценность',
        value: 170,
      },
      {
        text: 'Белки',
        value: 7,
      },
      {
        text: 'Жиры',
        value: 6.5,
      },
      {
        text: 'Углеводы',
        value: 19,
      },
    ],
    description:
      'Легкий специфический привкус гречневой лапши сливается в единое целое с утонченным ароматом креветок в соба с креветками. А для вкусового обрамления этих продуктов используются различные овощи, которые в процессе обжарки на сковороде вок покрываются тонкой корочкой, а внутри становятся невероятно мягкими и сочными.',
    category: 'Гречневая',
    count: 1,
    ratio: 5,
  },
  {
    id: 23,
    title: 'Удон с креветками',
    weight: 320,
    price: 529,
    imgSmall: 'images/products/23-300.jpg',
    imgBig: 'images/products/23-1300.jpg',
    ingridients: ['Масло растительное', 'Креветки', 'Морковь', 'Лук репчатый', 'Перец болгарский', 'Кабачки', 'Соус "Чесночный"', 'Лапша пшеничная'],
    nutritionalValue: [
      {
        text: 'Энерг. ценность',
        value: 160,
      },
      {
        text: 'Белки',
        value: 6,
      },
      {
        text: 'Жиры',
        value: 6.5,
      },
      {
        text: 'Углеводы',
        value: 19,
      },
    ],
    description:
      'Длинные и тонкие нити пшеничной лапши золотистого оттенка… Нежно-розоватые оттенки свежайших креветок… Разноцветные овощи, обжаренные на растительном масле в сковороде вок… Знакомитесь – это удон с креветкой, приготовленный по традиционным восточным рецептам. Чтобы придать блюду специфический вкус и даже некоторую жгучесть, в него добавляются свежий чеснок и соевый соус.',
    category: 'Пшеничная',
    count: 1,
    ratio: 3,
  },
  {
    id: 24,
    title: 'Сомен с креветками',
    weight: 320,
    price: 529,
    imgSmall: 'images/products/24-300.jpg',
    imgBig: 'images/products/24-1300.jpg',
    ingridients: ['Масло растительное', 'Креветки', 'Морковь', 'Лук репчатый', 'Перец болгарский', 'Кабачки', 'Соус "Чесночный"', 'Лапша яичная'],
    nutritionalValue: [
      {
        text: 'Энерг. ценность',
        value: 160,
      },
      {
        text: 'Белки',
        value: 6,
      },
      {
        text: 'Жиры',
        value: 6.5,
      },
      {
        text: 'Углеводы',
        value: 19,
      },
    ],
    description:
      'В сомене с креветками главную роль играет яичная лапша, которая обладает удивительно приятной структурой. В качестве дополнительных ингредиентов выступают овощи, необходимым условием для приготовления которых выступает использование сковороды вок. Овощи и лапша обжариваются всего несколько минут, и за это время они покрываются потрясающей корочкой.',
    category: 'Яичная',
    count: 1,
    ratio: 1,
  },
  {
    id: 25,
    title: 'Фунчоза с креветками',
    weight: 320,
    price: 529,
    imgSmall: 'images/products/25-300.jpg',
    imgBig: 'images/products/25-1300.jpg',
    ingridients: ['Масло растительное', 'Креветки', 'Морковь', 'Лук репчатый', 'Перец болгарский', 'Кабачки', 'Соус "Чесночный"', 'Лапша стеклянная'],
    nutritionalValue: [
      {
        text: 'Энерг. ценность',
        value: 165,
      },
      {
        text: 'Белки',
        value: 7,
      },
      {
        text: 'Жиры',
        value: 6.6,
      },
      {
        text: 'Углеводы',
        value: 19,
      },
    ],
    description:
      'Поклонники сытной и ароматной пищи наверняка по достоинству оценят вкусовые качества очередного творения наших мастеров кулинарии – фунчозы с креветками.',
    category: 'Фунчозы',
    count: 1,
    ratio: 4,
  },
];

export default products;
