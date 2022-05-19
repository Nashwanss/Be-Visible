import { useState, useEffect } from 'react';

import '../../../../Styles/Window.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faAddressCard } from '@fortawesome/free-solid-svg-icons';


const Window = ({ OpenWindow, CloseWindow, params }) => {
    const [translate, setTranslate] = useState("0");
    const [xOrY, setXorY] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        if (OpenWindow) {
            setTranslate("-450px");
        }
    }, [OpenWindow]);

    useEffect(() => {
        if (CloseWindow) {
            setTranslate("0");
        }
    }, [CloseWindow])

    useEffect(() => {
        if (params.type === "menu") {
            setXorY("X")
            if (params.iAm === "learner") {
                setTitle("Profile")
            } else {
                setTitle("Coach Manager")
            }
        } else if (params.type === "filter") {
            setTitle("Filter");
            setXorY("Y")
        }
    }, [])

    return (
        <div className="window" style={{ transform: `translate${xOrY}(${translate})`, transition: "transform 0.8s" }}>
            <div className="window-header">
                <div className="inner-con">
                    <div className="window-header-edge left">{params.iAm === "learner" ? <FontAwesomeIcon icon={faAddressCard} /> : null}</div>
                    <div className="window-header-middle">{title} </div>
                    <div className="window-header-edge right"> <FontAwesomeIcon icon={faXmark} /> </div>
                </div>
            </div>
        </div>
    )
}

export default Window;