import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Register, Profile, Notfound } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  )
};

export default App
