import React from 'react'
import BlogPages from "../../Misc/BlogPages/BlogPages";
import Button from "../../Misc/Button/Button";
export default function P7Page4() {
    return (
            <div className="BlogMain">
                <div className="BlogS1">
            <img className="GradientS1Mobile" src="/img/OurTeam/TopImgMobile.png" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/OurTeam/TopImg.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span style={{whiteSpace: "normal"}}>Would You Like To Put That Glass Of Water Down?</span>
                        <div className="ButtonContainerS1">
                        <Button className="Button" text="Book For a Free Consultation Today"/>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPages date="June 13, 2017" title="Would You Like To Put That Glass Of Water Down?" subtitle="By: Fraser Simpson" mainPara=
            {
            <div>
            <p>
            We all have challenges we face and various coping strategies, good or bad, to deal with them. Recently I was reminded of the glass of water “stress test”. Think about how heavy a 10 oz. glass of water is. Not that heavy, right? But the absolute weight doesn’t matter. It really depends on how long you hold it. If you hold it raised in your hand for a minute, it is not a problem.  If I hold it for 30 minutes your arm will begin to ache and feel uncomfortable. The longer you hold it the harder it will become until you just can’t do it anymore.
            <br/><br/>
            The stresses and worries in business and work are like holding that glass of water. Thinking about those problems not that often, you can probably deal with it. Think about them a bit longer and they might begin to hurt. If you start to think about them day and night, you will feel paralyzed – sometimes incapable of doing anything.
            <br/><br/>
            Being Tax Experts for over 30 years we deal with all kinds of clients just wanting to “get things right” with the CRA and wanting to put that “glass of water” down. Depending on the situation it may take us some time to empty that glass. Maybe at first we can just make it so it is not as full, but eventually with our help this burden can be eliminated.
            <br/><br/>
            Tax and accounting problems can be one of those stressors that at first may feel like not that big a deal but as time moves on the burden of tax debt or not filing can be something that begins to hurt your quality of life. At the Tax Mechanic we do what we do because we simply love solving these problems and making our clients lives hopefully a little bit better and in some cases a whole lot better!
            </p>
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
