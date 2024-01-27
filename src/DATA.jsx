import { useEffect } from "react";

// const YOUR_ACCESS_TOKEN = 'EAAFncZBO802oBOZBSJl8LwQmERcnvIPjBZCq9trjyUy6GlRZCT1dCnZAz3FbBXtGsy93eN6FpiZCfQm48oaRyKcLyMOqS8VkwWy4LDAmfdHzEZCV1nNFm0QASXSCgFElCBjHAZBxkCTQzNNXodBoxQ6wTTZCqzfXCvKo9hOYK5rPPppXLUNFyfm4ZC7l8ep0HArSH2BkB3ZCU6ARkXZCZBxYZD'

// `https://graph.facebook.com/v18.0/17841406324953217?fields=business_discovery.username(basan_aldisco){followers_count,media_count,media{id,caption,like_count,media_url,children{media_url}}}&access_token=EAAFncZBO802oBOZBSJl8LwQmERcnvIPjBZCq9trjyUy6GlRZCT1dCnZAz3FbBXtGsy93eN6FpiZCfQm48oaRyKcLyMOqS8VkwWy4LDAmfdHzEZCV1nNFm0QASXSCgFElCBjHAZBxkCTQzNNXodBoxQ6wTTZCqzfXCvKo9hOYK5rPPppXLUNFyfm4ZC7l8ep0HArSH2BkB3ZCU6ARkXZCZBxYZD`

// const users = ['basan_aldisco']

// useEffect(() => {
//   const fetchData = () => {
//     axios.get(`https://graph.facebook.com/v18.0/17841406324953217?fields=business_discovery.username(${users[0]}){followers_count,media_count,media{id,caption,like_count,media_url,children{media_url}}}&access_token=${YOUR_ACCESS_TOKEN}`)
//       .then(response => {
//         setData(response.data);
//         setIsLoading(false);
//       })
//       .catch(error => {
//         setError(error.message);
//         setIsLoading(false);
//       });
//   };

//   fetchData();

//   // Set up polling (e.g., every 5 minutes)
//   const interval = setInterval(fetchData, 300000);

//   // Clear the interval on component unmount
//   return () => clearInterval(interval);
// }, []);

const DATA = [
  {
    id: "23",
    name: "Llanera La 31",
    category: "Comida Regional",
    images: "images/25.jpg",
    contact: {
      instgram: "https://www.instagram.com/llanerala31/?hl=es",
      phoneNum: "https://api.whatsapp.com/send?phone=573015120013&text=++",
    },
  },

  {
    id: "24",
    name: `Totuma y Cuchara e' Palo`,
    category: "Comida Regional",
    images: "images/26.jpg",
    contact: {
      instgram: "https://www.instagram.com/totumacucharaepalo/?hl=es",
      phoneNum:
        "https://api.whatsapp.com/send?phone=573002231879&text=Buenas%2C%20Totuma%20y%20cuchara%20e%27%20palo.%0A%C2%BFQu%C3%A9%20men%C3%BA%20tiene%20para%20hoy%3F%20",
    },
  },

  {
    id: "26",
    name: `Scooby Pizzas`,
    category: "Pizzas",
    images: "images/27.jpg",
    contact: {
      instgram: "https://www.instagram.com/scoobypizzas/?hl=es",
      phoneNum: "https://api.whatsapp.com/send?phone=573014137770",
    },
  },

  {
    id: "27",
    name: `WOK Sabanero`,
    category: "Comida Regional",
    images: "images/29.jpg",
    contact: {
      instgram: "https://www.instagram.com/wok_sabanero/?hl=es",
      phoneNum: "https://linktr.ee/woksabanero",
    },
  },

  {
    id: "28",
    name: `La B Hamburgers`,
    category: "Hamburguesas",
    images: "images/28.jpg",
    contact: {
      instgram: "https://www.instagram.com/labhamburgers/?hl=es",
      phoneNum: "https://linktr.ee/la.b.hamburgers.sincelejo",
    },
  },

  {
    id: "29",
    name: `Wepa Express`,
    category: "Arepas",
    images: "images/30.jpg",
    contact: {
      instgram: "https://www.instagram.com/wepaexpress/?hl=es",
      phoneNum:
        "https://api.whatsapp.com/send?phone=573245679516&text=Hola%F0%9F%96%90Wepa%20Express%20%2C%20Deseo%20ordenar%20%E2%80%A6.",
    },
  },

  {
    id: "30",
    name: `Curramba Express`,
    category: "Comida Rápida",
    images: "images/31.jpg",
    contact: {
      instgram: "https://www.instagram.com/currambaexpress/?hl=es",
      phoneNum:
        "https://api.whatsapp.com/send/?phone=573016158966&text&type=phone_number&app_absent=0",
    },
  },

  {
    id: "31",
    name: `Sierra Nevado`,
    category: "Repostería y Heladería",
    images: "images/32.jpg",
    contact: {
      instgram: "https://www.instagram.com/sierra_nevado/?hl=es",
      phoneNum:
        "https://api.whatsapp.com/message/Z7WH33UZEH35G1?autoload=1&app_absent=0",
    },
  },

  {
    id: "32",
    name: `Helados Campo`,
    category: "Repostería y Heladería",
    images: "images/33.jpg",
    contact: {
      instgram: "https://www.instagram.com/campofinesticecream/?hl=es",
      phoneNum: "https://linktr.ee/Campofinesticecream",
    },
  },

  {
    id: "33",
    name: `La Browniseria`,
    category: "Repostería y Heladería",
    images: "images/35.jpg",
    contact: {
      instgram: "https://www.instagram.com/la_browniseria/?hl=es",
      phoneNum:
        "https://api.whatsapp.com/send/?phone=573012818655&text&type=phone_number&app_absent=0",
    },
  },

  {
    id: "34",
    name: `Winsy Repostería`,
    category: "Repostería y Heladería",
    images: "images/34.jpg",
    contact: {
      instgram: "https://www.instagram.com/winsy_reposteria/?hl=es",
      phoneNum: "https://api.whatsapp.com/send?phone=573123133640",
    },
  },

  {
    id: "35",
    name: `Basan Al Disco`,
    category: "Comida Gourmet",
    images: "images/36.jpg",
    contact: {
      instgram: "https://www.instagram.com/basan_aldisco/?hl=es",
      phoneNum: "https://linktr.ee/basanaldisco",
    },
  },

  {
    id: "36",
    name: `Casa Bonita 1921`,
    category: "Comida Gourmet",
    images: "images/37.jpg",
    contact: {
      instgram: "https://www.instagram.com/basan_aldisco/?hl=es",
      phoneNum:
        "https://linktr.ee/mariabonitapanaderia?fbclid=IwAR3rbCHsrnVUFQoLuDNaHFLW4rZRtwau7Sok4K81AN2_JJSsRTOx3pqJihU",
    },
  },

  {
    id: "37",
    name: `La Baguette Gourmet`,
    category: "Sándwiches",
    images: "images/39.jpg",
    contact: {
      instgram: "https://www.instagram.com/la_baguette_gourmet/?hl=es",
      phoneNum:
        "https://api.whatsapp.com/send/?phone=573113570648&text=Hola%2C+Quiero+hacer+un+pedido+%21&type=phone_number&app_absent=0",
    },
  },

  {
    id: "38",
    name: `El Palacio Fastfood`,
    category: "Comida Rápida",
    images: "images/38.jpg",
    contact: {
      instgram: "https://www.instagram.com/elpalaciofastfood/?hl=es",
      phoneNum:
        "https://linktr.ee/mariabonitapanaderia?fbclid=IwAR3rbCHsrnVUFQoLuDNaHFLW4rZRtwau7Sok4K81AN2_JJSsRTOx3pqJihU",
    },
  },

  {
    id: "39",
    name: `Gordo Lindo Restaurante`,
    category: "Comida Rápida",
    images: "images/40.jpg",
    contact: {
      instgram: "https://www.instagram.com/gordolindorestaurante/?hl=es",
      phoneNum: "https://wa.link/h419jq",
    },
  },

  {
    id: "40",
    name: `La Cosa Nostra`,
    category: "Pizzas",
    images: "images/41.jpg",
    contact: {
      instgram: "https://www.instagram.com/lacosanostra_sincelejo/?hl=es",
      phoneNum: "https://api.whatsapp.com/send?phone=573178943575",
    },
  },

  {
    id: "41",
    name: `Pollos Pombo`,
    category: "Pollo",
    images: "images/42.jpg",
    contact: {
      instgram: "https://www.instagram.com/pollospombo/?hl=es",
      phoneNum:
        "https://api.whatsapp.com/message/PU3LJWZLC3EVN1?autoload=1&app_absent=0",
    },
  },

  {
    id: "42",
    name: `Deli Broaster`,
    category: "Pollo",
    images: "images/43.jpg",
    contact: {
      instgram: "https://www.instagram.com/delibroastersincelejo/?hl=es",
      phoneNum: "https://linktr.ee/DeliBroaster",
    },
  },

  {
    id: "43",
    name: `Diverso`,
    category: "Comida Gourmet",
    images: "images/44.jpg",
    contact: {
      instgram: "https://www.instagram.com/restaurantediverso/?hl=es",
      phoneNum: "https://linktr.ee/DiversoGastroBar",
    },
  },

  {
    id: "1",
    name: "Benedetto Pizza",
    category: "Pizzas",
    images: "images/3.jpeg",
    contact: {
      instgram: "https://www.instagram.com/benedettopizza.col/",
      phoneNum: "https://linktr.ee/benedettopizza",
    },
  },

  {
    id: "17",
    name: "ROUKA GASTROBAR",
    category: "Hamburguesas",
    images: "images/19.jpg",
    contact: {
      instgram: "https://www.instagram.com/rouka_gastrobar/",
      phoneNum: "https://wa.me//+573205576898",
    },
  },

  {
    id: "4",
    name: "BBH",
    category: "Hamburguesas",
    images: "images/6.jpg",
    contact: {
      instgram: "https://www.instagram.com/_labbh_/",
      phoneNum: "https://wa.me/message/KHTKAOVZVZV3M1",
    },
  },

  {
    id: "8",
    name: "La Mondiu Burger",
    category: "Hamburguesas",
    images: "images/10.jpg",
    contact: {
      instgram: "https://www.instagram.com/lamondiu.burger/",
      phoneNum: "https://bio.site/lamondiu",
    },
  },

  {
    id: "10",
    name: "Pepitos",
    category: "Comida Rápida",
    images: "images/12.png",
    contact: {
      instgram: "https://www.instagram.com/pepitos_xpress/",
      phoneNum: "https://pepitos-xpress.cluvi.co/branch-without-service",
    },
  },
  {
    id: "7",
    name: "Place Arepas",
    category: "Arepas",
    images: "images/9.jpg",
    contact: {
      instgram: "https://www.instagram.com/placearepas/",
      phoneNum: "https://wa.link/voi51s",
    },
  },

  {
    id: "16",
    name: "Hot Dog la Bendición",
    category: "Comida Rápida",
    images: "images/18.jpg",
    contact: {
      instgram: "https://www.instagram.com/hot_dog_la_bendicion/",
      phoneNum: "https://wa.me/message/ZAIIWXKNJCXIH1",
    },
  },

  {
    id: "9",
    name: "Mr.Burger",
    category: "Hamburguesas",
    images: "images/11.enc",
    contact: {
      instgram: "https://www.instagram.com/mrburgersjo/",
      phoneNum: "https://bio.site/lamondiu",
    },
  },

  {
    id: "5",
    name: "Taco y Chela",
    category: "Comida Mexicana",
    images: "images/5.jpeg",
    contact: {
      instgram: "https://www.instagram.com/tacoychela.co/",
      phoneNum: "https://linkbe.me/tacoychela.co",
    },
  },

  {
    id: "11",
    name: "Hunter & Butcher",
    category: "Hamburguesas",
    images: "images/13.png",
    contact: {
      instgram: "https://www.instagram.com/hunterbutcher.co/",
      phoneNum: "https://linktr.ee/hunterbutcher",
    },
  },

  //   {
  //     id: "0",
  //     name: "Mr.Limón",
  //     category: "Sándwiches",
  //     images: "images/4.jpg",
  //     contact: {
  //       instgram: "https://www.instagram.com/fonda_mrlimon/",
  //       phoneNum: "https://wa.link/qpxehq",
  //     },
  //   },

  {
    id: "12",
    name: "Pizza House Col",
    category: "Pizzas",
    images: "images/14.png",
    contact: {
      instgram: "https://www.instagram.com/pizzahousecol/",
      phoneNum: "https://beacons.ai/pizzahousecol/",
    },
  },
  {
    id: "13",
    name: "Gastro Lab",
    category: "Comida Rápida",
    images: "images/15.jfif",
    contact: {
      instgram: "https://www.instagram.com/gastroolab/",
      phoneNum: "https://linktr.ee/gastroolab",
    },
  },
  {
    id: "14",
    name: "Beer Station",
    category: "Comida Rápida",
    images: "images/16.png",
    contact: {
      instgram: "https://www.instagram.com/beerstationguacari/",
      phoneNum: "https://wa.link/inq8a1",
    },
  },
  {
    id: "15",
    name: "Grato by Bennedetto",
    category: "Comida Gourmet",
    images: "images/17.jfif",
    contact: {
      instgram: "https://www.instagram.com/grato.bybenedetto/",
      phoneNum: "https://linktr.ee/grato.bybenedetto",
    },
  },

  {
    id: "6",
    name: "KFV",
    category: "Comida Rápida",
    images: "images/8.jfif",
    contact: {
      instgram: "https://www.instagram.com/kfvrestaurante/",
      phoneNum: "https://wa.link/47em9zhttps://wa.link/47em9z",
    },
  },
  {
    id: "2",
    name: "Pac Burger",
    category: "Comida Rápida",
    images: "images/2.jpeg",
    contact: {
      instgram: "https://www.instagram.com/pacburguer.fv/",
      phoneNum: "https://wa.link/xkc8vk",
    },
  },
  {
    id: "3",
    name: "Ricuras La Fé",
    category: "Comida Rápida",
    images: "images/1.jpeg",
    contact: {
      instgram: "https://www.instagram.com/ricuraslafe/",
      phoneNum: "https://wa.link/4xaebs",
    },
  },
  {
    id: "18",
    name: "Janne & Nasser",
    category: "Comida Árabe",
    images: "images/20.png",
    contact: {
      instgram: "https://www.instagram.com/janne.nasser/",
      phoneNum: "https://linktr.ee/jannenasser",
    },
  },

  {
    id: "19",
    name: "La Casita Gastrobar",
    category: "Comida Rápida",
    images: "images/21.jfif",
    contact: {
      instgram: "https://www.instagram.com/la_casita.gastrobar/",
      phoneNum: "https://linktr.ee/lacasitagastrobar",
    },
  },

  {
    id: "20",
    name: "Seiko Sushi",
    category: "Sushi",
    images: "images/22.png",
    contact: {
      instgram: "https://www.instagram.com/seikosushi/",
      phoneNum: "https://wa.link/0qg9kt",
    },
  },

  {
    id: "21",
    name: "Teriyaki Fusion Gong",
    category: "Sushi",
    images: "images/23.png",
    contact: {
      instgram: "https://www.instagram.com/teriyaki_fusion_gong/",
      phoneNum: "https://linktr.ee/teriyaki_fusion_gong",
    },
  },

  {
    id: "22",
    name: "Buona Pizza",
    category: "Pizzas",
    images: "images/24.jpg",
    contact: {
      instgram: "https://www.instagram.com/buonapizzasincelejo/",
      phoneNum: "https://bit.ly/DomiciliosBuonapizza",
    },
  },

  {
    id: "44",
    name: "PizzaBrosa",
    category: "Pizzas",
    images: "images/24.jpg",
    contact: {
      instgram: "https://www.instagram.com/pizzabrosa_col/?hl=es",
      phoneNum: "https://linktr.ee/pizzabrosa",
    },
  },
  {
    id: "45",
    name: "Jalapeño Taqueria Chingona",
    category: "Comida Mexicana",
    images: "images/46.jpg",
    contact: {
      instgram: "https://www.instagram.com/jalapeno_taqueriachingona/?hl=es",
      phoneNum: "https://wa.link/lmsxz8",
    },
  },
  {
    id: "46",
    name: "Restaurante Armonia Club",
    category: "Comida Gourmet",
    images: "images/45.png",
    contact: {
      instgram: "https://www.instagram.com/armonia_club/?hl=es",
      phoneNum:
        "https://api.whatsapp.com/send?phone=573026219022&text=Hola%20Armonia%20Club%20%F0%9F%92%AB%20Soy%20.......%20quiero%20hacer%20una%20reserva%20por%20favor",
    },
  },
  {
    id: "47",
    name: "Bemba Resto Bar",
    category: "Comida Rápida",
    images: "images/47.jpg",
    contact: {
      instgram: "https://www.instagram.com/buonapizzasincelejo/",
      phoneNum: "https://bit.ly/DomiciliosBuonapizza",
    },
  },
  {
    id: "48",
    name: "La Montañita",
    category: "Comida Rápida",
    images: "images/48.jpg",
    contact: {
      instgram: "https://www.instagram.com/lamontanita.co/?hl=es",
      phoneNum:
        "https://api.whatsapp.com/send?phone=573017894838&text=Buenas...",
    },
  },
  {
    id: "49",
    name: "Heladería Trozo De Cielo - Helados Florentino",
    category: "Repostería y Heladería",
    images: "images/49.jpg",
    contact: {
      instgram: "https://www.instagram.com/trozo_decielo/?hl=es",
      phoneNum: "https://api.whatsapp.com/send?phone=573215292843",
    },
  },
  {
    id: "50",
    name: "Melos Fast Food",
    category: "Comida Rápida",
    images: "images/50.jpg",
    contact: {
      instgram: "https://www.instagram.com/melosfastfood/?hl=es",
      phoneNum: "https://linktr.ee/melosfas",
    },
  },
  {
    id: "51",
    name: "Maná Arroz Del Cielo",
    category: "Arroz Chino",
    images: "images/51.jpg",
    contact: {
      instgram: "https://www.instagram.com/mana.arrozdelcielo_sincelejo/?hl=es",
      phoneNum:
        "https://api.whatsapp.com/message/RROE23U64S43F1?autoload=1&app_absent=0",
    },
  },
  {
    id: "52",
    name: "Dori Esquites",
    category: "Comida Mexicana",
    images: "images/52.jpg",
    contact: {
      instgram: "https://www.instagram.com/doriesquites_sljo/?hl=es",
      phoneNum:
        "https://api.whatsapp.com/message/RROE23U64S43F1?autoload=1&app_absent=0",
    },
  },
  {
    id: "53",
    name: "Montuno Gelato Caribe",
    category: "Repostería y Heladería",
    images: "images/53.png",
    contact: {
      instgram: "https://www.instagram.com/montuno.gelato/?hl=es",
      phoneNum: "https://bento.me/montunogelato",
    },
  },
  {
    id: "54",
    name: "Claudio 🌮",
    category: "Comida Mexicana",
    images: "images/54.png",
    contact: {
      instgram: "https://www.instagram.com/claudio_col/?hl=es",
      phoneNum: "https://linktr.ee/pardogastrobar",
    },
  },
  {
    id: "55",
    name: "Siracha",
    category: "Comida Gourmet",
    images: "images/55.png",
    contact: {
      instgram: "https://www.instagram.com/siracha_restaurante/?hl=es",
      phoneNum: "https://linktr.ee/Siracha",
    },
  },
  {
    id: "56",
    name: "Compadres",
    category: "Comida Rápida",
    images: "images/56.jpg",
    contact: {
      instgram: "https://www.instagram.com/compadressljo/?hl=es",
      phoneNum:
        "https://api.whatsapp.com/send?phone=573135499417&text=Hola%20me%20gustar%C3%ADa%20realizar%20un%20pedido!",
    },
  },
  {
    id: "57",
    name: "Barril Brothers",
    category: "Asados",
    images: "images/57.webp",
    contact: {
      instgram: "https://www.instagram.com/barrilbrothers/?hl=es",
      phoneNum: "https://linktr.ee/barrilbrothersjo",
    },
  },
];

DATA.forEach(item => {
  const instaUrl = item.contact.instgram;
  const username = instaUrl.replace('https://www.instagram.com/', '').replace('/?hl=es', '');
  item['instagram-user'] = username;
});

DATA.sort((a, b) => {
  return a.id - b.id;
});

export default DATA;