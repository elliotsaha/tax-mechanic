import React from 'react'
import "./BlogPages.scss"
export default function BlogPages({date, title, subtitle, mainPara}) {
    return (
        <div className="MainContainer">
            <div className="Date">{date}</div>
            <div className="Title">{title}</div>
            <div className="Sub">{subtitle}</div>
            <div className="MainBody">
                {mainPara}
            </div>
        </div>
    )
}
