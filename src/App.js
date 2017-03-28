import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Navigation from './Navigation';

class App extends Component {

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Navigation title="Life"/>
        </MuiThemeProvider>
      </div>
    );
  }
}

injectTapEventPlugin();
export default App;