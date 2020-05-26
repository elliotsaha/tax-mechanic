import React from 'react'
import BlogPages from "../../Misc/BlogPages/BlogPages";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
export default function P4Page2() {
    return (
            <div className="BlogMain">
                <div className="BlogS1">
            <img className="GradientS1Mobile" src="/img/OurTeam/TopImgMobile.png" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/OurTeam/TopImg.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span style={{whiteSpace: "normal"}}>Inside the CRA – Part One</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book For a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPages date="July 2, 2018" title="Inside the CRA – Part One" subtitle="By: Fraser Simpson" mainPara=
            {
            <div>
            <p>
            All sources from the Canada Revenue Agency Website, or third-party articles regarding personal experience with the CRA and job analyses. All sources/links are linked in the report for easy access. Any missing information is due to a lack of public access, such as with administrative statistics.
            </p>
            <span>CRA Structural/Administrative Information</span>
            <p>
            The Canada Revenue Agency is a Canadian federal agency that administers tax laws for the Government of Canada and for most provinces and territories. It also governs international trade legislations, and various social and economic benefit and incentive programs delivered through the tax system. It’s responsibilities extend to the registration of charities in Canada and tax credit programs. 
            </p>
            <span>Hierarchy</span>
            <ul>
                <li>The Board of Management is at the head of the agency, and consists of 15 members, 11 of whom are nominated by the provinces and territories.</li>
                <li>At the head of the board of management is the Commissioner and Chief Executive Officer, who as of August 1, 2016, is Bob Hamilton.</li>
                <li>The head office that houses the Board of Management is in Ottawa and is responsible for budgeting, planning, training, rulings, reporting to the minister, and other high level functions.</li>
                <li>The CRA is divided into 5 regions for administrative purposes, including the Atlantic, Quebec, Ontario, the Prairie, and the Pacific. Each region has several tax services offices (TSOs), which carry out audits and collections.</li>
                <li>There is also Tax Centre’s (TC) in these areas, which are responsible for processing tax returns and conducting reviews of the returns filed. Canada has seven Tax Centre’s:
                <ul>
                    <li>Jonquière Tax Centre, Shawinigan-Sud Tax Centre, St. John’s Tax Centre, Sudbury Tax Centre, Summerside Tax Centre, Surrey Tax Centre, and Winnipeg Tax Centre.</li>
                </ul>
                
                </li>
                <li>Within the TSOs and TCs work auditors, which are divided into six levels- junior officers are given the designation AU1, earn a salary of approximately $45,000, and typically audit small and medium sized businesses. The designations go up to AU6, and with each designation the more specialization is required, and more complex the work becomes. In the AU6 range, auditors are typically dealing with large multinational corporations, and can earn a salary of up to $125,000.</li>
            </ul>
            <span>Programs</span>
            <p>The CRA runs three major programs:</p>
            <ul>
                <li>Voluntary Disclosures Program (VDP): A program that allows taxpayers to avoid penalty or prosecution if they choose to correct inaccurate or incomplete information, or to disclose information previously withheld to CRA. In order to be accepted into this program, the taxpayer’s action or omission must involve the application, or potential application of a penalty by CRA and he/she is willing to make a complete disclosure.</li>
                <li>Informant Leads Program (ILP): This program allows for citizens to report individuals or businesses who may be committing tax evasion or other tax-related offences.</li>
                <li>Criminal Investigations Program (CIP): Investigators from this program are responsible for suspected cases of tax evasion, fraud and other serious violations of tax laws.Criminal Investigators are given badges and can only exercise investigative power in compliance with the Canadian Charter of Rights and Freedoms.</li>
            </ul>
            <span>Taxpayer Information and Statistics</span>
            <p>Statistics</p>
            <ul>
            
    <li>26.1 million: Number of people filing Canadian tax returns (2012 tax year).</li>
    <li>$127.1 billion: Total personal income tax collected (federal, provincial and territorial) in the 12 months to March 31, 2013 (up 2.8% from $123.7 billion in 2011-12).</li>
    <li>$1,641: Average refund during the 2012 tax-filing season (up $22 from the previous year).</li>
    <li>76%: %age of income tax returns filed electronically during the 2012 tax-filing season.</li>
    <li>$8.5 billion: Total value of charitable donations claimed (2011).</li>
    <li>$1,491: Average charitable donation claimed per tax filer (2011).</li>
    <li>258,465: Number of tax filers in the top one % of income earners (2011).</li>
    <li>$209,600: Minimum annual income to be in the top one % (2011).</li>
    <li>20.8%: Proportion of total income taxes collected paid by the top one % (2011), which is down from a 2007 peak of 23.3%.</li>
    <li>$443,500: The average income of the top one % (2011).</li>
    <li>$37,900: The average income of the remaining 99 % (2011).</li>
    <li>$146,600: The average income tax paid by the top one % of income earners (2011).</li>
    <li>$5,600: The average income tax paid by the remaining 99 % (2011)</li>
    <li>42.5%: The average percentage of income paid through taxes (2017 report)</li>
    <li>In 2016, An average family with an income of about $83,000 paid roughly $35,000 in taxes (that includes federal, provincial and local taxes, which includes income, payroll, sales and property taxes)</li>
    <li>Until 2018, the CRA refused to release the data necessary to calculate the federal tax gap, but places estimates at between $6 and $15 billion.</li>
    <li>In 2018, according to a new report by the Conference Board of Canada, stats showed that the government forgoes $47.8 billion dollars in uncollected taxes every year, not including the billions of dollars that are not included in that figure from provincial and municipal taxes</li>

            </ul>
            <span>CRA Complaints</span>
            <ul>
                
    <li>CRA call centre’s blocked 54% of the 53.5 million calls it received from taxpayers between March 2016 and March 2017, according to a report released by the Auditor General of Canada</li>
    <li>“The Agency blocked calls so that it could meet its service standard for agent wait times,” the report said, noting that its mandates are to answer calls within two minutes or less than 75 to 80% of the time.</li>
    <li>Over 12 months, CRA agents responded to just 32% of calls. Another 14% of calls were answered by an automated self-service option.</li>
    <li>The auditor general also made 255 calls to the CRA between February and April of 2017 to determine the accuracy of information provided by agents- even when an agency could be reached, they responded with incorrect information almost 30% of the time</li>
    <li>To some specific questions, incorrect information was provided well over 50% of the time. To the question, “When will the interest begin to be charged on my 2015 initial assessment?” CRA agents responded incorrectly to 84% of questions.</li>
    <li>Another report, by the Canadian Broadcasting Corporation in 2015, reported that an internal survey determined that one of every four calls asking for help from the Canada Revenue Agency’s call centres gets bad information in regards to business.</li>
    <li>“The issues of inadequate training compounded with ample attitude are worse now than 20 years ago. I was speaking to a colleague who had complained about this to a senior CRA official. His response was that CRA expects tax lawyers and accountants to help train their people. Do you train your roofer, plumber, or mechanic?”</li>
            </ul>
            <span>Tax Convictions</span>
            <ul>
                <li>Typically, an individual can face prison time for such offences as providing a false or deceptive statement on a tax return, destroying, altering, or disposing of books and records and willfully evading or attempting to evade taxes. You can also land in jail for tax evasion or fraud relating to claiming an inappropriate tax refund or credit, such as one larger than what you were properly entitled to receive.</li>
                <li>Last year’s federal budget expanded the list of criminal offences that could result in jail time when the government specifically targeted the underground economy and the use of electronic suppression of sales (ESS) software, which allows businesses to under-report their revenues and thus avoid paying income and sales taxes.</li>
                <li>Tax Conviction cases (all taken from the CRA public records)
                    <ul>
                        <li>The Canada Revenue Agency (CRA) announced that Ajay Sharma of Brampton, Ontario was sentenced in the Ontario Court of Justice in Brampton on April 27, 2018 to a conditional sentence of two years less a day, to three years of probation, and to a court imposed fine of $96,946. Sharma pleaded guilty on September 25, 2017, to one count of fraud over $5,000 under the Criminal Code. </li>
                        <li>
                        A CRA investigation revealed that Sharma, as owner and operator of a tax preparation business, S & S Associates, prepared 100 fraudulent individual tax returns for 37 clients for the years 2009 to 2012. In the preparation of his clients’ tax returns, Sharma created fictitious business losses totalling $2,577,221, resulting in the evasion or attempted evasion of a total of $488,178 in federal taxes. Sharma personally benefited $96,946 from this scheme by charging his clients a percentage of the unwarranted refunds they obtained from the CRA.
                        </li>
                    </ul>
                    <br/><br/>
                    <ul>
                       <li>The Canada Revenue Agency (CRA) announced that real estate developer Rajinder Singh Mann of Surrey, British Columbia, was sentenced to a conditional sentence order of two years less a day, which includes nine months house arrest and 150 hours of community service. He was also given two years to pay the total fine of $462,092, representing 100% of the goods and services tax/harmonized sales tax (GST/HST) that he evaded. Mr. Mann pleaded guilty on January 29, 2018, in the Provincial Court of British Columbia, to seven counts of GST/HST fraud under the Excise Tax Act.</li>
                       <li>        Mr. Mann is the sole director and shareholder of Millenium Century Investments Ltd. (“Millenium”), a real estate development company. A CRA investigation determined that Mr. Mann contravened the Excise Tax Act by failing to report and remit the GST/HST collected from the sale of 44 units in a Maple Ridge townhouse complex, built by Millenium. All 44 units were sold between May 2010 and October 2011</li>
                    </ul>
                    <br/><br/>
                    <ul>
                        <li>The Canada Revenue Agency (CRA) announced that Jeff Dyck, an administrator for One World United Inc. had his appeal denied today by the Winnipeg Court of Appeal in relation to his sentence on tax evasion charges. He will be remanded into custody where he will serve the remaining portion of his 4 year sentence. In addition, he will have to pay all federal taxes owing, plus related interest, and any penalties that apply.</li>
                    </ul>
                    <br/><br/>
                    <ul>
                        <li>
                        The CRA investigation showed that, for the 2008 to 2010 tax years, Mr. Jeff Dyck and Mr. Neil Friesen contravened the Income Tax Act by creating and marketing a tax write-off scheme. The scheme encouraged participants to make cash donations to a venture called One World United Inc. in exchange for false invoices. These false invoices claimed business losses that were four times the original donation amount. The scheme also coached participants to claim an improper Goods and Services Tax and Harmonized Sales Tax (GST/HST) refund.   
                        </li>
                        <li>
                        On September 28, 2015, Mr. Dyck and Mr. Friesen pleaded guilty to the charges and were sentenced to three years in jail and given until March 31, 2016, to pay the court-imposed fine of $1,414,638 each. They failed to pay the fine by the required date so Mr. Dyck and Mr. Friesen were sentenced to an additional year in jail bringing their sentence to a total of four years on January 27, 2017. Only Mr. Dyck eventually appealed his sentence.
                        </li>
                        <li>The decision read on Mr. Dyck’s appeal resulted in an increased fine of $2,366,367 to represent 100% of the tax evaded. Mr. Dyck was remanded into custody to serve out the remainder of his four-year sentence.</li>
                    </ul>
                    <br/><br/>
                    <ul>
                        <li>The Canada Revenue Agency (CRA) announced that Kevin Ekow Plange of Toronto, Ontario, was sentenced on March 20, 2018 to 18 months in jail and to two years of probation. On September 27, 2017, Plange pleaded guilty in the Superior Court of Justice in Toronto to one count of fraud over $5,000 under the Criminal Code. </li>
                        <li>A CRA investigation revealed that between August 7, 2013 and July 28, 2014, Plange prepared and submitted to the CRA 28 fraudulent direct deposit forms, to change the direct deposit information for the accounts of 12 corporations. Plange falsified these direct deposit forms to direct GST/HST refunds and other payments properly payable to the corporations into bank accounts held by him with various Canadian banks. As a result, Plange redirected $41,831,073 into bank accounts he controlled. Ultimately, with the exception of $15,000, the CRA recovered the funds.</li>
                    </ul>
                </li>
                <li>
                A horror story of CRA incompetence: <br/>
                <a href="https://www.ctvnews.ca/horror-stories-when-dealing-with-the-taxman-1.603824">https://www.ctvnews.ca/horror-stories-when-dealing-with-the-taxman-1.603824</a>
                </li>
            </ul>

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
