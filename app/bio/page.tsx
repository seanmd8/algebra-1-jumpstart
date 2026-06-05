import Portrait from "../components/Portrait";
import bio from "../text/bio/bio";
import "./bio.css";

export default function Bio() {
    return (
        <div className="bio-div">
            <Portrait src="/Sean_Portrait.jpg" alt="Sean Dunbar"/>
            <p className="normal-text bio-text">{bio}</p>
        </div>
    );
}