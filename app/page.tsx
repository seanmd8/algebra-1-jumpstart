import "./globals.css"
import {path} from "./path";
import { homeText1, homeText2 } from "./text/home/text";

export default function Home() {
    return (
        <div className="normal-text-container home-text normal-page">
            <h1 className="page-header">Sean's Algebra 1 Jumpstart</h1>
            <p>{homeText1}</p>
            <br/>
            <p>{homeText2}</p>
            <br/>
            <a className="link-style" href="https://www.seattleschools.org/departments/mathematics/secondary-mathematics/high-school-mathematics/">
                SPS High School Mathematics
                <img className="link-img" src={`${path}/link_icon.png`}/>
            </a>
            <a className="link-style" href="https://accessim.org/9-12-aga/algebra-1?a=student">
                Illustrative Mathematics Algebra 1
                <img className="link-img" src={`${path}/link_icon.png`}/>
            </a>
        </div>
    );
}
