// from React
import { useEffect, useState } from "react";

// CSS & Assets
import "../../Styles/Layout.css";
import Logo from "../../Assets/LM-Logo.png";


// Components
import Window from "./Components/Window/Window";
import {TopRightButton, FilterButton} from "./Components/Buttons/Buttons";

import Dashboard from "./Components/Dashboard";





const Layout = ({ iAm }) => {

  const [OpenWindow, setOpenWindow] = useState(false);
  const [CloseWindow, setCloseWindow] = useState(false);
  const [params, setParams] = useState({ type: "", iAm: iAm })


  const [contentSize, setContentSize] = useState({ width: "100%" });

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
            <TopRightButton setOpenWindow={setOpenWindow} OpenWindow={OpenWindow} setCloseWindow={setCloseWindow} setParams={setParams} iAm={iAm} setContentSize={setContentSize} contentSize={contentSize} />
          </div>
        </nav>
      </header>
      <div className="content" style={contentSize}>
        <div className="wrapper">
          <main>
            <div className="inner-con dashboard">
              <Dashboard />
            </div>
          </main>
          <footer>
            <div className="inner-con footer">
              <FilterButton setOpenWindow={setOpenWindow} OpenWindow={OpenWindow} setCloseWindow={setCloseWindow} setParams={setParams} iAm={iAm} setContentSize={setContentSize} />
            </div>
          </footer>
        </div>
        {OpenWindow && <Window OpenWindow={OpenWindow} CloseWindow={CloseWindow} params={params} />}
      </div>

    </div>
  )
}


export default Layout