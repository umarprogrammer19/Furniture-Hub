const items = [
  {
    id: 0,
    title: "Trenton modular sofa_3",
    price: 25000,
    imageUrl:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571460.jpg&fm=jpg&w=1920&h=1234&_gl=1*1jov2ta*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzA5My4wLjAuMA..",
  },
  {
    id: 1,
    title: "Hudson sectional sofa",
    price:28500,
    imageUrl:
      "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?cs=srgb&dl=pexels-eric-mufasa-1350789.jpg&fm=jpg&w=1920&h=1228&_gl=1*sbbnkl*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzI0NC4wLjAuMA..",
  },
  {
    id: 2,
    title: "Aria leather couch",
    price: 32000,
    imageUrl:
      "https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?cs=srgb&dl=pexels-atbo-245208.jpg&fm=jpg&w=1920&h=1387&_gl=1*4q8fd6*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzI3NS4wLjAuMA..",
  },
  {
    id: 3,
    title: "Savannah fabric sofa",
    price: 22800,
    imageUrl:
      "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?cs=srgb&dl=pexels-pixabay-276583.jpg&fm=jpg&w=1920&h=1251&_gl=1*10tviyb*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzI5OC4wLjAuMA..",
  },
  {
    id: 4,
    title: "Harmony modular sectional",
    price: 35500,
    imageUrl:
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?cs=srgb&dl=pexels-martin-péchy-1866149.jpg&fm=jpg&w=1920&h=1440&_gl=1*cbx39x*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzM0OC4wLjAuMA..",
  },
  {
    id: 5,
    title: "Elliot corner sofa",
    price: 27900,
    imageUrl:
      "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?cs=srgb&dl=pexels-evg-kowalievska-1148955.jpg&fm=jpg&w=1920&h=2880&_gl=1*1qy0cb9*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzM2OS4wLjAuMA..",
  },
  {
    id: 6,
    title: "Grace velvet loveseat",
    price: 26200,
    imageUrl:
      "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?cs=srgb&dl=pexels-pixabay-276528.jpg&fm=jpg&w=1920&h=1280&_gl=1*1ld8far*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzM5NC4wLjAuMA..",
  },
  {
    id: 7,
    title: "Logan three-seater sofa",
    price: 30400,
    imageUrl:
      "https://images.pexels.com/photos/923192/pexels-photo-923192.jpeg?cs=srgb&dl=pexels-steve-johnson-923192.jpg&fm=jpg&w=1920&h=1321&_gl=1*34ol9l*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzQyNS4wLjAuMA..",
  },
  {
    id: 8,
    title: "Trenton modular sofa_3",
    price: 25000,
    imageUrl:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571460.jpg&fm=jpg&w=1920&h=1234&_gl=1*1jov2ta*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzA5My4wLjAuMA..",
  },
  {
    id: 9,
    title: "Hudson sectional sofa",
    price:28500,
    imageUrl:
      "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?cs=srgb&dl=pexels-eric-mufasa-1350789.jpg&fm=jpg&w=1920&h=1228&_gl=1*sbbnkl*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzI0NC4wLjAuMA..",
  },
  {
    id: 10,
    title: "Aria leather couch",
    price: 32000,
    imageUrl:
      "https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?cs=srgb&dl=pexels-atbo-245208.jpg&fm=jpg&w=1920&h=1387&_gl=1*4q8fd6*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzI3NS4wLjAuMA..",
  },
  {
    id: 11,
    title: "Savannah fabric sofa",
    price: 22800,
    imageUrl:
      "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?cs=srgb&dl=pexels-pixabay-276583.jpg&fm=jpg&w=1920&h=1251&_gl=1*10tviyb*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzI5OC4wLjAuMA..",
  },
  {
    id: 12,
    title: "Harmony modular sectional",
    price: 35500,
    imageUrl:
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?cs=srgb&dl=pexels-martin-péchy-1866149.jpg&fm=jpg&w=1920&h=1440&_gl=1*cbx39x*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzM0OC4wLjAuMA..",
  },
  {
    id: 13,
    title: "Elliot corner sofa",
    price: 27900,
    imageUrl:
      "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?cs=srgb&dl=pexels-evg-kowalievska-1148955.jpg&fm=jpg&w=1920&h=2880&_gl=1*1qy0cb9*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzM2OS4wLjAuMA..",
  },
  {
    id: 14,
    title: "Grace velvet loveseat",
    price: 26200,
    imageUrl:
      "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?cs=srgb&dl=pexels-pixabay-276528.jpg&fm=jpg&w=1920&h=1280&_gl=1*1ld8far*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzM5NC4wLjAuMA..",
  },
  {
    id: 15,
    title: "Logan three-seater sofa",
    price: 30400,
    imageUrl:
      "https://images.pexels.com/photos/923192/pexels-photo-923192.jpeg?cs=srgb&dl=pexels-steve-johnson-923192.jpg&fm=jpg&w=1920&h=1321&_gl=1*34ol9l*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzQyNS4wLjAuMA..",
  },
  {
    id: 16,
    title: "Trenton modular sofa_3",
    price: 25000,
    imageUrl:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571460.jpg&fm=jpg&w=1920&h=1234&_gl=1*1jov2ta*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzA5My4wLjAuMA..",
  },
  {
    id: 17,
    title: "Hudson sectional sofa",
    price:28500,
    imageUrl:
      "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?cs=srgb&dl=pexels-eric-mufasa-1350789.jpg&fm=jpg&w=1920&h=1228&_gl=1*sbbnkl*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzI0NC4wLjAuMA..",
  },
  {
    id: 18,
    title: "Aria leather couch",
    price: 32000,
    imageUrl:
      "https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?cs=srgb&dl=pexels-atbo-245208.jpg&fm=jpg&w=1920&h=1387&_gl=1*4q8fd6*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzI3NS4wLjAuMA..",
  },
  {
    id: 19,
    title: "Savannah fabric sofa",
    price: 22800,
    imageUrl:
      "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?cs=srgb&dl=pexels-pixabay-276583.jpg&fm=jpg&w=1920&h=1251&_gl=1*10tviyb*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzI5OC4wLjAuMA..",
  },
  {
    id: 20,
    title: "Harmony modular sectional",
    price: 35500,
    imageUrl:
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?cs=srgb&dl=pexels-martin-péchy-1866149.jpg&fm=jpg&w=1920&h=1440&_gl=1*cbx39x*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzM0OC4wLjAuMA..",
  },
  {
    id: 21,
    title: "Elliot corner sofa",
    price: 27900,
    imageUrl:
      "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?cs=srgb&dl=pexels-evg-kowalievska-1148955.jpg&fm=jpg&w=1920&h=2880&_gl=1*1qy0cb9*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzM2OS4wLjAuMA..",
  },
  {
    id: 22,
    title: "Grace velvet loveseat",
    price: 26200,
    imageUrl:
      "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?cs=srgb&dl=pexels-pixabay-276528.jpg&fm=jpg&w=1920&h=1280&_gl=1*1ld8far*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzM5NC4wLjAuMA..",
  },
  {
    id: 23,
    title: "Logan three-seater sofa",
    price: 30400,
    imageUrl:
      "https://images.pexels.com/photos/923192/pexels-photo-923192.jpeg?cs=srgb&dl=pexels-steve-johnson-923192.jpg&fm=jpg&w=1920&h=1321&_gl=1*34ol9l*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzQyNS4wLjAuMA..",
  },
  {
    id: 24,
    title: "Trenton modular sofa_3",
    price: 25000,
    imageUrl:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571460.jpg&fm=jpg&w=1920&h=1234&_gl=1*1jov2ta*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzA5My4wLjAuMA..",
  },
  {
    id: 25,
    title: "Hudson sectional sofa",
    price:28500,
    imageUrl:
      "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?cs=srgb&dl=pexels-eric-mufasa-1350789.jpg&fm=jpg&w=1920&h=1228&_gl=1*sbbnkl*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzI0NC4wLjAuMA..",
  },
  {
    id: 26,
    title: "Aria leather couch",
    price: 32000,
    imageUrl:
      "https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?cs=srgb&dl=pexels-atbo-245208.jpg&fm=jpg&w=1920&h=1387&_gl=1*4q8fd6*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzI3NS4wLjAuMA..",
  },
  {
    id: 27,
    title: "Savannah fabric sofa",
    price: 22800,
    imageUrl:
      "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?cs=srgb&dl=pexels-pixabay-276583.jpg&fm=jpg&w=1920&h=1251&_gl=1*10tviyb*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzI5OC4wLjAuMA..",
  },
  {
    id: 28,
    title: "Harmony modular sectional",
    price: 35500,
    imageUrl:
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?cs=srgb&dl=pexels-martin-péchy-1866149.jpg&fm=jpg&w=1920&h=1440&_gl=1*cbx39x*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzM0OC4wLjAuMA..",
  },
  {
    id: 29,
    title: "Elliot corner sofa",
    price: 27900,
    imageUrl:
      "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?cs=srgb&dl=pexels-evg-kowalievska-1148955.jpg&fm=jpg&w=1920&h=2880&_gl=1*1qy0cb9*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzM2OS4wLjAuMA..",
  },
  {
    id: 30,
    title: "Grace velvet loveseat",
    price: 26200,
    imageUrl:
      "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?cs=srgb&dl=pexels-pixabay-276528.jpg&fm=jpg&w=1920&h=1280&_gl=1*1ld8far*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzM5NC4wLjAuMA..",
  },
  {
    id: 31,
    title: "Logan three-seater sofa",
    price: 30400,
    imageUrl:
      "https://images.pexels.com/photos/923192/pexels-photo-923192.jpeg?cs=srgb&dl=pexels-steve-johnson-923192.jpg&fm=jpg&w=1920&h=1321&_gl=1*34ol9l*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzQyNS4wLjAuMA..",
  },
];


export default items;