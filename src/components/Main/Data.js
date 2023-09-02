import EightyThree from "../../images/Main-Page/Movies/83.jpeg";
import Annabelle from "../../images/Main-Page/Movies/Annabelle.jpeg";
import Conjuring from "../../images/Main-Page/Movies/Conjuring.jpeg";
import DMDI from "../../images/Main-Page/Movies/DMDI.jpeg";
import DelhiCrime from "../../images/Main-Page/Movies/DelhiCrime.jpeg";
import DoctorG from "../../images/Main-Page/Movies/Doctorg.jpeg";
import Friends from "../../images/Main-Page/Movies/Friends.jpeg";
import HeartOfStone from "../../images/Main-Page/Movies/HeartofStone.jpeg";
import Kohrra from "../../images/Main-Page/Movies/Kohrra.jpeg";
import KotaFactory from "../../images/Main-Page/Movies/KotaFactory.jpeg";
import Major from "../../images/Main-Page/Movies/Major.jpeg";
import MissionMajnu from "../../images/Main-Page/Movies/MissionMajnu.jpeg";
import MoneyHeist from "../../images/Main-Page/Movies/MoneyHeist.jpeg";
import Shehzada from "../../images/Main-Page/Movies/Shehzada.jpeg";
import SquidGames from "../../images/Main-Page/Movies/SquidGames.jpeg";
import Wednesday from "../../images/Main-Page/Movies/Wednesday.jpeg";
import YJHD from "../../images/Main-Page/Movies/YJHD.jpeg";
import ZNMD from "../../images/Main-Page/Movies/ZNMD.jpeg";
import FatalSeduction from "../../images/Main-Page/Movies/FatalSeduction.jpeg";
import OneEightNineNine from "../../images/Main-Page/Movies/OneEightNineNine.jpeg";
import Crash from "../../images/Main-Page/Movies/Crash.jpg";
import Vincenzo from "../../images/Main-Page/Movies/Vincenzo.jpeg";
import Spy from "../../images/Main-Page/Movies/Spy.jpeg";
import Protector from "../../images/Main-Page/Movies/Protector.jpeg";
import Celebrity from "../../images/Main-Page/Movies/Celebrity.jpeg";
import Incantation from "../../images/Main-Page/Movies/Incantation.jpeg";
import Insidious from "../../images/Main-Page/Movies/Insidious.jpeg";
import Constantine from "../../images/Main-Page/Movies/Constantine.jpeg";

const Data = [
  {
    id: 1,
    movie: "The Conjuring",
    cast: [
      "Vera Farmiga",
      "Patrick Wilson",
      "Lili Taylor",
      "Ron Livingston",
      "Shanley Caswell",
      "Hayley McFarland",
      "Joey King",
    ],
    genre: ["Horror", "Supernatural"],
    description:
      '"The Conjuring" is based on the real-life paranormal investigations of Ed and Lorraine Warren...',
    episodes: "1",
    img: Conjuring,
  },
  {
    id: 2,
    movie: "Annabelle",
    cast: ["Annabelle Wallis", "Ward Horton", "Tony Amendola", "Alfre Woodard"],
    genre: ["Horror"],
    description:
      '"Annabelle" is a horror film and a prequel to "The Conjuring"...',
    episodes: "1",
    img: Annabelle,
  },
  {
    id: 3,
    movie: "Wednesday",
    cast: ["Jenna Ortega"],
    genre: ["Dark Comedy", "Fantasy"],
    description:
      '"Wednesday" is a TV series that revolves around the character Wednesday Addams...',
    episodes: "8",
    img: Wednesday,
  },
  {
    id: 4,
    movie: "Squid Game",
    cast: ["Lee Jung-jae", "Park Hae-soo", "Wi Ha-joon", "Jung Ho-yeon"],
    genre: ["Thriller", "Drama"],
    description:
      '"Squid Game" is a South Korean series where participants compete in a series of deadly games...',
    episodes: "9",
    img: SquidGames,
  },
  {
    id: 5,
    movie: "Money Heist",
    cast: ["Úrsula Corberó", "Álvaro Morte", "Pedro Alonso", "Itziar Ituño"],
    genre: ["Crime", "Drama"],
    description:
      '"Money Heist" follows a group of robbers who plan and execute intricate heists...',
    episodes: "41",
    img: MoneyHeist,
  },
  {
    id: 6,
    movie: "Friends",
    cast: [
      "Jennifer Aniston",
      "Courteney Cox",
      "Lisa Kudrow",
      "Matt LeBlanc",
    ],
    genre: ["Comedy", "Sitcom"],
    description:
      '"Friends" is a classic sitcom that revolves around the lives, relationships, and comedic adventures...',
    episodes: "236",
    img: Friends,
  },
  {
    id: 7,
    movie: "Mission Majnu",
    cast: ["Sidharth Malhotra", "Rashmika Mandanna"],
    genre: ["Action", "Thriller"],
    description:
      '"Mission Majnu" is a Bollywood spy thriller based on true events...',
    episodes: "1",
    img: MissionMajnu,
  },
  {
    id: 8,
    movie: "Kota Factory",
    cast: ["Mayur More", "Ranjan Raj", "Ahsaas Channa"],
    genre: ["Drama", "Comedy"],
    description:
      '"Kota Factory" is a TV series that revolves around the life of students preparing for competitive exams...',
    episodes: "10",
    img: KotaFactory,
  },
  {
    id: 9,
    movie: "Doctor G",
    cast: ["Ayushmann Khurrana"],
    genre: ["Comedy", "Drama"],
    description:
      '"Doctor G" is an upcoming Bollywood movie that features Ayushmann Khurrana in the lead role...',
    episodes: "1",
    img: DoctorG,
  },
  {
    id: 10,
    movie: "Heart of Stone",
    cast: ["Gal Gadot"],
    genre: ["Action", "Adventure"],
    description:
      '"Heart of Stone" is an upcoming action-adventure movie starring Gal Gadot...',
    episodes: "1",
    img: HeartOfStone,
  },
  {
    id: 11,
    movie: "Delhi Crime",
    cast: ["Shefali Shah", "Adil Hussain", "Rasika Dugal", "Rajesh Tailang"],
    genre: ["Crime", "Drama"],
    description:
      '"Delhi Crime" is a TV series based on the real-life events of the 2012 Delhi gang-rape case...',
    episodes: "12",
    img: DelhiCrime,
  },
  {
    id: 12,
    movie: "Kohrra",
    cast: ["List of main cast members"],
    genre: ["Horror"],
    description:
      "\"Kohrra\" is a horror movie (if it's an existing movie). However, I don't have specific information about this title...",
    episodes: "1",
    img: Kohrra,
  },
  {
    id: 13,
    movie: "Major",
    cast: ["Adivi Sesh"],
    genre: ["Biographical", "Drama"],
    description:
      '"Major" is a biographical movie based on the life of Major Sandeep Unnikrishnan...',
    episodes: "1",
    img: Major,
  },
  {
    id: 14,
    movie: "The Devil Made Me Do It",
    cast: [
      "Patrick Wilson",
      "Vera Farmiga",
      "Ruairi O'Connor",
      "Sarah Catherine Hook",
    ],
    genre: ["Horror", "Supernatural"],
    description:
      '"The Devil Made Me Do It" is the third installment in "The Conjuring" film series...',
    episodes: "1",
    img: DMDI,
  },
  {
    id: 15,
    movie: "Zindagi Na Milegi Dobara",
    cast: [
      "Hrithik Roshan",
      "Farhan Akhtar",
      "Abhay Deol",
      "Katrina Kaif",
      "Kalki Koechlin",
    ],
    genre: ["Drama", "Comedy", "Romance"],
    description:
      '"Zindagi Na Milegi Dobara" follows the journey of three friends who embark on a road trip to Spain...',
    episodes: "1",
    img: ZNMD,
  },
  {
    id: 16,
    movie: "Yeh Jawaani Hai Deewani",
    cast: [
      "Ranbir Kapoor",
      "Deepika Padukone",
      "Aditya Roy Kapur",
      "Kalki Koechlin",
    ],
    genre: ["Romance", "Drama", "Musical"],
    description:
      '"Yeh Jawaani Hai Deewani" revolves around the lives of four friends who reunite for a wedding...',
    episodes: "1",
    img: YJHD,
  },
  {
    id: 17,
    movie: "Shehzada",
    cast: ["Kartik Aryan", "Kriti Sanon"],
    genre: ["Drama", "Comedy"],
    description:
      '"Shehzada" is an upcoming Bollywood movie starring Kartik Aryan...',
    episodes: "1",
    img: Shehzada,
  },
  {
    id: 18,
    movie: "83",
    cast: [
      "Ranveer Singh",
      "Deepika Padukone",
      "Tahir Raj Bhasin",
      "Saqib Saleem",
      "Harrdy Sandhu",
    ],
    genre: ["Biographical", "Drama", "Sports"],
    description:
      '"83" is a sports drama film that portrays the journey of the Indian cricket team winning the 1983 Cricket World Cup...',
    episodes: "1",
    img: EightyThree,
  },
  {
    id: 19,
    movie: "Fatal Seduction",
    cast: ["Cast of Fatal Seduction"],
    genre: ["Drama", "Thriller", "Dubbed"],
    description: '"Fatal Seduction" is a suspenseful drama that...',
    episodes: "1",
    img: FatalSeduction,
  },
  {
    id: 20,
    movie: "1899",
    cast: ["Cast of 1899"],
    genre: ["Horror", "Mystery", "Dubbed"],
    description: '"1899" is a mysterious horror series set in...',
    episodes: "1",
    img: OneEightNineNine,
  },
  {
    id: 21,
    movie: "Crash Landing on You",
    cast: ["Cast of Crash Landing on You"],
    genre: ["Romance", "Drama", "Dubbed"],
    description: '"Crash Landing on You" is a heartwarming story...',
    episodes: "1",
    img: Crash,
  },
  {
    id: 22,
    movie: "Vincenzo",
    cast: ["Cast of Vincenzo"],
    genre: ["Crime", "Comedy", "Dubbed"],
    description: '"Vincenzo" follows a lawyer with a hidden past...',
    episodes: "1",
    img: Vincenzo,
  },
  {
    id: 23,
    movie: "Spy",
    cast: ["Cast of Spy"],
    genre: ["Action", "Comedy", "Dubbed"],
    description: '"Spy" is a hilarious action-comedy film...',
    episodes: "1",
    img: Spy,
  },
  {
    id: 24,
    movie: "The Protector",
    cast: ["Cast of The Protector"],
    genre: ["Action", "Fantasy", "Dubbed"],
    description: '"The Protector" is a fantasy series...',
    episodes: "1",
    img: Protector,
  },
  {
    id: 25,
    movie: "Celebrity",
    cast: ["Cast of Celebrity"],
    genre: ["Drama", "Dubbed"],
    description: '"Celebrity" explores the lives of famous individuals...',
    episodes: "1",
    img: Celebrity,
  },
  {
    id: 26,
    movie: "Incantation",
    cast: ["Cast of Incantation"],
    genre: ["Horror", "Mystery", "Dubbed"],
    description: '"Incantation" is a spine-chilling horror movie that...',
    episodes: "1",
    img: Incantation,
  },
  {
    id: 27,
    movie: "Insidious",
    cast: ["Cast of Insidious"],
    genre: ["Horror", "Supernatural", "Dubbed"],
    description: '"Insidious" is a supernatural horror film that...',
    episodes: "1",
    img: Insidious,
  },
  {
    id: 28,
    movie: "Constantine",
    cast: ["Cast of Constantine"],
    genre: ["Fantasy", "Action", "Dubbed"],
    description: '"Constantine" follows the journey of a demon hunter...',
    episodes: "1",
    img: Constantine,
  },
];

export default Data;
