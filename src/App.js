import React from "react";
import Titles from "./Components/Titles";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

const API_KEY = "1440f5491a8209d364a356f4beea4365";

class App extends React.Component {
  state = {
    city: "",
    country: "",
    humidity: undefined,
    temperature: undefined,
    description: undefined,
    error: undefined
  };

  // handles input change for City
  handleCityChange = event => {
    this.setState({
      city: event.target.value
    });
    console.log(this.state.city);
  };

  // handles input change for Country
  handleCountryChange = event => {
    this.setState({
      country: event.target.value
    });
    console.log(this.state.country);
  };

  // function to get weather data
  getWeather = async e => {
    e.preventDefault();

    const city = this.state.city;
    const country = this.state.country;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`
    );

    // convert response to JSON format: JavaScript Object Notation
    // converts data to readable format
    const data = await api_call.json();
    console.log(data);
    // city and both country need to be entered in order for info to pop out
    if (city && country) {
      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        error: "Please input a valid value"
      });
    }
  };

  render() {
    return (
      <div>
        <Titles />
        <Form
          getWeather={this.getWeather}
          handleCityChange={this.handleCityChange}
          handleCountryChange={this.handleCountryChange}
          />
        {/* //   city={this.state.city}
        //   country={this.state.country} */}
        <Weather
          temperature={this.state.temperature}
          humidity={this.state.humidity}
          description={this.state.description}
          city={this.state.city}
          country={this.state.country}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
