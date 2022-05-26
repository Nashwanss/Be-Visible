import {ProfDisclosure } from "../../../Sections/Sections";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import './Companies.css';




const  Companies = () => {

//     const Coco = CompaniesData.map ((company) => {
//         return (

//             <div className="company-container">
//                 <div className="company-container-logo">
//                     <img src={company.logo} alt="company-logo"/>
//                 </div>
//                 <div className="company-container-info-name">
//                         <h3>{company.name}</h3>
//                 </div>
//             </div>
//         )
//     }
//     )


    return ( 
        <ProfDisclosure calssName="Companies" title="Companies" icon={faBuilding}>
            <div className="Companies-container">
                <div className="companies-body">
                    <div className="companies-name">
                        {/* <h5>{Coco}</h5> */}
                        <h5>Google</h5>
                    </div>
                    <div className="companies-name">
                        {/* <h5>{Coco}</h5> */}
                        <h5>Google</h5>
                    </div>                    <div className="companies-name">
                        {/* <h5>{Coco}</h5> */}
                        <h5>Google</h5>
                    </div>
                </div>
                <div className="companies-creation">
                    <form action="creation">
                        <input type="text" value="" placeholder="Carrfour" className="companies-creation-name" />
                        <input type="password" value="" placeholder="************" className="companies-creation-pw" />
                        <input type="submit" value="Create" className="companies-creation-btn" />
                    </form>
                </div>
            </div>

        </ProfDisclosure>
    );
}

export default Companies ;