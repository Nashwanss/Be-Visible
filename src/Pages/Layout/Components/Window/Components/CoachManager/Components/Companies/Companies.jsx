import { useState } from "react";

import { ProfDisclosure } from "../../../Sections/Sections";

import './Companies.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faXmark } from "@fortawesome/free-solid-svg-icons";

const CompanyButton = ({ id, name, isDisabled, deleteCompanyAccount }) => {
    return (<button id={id} className="btn"> {name} {!isDisabled && <FontAwesomeIcon icon={faXmark} onClick={() => deleteCompanyAccount(id)} />} </button>);
}

const Companies = () => {

    const [isDisabled, setIsDisabled] = useState(true);
    const [hasEdited, setHasEdited] = useState(false);

    const [companies, setCompanies] = useState([{ id: "1", name: "Entel" }, { id: "2", name: "Telefonica" }, { id: "3", name: "Bayer" }, { id: "4", name: "BHP" }, { id: "5", name: "BeCode" }]);

    const editMode = () => {
        if (!hasEdited) {
            setIsDisabled(!isDisabled);
            setHasEdited(true)
        } else {
            setIsDisabled(!isDisabled);
            // here we need to send the data to the server
            setHasEdited(false)
        }
    }

    const deleteCompanyAccount = (id) => {
        const newCompanies = companies.filter(company => company.id !== id)
        setCompanies(newCompanies)
    }

    return (<ProfDisclosure cname={"companies"} title={"Companies"} icon={faBuilding} editMode={editMode} >
        <div className="disclosure-content companies">
            <div className="companies-display">
                <div className="inner-company-display">
                    {companies.map((company, i) => {
                        return <CompanyButton key={i} id={company.id} name={company.name} isDisabled={isDisabled} deleteCompanyAccount={deleteCompanyAccount} />
                    })}
                </div>
            </div>
            {!isDisabled && <div className="create-company-con">
                <form action="">
                    <input type="text" name="company" placeholder="Company Name" />
                    <input type="password" name="password" />
                    <button type="submit" className="btn">Create</button>

                </form>
            </div>}

        </div>
    </ProfDisclosure>);
}

export default Companies;