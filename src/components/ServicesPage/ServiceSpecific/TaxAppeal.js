import React from 'react'
import "../../../Sass/Service/ServiceSpecific/ServiceSpecific.scss";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
export default function TaxRepresentation() {
    return (
        <div>
             <div className="Service">
             <img className="GradientS1Mobile" src="/img/Services/TopImageMobile.jpg" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/Services/TopImage.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span>Tax Appeal.</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text">
                <span className="Title">
                CRA Tax Appeals and Objections
                </span>
                <p className="para">
                There are times taxpayers believe that the CRA has unfairly assessed them. This is quite normal as the CRA agents are human too and humans make errors. If errors are not corrected, it is the taxpayers who bear the financial consequences. If you believe that you should not owe the amount of taxes that the CRA has assessed then it is time to contact the Tax Mechanic. If you do decide to file a tax appeal, then you need to file it within the timelines dictated by tax law, which is 90 days after you receive the Notice of Assessment or Reassessment. The CRA must cease legal collection action once you file a tax appeal.<br/><br/>
The CRA can take legal action to collect their taxes, such as income garnishment, liens against taxpayer’s property, they can direct sheriffs to sell taxpayers’ assets, freeze taxpayer’s bank accounts. Only a tax appeal can effectively stop the legal collection action. A tax appeal is a serious and complicated matter. You need an experienced tax representative on your side.<br/><br/>
At the Tax Mechanic, our professionals deal with the CRA every day, and can present your case to the CRA on its own merits, with full knowledge of all the rules and regulations.<br/><br/>

                </p>
                <span className="Title">
                When you receive and Notice of Assessment

                </span>
                <p className="para">
                If you receive a notice of assessment from the CRA chances are you will disagree with the tax assessed. To get your attention these assessments can be ridiculously high. Within 90 days from receiving the assessment a notice of objection should be filed.
When representing our clients, the first step is to stop the collection process. If we are then successful during the appeal process, no additional interest on back taxes will be payable.<br/><br/>
It is important when dealing with all our clients that we look at the risk and reward of such an appeal. If the appeal is not successful the taxpayer must pay the additional taxes, plus interest on the outstanding back tax amount. So, a strategy for example could be while the appeal process is underway you may want to pay the back-tax balance if the objection process is going to take a lengthy time to avoid further interest charges.

                    
                
                </p>
                
                <span className="Title">
                Tax Court is another area where we have plenty of experience.

                </span>
                <p className="para">
                Taxpayers appealing assessments from the Canada Revenue Agency (“CRA”) to the Tax Court of Canada (the “TCC”) always face well-trained, experienced lawyers from the tax division of the Department of Justice (“Justice”). This may seem intimidating; especially since most taxpayers electing to go to court are unprepared to stand in front of a judge, or have no case and are simply stalling for time, or are just taking the CRA to court for the “hell of it” (to each their own).<br/><br/>
Nevertheless, it is important to recognize that the CRA and Justice are not unbeatable. In fact, not only did the CRA lose in a recent series of judgements by the TCC, they got slaughtered. From a credit union litigating very complex issues to the “stay-at-home” mom, taxpayers have succeeded in Court while the CRA has been taken to the woodshed.<br/><br/>
The Court has mechanisms in place to ensure that the cost of successfully litigating an issue will not be entirely coming out of the pocket of the taxpayer. Moreover, the TCC has begun to recognize the significant role costs play in tax litigation. In a welcome departure from the Tax Court’s traditional practices, the judgements discussed below highlight cases where taxpayers were not only successful against the CRA but were also awarded costs.

                </p>
                <span className="Title">
                Tax Court of Canada

                </span>
                <p className="para">
                TCC is a federal superior court which was established in 1983 to deal with matters involving companies or individuals with tax issues.<br/><br/>
The litigation of a federal tax dispute is commenced by a taxpayer filing a Notice of Appeal in the Tax Court of Canada. Cases may proceed either by way of Informal or General Procedure. The Informal Procedure is a simplified process available to taxpayers where the total tax and penalties (but not interest) at issue is CAD$25,000 or less per taxation year ($50,000 in the case of GST).<br/><br/>
In General Procedure cases, discoveries are held by exchange of documents followed by the examination, without a judge, of one witness on behalf of each party. One or both parties may then apply for a hearing date where witnesses will be examined and cross-examined before a judge and documents formally entered into evidence. Trials in the Tax Court of Canada typically take one day or less, particularly where the parties have agreed on all or substantially all of the facts, but in more complex and contentious cases the trial may not be completed for several weeks or even months.

                </p>
                <span className="Title">
                    Representation Case Study.
                </span>
                <p className="para">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus ducimus cum sit illo veritatis culpa nam, mollitia pariatur in magnam numquam illum consequuntur facere fugiat? Repudiandae eos tenetur debitis similique. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, facilis explicabo! Reprehenderit, aliquam sint. Corrupti delectus molestiae hic illo deserunt? Iste delectus similique quia at reiciendis corrupti expedita eaque laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sunt impedit, obcaecati reprehenderit similique veniam sequi provident, qui minus accusamus totam voluptatum ab ducimus accusantium nesciunt quos officia fugiat distinctio. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem quas cumque nulla eligendi architecto, in animi laboriosam soluta impedit cum doloribus explicabo illum. A ullam ad temporibus vel odit dolor?
                </p>
            </div>
        </div>
    )
}
