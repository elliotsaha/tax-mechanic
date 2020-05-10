import React from 'react';
import "./Button.scss";

export default function Button({text}) {
    return (
        <button className="Button">{text}<p className="Arrow">&#8594;</p></button>
    )
}
