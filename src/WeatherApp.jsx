// import { useState } from "react";
// import SearchBox from "./SearchBox";
// import InfoBox from "./InfoBox";
// export default function WeatherApp(){
//     let [weatherInfo,setWeatherInfo] = useState("");
//     let handleSearch = (newInfo)=>{
//         setWeatherInfo(newInfo);
//     }
//     return(
//         <div className="weatherinfo">
//             <SearchBox setWeatherInfo={setWeatherInfo}/>
//             <InfoBox info={weatherInfo}/>
//         </div>
//     )
// }

import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState("");

    return (
        <div className="weather-app">
            <SearchBox setWeatherInfo={setWeatherInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}
