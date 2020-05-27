import React, { Component } from 'react';
import { Section1, Section2, Section3 } from "./OurTeamSections";
import "../../Sass/OurTeam/OurTeam.scss";

export default class OurTeam extends Component {
    render() {
        return (
            <div>
                <Section1 />
                <Section2 />
                <Section3 />
            </div>
        )
    }
}
