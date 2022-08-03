import ferrariCar from "../assets/img/Car/ferrari.png";
import redBullCar from "../assets/img/Car/redbull.png";
import williamsCar from "../assets/img/Car/williams.png";
import alfaRomeoCar from "../assets/img/Car/alfaromeo.png";
import alphaTauriCar from "../assets/img/Car/alpha.png";
import alpineCar from "../assets/img/Car/alpine.png";
import astonMartinCar from "../assets/img/Car/astonn.png";
import haasCar from "../assets/img/Car/haas.png";
import mcLarenCar from "../assets/img/Car/mclaren.png";
import mercedesCar from "../assets/img/Car/merc.png";

import ferrariLogo from "../assets/img/CarLogo/ferrariLogo.png";
import redBullLogo from "../assets/img/CarLogo/redbullLogo.png";
import williamsLogo from "../assets/img/CarLogo/williamsLogo.jpg";
import alfaRomeoLogo from "../assets/img/CarLogo/alfaLogo.png";
import alphaTauriLogo from "../assets/img/CarLogo/alphaTLogo.jpg";
import astonMartinLogo from "../assets/img/CarLogo/astonLogo.jpg";
import alpineLogo from  "../assets/img/CarLogo/alpineLogo.jpg";
import haasLogo from "../assets/img/CarLogo/haasLogo.jpg";
import mcLarenLogo from "../assets/img/CarLogo/mcLarenLogo.jpg";
import mercedesLogo from "../assets/img/CarLogo/mercLogo.png";

import ferrariLogo2 from "../assets/img/CarLogo/ferrariLogo2.png";
import redBullLogo2 from "../assets/img/CarLogo/redBullLogo2.png";
import williamsLogo2 from "../assets/img/CarLogo/williamsLogo2.png";
import alfaRomeoLogo2 from "../assets/img/CarLogo/alfaLogo2.png";
import alphaTauriLogo2 from "../assets/img/CarLogo/alphaLogo2.png";
import astonMartinLogo2 from "../assets/img/CarLogo/astonLogo2.png";
import alpineLogo2 from "../assets/img/CarLogo/alpineLogo2.png";
import haasLogo2 from "../assets/img/CarLogo/haasLogo2.png";
import mcLarenLogo2 from "../assets/img/CarLogo/mcLarenLogo2.png";
import mercedesLogo2 from "../assets/img/CarLogo/mercedesLogo2.png";

const TEAMS = [
    {
        "constructorId": "ferrari",
        "teamName": "Ferrari",
        "Base": "Italy",
        "carImg": ferrariCar,
        "logo": ferrariLogo,
        "logo2": ferrariLogo2,
        "color": "bg-red-600",
        "bio": `
            For many, Ferrari and Formula 1 racing have become inseparable. The only team to have competed in every season since the world championship began, the Prancing Horse has grown from the humble dream of founder Enzo Ferrari to become one of the most iconic and recognised brands in the world. Success came quickly through the likes of Alberto Ascari and John Surtees, and continued – in amongst leaner times – with Niki Lauda in the 1970s and then Michael Schumacher in the 2000s, when Ferrari claimed a then unprecedented five consecutive title doubles, securing their status as the most successful and decorated team in F1 history...
        `
    },

    {
        "constructorId": "red_bull",
        "teamName": "Red Bull",
        "Base": "Austria",
        "carImg": redBullCar,
        "logo": redBullLogo,
        "logo2": redBullLogo2,
        "color": "bg-blue-700",
        "bio": `
            Red Bull were no strangers to F1 - as sponsors - prior to formally entering as a works team in 2004. Nonetheless, the scale of their success over the following decade was staggering. After a first podium in 2006, the team hit their stride in 2009, claiming six victories and second in the constructors' standings. Over the next four seasons they were a tour de force, claiming consecutive title doubles between 2010 and 2013, with Sebastian Vettel emerging as the sport's youngest quadruple champion. Now their hopes of recapturing that glory lie with an equally exciting talent – one named Max Verstappen…
        `
    },

    {
        "constructorId": "williams",
        "teamName": "Williams",
        "Base": "United Kingdom",
        "carImg": williamsCar,
        "logo": williamsLogo,
        "logo2": williamsLogo2,
        "color": "bg-blue-400",
        "bio": `
            Driven on by the brilliance and passion of the late Sir Frank Williams, Williams grew from humble beginnings to become a Formula 1 behemoth, unrivalled by all except Ferrari and McLaren in terms of enduring success. Over the past four decades the team has racked up Grand Prix wins and championship glory, and in the process nurtured some of the greatest talents in the sport, both in and out the cockpit. Now, following the Williams family's decision to step aside after the sale of the team to Dorilton Capital, a new era begins...
        `
    },

    {
        "constructorId": "alfa",
        "teamName": "Alfa Romeo",
        "Base": "Italy",
        "carImg": alfaRomeoCar,
        "logo": alfaRomeoLogo,
        "logo2": alfaRomeoLogo2,
        "color": "bg-red-800",
        "bio": `
            The name Alfa Romeo boasts Formula 1 connections dating back to the championship’s inception in 1950. Fast forward to the 21st century and Italian flare combines with Swiss sensibilities in a new era for the team formerly known as Sauber.

            Having enjoyed considerable success in world sportscars, where he helped nurture the emerging talents of future F1 stars Michael Schumacher and Heinz-Harald Frentzen, Peter Sauber guided his eponymous squad into F1 in 1993.

            The team has since established itself as a mainstay of the grid, becoming race winners under BMW’s brief ownership, and developing a well-earned reputation not only for producing competitive cars, but also for developing young drivers.
        `
    },

    {
        "constructorId": "alphatauri",
        "teamName": "AlphaTauri",
        "Base": "Austria",
        "carImg": alphaTauriCar,
        "logo": alphaTauriLogo,
        "logo2": alphaTauriLogo2,
        "color": "bg-sky-300",
        "bio": `
            Established in 2006 as a squad in which young drivers from Red Bull’s prodigious talent pool could cut their F1 teeth, AlphaTauri – originally named Toro Rosso – were formed from the ashes of the plucky Minardi team. Sebastian Vettel gave validity to the approach almost immediately, delivering a fairy-tale win in 2008, before going on to enjoy world championship success with parent team Red Bull Racing. Today the ethos of nurturing talent still holds true, though the Italian squad are no longer simply a ‘B team’ but a constructor in their own right...
 
        `
    },

    {
        "constructorId": "aston_martin",
        "teamName": "Aston Martin",
        "Base": "United Kingdom",
        "carImg": astonMartinCar,
        "logo": astonMartinLogo,
        "logo2": astonMartinLogo2,
        "color": "bg-green-900",
        "bio": `
            Aston Martin’s original Formula 1 foray – over half a century ago – lasted just five races. This time, though, it’s serious. This F1 squad are no strangers to success, having won in their original guise of Jordan and most recently as Racing Point in 2020. Renowned for their ability to punch above their weight, and now with a four-time champion leading their driver line-up, Aston Martin are very much a team to watch…
        `
    },

    {
        "constructorId": "alpine",
        "teamName": "Alpine F1 Team",
        "Base": "France",
        "carImg": alpineCar,
        "logo": alpineLogo,
        "logo2": alpineLogo2,
        "color": "bg-blue-500",
        "bio": `
            Alpine may be a relatively new name to Formula 1, but Renault’s famous sportscar arm has plenty of motorsport heritage. The 2021 rebrand of the team marked the next step in Renault’s F1 revival, begun in 2016 with the takeover of the then-Lotus squad. Already race winners in their new guise, regular podiums and a tilt at the title must be their next target…
        `
    },

    {
        "constructorId": "haas",
        "teamName": "Haas F1 Team",
        "Base": "United States",
        "carImg": haasCar,
        "logo": haasLogo,
        "logo2": haasLogo2,
        "color": "bg-stone-400",
        "bio": `
            The youngest team on the grid, Haas made their highly impressive debut in 2016, and in the process became the first all-American-led F1 squad in three decades. Founded by industrialist Gene Haas, they are based in the United States on the same Kannapolis, North Carolina facility as his championship-winning NASCAR Sprint Cup Series team, Stewart-Haas Racing. The Ferrari-powered team, led by the charismatic Guenther Steiner, also have a UK factory in Banbury…
        `
    },

    {
        "constructorId": "mclaren",
        "teamName": "McLaren",
        "Base": "United Kingdom",
        "carImg": mcLarenCar,
        "logo": mcLarenLogo,
        "logo2": mcLarenLogo2,
        "color": "bg-orange-500",
        "bio": `
            Since entering the sport in 1966 under the guidance and restless endeavour of eponymous founder Bruce, McLaren's success has been nothing short of breathtaking. Five glittering decades have yielded countless victories, pole positions and podiums, not to mention eight constructors' championships. What's more, some of the sport's greatest drivers made their names with the team, including Emerson Fittipaldi, Ayrton Senna, Mika Hakkinen and Lewis Hamilton...
        `
    },
    
    {
        "constructorId": "mercedes",
        "teamName": "Mercedes",
        "Base": "United Kingdom",
        "carImg": mercedesCar,
        "logo": mercedesLogo,
        "logo2": mercedesLogo2,
        "color": "bg-emerald-400",
        "bio": `
            Mercedes’ modern F1 revival started with the creation of a works squad for 2010 - the platform for a meteoric rise up the Grand Prix order. The team generated huge excitement from the off with the sensational return of Michael Schumacher, but headlines soon followed on track: three podiums in their debut season, all via Nico Rosberg - who then claimed a breakthrough pole/victory double at China in 2012. The following season he was paired with Lewis Hamilton, the duo going on to stage some epic title battles as the Silver Arrows swept all before them to become one of the most dominant forces of the modern F1 era. And with Hamilton now partnered by steely Finn Valtteri Bottas, Mercedes remain very much the team to beat…
        `
    },
];

export default TEAMS;