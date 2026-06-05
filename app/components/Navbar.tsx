"use client"

import {path} from "../path";
import "./Navbar.css";

export function Navbar() {
    return (
        <div className="navbar">
            <NavbarButton link={`${path}`} text={`Home`} />
            <NavbarButton link={`${path}/details`} text={`Details`} />
            <NavbarButton link={`${path}/bio`} text={`Bio`} />
            <NavbarButton link={`${path}/schedule`} text={`Schedule`} />
            {/*<NavbarButton link={`${path}/references`} text={`References`} />*/}
        </div>
    )
}

function NavbarButton(props: {link: string, text: string}){
    return (
        <a href={props.link}>
            <button className="navbar-button">
                {props.text}
            </button>
        </a>
    )
}