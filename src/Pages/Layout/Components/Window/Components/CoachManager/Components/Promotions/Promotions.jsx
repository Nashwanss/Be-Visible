import { ProfDisclosure } from "../../../Sections/Sections";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import './Promotions.css';
import PromoCard from "./Components/PromoCard";
import PromoLearnerData from "./PromoLearnerData";

const Promotions = () => {



    return ( 
        <ProfDisclosure calssName="Promotions" title="Promotions" icon={faGraduationCap}>
            <div className="Promotions-container">

                <div className="promotions-body">
                    <div className="promotions-title">
                        <h5>Johnsons 7</h5>
                    </div>
                    <div className="promotions-cards">
                        <div className="promotions-cards-card">
                            {PromoLearnerData.map(( newLearners ) => {
                                return (
                                    <PromoCard 
                                        key={newLearners.id}
                                        name={newLearners.name}
                                        photo={newLearners.photo}
                                    />
                                );
                            }
                            )}
                        </div>
                    </div>
                </div> 
            </div>
        </ProfDisclosure>
        
    );
}

export default Promotions;