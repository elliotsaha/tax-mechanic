import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import  { Switch, Route } from "react-router-dom";
import "./Sass/Bootstrap/App.css";
import Footer from "./components/Footer/Footer.js";
// Component Imports
import Homepage from "./components/Homepage/Homepage";
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
        <Route to="/" component={Homepage} />
        </Switch>
        <Footer />
      </React.Fragment>
    )
  }
}
