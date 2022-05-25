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

const Card = ({ index, deleteCard, isDisabled, experience, setExperiences }) => {

    console.log('this is my index ' + index)

    const positionInput = useRef(null)

    const addBulletPoint = () => {
        setExperiences(prevExperiences => {
            const newExperiences = prevExperiences.map((experience, i) => {
                if (i === index) {
                    return { ...experience, bulletPoints: [...experience.bulletPoints, { value: "New Bullet Point" }] }
                } else {
                    return experience
                }
            })
            return newExperiences
        })
    }

    const deleteBulletPoint = (index) => {
        if (index === 0) {
            return
        } else {
            setExperiences(prevExperiences => {
                const newExperiences = prevExperiences.map((experience, i) => {
                    if (i === index) {
                        return { ...experience, bulletPoints: experience.bulletPoints.filter((bulletPoint, i) => i !== index) }
                    } else {
                        return experience
                    }
                })
                return newExperiences
            })
        }
    }
    useEffect(() => {
        if (positionInput.current != null) {
            positionInput.current.focus()
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
        setExperiences(prevExperiences => {
            const newExperiences = [...prevExperiences]
            newExperiences[index] = { ...experience, [e.target.name]: e.target.value }
            return newExperiences
        })
    }

    return (<div className="card">
        <div className="card-left">
            <div className="card-left-top">
                <div className="job-image" style={{ backgroundImage: `url(${experience.image})` }}>
                    {!isDisabled ? <UploadButton setInfo={setExperiences} who="experience" index={index} key={index}/> : null}
                </div>
            </div>
            <div className="card-left-bottom">
                <div className="duration">
                    <input type="text" name="duration" value={experience.duration} disabled={isDisabled} onChange={(e) => updateValue(e)} />
                </div>
            </div>
        </div>
        <div className="card-middle">
            <div className="card-middle-top"><input type="text" ref={positionInput} name='position' value={experience.position} className={"position"} disabled={isDisabled} onChange={(e) => updateValue(e)} />
                <input type="text" className='company-name' name='company' value={experience.company} disabled={isDisabled} onChange={(e) => updateValue(e)} /> </div>
            <div className="card-middle-bottom">
                <ul>
                    {experience.bulletPoints.map((bulletPoint, index) => {
                        if (index === experience.bulletPoints.length - 1) {
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