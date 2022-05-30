import UserInfo from './Components/UserInfo/UserInfo'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience';
import Education from './Components/Education/Education';
import Skills from './Components/Skills/Skills';
import Badges from './Components/Badges/Badges';
import Projects from './Components/Projects/Projects';
import Languages from './Components/Languages/Languages';

import Comments from './Components/Comments/Comments';





const Profile = () => {
    return <>
        <UserInfo />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Badges />
        <Projects />
        <Languages />
        <Comments />
    </>;
}

export default Profile;
