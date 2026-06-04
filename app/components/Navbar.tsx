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
    return <button className="navbar-button">
        <a href={props.link}>{props.text}</a>
    </button>
}