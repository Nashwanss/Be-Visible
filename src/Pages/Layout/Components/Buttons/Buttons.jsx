// CSS & Assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench, faSliders } from "@fortawesome/free-solid-svg-icons";


// this is a function not a component


// components

const TopRightButton = ({ setParams, iAm, contentSize, handleWindow, windowIsOpen, WindowDisplayed }) => {

    const displayWhat = () => { // To know what to display as button
        if (iAm === "learner") {
            return <div className="profile-button" onClick={() => handleClick()}></div>
        } else if (iAm === "coach") {
            return <FontAwesomeIcon icon={faWrench} onClick={() => handleClick()} />
        }
    }

    const handleClick = () => {
        console.log(WindowDisplayed + " " + windowIsOpen.filter)
        if (!WindowDisplayed && windowIsOpen.filter === false) {
            setParams(prevParams => ({ ...prevParams, type: "menu", marginLeft: "25px" }));
            handleWindow({ ...contentSize, width: "925px", flexDirection: "row", justifyContent: "center", alignItems: "none" }, { ...contentSize, width: "450px", flexDirection: "row", justifyContent: "center", alignItems: "none" }, "menu")
        } else if (WindowDisplayed && windowIsOpen.filter === false) {
            setParams(prevParams => ({ ...prevParams, type: "menu", marginLeft: "25px" }));
            handleWindow({ ...contentSize, width: "925px", flexDirection: "row", justifyContent: "center", alignItems: "none" }, { ...contentSize, width: "450px", flexDirection: "row", justifyContent: "center", alignItems: "none" }, "menu")
        }
    }

    return (
        displayWhat()
    )
}

const FilterButton = ({ setParams, contentSize, handleWindow }) => {
    const handleClick = () => {
        setParams(prevParams => ({ ...prevParams, type: "filter", marginLeft: "0" }));
        handleWindow({ ...contentSize, height: "176vh", flexDirection: "column", justifyContent: "none", alignItems: "center" }, { ...contentSize, height: "88vh", flexDirection: "none", justifyContent: "center", alignItems: "none" }, "filter")

    }
    return <button className="btn" onClick={() => handleClick()}><FontAwesomeIcon icon={faSliders} className="mg-r-5" /> Filter</button>
}

export { FilterButton, TopRightButton }