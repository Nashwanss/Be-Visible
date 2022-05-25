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
                src="https://us.123rf.com/450wm/tigatelu/tigatelu1501/tigatelu150100183/35863208-cartoon-coach-giving-a-thumbs-up.jpg?ver=6"
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

