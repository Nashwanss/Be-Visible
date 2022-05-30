import { useState } from 'react';

import { Section } from '../../../Sections/Sections'




const UserInfo = () => {
    const [OTWBtnClass, setOTWBtnClass] = useState('btn btn-var')

    const [userInfo] = useState({ name: "Name", field: "Position", location: "Brussels", image: "" })

    return <Section cname={`user-info`}>
        <div className="user-info-left">
            <div className="user-info-pic" style={{ backgroundImage: `url(${userInfo.image})` }}>
            </div>
        </div>
        <div className="user-info-right">
            <div className="user-info-right-top">
                <div className="user-info-right-top-left">
                </div>
                <div className="user-info-right-top-middle">
                    <input type="text" className='name' name='name' disabled value={userInfo.name} />
                    <input type="text" className='field' name='field' disabled value={userInfo.field} />
                    <input type="text" className='location' name='location' disabled value={userInfo.location} />
                </div>
                <div className="user-info-right-top-right">
                </div>
            </div>
            <div className="user-info-right-bottom">
                <button className={OTWBtnClass} id="otw" >Open to work</button>
                <button className='btn'> {"< Promotion />"} </button>
            </div>
        </div>
    </Section>;
}

export default UserInfo;