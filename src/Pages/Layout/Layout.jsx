// from React
import { useEffect, useState } from "react";

// CSS & Assets
import "./Layout.css";
import Logo from "../../Assets/LM-Logo.png";


// Components
import Window from "./Components/Window/Window";
import Dashboard from "./Components/Dashboard/Dashboard";
import PopUp from "./Components/Pop-up/Pop-up";
import { TopRightButton, FilterButton } from "./Components/Buttons/Buttons";







const Layout = ({ iAm }) => {



  const [WindowDisplayed, setWindowDisplayed] = useState(false);
  const [windowIsOpen, setWindowIsOpen] = useState({ menu: false, filter: false, popup: false });
  const [CloseWindow, setCloseWindow] = useState(false);
  const [params, setParams] = useState({ type: "", iAm: iAm, marginLeft: "0px" });

  const [popUpDisplayed, setPopUpDisplayed] = useState(false);

  useEffect(() => {
    if (popUpDisplayed) {
      setWindowIsOpen({ ...windowIsOpen, popup: true });
    } else {
      setWindowIsOpen({ ...windowIsOpen, popup: false });
    }
  }, [popUpDisplayed])

  const [profileData, setProfileData] = useState({});


  const [contentSize, setContentSize] = useState({ width: "100%", height: "100%", flexDirection: "row", justifyContent: "center", alignItems: "none" });


  const handleWindow = (openValue, closeValue, whatWindow) => {

    const closeWindow = () => {
      let seconds = 0
      setCloseWindow(true)
      const newInterval = setInterval(() => {
        seconds++
        if (seconds === 1) {
          setContentSize(closeValue)
          setWindowDisplayed(false)
          setCloseWindow(false)
          clearInterval(newInterval)
          setWindowIsOpen({ ...windowIsOpen, [whatWindow]: false })
        }
      }, [1000])
    }
    if (WindowDisplayed) {
      closeWindow()
    } else {
      setContentSize(openValue)
      setWindowDisplayed(true);
      setWindowIsOpen({ ...windowIsOpen, [whatWindow]: true })
    }
  }

  const [userResultID, setUserResultID] = useState("");

  const closePopUp = () => {
    setPopUpDisplayed(false)
  }
  const openPopUp = (id) => {
    setPopUpDisplayed(true)
    setUserResultID(id)
  }


  return (
    <div className="layout">
      <header>
        <nav>
          <div className="inner-con">
            <a href="/" className="logo-con">
              <img src={Logo} alt="Logo" />
            </a>
            <TopRightButton setParams={setParams} iAm={iAm} contentSize={contentSize} handleWindow={handleWindow} windowIsOpen={windowIsOpen} WindowDisplayed={WindowDisplayed} />
          </div>
        </nav>
      </header>
      <div className="content" style={contentSize}>
        <PopUp popUpDisplayed={popUpDisplayed} closePopUp={closePopUp} userResultID={userResultID} />
        <div className="wrapper">
          <main>
            <div className="inner-con dashboard">
              <Dashboard openPopUp={openPopUp} />
            </div>
          </main>
          <footer>
            <div className="inner-con footer">
              <FilterButton setParams={setParams} contentSize={contentSize} handleWindow={handleWindow} />
            </div>
          </footer>
        </div>
        {WindowDisplayed && <Window WindowDisplayed={WindowDisplayed} CloseWindow={CloseWindow} params={params} handleWindow={handleWindow} contentSize={contentSize} />}
      </div>

    </div>
  )
}


export default Layout