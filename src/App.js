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
import Ebook from "./components/Ebook/Ebook";
import Testimonials from "./components/Testimonials/Testimonials";
// Blog 
import Blog from "./components/Blog/Page1/Blog.js";
import P1 from "./components/Blog/Page1/P1";
import P2 from "./components/Blog/Page1/P2";
import P3 from "./components/Blog/Page1/P3";
import P4 from "./components/Blog/Page1/P4";
import P5 from "./components/Blog/Page1/P5";
import P6 from "./components/Blog/Page1/P6";
import P7 from "./components/Blog/Page1/P7";
import P8 from "./components/Blog/Page1/P8";
import P9 from "./components/Blog/Page1/P9";
import P10 from "./components/Blog/Page1/P10";
// Page 2
import BlogPage2 from "./components/Blog/Page2/Blog-Page2";

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
        <Route exact path="/testimonials" component={Testimonials} />

        {/*Blog*/}
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/page1/underground-economy-in-a-pandemic" component={P1} />
        <Route exact path="/blog/page1/are-you-behind-several-years-on-filing-your-taxes" component={P2} />
        <Route exact path="/blog/page1/in-hiding-haunted-or-hunted-tax-terror-and-how-to-fix-it" component={P3} />
        <Route exact path="/blog/page1/the-tax-gap-and-how-it-relates-to-you" component={P4} />
        <Route exact path="/blog/page1/everything-you-need-to-know-about-canadas-carbon-tax" component={P5} />
        <Route exact path="/blog/page1/who-to-hire-to-solve-your-tax-problem-3-things-to-look-for" component={P6} />
        <Route exact path="/blog/page1/is-your-late-tax-problem-eating-you-away" component={P7} />
        <Route exact path="/blog/page1/top-5-tips-to-increase-your-tax-refund" component={P8} />
        <Route exact path="/blog/page1/overcoming-stigma-and-shame-around-the-topic-of-taxes" component={P9} />
        <Route exact path="/blog/page1/artificial-intelligence-and-the-cra" component={P10} />
        {/*Blog Page 2*/}
        <Route exact path="/blog/page2" component={BlogPage2} />
        </Switch>
        <Footer />
      </React.Fragment>
    )
  }
}
