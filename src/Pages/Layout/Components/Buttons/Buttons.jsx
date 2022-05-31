
import { Link } from "react-router-dom";


// CSS & Assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench, faSliders } from "@fortawesome/free-solid-svg-icons";


// this is a function not a component


// components

const TopRightButton = ({ setParams, iAm, contentSize, handleWindow, windowIsOpen, WindowDisplayed , themeColors}) => {

    const displayWhat = () => { // To know what to display as button
        let whatToDisplay;
        if (iAm === "learner") {
            whatToDisplay = <Link to="./myprofile"><div className={"profile-button" + " " + themeColors.colorSecondary} onClick={() => handleClick()}></div></Link>
        } else if (iAm === "coach") {
            whatToDisplay = <Link to="./coachmanager"><FontAwesomeIcon icon={faWrench} onClick={() => handleClick()} /></Link>
        }
        return whatToDisplay;
    }

    const handleClick = () => {
        if (!WindowDisplayed && !windowIsOpen.filter && !windowIsOpen.popup) {
            setParams(prevParams => ({ ...prevParams, type: "menu", marginLeft: "25px" }));
            handleWindow({ ...contentSize, width: "925px", flexDirection: "row", justifyContent: "center", alignItems: "none" }, { ...contentSize, width: "450px", flexDirection: "row", justifyContent: "center", alignItems: "none" }, "menu")
        } else if (WindowDisplayed && !windowIsOpen.filter && !windowIsOpen.popup) {
            setParams(prevParams => ({ ...prevParams, type: "menu", marginLeft: "25px" }));
            handleWindow({ ...contentSize, width: "925px", flexDirection: "row", justifyContent: "center", alignItems: "none" }, { ...contentSize, width: "450px", flexDirection: "row", justifyContent: "center", alignItems: "none" }, "menu")
        }
    }

    return (
        displayWhat()
    )
}

const FilterButton = ({ setParams, contentSize, handleWindow , themeColors}) => {
    const handleClick = () => {
        setParams(prevParams => ({ ...prevParams, type: "filter", marginLeft: "0" }));
        handleWindow({ ...contentSize, height: "176vh", flexDirection: "column", justifyContent: "none", alignItems: "center" }, { ...contentSize, height: "88vh", flexDirection: "none", justifyContent: "center", alignItems: "none" }, "filter")

    }
    return <Link to="./filter"><button className={"btn" + " " + themeColors.colorSecondary} onClick={() => handleClick()}><FontAwesomeIcon icon={faSliders} className="mg-r-5" /> Filters</button></Link>
}

export { FilterButton, TopRightButton }
