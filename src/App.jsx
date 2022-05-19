import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import "../src/Styles/App.css";
import Layout from "./Pages/Layout/Layout";




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Layout whatIs="Dashboard" iAm="learner"/>} />
      </Routes>
    </Router>
  );
}

export default App;
