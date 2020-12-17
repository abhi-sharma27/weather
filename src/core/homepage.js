import React, { useState } from "react";
import classNames from "classnames";
import "./homepage.css"
import { FaSearchLocation } from "react-icons/fa";

function Homepage() {

    let cityName = "chandigarh";
    const [data, setData] = useState(null);
    const [yesno, setyesno] = useState(true);


    function handleChange(value) {
        cityName = value.target.value;
    }

    // function handleSubmit (value) {
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0898b95af8fb138034a326a18ecc3518`)
    //     .then(val => {
    //         val = val.json();
    //        console.log(val); 
    //     }).catch(err => {
    //         console.log(err);
    //     }).finally(() => {
    //         console.log('done');
    //     });
    // }

    async function handleSubmit(value) {
        try {
            let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0898b95af8fb138034a326a18ecc3518`);
            data = await data.json();
            console.log(data);
            setData(data);
        } catch (error) {
            console.log(error);
        }
        console.log('done');
    }

    

    return (
        <div className="homepage">

            <div id="background-wrap">

                <div id="sun"></div>

                {/* <div class="x1">
                    <div class="cloud"></div>
                </div> */}

                {/* <div class="x2">
                    <div class="cloud"></div>
                </div> */}

                <div className="x3">
                    <div className="cloud"></div>
                </div>

                <div className="x4">
                    <div className="cloud"></div>
                </div>

                {/* <div class="x5">
                    <div class="cloud"></div>
                </div> */}
            </div>
  


            <input type="text" placeholder="Enter City Name.." className={classNames ("searchbar" , {light:yesno}, {dark:!yesno} )} onChange={handleChange}></input>
            {/* <button type="submit" className="submit-button" onClick={handleSubmit}>Find weather</button> */}
            <FaSearchLocation className="submit" onClick={handleSubmit} />
            <button onClick={()=> setyesno(!yesno)}>Change Border color</button>
            

            <div>
                
                
                {data?.main.temp && 
                    <div className="details">
                        <p>{data.name}</p>
                        <p>{data?.weather[0].description}</p>
                        <p>Temp :<span> {Math.round(data.main.temp - 273.15)}  &deg;C</span></p>
                        <p>Feels Like :<span> {Math.round(data.main.feels_like - 273.15)}  &deg;C</span></p>
                        <p>Wind :<span> {data.wind.speed} Km</span></p>
                        <p>Sea Level :<span> {data.main.sea_level} m </span></p>
                        <p>Visibility :<span> {(data.visibility/1000).toFixed(0)} Km </span></p>
                        <p>SunRise :<span> {(new Date(data.sys.sunrise*1000)).toLocaleTimeString()}</span></p>
                        <p>Sunset :<span>{(new Date(data.sys.sunset*1000)).toLocaleTimeString()}</span></p>
                    </div>
                }
                
            </div>
        </div>
    );
}

export default Homepage;