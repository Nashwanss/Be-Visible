import { ProfDisclosure } from "../../../Sections/Sections";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";

import "./Companies.css";
import CompaniesData from "./CompaniesData";
import ComCard from "./Components/ComCard";

const Companies = () => {
  const company = CompaniesData.map((company) => {
    return <ComCard key={company.id} logo={company.logo} name={company.name} />;
  });

  return (
    <ProfDisclosure calssName="Companies" title="Companies" icon={faBuilding}>
      <div className="Companies-container">
        <div className="companies-body">{company}</div>
        <div className="companies-creation-container">
          <form className="company-creation-form" action="creation">
            <input
              type="text"
              className="company-creation-input"
              placeholder="Carrfour"            />
            <input
              type="password"
              className="company-creation-input"
              placeholder="******"
            />
            <div className="company-creation-btn-container">
            <button className="company-creation-btn">
              Create
            </button>
            </div>

          </form>
        </div>
      </div>
    </ProfDisclosure>
  );
};

export default Companies;
