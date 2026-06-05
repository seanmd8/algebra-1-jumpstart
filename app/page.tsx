import "./globals.css"
import { homeText1, homeText2 } from "./text/home/text";

export default function Home() {
    return (
        <div className="normal-text-container home-text">
            <p>{homeText1}</p>
            <br/>
            <p>{homeText2}</p>
            <br/>
            <a className="link-style" href="https://www.seattleschools.org/departments/mathematics/secondary-mathematics/high-school-mathematics/">
                SPS High School Mathematics
            </a>
            <a className="link-style" href="https://accessim.org/9-12-aga/algebra-1?a=student">
                Illustrative Mathematics Algebra 1
            </a>
        </div>
    );
}
