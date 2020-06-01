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
                        <span>CRA Tax Reduction.</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text">
            <p>At the Tax Mechanic, we pride ourselves on being a full-service tax company, offering a wide range of tax related services geared towards both individuals and businesses. From tax resolution, prior year income tax return preparation, and back tax debt relief to ongoing monthly bookkeeping and annual personal and corporate tax return preparation, the Tax Mechanic can help! We help taxpayers across the country with all of their tax needs. We offer free consultations and all of our services come at an affordable fixed cost, so there are no surprises down the road or hidden fees. Our goal is to offer an industry leading quality product at an affordable cost, but more importantly, we will customize tailored products to fit your specific situation and needs.<br/>
</p>
            <span className="Title">Step 1: Investigation</span><br/>

            <p>Our Investigation process begins by filing a Tax Authorization Information Form T1013 with the CRA on your behalf to obtain a complete record of your account. Your dedicated practitioner will then make a phone call to the dedicated priority practitioner services line to determine additional important information regarding your tax liabilities. At the same time, our investigative team will analyze your financials and compare them to the CRA to determine the best course of action given your specific situation. Upon completion of our investigation, you will be contacted with our findings, and be given your options with regards to resolving your tax issues once and for all.</p><br/>

            <span className="Title">Step 2: Tax Prep & Resolution</span><br/>

            <p>The resolution phase of our process begins by gathering more in depth financial information and supporting documentation to prepare an in-depth proposal for submission to the CRA. Many resolutions require significant follow up and contact with the CRA. The length of time to obtain a resolution of your tax liabilities can last anywhere from 1 week to as long as one year and depends on the program for which you qualify for. Upon completion of the resolution, we will contact you to explain the specific details of your resolution and give you any important information necessary to ensure that this problem doesn’t reoccur. The Tax Mechanic will also remain on file as CRA Representative to guarantee that there are no complications. During the course of our tax resolution program and beyond, you may get in touch with our tax professionals at any time with questions, concerns or changes you may have to make. Our team is here for you and our goal is to not only fix your tax issues, but to keep you tax debt free in the future, and become your destination for all future tax needs.</p>
            <br/>
            <span className="Title">We offer, but are not limited to, these types of debt resolutions:</span><br/>

            <span className="Title">OFFERS IN COMPROMISE (OIC)</span><br/>

            <p>Taxpayers that are not currently in financial hardship, but may be very close to that threshold, may be able to qualify for an Offer in Compromise. This mostly applies to those who would be put into financial hardship if they added tax debt payments to their current list of expenses. In this situation, the CRA determines the maximum amount they would be able to get from a taxpayer without causing financial hardship. Then the remainder of the debt is DEFERRED, and the individual is released from their liability as soon as the taxpayer meets the conditions of their agreement with the CRA. The CRA will factor in disposable income and any assets held by the taxpayer when making a determination for an offer in compromise. An offer in compromise can wipe the slate clean with the CRA for substantially less than what the taxpayer owes. Offers in Compromise are difficult to achieve but offer a substantial benefit to struggling taxpayers if they qualify. The Tax Mechanic has tremendous experience in determining a taxpayer’s eligibility for an offer in compromise and also has tremendous success in negotiating our offers in compromise we submit for our clients.</p>
            <br/>
            <span className="Title">INSTALLMENT AGREEMENT (IA)</span><br/>

            <p>The installment agreement is a method of tax debt resolution that allows an individual to pay off their balance over a period typically ranging from 6 months to ten years. Depending on the amount owed to the CRA, the period can vary. The Tax Mechanic determines the amount of each monthly payment based on the taxpayer’s personal assets, property and other financial information and negotiates with the CRA to achieve that payment. These agreements come in many forms to accommodate other financial obligations and the needs of the taxpayer while still satisfying the CRA tax debt.</p><br/>

            <span className="Title">STAIR STEP AGREEMENT (SSA)</span><br/>

            <p>This form of Installment Agreement exists to allow taxpayers to finish payment on a large expense, such as a car loan or child support payments. This plan begins with a divided payment schedule in which the larger expense gets the main focus and small installments are collected on the unpaid tax balance. Once the outstanding balance on the initial expense is completed (usually within 12 months), the taxpayer switches the entire payment to the back taxes over the following 48-60 months. This program eases the stress of tax payments without causing other financial obligations to default.</p><br/>

            <span className="Title">STREAMLINE INSTALLMENT AGREEMENT (SIA)</span><br/>

            <p>This type of installment agreement comes with a couple of strict guidelines that determine an individual’s eligibility. There are some added benefits that make this program worthwhile, such as not having to disclose all of a taxpayer’s financial information to the CRA. The assessed or actual tax balance owed must be less than or equal to $50,000. Additionally, the total balance, which includes accrued penalties and interest, must be paid to the CRA within a 60-72-month period. This arrangement is ideal for taxpayers with substantial assets or disposable income.</p><br/>

            <span className="Title">TRADITIONAL INSTALMENT AGREEMENT (TIA)</span><br/>

            <p>This straight-forward payment method is a simple installment plan in which the taxpayer settles their entire tax debt over many payments. The amount is divided into monthly installments over the 10-Year Statute of Limitations and is based from the taxpayer’s current financial situation. This program removes the stress of trying to make a full one-time payment and grants the taxpayer peace of mind. This program allows the taxpayer to pay-off their tax debt obligations over time without being at risk for a levy or wage garnishment.</p><br/>

            <span className="Title">CURENTLY NOT COLLECTIBLE STATUS (CNCS)</span><br/>

            <p>Taxpayers that are struggling with financial hardship may be able to find a way to be completely relieved of their CRA debt. Currently Not Collectible Status removes the taxpayer’s tax balances from active collections with the CRA. A taxpayer provides documentation of their current financial condition, and if such documentation shows that the taxpayer cannot meet their basic obligations, let alone their tax liability, the CRA will declare a financial hardship. As the Statute of Limitations on a tax debt is 10 years, the individual must continually file their tax returns and provide any requested information to the CRA in a timely manner. Anytime a taxpayer receives a raise or has their income to expense ratio change such that they are no longer in financial hardship, they may lose their Currently Not Collectible Status. At this point, a new payment plan may be drawn up to settle the balance with the CRA based on the new financial situation in which the taxpayer finds themselves. The Currently Non Collectible Status allows taxpayers some relief while they try to improve their financial condition.</p><br/>
            
            <span className="Title">PENALTY ABATEMENT (PA)</span><br/>

            <p>Penalties can quickly turn a tax debt situation from bad to worse. With our penalty abatement assistance, the added penalties to tax obligations may be removed. Remember, a penalty abatement only applies to penalties. The CRA does not currently abate interest. To accomplish a penalty abatement, an individual can submit proof that they missed payments or filing deadlines or other noncompliant behavior for uncontrollable reasons. In addition, they must show that they are working to rectify the problem by filing any missing forms or returns and paying the required balances.</p>
            </div>
        </div>
    )
}
