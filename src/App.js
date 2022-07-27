import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./screens/Auth/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
