import { useState } from "react";
import Header from "./components/Header.jsx";
import Homepage from "./components/Homepage.jsx";
import Footer from "./components/Footer.jsx";
import Marketing from "./components/Marketing.jsx";
import Trusted from "./components/Trusted.jsx";
import Review from "./components/Review.jsx";
import Design from "./components/Design.jsx";
import FrequentQuestions from "./components/FrequentQuestions.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Homepage />
      {/* <Img /> */}
      <Marketing />
      <Trusted />
      <Review />
      <Design />
      <FrequentQuestions />
      <Footer />
    </>
  );
}

export default App;
