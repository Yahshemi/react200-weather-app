import React from 'react';

export default class CityInfo extends React.Component {
    constructor(props){
        super(props);
    }
 
    render() {
        const { results } = this.props;
        console.log('test', results)
        return (
            <div className="card">
                <div className="class-header" id="results-name">{!!results.name ? results.name : "Select a City"}
                </div>
                <div className="row">
                    <div className="col-md-4">
                    <h5 id="h5-tag">Temperature (F)</h5>
                    <div id="div-tag-temperature">{!!results.main ? results.main.temp + '(F)' : "0"}</div>
                    </div>
                    <div className="col-md-4">
                    <h5 id="h5-tag-one">Pressure</h5>
                    <div id="div-tag-pressure">{!!results.main ? results.main.pressure + '(Psi)' : "0"}</div>
                    </div>
                    <div className="col-md-4">
                    <h5 id="h5-tag-two">Humidity</h5>
                    <div id="div-tag-humidity">{!!results.main ? results.main.humidity + '(H)' : "0"}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <h5 id="h5-tag-row-two">Lowest Temp (F)</h5>
                        <div id="div-tag-lowesttemp">{!!results.main ? results.main.temp_min + '(F)': "0"}</div>
                    </div>
                    <div className="col-md-4">
                    <h5 id="h5-tag-row-two-one">Highest Temp</h5>
                    <div id="div-tag-highesttemp">{!!results.main ? results.main.temp_max + '(F)' : "0"}</div>
                    </div>
                    <div className="col-md-4">
                    <h5 id="h5-tag-row-two-two">Wind Speed</h5>
                    <div id="div-tag-windspeed">{!!results.main ? results.wind.speed + '(mph)   ' : "0"}</div>
                </div>
            </div>
            </div>
        )
    }
};





// import React from 'react';

// export default class cityInformation extends React.Component {

//   render() {
//     const { cityInfo } = this.props;
//     return (
//       <div className='city-container'>
//         <h4 className='container-title'>City Information</h4>
//         <div className='header-city-container'>
//           { cityInfo.name &&
//             <img
//               src={ `http://openweathermap.org/img/w/${cityInfo.weather[0].icon}.png` }
//               alt='Weather icon'
//               className='weather-icon'
//             />
//           }
//           <img
//             src='images/city-icon.png'
//             alt='City Icon'
//             className='icon city-icon'
//           />
//           <h2 className='city-name'>
//             { cityInfo.name && cityInfo.name }
//           </h2>
//         </div>
//         <p className='location'>
//           <i className='fas fa-location-arrow' />
//           { !cityInfo.name ? 'Coordinates' : `Lat/Lng: ${cityInfo.coord.lat}, ${cityInfo.coord.lon}` }
//         </p>
//         <div className='info-container'>
//           <label htmlFor='temperature' className='city-info-label'>
//             Temperature (F)
//             <p className='city-info'>
//               <i className='fas fa-thermometer-half' />
//               { cityInfo.name && `${cityInfo.main.temp}F` }
//             </p>
//           </label>
//           <label htmlFor='pressure' className='city-info-label'>
//             Pressure
//             <p className='city-info'>
//               <i className='fas fa-tachometer-alt' />
//               { cityInfo.name && cityInfo.main.pressure }
//             </p>
//           </label>
//           <label htmlFor='humidity' className='city-info-label'>
//             Humidity
//             <p className='city-info'>
//               <i className='fas fa-tint' />
//               { cityInfo.name && `${cityInfo.main.humidity}%` }
//             </p>
//           </label>
//           <label htmlFor='lowest-temp' className='city-info-label'>
//             Lowest Temp (F)
//             <p className='city-info'>
//               <i className='fas fa-thermometer-empty' />
//               { cityInfo.name && `${cityInfo.main.temp_min}F` }
//             </p>
//           </label>
//           <label htmlFor='highest-temp' className='city-info-label'>
//             Highest Temp (F)
//             <p className='city-info'>
//               <i className='fas fa-thermometer-full' />
//               { cityInfo.name && `${cityInfo.main.temp_max}F` }
//             </p>
//           </label>
//           <label htmlFor='wind-speed' className='city-info-label'>
//             Wind Speed
//             <p className='city-info'>
//               <i className='fas fa-fighter-jet' />
//               { cityInfo.name && `${cityInfo.wind.speed}mph` }
//             </p>
//           </label>
//         </div>
//       </div>
//     );
//   }
// }

