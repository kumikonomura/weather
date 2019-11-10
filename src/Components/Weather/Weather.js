import React from "react";
import "./Weather.css";

const Weather = props => {
  return (
    <div id="weather_div">
      {props.city && props.country && (
        <p id='location'>
          Location:
          <span>
            {props.city}, {props.country}
          </span>
        </p>
      )}
      {props.temperature && (
        <p id='temperature'>
          Temperature:
          <span>{props.temperature} °F</span>
        </p>
      )}
      {props.humidity && (
        <p id='humidity'>
          Humidity:
          <span>{props.humidity}%</span>
        </p>
      )}
      {props.description && (
        <p id='condition'>
          Conditions:
          <span>{props.description}</span>
        </p>
      )}
      {props.error && (
        <p>
          <span>{props.error}</span>
        </p>
      )}
    </div>
  );
};

export default Weather;
