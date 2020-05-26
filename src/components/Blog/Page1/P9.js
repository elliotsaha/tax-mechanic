import React from 'react'
import BlogPages from "../../Misc/BlogPages/BlogPages";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
export default function P1() {
    return (
            <div className="BlogMain">
                <div className="BlogS1">
            <img className="GradientS1Mobile" src="/img/OurTeam/TopImgMobile.png" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/OurTeam/TopImg.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span style={{whiteSpace: "normal"}}>Overcoming Stigma and Shame Around the Topic of Taxes</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book For a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPages date="July 10, 2019" title="Overcoming Stigma and Shame Around the Topic of Taxes" subtitle="By: Fraser Simpson" mainPara=
            {
            <div>
            <p>I’ve been doing taxes and specializing in late taxes for over 30 years. When I talk to people about it, I get the same question every time:</p> <br/>
            <p>“Wow! That’s crazy, how could someone not file their taxes for 10 years? What kind of person would do that?”</p>
            <p>I find this kind of condescending statement funny, because people don’t realize everyone makes these kinds of mistakes. A few of them, years later, ended up abashedly coming to me about the same kind of late tax problem they condemned other people for having! There’s no profile for someone whos 5, 10, 15 years late in filing their taxes. Sometimes it’s simple mismanagement, but sometimes there’s a death in the family, a history of serious medical issues, addiction issues, a lost job or failed business, or another hundred reasons. Make no mistake, any person can find themselves in this situation at some point in their life.</p>
            <p>I have counselled astronauts, policemen, politicians, scientists, teachers, clergymen, accountants, lawyers, and famous actors. Many of them were well known in their respective communities, and were highly successful. But they were all suffering from the same dirty secret- they hadn’t filed their taxes. Would you judge them?</p>
            <p>Coming clean isn’t only about overcoming stigma. It’s a serious problem to stay silent about late taxes. Anytime – maybe even today or tomorrow – the CRA can come knocking at your door and double or triple your amount owing. If you don’t want to tell your friends, family, or spouse, that’s fine. At the Tax Mechanic we understand it’s also stressful to get help, especially when many professionals are adversarial lawyers who will cite grave offences, statutes, and laws, or judgemental accountants who will give you side-eye as they file for you. Call the CRA? You might trigger and audit that can cause wages to be garnished, properties liened, and you bank accounts frozen.</p>
            <p>But don’t stress about it. Lucky for you, there’s an accountant in Canada who not only understands and doesn’t judge that sometimes people get themselves into bad situations, but also has an advanced skill set in dealing with the CRA. The Tax Mechanic. We don’t care about how you came into this situation, we just care about how we’re going to get you out of it. Being in the field for 30 years, dealing with tax court and the CRA daily, certainly helps with that. No one knows how to deal with the CRA better than me.</p>
            <p>If you haven’t filed your taxes, don’t stress. The Tax Mechanic is 100% confidential, 100% reliable, and 100% on your team. Don’t wait.</p>
            <p>
            <span>Contact</span>
            <br/>
            I have successfully filed hundreds of VDP applications with a 100% success rate!
            <br/>
            If you have any questions about the process you can contact;
            <br/><br/>
            Tax Mechanic<br/>
            180 John St<br/>
            Toronto, ON<br/>
            M5T 1X5<br/>
            taxmechanic.ca<br/>
            647-499-5693<br/>
            david@taxmechanic.ca<br/>
            </p>
            </div>
            }/>
        </div>
    )
}
