// import { useState } from "react";
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import "./SearchBox.css";

// export default function SearchBox({setWeatherInfo}){
//     let [city,setCity] = useState("");
//     let [error,setError] = useState(false);

//     const API_URL = "http://api.openweathermap.org/data/2.5/weather";
//     const API_KEY = "df9a067f6ea463f0a9f540ddd243b390";

//     let getWeatherInfo = async()=>{
//         try{
//             let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
//         let jsonResponse = await response.json();
//         let result = {
//             city:city,
//             temp: jsonResponse.main.temp,
//             tempMin: jsonResponse.main.temp_min,
//             tempMax: jsonResponse.main.temp_max,
//             humidity: jsonResponse.main.humidity,
//             feelsLike: jsonResponse.main.feels_like,
//             weather:jsonResponse.weather[0].description,
//         };
//         console.log(jsonResponse);
//         return result;
//         }catch(err){
//             throw err;
//         }
        
//     }

//     let handleInputChange = (evt)=>{
//         setCity(evt.target.value);
//     };

//     let handleSubmit = async(evt)=>{
//         evt.preventDefault();
//         setError(false);
//         try{
            
//             console.log(city);
//             setCity("");
//             let newInfo=  await getWeatherInfo();
//             setWeatherInfo(newInfo);
//         }catch(err){
//             setError(true);
//         }
       
//     };
//     return(
//         <div className="searchbox">
//             <h3>Search for weather</h3>
//             <form onSubmit={handleSubmit}>
//             <TextField id="city" label="City" variant="outlined" required  value={city} onChange={handleInputChange}/>
//             &nbsp;&nbsp;
//             <Button variant="contained" type="submit">Search</Button>
//             {error && <p style={{color:"red"}}>No such place exists!</p> }
//             </form>
//         </div>
//     )
// }

import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox({ setWeatherInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "df9a067f6ea463f0a9f540ddd243b390";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
            let jsonResponse = await response.json();
            
            if (jsonResponse.cod !== 200) {
                throw new Error("Invalid City");
            }

            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };

            return result;
        } catch (err) {
            throw err;
        }
    };

    let handleInputChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        evt.preventDefault();
        setError(false);  // Reset error on new search

        try {
            let newInfo = await getWeatherInfo();
            setWeatherInfo(newInfo);
        } catch (err) {
            setError(true);
        }
    };

    return (
        <div className="search-box">
            <h2>🌍 Search Weather</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="Enter City"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleInputChange}
                    className="city-input"
                />
                <Button variant="contained" type="submit" className="search-btn">
                    Search
                </Button>
                {error && <p className="error-message">❌ No such place exists!</p>}
            </form>
        </div>
    );
}
