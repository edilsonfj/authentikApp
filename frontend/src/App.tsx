import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Register, Profile } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="*" element={<h1>404 - Page not fould</h1>} />
      </Routes>
    </Router>
  )
};

export default App
