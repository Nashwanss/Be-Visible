import './CoachManager.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';





const CoachManager = () => {
    return (
        <>
            <div className="coach-manager"> 
                <div className="coach-manager-header">
                    <h3>Diogo Heinen</h3>
                    <img src="https://us.123rf.com/450wm/tigatelu/tigatelu1501/tigatelu150100183/35863208-cartoon-coach-giving-a-thumbs-up.jpg?ver=6" alt="coach-img" className='coach-photo'/>
                </div>
                <div className="coach-manager-body">
                    <div className="coach-manager-body-up">
                        <div className="coach-manager-body-up-up">
                        <label className="education-icon"> <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon></label>
                            <select> 
                                <option className="promotion-selector" value="">Promotions</option>
                                <option value="">Johnsons 7</option>
                                <option value="">Hopper 3</option>
                                <option value="">Bouman 4</option>
                                <option value="">Lovelace 8</option>
                                <option value="">Sprint 1</option>
                                <option value="">Swartz 6</option>
                             </select>

                            <button> Add new learner </button>
                        </div>
                        <div className="coach-manager-body-up-middle">
                            <div className="coach-manager-body-up-middle-middle">Bouman 4</div>  
                        </div>
                        <div className="coach-manager-body-up-down"></div>
                        
                    </div>
                    <div className="coach-manager-body-down">
                      
                        <div className="coach-manager-body-down-up">
                         
                            <div className="coach-manager-body-down-down">
                             
                                <div className="coach-manager-body-down-down-up">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="coach-manager-create-btn"> Create </button>
                </div>
            </div>
        </>
    );
}

export default CoachManager;