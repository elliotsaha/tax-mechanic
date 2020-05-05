import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import "./Sass/Bootstrap/App.css";
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
      </React.Fragment>
    )
  }
}
