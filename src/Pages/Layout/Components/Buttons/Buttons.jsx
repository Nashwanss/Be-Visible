// CSS & Assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench, faSliders } from "@fortawesome/free-solid-svg-icons";


const handleWindow = (OpenWindow, setOpenWindow, setCloseWindow, setContentSize, openValue, closeValue) => {
    if (OpenWindow) {
        let seconds = 0
        setCloseWindow(true)
        const newInterval = setInterval(() => {
            seconds++
            if (seconds === 1) {
                setContentSize(closeValue)
                setOpenWindow(false)
                setCloseWindow(false)
                clearInterval(newInterval)
            }
        }, [1000])
    } else {
        setContentSize(openValue)
        setOpenWindow(true);
    }
}


const TopRightButton = ({ setOpenWindow, OpenWindow, setCloseWindow, setParams, iAm, setContentSize, contentSize }) => {

    const displayWhat = () => {
        if (iAm === "learner") {
            return <div className="profile-button" onClick={() => handleClick()}></div>
        } else if (iAm === "coach") {
            return <FontAwesomeIcon icon={faWrench} onClick={() => handleClick()} />
        }
    }

    const handleClick = () => {

        setParams(prevParams => ({ ...prevParams, type: "menu" }));
        handleWindow(OpenWindow, setOpenWindow, setCloseWindow, setContentSize, {...contentSize, width: "925px"}, {...contentSize, width: "100%"})
    }
    return (
        displayWhat()
    )
}

const FilterButton = ({ setOpenWindow, OpenWindow, setCloseWindow, setParams, iAm, setContentSize }) => {
    return <button className="btn"><FontAwesomeIcon icon={faSliders} className="mg-r-5" /> Filter</button>
}
export { FilterButton, TopRightButton }