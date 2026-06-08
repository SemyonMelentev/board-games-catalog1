const games = [

{
id: 15,
title: "Ark Nova",
genre: "Стратегия",
year: 2021,
playTime: "90–150 мин",
players: "1–4",
rating: 8.5,
image: "images/ark-nova.jpg",
description: "Создайте современный зоопарк мирового уровня. Управляйте животными, спонсорами и природоохранными проектами, чтобы получить наибольшее признание."
},

{
id: 9,
title: "Gloomhaven",
genre: "Стратегия",
year: 2017,
playTime: "60–120 мин",
players: "1–4",
rating: 8.7,
image: "images/gloomhaven.jpg",
description: "Эпическая кооперативная кампания с развитием персонажей, тактическими боями и сотнями сценариев."
},

{
id: 6,
title: "Terraforming Mars",
genre: "Стратегия",
year: 2016,
playTime: "120 мин",
players: "1–5",
rating: 8.4,
image: "images/terraforming-mars.jpg",
description: "Крупные корпорации превращают Марс в пригодную для жизни планету, развивая технологии и инфраструктуру."
},

{
id: 12,
title: "Scythe",
genre: "Стратегия",
year: 2016,
playTime: "90–115 мин",
players: "1–5",
rating: 8.2,
image: "images/scythe.jpg",
description: "Альтернативная Европа 1920-х годов, где государства используют огромных боевых мехов для развития и влияния."
},

{
id: 8,
title: "Wingspan",
genre: "Стратегия",
year: 2019,
playTime: "40–70 мин",
players: "1–5",
rating: 8.1,
image: "images/wingspan.jpg",
description: "Развивайте собственный птичий заповедник, привлекая редкие виды птиц и создавая эффективную экосистему."
},

{
id: 11,
title: "Root",
genre: "Стратегия",
year: 2018,
playTime: "60–90 мин",
players: "2–4",
rating: 8.0,
image: "images/root.jpg",
description: "Ассиметричная стратегия, где каждая лесная фракция играет по уникальным правилам."
},

{
id: 7,
title: "Azul",
genre: "Семейная",
year: 2017,
playTime: "30–45 мин",
players: "2–4",
rating: 7.8,
image: "images/azul.jpg",
description: "Создавайте красивые мозаики из плитки, соревнуясь за наиболее выгодные комбинации."
},

{
id: 5,
title: "7 Wonders",
genre: "Стратегия",
year: 2010,
playTime: "30 мин",
players: "3–7",
rating: 7.7,
image: "images/seven-wonders.jpg",
description: "Развивайте древнюю цивилизацию, собирайте ресурсы, строите здания и возводите чудо света."
},

{
id: 14,
title: "Dominion",
genre: "Карточная",
year: 2008,
playTime: "30 мин",
players: "2–4",
rating: 7.7,
image: "images/dominion.jpg",
description: "Классическая колодостроительная игра, положившая начало целому жанру настольных игр."
},

{
id: 3,
title: "Pandemic",
genre: "Кооперативная",
year: 2008,
playTime: "45 мин",
players: "2–4",
rating: 7.6,
image: "images/pandemic.jpg",
description: "Объедините усилия с другими игроками, чтобы остановить распространение смертельных заболеваний по всему миру."
},

{
id: 13,
title: "Codenames",
genre: "Карточная",
year: 2015,
playTime: "15 мин",
players: "2–8",
rating: 7.6,
image: "images/codenames.jpg",
description: "Популярная игра на ассоциации, в которой команды пытаются разгадать секретные слова."
},

{
id: 10,
title: "Splendor",
genre: "Экономическая",
year: 2014,
playTime: "30 мин",
players: "2–4",
rating: 7.5,
image: "images/splendor.jpg",
description: "Станьте влиятельным торговцем эпохи Возрождения и привлекайте благородных покровителей."
},

{
id: 2,
title: "Carcassonne",
genre: "Семейная",
year: 2000,
playTime: "35 мин",
players: "2–5",
rating: 7.4,
image: "images/carcassonne.jpg",
description: "Создавайте средневековый ландшафт из тайлов и получайте очки за города, дороги и монастыри."
},

{
id: 4,
title: "Ticket to Ride",
genre: "Семейная",
year: 2004,
playTime: "30–60 мин",
players: "2–5",
rating: 7.4,
image: "images/ticket-to-ride.jpg",
description: "Стройте железнодорожные маршруты и соединяйте города, выполняя секретные задания."
},

{
id: 1,
title: "Catan",
genre: "Экономическая",
year: 1995,
playTime: "60–120 мин",
players: "3–4",
rating: 7.1,
image: "images/catan.jpg",
description: "Культовая игра о колонизации острова, торговле ресурсами и строительстве поселений."
}

];

games.sort((a, b) => b.rating - a.rating);
