import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<h1>Register</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="*" element={<h1>404 - Page not fould</h1>} />
      </Routes>
    </Router>
  )
};

export default App
