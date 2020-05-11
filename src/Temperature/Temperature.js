import React, { memo, useState } from 'react';

const toCelsius = (f) => (f - 32) * 5 / 9;
const toFahrenheit = (c) => (c * 9 / 5) + 32;

function convert(value, scale) {
  let input = parseFloat(value);

  if (Number.isNaN(input)) {
    input = 0;
  }

  const output = scale === 'c' ? toFahrenheit(input) : toCelsius(input);

  // round to 1 decimal point
  return `${Math.round(output * 10) / 10}`;
}

function TemperatureInput({ onChange, scale, value }) {
  return (
    <fieldset>
      <legend>Enter temperature in {scale === 'c' ? 'Celsius' : 'Fahrenheit'}:</legend>
      <input
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </fieldset>
  );
}

function areEqual(prev, next) {
  let retVal = `${prev.onChange}` === `${next.onChange}`;

  if (retVal) {
    retVal = prev.scale === next.scale;
  }

  if (retVal) {
    retVal = prev.value === next.value;
  }

  return retVal;
}

const MemoTemperatureInput = memo(TemperatureInput, areEqual);

export default function Temperature() {
  const [scale, setScale] = useState('c');
  const [value, setValue] = useState('0');

  const celsius = scale === 'f' ? convert(value, 'f') : value;
  const fahrenheit = scale === 'c' ? convert(value, 'c') : value;

  const handleChange = (newScale, newValue) => {
    setScale(newScale);
    setValue(newValue);
  };

  return (
    <div>
      <MemoTemperatureInput
        scale='c'
        value={celsius}
        onChange={(val) => handleChange('c', val)}
      />
      <MemoTemperatureInput
        scale='f'
        value={fahrenheit}
        onChange={(val) => handleChange('f', val)}
      />
    </div>
  );
}
