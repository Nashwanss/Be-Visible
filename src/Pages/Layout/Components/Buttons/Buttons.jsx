// CSS & Assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench, faSliders } from "@fortawesome/free-solid-svg-icons";



const handleWindow = (setOpenWindow, OpenWindow, setCloseWindow, setContentWidth) => {

    if (OpenWindow) {
        let seconds = 0
        setCloseWindow(true)

        const newInterval = setInterval(() => {
            seconds++
            if (seconds === 1) {
                setContentWidth("100%")
                setOpenWindow(false)
                setCloseWindow(false)
                clearInterval(newInterval)
            }
        }, [1000])
    } else {
        setContentWidth("450px")
        setOpenWindow(true);
    }
}


const TopRightButton = ({ setOpenWindow, OpenWindow, setCloseWindow, setParams, iAm, setContentWidth }) => {

    const handleClick = () => {
        setParams(prevParams => ({ ...prevParams, type: "menu" }));
        handleWindow(setOpenWindow, OpenWindow, setCloseWindow, setContentWidth)
    }
    const displayWhat = () => {
        if (iAm === "learner") {
            return <div className="profile-button" onClick={() => handleClick()}></div>
        } else if (iAm === "coach") {
            return <FontAwesomeIcon icon={faWrench} onClick={() => handleClick()} />
        }
    }


    return (
        displayWhat()
    )
}

const FilterButton = ({ setOpenWindow, OpenWindow, setCloseWindow, setParams, setContentSize, contentSize }) => {
    const handleClick = () => {
        setParams(prevParams => ({ ...prevParams, type: "filter" }));
        handleWindow(setOpenWindow, OpenWindow, setCloseWindow, setContentSize, { ...contentSize, height: "200%" }, { ...contentSize, height: "100%"})
    }
    return <button className="btn" onClick={() => handleClick()}><FontAwesomeIcon icon={faSliders} /> Filter</button>
}

export { FilterButton, TopRightButton }