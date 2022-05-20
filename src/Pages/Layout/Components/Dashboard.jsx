import logo from '../../../Assets/DM-Logo.png'
import '../../../Styles/Dashboard.css'

import { faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";








const Dashboard = () =>  {
  return (
    <>
      <img src={logo} alt="logo" className="logo" />  
      <div className="dashboard-container">
        <input type="text" className="search-bar" placeholder="Search" />
        <h5><FontAwesomeIcon icon={faLessThan} size='xs' /> / <FontAwesomeIcon icon={faGreaterThan} size='xs' /> Johnson 7</h5>
        </div>
    </>
  )
}


export default Dashboard;

