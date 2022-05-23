import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import "../src/Styles/App.css";
import Login from "./Pages/LogIn/LogIn";
import Register from "./Pages/Register/Rergister";






const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Register iAm="learner"/>} />
      </Routes>
    </Router>
  );
}

export default App;
