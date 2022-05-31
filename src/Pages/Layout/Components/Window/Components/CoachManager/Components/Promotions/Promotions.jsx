import { useEffect, useState } from "react";

import { ProfDisclosure } from "../../../Sections/Sections";


import { faGraduationCap, faXmark } from "@fortawesome/free-solid-svg-icons";

import './Promotions.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Card = ({ id, image, name, isDisabled, removeLearnerFromPromo }) => {
    return <div className="learner" id={id}> <div className="learner-top"> <div className="prof-pic" style={{ backgroundImage: `url(${image})` }}>{!isDisabled && <FontAwesomeIcon icon={faXmark} onClick={() => removeLearnerFromPromo(id)} />}  </div></div> <div className="learner-bottom"><h6>{name}</h6></div> </div >
}


const AddLearnerButton = ({ withoutPromLearners, addLearnerToPromo }) => {
    return <div className="add-button-con"> <select name="add-learner" id="add-learner" onChange={addLearnerToPromo}>
        <option value="">Add a Learner</option>
        {withoutPromLearners.map((learner, i) => {
            return <option key={i} value={learner.id}>{learner.name}</option>
        })}
    </select></div>
}

const Promotions = () => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [hasEdited, setHasEdited] = useState(false);



    const [promotions, setPromotions] = useState([{ id: "1", name: "Johnson 7" }, { id: "2", name: "Johnson 8" }, { id: "3", name: "Johnson 9" }])
    const [promLearners, setPromLeaners] = useState([])
    const [currentProm, setCurrentProm] = useState({ id: "", name: "" })

    const [withoutPromLearners, setWithoutPromLearners] = useState([{ id: "1", name: "John Doe" }])



    useEffect(() => {
        setPromLeaners([])
    }, [currentProm])





    const addLearnerToPromo = (e) => {
        const learnerID = e.target.value
        const learner = withoutPromLearners.filter(learner => learner.id === learnerID)[0]
        const newPromLearners = [...promLearners, learner]
        const newWithoutPromLearners = withoutPromLearners.filter(learner => learner.id !== learnerID)
        setPromLeaners(newPromLearners)
        setWithoutPromLearners(newWithoutPromLearners)
    }

    const removeLearnerFromPromo = (id) => {
        const learnerID = id
        const learner = promLearners.filter(learner => learner.id === learnerID)[0]
        const newPromLearners = promLearners.filter(learner => learner.id !== learnerID)
        const newWithoutPromLearners = [...withoutPromLearners, learner]
        setPromLeaners(newPromLearners)
        setWithoutPromLearners(newWithoutPromLearners)
    }

    const changeCurrentPromotion = (e) => {
        const promID = e.target.value
        const prom = promotions.filter(prom => prom.id === promID)[0]
        setCurrentProm(prom)
    }

    const editMode = () => {
        if (!hasEdited) {
            setIsDisabled(!isDisabled);
            setHasEdited(true)
        } else {
            setIsDisabled(!isDisabled);
            // here we need to send the data to the server
            setHasEdited(false)
        }
    }

    return (<>
        <ProfDisclosure cname={"promotions"} title={"Promotions"} icon={faGraduationCap} editMode={editMode} >
            <div className="disclosure-content promotions">
                {!isDisabled && <div className="create-promotion">
                    <form action="">
                        <input type="text" name="new-promotion" placeholder="Promotion Name" />
                        <button type="submit" className="btn create">Create</button>
                    </form>
                </div>}
                <div className="promotion-con">
                    <div className="promotion-con-top">
                        <button className="btn prom coach">
                            {"< "} <select name="proms" id="proms" onChange={changeCurrentPromotion}>
                                {promotions.map((promotion, i) => {
                                    return <option key={i} value={promotion.id}>{promotion.name}</option>
                                })}
                            </select> {" / >"}
                        </button>
                    </div>
                    <div className="promotion-con-bottom">
                        {!isDisabled && <AddLearnerButton withoutPromLearners={withoutPromLearners} addLearnerToPromo={addLearnerToPromo} />}
                        {promLearners.map((learner, i) => {
                            return <Card key={i} id={learner.id} name={learner.name} image={learner.image} isDisabled={isDisabled} removeLearnerFromPromo={removeLearnerFromPromo} />
                        })}
                    </div>
                </div>
            </div>
        </ProfDisclosure>
    </>);
}

export default Promotions;