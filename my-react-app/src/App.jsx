import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import BjorgDay from "./pages/BjorgDay";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/bjorg" replace />} />
        <Route path="/bjorg" element={<BjorgDay />} />
      </Routes>
    </Router>
  );
}

export default App;
