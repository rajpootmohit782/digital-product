import { useState } from 'react';
import Header from './components/Header.jsx';
import Homepage from './components/Homepage.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Homepage />
    </>
  );
}

export default App;
