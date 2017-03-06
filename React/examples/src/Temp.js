import React, { Component } from 'react';

function CelsiusToFahrenheit(props) {
    const f = props.temp * 1.8 + 32;
    return <p>{props.temp} C is {f} F</p>
}

export default class Temp extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temp: 0};
  }

  handleChange(e) {
    this.setState({temp: e.target.value});
  }

  render() {
    const temp = this.state.temp;
    return (
        <fieldset>
          <legend>Enter a temperature in Celsius:</legend>
          <input
            value={temp}
            onChange={this.handleChange} />
          <CelsiusToFahrenheit
            temp={parseFloat(temp)} />
        </fieldset>
      );
  }
}
