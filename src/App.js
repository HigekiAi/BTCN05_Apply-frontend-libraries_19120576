import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/Home";
import SignUpPage from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <nav>
        <ul className="nav-ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/sign-up" element={<SignUpPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
