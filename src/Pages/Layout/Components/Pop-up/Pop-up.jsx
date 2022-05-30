import Profile from './Components/Profile/Profile'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faXmark } from '@fortawesome/free-solid-svg-icons';

const PopUp = ({ popUpDisplayed, closePopUp, userResultID }) => {

    return (
        <div className="window pop-up" style={{ visibility: !popUpDisplayed ? 'hidden' : 'visible', opacity: !popUpDisplayed ? "0" : "100" }} >
            <div className="window-header">
                <div className="inner-con">
                    <div className="window-header-edge left"></div>
                    <div className="window-header-middle">{userResultID} </div>
                    <div className="window-header-edge right"> <FontAwesomeIcon icon={faXmark} onClick={closePopUp} /> </div>
                </div>
            </div>
            <div className="window-content">
                <div className="inner-con">
                    <Profile />
                </div>
            </div>
        </div>
    )
}

export default PopUp;