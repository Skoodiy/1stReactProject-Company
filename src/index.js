import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <App />
);

// function BoilingVerdict(props) {
//   if (props.celsius >= 100) {
//     return <p>Voda zakipit.</p>
//   }
//   return <p>Voda ne zakipit.</p>
// }

// const scaleNames = {
//   c: 'Celsium',
//   f: 'Fahrenheit'
// };

// class TemperatureInput extends React.Component {
//   constructor(props) {
//     super(props);

//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event) {
//     this.props.onTemperatureChange(event.target.value);
//   }

//   render() {
//     const temperature = this.props.temperature;
//     const scale = this.props.scale;
//     return (
//       <fieldset>
//         <legend>Введите температуру в градусах {scaleNames[scale]}:</legend>
//         <input
//           value={temperature}
//           onChange={this.handleChange} />
//       </fieldset>
//     );
//   }
// }

// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handelCelsiumChange = this.handelCelsiumChange.bind(this);
//     this.handelFahrenheitChange = this.handelFahrenheitChange.bind(this);
//     this.state = {temperature: '', scale: ''};
//   }

//   handelCelsiumChange(temperature) {
//     this.setState({scale: 'c', temperature});
//   }

//   handelFahrenheitChange(temperature) {
//     this.setState({scale: 'f', temperature});
//   }

//   render() {
//     const scale = this.state.scale;
//     const temperature = this.state.temperature;
//     const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//     const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) :temperature;

//     return (
//       <div>
//         <TemperatureInput scale='c'
//                           temperature={celsius}
//                           onTemperatureChange={this.handelCelsiumChange} />
//         <TemperatureInput scale='f'
//                           temperature={fahrenheit}
//                           onTemperatureChange={this.handelFahrenheitChange} />
//         <BoilingVerdict celsius={parseFloat(celsius)} />
//       </div>
//     );
//   }
// }

// function toCelsius(fahrenheit) {
//   return (fahrenheit - 32) * 5 / 9;
// }

// function toFahrenheit(celsius) {
//   return (celsius * 9 / 5) + 32;
// }

// function tryConvert(temperature, convertFunct) {
//   const input = parseFloat(temperature);
//   if (Number.isNaN(input)) return '';
//   const output = Math.round((convertFunct(input) * 1000) / 1000);
//   return output.toString();
// }

// root.render(<Calculator />);