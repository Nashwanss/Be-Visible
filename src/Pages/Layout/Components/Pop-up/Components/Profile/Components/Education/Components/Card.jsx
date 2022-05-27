import { useState } from "react"




const BulletPoint = ({ value }) => {
    const [bulletValue] = useState(value)

    return <li><input type="text" value={bulletValue} disabled /></li>
}

const Card = ({ education }) => {
    return (<div className="card">
        <div className="card-left">
            <div className="card-left-top">
                <div className="job-image" style={{ backgroundImage: `url(${education.image})` }}>
                </div>
            </div>
            <div className="card-left-bottom">
                <div className="duration">
                    <input type="text" name="duration" value={education.duration} disabled />
                </div>
            </div>
        </div>
        <div className="card-middle">
            <div className="card-middle-top"><input type="text" name='degree' value={education.degree} className={"degree"} disabled />
                <input type="text" className='university-name' name='university' value={education.university} disabled /> </div>
            <div className="card-middle-bottom">
                <ul>
                    {education.bulletPoints.map((bulletPoint, index) => {
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