import React, { useState, useEffect, Component } from 'react'
import Button from "../Misc/Button/Button";
import "../../Sass/OurTeam/OurTeam.scss";
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
import { Link } from "react-router-dom";
import "../../Sass/OurTeam/OurTeam.scss";

export function Section1() {
    return (
        <div className="S1">
            <img className="GradientS1Mobile" src="/img/OurTeam/TopImgMobile.png" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/OurTeam/TopImg.png" width="100%" alt="OurTeam"/>
            <div className="S1TextContainer">
                <div className="S1Text">
                    <span>Our Team.</span>
                    <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book For a Free Consultation Today"/></Link>
                    </div>
                </div>
            </div>
        </div>      
    )
}

export class Section2 extends Component{
  
  componentDidMount(){
        this.swiper=new Swiper('.swiper-container', {
            breakpoints: {
                1300: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
                750: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                }
            },
            

            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
        });
    //add necessary parameters required by checking the offical docs of swiper
    }
    render(){
        return(
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                   <a href="#Fraser"><img src="./img/OurTeam/TeamMembers/Fraser-Simpson.png" className="ImageContainerOurTeam"/>            </a>         
                    </div>
                    <div className="swiper-slide">
                    <a href="#Simpson"><img src="./img/OurTeam/TeamMembers/Simpson.png" className="ImageContainerOurTeam"/></a>       
                    </div>
                    <div className="swiper-slide">
                     <a href="#Harris"><img src="./img/OurTeam/TeamMembers/Harris.png" className="ImageContainerOurTeam"/></a>      
                    </div>
                    <div className="swiper-slide">
                    <a href="#Saha"><img src="./img/OurTeam/TeamMembers/Saha.png" className="ImageContainerOurTeam"/></a>                    
                    </div>
                    <div className="swiper-slide">
                    <a href="#Knox"><img src="./img/OurTeam/TeamMembers/Knox.png" className="ImageContainerOurTeam"/></a>                    
                    </div>
                    <div className="swiper-slide">
                    <a href="#Tanweer"><img src="./img/OurTeam/TeamMembers/Tanweer.png" className="ImageContainerOurTeam"/></a>                    
                    </div>
                    <div className="swiper-slide">
                    <a href="#Shahadat"><img src="./img/OurTeam/TeamMembers/Shahadat.png" className="ImageContainerOurTeam"/></a>        
                    </div>
                    <div className="swiper-slide">
                    <a href="#Lazar"><img src="./img/OurTeam/TeamMembers/Lazar.png" className="ImageContainerOurTeam"/></a>                    
                    </div>
                    <div className="swiper-slide">
                    <a href="#Jones"><img src="./img/OurTeam/TeamMembers/Jones.png" className="ImageContainerOurTeam"/></a>                    
                    </div>
                    <div className="swiper-slide">
                    <a href="#Vithalan"><img src="./img/OurTeam/TeamMembers/Vithalan.png" className="ImageContainerOurTeam"/></a>                    
                    </div>
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
            )
    }
}


export class Section3 extends React.Component {
  render(){
      return(
          <div className="OurTeamS3Container">
              <span class="anchor" id="Fraser"></span>
              <div id="Fraser">
                <div>
                    <img src="./img/OurTeam/TeamMembers/Fraser-Simpson.png" className="ImageContainerOurTeam"/>
                </div>
                <span>Fraser Simpson</span>
                <p>
                <br/><br/>
                Mr. Simpson has been active in income tax consulting, residential and commercial real estate development since 1985.
                Prior to founding the Tax Mechanic, he held several senior management positions, including Director of Land development for a real estate investment company (John DiPoce Management) and Controller of Communicorp Multi Media Inc., a TSX listed company. Mr. Simpson obtained his Bachelor of Arts degree from York University, Toronto, and qualified as a Chartered Accountant in 1993. He has also completed the Canadian Securities and Partners, Directors and Senior Officers courses.
                </p>
              </div>
              <span class="anchor" id="Simpson"></span>
              <div id="Simpson">
                <div>
                    <img src="./img/OurTeam/TeamMembers/Simpson.png" className="ImageContainerOurTeam"/>
                </div>
                
                <span>Stephanie Simpson</span>
                <p>
                <br/><br/>Stephanie Simpson is a research professional studying Political Science and Economics at the University of British Columbia. With a background in academic research and digital marketing, she does consulting and contract work for the Tax Mechanic, specializing in research and copywriting. She is passionate about providing interesting and quality content to Tax Mechanic prospects and clients, and seeks to educate Canadians on their options when it comes to taxes and business.</p>
              </div>
              <span class="anchor" id="Harris"></span>
              <div id="Harris">
                <div>
                    <img src="./img/OurTeam/TeamMembers/Harris.png" className="ImageContainerOurTeam"/>
                </div>
                
                <span>David Harris</span>
                <p>
                <br/><br/>Mr. Harris, Fraser’s business partner, is a specialist. With an extensive background in Sales and Marketing, Construction Operations Management and a tax consultation specialist he is well versed in almost all tax-related matters. His extensive experience and organizational skills compliment the business and corporate tax solutions services offered at The Tax Mechanic. Clients appreciate his empathetic nature in resolving highly personal tax issues, helping to achieve the best outcomes possible. In his free time, Mr. Harris also is the founder of Team Unbreakable, a registered charity dedicated to promoting better youth mental health.</p>
              </div>
              <span class="anchor" id="Saha"></span>
              <div id="Saha">
                  <div>
                       <img src="./img/OurTeam/TeamMembers/Saha.png" className="ImageContainerOurTeam"/>
                  </div>
                 
                  <span>Turni Saha</span>
                  <p>
                  <br/><br/>Turni Saha is a digital content expert studying International Economics at the University of British Columbia. With experience in digital marketing and videography, she does promotional and advertising work for the Tax Mechanic specializing in the image and expansion of the company. She is dedicated to finding creative ways to promote the Tax Mechanic to clients and other businesses as the top tax company in Canada. </p>
              </div>
              <span class="anchor" id="Knox"></span>
            <div id="Knox">
                <div>
                    <img src="./img/OurTeam/TeamMembers/Knox.png" className="ImageContainerOurTeam"/>
                </div>
                
                <span>John Knox</span>
                <p>
                <br/><br/>John Knox is a client turned marketing expert. After being a client of the Tax Mechanic himself, he was so impressed he decided to work there. With a long career in traditional sales and marketing roles, he has an extensive skill set in advertising and working with clients. With a solution-based approach, Mr. Knox successfully engages and builds long-term relationships with clients. In his spare time, he is a multiple Ironman Triathlon athlete and marathon runner.</p>
            </div>
            <span class="anchor" id="Tanweer"></span>
            <div id="Tanweer">
                <div>
                     <img src="./img/OurTeam/TeamMembers/Tanweer.png" className="ImageContainerOurTeam"/>
                </div>
               
                <span>Moneeba Tanweer</span>
                <p>
                <br/><br/>Moneeba Tanweer is an artist. With the ability to talk her way into and out of the most complex situation she is not only an artist with her words but with a paintbrush too. In the past year, Ms. Tanweer has been working at the Tax Mechanic creating digital content for the company's social media outlets. To see her work, go check out the Tax Mechanic’s Instagram! In her spare time, she is a 4th year medical student. </p>
            </div>
            <span class="anchor" id="Shahadat"></span>
            <div id="Shahadat">
                <div>
                    <img src="./img/OurTeam/TeamMembers/Shahadat.png" className="ImageContainerOurTeam"/>
                </div>
                
                <span>Tanweer Shahadat</span>
                <p>
                <br/><br/>Tanweer Shahadat is a numbers expert. With over 10 years of experience in the tax business and having served as a senior accountant for over 20 years, Mr.Shahadat is an expert in all financial problems. He completed his bachelor's in engineering from NED University of Engineering and Technology, Pakistan, and later he pursued a career in accounting from the Institute of Cost and Management Accountants of Pakistan. His work experience includes working as a finance manager for over 10 years in the multinational company Cadbury Pakistan Ltd. Mr.Shahadat joined our team at Tax Mechanic in 2017 and is working currently as Head Accountant.</p>
            </div>
            <span class="anchor" id="Lazar"></span>
            <div id="Lazar">
                <div>
                    <img src="./img/OurTeam/TeamMembers/Lazar.png" className="ImageContainerOurTeam"/>
                </div>
                
                <span>Christa Lazar</span>
                <p>
                <br/><br/>Ms. Lazar is a closer. With a background in sales, marketing, strategic planning, analysis in commercial and residential real estate, as well as years of experience in office and client management, Ms. Lazar brings her management expertise to the table as an accredited liaison between clients, the CRA and the Tax Mechanic. As a Certified Negotiations Expert, her ability to analyze and problem solve are one of her greatest strengths in ensuring the successful progress of a case with every detail evaluated and passed through her - assuring a victory for our clients. </p>
            </div>
            <span class="anchor" id="Jones"></span>
            <div id="Jones">
                <div>
                    <img src="./img/OurTeam/TeamMembers/Jones.png" className="ImageContainerOurTeam"/>
                </div>
                
                <span>Meekaaeel Jones</span>
                <p>
                <br/><br/>Meekaaeel Jones is an entrepreneur. With specializations in video production and editing, his aim is always to bring focus and attention to the details that, while otherwise inane, could shift the paradigm of one's judgement or ideals.
                His schooling has thus been focused on the arts and language arts, with minor study in psychology and business. Having been born in Botswana and raised between Canada and Southern Africa, Meekaaeel has grown up with the benefit of the experience that travel brings, still utilizing many of the skills he picked up before completing any formal education. Only after a 5 year mentorship under a marketing and film professional did things begin to click.</p>
            </div>
            <span class="anchor" id="Vithalan"></span>
            <div id="Vithalan">
                <div>
                    <img src="./img/OurTeam/TeamMembers/Vithalan.png" className="ImageContainerOurTeam"/>
                </div>
                
                <span>Keval Vithalan</span>
                <p>
                <br/><br/>Keval Vithalan is a problem solver. With a commerce specialization in accounting and tax from Mumbai University, Mr. Vithalan is an expert in preparing  T1, T2, GST/HST and submitting it to the CRA. With extensive experience in tax and accounting in an international market, he’s well-versed in the preparation and finalization of accounts and taxes. In his spare time, he is an avid traveller and chess enthusiast.</p>
            </div>
            <span class="anchor" id="Jimena"></span>
            <div id="Jimena">
                <div>
                     <img src="./img/OurTeam/TeamMembers/Jimena.png" className="ImageContainerOurTeam"/>
                </div>
               
                <span>Maria Jimena</span>
                <p>
                <br/><br/>Maria Jimena is a customer service expert. As the Accounting Manager and Office Manager, she knows no single approach is the right one for every client. With a background in education and business administration as well as being a law clerk, Mrs. Jimena has a unique set of management skills to handle deadlines and any stressful situation. Her passion for her work at the Tax Mechanic stems from her love of making a difference in people’s lives. In her spare time, she is a mom of three kids and adorable puppy.</p>
            </div>
          </div>
      )
  }
}