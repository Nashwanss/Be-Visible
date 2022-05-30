import { useState} from "react"




const BulletPoint = ({ value }) => {
    const [bulletValue] = useState(value)

    return <li><input type="text" value={bulletValue} disabled /></li>
}

const Card = ({ experience }) => {




    return (<div className="card">
        <div className="card-left">
            <div className="card-left-top">
                <div className="job-image" style={{ backgroundImage: `url(${experience.image})` }}>
                </div>
            </div>
            <div className="card-left-bottom">
                <div className="duration">
                    <input type="text" name="duration" value={experience.duration} disabled />
                </div>
            </div>
        </div>
        <div className="card-middle">
            <div className="card-middle-top"><input type="text" name='position' value={experience.position} className={"position"} disabled />
                <input type="text" className='company-name' name='company' value={experience.company} disabled /> </div>
            <div className="card-middle-bottom">
                <ul>
                    {experience.bulletPoints.map((bulletPoint, index) => {
                        return <BulletPoint key={index} value={bulletPoint.value} />
                    })}
                </ul>
            </div>
        </div>
        <div className="card-right">
        </div>
    </div>)
}

export default Card;