"use client"

import {path} from "../path";
import "./Portrait.css";

export default function Portrait(props: {src: string, alt: string}){
    return <img className="portrait" src={`${path}/${props.src}`} alt={props.alt} title={props.alt} />
}