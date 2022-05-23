import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { faLightbulb} from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import { faToggleOn} from '@fortawesome/free-solid-svg-icons';



const Filter = () => {
  return (
    <div className="filter-container">
      <div className="filter-location">
      <FontAwesomeIcon icon={faLocationDot} />Location
        <button className="belgium-location">Belgium</button>
        <button className="worldwide-location">Worldwide</button>
      </div>
      <div className="filter-skills">
      <FontAwesomeIcon icon={faLightbulb} />Skills
        <div className="skill-front">Front-end</div>
        <div className="skill-back">Back-end</div>
        <div className="skill-ai">AI</div>
        <div className="skill-cyber">Cyber-Secutiry</div>
      </div>
      <div className="filter-promotion">
      <FontAwesomeIcon icon={faGraduationCap} />Promotion
        <button className="promotion">Bouman 4</button>
        <button className="promotion">Hopper 3</button>
        <button className="promotion">Lovelace 8</button>
        <button className="promotion">Sprint 1</button>
        <button className="promotion">Swartz 6</button>
        <button className="promotion">Johnsons 7</button>
      </div>
      <div className="filter-availability"><FontAwesomeIcon icon={faToggleOn} />Availability</div>
      <button className="filter-apply"> Apply</button>
    </div>
  );
};

export default Filter;
