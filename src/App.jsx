import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import "../src/Styles/App.css";
import Login from "./Pages/LogIn/LogIn";
import Layout from "./Pages/Layout/Layout";






const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Login />} />
        <Route path="/dashboard" element={<Layout iAm="learner"/>} />
      </Routes>
    </Router>
  );
}

export default App;


