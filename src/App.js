import React, { Component } from 'react';
import  { Switch, Route } from "react-router-dom";
import "./Sass/Bootstrap/App.css";
//Components
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import OurTeam from "./components/OurTeam/OurTeam";
import Homepage from "./components/Homepage/Homepage";
import Services from "./components/ServicesPage/Services";
//Services
import CRATaxReduction from "./components/ServicesPage/ServiceSpecific/CRATaxReduction";
import LateTaxFilings from "./components/ServicesPage/ServiceSpecific/LateTaxFilings";
import OngoingSupport from "./components/ServicesPage/ServiceSpecific/OngoingSupport";
import TaxAppeal from "./components/ServicesPage/ServiceSpecific/TaxAppeal";
import TaxAudits from "./components/ServicesPage/ServiceSpecific/TaxAudits";
import TaxPaymentPlan from "./components/ServicesPage/ServiceSpecific/TaxPaymentPlan";
import TaxRelief from "./components/ServicesPage/ServiceSpecific/TaxRelief";
import TaxRepresentation from "./components/ServicesPage/ServiceSpecific/TaxRepresentation";
import VoluntaryDisclosure from "./components/ServicesPage/ServiceSpecific/VoluntaryDisclosure";
import Ebook from "./components/"
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/ourteam" component={OurTeam} />
        <Route exact path="/services" component={Services}/>
        <Route exact path="/ebook" component={Ebook} />
        {/*Services*/}
        <Route exact path="/services/cra-tax-reduction" component={CRATaxReduction}/>
        <Route exact path="/services/late-tax-filings" component={LateTaxFilings} />
        <Route exact path="/services/ongoing-support" component={OngoingSupport} />
        <Route exact path="/services/tax-appeal" component={TaxAppeal} />
        <Route exact path="/services/tax-audits" component={TaxAudits} />
        <Route exact path="/services/tax-payment-plan" component={TaxPaymentPlan} />
        <Route exact path="/services/tax-relief" component={TaxRelief} />
        <Route exact path="/services/tax-representation" component={TaxRepresentation} />
        <Route exact path="/services/voluntary-disclosure" component={VoluntaryDisclosure} />
        </Switch>
        <Footer />
      </React.Fragment>
    )
  }
}
