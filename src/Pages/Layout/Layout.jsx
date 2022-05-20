// from React
import { useEffect, useState } from "react";

// CSS & Assets
import "../../Styles/Layout.css";
import Logo from "../../Assets/LM-Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";


// Components
import Window from "./Components/Window/Window";
import Dashboard from "./Components/Dashboard";


const TopRightButton = ({ setOpenWindow, OpenWindow, setCloseWindow, setParams, iAm }) => {

  const displayWhat = () => {
    if (iAm === "learner") {
      return <div className="profile-button" onClick={() => handleClick()}></div>
    } else if (iAm === "coach") {
      return <FontAwesomeIcon icon={faWrench} onClick={() => handleClick()} />
    }
  }

  const handleClick = () => {

    if (OpenWindow) {
      let seconds = 0
      setCloseWindow(true)
      const newInterval = setInterval(() => {
        seconds++
        if (seconds === 1) {
          setOpenWindow(false)
          setCloseWindow(false)
          clearInterval(newInterval)
        }
      }, [1000])
    } else {
      setOpenWindow(true);
      setParams(prevParams => ({ ...prevParams, type: "menu" }));
    }
  }
  return (
    displayWhat()
  )
}


const Layout = ({ iAm }) => {

  const [OpenWindow, setOpenWindow] = useState(false);
  const [CloseWindow, setCloseWindow] = useState(false);
  const [params, setParams] = useState({ type: "", iAm: iAm })

  useEffect(() => {
    console.log(params)
  }, [params])
  return (
    <div className="layout">
      <header>
        <nav>
          <div className="inner-con">
            <a href="/" className="logo-con">
              <img src={Logo} alt="Logo" />
            </a>
            <TopRightButton setOpenWindow={setOpenWindow} OpenWindow={OpenWindow} setCloseWindow={setCloseWindow} setParams={setParams} iAm={iAm} />
          </div>
        </nav>
      </header>
      <main className="content">
        <div className="inner-con dashboard">
          <Dashboard />
        </div>
        {OpenWindow && <Window OpenWindow={OpenWindow} CloseWindow={CloseWindow} params={params} />}
      </main>

    </div>
  )
}


export default Layout