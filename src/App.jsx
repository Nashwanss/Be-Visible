

import { createContext, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import { BrowserRouter } from 'react-router-dom';



import "./App.css";
import Layout from "./Pages/Layout/Layout";
import Filter from "./Pages/Layout/Components/Window/Components/Filter/Filter";
import MyProfile from "./Pages/Layout/Components/Window/Components/MyProfile/MyProfile";
import CoachManager from "./Pages/Layout/Components/Window/Components/CoachManager/CoachManager";
import Login from "./Pages/LogIn/LogIn";
import Register from "./Pages/Register/Register";


export const UserSession = createContext();


// const lightTheme = {
//   background: "#f5f5f5",
//   text: "red",
// };
// const darkTheme = {
//   background: "gray",
//   text: "white",
// };


// const themes = {
//   light: lightTheme,
//   dark: darkTheme,
// };

const App = () => {

  const [userData, setUserData] = useState({ id: "", username: "", email: "", role: "", token: "", isLoggedIn: false });

  useEffect(() => {
    console.log(userData);
  },[userData]);

  const getJWTfromLocalStorage = async () => {
    try {
      let data = JSON.parse(localStorage.getItem("token")) // get token from local storage
      if (data) {
        setUserData({ isLoggedIn: true, id: data.id, username: data.username, email: data.email, role: data.role, token: data.token })
      }
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getJWTfromLocalStorage()
  }, [])
  useEffect(() => {
    console.log(userData);
  }, [userData]);

  let userDataContext = { userData: userData, setUserData: setUserData };
  return (

    <UserSession.Provider value={userDataContext} >
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={userData.isLoggedIn ? <Navigate replace to="/dashboard" /> : <Navigate replace to="/login" />} />
          <Route path="login" element={userData.isLoggedIn ? <Navigate replace to="/dashboard" /> : <Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={!userData.isLoggedIn ? <Navigate replace to="/login" /> : <Layout iAm={userData.role} />} >
            <Route path="filter" element={<Filter />} />
            <Route path="myprofile" element={<MyProfile />} />
            <Route path="coachmanager" element={<CoachManager />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </UserSession.Provider>
  );
}

{/* <Route index element={isLoggedIn ? <Navigate replace to="/dashboard" /> : <Navigate replace to="/login" />} />
<Route path="login" element={isLoggedIn ? <Navigate replace to="/dashboard" /> : <Layout whatIs={"login"} />} />
<Route path="dashboard" element={!isLoggedIn ? <Navigate replace to="/login" /> : <Layout whatIs={"dashboard"} />} > */}






export default App;
