import React from 'react';
import "./Service.scss";

export default function Service({title, text}) {
    return (
        <div className="Service">
            <div className="ServiceText">
                 <div className="Title">
                    {title}
                </div>
                <p className="Para">
                    {text}
                </p>
            </div>
        </div>
    )
}