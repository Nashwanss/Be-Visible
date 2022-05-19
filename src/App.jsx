import { BrowserRouter as Router , Routes , Route} from "react-router-dom";



import "../src/Styles/App.css";
import Dashboard from "./Pages/Dashboard";


export default function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" index element={<Dashboard />} />
        </Routes>
    </Router>
  );
}
