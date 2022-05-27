
import "./CoachManager.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import Promotions from "./Components/Promotions/Promotions";
import Companies from "./Components/Companies/Companies";

const CoachManager = () => {
  return (
    <>
    <div className="coach-manager">
        <div className="coach-manager-header">
            <h3>Diogo Heinen</h3>
            <img
                src="https://thoughtcatalog.com/wp-content/uploads/2014/05/shutterstock_101032591.jpg"
                alt="coach-img"
                className="coach-photo"
            />
        </div>
        <div className="coach-manager-body">
            <Promotions />
            <Companies />
        </div>
    </div>
    </>
  );
};

export default CoachManager;

