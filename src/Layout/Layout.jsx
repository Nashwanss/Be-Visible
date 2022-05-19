// from React
import { useEffect, useState } from "react";

// CSS & Assets
import "../Styles/Layout.css";
import Logo from "../Assets/DM-Logo.png";


// Components
import Window from "../Components/Window";


const TopRightButton = ({ setOpen, Open, setClose, setData }) => {


  const handleClick = () => {

    if (Open) {
      let seconds = 0
      setClose(true)
      const newInterval = setInterval(() => {
        seconds++
        if (seconds === 1) {
          setOpen(false)
          setClose(false)
          clearInterval(newInterval)
        }
      }, [1000])
    } else {
      setOpen(true);
      setData({ whatIs: "menu" });
    }
  }
  return (
    <div className="profile-button" onClick={() => handleClick()}>
    </div>
  )
}


const Layout = () => {

  const [Open, setOpen] = useState(false);
  const [Close, setClose] = useState(false);
  const [data, setData] = useState({})

  return (
    <div className="layout">
      <header>
        <nav>
          <div className="inner-con">
            <a href="/" className="logo-con">
              <img src={Logo} alt="Logo" />
            </a>
            <TopRightButton setOpen={setOpen} Open={Open} setClose={setClose} setData={setData} />
          </div>
        </nav>
      </header>
      <main className="content">
        <div className="inner-con dashboard"> </div>
        {Open && <Window Open={Open} Close={Close} data={data} />}
      </main>

    </div>
  )
}


export default Layout