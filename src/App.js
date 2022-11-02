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
            <Link to="/BTCN05_Apply-frontend-libraries_19120576/">Home</Link>
          </li>
          <li>
            <Link to="/BTCN05_Apply-frontend-libraries_19120576/sign-up">
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/BTCN05_Apply-frontend-libraries_19120576/"
          element={<HomePage />}
        ></Route>
        <Route
          path="/BTCN05_Apply-frontend-libraries_19120576/sign-up"
          element={<SignUpPage />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
