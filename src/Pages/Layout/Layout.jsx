// from React
import { useEffect, useState, createContext, useContext } from "react";

// CSS & Assets
import "./Layout.css";
import LM_Logo from "../../Assets/LM-Logo.png";
import DM_Logo from "../../Assets/DM-Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";



import cssClasses from "./cssClasses.json";


// Components
import Window from "./Components/Window/Window";
import Dashboard from "./Components/Dashboard/Dashboard";
import PopUp from "./Components/Pop-up/Pop-up";
import { TopRightButton, FilterButton } from "./Components/Buttons/Buttons";
import Switch from "./Components/Switch/Switch";


import { UserSession } from "../../App";

export const ThemeContext = createContext();

const Layout = ({ iAm }) => {
  const light = cssClasses.light;
  const dark = cssClasses.dark;

  const [themeMode, setThemeMode] = useState(true);
  const [themeColors, setThemeColors] = useState({ ...light});

  const switchMode = () => {
    setThemeMode(!themeMode);
    const darkOrlight = themeMode ? light : dark;
    setThemeColors({ ...darkOrlight });
   
  };

  const [WindowDisplayed, setWindowDisplayed] = useState(false);
  const [windowIsOpen, setWindowIsOpen] = useState({
    menu: false,
    filter: false,
    popup: false,
  });
  const [CloseWindow, setCloseWindow] = useState(false);
  const [params, setParams] = useState({
    type: "",
    iAm: iAm,
    marginLeft: "0px",
  });

  const [popUpDisplayed, setPopUpDisplayed] = useState(false);

  useEffect(() => {
    if (popUpDisplayed) {
      setWindowIsOpen((windowIsOpen) => ({ ...windowIsOpen, popup: true }));
    } else {
      setWindowIsOpen((windowIsOpen) => ({ ...windowIsOpen, popup: false }));
    }
  }, [popUpDisplayed]);

  const [contentSize, setContentSize] = useState({
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "none",
  });

  const handleWindow = (openValue, closeValue, whatWindow) => {
    const closeWindow = () => {
      let seconds = 0;
      setCloseWindow(true);
      const newInterval = setInterval(() => {
        seconds++;
        if (seconds === 1) {
          setContentSize(closeValue);
          setWindowDisplayed(false);
          setCloseWindow(false);
          clearInterval(newInterval);
          setWindowIsOpen({ ...windowIsOpen, [whatWindow]: false });
        }
      }, [1000]);
    };
    if (WindowDisplayed) {
      closeWindow();
    } else {
      setContentSize(openValue);
      setWindowDisplayed(true);
      setWindowIsOpen({ ...windowIsOpen, [whatWindow]: true });
    }
  };

  const [userResultID, setUserResultID] = useState("");

  const closePopUp = () => {
    setPopUpDisplayed(false);
  };
  const openPopUp = (id) => {
    setPopUpDisplayed(true);
    setUserResultID(id);
  };


    
  const userDataContext = useContext(UserSession);

  const handleLogOut = () => {
    userDataContext.setUserData({...userDataContext.userData, id: "", username: "", email: "", role: "learner", token: "", isLoggedIn: false });
  }

  return (

    <ThemeContext.Provider value={{ themeColors }}>
      <div className={"layout"+" " + themeColors.colorPrimary}>
        <header>
          <nav>
            <div className="inner-con">
              <div className="logo-layout">
              <a href="/" className="logo-con">
               {themeMode === false ? (<img src={LM_Logo} alt="LM Logo" />) : (<img src={LM_Logo} alt="LM Logo" />)} 
              </a>
              </div>
              <div className="buttons-con">
              <Switch switchMode={switchMode} themeMode={themeMode} />
              <button className="logout-btn " onClick={() => handleLogOut() }>
                 <FontAwesomeIcon icon={faArrowRightFromBracket} /> 
              </button>
              </div>
              <TopRightButton
                themeColors={themeColors}
                setParams={setParams}
                iAm={iAm}
                contentSize={contentSize}
                handleWindow={handleWindow}
                windowIsOpen={windowIsOpen}
                WindowDisplayed={WindowDisplayed}
              />
            </div>
          </nav>
        </header>
        <div className="content" style={contentSize}>
          <PopUp
            popUpDisplayed={popUpDisplayed}
            closePopUp={closePopUp}
            userResultID={userResultID}
          />
          <div className="wrapper">
            <main>
              <div className="inner-con dashboard">
                <Dashboard 
                openPopUp={openPopUp}
                themeColors={themeColors} />
              </div>
            </main>
            <footer>
              <div className="inner-con footer">
                <FilterButton
                  themeColors={themeColors}
                  setParams={setParams}
                  contentSize={contentSize}
                  handleWindow={handleWindow}
                />
              </div>
            </footer>
          </div>
          {WindowDisplayed && (
            <Window
              WindowDisplayed={WindowDisplayed}
              CloseWindow={CloseWindow}
              params={params}
              handleWindow={handleWindow}
              contentSize={contentSize}
            />
          )}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default Layout;
