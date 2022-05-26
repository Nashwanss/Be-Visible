import { Routes, Route } from "react-router";
import { BrowserRouter } from 'react-router-dom';



import "../src/Styles/App.css";
import Layout from "./Pages/Layout/Layout";
import Filter from "./Pages/Layout/Components/Window/Components/Filter/Filter";
import MyProfile from "./Pages/Layout/Components/Window/Components/MyProfile/MyProfile";
import CoachManager from "./Pages/Layout/Components/Window/Components/CoachManager/CoachManager";
import Login from "./Pages/LogIn/LogIn";
import Register from "./Pages/Register/Rergister";




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Login />} />
        <Route path="register" index element={<Register />} />
        <Route path="dashboard" element={<Layout iAm="learner" />} >
          <Route path="filter" element={<Filter />} />
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="coachmanager" element={<CoachManager />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;


