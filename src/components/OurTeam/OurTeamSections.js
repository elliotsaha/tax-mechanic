import React, { Component } from 'react'
import Button from "../Misc/Button/Button";
import "../../Sass/OurTeam/OurTeam.scss";
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
import { Link } from "react-router-dom";
import "../../Sass/OurTeam/OurTeam.scss";

export function Section1() {
    return (
        <div className="S1">
            <img className="GradientS1Mobile" src="/img/OurTeam/TopImageMobile.jpg" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/OurTeam/TopImage.png" width="100%" alt="OurTeam"/>
            <div className="S1TextContainer">
                <div className="S1Text">
                    <span>Our Team.</span>
                    <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book a Free Consultation Today"/></Link>
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
                   <a href="#Fraser"><img src="/img/OurTeam/TeamMembers/Fraser-Simpson.jpg" className="ImageContainerOurTeam" alt="Team Member"/>            </a>         
                    </div>
                    <div className="swiper-slide">
                    <a href="#Simpson"><img src="/img/OurTeam/TeamMembers/Simpson.jpg" className="ImageContainerOurTeam" alt="Team Member"/></a>       
                    </div>
                    <div className="swiper-slide">
                     <a href="#Harris"><img src="/img/OurTeam/TeamMembers/Harris.jpg" className="ImageContainerOurTeam" alt="Team Member"/></a>      
                    </div>
                    <div className="swiper-slide">
                    <a href="#Jimena"><img src="/img/OurTeam/TeamMembers/Jimena.jpg" className="ImageContainerOurTeam" alt="Team Member"/></a>                    
                    </div>
                    <div className="swiper-slide">
                    <a href="#Saha"><img src="/img/OurTeam/TeamMembers/Saha.jpg" className="ImageContainerOurTeam" alt="Team Member"/></a>                    
                    </div>
                    <div className="swiper-slide">
                    <a href="#Knox"><img src="/img/OurTeam/TeamMembers/Knox.jpg" className="ImageContainerOurTeam" alt="Team Member"/></a>                    
                    </div>
                    <div className="swiper-slide">
                    <a href="#Tanweer"><img src="/img/OurTeam/TeamMembers/Tanweer.jpg" className="ImageContainerOurTeam" alt="Team Member"/></a>                    
                    </div>
                    <div className="swiper-slide">
                    <a href="#Shahadat"><img src="/img/OurTeam/TeamMembers/Shahadat.jpg" className="ImageContainerOurTeam" alt="Team Member"/></a>        
                    </div>
                    <div className="swiper-slide">
                    <a href="#Lazar"><img src="/img/OurTeam/TeamMembers/Lazar.jpg" className="ImageContainerOurTeam" alt="Team Member"/></a>                    
                    </div>
                    <div className="swiper-slide">
                    <a href="#Jones"><img src="/img/OurTeam/TeamMembers/Jones.jpg" className="ImageContainerOurTeam" alt="Team Member"/></a>                    
                    </div>
                    <div className="swiper-slide">
                    <a href="#Vithalan"><img src="/img/OurTeam/TeamMembers/Vithalan.jpg" className="ImageContainerOurTeam" alt="Team Member"/></a>                    
                    </div>
                    <div className="swiper-slide">
                    <a href="#Abdelhaliem"><img src="/img/OurTeam/TeamMembers/Abdelhaliem.jpg" className="ImageContainerOurTeam" alt="Team Member"/></a>                    
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
                    <img src="/img/OurTeam/TeamMembers/Fraser-Simpson.jpg" className="ImageContainerOurTeam" alt="Team Member"/>
                </div>
                <span>Fraser Simpson</span>
                <p>
                <br/><br/>
                Fraser Simpson is a tax consultant with over thirty years of specialized experience in solving tax problems. In his decades of experience, he has seen the terrible consequences that the CRA’s incompetence and injustice has had on Canadians, from property liens to freezing bank accounts to harassment from CRA agents. It is for this reason that Fraser acts as an advocate for Canadians, vowing to stand up and represent taxpayers to solve their tax problems without abuse from the CRA. He’s been described as an effective, empathetic contact for clients, and seeks to become the leading tax advocate in Canada. Outside of work, Fraser Simpson is an avid marathon runner and guitarist. 
                </p>
              </div>
              <span class="anchor" id="Harris"></span>
              <div id="Harris">
                <div>
                    <img src="/img/OurTeam/TeamMembers/Harris.jpg" className="ImageContainerOurTeam" alt="Team Member"/>
                </div>
                
                <span>David Harris</span>
                <p>
                <br/><br/>Mr. Harris is a partner and founder of the Tax Mechanic. With an extensive background in sales and marketing, construction operations management and tax consulting, he is well versed in almost all tax-related matters. He is a skilled and empathetic client manager, supporting clients through the process of solving their tax problems and helping them find the best solutions .Mr. Harris also is the founder of Team Unbreakable, a registered charity dedicated to promoting better youth mental health, and a marathon runner….24 completed and counting.</p>
              </div>
              <span class="anchor" id="Jimena"></span>
            <div id="Jimena">
                <div>
                     <img src="/img/OurTeam/TeamMembers/Jimena.jpg" className="ImageContainerOurTeam" alt="Team Member"/>
                </div>
               
                <span>Maria Correa</span>
                <p>
                <br/><br/>Maria Correa is a customer service expert. As the Accounting Manager and Office Manager at the Tax Mechanic, she knows no single approach is the right one for every client. With a background in education and business administration as well as being a law clerk, Mrs. Jimena has a unique set of management skills to handle deadlines and stressful situations. Her passion for her work at the Tax Mechanic stems from her love of making a difference in people’s lives. In her spare time, she is a mom of three kids and an adorable puppy!</p>
              </div>
              <span class="anchor" id="Shahadat"></span>
            <div id="Shahadat">
                <div>
                    <img src="/img/OurTeam/TeamMembers/Shahadat.jpg" className="ImageContainerOurTeam" alt="Team Member"/>
                </div>
                
                <span>Tanweer Shahadat</span>
                <p>
                <br/><br/>Tanweer Shahadat is a numbers expert. With over 10 years of experience in the tax business and having served as a senior accountant for over 20 years, Mr. Shahadat is an expert in all financial problems. He completed his bachelor's in engineering from NED University of Engineering and Technology, Pakistan, and later he pursued a career in accounting from the Institute of Cost and Management Accountants of Pakistan. His work experience includes working as a finance manager for over 10 years in the multinational company Cadbury Pakistan Ltd. Mr.Shahadat joined our team at Tax Mechanic in 2017 and is working currently as Head Accountant. </p>
              </div>
              <span class="anchor" id="Lazar"></span>
            <div id="Lazar">
                <div>
                    <img src="/img/OurTeam/TeamMembers/Lazar.jpg" className="ImageContainerOurTeam" alt="Team Member"/>
                </div>
                
                <span>Christa Lazar</span>
                <p>
                <br/><br/>Ms. Lazar is a closer. With a background in sales, marketing, strategic planning, as well as years of experience in office and client management, Ms. Lazar brings her management expertise to the table as an accredited liaison between clients, the CRA and the Tax Mechanic. As a Certified Negotiations Expert, her ability to analyze and problem solve are one of her greatest strengths in ensuring the successful progress of a case with every detail evaluated and passed through her - assuring a victory for our clients. </p>
            </div>
              <span class="anchor" id="Simpson"></span>
              <div id="Simpson">
                <div>
                    <img src="/img/OurTeam/TeamMembers/Simpson.jpg" className="ImageContainerOurTeam" alt="Team Member"/>
                </div>
                
                <span>Stephanie Simpson</span>
                <p>
                <br/><br/>Stephanie Simpson is a research professional studying Political Science and Economics at the University of British Columbia. With a background in academic research and digital marketing, she does consulting and contract work for the Tax Mechanic, specializing in research and copywriting. She is passionate about providing interesting and quality content to Tax Mechanic prospects and clients, and seeks to educate Canadians on their options when it comes to taxes and business.</p>
              </div>
              
              <span class="anchor" id="Saha"></span>
              <div id="Saha">
                  <div>
                       <img src="/img/OurTeam/TeamMembers/Saha.jpg" className="ImageContainerOurTeam" alt="Team Member"/>
                  </div>
                 
                  <span>Turni Saha</span>
                  <p>
                  <br/><br/>Turni Saha is a digital content expert studying International Economics at the University of British Columbia. With experience in digital marketing and videography, she does promotional and advertising work for the Tax Mechanic specializing in the image and expansion of the company. She is dedicated to finding creative ways to promote the Tax Mechanic to clients and other businesses as the top tax company in Canada. </p>
              </div>
              <span class="anchor" id="Knox"></span>
            <div id="Knox">
                <div>
                    <img src="/img/OurTeam/TeamMembers/Knox.jpg" className="ImageContainerOurTeam" alt="Team Member"/>
                </div>
                
                <span>John Knox</span>
                <p>
                <br/><br/>John Knox is a client-turned-marketing expert. After being a client of the Tax Mechanic himself, he was so impressed with the vision and scope of the business that he decided to get involved, providing various marketing and sales services.. With a solution-based approach, Mr. Knox successfully engages and builds long-term relationships with clients, and aids in the promotion of the Tax Mechanic on social media and elsewhere. In his spare time, he is a multiple Ironman Triathlon athlete and marathon runner.</p>
            </div>
            <span class="anchor" id="Tanweer"></span>
            <div id="Tanweer">
                <div>
                     <img src="/img/OurTeam/TeamMembers/Tanweer.jpg" className="ImageContainerOurTeam" alt="Team Member"/>
                </div>
               
                <span>Moneeba Tanweer</span>
                <p>
                <br/><br/>Moneeba Tanweer is an artist- both with words, and a paintbrush. With the ability to talk her way into and out of the most complex situation, she is a valuable asset to the Tax Mechanic in resolving tax problems. In the past year, Ms. Tanweer has put her artistic talent to work, creating digital content for the company's social media outlets. </p>
            </div>
            
            
            <span class="anchor" id="Jones"></span>
            <div id="Jones">
                <div>
                    <img src="/img/OurTeam/TeamMembers/Jones.jpg" className="ImageContainerOurTeam" alt="Team Member"/>
                </div>
                
                <span>Meekaaeel Jones</span>
                <p>
                <br/><br/>Meekaaeel Jones is an entrepreneur and video expert at the Tax Mechanic. Born in Botswana and raised between Canada and South Africa, Meekaaeel has a global perspective on design and media. He has schooling focused on the arts, including psychology and business, and spent 5 years in a mentorship to learn marketing and film. Using the skills he learned internationally he brings a unique skillset to the Tax Mechanic, with a focus on social media management, design, and film.</p>
            </div>
            <span class="anchor" id="Vithalan"></span>
            <div id="Vithalan">
                <div>
                    <img src="/img/OurTeam/TeamMembers/Vithalan.jpg" className="ImageContainerOurTeam" alt="Team Member"/>
                </div>
                
                <span>Keval Vithalan</span>
                <p>
                <br/><br/>Keval Vithalan is a problem solver. With a commerce specialization in accounting and tax from Mumbai University, Mr. Vithalan is an expert in preparing tax documents efficiently and accurately for submission to the CRA. With extensive experience in tax and accounting in an international market, he’s well-versed  in the preparation and finalization of accounts and taxes. In his spare time, he is an avid traveller and chess enthusiast.</p>
            </div>
            
            <span class="anchor" id="Abdelhaliem"></span>
            <div id="Abdelhaliem">
                <div>
                     <img src="/img/OurTeam/TeamMembers/Abdelhaliem.jpg" className="ImageContainerOurTeam" alt="Team Member"/>
                </div>
               
                <span>Ahmed Abdelhaliem</span>
                <p>
                <br/><br/>Ahmed is a financial expert with over 10 years of experience in accounting. With a business administration degree in Egypt, Ahmed continued his education in Canada for accounting and became a CPA member. He has experience in not only analyzing financial statements and problems, but also has done some work in editing and podcasting.At the Tax Mechanic, he holds many rolls as an accountant, in IT as well as videography and editing related to marketing. </p>
            </div>
          </div>
      )
  }
}
