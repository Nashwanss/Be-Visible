import { useEffect, useState } from "react";

import "./Promotions.css";
import { ProfDisclosure } from "../../../Sections/Sections";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Button = ({ promotion, on, index, setPromotions }) => {

  
  const handleClick = () => {
    setPromotions(prevPromotions => {
      const newPromotions = [...prevPromotions]
      newPromotions.map((promo,i) => {
        if (i === index) {
          const newPromo = promo
          newPromo.on = !newPromo.on
          return newPromo
        } else {
          return promo
        }
      })
      return newPromotions
    })
  }
  return (
    <button className="btn" onClick={() => handleClick()}>
      {promotion}
    </button>
  );
};

const Promotions = () => {
  const [promotions, setPromotions] = useState([
    { promotion: "< Johnson 7 />", on: false },
    { promotion: "< Lovelace 8 />", on: false },
    { promotion: "< Hopper 3 />", on: false },
    { promotion: "< Bouman 4 />", on: false },
    { promotion: "< Sprint 1 />", on: false },
    { promotion: "< Swartz 6 />", on: false },
  ]);

  useEffect(() => {
    console.log(promotions)
  },[promotions])
  return (
    <ProfDisclosure
      cname={"promotions"}
      icon={faGraduationCap}
      title={"Promotions"}
    >
      <div className="disclosure-content promotions">
        {promotions.map((item, index) => {
          return (
            <Button
              key={index}
              promotion={item.promotion}
              on={item.on}
              index={index}
              setPromotions={setPromotions}
            />
          );
        })}
      </div>
    </ProfDisclosure>
  );
};

export default Promotions;

