import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import "../src/Styles/App.css";
import Login from "./Pages/LogIn/LogIn";




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Login iAm="learner"/>} />
      </Routes>
    </Router>
  );
}

export default App;
