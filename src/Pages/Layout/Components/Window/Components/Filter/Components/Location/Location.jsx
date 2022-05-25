import { useState } from "react";

import "./Location.css";
import { ProfDisclosure } from "../../../Sections/Sections";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Button = ({ location, on, setLocations }) => {
  const handleClick = () => {
    if (on) {
      return;
    } else {
      setLocations((prevLocations) => {
        prevLocations.map((item) => {
          if (location === item.location) {
            return { location: item.location, on: true };
          } else {
            return { location: item.location, on: false };
          }
        });
      });
    }
  };
  return (
    <button className={`btn ${!on && "btn-var"}`} onClick={() => handleClick()}>
      {location}
    </button>
  );
};

const Location = () => {
  const [locations, setLocations] = useState([
    { location: "Belgium", on: true },
    { location: "Worldwide", on: false },
  ]);
  return (
    <ProfDisclosure cname={"location"} icon={faLocationDot} title={"Location"}>
      <div className="disclosure-content location">
        {locations.map((item,index) => {
          return (
            <Button key={index}
              location={item.location}
              on={item.on}
              setLocations={setLocations}
            />
          );
        })}
      </div>
    </ProfDisclosure>
  );
};

export default Location;
