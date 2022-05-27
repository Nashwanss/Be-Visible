import { useState } from "react";

import { FilterDisclosure } from "../../../Sections/Sections";

import "./Availability.css";

const Availability = () => {
  const [otw, setOtw] = useState(false);
  const [OTWBtnClass, setOTWBtnClass] = useState("btn");

  const handleClick = () => {
    if (OTWBtnClass === "btn") {
        setOtw(true)
      setOTWBtnClass("btn btn-var");
    } else {
        setOtw(false)
      setOTWBtnClass("btn");
    }
  };



  return (
    <FilterDisclosure cname={"availability"} title={"Availability"}>
      <div className="disclosure-content availability">
        <button className={OTWBtnClass} id="otw" onClick={() => handleClick()}>
          Open to work
        </button>
      </div>
    </FilterDisclosure>
  );
};

export default Availability;
