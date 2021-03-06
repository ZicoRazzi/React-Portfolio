import { v4 as uuidv4 } from "uuid";
import CoinTrackerImg from "../images/cointracker.jpg";
import CavinImg from "../images/greenctg.jpg";
import LeBonnet from "../images/lebonnet.png";
import WeatherApp from "../images/weatherapp.png";
import Netflix from "../images/netflix.png";

const projects = [
  {
    id: uuidv4(),
    name: "React Redux Web-shop",
    desc: "My first web-shop built with React, Redux and Firebase",
    img: LeBonnet,
    path: "https://zicorazzi.github.io/react-redux-firebase-webshop",
  },
  {
    id: uuidv4(),
    name: "A Simple Weather App Built With React",
    desc: 'A weather app done with React. Allows you to make a search for the current weather by simply typing "common knowledge" cities.',
    img: WeatherApp,
    path: "https://tg-web-dev-4.github.io/weather-app-web-ZicoRazzi",
  },
  {
    id: uuidv4(),
    name: "Netflix Clone",
    desc: "Netflix clone app built up together with a team of TechGrounds students.",
    img: Netflix,
    path: "https://zicorazzi.github.io/netflix-catflix",
  },
  // {
  //   id: uuidv4(),
  //   name: "Cavin's Portfolio",
  //   desc:
  //     'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
  //   img: CavinImg,
  //   path: '/home'

  // },
];

export default projects;
