import React, { Component } from 'react';
import  { Switch, Route } from "react-router-dom";
import "./Sass/Bootstrap/App.css";
//Components
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import OurTeam from "./components/OurTeam/OurTeam";
// Component Imports
import Homepage from "./components/Homepage/Homepage";
import Services from "./components/ServicesPage/Services";
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/ourteam" component={OurTeam} />
        <Route exact path="/services" component={Services} />
        </Switch>
        <Footer />
      </React.Fragment>
    )
  }
}
