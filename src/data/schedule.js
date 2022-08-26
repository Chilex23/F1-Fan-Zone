import france from "../assets/img/Country/france.png";
import holland from "../assets/img/Country/holland.gif";
import spain from "../assets/img/Country/spain.jpg";
import UK from "../assets/img/Country/UK.jpg";
import mexico from "../assets/img/Country/mexico.gif";
import monaco from "../assets/img/Country/monaco.jpg";
import abuDhabi from "../assets/img/Country/abudhabi.jpg";
import australia from "../assets/img/Country/australia.jpg";
import austria from "../assets/img/Country/austria.gif";
import azerbaijan from "../assets/img/Country/azerbaijan.jpg";
import bahrain from "../assets/img/Country/bahrain.jpg";
import belgium from "../assets/img/Country/belgium.jpg";
import brazil from "../assets/img/Country/brazil.jpg";
import canada from "../assets/img/Country/canada.jpg";
import hungary from "../assets/img/Country/hungary.gif";
import italy from "../assets/img/Country/italy.jpg";
import japan from "../assets/img/Country/japan.jpg";
import saudiArabia from "../assets/img/Country/saudi.jpg";
import singapore from "../assets/img/Country/singapore.jpg";
import usa from "../assets/img/Country/usa.jpg";

import hungaryPic from "../assets/img/Grandprix/hungaryPic.jpg";
import abuDhabiPic from "../assets/img/Grandprix/abuDhabiPic.jpg";
import australiaPic from "../assets/img/Grandprix/australia.jpg";
import austriaPic from "../assets/img/Grandprix/austriaPic.jpg";
import azerbaijaniPic from "../assets/img/Grandprix/azerbaijanPic.jpg";
import bahrainPic from "../assets/img/Grandprix/bahrainPic.jpg";
import belgiumPic from "../assets/img/Grandprix/belgiumPic.jpg";
import brazilPic from "../assets/img/Grandprix/brazilPic.jpg";
import britainPic from "../assets/img/Grandprix/britainPic.jpg";
import canadaPic from "../assets/img/Grandprix/canadaPic.jpg";
import dutchPic from "../assets/img/Grandprix/dutchPic.jpg";
import emiliaPic from "../assets/img/Grandprix/emiliaPic.jpg";
import francePic from "../assets/img/Grandprix/francePic.jpg";
import italyPic from "../assets/img/Grandprix/italyPic.jpg";
import japanPic from "../assets/img/Grandprix/japanPic.jpg";
import mexicoPic from "../assets/img/Grandprix/mexicoPic.jpg";
import miamiPic from "../assets/img/Grandprix/MiamiPic.jpg";
import saudiPic from "../assets/img/Grandprix/saudiPic.jpg";
import singaporePic from "../assets/img/Grandprix/singaporePic.jpg";
import spainPic from "../assets/img/Grandprix/spainPic.jpg";
import USPic from "../assets/img/Grandprix/usPic.jpg";
import monacoPic from "../assets/img/Grandprix/monacoPic.jpg";

const SCHEDULE = [
    {
        "circuitId": "bahrain",
        "country": "Bahrain",
        "day": 20,
        "month": "Mar",
        "name": "Formula 1 Gulf Air Bahrain Grand Prix",
        "imgUrl": bahrain,
        "raceTime": "Sun 16:00",
        "bgImage": bahrainPic
    },

    {
        "circuitId": "jeddah",
        "country": "Saudi Arabia",
        "day": 27,
        "month": "Mar",
        "name": "Formula 1 STC Saudi Arabian Grand Prix 2022",
        "imgUrl": saudiArabia,
        "raceTime": "Sun 18:00",
        "bgImage": saudiPic
    },

    {
        "circuitId": "albert_park",
        "country": "Australia",
        "day": 10,
        "month": "Apr",
        "name": "Formula 1 Heineken Australian Grand Prix",
        "imgUrl": australia,
        "raceTime": "Sun 06:00",
        "bgImage": australiaPic
    },

    {
        "circuitId": "imola",
        "country": "Italy",
        "day": 24,
        "month": "Apr",
        "name": "Formula 1 E Dell'Emilia Romagna 2022",
        "imgUrl": italy,
        "raceTime": "Sun 14:00",
        "bgImage": emiliaPic
    },

    {
        "circuitId": "miami",
        "country": "United States",
        "day": 8,
        "month": "May",
        "name": "Formula 1 Crypto.Com Miami Grand Prix 2022",
        "imgUrl": usa,
        "raceTime": "Sun 20:30",
        "bgImage": miamiPic
    },

    {
        "circuitId": "catalunya",
        "country": "Spain",
        "day": 22,
        "month": "May",
        "name": "Formula 1 Pirelli Gran Premio De Espana 2022",
        "imgUrl": spain,
        "raceTime": "Sun 14:00",
        "bgImage": spainPic
    },

    {
        "circuitId": "monaco",
        "country": "Monaco",
        "day": 29,
        "month": "May",
        "name": "Formula 1 Grand Prix De Monaco 2022",
        "imgUrl": monaco,
        "raceTime": "Sun 14:00",
        "bgImage": monacoPic
    },

    {
        "circuitId": "baku",
        "country": "Azerbaijan",
        "day": 12,
        "month": "Jun",
        "name": "Formula 1 Azerbaijan Grand Prix",
        "imgUrl": azerbaijan,
        "raceTime": "Sun 12:00",
        "bgImage": azerbaijaniPic
    },

    {
        "circuitId": "villeneuve",
        "country": "Canada",
        "day": 12,
        "month": "Jun",
        "name": "Formula 1 AWS Grand Prix Du Canada 2022",
        "imgUrl": canada,
        "raceTime": "Sun 19:00",
        "bgImage": canadaPic
    },

    {
        "circuitId": "silverstone",
        "country": "Great Britain",
        "day": 3,
        "month": "Jul",
        "name": "Formula 1 Lenovo British Grand Prix 2022",
        "imgUrl": UK,
        "raceTime": "Sun 15:00",
        "bgImage": britainPic
    },

    {
        "circuitId": "red_bull_ring",
        "country": "Austria",
        "day": 10,
        "month": "Jul",
        "name": "Formula 1 Rolex Grossier Preis Von Osterreich 2022",
        "imgUrl": austria,
        "raceTime": "Sun 14:00",
        "bgImage": austriaPic
    },

    {
        "circuitId": "ricard",
        "country": "France",
        "day": 24,
        "month": "Jul",
        "name": "Formula 1 Paul Ricard Circuit Grand Prix",
        "imgUrl": france,
        "raceTime": "Sun 14:00",
        "bgImage": francePic
    },

    {
        "circuitId": "hungaroring",
        "country": "Hungary",
        "day": 31,
        "month": "Jul",
        "name": "Formula 1 Aramco Magyar Nagydij 2022",
        "imgUrl": hungary,
        "raceTime": "Sun 14:00",
        "bgImage": hungaryPic
    },

    {
        "circuitId": "spa",
        "country": "Belgium",
        "day": 28,
        "month": "Aug",
        "name": "Formula 1 Rolex Belgian Grand Prix 2022",
        "imgUrl": belgium,
        "raceTime": "Sun 14:00",
        "bgImage": belgiumPic
    },

    {
        "circuitId": "zandvoort",
        "country": "Netherlands",
        "day": 4,
        "month": "Sep",
        "name": "Formula 1 Heineken Dutch Grand Prix 2022",
        "imgUrl": holland,
        "raceTime": "Sun 14:00",
        "bgImage": dutchPic
    },

    {
        "circuitId": "monza",
        "country": "Italy",
        "day": 11,
        "month": "Sep",
        "name": "Formula 1 Pirelli Gran Premio D'Italia 2022",
        "imgUrl": italy,
        "raceTime": "Sun 13:00",
        "bgImage": italyPic
    },

    {
        "circuitId": "marina_bay",
        "country": "Singapore",
        "day": 24,
        "month": "Sep",
        "name": "Formula 1 Singapore Airlines Singapore Grand Prix 2022",
        "imgUrl": singapore,
        "raceTime": "Sun 14:00",
        "bgImage": singaporePic
    },
  
    {
        "circuitId": "suzuka",
        "country": "Japan",
        "day": 9,
        "month": "Oct",
        "name": "Formula 1 Honda Japanese Grand Prix 2022",
        "imgUrl": japan,
        "raceTime": "Sun 06:00",
        "bgImage": japanPic
    },


    {
        "circuitId": "americas",
        "country": "United States",
        "day": 23,
        "month": "Oct",
        "name": "Formula 1 Aramco United States Grand Prix 2022",
        "imgUrl": usa,
        "raceTime": "Sun 20:00",
        "bgImage": USPic
    },

    {
        "circuitId": "rodriguez",
        "country": "Mexico",
        "day": 30,
        "month": "Oct",
        "name": "Formula 1 Gran Premio De La Ciudad De Mexico 2022",
        "imgUrl": mexico,
        "raceTime": "Sun 21:00",
        "bgImage": mexicoPic
    },

    {
        "circuitId": "interlagos",
        "country": "Brazil",
        "day": 13,
        "month": "Nov",
        "name": "Formula 1 Heineken Grande Premio De Sao Paulo 2022",
        "imgUrl": brazil,
        "raceTime": "Sun 19:00",
        "bgImage": brazilPic
    },

    {
        "circuitId": "yas_marina",
        "country": "Abu Dhabi",
        "day": 30,
        "month": "Nov",
        "name": "Formula 1 Etihad Airways Abu Dhabi Grand Prix 2022",
        "imgUrl": abuDhabi,
        "raceTime": "Sun 14:00",
        "bgImage": abuDhabiPic
    }
    
];

export default SCHEDULE;