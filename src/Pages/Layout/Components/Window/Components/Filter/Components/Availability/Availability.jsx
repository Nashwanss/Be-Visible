import { useState } from "react";

import { ProfDisclosure } from "../../../Sections/Sections";

const Availability = () => {
  const [otw, setOtw] = useState(false);
  const [OTWBtnClass, setOTWBtnClass] = useState("btn");

  const handleClick = () => {
    console.log(otw)
    if (OTWBtnClass === "btn") {
        setOtw(true)
      setOTWBtnClass("btn btn-var");
    } else {
        setOtw(false)
      setOTWBtnClass("btn");
    }
  };



  return (
    <ProfDisclosure cname={"availability"} title={"Availability"}>
      <div className="disclosure-content availability">
        <button className={OTWBtnClass} id="otw" onClick={() => handleClick()}>
          Open to work
        </button>
      </div>
    </ProfDisclosure>
  );
};

export default Availability;
