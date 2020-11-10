import React,{useState} from "react";
import "./homepage.css"

function Homepage () {

    let cityName="chandigarh";
    const [data, setData] = useState(null);

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

    async function handleSubmit (value) {
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

    return(
        <div>
            <input type="text" placeholder="Enter City Name.." className="searchbar" onChange={handleChange}></input>
            <button type="submit" onClick={handleSubmit}>Find weather</button>

            <div>
                <p>{data?.weather[0].description}</p>
                <p>{data?.main.temp && "Temp : "+ (data?.main.temp-273.15)} </p>
                <p>{data?.main.temp && "Sea Level : "+ (data?.main.sea_level)} </p>
            </div>
        </div>
    );
}

export default Homepage;