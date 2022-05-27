import Axios from 'axios';
import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp, faCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import loader from "./loading.svg";

import './UploadImages.css'


const UploadButton = ({ setInfo, who, index }) => {
    const [displayLoader, setDisplayLoader] = useState(false);
    const [icon, setIcon] = useState(null);
    const [myId, setMyId] = useState('upload-image-');
    useEffect(() => {
        let id = who
        if (index !== undefined) {
            id = id + index
        }
        setMyId(prevId => prevId + id);
    }, [index,who])

    const uploadImage = (e) => {
        const image = e.target.files[0]
        const formData = new FormData()
        formData.append('file', image)
        formData.append('upload_preset', 'be_visible')
        formData.append('cloud_name', 'sebherrerabe')
        setIcon(<img src={loader} alt="loading" />)
        setDisplayLoader(true)
        Axios.post("https://api.cloudinary.com/v1_1/sebherrerabe/image/upload", formData)
            .then(res => {
                const url = res.data.url
                if (who === "") {
                    return
                }
                if (who === 'userInfo') {
                    setInfo(prevInfo => ({ ...prevInfo, image: url }))
                }
                if (who === 'experience') {
                    setInfo(prevInfo => (prevInfo.map((info, i) => {
                        if (i === index) {
                            return { ...info, image: url }
                        } else {
                            return info
                        }
                    })))
                }
                setIcon(<FontAwesomeIcon icon={faCheck} />)
                return
            })
            .catch(err => {
                setIcon(<FontAwesomeIcon icon={faCircleExclamation} />)
                console.log(err)
            }
            )
    }
    return (<label htmlFor={myId} className="upload-img"> {displayLoader ? icon : <FontAwesomeIcon icon={faCloudArrowUp} />}  <input type="file" name="image" id={myId} onChange={(e) => uploadImage(e)} /></label>);
}

export default UploadButton;