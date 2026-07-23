import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CareerMentor from "./pages/CareerMentor";
import StudyPlanner from "./pages/StudyPlanner";
import AskAI from "./pages/AskAI";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<CareerMentor />} />
        <Route path="/study" element={<StudyPlanner />} />
        <Route path="/ask-ai" element={<AskAI />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;