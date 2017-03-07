import React, {
    Component
} from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

function toFahrenheit(c) {
    return (c * 9 / 5) + 32;
}

function toCelsius(f) {
    return (f - 32) * 5 / 9;
}

// value is the temperature
// scale is c for Celsius or f for Fahrenheit
function convert(value, scale) {
    let input = parseFloat(value);

    if (Number.isNaN(input)) {
        input = 0;
    }

    let output = 0;

    if (scale === 'c') {
        output = toFahrenheit(input);
    } else {
        output = toCelsius(input);
    }

    // round to 1 decimal point
    output = Math.round(output * 10) / 10;

    return output.toString();
}

// Class that displays the text box 
// and grabs the user input
class TempInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        const value = this.props.value;
        const scale = this.props.scale;
        return (
            <fieldset>
              <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input  value={value}
                        onChange={this.handleChange} />
            </fieldset>
        );
    }
}

// main class
export default class Temp extends Component {
    constructor(props) {
        super(props);

        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);

        this.state = {
            value: '',
            scale: 'c'
        };
    }

    handleCelsiusChange(value) {
        this.setState({
            scale: 'c',
            value
        });
    }

    handleFahrenheitChange(value) {
        this.setState({
            scale: 'f',
            value
        });
    }

    render() {
        const scale = this.state.scale;
        const value = this.state.value;
        const celsius = scale === 'f' ? convert(value, 'f') : value;
        const fahrenheit = scale === 'c' ? convert(value, 'c') : value;

        return (
            <div>
              <TempInput
                scale="c"
                value={celsius}
                onChange={this.handleCelsiusChange} />
              <TempInput
                scale="f"
                value={fahrenheit}
                onChange={this.handleFahrenheitChange} />
            </div>
        );
    }
}
