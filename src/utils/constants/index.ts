export const links = [
  {
    name: "Бишкек",
    hash: "/Bishkek",
  },
  {
    name: "Ош",
    hash: "/Osh",
  },
  {
    name: " Баткен",
    hash: "/Batken",
  },
  {
    name: "Джалал-Абад",
    hash: "/Jalal_Abad",
  },
  {
    name: "Нарын",
    hash: "/Naryn",
  },
  {
    name: "Талас",
    hash: "/Talas",
  },
  {
    name: "Иссык-Куль",
    hash: "/Issyk_Kul",
  },
] as const;

type GenerateData = {
  [key: string]: {
    title: string;
    description: string;
    img?: string;
  }[];
};

export const GENERATE_DATA: GenerateData = {
  Bishkek: [
    {
      title: "Бишкек",
      description: "Столица Кыргызстана, живописный город на Шелковом пути",
    },
    {
      title: "Государственный исторический музей",
      description:
        "Богатая коллекция артефактов, отражающих историю Кыргызстана",
    },
    {
      title: "Парк Победы",
      description:
        "Красивый парк с памятниками, посвященными Второй мировой войне",
    },
  ],
  Osh: [
    {
      title: "Ош",
      description:
        "Древний город, известный своим базаром и историческими достопримечательностями",
    },
    {
      title: "Сулейман-Тоо",
      description: "Священная гора с пещерами и древними наскальными рисунками",
    },
    {
      title: "Узгенский исторический музей",
      description: "Музей, посвященный истории и культуре региона Ош",
    },
  ],
  Batken: [
    {
      title: "Баткен",
      description: "Живописный регион с горами, реками и древними традициями",
    },
    {
      title: "Кыргызская керамика",
      description: "Традиционная керамика, изготавливаемая местными мастерами",
    },
    {
      title: "Озеро Сары-Челек",
      description: "Потрясающее горное озеро с кристально чистой водой",
    },
  ],
  Jalal_Abad: [
    {
      title: "Джалал-Абад",
      description: "Город с богатой историей и культурным наследием",
    },
    {
      title: "Арсланбоб",
      description:
        "Живописная деревня, известная своими грецкими орехами и природными красотами",
    },
    {
      title: "Музей истории и культуры",
      description:
        "Интересный музей, рассказывающий об истории и традициях региона",
    },
  ],
  Naryn: [
    {
      title: "Нарын",
      description:
        "Регион с впечатляющими горными пейзажами и богатой культурой",
    },
    {
      title: "Озеро Сон-Куль",
      description: "Одно из самых больших горных озер в Центральной Азии",
    },
    {
      title: "Кочевническая культура",
      description:
        "Возможность познакомиться с традициями и образом жизни кочевников",
    },
  ],
  Talas: [
    {
      title: "Талас",
      description: "Регион с богатой историей и культурным наследием",
    },
    {
      title: "Бейшеке",
      description:
        "Древний город с уникальной архитектурой и историческими памятниками",
    },
    {
      title: "Таласская долина",
      description:
        "Плодородная долина с красивыми пейзажами и сельскими традициями",
    },
  ],
  Issyk_Kul: [
    {
      title: "Иссык-Куль",
      description:
        "Второе по величине горное озеро в мире, окруженное величественными горами",
    },
    {
      title: "Чолпон-Ата",
      description: "Живописный курортный город на берегу озера Иссык-Куль",
    },
    {
      title: "Пещера Кулю-Туу",
      description:
        "Древняя пещера с наскальными рисунками и археологическими находками",
    },
  ],
} as const;
