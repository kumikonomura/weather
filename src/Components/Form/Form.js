import React from "react";
import './Form.css'

const Form = props => {
  return (
    <div id='form_div'>
      <form>
        <div id='city_input' className="ui input">
          <input
            type="text"
            onChange={props.handleCityChange}
            // value={props.city}
            placeholder="City..."
          />
        </div>
        <div id='country_input' className="ui input">
          <input
            type="text"
            onChange={props.handleCountryChange}
            // value={props.country}
            placeholder="Country..."
          />
        </div>
        <button id='get_weather_button' className="ui yellow button" onClick={props.getWeather}>
          Get Weather
        </button>
      </form>
    </div>
  );
};

export default Form;
