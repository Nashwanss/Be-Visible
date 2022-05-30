import { useState } from "react";

import "./Location.css";
import { FilterDisclosure } from "../../../Sections/Sections";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Button = ({ location, on, setLocations }) => {
  const handleClick = () => {
    if (on) {
      return;
    } else {
      setLocations((prevLocations) => {
        const newLocations = prevLocations.map((item) =>
          item.location === location
            ? { ...item, on: true }
            : { ...item, on: false }
        );
        return newLocations;
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
    <FilterDisclosure cname={"location"} icon={faLocationDot} title={"Location"}>
      <div className="disclosure-content location">
        {locations.map((item, index) => {
          return (
            <Button
              key={index}
              location={item.location}
              on={item.on}
              setLocations={setLocations}
            />
          );
        })}
      </div>
    </FilterDisclosure>
  );
};

export default Location;
