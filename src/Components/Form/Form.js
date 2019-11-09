import React from "react";

const Form = props => {
  return (
    <form>
      <input
        type="text"
        onChange={props.handleCityChange}
        // value={props.city}
        placeholder="City..."
      />
      <input
        type="text"
        onChange={props.handleCountryChange}
        // value={props.country}
        placeholder="Country..."
      />
      <button className="btn btn-primary" onClick={props.getWeather}>
        Get Weather
      </button>
    </form>
  );
};

export default Form;
