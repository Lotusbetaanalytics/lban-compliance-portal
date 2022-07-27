import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Testing } from "./components";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/testing" exact element={<Testing />} />
          
        </Routes>
      </Router>
    </>
  )
}

export default App;
