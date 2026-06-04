"use client"

import "./Unit.css";
import "../globals.css";
import { useState } from "react";
import {path} from "../path";

export default function Unit(props: {title: string, date: string, text: string[]}){
    var [expanded, setExpanded] = useState(false);
    const listItems = props.text.map((t, i) => {
        return <p className="normal-text unit-text" key={i}>{t}</p>
    })
    const toggle = () => {
        setExpanded(!expanded);
    }
    const arrow = expanded ? `${path}/up.png` : `${path}/down.png`;
    return (
        <div className="unit">
            <div className="unit-header" onClick={toggle}>
                <img src={arrow} alt="toggle expanded" className="unit-expander"/>
                <h2 className="unit-title">{props.title}</h2> 
                <p className="unit-date">{props.date}</p>
            </div>
            {expanded ? <ul className="unit-body">{listItems}</ul> : <></>}
        </div>
    )
    
}