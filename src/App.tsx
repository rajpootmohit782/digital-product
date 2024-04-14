import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Homepage from "./components/Homepage.jsx";
import Marketing from "./components/Marketing.jsx";
import Trusted from "./components/Trusted.jsx";
import Review from "./components/Review.jsx";
import Design from "./components/Design.jsx";
import FrequentQuestions from "./components/FrequentQuestions.jsx";
import Team from "./components/Team.jsx";
import App1 from "./components/Resume/App1.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/trusted" element={<Trusted />} />
        <Route path="/review" element={<Review />} />
        <Route path="/design" element={<Design />} />
        <Route path="/frequent-questions" element={<FrequentQuestions />} />
        <Route path="/app" element={<App />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
