import React, {
    Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import Temp from './Temp';

class App extends Component {
    render() {
        return (
            <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Simple React Examples</h2>
            </div>
            <p className="App-intro">
              Hello, World!
            </p>
            <Clock />
            <Temp />
          </div>
        );
    }
}

export default App;