import Axios from 'axios';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp, faCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import loader from "./loading.svg";

import './UploadImages.css'


const UploadButton = ({ setInfo }) => {
    const [displayLoader, setDisplayLoader] = useState(false);
    const [icon, setIcon] = useState(null);
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
                setInfo(prevInfo => ({ ...prevInfo, image: url }))
                setIcon(<FontAwesomeIcon icon={faCheck} />)
            })
            .catch(err => {
                setIcon(<FontAwesomeIcon icon={faCircleExclamation} />)
                console.log(err)
            }
            )
    }
    return (<label htmlFor="image" className="upload-img"> {displayLoader ? icon : <FontAwesomeIcon icon={faCloudArrowUp} />}  <input type="file" name="image" id="image" onChange={(e) => uploadImage(e)} /></label>);
}

export default UploadButton;