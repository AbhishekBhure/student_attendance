import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./FontAwesome";
import CheckIn from "./components/CheckIn";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/checkin" element={<CheckIn />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
