import './App.css';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const handleSum = () => {
    setCounter(counter + 1);
  }

  const handleRest = () => {
    setCounter(counter - 1);
  }

  const handleSumByNumber = (number) => {
    setCounter(counter + number);
  }

  return (
    <div className="App">
      { counter }

      <div>
        <Button text="-" setClick={handleRest} />
        <Button text="+" setClick={handleSum} />
        <Button text="+5" setClick={() => handleSumByNumber(5)} />
      </div>
    </div>
  );
}

export default App;
