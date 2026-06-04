"use client"

import "./Portrait.css";

export default function Portrait(props: {src: string, alt: string}){
    return <img className="portrait" src={props.src} alt={props.alt} title={props.alt} />
}