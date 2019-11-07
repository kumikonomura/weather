import React from "react";
import Titles from "./Components/Titles";
import Form from "./Components/Form";
import Weather from "./Components/Weather";
import Axios from "axios";

const API_KEY = "1440f5491a8209d364a356f4beea4365";

class App extends React.Component {
  state = {
    city: "",
    country: ""
  };

  handleCityChange = event => {
    this.setState({
      city: event.target.value
    });
    console.log(this.state.city);
  };

  handleCountryChange = event => {
    this.setState({
      country: event.target.value
    });
    console.log(this.state.country);
  };

  getWeather = (e, city, country) => {
    e.preventDefault();
    Axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    ).then(data => {
      console.log(data);
    });
  };

  // function to get weather data
  //   getWeather = async e => {
  //     e.preventDefault();
  //     const api_call = await fetch(`
  //         http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}
  //         `);

  // const api_call = await fetch(
  //   `http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}&units=metric`
  // );

  // convert response to JSON format: JavaScript Object Notation
  // converts data to readable format
  //     const data = await api_call.json();
  //     console.log(data);
  //   };

  render() {
    return (
      <div>
        <Titles />
        <Form
          getWeather={this.getWeather}
          handleCityChange={this.handleCityChange}
          handleCountryChange={this.handleCountryChange}
          city={this.state.city}
          country={this.state.country}
        />
        <Weather />
      </div>
    );
  }
}

export default App;
