import { useState, useRef, useEffect } from "react"



import UploadButton from '../../../../Sections/UploadImages/UploadImages'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'


const BulletPoint = ({ value, isDisabled, usePlus, addBulletPoint, deleteBulletPoint, index }) => {
    const [bulletValue, setBulletValue] = useState(value)

    const displayTools = () => {
        if (!isDisabled && usePlus) {
            return <> <FontAwesomeIcon icon={faMinus} onClick={() => (deleteBulletPoint(index))} /> <FontAwesomeIcon icon={faPlus} onClick={() => { addBulletPoint() }} /></>
        } else if (!isDisabled && !usePlus) {
            return <FontAwesomeIcon icon={faMinus} onClick={() => (deleteBulletPoint(index))} />
        }
    }

    return <li><input type="text" value={bulletValue} onChange={(e) => { setBulletValue(e.target.value) }} disabled={isDisabled} /> {displayTools()}</li>
}

const Card = ({ index, deleteCard, isDisabled, education, setEducations }) => {


    const degreeInput = useRef(null)

    const addBulletPoint = () => {
        setEducations(prevEducations => {
            const newEducations = prevEducations.map((education, i) => {
                if (i === index) {
                    return { ...education, bulletPoints: [...education.bulletPoints, { value: "New Bullet Point" }] }
                } else {
                    return education
                }
            })
            return newEducations
        })
    }

    const deleteBulletPoint = (index) => {
        if (index === 0) {
            return
        } else {
            setEducations(prevEducations => {
                const newEducations = prevEducations.map((education, i) => {
                    if (i === index) {
                        return { ...education, bulletPoints: education.bulletPoints.filter((bulletPoint, i) => i !== index) }
                    } else {
                        return education
                    }
                })
                return newEducations
            })
        }
    }
    useEffect(() => {
        if (degreeInput.current != null) {
            degreeInput.current.focus()
        }
    }, [isDisabled])


    const displayTools = () => {
        if (isDisabled) {
            return null
        }
        if (!isDisabled) {
            return <FontAwesomeIcon icon={faMinus} onClick={() => { deleteCard(index) }} />
        }
    }

    const updateValue = (e) => {
        setEducations(prevEducations => {
            const newEducations = [...prevEducations]
            newEducations[index] = { ...education, [e.target.name]: e.target.value }
            return newEducations
        })
    }

    return (<div className="card">
        <div className="card-left">
            <div className="card-left-top">
                <div className="job-image" style={{ backgroundImage: `url(${education.image})` }}>
                    {!isDisabled ? <UploadButton setInfo={setEducations} who="experience" index={index} key={index}/> : null}
                </div>
            </div>
            <div className="card-left-bottom">
                <div className="duration">
                    <input type="text" name="duration" value={education.duration} disabled={isDisabled} onChange={(e) => updateValue(e)} />
                </div>
            </div>
        </div>
        <div className="card-middle">
            <div className="card-middle-top"><input type="text" ref={degreeInput} name='degree' value={education.degree} className={"degree"} disabled={isDisabled} onChange={(e) => updateValue(e)} />
                <input type="text" className='university-name' name='university' value={education.university} disabled={isDisabled} onChange={(e) => updateValue(e)} /> </div>
            <div className="card-middle-bottom">
                <ul>
                    {education.bulletPoints.map((bulletPoint, index) => {
                        if (index === education.bulletPoints.length - 1) {
                            return <BulletPoint value={bulletPoint.value} key={index} isDisabled={isDisabled} usePlus={true} addBulletPoint={addBulletPoint} deleteBulletPoint={deleteBulletPoint} index={index} />
                        } else {
                            return <BulletPoint value={bulletPoint.value} key={index} isDisabled={isDisabled} deleteBulletPoint={deleteBulletPoint} index={index} />
                        }
                    })}
                </ul>
            </div>
        </div>
        <div className="card-right">
            {displayTools()}
        </div>
    </div>)
}

export default Card;