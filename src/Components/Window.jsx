import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import '../Styles/Window.css'


const Window = ({ Open, Close, data }) => {
    const [translate, setTranslate] = useState("0");
    const [xOrY, setXorY] = useState("X");
    const [title, setTitle] = useState("");

    useEffect(() => {
        if (Open) {
            setTranslate("-450px");
        }
    }, [Open]);

    useEffect(() => {
        if (Close) {
            setTranslate("0");
        }
    }, [Close])

    useEffect(() => {
        if (data.whatIs === "menu") {
            setTitle("Menu");
        } else if (data.whatIs === "filter") {
            setTitle("Filter");
        }
    }, [])

    return (
        <div className="window" style={{ transform: `translate${xOrY}(${translate})`, transition: "transform 0.8s" }}>
            <div className="window-header">
                <div className="inner-con">
                    <div className="window-header-edge left"></div>
                    <div className="window-header-middle">{title} </div>
                    <div className="window-header-edge right"> <FontAwesomeIcon icon={faXmark} /> </div>
                </div>
            </div>
        </div>
    )
}

export default Window;