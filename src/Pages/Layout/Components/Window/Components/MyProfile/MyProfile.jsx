import UserInfo from './Components/UserInfo/UserInfo'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience';
import Education from './Components/Education/Education';
import Skills from './Components/Skills/Skills';
import Badges from './Components/Badges/Badges';
import Projects from './Components/Projects/Projects';


import './MyProfile.css';



const MyProfile = () => {
    return <>
        <UserInfo />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Badges />
        <Projects />
    </>;
}

export default MyProfile;


