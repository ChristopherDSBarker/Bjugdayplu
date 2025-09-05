import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BjorgDay from "./pages/BjorgDay";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/bjorg" element={<BjorgDay />} />
      </Routes>
    </Router>
  );
}

export default App;
