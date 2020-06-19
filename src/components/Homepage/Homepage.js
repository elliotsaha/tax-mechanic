import React, { Component } from 'react';
import { Section1, Section2, Section3, Section4, Section5 } from "./HomepageSections";
import ReactPixel from 'react-facebook-pixel';

const advancedMatching = { em: 'some@email.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
const options = {
  autoConfig: true, // set pixel's autoConfig
  debug: false, // enable logs
};
ReactPixel.init('803163109840564', advancedMatching, options);

ReactPixel.pageView(); // For tracking page view

export default class Homepage extends Component {
    render() {
        return (
            <div className="MainHomepageBody"> 
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            </div>
        )
    }
}



