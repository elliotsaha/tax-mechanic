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
import P1Page2 from "./components/Blog/Page2/P1-Page2";
import P2Page2 from "./components/Blog/Page2/P2-Page2";
import P3Page2 from "./components/Blog/Page2/P3-Page2";
import P4Page2 from "./components/Blog/Page2/P4-Page2";
import P5Page2 from "./components/Blog/Page2/P5-Page2";
import P6Page2 from "./components/Blog/Page2/P6-Page2";
import P7Page2 from "./components/Blog/Page2/P7-Page2";
import P8Page2 from "./components/Blog/Page2/P8-Page2";
import P9Page2 from "./components/Blog/Page2/P9-Page2";
import P10Page2 from "./components/Blog/Page2/P10-Page2";
//Page 3
import BlogPage3 from "./components/Blog/Page3/Blog-Page3";
import P1Page3 from "./components/Blog/Page3/P1-Page3";
import P2Page3 from "./components/Blog/Page3/P2-Page3";
import P3Page3 from "./components/Blog/Page3/P3-Page3";
import P4Page3 from "./components/Blog/Page3/P4-Page3";
import P5Page3 from "./components/Blog/Page3/P5-Page3";
import P6Page3 from "./components/Blog/Page3/P6-Page3";
import P7Page3 from "./components/Blog/Page3/P7-Page3";
import P8Page3 from "./components/Blog/Page3/P8-Page3";
import P9Page3 from "./components/Blog/Page3/P9-Page3";
//Page 4
import BlogPage4 from "./components/Blog/Page4/Blog-Page4";
import P1Page4 from "./components/Blog/Page4/P1-Page4";
import P2Page4 from "./components/Blog/Page4/P2-Page4";
import P3Page4 from "./components/Blog/Page4/P3-Page4";
import P4Page4 from "./components/Blog/Page4/P4-Page4";
import P5Page4 from "./components/Blog/Page4/P5-Page4";
import P6Page4 from "./components/Blog/Page4/P6-Page4";
import P7Page4 from "./components/Blog/Page4/P7-Page4";
import P8Page4 from "./components/Blog/Page4/P8-Page4";
import P9Page4 from "./components/Blog/Page4/P9-Page4";
import P10Page4 from "./components/Blog/Page4/P10-Page4";
//Page5
import BlogPage5 from "./components/Blog/Page5/Blog-Page5";
import P1Page5 from "./components/Blog/Page5/P1-Page5";
import P2Page5 from "./components/Blog/Page5/P2-Page5";
import P3Page5 from "./components/Blog/Page5/P3-Page5";
import P4Page5 from "./components/Blog/Page5/P4-Page5";
import P5Page5 from "./components/Blog/Page5/P5-Page5";
//Contact 
import contact from "./components/Contact/contact";
//PrivacyPolicy
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        
          <Navbar />       
        <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/ourteam/" component={OurTeam} />
        <Route exact path="/services/" component={Services}/>
        <Route path="/e-book/" component={Ebook} />
        {/*Services*/}
        <Route path="/services/cra-tax-reduction/" component={CRATaxReduction}/>
        <Route path="/services/late-tax-filings/" component={LateTaxFilings} />
        <Route path="/services/ongoing-support/" component={OngoingSupport} />
        <Route path="/services/tax-appeal/" component={TaxAppeal} />
        <Route path="/services/tax-audits/" component={TaxAudits} />
        <Route path="/services/tax-payment-plan/" component={TaxPaymentPlan} />
        <Route path="/services/tax-relief/" component={TaxRelief} />
        <Route path="/services/tax-representation/" component={TaxRepresentation} />
        <Route path="/services/voluntary-disclosure/" component={VoluntaryDisclosure} />
        <Route path="/testimonials/" component={Testimonials} />

        {/*Blog*/}
        <Route exact path="/blog/" component={Blog} />
        <Route path="/blog/page1/underground-economy-in-a-pandemic/" component={P1} />
        <Route path="/blog/page1/are-you-behind-several-years-on-filing-your-taxes/" component={P2} />
        <Route path="/blog/page1/in-hiding-haunted-or-hunted-tax-terror-and-how-to-fix-it/" component={P3} />
        <Route path="/blog/page1/the-tax-gap-and-how-it-relates-to-you/" component={P4} />
        <Route path="/blog/page1/everything-you-need-to-know-about-canadas-carbon-tax/" component={P5} />
        <Route path="/blog/page1/who-to-hire-to-solve-your-tax-problem-3-things-to-look-for/" component={P6} />
        <Route path="/blog/page1/is-your-late-tax-problem-eating-you-away/" component={P7} />
        <Route path="/blog/page1/top-5-tips-to-increase-your-tax-refund/" component={P8} />
        <Route path="/blog/page1/overcoming-stigma-and-shame-around-the-topic-of-taxes/" component={P9} />
        <Route path="/blog/page1/artificial-intelligence-and-the-cra/" component={P10} />
        {/*Blog Page 2*/}
        <Route exact path="/blog/page2/" component={BlogPage2} />
        <Route path="/blog/page2/the-cra-is-on-the-warpath/" component={P1Page2} />
        <Route path="/blog/page2/lower-tax-debt/" component={P2Page2} />
        <Route path="/blog/page2/tax-article-help-change-life-better/" component={P3Page2} />
        <Route path="/blog/page2/inside-cra-part-one/" component={P4Page2} />
        <Route path="/blog/page2/many-people-dont-file-taxes-canada/" component={P5Page2} />
        <Route path="/blog/page2/psychology-people-dont-file-taxes/" component={P6Page2} />
        <Route path="/blog/page2/spring-maybe-bank-account-might-still-winter-frozen-cra/" component={P7Page2} />
        <Route path="/blog/page2/top-5-tips-to-increase-your-tax-refund/" component={P8Page2} />
        <Route path="/blog/page2/did-you-get-a-bonus/" component={P9Page2} />
        <Route path="/blog/page2/cra-tax-payment-plans/" component={P10Page2} />
        {/*Blog Page 3*/}
        <Route exact path="/blog/page3" component={BlogPage3} />
        <Route path="/blog/page3/hidden-meaning-behind-cra-notice-assessment/" component={P1Page3} />
        <Route path="/blog/page3/tax-tips-airbnb-owners-uber-drivers/" component={P2Page3} />
        <Route path="/blog/page3/voluntary-disclosure-filing-rules-change-10-days/" component={P3Page3} />
        <Route path="/blog/page3/paypal-ordered-hand/" component={P4Page3} />
        <Route path="/blog/page3/cra-penalties-interest/" component={P5Page3} />
        <Route path="/blog/page3/tax-changes-small-business-proposed-liberals-good-thing/" component={P6Page3} />
        <Route path="/blog/page3/divorce-and-taxes/" component={P7Page3} />
        <Route path="/blog/page3/not-filing-taxes-will-ineligible-just-credit/" component={P8Page3} />
        <Route path="/blog/page3/new-rules-leveling-playing-liberals-taking-aim-voluntary-disclosures/" component={P9Page3} />
        {/*Blog Page 4*/}
        <Route exact path="/blog/page4/" component={BlogPage4} />
        <Route path="/blog/page4/tax-horror-story-happy-ending/" component={P1Page4} />
        <Route path="/blog/page4/ss-taxes-accounting-make-sense/" component={P2Page4} />
        <Route path="/blog/page4/cra-targeting-contractors-construction-industry/" component={P3Page4} />
        <Route path="/blog/page4/cra-aggressively-going-taxpayers-whats-next/" component={P4Page4} />
        <Route path="/blog/page4/new-cra-rules-regarding-voluntary-disclosure-program-start-january-1-2018/" component={P5Page4} />
        <Route path="/blog/page4/changes-voluntary-disclosure-program-coming-time-now-file/" component={P6Page4} />
        <Route path="/blog/page4/like-put-glass-water/" component={P7Page4} />
        <Route path="/blog/page4/40000-tax-bill-become-8000-benefit/" component={P8Page4} />
        <Route path="/blog/page4/revenue-canadas-criminal-investigations-program/" component={P9Page4} />
        <Route path="/blog/page4/think-cra-wouldnt-come-think/" component={P10Page4} />
        {/*Blog Page5*/}
        <Route exact path="/blog/page5/" component={BlogPage5} />
        <Route path="/blog/page5/house-flippers-beware/" component={P1Page5} />
        <Route path="/blog/page5/underground-framer-comes-clean-with-cra-as-much-as-100k/" component={P2Page5} />
        <Route path="/blog/page5/when-you-get-a-notice-of-assessment-that-you-dont-want-to-get/" component={P3Page5} />
        <Route path="/blog/page5/whitby-resident-jailed-and-fined-for-tax-evasion/" component={P4Page5} />
        <Route path="/blog/page5/chances-tax-audit" component={P5Page5} />
        {/*Contact*/}
        <Route path="/contact/" component={contact} />
        {/*Privacy Policy*/}
          <Route path="/privacy-policy/" component={PrivacyPolicy} />
          <Route path="/privacypolicy/" component={PrivacyPolicy} />
          <Route path="/our-team/" component={OurTeam} />
        </Switch>
        <Footer />
        
        
      </React.Fragment>
    )
  }
}
