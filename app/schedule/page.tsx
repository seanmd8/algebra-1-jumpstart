import Unit from "../components/Unit";
import "../globals.css"
import { unit1Date, unit1Text, unit1Title } from "../text/units/unit1";
import { unit2Date, unit2Text, unit2Title } from "../text/units/unit2";
import { unit3Date, unit3Text, unit3Title } from "../text/units/unit3";
import { unit4Date, unit4Text, unit4Title } from "../text/units/unit4";

export default function Schedule() {
  return (
      <div>
            <h1 className="page-header">Schedule</h1>            
            <Unit title={unit1Title} date={unit1Date} text={unit1Text}/>
            <Unit title={unit2Title} date={unit2Date} text={unit2Text}/>
            <Unit title={unit3Title} date={unit3Date} text={unit3Text}/>
            <Unit title={unit4Title} date={unit4Date} text={unit4Text}/>
      </div>
  );
}