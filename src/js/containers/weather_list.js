import React,{Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map'

class WeatherList extends Component{
    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map(weather=>weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const {lon,lat} = cityData = cityData.city.coord;
        
        console.log(temps);
        

        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temps} units="K" color="orange"/></td>
                <td><Chart data={pressure} units="hPa" color="black"/></td>
                <td><Chart data={humidity} units="%" color="green"/></td>
            </tr>
        )
    }

    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
};


// function mapStateToProps (state){
//     return {weather:state.weather};
// }
function mapStateToProps ({weather}){
    console.log('weather',weather);
    return {weather:weather};
}

export default connect(mapStateToProps)(WeatherList);