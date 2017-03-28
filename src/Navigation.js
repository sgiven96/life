import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class Navigation extends Component {
  constructor(props) {
    super(props);
    this.styles = {
      title: {
      cursor: 'pointer'
      }
    };
    this.state = {};
    console.log(this.state);
  }

  handleTitleTap() {
    console.log("title tap");
  }

  render() {
    return (
      <AppBar
        title={<span style={this.styles.title}>{this.props.title}</span>}
        onTitleTouchTap={this.handleTitleTap}
      />
    );
  }
}

export default Navigation;