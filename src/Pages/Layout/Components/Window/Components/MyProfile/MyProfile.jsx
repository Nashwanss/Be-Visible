import { useContext, useEffect, useState } from 'react';

import UserInfo from './Components/UserInfo/UserInfo'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience';
import Education from './Components/Education/Education';
import Skills from './Components/Skills/Skills';
import Badges from './Components/Badges/Badges';
import Projects from './Components/Projects/Projects';
import Languages from './Components/Languages/Languages';

import Comments from './Components/Comments/Comments';


import './MyProfile.css';


// import userContext
import { UserSession } from '../../../../../../App';


const MyProfile = () => {

    const userDataContext = useContext(UserSession);
    const userData = userDataContext.userData;

    const [profile, setProfile] = useState({ certifications: [], contact: { CV: "", GitHub: "", LinkedIn: "", email: "", phone: "" }, education: [{ bulletpoints: ["New Bullet Point"], data: "2022-2022", degree: "degree", image: "", university: "", _id: "" }], experience: [{ bulletpoints: ["New Bullet Point"], data: "2022-2022", position: "Position", image: "", company: "", _id: "" }], id_user: "", languages: [], projects: [], skills: [], userinfo: { location: "", name: "", otw: false, position: "Position", profile_pic: "" }, _id: "", _v: 0, about: { content: "" } });

    const getProfile = async () => {
        try {
            const res = await fetch(`https://bevisible-1.herokuapp.com/api/users/${userData.id}/profile/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': userData.token
                },
            });
            const data = await res.json();
            setProfile(data.profile);
            console.log(data.profile)
            return data;
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getProfile()
    }, [])

    const modifyProfile = async (section) => {
        try {
            const res = await fetch(`https://bevisible-1.herokuapp.com/api/users/${userData.id}/profile/edit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': userData.token
                },
                body: JSON.stringify({ section: section.section, content: section.content })
            });
            const data = await res.json();
            return data;
        }
        catch (err) {
            console.log(err);
        }
    }

    return <>
        <UserInfo profile={profile} modifyProfile={modifyProfile} />
        <About profile={profile} modifyProfile={modifyProfile} />
        <Experience profile={profile} />
        <Education profile={profile} />
        <Skills profile={profile} />
        <Badges profile={profile} />
        <Projects profile={profile} />
        <Languages profile={profile} />
        <Comments profile={profile} />
    </>;
}

export default MyProfile;


