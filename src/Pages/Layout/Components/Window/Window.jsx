import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import '../../../../Styles/Window.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faAddressCard } from '@fortawesome/free-solid-svg-icons';


const Window = ({ CloseWindow, params, handleWindow, contentSize }) => {
    const [translate, setTranslate] = useState("0");
    const [xOrY, setXorY] = useState("");
    const [title, setTitle] = useState("");
    const [marginLeft] = useState(params.marginLeft);


    useEffect(() => {
        if (CloseWindow) {
            setTranslate("0");
        }
    }, [CloseWindow])

    useEffect(() => {
        if (params.type === "menu") {
            setXorY("X")
            setTranslate("-450px");
            if (params.iAm === "learner") {
                setTitle("Profile")
            } else {
                setTitle("Coach Manager")
            }
        } else if (params.type === "filter") {
            setTranslate("-88vh")
            setTitle("Filters");
            setXorY("Y")
        }
    }, [params.type, params.iAm])

    const handleClick = () => {
        if (params.type === "menu") {
            handleWindow({ ...contentSize, width: "925px", flexDirection: "row", justifyContent: "center", alignItems: "none" }, { ...contentSize, width: "100%", flexDirection: "row", justifyContent: "center", alignItems: "none" }, "menu")
        } else if (params.type === "filter") {
            handleWindow({ ...contentSize, height: "176vh", flexDirection: "column", justifyContent: "none", alignItems: "center" }, { ...contentSize, height: "88vh", flexDirection: "none", justifyContent: "center", alignItems: "none" }, "filter");
        }

    }

    const whichIcon = () => {
        if (params.type === "menu" && params.iAm === "learner") {
            return <FontAwesomeIcon icon={faAddressCard} />
        } else if (params.type === "filter") {
            return <button className='btn'>Reset</button>
        } else {
            return null
        }
    }

    return (
        <div className="window" style={{ transform: `translate${xOrY}(${translate})`, transition: "transform 0.8s", marginLeft: marginLeft }}>
            <div className="window-header">
                <div className="inner-con">
                    <div className="window-header-edge left">{whichIcon()}</div>
                    <div className="window-header-middle">{title} </div>
                    <div className="window-header-edge right"> <FontAwesomeIcon icon={faXmark} onClick={() => { handleClick() }} /> </div>
                </div>
            </div>
            <div className="window-content">
                <div className="inner-con">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Window;