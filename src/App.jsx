import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import "../src/Styles/App.css";
import Layout from "./Layout/Layout";




export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Layout whatIs="Dashboard" />} />
      </Routes>
    </Router>
  );
}
