
import { useState, useRef, useEffect } from 'react';


import { ProfDisclosure } from '../../../Sections/Sections'

import './Experience.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faPenToSquare, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';


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

const Card = ({ index, deleteCard, isDisabled }) => {


    const [bulletPoints, setBulletPoints] = useState([{ value: "New Bullet Point" }])

    const positionInput = useRef(null)

    const addBulletPoint = () => {
        setBulletPoints([...bulletPoints, { value: "New Bullet Point" }])
    }

    const deleteBulletPoint = (index) => {
        if (index === 0) {
            return
        } else {
            setBulletPoints(bulletPoints.filter((bullet, i) => i !== index))
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

    return (<div className="card">
        <div className="card-left">
            <div className="card-left-top">
                <div className="job-image"></div>
            </div>
            <div className="card-left-bottom">
                <div className="duration">
                    <input type="text" value={"2020 - 2020"} disabled={isDisabled} />
                </div>
            </div>
        </div>
        <div className="card-middle">
            <div className="card-middle-top"><input type="text" ref={positionInput} value={"Position"} className={"position"} disabled={isDisabled} />
                <input type="text" className='company-name' value={"Company Name"} disabled={isDisabled} /> </div>
            <div className="card-middle-bottom">
                <ul>
                    {bulletPoints.map((bulletPoint, index) => {
                        if (index === bulletPoints.length - 1) {
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


const Experience = () => {

    const [isDisabled, setIsDisabled] = useState(true);
    const textArea = useRef(null)

    useEffect(() => {
        if (textArea.current != null) {
            textArea.current.focus()
        }
    }, [isDisabled])

    const editMode = () => {
        setIsDisabled(!isDisabled);
    }
    const [cards, setCards] = useState([{ index: 0 }])
    const addNewCard = () => {
        setCards([...cards, { index: cards.length + 1 }])
    }
    const deleteCard = (index) => {
        setCards(cards.filter((card, i) => i !== index))
    }

    return <ProfDisclosure cname={"experience"} title={"Experience"} icon={faBriefcase} editMode={editMode} >
        <div className={`disclosure-content experience ${!isDisabled && "edit-input"}`}>
            {isDisabled ? null : <div className="add-button-con">
                <button onClick={() => { addNewCard() }}><FontAwesomeIcon icon={faPlus} /> Add New Experience</button>
            </div>}
            {cards.map((card, index) => {
                return <Card key={card.index} index={index} deleteCard={deleteCard} isDisabled={isDisabled} />
            })}
        </div>
    </ProfDisclosure>

}

export default Experience;