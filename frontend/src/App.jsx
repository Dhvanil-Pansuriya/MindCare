import { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./auth/LoginPage";
import SignupPage from "./auth/SignUpPage";
import AssessmentPage from "./pages/user/AssessmentPage";
import ResultsPage from "./pages/user/ResultsPage";
import TestApi from "./utils/TestApi";

export const AuthContext = createContext();

function App() {
  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken"));

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken }}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={authToken ? <HomePage /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/assessment" element={<AssessmentPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/testapi" element={<TestApi />} />

        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
