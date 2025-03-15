// import { useState } from "react";
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';
// import "./InfoBox.css";


// export default function InfoBox({info}){

//     let IMG_URL = "https://images.unsplash.com/photo-1722858343990-1604f540c15d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     let HOT_URL = "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     let COLD_URL = "https://images.unsplash.com/photo-1457269449834-928af64c684d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     let RAIN_URL = "https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
//     return(
//         <div className="infobox">
//             <h1>Weather Info</h1>
//             <div className="cardContainer">
//             <Card sx={{ maxWidth: 345 }}>
//             <CardMedia
//                 sx={{ height: 140 }}
//                 image={info.humidity>80?RAIN_URL:info.temp>287?HOT_URL:COLD_URL}
//                 title="green iguana"
//             />
//             <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                 {info.city }{info.humidity>80?<ThunderstormIcon/>:info.temp>287?<WbSunnyIcon/> :<AcUnitIcon/>}
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
//                     <p>Temperature = {Math.floor(info.temp-273.15)}&deg;C </p>
//                     <p> Humidity = {Math.floor(info.humidity)} </p>
//                     <p> Min Temperature = {Math.floor(info.tempMin-273.15)}&deg;C</p>
//                     <p> Max Temperature = {Math.floor(info.tempMax-273.15)}&deg;C </p>
//                     <p>Weather is {info.weather} and feels like {Math.floor(info.feelsLike-273.15)}&deg;C</p>
//                 </Typography>
//             </CardContent>
            
//             </Card>
//             </div>
//         </div>
//     )
// }

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import "./InfoBox.css";

export default function InfoBox({ info }) {
    let IMG_URL = "https://images.unsplash.com/photo-1722858343990-1604f540c15d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let HOT_URL = "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let COLD_URL = "https://images.unsplash.com/photo-1457269449834-928af64c684d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     let RAIN_URL = "https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
    let getWeatherImage = () => {
        if (!info) return "default.jpg"; 
        if (info.humidity > 80) return RAIN_URL;
        if (info.temp > 287) return HOT_URL;
        return COLD_URL;
    };

    return (
        <div className="info-box">
            <h1>📍 {info.city ? `Weather in ${info.city}` : "Weather Info"}</h1>
            {info.city && (
                <Card className="weather-card">
                    <img src={getWeatherImage()} alt="Weather" className="weather-img" />
                    <CardContent>
                        <Typography variant="h5">
                            {info.city} {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 287 ? <WbSunnyIcon /> : <AcUnitIcon />}
                        </Typography>
                        <Typography variant="body2" component="span">
                            <p>🌡️ Temperature: {Math.floor(info.temp - 273.15)}°C</p>
                            <p>💧 Humidity: {info.humidity}%</p>
                            <p>🔽 Min: {Math.floor(info.tempMin - 273.15)}°C</p>
                            <p>🔼 Max: {Math.floor(info.tempMax - 273.15)}°C</p>
                            <p>🌤️ {info.weather}, Feels like {Math.floor(info.feelsLike - 273.15)}°C</p>
                        </Typography>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
